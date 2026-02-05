const buttons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.masonry .col');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter.toLowerCase();

    items.forEach(item => {
      // Sécurité si data-tags manquant
      const tags = item.dataset.tags ? item.dataset.tags.split(',').map(t => t.trim().toLowerCase()) : [];

      if (filter === 'all' || tags.includes(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    // Gestion du bouton actif
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});



/*FONCTION IMAGE AFFICHAGE__________________________________________________________________*/

const images = document.querySelectorAll('.col img,.card img');
const modal = document.createElement('div');
modal.classList.add('img-modal');
document.body.appendChild(modal);

images.forEach(img => {
  img.addEventListener('click', () => {
    modal.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    modal.style.display = 'flex';
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});


