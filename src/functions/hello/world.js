import { message, json } from "../../shared/response";

async function sendDataToUser(status, statusString, data) {
  const msg = await message(statusString, data);
  return await json(msg, status);
}

export const handler = async (event, context) => {
  try {
    return sendDataToUser(200, "success", "Olá pequeno gafanhoto!");
  } catch (error) {
    return await sendDataToUser(500, "error", error);
  }
};
