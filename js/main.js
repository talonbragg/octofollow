function openUser() {
  var usernameInput = document.getElementById('username');
  function dumpResponse() {
    console.log(request);
    if(request.readyState === 4) {
      var responseObj = JSON.parse(request.responseText);
      console.log(this.responseText);
      console.log(responseObj.name + " has " + responseObj.public_repos + " public repositories!");
    }
    else {
      console.log(arguments, request);
    }
  }
  var user = usernameInput.value;
  var request = new XMLHttpRequest();
  request.onreadystatechange = dumpResponse;
  request.open('GET', 'https://api.github.com/users/' + user);
  request.send()
}

// openUser();
