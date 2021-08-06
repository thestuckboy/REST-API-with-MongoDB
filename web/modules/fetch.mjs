let itemDIV = document.querySelector('.items');
const API_URL = 'http://localhost:3000/api/items';
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

export function requestContent(){
    fetch(API_URL, requestOptions) //Making the request to the server
      .then(response => response.json()) //Parsing the response to a Json format
      .then(json => { //Handling the request, 'json' contains all the data
        let container = document.createDocumentFragment();
    
        json.forEach(element => {
          let itemContainer = document.createElement('ul');
          itemContainer.setAttribute('specialkey', `${element.idSerial}`)
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
}
