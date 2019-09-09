var loginInfo = [];  //store individual login arr

function insert() {
    var username = document.getElementById('newUsername').value(); //calls 
    var password = document.getElementById('newPassword').value(); //for
    var rePassword = document.getElementById('reNewPassword').value(); //input
    var loginCheck = [
        username,
        password
    ]; //creates individual arr
    
    //crosschecks username with preexisting usernames and legitimizes password 
    for( i = 0; i < loginInfo.length; i++ ) {
        while( loginCheck[0] != loginInfo[i][0] ) {
            if( password === rePassword && password.length > 5 ) {
                loginInfo.push( loginCheck );
                console.log(loginInfo);
                
            } else {
                alert('username taken / passwords don\'t match / too short ')
                document.getElementById('form').reset();
            };
        };
    };
    return false;
};
