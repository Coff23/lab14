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
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.getElementsByTagName('tbody')[0];
  tbody.innerHTML = ''; 
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbody = document.getElementsByTagName('tbody')[0];
  // TODO: Iterate over the items in the cart
  let cartItems = state.cart.items;
  // TODO: Create a TR
  let tr = document.createElement('tr');
  // TODO: Create a TD for the delete link, quantity,  and the item
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (let i = 0; i < cartItems.length; i++) {
    let td = document.createElement('td');
    td.textContent = cartItems[i].name;
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
  // TODO: Create a TD for the delete link, quantity,  and the item
  let td4 = document.createElement('td');
  let td5 = document.createElement('td');
  let td6 = document.createElement('td');
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (let i = 0; i < cartItems.length; i++) {
    let td = document.createElement('td');
    td.textContent = cartItems[i].quantity;
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
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
