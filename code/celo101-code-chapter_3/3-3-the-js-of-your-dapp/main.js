const products = [
  {
    name: "Giant BBQ",
    image: "https://i.imgur.com/yPreV19.png",
    description: `Grilled chicken, beef, fish, sausages, bacon, 
      vegetables served with chips.`,
    location: "Kimironko Market",
    owner: "0x32Be343B94f860124dC4fEe278FDCBD38C102D88",
    price: 3,
    sold: 27,
    index: 0,
  },
  {
    name: "BBQ Chicken",
    image: "https://i.imgur.com/NMEzoYb.png",
    description: `French fries and grilled chicken served with gacumbari 
      and avocados with cheese.`,
    location: "Afrika Fresh KG 541 St",
    owner: "0x3275B7F400cCdeBeDaf0D8A9a7C8C1aBE2d747Ea",
    price: 4,
    sold: 12,
    index: 1,
  },
  {
    name: "Beef burrito",
    image: "https://i.imgur.com/RNlv3S6.png",
    description: `Homemade tortilla with your choice of filling, cheese, 
      guacamole salsa with Mexican refried beans and rice.`,
    location: "Asili - KN 4 St",
    owner: "0x2EF48F32eB0AEB90778A2170a0558A941b72BFFb",
    price: 2,
    sold: 35,
    index: 2,
  },
  {
    name: "Barbecue Pizza",
    image: "https://i.imgur.com/fpiDeFd.png",
    description: `Barbecue Chicken Pizza: Chicken, gouda, pineapple, onions 
      and house-made BBQ sauce.`,
    location: "Kigali Hut KG 7 Ave",
    owner: "0x2EF48F32eB0AEB90778A2170a0558A941b72BFFb",
    price: 1,
    sold: 2,
    index: 3,
  },
]

const getBalance = function () {
  document.querySelector("#balance").textContent = 21
}

function renderProducts() {
  document.getElementById("marketplace").innerHTML = ""
  products.forEach((_product) => {
    const newDiv = document.createElement("div")
    newDiv.className = "col-md-4"
    newDiv.innerHTML = productTemplate(_product)
    document.getElementById("marketplace").appendChild(newDiv)
  })
}

function productTemplate(_product) {
  return `
    <div class="card mb-4">
      <img class="card-img-top" src="${_product.image}" alt="...">
      <div class="position-absolute top-0 end-0 bg-warning mt-4 px-2 py-1 rounded-start">
        ${_product.sold} Sold
      </div>
      <div class="card-body text-left p-4 position-relative">
        <div class="translate-middle-y position-absolute top-0">
        ${identiconTemplate(_product.owner)}
        </div>
        <h2 class="card-title fs-4 fw-bold mt-2">${_product.name}</h2>
        <p class="card-text mb-4" style="min-height: 82px">
          ${_product.description}             
        </p>
        <p class="card-text mt-4">
          <i class="bi bi-geo-alt-fill"></i>
          <span>${_product.location}</span>
        </p>
        <div class="d-grid gap-2">
          <a class="btn btn-lg btn-outline-dark buyBtn fs-6 p-3" id=${
            _product.index
          }>
            Buy for ${_product.price} cUSD
          </a>
        </div>
      </div>
    </div>
  `
}

function identiconTemplate(_address) {
  const icon = blockies
    .create({
      seed: _address,
      size: 8,
      scale: 16,
    })
    .toDataURL()

  return `
  <div class="rounded-circle overflow-hidden d-inline-block border border-white border-2 shadow-sm m-0">
    <a href="https://alfajores-blockscout.celo-testnet.org/address/${_address}/transactions"
        target="_blank">
        <img src="${icon}" width="48" alt="${_address}">
    </a>
  </div>
  `
}

function notification(_text) {
  document.querySelector(".alert").style.display = "block"
  document.querySelector("#notification").textContent = _text
}

function notificationOff() {
  document.querySelector(".alert").style.display = "none"
}

window.addEventListener("load", () => {
  notification("⌛ Loading...")
  getBalance()
  renderProducts()
  notificationOff()
})

document
  .querySelector("#newProductBtn")
  .addEventListener("click", () => {
    const _product = {
      owner: "0x2EF48F32eB0AEB90778A2170a0558A941b72BFFb",
      name: document.getElementById("newProductName").value,
      image: document.getElementById("newImgUrl").value,
      description: document.getElementById("newProductDescription").value,
      location: document.getElementById("newLocation").value,
      price: document.getElementById("newPrice").value,
      sold: 0,
      index: products.length,
    }
    products.push(_product)
    notification(`🎉 You successfully added "${_product.name}".`)
    renderProducts()
  })

document.querySelector("#marketplace").addEventListener("click", (e) => {
  if(e.target.className.includes("buyBtn")) {
    const index = e.target.id
    products[index].sold++
    notification(`🎉 You successfully bought "${products[index].name}".`)
    renderProducts()
  }
})
