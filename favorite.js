class Favorite {
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


    htmlCard(fav){
        return `
        <div class="item" onclick ="productSelected(${fav})">
             
            <img src="${this.image}" alt="Item Image"></a>
            <h3>${this.title}</h3>
            <p>${this.type}</p>
            <button class="remove-button">Delete from Favorites</button>
        </div>
        `
    }

}