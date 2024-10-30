function register() {
    let fullName = document.getElementById("full-name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirm-password").value
    
   

  
    localStorage.setItem('userEmail', email)
    localStorage.setItem('userPassword', password)
    localStorage.setItem('userName', fullName)
    

    
    if (password === confirmPassword) {
        window.location = "./mainpage.html"
    } else {
        alert("Las contraseñas no coinciden")
        return
    }
    window.location.href = "login.html";
}

