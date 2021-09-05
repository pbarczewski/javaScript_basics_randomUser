window.onload = function() {
    fetch(url)
    .then(respone => respone.json())
    .then(data => dataReady(data))
}

function dataReady(data) {
    var singleResult = data.results[0];
    var img = singleResult.picture.large;
    var fullName = singleResult.name.title + " " + singleResult.name.first + " " 
    + singleResult.name.last;
    var username = singleResult.login.username;
    var userEmail = singleResult.email
    var country = singleResult.location.timezone.description;
    document.getElementById("username").innerHTML = username;
    document.getElementById("full-name").innerHTML = fullName;
    document.getElementById("av-img").src = img;
    document.getElementById("email").innerHTML = userEmail; 
    document.getElementById("country").innerHTML = country; 
}

let url = "https://randomuser.me/api"