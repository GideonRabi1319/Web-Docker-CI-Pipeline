/* ==========================================================================
   APEXRIDERS SUPERBIKE RENTALS - APPLICATION LOGIC
   ========================================================================== */

// --- BIKES DATASET ---
const BIKES_DATA = [
  {
    id: 'ducati-v4r',
    name: 'Ducati Panigale V4 R',
    brand: 'Ducati',
    category: 'Hypersport',
    power: '240.5 HP',
    torque: '112 Nm',
    weight: '167 kg',
    topSpeed: '315 km/h',
    acceleration: '2.7s (0-100)',
    engineCC: '998 cc',
    pricePerDay: 249,
    image: 'images/ducati_panigale_v4r.jpg',
    popular: true,
    electronics: ['Cornering ABS EVO', 'Ducati Traction Control (DTC EVO 3)', 'Quick Shift Up/Down', 'Slide Control', 'Wheelie Control'],
    description: 'The closest thing to an official WorldSBK race bike. Engineered with carbon wings, 998cc Desmosedici Stradale R engine, and dry clutch.'
  },
  {
    id: 'kawasaki-h2',
    name: 'Kawasaki Ninja H2 Carbon',
    brand: 'Kawasaki',
    category: 'Hypersport',
    power: '228.1 HP',
    torque: '141.7 Nm',
    weight: '238 kg',
    topSpeed: '337 km/h',
    acceleration: '2.5s (0-100)',
    engineCC: '998 cc (Supercharged)',
    pricePerDay: 279,
    image: 'images/kawasaki_ninja_h2.jpg',
    popular: true,
    electronics: ['KTRC Traction Control', 'KLCM Launch Control', 'KIBS Intelligent ABS', 'Ohlins TTX36 Rear Shock', 'Supercharger Pressure Gauge'],
    description: 'Beyond belief performance. Hypercharged 998cc inline-four monster featuring mirror-coated matte spark black paint and carbon fiber upper cowl.'
  },
  {
    id: 'bmw-s1000rr',
    name: 'BMW S1000RR M Package',
    brand: 'BMW',
    category: 'Supersport',
    power: '205 HP',
    torque: '113 Nm',
    weight: '193.5 kg',
    topSpeed: '303 km/h',
    acceleration: '2.8s (0-100)',
    engineCC: '999 cc',
    pricePerDay: 219,
    image: 'images/bmw_s1000rr.jpg',
    popular: true,
    electronics: ['ShiftCam Technology', 'Dynamic Damping Control (DDC)', 'Race ABS Pro', 'Dynamic Traction Control', '6.5" TFT Display'],
    description: 'Precision German engineering refined for maximum lap times. Features M carbon wheels, M lightweight battery, and ShiftCam variable valve timing.'
  },
  {
    id: 'yamaha-r1m',
    name: 'Yamaha YZF-R1M',
    brand: 'Yamaha',
    category: 'Supersport',
    power: '200 HP',
    torque: '113.3 Nm',
    weight: '202 kg',
    topSpeed: '298 km/h',
    acceleration: '2.9s (0-100)',
    engineCC: '998 cc',
    pricePerDay: 199,
    image: 'images/yamaha_r1m.jpg',
    popular: true,
    electronics: ['Öhlins Electronic Racing Suspension (ERS)', 'Communication Control Unit (CCU)', '3D IMU telemetry', 'Crossplane CP4 engine sound'],
    description: 'Derived straight from YZR-M1 MotoGP machinery. Features full carbon fiber bodywork, Öhlins ERS suspension, and crossplane crankshaft.'
  },
  {
    id: 'aprilia-rsv4',
    name: 'Aprilia RSV4 Factory 1100',
    brand: 'Aprilia',
    category: 'Track-Spec',
    power: '217 HP',
    torque: '125 Nm',
    weight: '202 kg',
    topSpeed: '305 km/h',
    acceleration: '2.8s (0-100)',
    engineCC: '1099 cc V4',
    pricePerDay: 229,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80',
    popular: false,
    electronics: ['APRC System', 'Engine Brake Control (AEBC)', '6 Riding Modes (3 Track, 3 Road)', 'Öhlins Smart EC 2.0'],
    description: 'Pure Italian V4 soundtrack and sublime chassis feedback. Built for maximum corner speed with integrated winglets.'
  },
  {
    id: 'ktm-rc390',
    name: 'KTM RC 390 GP Edition',
    brand: 'KTM',
    category: 'Supersport',
    power: '44 HP',
    torque: '37 Nm',
    weight: '155 kg',
    topSpeed: '175 km/h',
    acceleration: '4.9s (0-100)',
    engineCC: '373 cc',
    pricePerDay: 99,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
    popular: false,
    electronics: ['Supermoto ABS Mode', 'Cornering ABS', 'Lean-angle sensitive Motorcycle Traction Control', 'Quickshifter+ optional'],
    description: 'Agile lightweight corner carver inspired by Moto3 race bikes. Perfect for canyon carving and track training.'
  },
  {
    id: 'suzuki-hayabusa',
    name: 'Suzuki Hayabusa Gen 3',
    brand: 'Suzuki',
    category: 'Hypersport',
    power: '190 HP',
    torque: '150 Nm',
    weight: '264 kg',
    topSpeed: '299 km/h',
    acceleration: '2.8s (0-100)',
    engineCC: '1340 cc',
    pricePerDay: 209,
    image: 'https://images.unsplash.com/photo-1609630928812-d195d4651e64?auto=format&fit=crop&w=1000&q=80',
    popular: false,
    electronics: ['Suzuki Intelligent Ride System (S.I.R.S.)', 'Motion Track Brake System', 'Slope Dependent Control System', 'Active Speed Limiter'],
    description: 'The ultimate aerodynamic hyper-tourer. Effortless roll-on acceleration and unmatched high-speed stability.'
  },
  {
    id: 'mv-agusta-f4',
    name: 'MV Agusta Brutale 1000 RR',
    brand: 'MV Agusta',
    category: 'Naked Superbike',
    power: '208 HP',
    torque: '116.5 Nm',
    weight: '186 kg',
    topSpeed: '300 km/h',
    acceleration: '2.8s (0-100)',
    engineCC: '998 cc',
    pricePerDay: 259,
    image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1000&q=80',
    popular: false,
    electronics: ['Motor & Vehicle Integrated Control System (MVICS 2.1)', '8 levels of Traction Control', 'Front Lift Control', 'EAS 3.0 Electronic Shifter'],
    description: 'Motorcycle Art in raw naked form. Titanium connecting rods, radial valves, and aggressive front aerodynamic wings.'
  }
];

// --- STATE MANAGEMENT ---
let currentCategory = 'all';
let searchQuery = '';
let sortBy = 'popular';
let compareList = [];
let activeBookingBike = null;
let bookingStep = 1;
let selectedAddons = [];
let userBookings = JSON.parse(localStorage.getItem('apex_user_bookings')) || [];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderFleet();
  setupEventListeners();
  updateCompareBar();
  updateMyBookingsBadge();
  setInitialDates();
});

// --- SET DEFAULT DATES IN WIDGET & MODAL ---
function setInitialDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 3);

  const formatDate = (date) => date.toISOString().split('T')[0];

  const pickupInput = document.getElementById('searchPickupDate');
  const returnInput = document.getElementById('searchReturnDate');
  if (pickupInput) pickupInput.value = formatDate(tomorrow);
  if (returnInput) returnInput.value = formatDate(nextWeek);

  const modalPickup = document.getElementById('bookPickupDate');
  const modalReturn = document.getElementById('bookReturnDate');
  if (modalPickup) modalPickup.value = formatDate(tomorrow);
  if (modalReturn) modalReturn.value = formatDate(nextWeek);
}

// --- RENDER FLEET CATALOG ---
function renderFleet() {
  const container = document.getElementById('fleetGrid');
  if (!container) return;

  // Filter bikes
  let filtered = BIKES_DATA.filter(bike => {
    const matchCategory = (currentCategory === 'all') || (bike.category.toLowerCase() === currentCategory.toLowerCase());
    const matchSearch = bike.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        bike.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        bike.engineCC.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Sort bikes
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.pricePerDay - b.pricePerDay);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.pricePerDay - a.pricePerDay);
  } else if (sortBy === 'power-desc') {
    filtered.sort((a, b) => parseInt(b.power) - parseInt(a.power));
  } else {
    // popular first
    filtered.sort((a, b) => (b.popular === a.popular ? 0 : b.popular ? 1 : -1));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fa-solid fa-motorcycle text-muted display-3 mb-3"></i>
        <h4 class="text-white">No Superbikes Found</h4>
        <p class="text-muted">Try adjusting your search criteria or category filter.</p>
        <button class="btn btn-apex-outline mt-2" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(bike => {
    const isCompared = compareList.includes(bike.id);
    return `
      <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
        <div class="bike-card glass-card w-100">
          <div class="bike-image-wrapper">
            <img src="${bike.image}" alt="${bike.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80'">
            <span class="bike-category-badge"><i class="fa-solid fa-bolt me-1"></i>${bike.category}</span>
            <div class="bike-price-tag">$${bike.pricePerDay} <span>/ day</span></div>
          </div>
          <div class="bike-card-body">
            <div class="d-flex justify-content-between align-items-start mb-1">
              <div>
                <span class="bike-brand text-uppercase tracking-wider">${bike.brand}</span>
                <h3 class="bike-title text-white">${bike.name}</h3>
              </div>
            </div>

            <div class="spec-grid my-3">
              <div class="spec-item">
                <div class="spec-label">Power</div>
                <div class="spec-value text-gradient-red">${bike.power}</div>
              </div>
              <div class="spec-item">
                <div class="spec-label">Top Speed</div>
                <div class="spec-value text-gradient-cyan">${bike.topSpeed}</div>
              </div>
              <div class="spec-item">
                <div class="spec-label">Engine</div>
                <div class="spec-value">${bike.engineCC}</div>
              </div>
            </div>

            <p class="text-muted small mb-3 flex-grow-1">${bike.description.substring(0, 85)}...</p>

            <div class="d-flex align-items-center justify-content-between pt-2 border-top border-secondary border-opacity-25">
              <div class="form-check form-check-inline m-0">
                <input class="form-check-input" type="checkbox" id="compare-${bike.id}" ${isCompared ? 'checked' : ''} onchange="toggleCompare('${bike.id}')">
                <label class="form-check-label text-muted small cursor-pointer" for="compare-${bike.id}">Compare</label>
              </div>
              <div class="d-flex gap-2">
                <button class="btn btn-sm btn-apex-outline" onclick="openSpecsModal('${bike.id}')">
                  <i class="fa-solid fa-eye me-1"></i> Specs
                </button>
                <button class="btn btn-sm btn-apex-red" onclick="startBooking('${bike.id}')">
                  <i class="fa-solid fa-key me-1"></i> Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Category Pills
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-category');
      renderFleet();
    });
  });

  // Search input
  const searchInput = document.getElementById('searchQueryInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderFleet();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderFleet();
    });
  }

  // Quick hero search button
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      const fleetSection = document.getElementById('fleetSection');
      if (fleetSection) {
        fleetSection.scrollIntoView({ behavior: 'smooth' });
      }
      showToast('Filters applied! Showing available superbikes.', 'info');
    });
  }
}

function resetFilters() {
  currentCategory = 'all';
  searchQuery = '';
  sortBy = 'popular';
  
  const searchInput = document.getElementById('searchQueryInput');
  if (searchInput) searchInput.value = '';
  
  document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
  const firstPill = document.querySelector('.filter-pill[data-category="all"]');
  if (firstPill) firstPill.classList.add('active');

  renderFleet();
}

// --- COMPARISON TOOL LOGIC ---
function toggleCompare(bikeId) {
  const index = compareList.indexOf(bikeId);
  if (index > -1) {
    compareList.splice(index, 1);
  } else {
    if (compareList.length >= 3) {
      showToast('You can compare a maximum of 3 bikes at once.', 'warning');
      const checkbox = document.getElementById(`compare-${bikeId}`);
      if (checkbox) checkbox.checked = false;
      return;
    }
    compareList.push(bikeId);
  }
  updateCompareBar();
  renderFleet();
}

function updateCompareBar() {
  const bar = document.getElementById('compareStickyBar');
  const countEl = document.getElementById('compareCount');
  const previewEl = document.getElementById('compareThumbsPreview');

  if (!bar) return;

  if (compareList.length > 0) {
    bar.classList.add('visible');
    if (countEl) countEl.innerText = compareList.length;
    
    if (previewEl) {
      previewEl.innerHTML = compareList.map(id => {
        const bike = BIKES_DATA.find(b => b.id === id);
        return `<img src="${bike.image}" class="compare-thumb me-1" alt="${bike.name}" title="${bike.name}">`;
      }).join('');
    }
  } else {
    bar.classList.remove('visible');
  }
}

function clearCompare() {
  compareList = [];
  updateCompareBar();
  renderFleet();
  showToast('Comparison list cleared', 'info');
}

function openCompareModal() {
  if (compareList.length < 2) {
    showToast('Select at least 2 bikes to compare performance.', 'warning');
    return;
  }

  const modalBody = document.getElementById('compareModalBody');
  const selectedBikes = compareList.map(id => BIKES_DATA.find(b => b.id === id));

  let html = `
    <div class="table-responsive">
      <table class="table table-dark table-hover align-middle text-center mb-0" style="border-color: rgba(255,255,255,0.1)">
        <thead>
          <tr>
            <th class="text-start text-muted">Specification</th>
            ${selectedBikes.map(b => `
              <th>
                <img src="${b.image}" style="height: 90px; object-fit: cover;" class="rounded mb-2 w-100"><br>
                <span class="text-white font-heading h6">${b.name}</span><br>
                <span class="badge bg-danger mt-1">$${b.pricePerDay}/day</span>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-start text-muted font-heading">Brand</td>
            ${selectedBikes.map(b => `<td class="fw-bold text-cyan">${b.brand}</td>`).join('')}
          </tr>
          <tr>
            <td class="text-start text-muted font-heading">Category</td>
            ${selectedBikes.map(b => `<td>${b.category}</td>`).join('')}
          </tr>
          <tr>
            <td class="text-start text-muted font-heading">Max Horsepower</td>
            ${selectedBikes.map(b => `<td class="text-gradient-red fw-bold fs-5">${b.power}</td>`).join('')}
          </tr>
          <tr>
            <td class="text-start text-muted font-heading">Max Torque</td>
            ${selectedBikes.map(b => `<td>${b.torque}</td>`).join('')}
          </tr>
          <tr>
            <td class="text-start text-muted font-heading">Top Speed</td>
            ${selectedBikes.map(b => `<td class="text-gradient-cyan fw-bold">${b.topSpeed}</td>`).join('')}
          </tr>
          <tr>
            <td class="text-start text-muted font-heading">0-100 km/h</td>
            ${selectedBikes.map(b => `<td>${b.acceleration}</td>`).join('')}
          </tr>
          <tr>
            <td class="text-start text-muted font-heading">Engine CC</td>
            ${selectedBikes.map(b => `<td>${b.engineCC}</td>`).join('')}
          </tr>
          <tr>
            <td class="text-start text-muted font-heading">Dry Weight</td>
            ${selectedBikes.map(b => `<td>${b.weight}</td>`).join('')}
          </tr>
          <tr>
            <td class="text-start text-muted font-heading">Action</td>
            ${selectedBikes.map(b => `
              <td>
                <button class="btn btn-sm btn-apex-red w-100" onclick="closeCompareAndBook('${b.id}')">
                  Book Now
                </button>
              </td>
            `).join('')}
          </tr>
        </tbody>
      </table>
    </div>
  `;

  modalBody.innerHTML = html;
  const modal = new bootstrap.Modal(document.getElementById('compareModal'));
  modal.show();
}

function closeCompareAndBook(bikeId) {
  const compareModalEl = document.getElementById('compareModal');
  const modalInstance = bootstrap.Modal.getInstance(compareModalEl);
  if (modalInstance) modalInstance.hide();
  startBooking(bikeId);
}

// --- BIKE SPECS MODAL ---
function openSpecsModal(bikeId) {
  const bike = BIKES_DATA.find(b => b.id === bikeId);
  if (!bike) return;

  document.getElementById('specsModalTitle').innerText = bike.name;
  document.getElementById('specsModalImage').src = bike.image;
  document.getElementById('specsModalBrand').innerText = bike.brand;
  document.getElementById('specsModalCategory').innerText = bike.category;
  document.getElementById('specsModalPrice').innerText = `$${bike.pricePerDay}`;

  document.getElementById('specsModalPower').innerText = bike.power;
  document.getElementById('specsModalTorque').innerText = bike.torque;
  document.getElementById('specsModalWeight').innerText = bike.weight;
  document.getElementById('specsModalTopSpeed').innerText = bike.topSpeed;
  document.getElementById('specsModalAccel').innerText = bike.acceleration;
  document.getElementById('specsModalCC').innerText = bike.engineCC;
  document.getElementById('specsModalDesc').innerText = bike.description;

  const electronicsList = document.getElementById('specsModalElectronics');
  electronicsList.innerHTML = bike.electronics.map(item => `
    <li class="mb-1 text-muted"><i class="fa-solid fa-microchip text-info me-2"></i>${item}</li>
  `).join('');

  const bookBtn = document.getElementById('specsModalBookBtn');
  bookBtn.onclick = () => {
    const modalEl = document.getElementById('specsModal');
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();
    startBooking(bike.id);
  };

  const modal = new bootstrap.Modal(document.getElementById('specsModal'));
  modal.show();
}

// --- MULTI-STEP BOOKING WIZARD ---
function startBooking(bikeId) {
  const bike = BIKES_DATA.find(b => b.id === bikeId);
  if (!bike) return;

  activeBookingBike = bike;
  bookingStep = 1;
  selectedAddons = [];

  document.getElementById('bookBikeName').innerText = bike.name;
  document.getElementById('bookBikePrice').innerText = `$${bike.pricePerDay}`;
  document.getElementById('bookBikeImg').src = bike.image;

  updateWizardStepUI();
  calculateBookingTotals();

  const modal = new bootstrap.Modal(document.getElementById('bookingModal'));
  modal.show();
}

function setBookingStep(step) {
  if (step === 2) {
    const pickupDate = new Date(document.getElementById('bookPickupDate').value);
    const returnDate = new Date(document.getElementById('bookReturnDate').value);
    if (isNaN(pickupDate) || isNaN(returnDate) || returnDate <= pickupDate) {
      showToast('Please select a valid return date after pickup date.', 'warning');
      return;
    }
  }

  if (step === 4) {
    const name = document.getElementById('riderName').value.trim();
    const email = document.getElementById('riderEmail').value.trim();
    const phone = document.getElementById('riderPhone').value.trim();
    const license = document.getElementById('riderLicense').value.trim();

    if (!name || !email || !phone || !license) {
      showToast('Please fill out all required rider information fields.', 'warning');
      return;
    }
  }

  bookingStep = step;
  updateWizardStepUI();
  calculateBookingTotals();
}

function updateWizardStepUI() {
  // Hide all step panels
  for (let i = 1; i <= 5; i++) {
    const stepEl = document.getElementById(`bookingStep${i}`);
    if (stepEl) stepEl.classList.add('d-none');
    
    const indicator = document.getElementById(`stepIndicator${i}`);
    if (indicator) {
      indicator.classList.remove('active', 'completed');
      if (i < bookingStep) indicator.classList.add('completed');
      if (i === bookingStep) indicator.classList.add('active');
    }
  }

  // Show active step
  const activeStepEl = document.getElementById(`bookingStep${bookingStep}`);
  if (activeStepEl) activeStepEl.classList.remove('d-none');

  // Button visibility
  const prevBtn = document.getElementById('bookPrevBtn');
  const nextBtn = document.getElementById('bookNextBtn');
  const confirmBtn = document.getElementById('bookConfirmBtn');

  if (bookingStep === 1) {
    prevBtn.classList.add('d-none');
    nextBtn.classList.remove('d-none');
    confirmBtn.classList.add('d-none');
  } else if (bookingStep < 4) {
    prevBtn.classList.remove('d-none');
    nextBtn.classList.remove('d-none');
    confirmBtn.classList.add('d-none');
  } else if (bookingStep === 4) {
    prevBtn.classList.remove('d-none');
    nextBtn.classList.add('d-none');
    confirmBtn.classList.remove('d-none');
  } else {
    // Step 5 (Confirmation Pass)
    prevBtn.classList.add('d-none');
    nextBtn.classList.add('d-none');
    confirmBtn.classList.add('d-none');
  }
}

function toggleAddon(addonId, name, dailyPrice) {
  const card = document.getElementById(`addon-${addonId}`);
  const index = selectedAddons.findIndex(a => a.id === addonId);

  if (index > -1) {
    selectedAddons.splice(index, 1);
    card.classList.remove('selected');
  } else {
    selectedAddons.push({ id: addonId, name: name, price: dailyPrice });
    card.classList.add('selected');
  }
  calculateBookingTotals();
}

function calculateBookingTotals() {
  if (!activeBookingBike) return;

  const pickupVal = document.getElementById('bookPickupDate').value;
  const returnVal = document.getElementById('bookReturnDate').value;

  const pickupDate = new Date(pickupVal);
  const returnDate = new Date(returnVal);

  let days = 1;
  if (!isNaN(pickupDate) && !isNaN(returnDate) && returnDate > pickupDate) {
    const diffTime = Math.abs(returnDate - pickupDate);
    days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  const bikeRentalCost = activeBookingBike.pricePerDay * days;
  const addonsTotalPerDay = selectedAddons.reduce((sum, item) => sum + item.price, 0);
  const totalAddonsCost = addonsTotalPerDay * days;
  const deposit = 500;
  const subtotal = bikeRentalCost + totalAddonsCost;
  const tax = Math.round(subtotal * 0.10);
  const grandTotal = subtotal + tax + deposit;

  // Update summary fields in step 4
  document.getElementById('summaryBikeName').innerText = activeBookingBike.name;
  document.getElementById('summaryRentalDays').innerText = `${days} Day(s)`;
  document.getElementById('summaryDailyRate').innerText = `$${activeBookingBike.pricePerDay}/day`;
  document.getElementById('summaryBikeTotal').innerText = `$${bikeRentalCost}`;
  
  const addonsSummaryEl = document.getElementById('summaryAddonsList');
  if (addonsSummaryEl) {
    if (selectedAddons.length === 0) {
      addonsSummaryEl.innerHTML = `<div class="d-flex justify-content-between text-muted small"><span>No add-ons selected</span><span>$0</span></div>`;
    } else {
      addonsSummaryEl.innerHTML = selectedAddons.map(a => `
        <div class="d-flex justify-content-between text-muted small mb-1">
          <span>+ ${a.name} ($${a.price}/day)</span>
          <span>$${a.price * days}</span>
        </div>
      `).join('');
    }
  }

  document.getElementById('summaryDeposit').innerText = `$${deposit}`;
  document.getElementById('summaryTax').innerText = `$${tax}`;
  document.getElementById('summaryGrandTotal').innerText = `$${grandTotal}`;
}

function finalizeBooking() {
  const pickupVal = document.getElementById('bookPickupDate').value;
  const returnVal = document.getElementById('bookReturnDate').value;
  const location = document.getElementById('bookPickupLocation').value;
  const riderName = document.getElementById('riderName').value;
  const riderEmail = document.getElementById('riderEmail').value;
  const riderPhone = document.getElementById('riderPhone').value;
  const riderLicense = document.getElementById('riderLicense').value;

  const pickupDate = new Date(pickupVal);
  const returnDate = new Date(returnVal);
  const days = Math.max(1, Math.ceil(Math.abs(returnDate - pickupDate) / (1000 * 60 * 60 * 24)));

  const bikeRentalCost = activeBookingBike.pricePerDay * days;
  const totalAddonsCost = selectedAddons.reduce((sum, item) => sum + item.price, 0) * days;
  const tax = Math.round((bikeRentalCost + totalAddonsCost) * 0.10);
  const totalAmount = bikeRentalCost + totalAddonsCost + tax + 500;

  const bookingCode = 'APX-' + Math.floor(100000 + Math.random() * 900000);

  const bookingRecord = {
    id: bookingCode,
    bikeName: activeBookingBike.name,
    bikeImage: activeBookingBike.image,
    location: location,
    pickupDate: pickupVal,
    returnDate: returnVal,
    days: days,
    riderName: riderName,
    riderEmail: riderEmail,
    riderPhone: riderPhone,
    license: riderLicense,
    addons: selectedAddons,
    totalAmount: totalAmount,
    status: 'Confirmed',
    createdAt: new Date().toLocaleDateString()
  };

  userBookings.unshift(bookingRecord);
  localStorage.setItem('apex_user_bookings', JSON.stringify(userBookings));

  // Render Confirmation Pass (Step 5)
  document.getElementById('passBookingCode').innerText = bookingCode;
  document.getElementById('passBikeName').innerText = activeBookingBike.name;
  document.getElementById('passDates').innerText = `${pickupVal} to ${returnVal} (${days} Days)`;
  document.getElementById('passHub').innerText = location;
  document.getElementById('passRiderName').innerText = riderName;
  document.getElementById('passTotal').innerText = `$${totalAmount}`;

  updateMyBookingsBadge();
  setBookingStep(5);
  showToast('Booking successfully confirmed!', 'success');
}

// --- MY BOOKINGS MODAL ---
function updateMyBookingsBadge() {
  const badge = document.getElementById('myBookingsCount');
  if (badge) badge.innerText = userBookings.length;
}

function openMyBookingsModal() {
  const container = document.getElementById('myBookingsList');
  if (!container) return;

  if (userBookings.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5">
        <i class="fa-solid fa-ticket-simple text-muted display-4 mb-3"></i>
        <h5 class="text-white">No Active Bookings</h5>
        <p class="text-muted">You haven't reserved any superbikes yet.</p>
        <button class="btn btn-apex-red" data-bs-dismiss="modal">Browse Fleet</button>
      </div>
    `;
  } else {
    container.innerHTML = userBookings.map(b => `
      <div class="glass-card rounded-3 p-3 mb-3 border border-secondary border-opacity-25">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div class="d-flex align-items-center gap-3">
            <img src="${b.bikeImage}" style="width: 80px; height: 60px; object-fit: cover;" class="rounded">
            <div>
              <div class="badge bg-success mb-1">${b.status}</div>
              <h6 class="text-white mb-0 font-heading">${b.bikeName}</h6>
              <small class="text-muted"><i class="fa-solid fa-calendar me-1"></i>${b.pickupDate} &rarr; ${b.returnDate}</small>
            </div>
          </div>
          <div class="text-md-end">
            <div class="text-gradient-red fw-bold fs-5">$${b.totalAmount}</div>
            <small class="text-cyan font-monospace">${b.id}</small>
            <div class="mt-2">
              <button class="btn btn-sm btn-outline-danger" onclick="cancelBooking('${b.id}')">Cancel</button>
              <button class="btn btn-sm btn-apex-outline" onclick="printReceipt('${b.id}')">Print Receipt</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  const modal = new bootstrap.Modal(document.getElementById('myBookingsModal'));
  modal.show();
}

function cancelBooking(bookingId) {
  if (confirm('Are you sure you want to cancel this booking reservation?')) {
    userBookings = userBookings.filter(b => b.id !== bookingId);
    localStorage.setItem('apex_user_bookings', JSON.stringify(userBookings));
    updateMyBookingsBadge();
    openMyBookingsModal();
    showToast('Booking cancelled successfully.', 'info');
  }
}

function printReceipt(bookingId) {
  const b = userBookings.find(x => x.id === bookingId);
  if (!b) return;

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Receipt - ${b.id}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 30px; color: #111; }
          .receipt-box { border: 2px solid #333; padding: 25px; max-width: 600px; margin: 0 auto; }
          h2 { margin-top: 0; color: #d92d20; }
          .flex { display: flex; justify-content: space-between; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="receipt-box">
          <h2>ApexRiders Superbike Rentals</h2>
          <hr>
          <div class="flex"><strong>Booking Code:</strong> <span>${b.id}</span></div>
          <div class="flex"><strong>Rider Name:</strong> <span>${b.riderName}</span></div>
          <div class="flex"><strong>Superbike:</strong> <span>${b.bikeName}</span></div>
          <div class="flex"><strong>Pick-up Location:</strong> <span>${b.location}</span></div>
          <div class="flex"><strong>Rental Period:</strong> <span>${b.pickupDate} to ${b.returnDate} (${b.days} Days)</span></div>
          <div class="flex"><strong>Total Amount Paid:</strong> <span>$${b.totalAmount} (Includes $500 Deposit)</span></div>
          <hr>
          <p style="text-align:center; font-size: 12px;">Thank you for riding with ApexRiders. Please present your driving license upon bike pickup.</p>
        </div>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    toastContainer.style.zIndex = '2000';
    document.body.appendChild(toastContainer);
  }

  const bgClass = type === 'success' ? 'bg-success text-white' : type === 'warning' ? 'bg-warning text-dark' : 'bg-dark text-white border border-cyan';
  const icon = type === 'success' ? 'fa-circle-check' : type === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-info';

  const toastId = 'toast-' + Date.now();
  const toastHtml = `
    <div id="${toastId}" class="toast align-items-center ${bgClass} border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <i class="fa-solid ${icon}"></i> ${message}
        </div>
        <button type="button" class="btn-close ${type === 'warning' ? '' : 'btn-close-white'} me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  toastContainer.insertAdjacentHTML('beforeend', toastHtml);
  const toastEl = document.getElementById(toastId);
  const bsToast = new bootstrap.Toast(toastEl, { delay: 3500 });
  bsToast.show();

  toastEl.addEventListener('hidden.bs.toast', () => {
    toastEl.remove();
  });
}
