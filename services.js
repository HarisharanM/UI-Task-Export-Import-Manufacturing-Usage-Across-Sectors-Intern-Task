const serviceData = {
  textile: { img: 'images/textile.jpg', caption: 'Textile & Apparel Manufacturing' },
  automobile: { img: 'images/automobile.jpg', caption: 'Automobile Industry' },
  electronics: { img: 'images/electronics.jpg', caption: 'Electronics & Components' },
  pharma: { img: 'images/pharma.jpg', caption: 'Pharmaceuticals' },
  food: { img: 'images/food.jpg', caption: 'Food Processing' },
  machinery: { img: 'images/machinery.jpg', caption: 'Heavy Machinery & Equipment' },
  chemicals: { img: 'images/chemicals.jpg', caption: 'Chemicals & Fertilizers' },
  metals: { img: 'images/metals.jpg', caption: 'Metals & Mining' },
  agriculture: { img: 'images/agriculture.jpg', caption: 'Agricultural Products' },
  furniture: { img: 'images/furniture.jpg', caption: 'Furniture & Woodwork' },
  plastics: { img: 'images/plastics.jpg', caption: 'Plastics & Packaging' },
  oil: { img: 'images/oil.jpg', caption: 'Oil & Gas Equipment' },
  renewable: { img: 'images/renewable.jpg', caption: 'Renewable Energy Components' },
  shipbuilding: { img: 'images/marine.jpg', caption: 'Shipbuilding & Marine Equipment' }
};

const serviceBtns = document.querySelectorAll('.service-btn');
const serviceModal = document.getElementById('service-modal');
const serviceModalImg = document.getElementById('service-modal-img');
const serviceModalCaption = document.getElementById('service-modal-caption');
const serviceModalClose = document.getElementById('service-modal-close');

document.addEventListener('DOMContentLoaded', function() {
  // Animate service buttons
  const serviceBtns = document.querySelectorAll('.service-btn');
  serviceBtns.forEach((btn, i) => {
    setTimeout(() => {
      btn.classList.add('fade-in');
    }, 120 + i * 80);
  });
  // Animate main content if needed
  const main = document.querySelector('main');
  if (main) setTimeout(() => main.classList.add('fade-in'), 400);
});

// Animate modals in/out
function showModal(modal) {
  if (modal) {
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
  }
}
function hideModal(modal) {
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
  }
}

serviceBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const service = btn.getAttribute('data-service');
    if (serviceData[service]) {
      serviceModalImg.src = serviceData[service].img;
      serviceModalCaption.textContent = serviceData[service].caption;
      showModal(serviceModal);
    }
  });
});

serviceModalClose.addEventListener('click', () => {
  hideModal(serviceModal);
});
serviceModal.addEventListener('click', e => {
  if (e.target === serviceModal) {
    hideModal(serviceModal);
  }
}); 