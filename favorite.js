let favorites = [];

function addToFavorites(pos) {
    let product = products[pos];
    
    // Avoid adding the same product twice
    if (!favorites.includes(product)) {
        favorites.push(product);
    }
    
    renderFavorites();
}
function renderFavorites() {
    let container = document.querySelector(".favorites-list");
    container.innerHTML = "";  // Clear the current list before rendering
    
    for (let i = 0; i < favorites.length; i++) {
        let product = favorites[i];
        container.innerHTML += `
            <div class="item">
                <a href="./productdetails.html?name=${product.title}">
                    <img src="${product.image}" alt="Item Image">
                </a>
                <h3>${product.title}</h3>
                <p>${product.name}</p>
                <button class="remove-button" onclick="removeFromFavorites(${i})">Delete from Favorites</button>
            </div>
        `;
    }
}
function removeFromFavorites(index) {
    favorites.splice(index, 1);  // Remove the selected product from favorites
    renderFavorites();           // Re-render the favorites list
}

