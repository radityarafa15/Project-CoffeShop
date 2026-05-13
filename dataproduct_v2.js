// --- DATA PRODUK ---
const products = [
  {
    id: 1,
    name: "Kopi Susu Aren",
    price: 30000,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 2,
    name: "Americano",
    price: 28000,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 3,
    name: "Caramel Macchiato",
    price: 32000,
    category: "Coffee",
    image: "https://www.allrecipes.com/thmb/LgtetzzQWH3GMxFISSii84XEAB8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/258686-IcedCaramelMacchiato-ddmps-4x3-104704-2effb74f7d504b8aa5fbd52204d0e2e5.jpg",
  },
  {
    id: 4,
    name: "Matcha Latte",
    price: 32000,
    category: "Non-Coffee",
    image: "https://mocktail.net/wp-content/uploads/2021/05/Matcha-Iced-Latte_ig.jpg",
  },
  {
    id: 5,
    name: "Red Velvet",
    price: 33000,
    category: "Non-Coffee",
    image: "https://cdn.medcom.id/dynamic/content/2022/05/11/1423891/YtJZlqxdfS.jpg?w=640",
  },
  {
    id: 6,
    name: "Ice Tea Premium",
    price: 25000,
    category: "Non-Coffee",
    image: "https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg",
  },
  {
    id: 7,
    name: "Lemon Squash",
    price: 35000,
    category: "Non-Coffee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlyipBqi9fkCvyFl-WT9sOlTry0veLlXMlLg&s",
  },
  {
    id: 8,
    name: "Espresso",
    price: 25000,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 9,
    name: "Nasi Goreng Rempah",
    price: 36000,
    category: "makanan",
    image: "https://www.ajinomoto.co.id/image/original/visit/2025/01/16/images/thumbnail-resep-nasi-goreng-rempah-wangi._667e84e594d3e64e0f47781bd9b17f68.png",
  },
  {
    id: 10,
    name: "Nasi Goreng Kampung",
    price: 40000,
    category: "makanan",
    image: "https://imgx.sonora.id/crop/0x0:0x0/x/photo/2025/05/20/nasgooorjpg-20250520120938.jpg",
  },
  {
    id: 11,
    name: "Spaghetti Bolognese",
    price: 78000,
    category: "makanan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TCBOahTQxezUf8pg8AF4lM-SChnHhiU-Tw&s",
  },
  {
    id: 12,
    name: "Spaghetti Carbonara",
    price: 75000,
    category: "makanan",
    image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/0346a29a89ef229b1a0ff9697184f944/Derivates/cb5051204f4a4525c8b013c16418ae2904e737b7.jpg",
  },
  {
    id: 13,
    name: "Spaghetti Aglio e Olio",
    price: 80000,
    category: "makanan",
    image: "https://images.services.kitchenstories.io/UY89c4f471NaK1C-BQ07FGZ_qVA=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R131-final-photo-3-sg.jpg",
  },
  {
    id: 14,
    name: "Croissant",
    price: 27000,
    category: "pastry",
    image: "https://en.julskitchen.com/wp-content/uploads/sites/2/2013/05/Italian-croissants-15.jpg",
  },
  {
    id: 15,
    name: "Blueberry Muffin",
    price: 29000,
    category: "pastry",
    image: "https://www.ambitiouskitchen.com/wp-content/uploads/fly-images/44547/blueberrymuffins-4-500x500-c.jpg",
  },
  {
    id: 16,
    name: "Chocolate Cake",
    price: 30000,
    category: "pastry",
    image: "https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice.jpg",
  },
  {
    id: 17,
    name: "White Cheesecake",
    price: 35000,
    category: "pastry",
    image: "https://www.recipetineats.com/tachyon/2024/09/No-bake-cheesecake_8.jpg",
  },
  {
    id: 18,
    name: "Mojito Virgin",
    price: 38000,
    category: "Mocktail",
    image: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/07/virgin-mojito-1200x675.jpeg",
  },
  {
    id: 19,
    name: "Virgin Pina Colada",
    price: 40000,
    category: "Mocktail",
    image: "https://images.kitchenstories.io/recipeImages/32_06_VirginPinaColada_TitlePicture.jpg",
  },
  {
    id: 20,
    name: "Sunrise Mocktail",
    price: 42000,
    category: "Mocktail",
    image: "https://butfirstwebrunch.com/wp-content/uploads/2024/06/sunrise-mocktail-3.jpg",
  },
  {
    id: 21,
    name: "Mango Mule",
    price: 39000,
    category: "Mocktail",
    image: "https://s7ap1.scene7.com/is/image/itcportalprod/bnatural-mango-mule?fmt=webp-alpha",
  },
];

// --- STATE MANAGEMENT ---
let cart = JSON.parse(localStorage.getItem("aqashhCart")) || [];
let currentUser = null;
let currentCategory = "all";

// --- INIT ---
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  checkUserSession();
  updateCartUI();
  toggleLokasi();
});

// --- RENDER FUNCTIONS ---
function renderProducts(items) {
  const container = document.getElementById("product-list");
  
  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-20 text-center">
        <p class="text-gray-400 text-lg italic">Maaf, menu tidak ditemukan...</p>
      </div>
    `;
    return;
  }

  const html = items.map(p => `
    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col group animate-fade-in-up">
      <div class="h-40 md:h-48 overflow-hidden relative">
        <img src="${p.image}" alt="${p.name}" 
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=300';" 
          class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
        <div class="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-[10px] font-bold text-amber-900 shadow-sm">
          ${p.category}
        </div>
      </div>
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h4 class="font-bold text-base md:text-lg mb-1 text-gray-800 line-clamp-1">${p.name}</h4>
          <p class="text-amber-600 font-bold text-base md:text-lg">Rp ${p.price.toLocaleString("id-ID")}</p>
        </div>
        <button onclick="addToCart(${p.id})" class="mt-4 w-full bg-amber-800 text-white py-2 rounded-lg hover:bg-amber-900 transition flex justify-center items-center gap-2 active:scale-95 text-sm md:text-base shadow-md">
          <span>+</span> Tambah
        </button>
      </div>
    </div>
  `).join("");

  container.innerHTML = html;
}

function filterProduk(category) {
  currentCategory = category;
  
  // Highlight active button
  const btns = document.querySelectorAll('.category-btn');
  btns.forEach(btn => {
    if(btn.innerText.toLowerCase() === category.toLowerCase() || (category === 'all' && btn.innerText.toLowerCase() === 'semua')) {
      btn.classList.add('bg-amber-800', 'text-white');
      btn.classList.remove('bg-white', 'text-amber-900');
    } else {
      btn.classList.remove('bg-amber-800', 'text-white');
      btn.classList.add('bg-white', 'text-amber-900');
    }
  });

  let filtered = products;
  if (category !== "all") {
    filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  
  // Reset search input when category changes
  document.getElementById('search-input').value = "";
  renderProducts(filtered);
}

function searchProduct() {
  const query = document.getElementById('search-input').value.toLowerCase();
  
  let filtered = products;
  // If a category is selected, search within that category
  if (currentCategory !== "all") {
    filtered = products.filter(p => p.category.toLowerCase() === currentCategory.toLowerCase());
  }

  const result = filtered.filter(p => p.name.toLowerCase().includes(query));
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

  if (!nama || !hp) return alert("Mohon lengkapi Nama dan No HP!");

  currentUser = { nama, hp };
  localStorage.setItem("kopiUser", JSON.stringify(currentUser));

  toggleLoginModal();
  updateUserUI(true);
  showToast(`Halo ${nama.split(' ')[0]}, selamat datang!`);
}

function logout() {
  if (confirm("Yakin ingin keluar?")) {
    localStorage.removeItem("kopiUser");
    currentUser = null;
    updateUserUI(false);
    showToast("Berhasil keluar.");
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

// --- CART LOGIC ---
function saveCart() {
  localStorage.setItem("aqashhCart", JSON.stringify(cart));
  updateCartUI();
}

function addToCart(id) {
  const p = products.find(x => x.id === id);
  const existing = cart.find(x => x.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...p, qty: 1 });
  }

  saveCart();
  showToast(`${p.name} ditambahkan!`);

  const badge = document.getElementById("cart-count");
  badge.classList.add("animate-bounce");
  setTimeout(() => badge.classList.remove("animate-bounce"), 1000);
}

function changeQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function updateCartUI() {
  const container = document.getElementById("cart-items");
  const badge = document.getElementById("cart-count");
  const totalElem = document.getElementById("cart-total");

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.innerText = totalQty;
  badge.className = totalQty > 0 
    ? "absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full" 
    : "hidden";

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center h-40 text-gray-400">
        <span class="text-4xl mb-2">🛒</span>
        <p>Keranjang masih kosong.</p>
      </div>
    `;
    totalElem.innerText = "Rp 0";
    return;
  }

  let total = 0;
  const html = cart.map((item, index) => {
    let subtotal = item.price * item.qty;
    total += subtotal;
    return `
      <div class="flex justify-between items-center border-b border-gray-100 pb-3">
        <div class="flex-1">
          <p class="font-bold text-gray-800 text-sm md:text-base">${item.name}</p>
          <p class="text-xs text-gray-500">@ Rp ${item.price.toLocaleString("id-ID")}</p>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex items-center bg-gray-100 rounded-lg">
             <button onclick="changeQty(${index}, -1)" class="px-2 py-1 text-gray-600 hover:text-red-500 font-bold">-</button>
             <span class="text-sm font-bold w-6 text-center">${item.qty}</span>
             <button onclick="changeQty(${index}, 1)" class="px-2 py-1 text-gray-600 hover:text-green-500 font-bold">+</button>
          </div>
          <div class="text-right w-20">
            <p class="font-bold text-amber-600 text-sm">Rp ${subtotal.toLocaleString("id-ID")}</p>
          </div>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = html;
  totalElem.innerText = "Rp " + total.toLocaleString("id-ID");
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

// --- CHECKOUT LOGIC ---
function toggleLokasi() {
  const type = document.getElementById("order-type").value;
  const label = document.getElementById("label-lokasi");
  const input = document.getElementById("input-lokasi");

  if (type === "Dine-in") {
    label.innerText = "Nomor Meja";
    input.placeholder = "Contoh: Meja 12";
  } else if (type === "Delivery") {
    label.innerText = "Alamat Lengkap";
    input.placeholder = "Jalan, No Rumah, Patokan...";
  } else {
    label.innerText = "Nama Pengambil";
    input.placeholder = "Siapa yang akan ambil?";
  }
}

function prosesCheckout() {
  if (cart.length === 0) return alert("Keranjang kosong!");

  if (!currentUser) {
    alert("Silakan isi data diri dulu di tombol 'Masuk'!");
    toggleCart();
    toggleLoginModal();
    return;
  }

  const orderType = document.getElementById("order-type").value;
  const lokasi = document.getElementById("input-lokasi").value.trim();
  const catatan = document.getElementById("input-catatan").value.trim();

  if (!lokasi) return alert("Mohon lengkapi info Lokasi / No Meja!");

  const adminWA = "6281292772775"; // Ganti dengan nomor Admin aslimu

  let msg = `*ORDER BARU - AQASHH COFFEE* ☕%0A`;
  msg += `--------------------------------%0A`;
  msg += `👤 *Pemesan:* ${currentUser.nama}%0A`;
  msg += `📞 *No HP:* ${currentUser.hp}%0A`;
  msg += `🛍️ *Tipe:* ${orderType}%0A`;
  msg += `📍 *Info:* ${lokasi}%0A`;
  msg += `--------------------------------%0A`;

  msg += `*Daftar Pesanan:*%0A`;
  cart.forEach(item => {
    msg += `- ${item.name} (${item.qty}x) = Rp ${(item.price * item.qty).toLocaleString("id-ID")}%0A`;
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  msg += `--------------------------------%0A`;
  msg += `📝 *Catatan:* ${catatan || "-"}%0A`;
  msg += `💰 *TOTAL: Rp ${total.toLocaleString("id-ID")}*%0A%0A`;
  msg += `Mohon diproses, terima kasih!`;

  window.open(`https://wa.me/${adminWA}?text=${msg}`, "_blank");
}

// --- UTILS ---
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");

  toastMsg.innerText = message;
  toast.classList.remove("opacity-0");
  toast.classList.add("opacity-100");

  setTimeout(() => {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0");
  }, 3000);
}
