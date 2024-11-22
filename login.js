function login() {
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()

    if (!email || !password) {
        alert("Both email and password are required!")
        return
    }

    const storedUser = localStorage.getItem(email)

    if (!storedUser) {
        alert("No account found with this email!")
        return
    }

    const userData = JSON.parse(storedUser)

    if (userData.password === password) {
        localStorage.setItem("loggedInUser", email)
        localStorage.setItem("loggedInPassword", password)
        alert("Login successful!")
        window.location.href = "./mainpage.html" 
    } else {
        alert("Incorrect password!")
    }
}
