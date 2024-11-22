const userData = {
    email: localStorage.getItem("loggedInEmail"),
    password: localStorage.getItem("loggedInPassword"),
}

function handleChangePassword(event) {
    event.preventDefault()

    const currentPassword = document.getElementById("current-password").value
    const newPassword = document.getElementById("new-password").value
    const confirmPassword = document.getElementById("confirm-password").value

    if (!currentPassword || !newPassword || !confirmPassword) {
        alert("All fields are required!")
        return
    }

    if (currentPassword !== userData.password) {
        alert("Current password is incorrect!")
        return
    }

    if (newPassword !== confirmPassword) {
        alert("New passwords do not match!")
        return
    }

    if (newPassword === currentPassword) {
        alert("New password cannot be the same as the current password!")
        return
    }

    userData.password = newPassword
    localStorage.setItem("loggedInPassword", newPassword)
    alert("Password changed successfully!")
    document.querySelector("form").reset()
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form")
    form.addEventListener("submit", handleChangePassword)
})
