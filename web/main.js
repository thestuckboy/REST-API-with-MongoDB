import {requestContent} from './modules/fetch.mjs'

//Retrieving data from server

requestContent();

// Interactive buttons


const seeProductsButton = document.getElementById('products');
const homePage = document.querySelector('.presentation');
const productPage = document.querySelector('.content');
const model = document.querySelector('.create-model-form');
const publish_button = document.querySelector('.publish-button');
const exit_button = document.querySelector('.quit');

seeProductsButton.addEventListener('click', ()=>{
  homePage.style.animation = 'goLeft 1s forwards';
  productPage.style.animation = 'goHome 1s forwards';
});

publish_button.addEventListener('click', ()=>{
  model.style.animation = "modelIn 2s forwards";
});

// exit_button.addEventListener('click', ()=>{
//   model.style.animation = "modeOut 2s forwards";
// });