var usernameArr = [];  //store usernames
var passwordArr = [];  //store passwords
var usernameInput = document.getElementById(String('newUsername')).value; //calls 
var passwordInput = document.getElementById('newPassword').value; //for
var rePasswordInput = document.getElementById('reNewPassword').value; //input

function insert() {
    usernameArr.push( usernameInput );
    console.log(usernameArr);
    if( passwordInput === rePasswordInput || passwordInput.length >= 6) {
        passwordArr.push( passwordInput );
        console.log(passwordArr);
    } else {
        alert('passwords don\'t match/aren\'t long enough');
    }
    return false;
};