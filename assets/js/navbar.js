document.addEventListener("DOMContentLoaded", function () {
    fetch("../navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data

            // Currencies

            // List
            fetch("../data/currencies.json")
            .then(response => response.json())
            .then(currencies => {
                const currenciesContainer = document.getElementById("currencies-container")

                currencies.forEach(element => {
                    const currencyA = document.createElement("a")
                    currencyA.textContent = element
                    currencyA.setAttribute("data-currency", element)

                    currenciesContainer.appendChild(currencyA)
            })

            // Handlers
            const currencyButton = document.getElementById("currency-button")
            const currencyOptions = document.querySelectorAll(".currency-options a")

            // Load saved currency on page load
            const savedCurrency = localStorage.getItem("selectedCurrency")

            if (!savedCurrency)
            {
                localStorage.setItem("selectedCurrency", "PLN")
            }

            if (savedCurrency) 
            {
                currencyButton.textContent = savedCurrency
            }

            // Save and Set Currency
            currencyOptions.forEach(option => {
                option.addEventListener("click", function(element)
                {
                    element.preventDefault()

                    const selectedCurrency = this.getAttribute("data-currency")
                    currencyButton.textContent = selectedCurrency

                    localStorage.setItem("selectedCurrency", selectedCurrency)
                })
            })
        })
    })
    .catch(error => console.error("Error loading navbar:", error))
})