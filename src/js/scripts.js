function validate() {
  var email = getElementById('email').value;
  var password = getElementById('password').value;

    if (email == '' || password == '') {
      document.getElementById('result').innerHTML = 'All fields required';
      return false;
    }  else
      if (password.length < 6){
      document.getElementById('result').innerHTML = 'Password muct be at least 6 characters long';
    } else {
      return true;
    }
};
if(validate = true) {
    var submit = '../html/p2.html';
}
