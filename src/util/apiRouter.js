const post = (endPoint, body) =>{
  return fetch(endPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}




export const sendMail = body => {
  return post('/api/sendMail', body)
  };
  