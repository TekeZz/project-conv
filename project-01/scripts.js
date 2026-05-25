const setaButton = document.querySelector(".seta-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".value-input").value
    const currencyValueToCovert = document.getElementById ("toConvert")
    const currencyValueConverted = document.getElementById ("converted")
   

    const dolarToDay = 5.06

    const convertedValue = inputCurrencyValue / dolarToDay

    currencyValueToCovert.innerHTML = new Intl.NumberFormat ("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)
    
}

setaButton.addEventListener("click", convertValues)


    




