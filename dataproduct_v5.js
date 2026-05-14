// --- DATA PRODUK ---
const products = [
  // COFFEE
  {
    id: 1,
    name: "Kopi Susu Aren",
    price: 30000,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=300",
    description: "Perpaduan sempurna espresso pekat dengan susu segar dan manisnya gula aren alami. Signature drink kami yang menjadi favorit pelanggan sepanjang masa."
  },
  {
    id: 2,
    name: "Americano",
    price: 28000,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=300",
    description: "Kopi hitam klasik hasil ekstraksi double espresso yang diseduh dengan air panas. Menyajikan rasa kopi yang murni, kuat, dan menyegarkan."
  },
  {
    id: 3,
    name: "Caramel Macchiato",
    price: 32000,
    category: "Coffee",
    image: "https://www.allrecipes.com/thmb/LgtetzzQWH3GMxFISSii84XEAB8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/258686-IcedCaramelMacchiato-ddmps-4x3-104704-2effb74f7d504b8aa5fbd52204d0e2e5.jpg",
    description: "Susu segar hangat dengan sirup vanilla, ditutup dengan espresso pekat dan siraman saus karamel yang legit di atasnya."
  },
  {
    id: 8,
    name: "Espresso",
    price: 25000,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=300",
    description: "Ekstraksi kopi murni yang pekat dan intens. Menggunakan biji kopi House Blend Aqashh dengan notes dark chocolate dan nutty."
  },
  {
    id: 22,
    name: "Cappuccino",
    price: 30000,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=300",
    description: "Keseimbangan presisi antara espresso pekat, susu steam panas, dan foam tebal di atasnya. Taburan bubuk cokelat opsional."
  },
  {
    id: 23,
    name: "V60 Manual Brew",
    price: 35000,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=300",
    description: "Seduhan manual metode pour-over (V60) menggunakan biji kopi Single Origin Nusantara pilihan. Karakter rasa clean dan aroma floral/fruity yang kuat."
  },
  {
    id: 24,
    name: "Hazelnut Latte",
    price: 32000,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=300",
    description: "Latte klasik dengan tambahan sirup hazelnut premium. Rasa nutty yang wangi berpadu pas dengan espresso."
  },

  // NON-COFFEE
  {
    id: 4,
    name: "Matcha Latte",
    price: 32000,
    category: "Non-Coffee",
    image: "https://mocktail.net/wp-content/uploads/2021/05/Matcha-Iced-Latte_ig.jpg",
    description: "Bubuk matcha premium dari Jepang yang diseduh dan dipadukan dengan susu segar. Memberikan rasa earthy yang khas dan menenangkan."
  },
  {
    id: 5,
    name: "Red Velvet",
    price: 33000,
    category: "Non-Coffee",
    image: "https://cdn.medcom.id/dynamic/content/2022/05/11/1423891/YtJZlqxdfS.jpg?w=640",
    description: "Minuman manis dengan perpaduan rasa cokelat dan vanilla khas kue Red Velvet, disajikan dengan susu kental creamy."
  },
  {
    id: 6,
    name: "Ice Tea Premium",
    price: 25000,
    category: "Non-Coffee",
    image: "https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg",
    description: "Es teh segar yang diseduh dari daun teh pilihan dengan aroma jasmine yang menenangkan. Cocok untuk melepas dahaga."
  },
  {
    id: 7,
    name: "Lemon Squash",
    price: 35000,
    category: "Non-Coffee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlyipBqi9fkCvyFl-WT9sOlTry0veLlXMlLg&s",
    description: "Perpaduan sirup lemon murni dengan air soda berkarbonasi. Sangat menyegarkan dan asam manisnya pas."
  },
  {
    id: 25,
    name: "Taro Latte",
    price: 30000,
    category: "Non-Coffee",
    image: "https://images.unsplash.com/photo-1626359551978-5a02e609756b?auto=format&fit=crop&q=80&w=300",
    description: "Kelezatan rasa ubi ungu (taro) yang manis dan wangi, diseduh dengan susu segar yang creamy. Tampilannya cantik dengan warna ungu pastel."
  },
  {
    id: 26,
    name: "Belgian Chocolate",
    price: 33000,
    category: "Non-Coffee",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=300",
    description: "Cokelat pekat ala Belgia yang dilelehkan ke dalam susu hangat. Teksturnya kental, kaya rasa, dan tidak terlalu manis (bittersweet)."
  },
  {
    id: 27,
    name: "Lychee Yakult",
    price: 28000,
    category: "Non-Coffee",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=300",
    description: "Kombinasi probiotik Yakult yang asam segar dengan manisnya sirup leci dan buah leci asli utuh di dalamnya."
  },

  // MAKANAN
  {
    id: 9,
    name: "Nasi Goreng Rempah",
    price: 36000,
    category: "makanan",
    image: "https://assets.unileversolutions.com/recipes-v2/258052.jpg",
    description: "Nasi goreng spesial yang dimasak dengan bumbu rempah rahasia khas nusantara, disajikan dengan telur mata sapi dan kerupuk."
  },
  {
    id: 10,
    name: "Nasi Goreng Kampung",
    price: 40000,
    category: "makanan",
    image: "https://imgx.sonora.id/crop/0x0:0x0/x/photo/2025/05/20/nasgooorjpg-20250520120938.jpg",
    description: "Nasi goreng gurih dengan isian ayam suwir, telur orak-arik, bakso, dan taburan bawang goreng yang renyah."
  },
  {
    id: 11,
    name: "Spaghetti Bolognese",
    price: 78000,
    category: "makanan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TCBOahTQxezUf8pg8AF4lM-SChnHhiU-Tw&s",
    description: "Pasta spaghetti al dente dengan saus daging sapi cincang tomat yang kaya rasa (ragu alla bolognese) dan taburan keju parmesan."
  },
  {
    id: 12,
    name: "Spaghetti Carbonara",
    price: 75000,
    category: "makanan",
    image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/0346a29a89ef229b1a0ff9697184f944/Derivates/cb5051204f4a4525c8b013c16418ae2904e737b7.jpg",
    description: "Pasta klasik Italia dengan saus creamy yang terbuat dari telur, keju parmesan, dan potongan daging asap yang gurih."
  },
  {
    id: 13,
    name: "Spaghetti Aglio e Olio",
    price: 80000,
    category: "makanan",
    image: "https://images.services.kitchenstories.io/UY89c4f471NaK1C-BQ07FGZ_qVA=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R131-final-photo-3-sg.jpg",
    description: "Pasta spaghetti ringan yang ditumis dengan olive oil premium, bawang putih, sedikit cabai kering, dan potongan udang segar."
  },
  {
    id: 28,
    name: "Rice Bowl Beef Teriyaki",
    price: 38000,
    category: "makanan",
    image: "https://images.unsplash.com/photo-1542367592-8849eb950fd8?auto=format&fit=crop&q=80&w=300",
    description: "Nasi hangat pulen dengan topping irisan daging sapi tipis (US Beef) yang dimasak bumbu teriyaki manis gurih, plus taburan wijen."
  },
  {
    id: 29,
    name: "Chicken Katsu Curry",
    price: 42000,
    category: "makanan",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=300",
    description: "Ayam filet tepung roti (katsu) yang super renyah disajikan dengan nasi hangat dan siraman kuah kari Jepang kental berisi kentang dan wortel."
  },
  {
    id: 30,
    name: "Snack Platter",
    price: 35000,
    category: "makanan",
    image: "https://images.unsplash.com/photo-1599487405626-d24268e6e589?auto=format&fit=crop&q=80&w=300",
    description: "Teman ngoding yang pas! Kombinasi mabar porsi besar berisi kentang goreng, sosis potong, dan chicken nugget lengkap dengan saus mayo pedas."
  },
  {
    id: 31,
    name: "Dimsum Mentai",
    price: 26000,
    category: "makanan",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=300",
    description: "4 potong dimsum ayam udang yang juicy, di-torch (dibakar) dengan saus mentai creamy pedas di atasnya."
  },

  // PASTRY
  {
    id: 14,
    name: "Croissant",
    price: 27000,
    category: "pastry",
    image: "https://en.julskitchen.com/wp-content/uploads/sites/2/2013/05/Italian-croissants-15.jpg",
    description: "Pastry khas Prancis yang renyah di luar dan berongga lembut di dalam. Sangat cocok dinikmati bersama secangkir Americano panas."
  },
  {
    id: 15,
    name: "Blueberry Muffin",
    price: 29000,
    category: "pastry",
    image: "https://www.ambitiouskitchen.com/wp-content/uploads/fly-images/44547/blueberrymuffins-4-500x500-c.jpg",
    description: "Muffin lembut yang dipanggang sempurna dengan isian buah blueberry asli yang meleleh di mulut."
  },
  {
    id: 16,
    name: "Chocolate Cake",
    price: 30000,
    category: "pastry",
    image: "https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice.jpg",
    description: "Potongan kue cokelat yang moist dan padat, dilapisi dengan chocolate ganache yang kaya dan lumer."
  },
  {
    id: 17,
    name: "White Cheesecake",
    price: 35000,
    category: "pastry",
    image: "https://www.recipetineats.com/tachyon/2024/09/No-bake-cheesecake_8.jpg",
    description: "Cheesecake bergaya New York yang creamy dan lembut, dengan dasar biskuit crust yang renyah dan sedikit rasa lemon."
  },
  {
    id: 32,
    name: "Cinnamon Roll",
    price: 26000,
    category: "pastry",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=300",
    description: "Roti gulung kayu manis yang dipanggang hingga harum keemasan, disiram lelehan cream cheese frosting yang legit."
  },
  {
    id: 33,
    name: "Almond Croissant",
    price: 32000,
    category: "pastry",
    image: "https://images.unsplash.com/photo-1518063076127-14e39ecbb980?auto=format&fit=crop&q=80&w=300",
    description: "Varian croissant berlapis dengan isian krim almond (frangipane) dan ditaburi irisan kacang almond panggang di atasnya."
  },
  {
    id: 34,
    name: "Fudgy Brownie Ice Cream",
    price: 30000,
    category: "pastry",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=300",
    description: "Satu slice brownie cokelat pekat (fudgy) yang disajikan hangat bersama satu scoop es krim vanilla dingin."
  },

  // MOCKTAIL
  {
    id: 18,
    name: "Mojito Virgin",
    price: 38000,
    category: "Mocktail",
    image: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/07/virgin-mojito-1200x675.jpeg",
    description: "Minuman non-alkohol menyegarkan dari perpaduan air soda, sirup mint, perasan jeruk nipis segar, dan daun mint asli."
  },
  {
    id: 19,
    name: "Virgin Pina Colada",
    price: 40000,
    category: "Mocktail",
    image: "https://images.kitchenstories.io/recipeImages/32_06_VirginPinaColada_TitlePicture.jpg",
    description: "Campuran manis dan creamy dari jus nanas segar dan santan/susu kelapa, di-blend dengan es batu hingga bertekstur smoothie."
  },
  {
    id: 20,
    name: "Sunrise Mocktail",
    price: 42000,
    category: "Mocktail",
    image: "https://butfirstwebrunch.com/wp-content/uploads/2024/06/sunrise-mocktail-3.jpg",
    description: "Mocktail cantik dengan gradasi warna layaknya matahari terbit. Terbuat dari jus jeruk murni dan sentuhan sirup grenadine merah."
  },
  {
    id: 21,
    name: "Mango Mule",
    price: 39000,
    category: "Mocktail",
    image: "https://s7ap1.scene7.com/is/image/itcportalprod/bnatural-mango-mule?fmt=webp-alpha",
    description: "Paduan unik puree mangga manis dengan ginger ale (soda jahe) yang memberikan sensasi hangat sekaligus menyegarkan."
  },
  {
    id: 35,
    name: "Ocean Blue Soda",
    price: 36000,
    category: "Mocktail",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=300",
    description: "Sensasi liburan di pantai! Mocktail segar dari sirup blue curacao (jeruk nipis pait muda), sirup leci, dan air soda berkarbonasi."
  },
  {
    id: 36,
    name: "Strawberry Mint Squash",
    price: 38000,
    category: "Mocktail",
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&q=80&w=300",
    description: "Muddle (tumbukan) buah stroberi segar dan daun mint, ditambahkan dengan air soda lemon yang asam manis."
  }
];

// --- STATE MANAGEMENT ---
let cart = JSON.parse(localStorage.getItem("aqashhCart")) || [];
let currentUser = null;
let currentCategory = "all";
let isDiscountApplied = false;

// --- INIT ---
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  checkUserSession();
  updateCartUI();
  toggleLokasi();
  checkDarkMode();
  startCarousel();
});

// --- DARK MODE LOGIC ---
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
  document.getElementById('theme-icon').innerText = isDark ? '☀️' : '🌙';
}

function checkDarkMode() {
  const isDark = localStorage.getItem('darkMode') === 'true';
  if (isDark) {
    document.documentElement.classList.add('dark');
    document.getElementById('theme-icon').innerText = '☀️';
  }
}

// --- CAROUSEL LOGIC ---
let currentSlide = 0;
let carouselInterval;

function startCarousel() {
  carouselInterval = setInterval(() => {
    currentSlide = currentSlide === 0 ? 1 : 0;
    updateCarousel();
  }, 5000); // Ganti slide setiap 5 detik
}

function goToSlide(index) {
  clearInterval(carouselInterval);
  currentSlide = index;
  updateCarousel();
  startCarousel(); // Restart timer
}

function updateCarousel() {
  const inner = document.getElementById('hero-carousel');
  inner.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  // Update indikator titik
  document.getElementById('dot-0').className = currentSlide === 0 ? "w-3 h-3 rounded-full bg-amber-500 transition-all" : "w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all";
  document.getElementById('dot-1').className = currentSlide === 1 ? "w-3 h-3 rounded-full bg-amber-500 transition-all" : "w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all";
}


// --- RENDER FUNCTIONS ---
function renderProducts(items) {
  const container = document.getElementById("product-list");

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-20 text-center flex flex-col items-center">
        <span class="text-6xl mb-4 opacity-50">☕</span>
        <p class="text-gray-500 font-medium text-lg">Waduh, menunya belum ada...</p>
        <p class="text-gray-400 text-sm mt-1">Coba cari dengan kata kunci lain ya!</p>
      </div>
    `;
    return;
  }

  const html = items.map((p) => `
    <div onclick="openProductModal(${p.id})" class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-100/50 dark:border-gray-700 flex flex-col group animate-fade-in-up cursor-pointer overflow-hidden relative">
      <div class="h-44 md:h-52 overflow-hidden relative bg-gray-50 dark:bg-gray-900">
        <img src="${p.image}" alt="${p.name}" 
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=300';" 
          class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <!-- Rating Review Mockup pada Card -->
        <div class="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-amber-400 flex items-center gap-1 shadow-sm">
          ★ 4.8
        </div>
        
        <div class="absolute top-3 left-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-amber-900 dark:text-amber-400 shadow-sm uppercase tracking-wider">
          ${p.category}
        </div>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between bg-white dark:bg-gray-800 z-10">
        <div>
          <h4 class="font-bold text-base md:text-lg mb-1.5 text-gray-800 dark:text-white line-clamp-1 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">${p.name}</h4>
          <p class="text-amber-600 dark:text-amber-400 font-bold text-sm md:text-base tracking-wide">Rp ${p.price.toLocaleString("id-ID")}</p>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 bg-amber-100/80 dark:bg-amber-900/80 w-10 h-10 rounded-tl-2xl flex items-center justify-center text-amber-800 dark:text-amber-100 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
      </div>
    </div>
  `).join("");

  container.innerHTML = html;
}

function filterProduk(category) {
  currentCategory = category;

  const btns = document.querySelectorAll(".category-btn");
  btns.forEach((btn) => {
    if (
      btn.innerText.toLowerCase() === category.toLowerCase() ||
      (category === "all" && btn.innerText.toLowerCase() === "semua")
    ) {
      btn.classList.add("bg-amber-800", "text-white", "shadow-md");
      btn.classList.remove("bg-white", "text-amber-900", "border-amber-200", "dark:bg-gray-800", "dark:border-gray-600");
    } else {
      btn.classList.remove("bg-amber-800", "text-white", "shadow-md");
      btn.classList.add("bg-white", "text-amber-900", "border-amber-200", "dark:bg-gray-800", "dark:text-amber-400", "dark:border-gray-600");
    }
  });

  let filtered = products;
  if (category !== "all") {
    filtered = products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase(),
    );
  }

  document.getElementById("search-input").value = "";
  renderProducts(filtered);
}

function searchProduct() {
  const query = document.getElementById("search-input").value.toLowerCase();

  let filtered = products;
  if (currentCategory !== "all") {
    filtered = products.filter(
      (p) => p.category.toLowerCase() === currentCategory.toLowerCase(),
    );
  }

  const result = filtered.filter((p) => p.name.toLowerCase().includes(query));
  renderProducts(result);
}

// --- USER SESSION ---
function checkUserSession() {
  const storedUser = localStorage.getItem("kopiUser");
  if (storedUser) {
    currentUser = JSON.parse(storedUser);
    updateUserUI(true);
  } else {
    updateUserUI(false);
  }
}

function simpanAkun() {
  const nama = document.getElementById("input-nama").value.trim();
  const hp = document.getElementById("input-hp").value.trim();

  if (!nama || !hp) return showToast("Mohon lengkapi Nama dan No HP!");

  currentUser = { nama, hp };
  localStorage.setItem("kopiUser", JSON.stringify(currentUser));

  toggleLoginModal();
  updateUserUI(true);
  showToast(`Halo ${nama.split(" ")[0]}, selamat datang!`);
}

function logout() {
  if (confirm("Yakin ingin keluar dari akun?")) {
    localStorage.removeItem("kopiUser");
    currentUser = null;
    updateUserUI(false);
    showToast("Anda telah keluar.");
  }
}

function updateUserUI(isLoggedIn) {
  const btnLogin = document.getElementById("btn-login");
  const userInfo = document.getElementById("user-info");
  const userNameDisplay = document.getElementById("user-name-display");

  if (isLoggedIn) {
    btnLogin.classList.add("hidden");
    userInfo.classList.remove("hidden");
    userInfo.classList.add("flex");
    userNameDisplay.innerText = "Hi, " + currentUser.nama.split(" ")[0];
  } else {
    btnLogin.classList.remove("hidden");
    userInfo.classList.add("hidden");
    userInfo.classList.remove("flex");
  }
}

function toggleLoginModal() {
  const modal = document.getElementById("login-modal");
  modal.classList.toggle("hidden");
}

// --- PRODUCT MODAL LOGIC ---
let currentModalProductId = null;
let currentModalQty = 1;

function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  currentModalProductId = id;
  currentModalQty = 1; // Reset qty tiap buka modal

  document.getElementById("modal-img").src = p.image;
  document.getElementById("modal-title").innerText = p.name;
  document.getElementById("modal-category").innerText = p.category;
  document.getElementById("modal-price").innerText = "Rp " + p.price.toLocaleString("id-ID");
  document.getElementById("modal-desc").innerText = p.description || "Nikmati sajian spesial dari Aqashh Coffee ini.";
  document.getElementById("modal-qty").innerText = currentModalQty;

  const addBtn = document.getElementById("modal-add-btn");
  addBtn.onclick = () => addFromModal();

  // Reset tampilan tombol
  addBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    <span>Tambah</span>
  `;
  addBtn.classList.remove("bg-green-600");
  addBtn.classList.add("bg-amber-800");

  document.getElementById("product-modal").classList.remove("hidden");
}

function closeProductModal() {
  document.getElementById("product-modal").classList.add("hidden");
  currentModalProductId = null;
}

function changeModalQty(change) {
  currentModalQty += change;
  if (currentModalQty < 1) currentModalQty = 1;
  document.getElementById("modal-qty").innerText = currentModalQty;
}

function addFromModal() {
  if (!currentModalProductId) return;

  const p = products.find(x => x.id === currentModalProductId);
  const existing = cart.find(x => x.id === currentModalProductId);

  if (existing) {
    existing.qty += currentModalQty;
  } else {
    cart.push({ ...p, qty: currentModalQty });
  }

  saveCart();
  
  // Animasi Feedback
  const btn = document.getElementById("modal-add-btn");
  btn.innerHTML = `<span>✅ Ditambahkan</span>`;
  btn.classList.remove("bg-amber-800");
  btn.classList.add("bg-green-600");

  setTimeout(() => {
    closeProductModal();
  }, 600); 

  showToast(`${currentModalQty}x ${p.name} ditambahkan!`);
  animateCartIcon();
}

// --- CART & CALCULATE LOGIC ---
function saveCart() {
  localStorage.setItem("aqashhCart", JSON.stringify(cart));
  updateCartUI();
}

function animateCartIcon() {
  const badge = document.getElementById("cart-count");
  badge.classList.add("animate-bounce", "scale-125");
  setTimeout(() => {
    badge.classList.remove("animate-bounce", "scale-125");
  }, 1000);
}

function changeQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function applyPromo() {
   const code = document.getElementById("promo-code").value.trim().toUpperCase();
   const msg = document.getElementById("promo-msg");
   
   if(code === "NGODING15") {
      isDiscountApplied = true;
      msg.innerText = "Diskon 15% Berhasil Diterapkan!";
      msg.classList.remove("hidden", "text-red-500");
      msg.classList.add("text-green-600");
   } else {
      isDiscountApplied = false;
      msg.innerText = "Kode promo tidak valid!";
      msg.classList.remove("hidden", "text-green-600");
      msg.classList.add("text-red-500");
   }
   calculateTotal();
}

function calculateTotal() {
  let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  // Ongkir
  const orderType = document.getElementById("order-type").value;
  let ongkir = 0;
  if (orderType === "Delivery") {
      ongkir = parseInt(document.getElementById("ongkir-select").value) || 0;
      document.getElementById("ongkir-display").classList.remove("hidden");
  } else {
      document.getElementById("ongkir-display").classList.add("hidden");
  }

  // Diskon
  let discount = 0;
  if (isDiscountApplied) {
      discount = subtotal * 0.15; // 15% diskon
      document.getElementById("discount-display").classList.remove("hidden");
  } else {
      document.getElementById("discount-display").classList.add("hidden");
  }

  const finalTotal = subtotal + ongkir - discount;

  document.getElementById("cart-subtotal").innerText = "Rp " + subtotal.toLocaleString("id-ID");
  document.getElementById("cart-ongkir").innerText = "Rp " + ongkir.toLocaleString("id-ID");
  document.getElementById("cart-discount").innerText = "- Rp " + discount.toLocaleString("id-ID");
  document.getElementById("cart-total").innerText = "Rp " + finalTotal.toLocaleString("id-ID");
  
  return { subtotal, ongkir, discount, finalTotal };
}

function updateCartUI() {
  const container = document.getElementById("cart-items");
  const badge = document.getElementById("cart-count");

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.innerText = totalQty;
  badge.className =
    totalQty > 0
      ? "absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm"
      : "hidden";

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center h-48 text-gray-400">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-full mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </div>
        <p class="font-medium text-gray-500">Keranjang masih kosong</p>
        <p class="text-xs mt-1">Yuk pesen kopi favoritmu!</p>
      </div>
    `;
    calculateTotal();
    return;
  }

  const html = cart
    .map((item, index) => {
      let itemTotal = item.price * item.qty;
      return `
      <div class="flex items-center gap-4 py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
        <div class="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm">
           <img src="${item.image}" class="w-full h-full object-cover">
        </div>
        <div class="flex-1">
          <p class="font-bold text-gray-800 dark:text-white text-sm line-clamp-1">${item.name}</p>
          <p class="text-[11px] text-gray-500 mb-2">@ Rp ${item.price.toLocaleString("id-ID")}</p>
          <div class="flex items-center justify-between">
            <div class="flex items-center bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
               <button onclick="changeQty(${index}, -1)" class="px-2.5 py-1 text-gray-500 dark:text-gray-300 hover:text-red-500 transition">-</button>
               <span class="text-xs font-bold w-5 text-center text-gray-700 dark:text-white">${item.qty}</span>
               <button onclick="changeQty(${index}, 1)" class="px-2.5 py-1 text-gray-500 dark:text-gray-300 hover:text-green-500 transition">+</button>
            </div>
            <p class="font-bold text-amber-700 dark:text-amber-500 text-sm">Rp ${itemTotal.toLocaleString("id-ID")}</p>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  container.innerHTML = html;
  calculateTotal();
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  const panel = document.getElementById("cart-panel");
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    setTimeout(() => panel.classList.remove("translate-x-full"), 10);
  } else {
    panel.classList.add("translate-x-full");
    setTimeout(() => modal.classList.add("hidden"), 300);
  }
}

// --- CHECKOUT & PAYMENT LOGIC ---
function toggleQRIS() {
  const method = document.getElementById("payment-method").value;
  const qrisContainer = document.getElementById("qris-container");

  if (method === "QRIS") {
    qrisContainer.classList.remove("hidden");
    qrisContainer.classList.add("animate-fade-in-up");
  } else {
    qrisContainer.classList.add("hidden");
    qrisContainer.classList.remove("animate-fade-in-up");
  }
}

function toggleLokasi() {
  const type = document.getElementById("order-type").value;
  const label = document.getElementById("label-lokasi");
  const input = document.getElementById("input-lokasi");
  const zoneSelect = document.getElementById("delivery-zone");

  if (type === "Dine-in") {
    label.innerText = "Nomor Meja";
    input.placeholder = "Contoh: 12";
    zoneSelect.classList.add("hidden");
  } else if (type === "Delivery") {
    label.innerText = "Alamat Pengiriman";
    input.placeholder = "Jalan, No Rumah, Patokan...";
    zoneSelect.classList.remove("hidden");
  } else {
    label.innerText = "Nama Pengambil";
    input.placeholder = "Siapa yang ambil?";
    zoneSelect.classList.add("hidden");
  }
  calculateTotal(); // Update ulang karena ongkir mungkin berubah
}

function prosesCheckout() {
  if (cart.length === 0) return showToast("Keranjang Anda masih kosong!");

  if (!currentUser) {
    showToast("Mohon login/isi data diri terlebih dahulu.");
    toggleCart();
    toggleLoginModal();
    return;
  }

  const orderType = document.getElementById("order-type").value;
  const paymentMethod = document.getElementById("payment-method").value;
  const lokasi = document.getElementById("input-lokasi").value.trim();
  const catatan = document.getElementById("input-catatan").value.trim();

  if (!lokasi) return showToast("Info meja/alamat wajib diisi!");

  const adminWA = "6281292772775";
  const calc = calculateTotal();

  let msg = `*ORDER BARU - AQASHH COFFEE* ☕%0A`;
  msg += `--------------------------------%0A`;
  msg += `👤 *Pemesan:* ${currentUser.nama}%0A`;
  msg += `📞 *No HP:* ${currentUser.hp}%0A`;
  msg += `🛍️ *Tipe:* ${orderType}%0A`;
  msg += `💳 *Bayar:* ${paymentMethod}%0A`;
  msg += `📍 *Info:* ${lokasi}%0A`;
  msg += `--------------------------------%0A`;

  msg += `*Daftar Pesanan:*%0A`;
  cart.forEach((item) => {
    msg += `- ${item.name} (${item.qty}x) = Rp ${(item.price * item.qty).toLocaleString("id-ID")}%0A`;
  });

  msg += `--------------------------------%0A`;
  msg += `📝 *Catatan:* ${catatan || "-"}%0A`;
  msg += `▫️ *Subtotal:* Rp ${calc.subtotal.toLocaleString("id-ID")}%0A`;
  
  if (orderType === "Delivery") {
     msg += `🛵 *Ongkir:* Rp ${calc.ongkir.toLocaleString("id-ID")}%0A`;
  }
  if (isDiscountApplied) {
     msg += `🎉 *Diskon (15%):* - Rp ${calc.discount.toLocaleString("id-ID")}%0A`;
  }
  
  msg += `💰 *TOTAL BAYAR: Rp ${calc.finalTotal.toLocaleString("id-ID")}*%0A%0A`;
  msg += `Mohon diproses segera ya, terima kasih!`;

  window.open(`https://wa.me/${adminWA}?text=${msg}`, "_blank");
}

// --- UTILS ---
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");

  toastMsg.innerText = message;
  toast.classList.remove("opacity-0", "translate-y-[-20px]", "pointer-events-none");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "translate-y-[-20px]", "pointer-events-none");
  }, 3000);
}
