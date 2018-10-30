function openUser() {
  var usernameInput = document.getElementById('username');
  var usernameFillElement = document.getElementById('usernameFill');
  var followersElement = document.getElementById('followers')
  function dumpResponse() {
    console.log(request);
    if(request.readyState === 4) {
      var responseObj = JSON.parse(request.responseText);
      var followers = responseObj.followers;
      console.log(this.responseText);
      console.log(responseObj.name + " has " + responseObj.public_repos + " public repositories!");
      //Changing the innerHTML of id="followers"
      followersElement.innerHTML = followers.toString();
    }
    else {
      console.log(arguments, request);
    }
  }
  var user = usernameInput.value;
  usernameFillElement.innerHTML = user;
  var request = new XMLHttpRequest();
  request.onreadystatechange = dumpResponse;
  request.open('GET', 'https://api.github.com/users/' + user);
  request.send()
}

// openUser();
