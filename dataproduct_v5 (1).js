// =============================================
// AQASHH COFFEE — dataproduct_v5.js (Enhanced)
// =============================================

// --- DATA PRODUK ---
const products = [
  // COFFEE
  { id: 1, name: "Kopi Susu Aren", price: 30000, category: "Coffee", badge: "bestseller",
    rating: 4.9, image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=400",
    description: "Perpaduan sempurna espresso pekat dengan susu segar dan manisnya gula aren alami. Signature drink kami yang menjadi favorit pelanggan sepanjang masa." },
  { id: 2, name: "Americano", price: 28000, category: "Coffee", badge: null,
    rating: 4.7, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400",
    description: "Kopi hitam klasik hasil ekstraksi double espresso yang diseduh dengan air panas. Menyajikan rasa kopi yang murni, kuat, dan menyegarkan." },
  { id: 3, name: "Caramel Macchiato", price: 32000, category: "Coffee", badge: "hot",
    rating: 4.8, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=400",
    description: "Susu segar hangat dengan sirup vanilla, ditutup dengan espresso pekat dan siraman saus karamel yang legit di atasnya." },
  { id: 8, name: "Espresso", price: 25000, category: "Coffee", badge: null,
    rating: 4.7, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400",
    description: "Ekstraksi kopi murni yang pekat dan intens. Menggunakan biji kopi House Blend Aqashh dengan notes dark chocolate dan nutty." },
  { id: 22, name: "Cappuccino", price: 30000, category: "Coffee", badge: null,
    rating: 4.8, image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=400",
    description: "Keseimbangan presisi antara espresso pekat, susu steam panas, dan foam tebal di atasnya. Taburan bubuk cokelat opsional." },
  { id: 23, name: "V60 Manual Brew", price: 35000, category: "Coffee", badge: "new",
    rating: 4.9, image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=400",
    description: "Seduhan manual metode pour-over (V60) menggunakan biji kopi Single Origin Nusantara pilihan. Karakter rasa clean dan aroma floral/fruity yang kuat." },
  { id: 24, name: "Hazelnut Latte", price: 32000, category: "Coffee", badge: null,
    rating: 4.7, image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=400",
    description: "Latte klasik dengan tambahan sirup hazelnut premium. Rasa nutty yang wangi berpadu pas dengan espresso." },

  // NON-COFFEE
  { id: 4, name: "Matcha Latte", price: 32000, category: "Non-Coffee", badge: "bestseller",
    rating: 4.8, image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&q=80&w=400",
    description: "Bubuk matcha premium dari Jepang yang diseduh dan dipadukan dengan susu segar. Memberikan rasa earthy yang khas dan menenangkan." },
  { id: 5, name: "Red Velvet", price: 33000, category: "Non-Coffee", badge: "hot",
    rating: 4.8, image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80&w=400",
    description: "Minuman manis dengan perpaduan rasa cokelat dan vanilla khas kue Red Velvet, disajikan dengan susu kental creamy." },
  { id: 6, name: "Ice Tea Premium", price: 25000, category: "Non-Coffee", badge: null,
    rating: 4.6, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=400",
    description: "Es teh segar yang diseduh dari daun teh pilihan dengan aroma jasmine yang menenangkan. Cocok untuk melepas dahaga." },
  { id: 7, name: "Lemon Squash", price: 35000, category: "Non-Coffee", badge: null,
    rating: 4.6, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400",
    description: "Perpaduan sirup lemon murni dengan air soda berkarbonasi. Sangat menyegarkan dan asam manisnya pas." },
  { id: 25, name: "Taro Latte", price: 30000, category: "Non-Coffee", badge: "new",
    rating: 4.8, image: "https://images.unsplash.com/photo-1626359551978-5a02e609756b?auto=format&fit=crop&q=80&w=400",
    description: "Kelezatan rasa ubi ungu (taro) yang manis dan wangi, diseduh dengan susu segar yang creamy. Tampilannya cantik dengan warna ungu pastel." },
  { id: 26, name: "Belgian Chocolate", price: 33000, category: "Non-Coffee", badge: null,
    rating: 4.9, image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=400",
    description: "Cokelat pekat ala Belgia yang dilelehkan ke dalam susu hangat. Teksturnya kental, kaya rasa, dan tidak terlalu manis (bittersweet)." },
  { id: 27, name: "Lychee Yakult", price: 28000, category: "Non-Coffee", badge: "hot",
    rating: 4.7, image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=400",
    description: "Kombinasi probiotik Yakult yang asam segar dengan manisnya sirup leci dan buah leci asli utuh di dalamnya." },

  // MAKANAN
  { id: 9, name: "Nasi Goreng Rempah", price: 36000, category: "makanan", badge: null,
    rating: 4.7, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=400",
    description: "Nasi goreng spesial yang dimasak dengan bumbu rempah rahasia khas nusantara, disajikan dengan telur mata sapi dan kerupuk." },
  { id: 10, name: "Nasi Goreng Kampung", price: 40000, category: "makanan", badge: "bestseller",
    rating: 4.8, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=400",
    description: "Nasi goreng gurih dengan isian ayam suwir, telur orak-arik, bakso, dan taburan bawang goreng yang renyah." },
  { id: 11, name: "Spaghetti Bolognese", price: 78000, category: "makanan", badge: null,
    rating: 4.7, image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&q=80&w=400",
    description: "Pasta spaghetti al dente dengan saus daging sapi cincang tomat yang kaya rasa dan taburan keju parmesan." },
  { id: 12, name: "Spaghetti Carbonara", price: 75000, category: "makanan", badge: null,
    rating: 4.8, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=400",
    description: "Pasta klasik Italia dengan saus creamy yang terbuat dari telur, keju parmesan, dan potongan daging asap yang gurih." },
  { id: 13, name: "Spaghetti Aglio e Olio", price: 80000, category: "makanan", badge: "new",
    rating: 4.8, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=400",
    description: "Pasta spaghetti ringan yang ditumis dengan olive oil premium, bawang putih, sedikit cabai kering, dan potongan udang segar." },
  { id: 28, name: "Rice Bowl Beef Teriyaki", price: 38000, category: "makanan", badge: "hot",
    rating: 4.9, image: "https://images.unsplash.com/photo-1542367592-8849eb950fd8?auto=format&fit=crop&q=80&w=400",
    description: "Nasi hangat pulen dengan topping irisan daging sapi tipis yang dimasak bumbu teriyaki manis gurih, plus taburan wijen." },
  { id: 29, name: "Chicken Katsu Curry", price: 42000, category: "makanan", badge: null,
    rating: 4.8, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=400",
    description: "Ayam filet tepung roti (katsu) yang super renyah disajikan dengan nasi hangat dan siraman kuah kari Jepang kental berisi kentang dan wortel." },
  { id: 30, name: "Snack Platter", price: 35000, category: "makanan", badge: null,
    rating: 4.6, image: "https://images.unsplash.com/photo-1599487405626-d24268e6e589?auto=format&fit=crop&q=80&w=400",
    description: "Teman ngoding yang pas! Kombinasi porsi besar berisi kentang goreng, sosis potong, dan chicken nugget lengkap dengan saus mayo pedas." },
  { id: 31, name: "Dimsum Mentai", price: 26000, category: "makanan", badge: "hot",
    rating: 4.8, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=400",
    description: "4 potong dimsum ayam udang yang juicy, di-torch (dibakar) dengan saus mentai creamy pedas di atasnya." },

  // PASTRY
  { id: 14, name: "Croissant", price: 27000, category: "pastry", badge: null,
    rating: 4.7, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400",
    description: "Pastry khas Prancis yang renyah di luar dan berongga lembut di dalam. Sangat cocok dinikmati bersama secangkir Americano panas." },
  { id: 15, name: "Blueberry Muffin", price: 29000, category: "pastry", badge: null,
    rating: 4.7, image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=400",
    description: "Muffin lembut yang dipanggang sempurna dengan isian buah blueberry asli yang meleleh di mulut." },
  { id: 16, name: "Chocolate Cake", price: 30000, category: "pastry", badge: "bestseller",
    rating: 4.9, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400",
    description: "Potongan kue cokelat yang moist dan padat, dilapisi dengan chocolate ganache yang kaya dan lumer." },
  { id: 17, name: "White Cheesecake", price: 35000, category: "pastry", badge: null,
    rating: 4.8, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=400",
    description: "Cheesecake bergaya New York yang creamy dan lembut, dengan dasar biskuit crust yang renyah dan sedikit rasa lemon." },
  { id: 32, name: "Cinnamon Roll", price: 26000, category: "pastry", badge: "hot",
    rating: 4.8, image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=400",
    description: "Roti gulung kayu manis yang dipanggang hingga harum keemasan, disiram lelehan cream cheese frosting yang legit." },
  { id: 33, name: "Almond Croissant", price: 32000, category: "pastry", badge: "new",
    rating: 4.7, image: "https://images.unsplash.com/photo-1518063076127-14e39ecbb980?auto=format&fit=crop&q=80&w=400",
    description: "Varian croissant berlapis dengan isian krim almond (frangipane) dan ditaburi irisan kacang almond panggang di atasnya." },
  { id: 34, name: "Fudgy Brownie Ice Cream", price: 30000, category: "pastry", badge: null,
    rating: 4.9, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=400",
    description: "Satu slice brownie cokelat pekat (fudgy) yang disajikan hangat bersama satu scoop es krim vanilla dingin." },

  // MOCKTAIL
  { id: 18, name: "Mojito Virgin", price: 38000, category: "Mocktail", badge: null,
    rating: 4.7, image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&q=80&w=400",
    description: "Minuman non-alkohol menyegarkan dari perpaduan air soda, sirup mint, perasan jeruk nipis segar, dan daun mint asli." },
  { id: 19, name: "Virgin Pina Colada", price: 40000, category: "Mocktail", badge: "new",
    rating: 4.8, image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=400",
    description: "Campuran manis dan creamy dari jus nanas segar dan santan/susu kelapa, di-blend dengan es batu hingga bertekstur smoothie." },
  { id: 20, name: "Sunrise Mocktail", price: 42000, category: "Mocktail", badge: "hot",
    rating: 4.9, image: "https://images.unsplash.com/photo-1560508180-03f285f67ded?auto=format&fit=crop&q=80&w=400",
    description: "Mocktail cantik dengan gradasi warna layaknya matahari terbit. Terbuat dari jus jeruk murni dan sentuhan sirup grenadine merah." },
  { id: 21, name: "Mango Mule", price: 39000, category: "Mocktail", badge: null,
    rating: 4.7, image: "https://images.unsplash.com/photo-1587888637140-849b25cd5c7f?auto=format&fit=crop&q=80&w=400",
    description: "Paduan unik puree mangga manis dengan ginger ale (soda jahe) yang memberikan sensasi hangat sekaligus menyegarkan." },
  { id: 35, name: "Ocean Blue Soda", price: 36000, category: "Mocktail", badge: null,
    rating: 4.7, image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?auto=format&fit=crop&q=80&w=400",
    description: "Sensasi liburan di pantai! Mocktail segar dari sirup blue curacao, sirup leci, dan air soda berkarbonasi." },
  { id: 36, name: "Strawberry Mint Squash", price: 38000, category: "Mocktail", badge: "bestseller",
    rating: 4.8, image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=400",
    description: "Muddle (tumbukan) buah stroberi segar dan daun mint, ditambahkan dengan air soda lemon yang asam manis." }
];

// --- TESTIMONIALS DATA ---
const testimonials = [
  { name: "Raditya F.", avatar: "R", stars: 5, comment: "Kopi susu arennya juara banget! Langsung jadi tempat nongkrong favorit kalau lagi ngerjain tugas.", time: "2 hari lalu", role: "Mahasiswa UB" },
  { name: "Sinta W.", avatar: "S", stars: 5, comment: "Suasananya nyaman banget, WiFinya kencang, dan stafnya ramah. Cocok buat freelancer kayak saya!", time: "1 minggu lalu", role: "Freelance Designer" },
  { name: "Bima P.", avatar: "B", stars: 5, comment: "V60 Manual Brewnya beneran enak, bisa kerasa single origin-nya. Satu-satunya tempat di Malang yang niat kayak gini.", time: "3 hari lalu", role: "Coffee Enthusiast" },
  { name: "Layla A.", avatar: "L", stars: 5, comment: "Chocolate Cake + Belgian Choco-nya mantap buat nemenin nugas. Porsi pas, harga juga masuk akal!", time: "5 hari lalu", role: "Mahasiswi UM" },
  { name: "Dimas K.", avatar: "D", stars: 4, comment: "Sunrise Mocktailnya cantik banget, sayang fotonya sebelum diminum 😄 Recommended buat yang mau nongkrong sore!", time: "2 minggu lalu", role: "Content Creator" },
  { name: "Fira N.", avatar: "F", stars: 5, comment: "Dimsum Mentainya bikin ketagihan! Satu porsi kurang, harus pesan dua. Wajib coba!", time: "1 minggu lalu", role: "Dosen Muda" },
];

// --- STATE ---
let cart = JSON.parse(localStorage.getItem("aqashhCart_v2")) || [];
let currentUser = null;
let currentCategory = "all";
let isDiscountApplied = false;
let currentModalProductId = null;
let currentModalQty = 1;
let searchTimer = null;

// --- INIT ---
document.addEventListener("DOMContentLoaded", () => {
  renderSkeletons();
  setTimeout(() => {
    renderProducts(products);
    renderTestimonials();
    checkUserSession();
    updateCartUI();
    toggleLokasi();
    checkDarkMode();
    startCarousel();
    updateOpenStatus();
    setupBackToTop();
    setupSwipeCarousel();
  }, 600);
});

// --- OPEN STATUS ---
function updateOpenStatus() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon...6=Sat
  const hour = now.getHours();
  const min = now.getMinutes();
  const current = hour + min / 60;

  let open = false;
  if (day >= 1 && day <= 5) { open = current >= 8 && current < 22; }
  else { open = current >= 9 && current < 23; }

  const el = document.getElementById("open-status");
  const dot = document.getElementById("status-dot-color");
  const text = document.getElementById("status-text");

  if (el) {
    el.className = "hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold " + (open ? "status-open" : "status-closed");
    dot.style.background = open ? "#16a34a" : "#dc2626";
    text.textContent = open ? "Buka Sekarang" : "Tutup";
  }
}

// --- DARK MODE ---
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
  document.getElementById('theme-icon').innerText = isDark ? '☀️' : '🌙';
}
function checkDarkMode() {
  if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
    document.getElementById('theme-icon').innerText = '☀️';
  }
}

// --- CAROUSEL ---
let currentSlide = 0;
let totalSlides = 3;
let carouselInterval;

function startCarousel() {
  carouselInterval = setInterval(() => { nextSlide(); }, 5500);
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}
function prevSlide() {
  clearInterval(carouselInterval);
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
  startCarousel();
}
function goToSlide(index) {
  clearInterval(carouselInterval);
  currentSlide = index;
  updateCarousel();
  startCarousel();
}
function updateCarousel() {
  const inner = document.getElementById('hero-carousel');
  inner.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.style.background = i === currentSlide ? '#f59e0b' : 'rgba(255,255,255,0.4)';
    dot.style.width = i === currentSlide ? '24px' : '8px';
  });
}

// Swipe support
function setupSwipeCarousel() {
  const el = document.getElementById('hero-carousel');
  if (!el) return;
  let startX = 0;
  el.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  el.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) {
      clearInterval(carouselInterval);
      dx < 0 ? nextSlide() : prevSlide();
      startCarousel();
    }
  }, { passive: true });
}

// --- SKELETONS ---
function renderSkeletons(count = 8) {
  const container = document.getElementById("product-list");
  container.innerHTML = Array.from({ length: count }).map(() => `
    <div class="rounded-[18px] overflow-hidden" style="background:var(--bg-card);border:1px solid var(--border-soft)">
      <div class="skeleton h-44 md:h-52 w-full"></div>
      <div class="p-5 space-y-2">
        <div class="skeleton h-4 w-3/4 rounded-lg"></div>
        <div class="skeleton h-4 w-1/2 rounded-lg"></div>
        <div class="skeleton h-8 w-full rounded-xl mt-3"></div>
      </div>
    </div>
  `).join('');
}

// --- BADGE CONFIG ---
const badgeConfig = {
  bestseller: { label: '🏆 Bestseller', cls: 'badge-bestseller' },
  new: { label: '✨ Baru', cls: 'badge-new' },
  hot: { label: '🔥 Populer', cls: 'badge-hot' },
};

// --- RENDER PRODUCTS ---
function renderProducts(items) {
  const container = document.getElementById("product-list");
  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-20 text-center flex flex-col items-center gap-3">
        <span class="text-6xl opacity-30">☕</span>
        <p class="font-semibold text-lg" style="color:var(--text-secondary)">Menu tidak ditemukan</p>
        <p class="text-sm" style="color:var(--text-muted)">Coba kata kunci lain ya!</p>
      </div>`;
    return;
  }

  container.innerHTML = items.map((p, i) => {
    const badge = p.badge && badgeConfig[p.badge] ? badgeConfig[p.badge] : null;
    const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));
    return `
    <div onclick="openProductModal(${p.id})" class="product-card flex flex-col group" style="animation:fadeUp 0.4s ease ${i * 0.05}s both">
      <div class="relative overflow-hidden" style="height:180px">
        <img src="${p.image}" alt="${p.name}" loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=400'"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        ${badge ? `<span class="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${badge.cls}">${badge.label}</span>` : ''}
        <span class="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-lg text-amber-400 bg-black/60 backdrop-blur-sm">★ ${p.rating.toFixed(1)}</span>
        <div class="absolute bottom-3 right-3 w-9 h-9 bg-amber-600 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
        </div>
      </div>
      <div class="p-4 flex-1 flex flex-col gap-1">
        <h4 class="font-semibold text-sm md:text-base leading-tight line-clamp-1 group-hover:text-amber-700 transition-colors" style="color:var(--text-primary)">${p.name}</h4>
        <p class="text-sm font-bold" style="color:var(--amber-brand)">Rp ${p.price.toLocaleString('id-ID')}</p>
      </div>
    </div>`;
  }).join('');
}

// --- FILTER & SEARCH ---
function filterProduk(category) {
  currentCategory = category;
  document.querySelectorAll('.category-btn').forEach(btn => {
    const match = btn.getAttribute('onclick').includes(`'${category}'`) ||
      (category === 'all' && btn.getAttribute('onclick').includes("'all'"));
    btn.classList.toggle('active-cat', match);
  });
  document.getElementById('search-input').value = '';
  renderSkeletons(category === 'all' ? 8 : 4);
  setTimeout(() => {
    renderProducts(category === 'all' ? products : products.filter(p => p.category.toLowerCase() === category.toLowerCase()));
  }, 200);
}

function searchDebounced() {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(searchProduct, 250);
}
function searchProduct() {
  const q = document.getElementById('search-input').value.toLowerCase().trim();
  let pool = currentCategory === 'all' ? products : products.filter(p => p.category.toLowerCase() === currentCategory.toLowerCase());
  renderProducts(q ? pool.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) : pool);
}

// --- TESTIMONIALS ---
function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;
  container.innerHTML = testimonials.map(t => `
    <div class="testimonial-card shrink-0" style="min-width:280px;max-width:300px">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0" style="background:var(--amber-dark)">${t.avatar}</div>
        <div>
          <p class="font-semibold text-sm" style="color:var(--text-primary)">${t.name}</p>
          <p class="text-xs" style="color:var(--text-muted)">${t.role}</p>
        </div>
        <span class="ml-auto text-xs" style="color:var(--text-muted)">${t.time}</span>
      </div>
      <div class="text-amber-400 text-sm mb-2">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
      <p class="text-sm font-light leading-relaxed italic" style="color:var(--text-secondary)">"${t.comment}"</p>
    </div>`).join('');
}

// --- USER SESSION ---
function checkUserSession() {
  const stored = localStorage.getItem('aqashhUser');
  if (stored) { currentUser = JSON.parse(stored); updateUserUI(true); }
}
function simpanAkun() {
  const nama = document.getElementById('input-nama').value.trim();
  const hp = document.getElementById('input-hp').value.trim();
  if (!nama || !hp) return showToast('Mohon lengkapi Nama dan No HP!', 'error');
  if (hp.length < 9) return showToast('Nomor HP tidak valid!', 'error');
  currentUser = { nama, hp };
  localStorage.setItem('aqashhUser', JSON.stringify(currentUser));
  toggleLoginModal();
  updateUserUI(true);
  showToast(`Halo ${nama.split(' ')[0]}, selamat datang! 👋`);
}
function logout() {
  if (confirm('Yakin ingin keluar?')) {
    localStorage.removeItem('aqashhUser');
    currentUser = null;
    updateUserUI(false);
    showToast('Kamu sudah keluar.');
  }
}
function updateUserUI(loggedIn) {
  const btnLogin = document.getElementById('btn-login');
  const userInfo = document.getElementById('user-info');
  const nameDisplay = document.getElementById('user-name-display');
  if (loggedIn) {
    btnLogin.classList.add('hidden');
    userInfo.classList.remove('hidden'); userInfo.classList.add('flex');
    nameDisplay.innerText = 'Hi, ' + currentUser.nama.split(' ')[0];
  } else {
    btnLogin.classList.remove('hidden');
    userInfo.classList.add('hidden'); userInfo.classList.remove('flex');
  }
}
function toggleLoginModal() {
  document.getElementById('login-modal').classList.toggle('hidden');
}

// --- PRODUCT MODAL ---
function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentModalProductId = id;
  currentModalQty = 1;

  document.getElementById('modal-img').src = p.image;
  document.getElementById('modal-title').innerText = p.name;
  document.getElementById('modal-category').innerText = p.category;
  document.getElementById('modal-price').innerText = 'Rp ' + p.price.toLocaleString('id-ID');
  document.getElementById('modal-desc').innerText = p.description;
  document.getElementById('modal-qty').innerText = 1;
  document.getElementById('modal-rating').innerText = p.rating.toFixed(1);

  // Badge
  const badgeEl = document.getElementById('modal-badge-display');
  if (p.badge && badgeConfig[p.badge]) {
    const bc = badgeConfig[p.badge];
    badgeEl.className = `text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${bc.cls}`;
    badgeEl.innerText = bc.label;
    badgeEl.classList.remove('hidden');
  } else {
    badgeEl.classList.add('hidden');
  }

  // Reset button
  const btn = document.getElementById('modal-add-btn');
  btn.innerHTML = `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg><span>Tambah ke Keranjang</span>`;
  btn.style.background = 'var(--amber-dark)';

  // Render 2 sample reviews
  document.getElementById('modal-reviews').innerHTML = [
    { name: 'Ahmad B.', txt: 'Rasanya mantap banget, langsung jadi favorit!', stars: 5, ago: '1 hari lalu' },
    { name: 'Nisa R.', txt: 'Recommended banget, porsi pas dan harga terjangkau.', stars: 5, ago: '3 hari lalu' },
  ].map(r => `
    <div class="flex gap-3 p-3 rounded-2xl mb-2" style="background:var(--bg-main)">
      <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style="background:var(--amber-dark)">${r.name[0]}</div>
      <div>
        <div class="flex items-center gap-2 mb-0.5">
          <span class="text-xs font-bold" style="color:var(--text-primary)">${r.name}</span>
          <span class="text-amber-400 text-[11px]">${'★'.repeat(r.stars)}</span>
          <span class="text-xs ml-auto" style="color:var(--text-muted)">${r.ago}</span>
        </div>
        <p class="text-[12px] italic font-light" style="color:var(--text-secondary)">"${r.txt}"</p>
      </div>
    </div>`).join('');

  document.getElementById('product-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeProductModal() {
  document.getElementById('product-modal').classList.add('hidden');
  document.body.style.overflow = '';
  currentModalProductId = null;
}
function changeModalQty(delta) {
  currentModalQty = Math.max(1, currentModalQty + delta);
  document.getElementById('modal-qty').innerText = currentModalQty;
}
function addFromModal() {
  if (!currentModalProductId) return;
  const p = products.find(x => x.id === currentModalProductId);
  const existing = cart.find(x => x.id === currentModalProductId);
  if (existing) { existing.qty += currentModalQty; }
  else { cart.push({ ...p, qty: currentModalQty }); }
  saveCart();

  const btn = document.getElementById('modal-add-btn');
  btn.innerHTML = `<span>✅ Ditambahkan!</span>`;
  btn.style.background = '#16a34a';
  setTimeout(() => closeProductModal(), 600);
  showToast(`${currentModalQty}x ${p.name} ditambahkan!`);
  animateCartIcon();
}

// --- CART ---
function saveCart() {
  localStorage.setItem('aqashhCart_v2', JSON.stringify(cart));
  updateCartUI();
}
function animateCartIcon() {
  const badge = document.getElementById('cart-count');
  badge.classList.add('scale-150');
  setTimeout(() => badge.classList.remove('scale-150'), 400);
}
function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart();
}
function updateCartUI() {
  const container = document.getElementById('cart-items');
  const badge = document.getElementById('cart-count');
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  badge.innerText = totalQty;
  badge.className = totalQty > 0
    ? 'absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm transition-transform'
    : 'hidden';

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center h-52 gap-3" style="color:var(--text-muted)">
        <svg class="w-16 h-16 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
        <p class="font-semibold" style="color:var(--text-secondary)">Keranjang masih kosong</p>
        <p class="text-xs">Yuk pilih menu favoritmu!</p>
      </div>`;
    calculateTotal(); return;
  }

  container.innerHTML = cart.map((item, i) => `
    <div class="flex items-center gap-3 py-3" style="border-bottom:1px solid var(--border-soft)">
      <div class="w-14 h-14 rounded-2xl overflow-hidden shrink-0 shadow-sm">
        <img src="${item.image}" class="w-full h-full object-cover" loading="lazy"/>
      </div>
      <div class="flex-1">
        <p class="font-semibold text-sm line-clamp-1" style="color:var(--text-primary)">${item.name}</p>
        <p class="text-xs mb-2" style="color:var(--text-muted)">Rp ${item.price.toLocaleString('id-ID')}</p>
        <div class="flex items-center justify-between">
          <div class="flex items-center rounded-xl overflow-hidden" style="border:1.5px solid var(--border-soft)">
            <button onclick="changeQty(${i},-1)" class="px-2.5 py-1 text-sm transition hover:bg-red-50" style="color:var(--text-muted)">−</button>
            <span class="text-xs font-bold w-5 text-center" style="color:var(--text-primary)">${item.qty}</span>
            <button onclick="changeQty(${i},1)" class="px-2.5 py-1 text-sm transition hover:bg-green-50" style="color:var(--text-muted)">+</button>
          </div>
          <span class="font-bold text-sm" style="color:var(--amber-brand)">Rp ${(item.price * item.qty).toLocaleString('id-ID')}</span>
        </div>
      </div>
    </div>`).join('');
  calculateTotal();
}

function toggleCart() {
  const modal = document.getElementById('cart-modal');
  const panel = document.getElementById('cart-panel');
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => panel.classList.remove('translate-x-full'), 10);
  } else {
    panel.classList.add('translate-x-full');
    document.body.style.overflow = '';
    setTimeout(() => modal.classList.add('hidden'), 300);
  }
}

// --- CHECKOUT ---
function toggleQRIS() {
  const el = document.getElementById('qris-container');
  document.getElementById('payment-method').value === 'QRIS'
    ? el.classList.remove('hidden') : el.classList.add('hidden');
}
function toggleLokasi() {
  const type = document.getElementById('order-type').value;
  const label = document.getElementById('label-lokasi');
  const input = document.getElementById('input-lokasi');
  const zone = document.getElementById('delivery-zone');
  if (type === 'Dine-in') { label.innerText = 'Nomor Meja'; input.placeholder = 'Contoh: 12'; zone.classList.add('hidden'); }
  else if (type === 'Delivery') { label.innerText = 'Alamat Pengiriman'; input.placeholder = 'Jalan, No Rumah, Patokan...'; zone.classList.remove('hidden'); }
  else { label.innerText = 'Nama Pengambil'; input.placeholder = 'Siapa yang ambil?'; zone.classList.add('hidden'); }
  calculateTotal();
}
function applyPromo() {
  const code = document.getElementById('promo-code').value.trim().toUpperCase();
  const msg = document.getElementById('promo-msg');
  if (code === 'NGODING15') {
    isDiscountApplied = true;
    msg.innerText = '🎉 Diskon 15% berhasil diterapkan!';
    msg.className = 'text-xs font-bold text-green-500 mb-3';
    msg.classList.remove('hidden');
    showToast('Kode promo NGODING15 aktif! 🎉');
  } else {
    isDiscountApplied = false;
    msg.innerText = '❌ Kode promo tidak valid.';
    msg.className = 'text-xs font-bold text-red-500 mb-3';
    msg.classList.remove('hidden');
  }
  calculateTotal();
}
function calculateTotal() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const orderType = document.getElementById('order-type').value;
  let ongkir = 0;
  if (orderType === 'Delivery') {
    ongkir = parseInt(document.getElementById('ongkir-select').value) || 0;
    document.getElementById('ongkir-display').classList.remove('hidden');
    document.getElementById('cart-ongkir').innerText = 'Rp ' + ongkir.toLocaleString('id-ID');
  } else { document.getElementById('ongkir-display').classList.add('hidden'); }
  const discount = isDiscountApplied ? subtotal * 0.15 : 0;
  if (isDiscountApplied) {
    document.getElementById('discount-display').classList.remove('hidden');
    document.getElementById('cart-discount').innerText = '- Rp ' + discount.toLocaleString('id-ID');
  } else { document.getElementById('discount-display').classList.add('hidden'); }
  const final = subtotal + ongkir - discount;
  document.getElementById('cart-subtotal').innerText = 'Rp ' + subtotal.toLocaleString('id-ID');
  document.getElementById('cart-total').innerText = 'Rp ' + final.toLocaleString('id-ID');
  return { subtotal, ongkir, discount, finalTotal: final };
}
function prosesCheckout() {
  if (cart.length === 0) return showToast('Keranjang masih kosong!', 'error');
  if (!currentUser) {
    showToast('Mohon isi data diri terlebih dahulu.');
    toggleCart(); toggleLoginModal(); return;
  }
  const orderType = document.getElementById('order-type').value;
  const paymentMethod = document.getElementById('payment-method').value;
  const lokasi = document.getElementById('input-lokasi').value.trim();
  const catatan = document.getElementById('input-catatan').value.trim();
  if (!lokasi) return showToast('Info meja/alamat wajib diisi!', 'error');

  const calc = calculateTotal();
  const adminWA = '6281292772775';
  let msg = `*ORDER BARU — AQASHH COFFEE* ☕%0A`;
  msg += `━━━━━━━━━━━━━━━━━━━━%0A`;
  msg += `👤 *Pemesan:* ${currentUser.nama}%0A`;
  msg += `📞 *No HP:* ${currentUser.hp}%0A`;
  msg += `🛍️ *Tipe:* ${orderType}%0A`;
  msg += `💳 *Bayar:* ${paymentMethod}%0A`;
  msg += `📍 *Info:* ${lokasi}%0A`;
  msg += `━━━━━━━━━━━━━━━━━━━━%0A`;
  msg += `*Daftar Pesanan:*%0A`;
  cart.forEach(item => { msg += `• ${item.name} (${item.qty}x) = Rp ${(item.price * item.qty).toLocaleString('id-ID')}%0A`; });
  msg += `━━━━━━━━━━━━━━━━━━━━%0A`;
  msg += `📝 *Catatan:* ${catatan || '-'}%0A`;
  msg += `▫️ *Subtotal:* Rp ${calc.subtotal.toLocaleString('id-ID')}%0A`;
  if (orderType === 'Delivery') msg += `🛵 *Ongkir:* Rp ${calc.ongkir.toLocaleString('id-ID')}%0A`;
  if (isDiscountApplied) msg += `🎉 *Diskon (15%):* -Rp ${calc.discount.toLocaleString('id-ID')}%0A`;
  msg += `💰 *TOTAL BAYAR: Rp ${calc.finalTotal.toLocaleString('id-ID')}*%0A%0A`;
  msg += `Mohon diproses ya, terima kasih! 🙏`;
  window.open(`https://wa.me/${adminWA}?text=${msg}`, '_blank');
}

// --- TOAST ---
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const icon = toast.querySelector('div');
  const msgEl = document.getElementById('toast-message');
  icon.style.background = type === 'error' ? '#dc2626' : '#16a34a';
  msgEl.innerText = message;
  toast.classList.remove('opacity-0'); toast.classList.add('opacity-100');
  setTimeout(() => { toast.classList.remove('opacity-100'); toast.classList.add('opacity-0'); }, 3000);
}

// --- BACK TO TOP ---
function setupBackToTop() {
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('back-to-top');
    if (btn) btn.classList.toggle('visible', window.scrollY > 400);
  });
}

// Close modals on backdrop click
document.addEventListener('click', e => {
  if (e.target.id === 'product-modal') closeProductModal();
  if (e.target.id === 'login-modal') toggleLoginModal();
  if (e.target.id === 'cart-modal') toggleCart();
});
