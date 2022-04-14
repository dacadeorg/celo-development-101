Here is a preview of the DApp that you are going to build:
[Link to Marketplace DApp](https://dacadeorg.github.io/celo-marketplace-dapp/)

## 3.1 Initializing your project (3 min)
First, you are going to initialize your project from our boilerplate repo, where you will already have the build process and necessary libraries available. 
You should have installed node.js 10 or higher.

1. Open your command-line interface.
2. Clone our boilerplate repository.
```bash
git clone https://github.com/dacadeorg/celo-boilerplate-web-dapp
```

3. Navigate to the new repository.
```bash
cd celo-boilerplate-web-dapp
```

4. Install all dependencies.
```bash
npm install
```

5. Start a local development server.
```bash
npm run dev
```

Your project should be running here http://localhost:3000/.

## 3.2 The HTML of your DApp (9 min)

In this section of the tutorial, you are going to start the basis of your DApp, the HTML.

Although this section may look long, you will quickly go through it, since most of the code is rather straightforward. Don’t worry about all the classes; they are just for styling purposes.

Open the index.html file inside the public folder of your project.

Now, let's get started with the document.


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
```

Declare the document type, add an HTML tag, create a head element, and add meta tags.

Next, you are going to import some external stylesheets.

```html
    <!-- CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css"
    />
```

In this tutorial, you will use bootstrap, a popular front-end library that allows you to create elegant responsive websites very fast. You can quickly choose from bootstrap components like buttons or cards and customize them to your needs ([Learn more about Bootstrap Components](https://getbootstrap.com/docs/5.0/components/)). 

Import the bootstrap icons.

```html
    <link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
	  href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
	  rel="stylesheet"
	/>
```

Add a font that you want to use for this DApp. In this case, we're using DM Sans.

```html
	<style>
	  :root {
		--bs-font-sans-serif: "DM Sans", sans-serif;
	  }

	  @media (min-width: 576px) {
		.card {
		  border: 0;
		  box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px;
		  border-radius: 10px;
		}

		.card-img-top {
		  width: 100%;
		  height: 20vw;
		  object-fit: cover;
		}
	  }
	</style>

	<title>Street Food Kigali</title>
	</head>
```

Import the font as your main font and adjust the style of Bootstrap card component for bigger screens. You will use them for your products later.

At the end, add a title.

```html
  <body>
    <div class="container mt-2" style="max-width: 72em">

      <nav class="navbar bg-white navbar-light">
        <div class="container-fluid">
          <span class="navbar-brand m-0 h4 fw-bold">Street Food Kigali</span>
          <span class="nav-link border rounded-pill bg-light">
            <span id="balance">0</span>
            cUSD
          </span>
        </div>
      </nav>
```

Create a navigation bar inside the body element where you can display the name of the DApp and the cUSD balance of the user.

Later you will use Javascript to get the value of the user's balance and display it in the span element with the id `balance`.

```html
  <div class="alert alert-warning sticky-top mt-2" role="alert">
    <span id="notification">⌛ Loading...</span>
  </div>
```

Create a `div` for the notifications that you want to display to the user. This div has the class alert that you will later select in your JS code. The `span` element has the id `notification`, that you will use to insert the text that you want to display.

```html
  <div class="mb-4" style="margin-top: 4em">
    <a
      class="btn btn-dark rounded-pill"
      data-bs-toggle="modal"
      data-bs-target="#addModal"
    >
      Add product
    </a>
  </div>
```

Create a div to display the `Add product` button at the right place. The `Add product` button will toggle a modal that will allow the user to add a new product to the DApp.

```html
  <main id="marketplace" class="row"></main>
</div>
```

Finally, add a main tag with the id marketplace where you will display your products later.

You will also need to create a modal that opens up when the user clicks on the `Add product` button. This code is pretty long, but not much is happening here.

```html
<!--Modal-->
<div
  class="modal fade"
  id="addModal"
  tabindex="-1"
  aria-labelledby="newProductModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
	<div class="modal-content">

	  <div class="modal-header">
		<h5 class="modal-title" id="newProductModalLabel">New Product</h5>
		<button
		  type="button"
		  class="btn-close"
		  data-bs-dismiss="modal"
		  aria-label="Close"
		></button>
	  </div>
```

Create a modal with a title and a close button.
```html
      <div class="modal-body">
        <form>
          <div class="form-row">
            <div class="col">
              <input
                type="text"
                id="newProductName"
                class="form-control mb-2"
                placeholder="Enter name of product"
              />
            </div>
            <div class="col">
              <input
                type="text"
                id="newImgUrl"
                class="form-control mb-2"
                placeholder="Enter image url"
              />
            </div>
            <div class="col">
              <input
                type="text"
                id="newProductDescription"
                class="form-control mb-2"
                placeholder="Enter product description"
              />
            </div>
            <div class="col">
              <input
                type="text"
                id="newLocation"
                class="form-control mb-2"
                placeholder="Enter location"
              />
            </div>
            <div class="col">
              <input
                type="text"
                id="newPrice"
                class="form-control mb-2"
                placeholder="Enter price"
              />
            </div>
          </div>
        </form>
      </div>
```

In this part of the modal, you are creating a form, so that the user can input the attributes of the product they want to add to your DApp. They need to enter the name, image URL, product description, location, and price of their product.

```html
    <div class="modal-footer">
        <button
          type="button"
          class="btn btn-light border"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          type="button"
          class="btn btn-dark"
          data-bs-dismiss="modal"
          id="newProductBtn"
        >
          Add product
        </button>
      </div>
    </div>
  </div>
</div>
<!--/Modal-->
```

In the footer of your modal, add another Close button and an `Add product` button with the id `newProductBtn`.

```html
    <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
    crossorigin="anonymous"
    ></script>
    <script src="https://unpkg.com/ethereum-blockies@0.1.1/blockies.min.js"></script>
  </body>
</html>
```

Finally, add the bootstrap JS library and a library called blockies, that you are going to use to visualise blockchain addresses.

Congratulations! That’s it for the first section of this tutorial.

Here is a quick view of how your DApp should look like with only the HTML now.
![](https://cdn-celo-101-dacade.netlify.app/celo_3_2_the_html_of_your_dapp.gif)

[Code for this section](https://github.com/dacadeorg/celo-development-101/tree/main/code/celo101-code-chapter_3/3-2-the-html-of-your-project/index.html)

## 3.3 The JS of your DApp (12 min)
In this section of the tutorial, you will add the basic functionality of your DApp. You will create a functioning version in vanilla Javascript with sample products that is not yet connected to the Celo blockchain.

Open the main.js file inside the src folder of your project.
```javascript

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
```

Since your DApp is not connected to the contract where you store the products, you need to create an array called products, using sample product data.

```javascript
const getBalance = function () {
  document.querySelector("#balance").textContent = 21
}
```

In the `getBalance` function, update the balance of the user. In this static version, you need to hard code the number 21 in the function, so that the HTML span element with id balance 21 will be displayed.

```javascript
function renderProducts() {
  document.getElementById("marketplace").innerHTML = ""
  products.forEach((_product) => {
    const newDiv = document.createElement("div")
    newDiv.className = "col-md-4"
    newDiv.innerHTML = productTemplate(_product)
    document.getElementById("marketplace").appendChild(newDiv)
  })
}
```

Next, display the products with the renderProducts function. 

First, empty your marketplace div, so that you don’t add the products multiple times when you call `renderProducts` more than once.

For each product in products, you are going to create a new div with the HTML of productTemplate that you are going to add next. At the end, append the new div to your marketplace div.

Now, create the HTML of the product.


```javascript
function productTemplate(_product) {
  return `
    <div class="card mb-4">
      <img class="card-img-top" src="${_product.image}" alt="...">
      <div class="position-absolute top-0 end-0 bg-warning mt-4 px-2 py-1 rounded-start">
        ${_product.sold} Sold
      </div>
```

In your `productTemplate` function, create a card with an image of the product and a little box counting the number of times it has been sold.

```html

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

```

Create a small image called an identicon which has its own `identiconTemplate`. An identicon is a visual representation of a hash value. In this case of the hashvalue is the address of the product owner. This makes it easy for people to identify which owner created what products.

You should also display the product name, description, location and display the price on the buy button. As you can see, the product index will be the id of the button element, so that you know which product the user selected when they click on it.


```javascript
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
```

Now you are going to create the identicon. The `identiconTemplate` function takes an address as a parameter and then creates an icon object with the address through the blockies library.

Return a round image of the icon and a link that takes the user to the transactions of the address in the blockchain explorer.


```javascript
function notification(_text) {
  document.querySelector(".alert").style.display = "block"
  document.querySelector("#notification").textContent = _text
}

function notificationOff() {
  document.querySelector(".alert").style.display = "none"
}
```

Create a `notification` function that displays the alert element with the text in the parameter and a `notificationOff` function that stops showing the alert element.

Now, create some event handlers.

```javascript
window.addEventListener("load", () => {
  notification("⌛ Loading...")
  getBalance()
  renderProducts()
  notificationOff()
})
```

Once your DApp is loaded call your notification function with a loading message, display the user's balance, render all products so the user can see them, and disable the notification div again.

```javascript
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
```

When a user clicks on the `newProductBtn` inside the modal, you will receive all values from the form.

For the first value, hard code the address of the owner. Randomly generating an address for this example is beyond the scope of this example.

Then you can receive the values from the input fields for name, image, description, location, and price. 

Set `sold` to 0 because the product is brand new and set the index to the length of your product array. You start with 0 products so your first product will have the index 0. Perfect!

Now, add the new product to your products array, send a notification, and render the products.

```javascript
document.querySelector("#marketplace").addEventListener("click", (e) => {
  if(e.target.className.includes("buyBtn")) {
    const index = e.target.id
    products[index].sold++
    notification(`🎉 You successfully bought "${products[index].name}".`)
    renderProducts()
  }
})
```

If the user clicks on the product's buy button, save the index of the product they clicked on and then increase the number of times the item has been sold. Then send them a notification and render the products again, so that it displays the updated amount of products sold.

That’s it for this part, this is how your app should now behave:
![](https://cdn-celo-101-dacade.netlify.app/celo_3_3_the_js_of_your_dapp.gif)

[Code for this section](https://github.com/dacadeorg/celo-development-101/tree/main/code/celo101-code-chapter_3/3-3-the-js-of-your-dapp/main.js)

## 3.4 Reading your Celo Balance (14min)
In this section of the tutorial, you are going to use the contractKit library to interact with the Celo Blockchain. ContractKit includes web3.js, a very popular collection of libraries also used for ethereum, that allows you to get access to a web3 object and interact with node's JSON RPC API ([Learn more about contractKit](https://docs.celo.org/developer-guide/contractkit)).

In this section, you will establish a connection to the Celo Blockchain and read out the cUSD balance of your connected account.

Open the main.js that you worked on in the previous step and expand it.
But first, clear the products array. You don’t need sample data anymore.

```javascript
import Web3 from 'web3'
import { newKitFromWeb3 } from '@celo/contractkit'
import BigNumber from "bignumber.js"

const ERC20_DECIMALS = 18

let kit
```

Import the `newKitFromWeb3`, `Web3`, and `BigNumber` objects from their respective libraries.

Many Celo operations operate on numbers that are outside the range of values used in Javascript. In this case we will use `bignumber.js` because it can handle these numbers.

Create the variable `ERC20_DECIMALS`  and set it to 18. By default, the ERC20 interface uses a value of 18 for decimals. Since cUSD, the Celo currency that you are going to use here, is an ERC20 token, use `ERC20_DECIMALS` to convert values.

You should also declare global variable for contractKit, because you are going to need it for multiple functions.

Now, create a function to connect to the Celo extension wallet.

```javascript
const connectCeloWallet = async function () {
  if (window.celo) {
      notification("⚠️ Please approve this DApp to use it.")
    try {
      await window.celo.enable()
      notificationOff()

      const web3 = new Web3(window.celo)
      kit = newKitFromWeb3(web3)

    } catch (error) {
      notification(`⚠️ ${error}.`)
    }
  } else {
    notification("⚠️ Please install the CeloExtensionWallet.")
  }
}
```

Create a new asynchronous function called `connectCeloWallet` that you will then use to connect to the Celo Blockchain and read the balance of the user.

First, check if the user has installed the CeloExtensionWallet. Do that by checking if the “window.celo” object exists. If it doesn’t exist, use a notification to let them know that they need to install the wallet.

If the object does exist, send them a notification that they need to approve this DApp and try the window.celo.enable() function. This will open a pop-up dialogue in the UI that asks for permission to connect the DApp to the CeloExtensionWallet. After Celo is enabled, you should disable the notification.

If you catch an error, let the user know that they must approve the dialogue to use the DApp.

Once the user approves the DApp, create a web3 object using the window.celo object as the provider.
With this web3 object, you can create a new kit instance that you can save to the global kit variable. Now, the functionality of the connected kit can interact with the Celo Blockchain.

Next, you will access the account of the user.

```javascript
const connectCeloWallet = async function () {
  if (window.celo) {
    notification("⚠️ Please approve this DApp to use it.")
    try {
      await window.celo.enable()
      notificationOff()

      const web3 = new Web3(window.celo)
      kit = newKitFromWeb3(web3)

      const accounts = await kit.web3.eth.getAccounts()
      kit.defaultAccount = accounts[0]

    } catch (error) {
      notification(`⚠️ ${error}.`)
    }
  } else {
    notification("⚠️ Please install the CeloExtensionWallet.")
  }
}
```

Your `connectCeloWallet` function stays basically the same. Beneath your new kit instance, call the method `kit.web3.eth.getAccounts()` which will return an array of addresses of the connected user. In the case of the CeloExtensionWallet, you will receive one address which you can make the kit’s default user address by using `kit.defaultAccount`. This will allow you to use it globally.

Now, you need to adjust your getBalance function to access and display the user's cUSD balance.

```javascript
const getBalance = async function () {
  const totalBalance = await kit.getTotalBalance(kit.defaultAccount)
  const cUSDBalance = totalBalance.cUSD.shiftedBy(-ERC20_DECIMALS).toFixed(2)
  document.querySelector("#balance").textContent = cUSDBalance
}
```
Create an asynchronous function `getBalance`.
With kit’s method `kit.getTotalBalance`, you can get the total balance of an account. In this case, you want the balance from the account that interacts with the CeloExtensionWallet — the one we stored in `kit.defaultAccount`.

In the next line, you get a readable cUSD balance. Use totalBalance.cUSD.to get the cUSD balance. Since it’s a big number, convert it to be readable by shifting the comma 18 places to the left and use `toFixed(2)` to display only two decimal places after the decimal point.

Instead of 14000000000000000000, you should get 14.00.

Display the `cUSDBalance` in the corresponding HTML element.

Finally, you need to call your new functions once the page is loaded, so adjust your event listener to do that.

```javascript
window.addEventListener('load', async () => {
  notification("⌛ Loading...")
  await connectCeloWallet()
  await getBalance()
  notificationOff()
});
```

Finally, make this function asynchronous and call `connectCeloWallet()` and `getBalance()` using await.

Great job!

Now you can test your DApp and see if it reads out your balance.

We assume that you have installed the CeloExtensionWallet. If not, you need to:
1. Install the [CeloExtensionWallet](https://chrome.google.com/webstore/detail/celoextensionwallet/kkilomkmpmkbdnfelcpgckmpcaemjcdh?hl=en) from the Google Chrome Store.
2. Create a wallet.
3. Go to [https://celo.org/developers/faucet](https://celo.org/developers/faucet) and get some token for the alfajores testnet.
4. Switch to the alfajores testnet in the CeloExtensionWallet.
5. Open your DApp.

Here is a GIF showing how your app should now behave.
![](https://cdn-celo-101-dacade.netlify.app/celo_3_4_read_balance.gif)

[Code for this section](https://github.com/dacadeorg/celo-development-101/tree/main/code/celo101-code-chapter_3/3-4-reading-your-celo-balance/main.js)

## 3.5 Read and write to your contract (12 min)
In this section of the tutorial, you will connect to your smart contract, as well as read and write products to it.

In order to interact with your smart contract that is deployed in bytecode, you need an interface, the ABI (Application Binary Interface), so that the contractKit can understand the bytecode. The ABI allows you to call functions and read data ([Learn more about the ABI](https://docs.soliditylang.org/en/develop/abi-spec.html)).

When you compile your contract in Remix, Remix also creates the ABI in the form of a JSON for your contract. Copy the JSON and save it into the marketplace.abi.json file of the contracts folder in your project.

![](https://cdn-celo-101-dacade.netlify.app/celo_3_5_1_read_and_write_to_your_contract.gif)

Now that you have your ABI saved in your project, you need to import it.

```javascript
import Web3 from 'web3'
import { newKitFromWeb3 } from '@celo/contractkit'
import BigNumber from "bignumber.js"
import marketplaceAbi from '../contract/marketplace.abi.json'

```

Import this ABI for our marketplace contract and call it `marketplaceAbi`.

After the deployment of your marketplace contract, you will receive the address of the contract which you need in order to find your contract and interact with it.

```javascript
const ERC20_DECIMALS = 18
const MPContractAddress = "0x178134c92EC973F34dD0dd762284b852B211CFC8"
```

Save the address for the marketplace contract in the global variable `MPContractAddress`.
Displayed is the address of my contract — you should replace it with your own address.

![](https://cdn-celo-101-dacade.netlify.app/celo_3_5_2_read_and_write_to_your_contract.gif)

```javascript
let kit
let contract
let products = []
```

You should now declare two new variables, `contract` and `products`, creating an empty array.

Once the user connects their Celo wallet, you will create an instance of the marketplace contract so you can interact with it.

```javascript
const connectCeloWallet = async function () {
  if (window.celo) {
    try {
      notification("⚠️ Please approve this DApp to use it.")
      await window.celo.enable()
      notificationOff()
      const web3 = new Web3(window.celo)
      kit = newKitFromWeb3(web3)

      const accounts = await kit.web3.eth.getAccounts()
      kit.defaultAccount = accounts[0]

      contract = new kit.web3.eth.Contract(marketplaceAbi, MPContractAddress)
    } catch (error) {
      notification(`⚠️ ${error}.`)
    }
  } else {
    notification("⚠️ Please install the CeloExtensionWallet.")
  }
}

```

Assign your global `contract` variable a new `kit.web3.eth.Contract` object. Give it the ABI and address of your contract and it will convert your function calls into RPC. Now you can interact with your smart contract as if it were a Javascript object.

Now that you have an instance of the contract that you can interact with, you can call its functions. First, you want to display the products.

```javascript
const getProducts = async function() {
  const _productsLength = await contract.methods.getProductsLength().call()
  const _products = []

```

Create a new `getProducts` function under your `getBalance` function.
First, you need to know how many products are stored in the contract so you can iterate over them. 
Create `_productsLength` to store the number of products and use `contract.methods` to call `getProductsLength()` from your contract and assign its value.

Next, declare an empty array for the product’s objects.

```javascript
  for (let i = 0; i < _productsLength; i++) {
    let _product = new Promise(async (resolve, reject) => {
      let p = await contract.methods.readProduct(i).call()
      resolve({
        index: i,
        owner: p[0],
        name: p[1],
        image: p[2],
        description: p[3],
        location: p[4],
        price: new BigNumber(p[5]),
        sold: p[6],
      })
    })
    _products.push(_product)
  }
  products = await Promise.all(_products)
  renderProducts()
}
```

Now, loop over the length of your products. For each product, create a promise in which you call your contracts `readProduct` to get the product data.
Resolve the promise with your product data and then push your `_product` object to your `_products` array. Be aware that the price needs to be a bigNumber object so you can later make correct payments.

Once all promises of this asynchronous operation are fulfilled, render your products with the `renderProducts()` function that you created earlier.

Finally, you will enable the user to create a new product and save it to your contract.

```javascript
document
  .querySelector("#newProductBtn")
  .addEventListener("click", async (e) => {
    const params = [
      document.getElementById("newProductName").value,
      document.getElementById("newImgUrl").value,
      document.getElementById("newProductDescription").value,
      document.getElementById("newLocation").value,
      new BigNumber(document.getElementById("newPrice").value)
      .shiftedBy(ERC20_DECIMALS)
      .toString()
    ]
    notification(`⌛ Adding "${params[0]}"...`)
```

Adapt your event handler for the "click" event on the `newProductBtn` button.
In the params array, store all the parameters that you read from the form.
Again, when somebody inputs a price value, you need to create a bigNumber and convert it in a way that the contract can understand.

Then show a notification that you are in the process of adding a new product.

```javascript
    try {
      const result = await contract.methods
        .writeProduct(...params)
        .send({ from: kit.defaultAccount })
    } catch (error) {
      notification(`⚠️ ${error}.`)
    }
    notification(`🎉 You successfully added "${params[0]}".`)
    getProducts()
  })
```

Again, use one of your contract methods. Use `writeProduct` with the parameters that you saved earlier. Since you now want to send a transaction to the smart contract and execute its method, you also need the `send` method. 
As a parameter, you need to specify the value of the property `from`, which. In this case, you can access the address of the user via `kit.defaultAccount`.

If you receive and error, display it to the user. If the product is successfully added, display it to the user and call your `getProducts()` function to show the new product.

You also need to change one line in your product template function.

```javascript
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
            Buy for ${_product.price.shiftedBy(-ERC20_DECIMALS).toFixed(2)} cUSD
          </a>
        </div>
      </div>
    </div>
  `
}
```

Because you are dealing with BigNumbers, you need to convert the price again.

Now, call your `getProducts` function once the DApp is loaded.

```javascript
window.addEventListener('load', async () => {
  notification("⌛ Loading...")
  await connectCeloWallet()
  await getBalance()
  await getProducts()
  notificationOff()
});
```

Ok, that’s it for this section! You now should be able to save new products via your frontend into your contract on the Celo Blockchain.

![](https://cdn-celo-101-dacade.netlify.app/celo_3_5_3_read_and_write_to_your_contract.gif)

[Code for this section](https://github.com/dacadeorg/celo-development-101/tree/main/code/celo101-code-chapter_3/3-5-read-and-write-to-your-contract/main.js)

## 3.6 Pay function (8 min)
In this section of the tutorial, you will learn how to create the payment functionality. 

The user will pay with the Celo stablecoin cUSD, an ERC-20 token. “The ERC20 token standard is a standard API for tokens within smart contracts'' ([Celo Docs](https://docs.celo.org/developer-guide/celo-for-eth-devs)).

In order to interact with the ERC-20 interface, we are going to need its ABI.

Get the ABI from Remix and paste it into the erc20.abi.json file in your project.

```javascript
import Web3 from "web3"
import { newKitFromWeb3 } from "@celo/contractkit"
import BigNumber from "bignumber.js"
import marketplaceAbi from "../contract/marketplace.abi.json"
import erc20Abi from "../contract/erc20.abi.json"
```

Now you need to import the ABI, as you have done before.

As you have seen, you need the ABI and the address of a contract in order to interact with it.

We will provide you with the address of the cUSD contract on the alfajores testnet ([See cUSD on blockchain explorer](https://alfajores-blockscout.celo-testnet.org/address/0x874069fa1eb16d44d622f2e0ca25eea172369bc1/transactions)).

```javascript
const ERC20_DECIMALS = 18
const MPContractAddress = "0x178134c92EC973F34dD0dd762284b852B211CFC8"
const cUSDContractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1"
```

Create a global variable for the cUSD contract address.

Before you can make a transaction, you first have to get the user's approval to make a transaction for a certain amount of token, called the allowance.

```javascript
async function approve(_price) {
  const cUSDContract = new kit.web3.eth.Contract(erc20Abi, cUSDContractAddress)

  const result = await cUSDContract.methods
    .approve(MPContractAddress, _price)
    .send({ from: kit.defaultAccount })
  return result
}
```

To get the user's approval on the allowance, you need to create a new function. Create it under the `connectCeloWallet` function and name it `approve`. It takes the price of a product as a parameter.

First, create a cUSD contract instance with the ABI and the contract address, `cUSDContract`.

Now you can call the cUSD contract method approve. You need to specify both the contract address that will be allowed to make transactions and the amount that it will be allowed to spend, i.e., the price of the product.

Again, you also need to specify who is going to spend the cUSD token. In this case it's the address stored in `kit.defaultAccount`.

Return the result for error handling. 

For the final part of your DApp, you want to enable the user to buy a product. To do this, you should adapt your buy button event listener.

```javascript
document.querySelector("#marketplace").addEventListener("click", async (e) => {
  if (e.target.className.includes("buyBtn")) {
    const index = e.target.id
    notification("⌛ Waiting for payment approval...")
    try {
      await approve(products[index].price)
    } catch (error) {
      notification(`⚠️ ${error}.`)
    }
```

When the user clicks on a buy button, you should receive the product id and show them a notification about what is happening. Next, try to get the approval for the token amount that your contract wants to spend via the approval function that you previously created.

```javascript
    notification(`⌛ Awaiting payment for "${products[index].name}"...`)
    try {
      const result = await contract.methods
        .buyProduct(index)
        .send({ from: kit.defaultAccount })
      notification(`🎉 You successfully bought "${products[index].name}".`)
      getProducts()
      getBalance()
    } catch (error) {
      notification(`⚠️ ${error}.`)
    }
  }
})
```

Now that your contract has the approval to spend the amount of cUSD that matches the product price, you use the contract's `buyProduct` function. However you need to specify the product index and the users’ address.

You should display all notifications. If there is no error, call your `getProducts` function again to show the updated products in your DApp, and your`getBalance` function to show the updated balance after the user bought the product.
  
That’s it! You've created your first DApp on the Celo Blockchain. Congratulations 🎉.

To test this DApp properly, you should create two accounts. This will allow you to see how the first account earns cUSD when you buy a product with the second account.

Check out this gif showing you how your app should behave.
![](https://cdn-celo-101-dacade.netlify.app/celo_3_6_pay_function.gif)

[Code for this section](https://github.com/dacadeorg/celo-development-101/tree/main/code/celo101-code-chapter_3/3-6-pay-function/main.js)

## 3.7 Hosting your DApp on GitHub pages (6 min)
In this final section of the tutorial, we will show you how you can host your project on GitHub pages so other people can interact with it.

After testing your DApp and checking that everything behaves correctly, you can build your DApp in the command-line interface with the command.

```bash
npm run build
```

Now, you should have an HTML and JS file inside the docs folder of your project.

1. Upload your project to a new GitHub repository.
2. Once inside your repository, click on settings and scroll down to a section called GitHub Pages.
3. Select the master branch and the docs folder as the source for your GitHub pages.

It might take a few some minutes until you are able to visit your DApp under the URL that is displayed in the GitHub Pages section.

If you haven't already, create a readme file for your project that explains your dapp and includes a link to your Dapp. You can use the [Marketplace Readme](https://github.com/dacadeorg/celo-marketplace-dapp#readme) for inspiration.

That’s it! Congratulations! You are done with the tutorial and have built your first DApp! 🎉
Now apply your new knowledge and take part in this course's challenge!.
