function validate() {
  var username = getElementById('username').value;
  var password = getElementById('password').value;

    if (email == 'Email' || password == 'Password') {
      document.getElementById('result').innerHTML = 'All fields required';
      return false;
    }  else
      if (password.length < 6){
      document.getElementById('result').innerHTML = alert('Password must be at least 6 characters long');
    } else {
      return true;
    }
};
if(validate = true) {
    var submit = '../html/p2.html';
}

document.getElementById('signIn').onclick = validate();