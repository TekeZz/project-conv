const setaButton = document.querySelector(".seta-button")
const currencySelect = document.querySelector(".select-value-to-converted")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".value-input").value
    const currencyValueToCovert = document.getElementById ("toConvert")
    const currencyValueConverted = document.getElementById ("converted")
   
    console.log (currencySelect.value)
    const dolarToDay = 5.06
    const euroToDay = 5.86

    

    if(currencySelect.value == "dolar"){
         currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToDay)
    }

    if(currencySelect.value == "euro"){
      currencyValueConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToDay)
    }

    currencyValueToCovert.innerHTML = new Intl.NumberFormat ("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    
}

currencySelect.addEventListener("change", convertValues)
setaButton.addEventListener("click", convertValues)


    




