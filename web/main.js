itemDIV = document.querySelector('.items');
const API_URL = 'http://localhost:3000/api/items';
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

//Retrieving data from server


fetch(API_URL, requestOptions) //Making the request to the server
  .then(response => response.json()) //Parsing the response to a Json format
  .then(json => { //Handling the request, 'json' contains all the data
    let container = document.createDocumentFragment();

    json.forEach(element => {
      let itemContainer = document.createElement('ul');
      itemContainer.innerHTML += `
      <li><b>${element.name}</b> ${element.model}</li>
      <img src="img/sonypng.png"></img>
      <li><b>Size:</b> ${element.size}</li>
      <li class="buy-button"><a>Buy</a></li>
      `;
      container.appendChild(itemContainer);
      
    });
    itemDIV.appendChild(container);
  })
  .catch((err)=>{
    itemDIV.innerHTML = `Error connecting to server`
  });

// Interactive buttons


const seeProductsButton = document.getElementById('products')
      homePage = document.querySelector('.presentation');
      productPage = document.querySelector('.content');

seeProductsButton.addEventListener('click', ()=>{
  homePage.style.animation = 'goLeft 1s forwards';
  productPage.style.animation = 'goHome 1s forwards';
});

