function register() {
    let fullName = document.getElementById("full-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

  
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('profileImage', ''); 

    
    window.location.href = "mainpage.html";
}
