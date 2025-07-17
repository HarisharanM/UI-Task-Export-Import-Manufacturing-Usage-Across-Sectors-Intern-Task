const sectorData = {
  textile: { img: 'images/textile.jpg', caption: 'Textile & Apparel Manufacturing', icon: '🧵' },
  automobile: { img: 'images/automobile.jpg', caption: 'Automobile Industry', icon: '🚗' },
  electronics: { img: 'images/electronics.jpg', caption: 'Electronics & Components', icon: '💻' },
  pharma: { img: 'images/pharma.jpg', caption: 'Pharmaceuticals', icon: '💊' },
  food: { img: 'images/food.jpg', caption: 'Food Processing', icon: '🍎' },
  machinery: { img: 'images/machinery.jpg', caption: 'Heavy Machinery & Equipment', icon: '⚙️' },
  chemicals: { img: 'images/chemicals.jpg', caption: 'Chemicals & Fertilizers', icon: '🧪' },
  metals: { img: 'images/metals.jpg', caption: 'Metals & Mining', icon: '⛏️' },
  agriculture: { img: 'images/agriculture.jpg', caption: 'Agricultural Products', icon: '🌾' },
  furniture: { img: 'images/furniture.jpg', caption: 'Furniture & Woodwork', icon: '🪑' },
  plastics: { img: 'images/plastics.jpg', caption: 'Plastics & Packaging', icon: '📦' },
  oil: { img: 'images/oil.jpg', caption: 'Oil & Gas Equipment', icon: '🛢️' },
  renewable: { img: 'images/renewable.jpg', caption: 'Renewable Energy Components', icon: '🔋' },
  shipbuilding: { img: 'images/marine.jpg', caption: 'Shipbuilding & Marine Equipment', icon: '🚢' }
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
    if (!sectorData[sector]) return;
    modalImg.src = sectorData[sector].img;
    modalCaption.textContent = sectorData[sector].caption;
    showModal(modal);
  });
});

// Remove old showModal(sector) function
// Update close handlers to use hideModal
modalClose.addEventListener('click', () => {
  hideModal(modal);
  modalImg.src = '';
  modalCaption.textContent = '';
});
modal.addEventListener('click', e => {
  if (e.target === modal) {
    hideModal(modal);
    modalImg.src = '';
    modalCaption.textContent = '';
  }
});

// Smooth scroll for Home link in footer
const homeLink = document.getElementById('home-link');
if (homeLink) {
  homeLink.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Animate navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) navbar.classList.add('fade-in');

  // Animate sector cards
  const sectorCards = document.querySelectorAll('.sector-card');
  sectorCards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('animated');
    }, 120 + i * 80);
  });

  // Animate footer
  const footer = document.querySelector('.footer');
  if (footer) setTimeout(() => footer.classList.add('fade-in'), 700);
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

// Contact Modal Logic (updated to use animation)
const contactLink = document.getElementById('contact-link');
const contactModal = document.getElementById('contact-modal');
const contactModalClose = document.getElementById('contact-modal-close');
const contactForm = document.getElementById('contact-form');

if (contactLink && contactModal && contactModalClose) {
  contactLink.addEventListener('click', function(e) {
    e.preventDefault();
    showModal(contactModal);
  });
  contactModalClose.addEventListener('click', function() {
    hideModal(contactModal);
  });
  window.addEventListener('click', function(event) {
    if (event.target === contactModal) {
      hideModal(contactModal);
    }
  });
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      hideModal(contactModal);
      alert('Thank you for contacting us!');
    });
  }
} 
