const params = new URLSearchParams (window.location.search)
const nameFromUrl = params.get("name")

function getProduct() {
    for(let i = 0; i < data.length; i++){
        let map = data[i]
        let title = map ["title"]
        if (title === nameFromUrl) {
            let product = new Product(map["id"], map["name"], map["title"], map["type"], map["price"], map["resolution"], map["zoom"], map["distance"], map[ "ram"], map[ "image"], map[ "processor"], map[ "system"], map[ "channels"], map[ "input"], map[ "size"], map[ "category"])
            return product
        }
    }
}

getProduct()

function renderProduct () {
    let product = getProduct()

    let titleH1 = document.getElementById("title")
    titleH1.innerHTML = product.title

    let descriptionH2 = document.getElementById("description")
    descriptionH2.innerHTML = product.description

    let priceP = document.getElementById("price")
    priceP.innerHTML = "$" + product.price

    let resolutionP = document.getElementById("resolution")
    resolutionP.innerHTML = product.resolution

    let zoomP = document.getElementById("zoom")
    zoomP.innerHTML = product.zoom

    let distanceP = document.getElementById("distance")
    distanceP.innerHTML = product.distance

    let ramP = document.getElementById("ram")
    ramP.innerHTML = product.ram

    let inputP = document.getElementById("input")
    inputP.innerHTML = product.input

    let sizeP = document.getElementById("size")
    sizeP.innerHTML = product.size
    
    let channelP = document.getElementById("channels")
    channelP.innerHTML = product.channels

    let processorP = document.getElementById("processor")
    processorP.innerHTML = product.processor
    
    let systemP = document.getElementById("system")
    systemP.innerHTML = product.system

    


    let mainImg = document.getElementById ("main-img")
    mainImg.src = product.images
}



renderProduct()