/* ========================================
   Eyeonic Optical Store - Main JavaScript
   ======================================== */

// Product Data
const products = [
  {
    id: 1,
    name: "Ray-Ban Classic Aviator",
    brand: "Ray-Ban",
    category: "Sunglasses",
    price: "$154",
    image: "images/products/aviator.webp",
    features: ["Polarized lenses", "Metal frame", "UV400 protection", "Classic aviator design"],
    material: "Metal",
    lensType: "Polarized Glass",
    uvProtection: "UV400",
    weight: "32g",
    warranty: "2 Years",
    specsDoc: "docs/rayban-classic.docx"
  },
  {
    id: 2,
    name: "Oakley Sport Pro",
    brand: "Oakley",
    category: "Sunglasses",
    price: "$186",
    image: "images/products/sport-pro.webp",
    features: ["Prizm lens technology", "O Matter frame", "Impact resistant", "Sport optimized"],
    material: "O Matter Plastic",
    lensType: "Prizm Polarized",
    uvProtection: "100% UV",
    weight: "28g",
    warranty: "2 Years",
    specsDoc: "docs/oakley-pro.docx"
  },
  {
    id: 3,
    name: "Gucci Luxury Frame",
    brand: "Gucci",
    category: "Frames",
    price: "$320",
    image: "images/products/luxury-frame.webp",
    features: ["Acetate frame", "Gold accents", "Designer collection", "Premium build"],
    material: "Acetate",
    lensType: "Demo Lens",
    uvProtection: "Standard",
    weight: "35g",
    warranty: "1 Year",
    specsDoc: "docs/gucci-luxury.docx"
  },
  {
    id: 4,
    name: "Prada Elegant Square",
    brand: "Prada",
    category: "Frames",
    price: "$285",
    image: "images/products/elegant-square.webp",
    features: ["Square design", "Lightweight frame", "Signature logo", "Italian craftsmanship"],
    material: "Acetate/Metal",
    lensType: "Demo Lens",
    uvProtection: "Standard",
    weight: "30g",
    warranty: "1 Year",
    specsDoc: "docs/prada-elegant.docx"
  },
  {
    id: 5,
    name: "Vogue Trendy Round",
    brand: "Vogue",
    category: "Frames",
    price: "$125",
    image: "images/products/trendy-round.webp",
    features: ["Round shape", "Trendy colors", "Affordable luxury", "Comfortable fit"],
    material: "Plastic",
    lensType: "Demo Lens",
    uvProtection: "Standard",
    weight: "25g",
    warranty: "1 Year",
    specsDoc: "docs/vogue-trendy.docx"
  },
  {
    id: 6,
    name: "Ray-Ban Wayfarer",
    brand: "Ray-Ban",
    category: "Sunglasses",
    price: "$163",
    image: "images/products/wayfarer.webp",
    features: ["Iconic design", "Crystal lenses", "Durable frame", "Timeless style"],
    material: "Acetate",
    lensType: "Crystal Glass",
    uvProtection: "UV400",
    weight: "40g",
    warranty: "2 Years",
    specsDoc: "docs/rayban-wayfarer.docx"
  },
  {
    id: 7,
    name: "Acuvue Oasys Contacts",
    brand: "Acuvue",
    category: "Contact Lenses",
    price: "$45",
    image: "images/products/contact-lenses.webp",
    features: ["2-week replacement", "HydraLuxe technology", "UV blocking", "All-day comfort"],
    material: "Senofilcon A",
    lensType: "Soft Contact",
    uvProtection: "Class 2 UV",
    weight: "N/A",
    warranty: "N/A",
    specsDoc: "docs/acuvue-oasys.docx"
  },
  {
    id: 8,
    name: "Oakley Computer Shield",
    brand: "Oakley",
    category: "Computer Glasses",
    price: "$142",
    image: "images/products/computer-glasses.webp",
    features: ["Blue light filter", "Anti-reflective", "Lightweight design", "Screen protection"],
    material: "O Matter",
    lensType: "Blue Light Filter",
    uvProtection: "Standard",
    weight: "22g",
    warranty: "2 Years",
    specsDoc: "docs/oakley-shield.docx"
  },
  {
    id: 9,
    name: "Carrera Sport Flex",
    brand: "Carrera",
    category: "Sunglasses",
    price: "$135",
    image: "images/products/sport-flex.webp",
    features: ["Flexible hinges", "Sport design", "Shatterproof lenses", "Wrap-around fit"],
    material: "TR90 Nylon",
    lensType: "Polycarbonate",
    uvProtection: "100% UV",
    weight: "26g",
    warranty: "2 Years",
    specsDoc: "docs/carrera-sport.docx"
  },
  {
    id: 10,
    name: "Classic Reading Plus",
    brand: "Eyeonic",
    category: "Reading Glasses",
    price: "$55",
    image: "images/products/reading-glasses.webp",
    features: ["Multiple strengths", "Lightweight frame", "Anti-scratch coating", "Compact case included"],
    material: "Plastic/Metal",
    lensType: "Reading Lens",
    uvProtection: "Standard",
    weight: "20g",
    warranty: "6 Months",
    specsDoc: "docs/eyeonic-reading.docx"
  }
];

// ========================================
// Preloader
// ========================================
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 800);
  }
});

// ========================================
// Sticky Navbar
// ========================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// ========================================
// Scroll to Top Button
// ========================================
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (scrollTopBtn) {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========================================
// Dark Mode Toggle
// ========================================
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    }
  }
}

// ========================================
// Smooth Scrolling
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ========================================
// Active Nav Link
// ========================================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  }
});

// ========================================
// Scroll Animations (Intersection Observer)
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ========================================
// Animated Counters
// ========================================
function animateCounters() {
  const counters = document.querySelectorAll('.counter-number');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  });
}

// Trigger counters when visible
const counterSection = document.querySelector('.counter-section');
if (counterSection) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counterObserver.observe(counterSection);
}

// ========================================
// Search Functionality
// ========================================
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
      const name = card.getAttribute('data-name').toLowerCase();
      const brand = card.getAttribute('data-brand').toLowerCase();
      const category = card.getAttribute('data-category').toLowerCase();
      
      if (name.includes(query) || brand.includes(query) || category.includes(query)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

// ========================================
// Brand Filtering (brands.html)
// ========================================
const brandButtons = document.querySelectorAll('.brand-filter-btn');
if (brandButtons.length > 0) {
  brandButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      // Update active state
      brandButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const selectedBrand = this.getAttribute('data-brand').toLowerCase();
      filterProductsByBrand(selectedBrand);
    });
  });
}

function filterProductsByBrand(brand) {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    const cardBrand = card.getAttribute('data-brand');
    
    if (brand === 'all' || cardBrand === brand) {
      card.style.display = '';
      card.style.animation = 'fadeIn 0.5s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

// ========================================
// Category Filtering (categories.html)
// ========================================
const categoryButtons = document.querySelectorAll('.category-filter-btn');
if (categoryButtons.length > 0) {
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      // Update active state
      categoryButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const selectedCategory = this.getAttribute('data-category').toLowerCase();
      filterProductsByCategory(selectedCategory);
    });
  });
}

function filterProductsByCategory(category) {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    
    if (category === 'all' || cardCategory === category) {
      card.style.display = '';
      card.style.animation = 'fadeIn 0.5s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

// ========================================
// Product Comparison (compare.html)
// ========================================
const product1Select = document.getElementById('product1');
const product2Select = document.getElementById('product2');
const compareBtn = document.getElementById('compareBtn');
const comparisonResult = document.getElementById('comparisonResult');

if (compareBtn) {
  // Populate dropdowns
  populateComparisonDropdowns();
  
  compareBtn.addEventListener('click', compareProducts);
}

function populateComparisonDropdowns() {
  if (!product1Select || !product2Select) return;
  
  products.forEach(product => {
    const option1 = new Option(`${product.name} - ${product.brand}`, product.id);
    const option2 = new Option(`${product.name} - ${product.brand}`, product.id);
    product1Select.add(option1);
    product2Select.add(option2);
  });
}

function compareProducts() {
  if (!product1Select || !product2Select || !comparisonResult) return;
  
  const id1 = parseInt(product1Select.value);
  const id2 = parseInt(product2Select.value);
  
  if (!id1 || !id2) {
    alert('Please select two products to compare.');
    return;
  }
  
  if (id1 === id2) {
    alert('Please select two different products.');
    return;
  }
  
  const product1 = products.find(p => p.id === id1);
  const product2 = products.find(p => p.id === id2);
  
  if (!product1 || !product2) return;
  
  const comparisonHTML = `
    <table class="table comparison-table table-striped">
      <thead>
        <tr>
          <th style="width: 25%;">Feature</th>
          <th style="width: 37.5%;">
            <img class="comparison-image" src="${product1.image}" alt="" width="112" height="84">
            ${product1.name}
          </th>
          <th style="width: 37.5%;">
            <img class="comparison-image" src="${product2.image}" alt="" width="112" height="84">
            ${product2.name}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Brand</strong></td>
          <td>${product1.brand}</td>
          <td>${product2.brand}</td>
        </tr>
        <tr>
          <td><strong>Price</strong></td>
          <td>${product1.price}</td>
          <td>${product2.price}</td>
        </tr>
        <tr>
          <td><strong>Category</strong></td>
          <td>${product1.category}</td>
          <td>${product2.category}</td>
        </tr>
        <tr>
          <td><strong>Material</strong></td>
          <td>${product1.material}</td>
          <td>${product2.material}</td>
        </tr>
        <tr>
          <td><strong>Lens Type</strong></td>
          <td>${product1.lensType}</td>
          <td>${product2.lensType}</td>
        </tr>
        <tr>
          <td><strong>UV Protection</strong></td>
          <td>${product1.uvProtection}</td>
          <td>${product2.uvProtection}</td>
        </tr>
        <tr>
          <td><strong>Weight</strong></td>
          <td>${product1.weight}</td>
          <td>${product2.weight}</td>
        </tr>
        <tr>
          <td><strong>Warranty</strong></td>
          <td>${product1.warranty}</td>
          <td>${product2.warranty}</td>
        </tr>
        <tr>
          <td><strong>Features</strong></td>
          <td>${product1.features.join('<br>')}</td>
          <td>${product2.features.join('<br>')}</td>
        </tr>
      </tbody>
    </table>
  `;
  
  comparisonResult.innerHTML = comparisonHTML;
  comparisonResult.style.display = 'block';
  comparisonResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========================================
// Contact Form Validation (contact.html)
// ========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name');
    if (!validateField(name, name.value.trim().length >= 2, 'Name must be at least 2 characters')) {
      isValid = false;
    }
    
    // Email validation
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validateField(email, emailRegex.test(email.value.trim()), 'Please enter a valid email address')) {
      isValid = false;
    }
    
    // Subject validation
    const subject = document.getElementById('subject');
    if (!validateField(subject, subject.value.trim().length >= 3, 'Subject must be at least 3 characters')) {
      isValid = false;
    }
    
    // Message validation
    const message = document.getElementById('message');
    if (!validateField(message, message.value.trim().length >= 10, 'Message must be at least 10 characters')) {
      isValid = false;
    }
    
    if (isValid) {
      // Show success message
      const successAlert = document.createElement('div');
      successAlert.className = 'alert alert-success mt-3';
      successAlert.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Thank you! Your message has been sent successfully.';
      contactForm.appendChild(successAlert);
      
      // Reset form
      contactForm.reset();
      
      // Remove alert after 5 seconds
      setTimeout(() => {
        successAlert.remove();
      }, 5000);
    }
  });
}

function validateField(field, condition, errorMsg) {
  const feedback = field.parentElement.querySelector('.invalid-feedback');
  
  if (condition) {
    field.classList.remove('is-invalid');
    if (feedback) feedback.textContent = '';
    return true;
  } else {
    field.classList.add('is-invalid');
    if (feedback) feedback.textContent = errorMsg;
    return false;
  }
}

// Real-time validation
document.querySelectorAll('#contactForm .form-control').forEach(input => {
  input.addEventListener('blur', function() {
    if (this.value.trim() !== '') {
      this.classList.remove('is-invalid');
      const feedback = this.parentElement.querySelector('.invalid-feedback');
      if (feedback) feedback.textContent = '';
    }
  });
});

// ========================================
// Newsletter Form
// ========================================
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = this.querySelector('input[type="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(emailInput.value.trim())) {
      const alert = document.createElement('div');
      alert.className = 'alert alert-success mt-3';
      alert.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Thank you for subscribing!';
      this.appendChild(alert);
      emailInput.value = '';
      
      setTimeout(() => alert.remove(), 4000);
    } else {
      const alert = document.createElement('div');
      alert.className = 'alert alert-danger mt-3';
      alert.innerHTML = '<i class="bi bi-exclamation-circle-fill me-2"></i>Please enter a valid email.';
      this.appendChild(alert);
      
      setTimeout(() => alert.remove(), 3000);
    }
  });
}

// ========================================
// Dynamic Product Rendering
// ========================================
function renderProductCard(product) {
  return `
    <div class="col-lg-3 col-md-6 mb-4 product-card" 
         data-name="${product.name.toLowerCase()}" 
         data-brand="${product.brand.toLowerCase()}" 
         data-category="${product.category.toLowerCase()}">
      <div class="card-custom">
        <div class="card-img-wrapper">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <span class="card-badge">${product.category}</span>
        </div>
        <div class="card-body">
          <p class="card-brand">${product.brand}</p>
          <h5 class="card-title">${product.name}</h5>
          <p class="card-price">${product.price}</p>
          <ul class="card-features">
            ${product.features.map(f => `<li><i class="bi bi-check-circle-fill"></i>${f}</li>`).join('')}
          </ul>
          <div class="d-flex gap-2">
            <a href="${product.specsDoc}" class="btn btn-sm btn-primary-custom flex-fill" download>
              <i class="bi bi-download me-1"></i>Specs
            </a>
            <button class="btn btn-sm btn-outline-primary flex-fill" data-bs-toggle="modal" data-bs-target="#productModal${product.id}">
              <i class="bi bi-eye me-1"></i>Details
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Product Modal -->
    <div class="modal fade" id="productModal${product.id}" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${product.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <img src="${product.image}" alt="${product.name}" class="img-fluid rounded mb-3">
            <p><strong>Brand:</strong> ${product.brand}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Price:</strong> <span class="text-gold fw-bold">${product.price}</span></p>
            <p><strong>Material:</strong> ${product.material}</p>
            <p><strong>Lens Type:</strong> ${product.lensType}</p>
            <p><strong>UV Protection:</strong> ${product.uvProtection}</p>
            <p><strong>Weight:</strong> ${product.weight}</p>
            <p><strong>Warranty:</strong> ${product.warranty}</p>
            <h6>Features:</h6>
            <ul>
              ${product.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
          <div class="modal-footer">
            <a href="${product.specsDoc}" class="btn btn-primary-custom" download>
              <i class="bi bi-download me-1"></i>Download Specs
            </a>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render products on pages that need them
function renderProducts(containerId, productList) {
  const container = document.getElementById(containerId);
  if (container && productList) {
    container.innerHTML = productList.map(p => renderProductCard(p)).join('');
  }
}

// ========================================
// Fade In Animation Keyframe
// ========================================
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

// ========================================
// Initialize on DOM Ready
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  // Add fade-in class to elements
  document.querySelectorAll('.card-custom, .brand-card, .category-card, .why-choose-card, .testimonial-card, .contact-info-card, .timeline-content').forEach(el => {
    el.classList.add('fade-in');
  });
  
  // Re-observe new elements
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
});
