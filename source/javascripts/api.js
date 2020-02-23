fetch('https://www.premierfooty.club/api/v1/nufc', {
  headers: {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin':'*'
  }
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    var count = JSON.parse(data);
    console.log(data)
  });
