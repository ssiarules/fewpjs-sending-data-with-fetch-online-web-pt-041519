// Add your code here
function submitData(userName, userEmail) {
  let data = {
    name: userName,
    email: userEmail
  }
    let configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch('http://localhost:3000/users', configObj)
     .then(function(response){
       return response.json()
     })
     .then(function(object){
       document.body.innerHTML = console.log(object["id"])
     })
     .catch(function(error) {
        document.body.innerHTML = error.message
     })

}
