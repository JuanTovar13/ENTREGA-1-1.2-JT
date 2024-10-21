class Product {
    constructor(id, name, title, type, price, resolution, zoom, distance, ram, image, processor, system, channels, input, size, category){
        this.id = id
        this.name = name
        this.title = title
        this.type = type
        this.price = price
        this.resolution = resolution
        this.zoom = zoom
        this.distance = distance
        this.ram = ram
        this.image = image
        this.processor = processor
        this.system = system
        this.channels = channels 
        this.input = input
        this.size = size
        this.category = category 
        

    }
}

const params = new URLSearchParams(window.location.search);
const nameFromUrl = params.get("name");

function getProduct() {
    for (let i = 0; i < data.length; i++) {
        let map = data[i]
        let title = map["title"]
        if (title === nameFromUrl) {
            let product = new Product(map["id"], map["name"], map["title"], map["type"], map["price"], map["resolution"], map["zoom"], map["distance"], map["ram"], map["image"], map["processor"], map["system"], map["channels"], map["input"], map["size"], map["category"]);
            return product
        }
    }
}

function renderProduct() {
    let product = getProduct();

    if (product.title) {
        let titleH1 = document.getElementById("title")
        titleH1.innerHTML = product.title
    }

    if (product.description) {
        let descriptionH2 = document.getElementById("description")
        descriptionH2.innerHTML = product.description
    }

    if (product.price) {
        let priceP = document.getElementById("price")
        priceP.innerHTML = "$" + product.price
    }

    if (product.resolution) {
        let resolutionP = document.getElementById("resolution")
        resolutionP.innerHTML = product.resolution
    }

    if (product.zoom) {
        let zoomP = document.getElementById("zoom")
        zoomP.innerHTML = product.zoom
    }

    if (product.distance) {
        let distanceP = document.getElementById("distance")
        distanceP.innerHTML = product.distance
    }

    if (product.ram) {
        let ramP = document.getElementById("ram")
        ramP.innerHTML = product.ram
    }

    if (product.input) {
        let inputP = document.getElementById("input")
        inputP.innerHTML = product.input
    }

    if (product.size) {
        let sizeP = document.getElementById("size")
        sizeP.innerHTML = product.size
    }

    if (product.channels) {
        let channelP = document.getElementById("channels")
        channelP.innerHTML = product.channels
    }

    if (product.processor) {
        let processorP = document.getElementById("processor")
        processorP.innerHTML = product.processor
    }

    if (product.system) {
        let systemP = document.getElementById("system")
        systemP.innerHTML = product.system
    }

    if (product.image) {
        let mainImg = document.getElementById("main-img")
        mainImg.src = product.image
    }
}

renderProduct();


