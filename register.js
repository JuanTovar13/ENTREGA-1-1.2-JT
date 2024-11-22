function register() {
    const fullName = document.getElementById("full-name").value.trim()
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()
    const confirmPassword = document.getElementById("confirm-password").value.trim()

    if (!fullName || !email || !password || !confirmPassword) {
        alert("All fields are required!")
        return
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!")
        return
    }

    if (localStorage.getItem(email)) {
        alert("An account with this email already exists!")
        return;
    }

    const userData = {
        fullName: fullName,
        email: email,
        password: password,
    };

    localStorage.setItem(email, JSON.stringify(userData))
    localStorage.setItem(fullName, JSON.stringify(userData))
    localStorage.setItem(password, JSON.stringify(userData))
    alert("Account created successfully!")

    window.location.href = "./login.html"
}
