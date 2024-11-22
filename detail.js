const params = new URLSearchParams(window.location.search)
const nameFromUrl = params.get("name")

async function fetchData() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/JuanTovar13/json/refs/heads/main/data.json");
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data:", error)
        return []
    }
}

async function getProduct() {
    const data = await fetchData()
    for (const item of data) {
        if (item.title === nameFromUrl) {
            return item
        }
    }
    return null; 
}

async function renderProduct() {
    const product = await getProduct()

    if (!product) {
        console.error("Product not found!")
        return
    }

    const elements = [
        { id: "title", value: product.title },
        { id: "description", value: product.description },
        { id: "price", value: product.price ? `$${product.price}` : null },
        { id: "resolution", value: product.resolution },
        { id: "zoom", value: product.zoom },
        { id: "distance", value: product.distance },
        { id: "ram", value: product.ram },
        { id: "input", value: product.input },
        { id: "size", value: product.size },
        { id: "channels", value: product.channels },
        { id: "processor", value: product.processor },
        { id: "system", value: product.system }
    ];

    elements.forEach(({ id, value }) => {
        const element = document.getElementById(id)
        if (element && value) {
            element.innerHTML = value
        } else if (element) {
            element.style.display = "none"
        }
    });

    if (product.image) {
        const mainImg = document.getElementById("main-img")
        mainImg.src = product.image
    }
}

function addToFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []
    const currentProductTitle = document.getElementById("title").innerText

    if (!favorites.some(product => product.title === currentProductTitle)) {
        favorites.push({ title: currentProductTitle })
        localStorage.setItem("favorites", JSON.stringify(favorites))
        alert("Product added to favorites!")
    } else {
        alert("Product is already in favorites.")
    }
}

renderProduct()
