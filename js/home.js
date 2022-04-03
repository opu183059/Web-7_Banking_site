document.getElementById('loginbtn').addEventListener('click',function(){
    const emailField = document.getElementById('userid');
    const usermail= emailField.value;
    
    const passwordField = document.getElementById('pass');
    const userpass= passwordField.value;

    if( usermail== 'abc@gmail.com' && userpass == 'abc'){
        window.location.href = 'banking.html';
    }
})