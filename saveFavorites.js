

function addToFavorites(product) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.some(fav => fav.id === product.id)) {
        alert("This product is already in your favorites!")
        return;
    }

    favorites.push(product)

    localStorage.setItem("favorites", JSON.stringify(favorites))

    alert("Product added to favorites!")
}

function handleFavoriteButtonClick(productId) {
    const product = products.find(p => p.id === productId)
    if (!product) {
        console.error("Product not found!")
        return;
    }
    addToFavorites(product)
}
