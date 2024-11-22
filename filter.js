let products = []

async function loadProducts() {
    const response = await fetch("https://raw.githubusercontent.com/JuanTovar13/json/refs/heads/main/data.json")
    const data = await response.json()
    products = data.map((product, index) => ({ ...product, originalIndex: index }))
    displayProducts(products)
}

function displayProducts(filteredProducts) {
    const itemList = document.getElementById("item-list")
    itemList.innerHTML = ""
    filteredProducts.forEach(product => {
        const productObj = new Product(product.id,product.name,product.title,product.type,product.price,product.resolution,product.zoom,product.distance,product.ram,product.image,product.processor,product.system,product.channels,product.input,product.size,product.category)

        itemList.innerHTML += productObj.htmlCard(product.originalIndex)
    });
}

function renderProducts(list) {
    let container = document.getElementById("item-list")
    container.innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        let product = list[i]
        container.innerHTML += product.htmlCard(i)
    }
}

function filterProducts() {
    const searchQuery = document.querySelector(".search-bar").value.toLowerCase()

    const filtered = products.filter(product => {
        const name = product.title ? product.title.toLowerCase() : ""
        const category = product.type ? product.type.toLowerCase() : ""

        return name.includes(searchQuery) || category.includes(searchQuery)
    })

    displayProducts(filtered)
}

document.querySelector(".search-bar").addEventListener("input", filterProducts)

loadProducts()
