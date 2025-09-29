let cart = [];

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({name, price, qty: 1});
  }
  renderCart();
}

function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
  renderCart();
}

function renderCart() {
  const cartContainer = document.querySelector('.cart-items');
  cartContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span>${item.name} x ${item.qty}</span>
      <span>$${item.price * item.qty} <button onclick="removeItem('${item.name}')">Remove</button></span>
    `;
    cartContainer.appendChild(div);
  });

  document.querySelector('.total').innerText = `Total: $${total}`;
}

function checkout() {
  if(cart.length === 0){
    alert("Your cart is empty!");
  } else {
    alert("Order placed successfully!");
    cart = [];
    renderCart();
  }
}
