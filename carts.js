
    function updateTotals() {
      let subtotal = 0;
      const items = document.querySelectorAll('.cart-item');
      
      items.forEach(item => {
        const priceText = item.querySelector('.item-price').textContent;
        const price = parseFloat(priceText.replace('$', ''));
        const qty = parseInt(item.querySelector('.quantity').textContent);
        subtotal += price * qty;
      });

      const shipping = 15.00;
      const tax = subtotal * 0.18;
      const total = subtotal + shipping + tax;

      const subtotalEl = document.getElementById('subtotal');
      const taxEl = document.getElementById('tax');
      const totalEl = document.getElementById('total');
      const itemCountEl = document.getElementById('item-count');

      if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toFixed(2);
      if (taxEl) taxEl.textContent = '$' + tax.toFixed(2);
      if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
      if (itemCountEl) itemCountEl.textContent = items.length;
    }

    function increaseQty(btn) {
      const qtySpan = btn.previousElementSibling;
      let qty = parseInt(qtySpan.textContent);
      qtySpan.textContent = ++qty;
      updateTotals();
    }

    function decreaseQty(btn) {
      const qtySpan = btn.nextElementSibling;
      let qty = parseInt(qtySpan.textContent);
      if (qty > 1) {
        qtySpan.textContent = --qty;
        updateTotals();
      }
    }

    function removeItem(btn) {
      const item = btn.closest('.cart-item');
      item.remove();
      updateTotals();
      checkEmptyCart();
    }

    function checkEmptyCart() {
      const cartItems = document.getElementById('cart-items');
      if (cartItems && cartItems.children.length === 0) {
        const cartContent = document.querySelector('.cart-content');
        if (cartContent) {
          cartContent.innerHTML = `
            <div class="empty-cart">
              <div class="empty-cart-icon">🛒</div>
              <h3>Tu carrito está vacío</h3>
              <p>Agrega productos para comenzar a comprar</p>
              <button class="checkout-btn" onclick="continueShopping()">Ir a Productos</button>
            </div>
          `;
        }
      }
    }

    function checkout() {
      window.location.href = 'pago.html';
    }

    function continueShopping() {
      window.location.href = 'productos.html';
    }
