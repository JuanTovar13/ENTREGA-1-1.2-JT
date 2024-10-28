window.onload = function() {
   
    const fullName = localStorage.getItem('fullName');
    const email = localStorage.getItem('email');
    const profileImage = localStorage.getItem('profileImage') || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

   
    document.querySelector('.details p strong').textContent = "User: " + fullName; 
    document.querySelector('.details p:nth-child(2)').textContent = "E-mail: " + email;

 
    const profileImg = document.getElementById('profile-img');
    if (profileImage) {
        profileImg.src = profileImage; 
    }
};

document.getElementById('upload-avatar').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            
            document.getElementById('profile-img').src = e.target.result;

            
            localStorage.setItem('profileImage', e.target.result);
        };
        reader.readAsDataURL(file);
    }
});
