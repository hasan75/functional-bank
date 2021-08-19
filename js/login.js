document.getElementById('login-submit').addEventListener('click',function(){
    //console.log('Clicked')
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value;
    //console.log(userEmail)
    //get user password
    const passField = document.getElementById('user-pass')
    const userPass = passField.value;

    if(userEmail == 'sontan@baap.com'&& userPass == 'secret'){
        //console.log('valid user')
        window.location.href = 'banking.html'
    }
})