acc = JSON.parse('[{"user": "Simon","pass": "Simon"}, {"user": "SiewYou","pass": "SiewYou"},{"user": "Eddie","pass": "Eddie"},{"user": "QinLong","pass": "QinLong"}]');


function login(){
    var user = document.getElementById('user');
    var pass = document.getElementById('pass');

    var login = false;
    for(i=0;i<acc.length;i++){
        if (user.value.toUpperCase() == acc[i].user.toUpperCase() && pass.value == acc[i].pass ){
            localStorage.setItem('user',acc[i].user)
            login = true;
            window.location.href = './index.html';
        }
    }
    if (!login){
        alert('Username or Password is wrong!');
    }
}