function login(){
    let email = document.getElementById("email").value 
    let pass = document.getElementById("password").value 
    if(email !== "" && pass !== ""){
        if(email === "juanstovarm@gmail.com" && pass === "135218"){
            window.location = "./mainpage.html?name="
        } else {
            alert ("Correo o contraseña incorrectos")
        }

    } else {
        alert("Por favor complete los campos para continuar")
    }
}