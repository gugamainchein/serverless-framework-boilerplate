export function parseObjectToString (obj) {
  if (typeof obj == 'object') {
    return JSON.stringify(obj)
  } else {
    return obj
  }
}

export function parseStringToObject (str) {
  try {
    return JSON.parse(str)
  } catch (error) {
    return {}
  }
}

export function parseEvent (event) {
  try {
    return JSON.parse(event)
  } catch (error) {
    return event
  }
}

export function parseBody (event) {
  try {
    const body = event.body ? event.body : {}
    return JSON.parse(body)
  } catch (error) {
    return event
  }
}

export function parsePath (event) {
  try {
    const path = event.pathParameters ? event.pathParameters : {}
    // console.log(event.pathParameters)
    return path
  } catch (error) {
    return event
  }
}

export function parseQueryString (event) {
  try {
    const queryString = event.queryStringParameters
      ? event.queryStringParameters
      : {}
    return queryString
  } catch (error) {
    return event
  }
}

export function parseHeaders (event) {
  try {
    const headers = event.headers
      ? event.headers
      : {}
    return headers
  } catch (error) {
    return event
  }
}
