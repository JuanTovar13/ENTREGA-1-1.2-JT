function loadUserProfile() {
    const userName = localStorage.getItem("userName")
    const userEmail = localStorage.getItem("userEmail")

    if (userName && userEmail) {
        document.getElementById("username-display").textContent = userName
        document.getElementById("email-display").textContent = userEmail
        return
    }
}

function enableEdit() {
    const usernameDisplay = document.getElementById("username-display")
    const emailDisplay = document.getElementById("email-display")

    usernameDisplay.innerHTML = `<input type="text" id="username-edit" value="${usernameDisplay.textContent}" />`
    emailDisplay.innerHTML = `<input type="email" id="email-edit" value="${emailDisplay.textContent}" />`

    const editButton = document.getElementById("edit-profile")
    editButton.textContent = "Save Changes"
    editButton.onclick = saveProfileChanges
}

function saveProfileChanges() {
    const newUsername = document.getElementById("username-edit").value
    const newEmail = document.getElementById("email-edit").value

    if (!newUsername || !newEmail) {
        alert("Both fields are required.")
        return
    }

    localStorage.setItem("userName", newUsername)
    localStorage.setItem("userEmail", newEmail)

    document.getElementById("username-display").textContent = newUsername
    document.getElementById("email-display").textContent = newEmail

    const editButton = document.getElementById("edit-profile")
    editButton.textContent = "Edit Profile"
    editButton.onclick = enableEdit

    alert("Profile updated successfully!")
}

document.addEventListener("DOMContentLoaded", loadUserProfile)


