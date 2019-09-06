var usernameArr = [];  //store usernames
var passwordArr = [];  //store passwords
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');

function insert() = {
    usernameArr.push( usernameInput.value );
    passwordArr.push( passwordInput.value );
};