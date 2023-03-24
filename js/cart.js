/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
  state.cart.updateCounter();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.getElementsByTagName('tbody')[0];
  tbody.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbody = document.querySelector('#cart tbody');
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < state.cart.items.length; i++) {


    let trElement = document.createElement('tr');
    // TODO: Create a TR

    let tdDeleteElement = document.createElement('td');
    let tdQuantityElement = document.createElement('td');
    let tdItemElement = document.createElement('td');

    tdDeleteElement.textContent = 'x';
    tdQuantityElement.textContent = state.cart.items[i].quantity;
    tdItemElement.textContent = state.cart.items[i].product;
    // TODO: Create a TD for the delete link, quantity,  and the item

    trElement.appendChild(tdDeleteElement);
    trElement.appendChild(tdQuantityElement);
    trElement.appendChild(tdItemElement);
    tbody.appendChild(trElement);
    // TODO: Add the TR to the TBODY and each of the TD's to the TR

  }
  console.log(state.cart.items);
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let item = event.target.parentElement.parentElement;
  let cartItems = state.cart.items;
  cartItems.splice(cartItems.indexOf(item), 1);
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart', JSON.stringify(cartItems));
  // TODO: Re-draw the cart table
  renderCart();
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
