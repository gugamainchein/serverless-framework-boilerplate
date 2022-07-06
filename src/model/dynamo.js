import { DynamoDB } from "aws-sdk";
import { v4 } from "uuid";

const cli = new DynamoDB.DocumentClient({
  region: process.env.AWS_REGION_LOCATION,
});

export async function create(table, data) {
  data.id = v4();
  return await cli
    .put({
      TableName: table,
      Item: data,
    })
    .promise();
}

export async function readAll(table) {
  const params = {
    TableName: table,
  };

  const scanResults = { Items: [] };
  let items;

  do {
    items = await cli.scan(params).promise();
    items.Items.forEach((item) => scanResults.Items.push(item));
    params.ExclusiveStartKey = items.LastEvaluatedKey;
  } while (typeof items.LastEvaluatedKey !== "undefined");

  return scanResults;
}

export async function readOne(table, id) {
  return await cli
    .get({
      TableName: table,
      Key: {
        id: id,
      },
    })
    .promise();
}

export async function put(table, id, data) {
  return await cli
    .update({
      TableName: table,
      Key: {
        id: id,
      },
      AttributeUpdates: data,
    })
    .promise();
}

export async function deleteData(table, id) {
  return await cli
    .delete({
      TableName: table,
      Key: {
        id: id,
      },
    })
    .promise();
}
