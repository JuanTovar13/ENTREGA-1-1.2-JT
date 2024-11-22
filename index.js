

async function getProducts() {
        let response = await fetch("https://raw.githubusercontent.com/JuanTovar13/json/refs/heads/main/data.json")
        let data = await response.json()


        parseProducts(data)
    
}

function parseProducts(data) {
    for (let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["id"],map["category"].name, map["title"],map["type"],map["price"],map["resolution"] || null,map["zoom"] || null,map["distance"] || null,map["ram"] || null,map["image"],map["processor"] || null,map["system"] || null,map["channels"] || null,map["input"] || null,map["size"] || null,map["category"])
        products.push(product)
    }
    renderProducts(products)
}

function renderProducts(list) {
    let container = document.getElementById("item-list")
    container.innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        let product = list[i]
        container.innerHTML += product.htmlCard(i)
    }
}



function productSelected(pos) {
    let productSelected = products[pos]
    
    window.location.href = "./productdetails.html?name=" + encodeURIComponent(productSelected.title)
}


getProducts()