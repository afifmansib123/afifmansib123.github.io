// define data in JSON array
var products = [
    {
        name: "Samsung TV",
        quantity: 1,
        ppu: 22000
    },
    {
        name: "Fan",
        quantity: 2,
        ppu: 2000
    },
    {
        name: "iPhone",
        quantity: 1,
        ppu: 50000
    },
    {
        name: "CPU",
        quantity: 1,
        ppu: 20000
    }
]

function loadData() {
    let elem = document.getElementById("myName")
    elem.innerHTML = "Afif Mansib C"

    let productList = document.getElementById("productList")

    for (let p in products) {
        let row = document.createElement("tr")
        let productName = document.createElement("td")
        productName.innerHTML = products[p].name

        let quantity = document.createElement("td")
        quantity.innerHTML = products[p].quantity
        quantity.classList.add("text-right")

        let ppu = document.createElement("td")
        ppu.innerHTML = products[p].ppu
        ppu.classList.add("text-right")

        let total = document.createElement("td")
        total.innerHTML = products[p].ppu * products[p].quantity 
        total.classList.add("text-right")

        row.appendChild(productName)
        row.appendChild(quantity)
        row.appendChild(ppu)
        row.appendChild(total)
        productList.appendChild(row)
    }


}