function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []
    const favoritesList = document.getElementById("favorites-list")

    favoritesList.innerHTML = ""

    
    fetch("https://raw.githubusercontent.com/JuanTovar13/json/refs/heads/main/data.json")
        .then(response => response.json())
        .then(data => {
            favorites.forEach(favorite => {
                
                const productData = data.find(item => item.title === favorite.title)
                if (productData) {
                    
                    const product = new Product(productData.id,productData.name,productData.title,productData.type,productData.price,productData.resolution,productData.zoom,productData.distance,productData.ram,productData.image,productData.processor,productData.system,productData.channels,productData.input,productData.size,productData.category)

                    const pos = data.indexOf(productData)
                    const favoriteCard = product.htmlCardfav(pos)

                    
                    favoritesList.innerHTML += favoriteCard
                }
            })

           
            const deleteButtons = document.querySelectorAll(".remove-button")
            deleteButtons.forEach((button, index) => {
                button.addEventListener("click", event => {
                    event.stopPropagation(); 
                    removeFromFavorites(favorites[index].title)
                })
            })
        })
        .catch(error => console.error("Error fetching product data:", error))
}

function removeFromFavorites(title) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || []
    favorites = favorites.filter(product => product.title !== title)
    localStorage.setItem("favorites", JSON.stringify(favorites))

    displayFavorites()
}

document.addEventListener("DOMContentLoaded", displayFavorites)
