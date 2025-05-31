fetch("https://github.com/Marcel46509/shop-school2/raw/refs/heads/main/assets/json/products.json")
.then(response => response.json())
.then(items => {
    const allContainer = document.getElementById("all-container")
    const bestSellersContainer = document.getElementById("best-sellers-container")

    items.forEach(element => {
        const itemDiv = document.createElement("div")
        itemDiv.className = "item"

        itemDiv.innerHTML = `
        <div class="item-image">
            <a class="item-image" href="${element.link}" rel="nofollow"><img src="../assets/images/${element.image}"/></a>
        </div>

        <div class="item-description">
            <h2>${element.name}</h2>
            <b>${element.price}</b>
        </div>
        `

        if (element.bestSeller && bestSellersContainer)
        {
            bestSellersContainer.appendChild(itemDiv)
        }
        else
        {
            const customContainer = document.getElementById(element.type + "-container")

            if (customContainer)
            {
                customContainer.appendChild(itemDiv)
            }
            else if (allContainer)
            {
                allContainer.appendChild(itemDiv)
            }
        }
    })
})
.catch(error => console.error("Failed to load items:", error))