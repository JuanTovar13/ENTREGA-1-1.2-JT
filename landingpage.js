let products = []

function parseDataToProducts() {
    for(let i = 0 ; i < data.length; i++){
        let map = data[i]
        let product = new Land (map["id"], map["name"], map["title"], map["type"], map["price"], map["resolution"], map["zoom"], map["distance"], map[ "ram"], map[ "image"], map[ "processor"], map[ "system"], map[ "channels"], map[ "input"], map[ "size"], map[ "category"])
        products.push(product)
    }
}

function renderAllProducts () {
    let container = document.getElementById("items-list")
    for(let i = 6; i < products.length; i++){
        let product = products [i]
        container.innerHTML += product.htmlCard(i)
    }
}


parseDataToProducts()
renderAllProducts() 