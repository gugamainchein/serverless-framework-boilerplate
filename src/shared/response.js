'use strict'

export async function message (status, data) {
  return {
    status,
    data
  }
}

export async function json (body = {}, status = 200) {
  return {
    statusCode: status,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: body != null ? JSON.stringify(body.stack ? body.stack : body) : ''
  }
}
