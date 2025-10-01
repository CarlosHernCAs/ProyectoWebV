document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-content img');
  const modalTitle = document.querySelector('.modal-content h3');
  const modalPrice = document.querySelector('.modal-content .precio');
  const closeBtn = document.querySelector('.modal .close');

  document.querySelectorAll('.btn-preview').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = btn.closest('.cart-item');
      modalImg.src = item.querySelector('img').src;
      modalTitle.textContent = item.querySelector('.cart-info h3').textContent;
      modalPrice.textContent = item.querySelector('.cart-info p').textContent;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

