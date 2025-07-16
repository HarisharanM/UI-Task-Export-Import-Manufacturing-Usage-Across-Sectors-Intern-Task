const sectorData = {
  textile: { img: 'Images/textile.jpg', caption: 'Textile & Apparel Manufacturing', icon: '🧵' },
  automobile: { img: 'Images/automobile.jpg', caption: 'Automobile Industry', icon: '🚗' },
  electronics: { img: 'Images/electronics.jpg', caption: 'Electronics & Components', icon: '💻' },
  pharma: { img: 'Images/pharma.jpg', caption: 'Pharmaceuticals', icon: '💊' },
  food: { img: 'Images/food.jpg', caption: 'Food Processing', icon: '🍎' },
  machinery: { img: 'Images/machinery.jpg', caption: 'Heavy Machinery & Equipment', icon: '⚙️' },
  chemicals: { img: 'Images/chemicals.jpg', caption: 'Chemicals & Fertilizers', icon: '🧪' },
  metals: { img: 'Images/metals.jpg', caption: 'Metals & Mining', icon: '⛏️' },
  agriculture: { img: 'Images/agriculture.jpg', caption: 'Agricultural Products', icon: '🌾' },
  furniture: { img: 'Images/furniture.jpg', caption: 'Furniture & Woodwork', icon: '🪑' },
  plastics: { img: 'Images/plastics.jpg', caption: 'Plastics & Packaging', icon: '📦' },
  oil: { img: 'Images/oil.jpg', caption: 'Oil & Gas Equipment', icon: '🛢️' },
  renewable: { img: 'Images/renewable.jpg', caption: 'Renewable Energy Components', icon: '🔋' },
  shipbuilding: { img: 'Images/marine.jpg', caption: 'Shipbuilding & Marine Equipment', icon: '🚢' }
};

const cards = document.querySelectorAll('.sector-card');
const modal = document.getElementById('sector-modal');
const modalImg = document.getElementById('sector-modal-img');
const modalCaption = document.getElementById('sector-modal-caption');
const modalClose = document.getElementById('sector-modal-close');

cards.forEach(card => {
  const sector = card.getAttribute('data-sector');
  const iconDiv = card.querySelector('.sector-icon');
  if (sectorData[sector]) {
    iconDiv.textContent = sectorData[sector].icon;
  }
  card.addEventListener('click', () => {
    showModal(sector);
  });
});

function showModal(sector) {
  if (!sectorData[sector]) return;
  modalImg.src = sectorData[sector].img;
  modalCaption.textContent = sectorData[sector].caption;
  modal.classList.add('open');
}

modalClose.addEventListener('click', () => {
  modal.classList.remove('open');
  modalImg.src = '';
  modalCaption.textContent = '';
});
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('open');
    modalImg.src = '';
    modalCaption.textContent = '';
  }
}); 