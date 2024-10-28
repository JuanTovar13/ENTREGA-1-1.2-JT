
function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    
    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");
    let userName = localStorage.getItem("userName");

    if (email !== "" && pass !== "") {
        if (email === storedEmail && pass === storedPassword) {
            window.location = `./mainpage.html?name=${userName}`; 
        } else {
            alert("Correo o contraseña incorrectos");
            document.getElementById("password").value = ""; 
        }
    } else {
        alert("Por favor complete los campos para continuar");
    }
}
