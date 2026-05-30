/* ============================================================
   script.js — LogoTok Toko Online
   Semua logika dan interaktivitas website ada di file ini
   ============================================================ */


/* ============================================================
   1. DATA PRODUK
      Array berisi seluruh produk yang dijual di toko
   ============================================================ */
const products = [

  /* ---------- ELEKTRONIK (6 produk) ---------- */
  {
    id       : 1,
    name     : 'Headphone Wireless Pro',
    price    : 350000,
    category : 'Elektronik',
    icon     : '🎧',
    desc     : 'Headphone wireless premium dengan noise cancelling aktif, baterai tahan 30 jam, dan suara jernih berkualitas studio.'
  },
  {
    id       : 2,
    name     : 'Lampu LED Smart',
    price    : 120000,
    category : 'Elektronik',
    icon     : '💡',
    desc     : 'Lampu LED pintar yang bisa dikontrol lewat smartphone. Hemat energi hingga 80%, tahan hingga 25.000 jam.'
  },
  {
    id       : 3,
    name     : 'Smartwatch Fitness',
    price    : 450000,
    category : 'Elektronik',
    icon     : '⌚',
    desc     : 'Smartwatch canggih dengan fitur monitor detak jantung, GPS, dan waterproof 5ATM. Baterai tahan 7 hari.'
  },
  {
    id       : 4,
    name     : 'Speaker Bluetooth Mini',
    price    : 185000,
    category : 'Elektronik',
    icon     : '🔊',
    desc     : 'Speaker Bluetooth portabel tahan air IPX5 dengan bass kuat. Baterai 12 jam, cocok untuk outdoor maupun indoor.'
  },
  {
    id       : 5,
    name     : 'Power Bank 20.000 mAh',
    price    : 230000,
    category : 'Elektronik',
    icon     : '🔋',
    desc     : 'Power bank kapasitas besar 20.000 mAh dengan teknologi fast charging 22.5W. Isi daya 3 perangkat sekaligus.'
  },
  {
    id       : 6,
    name     : 'Kamera Mirrorless Entry',
    price    : 6500000,
    category : 'Elektronik',
    icon     : '📷',
    desc     : 'Kamera mirrorless entry-level dengan sensor 24MP, video 4K, dan autofokus cerdas. Cocok untuk pemula dan content creator.'
  },

  /* ---------- PAKAIAN (6 produk) ---------- */
  {
    id       : 7,
    name     : 'Kaos Polos Premium',
    price    : 85000,
    category : 'Pakaian',
    icon     : '👕',
    desc     : 'Kaos polos bahan katun combed 30s yang lembut dan nyaman dipakai seharian. Tersedia berbagai warna pilihan.'
  },
  {
    id       : 8,
    name     : 'Jaket Denim Vintage',
    price    : 285000,
    category : 'Pakaian',
    icon     : '🧥',
    desc     : 'Jaket denim vintage distressed yang stylish. Bahan denim berkualitas, cocok untuk tampilan kasual keren.'
  },
  {
    id       : 9,
    name     : 'Celana Chinos Slim Fit',
    price    : 195000,
    category : 'Pakaian',
    icon     : '👖',
    desc     : 'Celana chinos slim fit bahan stretch yang nyaman dipakai seharian. Tersedia dalam 5 warna netral pilihan.'
  },
  {
    id       : 10,
    name     : 'Dress Batik Modern',
    price    : 320000,
    category : 'Pakaian',
    icon     : '👗',
    desc     : 'Dress batik dengan motif kontemporer dan potongan modern. Bahan katun premium yang adem dan tidak mudah kusut.'
  },
  {
    id       : 11,
    name     : 'Sepatu Sneakers Casual',
    price    : 420000,
    category : 'Pakaian',
    icon     : '👟',
    desc     : 'Sneakers casual dengan sol karet anti-slip yang ringan dan fleksibel. Desain minimalis cocok untuk berbagai outfit.'
  },
  {
    id       : 12,
    name     : 'Topi Baseball Bordir',
    price    : 75000,
    category : 'Pakaian',
    icon     : '🧢',
    desc     : 'Topi baseball dengan bordir premium. Bahan kanvas tebal, tali pengatur ukuran, cocok untuk pria dan wanita.'
  },

  /* ---------- RUMAH TANGGA (5 produk) ---------- */
  {
    id       : 13,
    name     : 'Panci Anti Lengket',
    price    : 210000,
    category : 'Rumah Tangga',
    icon     : '🍳',
    desc     : 'Panci anti lengket premium berlapis titanium. Tahan panas tinggi, mudah dibersihkan, dan awet bertahun-tahun.'
  },
  {
    id       : 14,
    name     : 'Rak Dinding Minimalis',
    price    : 145000,
    category : 'Rumah Tangga',
    icon     : '🪑',
    desc     : 'Rak dinding gaya minimalis dari kayu solid dan besi. Mudah dipasang, kuat menahan beban hingga 15 kg.'
  },
  {
    id       : 15,
    name     : 'Set Gelas Kaca Premium',
    price    : 89000,
    category : 'Rumah Tangga',
    icon     : '🥛',
    desc     : 'Set 6 gelas kaca borosilikat tahan panas dan benturan. Desain elegan untuk tamu maupun pemakaian sehari-hari.'
  },
  {
    id       : 16,
    name     : 'Bantal Memory Foam',
    price    : 175000,
    category : 'Rumah Tangga',
    icon     : '🛏️',
    desc     : 'Bantal memory foam ergonomis yang menyesuaikan bentuk kepala dan leher. Tidur lebih nyenyak dan bebas pegal.'
  },
  {
    id       : 17,
    name     : 'Vacuum Cleaner Robot',
    price    : 980000,
    category : 'Rumah Tangga',
    icon     : '🤖',
    desc     : 'Robot vacuum cleaner pintar dengan navigasi laser, bisa dijadwal via aplikasi, dan daya hisap 2500 Pa.'
  },

  /* ---------- BUKU (5 produk) ---------- */
  {
    id       : 18,
    name     : 'Novel Bestseller 2025',
    price    : 75000,
    category : 'Buku',
    icon     : '📖',
    desc     : 'Novel terlaris tahun 2025 yang menakjubkan. Kisah mengharukan dan penuh inspirasi untuk semua kalangan.'
  },
  {
    id       : 19,
    name     : 'Buku Memasak Modern',
    price    : 95000,
    category : 'Buku',
    icon     : '📚',
    desc     : 'Panduan memasak modern dengan 200+ resep lengkap. Dilengkapi foto step-by-step yang mudah dipahami.'
  },
  {
    id       : 20,
    name     : 'Buku Investasi Saham',
    price    : 110000,
    category : 'Buku',
    icon     : '📈',
    desc     : 'Panduan lengkap investasi saham untuk pemula hingga mahir. Strategi jitu membangun portofolio yang menguntungkan.'
  },
  {
    id       : 21,
    name     : 'Komik One Piece Vol. 100',
    price    : 35000,
    category : 'Buku',
    icon     : '📕',
    desc     : 'Volume spesial komik One Piece edisi ke-100 dengan cover eksklusif dan bonus poster lipat ukuran A2.'
  },
  {
    id       : 22,
    name     : 'Buku Belajar Coding Python',
    price    : 130000,
    category : 'Buku',
    icon     : '💻',
    desc     : 'Buku belajar Python dari nol hingga mahir dengan pendekatan proyek nyata. Cocok untuk pelajar dan profesional.'
  },

  /* ---------- OLAHRAGA (4 produk) ---------- */
  {
    id       : 23,
    name     : 'Sepatu Lari Ringan',
    price    : 550000,
    category : 'Olahraga',
    icon     : '🏃',
    desc     : 'Sepatu lari dengan teknologi bantalan udara dan sol karet anti-slip. Ringan hanya 250 gram, nyaman untuk lari jauh.'
  },
  {
    id       : 24,
    name     : 'Raket Badminton Carbon',
    price    : 380000,
    category : 'Olahraga',
    icon     : '🏸',
    desc     : 'Raket badminton full carbon super ringan 75 gram. Kekakuan frame tinggi untuk smash yang lebih keras dan akurat.'
  },
  {
    id       : 25,
    name     : 'Dumbbell Set 10 kg',
    price    : 270000,
    category : 'Olahraga',
    icon     : '🏋️',
    desc     : 'Set dumbbell besi chrome dengan grip rubber anti-selip. Beban 2x5 kg, cocok untuk latihan di rumah.'
  },
  {
    id       : 26,
    name     : 'Matras Yoga Anti-Slip',
    price    : 155000,
    category : 'Olahraga',
    icon     : '🧘',
    desc     : 'Matras yoga TPE ramah lingkungan dengan ketebalan 6mm. Permukaan anti-selip dua sisi, ringan dan mudah digulung.'
  },

  /* ---------- KECANTIKAN (4 produk) ---------- */
  {
    id       : 27,
    name     : 'Serum Vitamin C 20%',
    price    : 145000,
    category : 'Kecantikan',
    icon     : '✨',
    desc     : 'Serum wajah Vitamin C 20% yang mencerahkan, meratakan warna kulit, dan melindungi dari radikal bebas. BPOM terdaftar.'
  },
  {
    id       : 28,
    name     : 'Sunscreen SPF 50+ PA++++',
    price    : 89000,
    category : 'Kecantikan',
    icon     : '🧴',
    desc     : 'Sunscreen dengan perlindungan SPF 50+ PA++++ yang ringan, tidak lengket, dan tahan air. Cocok untuk kulit berminyak.'
  },
  {
    id       : 29,
    name     : 'Masker Sheet Korea 10 pcs',
    price    : 65000,
    category : 'Kecantikan',
    icon     : '🫧',
    desc     : 'Set 10 masker sheet Korea dengan kandungan hyaluronic acid dan niacinamide. Kulit terasa lembab dan bercahaya.'
  },
  {
    id       : 30,
    name     : 'Parfum Eau de Parfum',
    price    : 320000,
    category : 'Kecantikan',
    icon     : '🌸',
    desc     : 'Parfum EDP dengan aroma floral-musky yang tahan lama hingga 8 jam. Cocok untuk pria dan wanita, cocok untuk acara formal.'
  },

  /* ---------- MAKANAN (4 produk) ---------- */
  {
    id       : 31,
    name     : 'Kopi Arabika Toraja 250g',
    price    : 85000,
    category : 'Makanan',
    icon     : '☕',
    desc     : 'Kopi arabika single origin Toraja dengan cita rasa fruity dan body medium. Disangrai segar setiap hari, kualitas premium.'
  },
  {
    id       : 32,
    name     : 'Cokelat Dark 72% Cacao',
    price    : 55000,
    category : 'Makanan',
    icon     : '🍫',
    desc     : 'Dark chocolate premium 72% cacao dari biji kakao pilihan. Kaya antioksidan, bebas pengawet, dan sangat lezat.'
  },
  {
    id       : 33,
    name     : 'Madu Hutan Murni 500ml',
    price    : 125000,
    category : 'Makanan',
    icon     : '🍯',
    desc     : 'Madu hutan asli 100% murni tanpa campuran gula. Dipanen langsung dari lebah liar di hutan Kalimantan.'
  },
  {
    id       : 34,
    name     : 'Keripik Tempe Pedas 200g',
    price    : 28000,
    category : 'Makanan',
    icon     : '🌶️',
    desc     : 'Keripik tempe renyah dengan bumbu pedas level 3. Camilan sehat tinggi protein, tanpa MSG dan pengawet buatan.'
  },

  /* ---------- OTOMOTIF (3 produk) ---------- */
  {
    id       : 35,
    name     : 'Car Freshener Luxury',
    price    : 45000,
    category : 'Otomotif',
    icon     : '🚗',
    desc     : 'Pengharum mobil premium dengan aroma luxury oud yang tahan hingga 60 hari. Desain elegan tidak norak di dashboard.'
  },
  {
    id       : 36,
    name     : 'Kamera Dasbor Full HD',
    price    : 480000,
    category : 'Otomotif',
    icon     : '📹',
    desc     : 'Dashcam Full HD 1080p dengan night vision, perekaman loop, dan sensor G-force. Bukti otomatis saat kecelakaan.'
  },
  {
    id       : 37,
    name     : 'Pelindung Cat Nano Coating',
    price    : 215000,
    category : 'Otomotif',
    icon     : '🛡️',
    desc     : 'Cairan pelindung cat nano ceramic yang membuat mobil selalu mengkilap dan mudah dibersihkan hingga 12 bulan.'
  },

  /* ---------- MAINAN (3 produk) ---------- */
  {
    id       : 38,
    name     : 'LEGO City Starter Pack',
    price    : 350000,
    category : 'Mainan',
    icon     : '🧱',
    desc     : 'Set LEGO City 500 keping dengan instruksi membangun kota mini. Mengembangkan kreativitas dan motorik halus anak.'
  },
  {
    id       : 39,
    name     : 'Remote Control Car 4WD',
    price    : 275000,
    category : 'Mainan',
    icon     : '🏎️',
    desc     : 'Mobil RC 4WD off-road dengan kecepatan 30 km/jam. Tahan benturan, bisa di medan berbatu dan pasir, jangkauan 50 meter.'
  },
  {
    id       : 40,
    name     : 'Boneka Plush Jumbo',
    price    : 180000,
    category : 'Mainan',
    icon     : '🧸',
    desc     : 'Boneka plush jumbo ukuran 60cm dengan bahan bulu lembut anti-alergi. Aman untuk anak-anak, sudah SNI certified.'
  }

];


/* ============================================================
   2. STATE (DATA YANG BERUBAH-UBAH)
      Variabel yang menyimpan kondisi aplikasi saat ini
   ============================================================ */
let cart            = [];               // Isi keranjang belanja
let currentProduct  = null;             // Produk yang sedang dilihat
let currentQty      = 1;               // Jumlah produk di halaman detail
let selectedPayment = 'Kartu Kredit';   // Metode bayar yang dipilih
let pageHistory     = ['home'];         // Riwayat halaman untuk tombol Back
let shippingData    = {};              // Data pengiriman yang diisi user


/* ============================================================
   3. FUNGSI NAVIGASI HALAMAN
   ============================================================ */

/**
 * showPage(name)
 * Menampilkan halaman yang dipilih dan menyembunyikan yang lain
 * @param {string} name - id halaman tanpa "page-" (contoh: 'home', 'cart')
 */
function showPage(name) {
  // Sembunyikan semua halaman
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Tampilkan halaman yang dipilih
  document.getElementById('page-' + name).classList.add('active');

  // Simpan ke history (jika bukan halaman yang sama)
  if (pageHistory[pageHistory.length - 1] !== name) {
    pageHistory.push(name);
  }

  // Scroll ke atas setiap pindah halaman
  window.scrollTo(0, 0);

  // Jalankan fungsi inisialisasi khusus per halaman
  if (name === 'home')   initHome();
  if (name === 'search') doSearch();
  if (name === 'cart')   renderCart();
}

/**
 * goBack()
 * Kembali ke halaman sebelumnya berdasarkan pageHistory
 */
function goBack() {
  pageHistory.pop();                                    // Hapus halaman saat ini
  const prevPage = pageHistory[pageHistory.length - 1] || 'home';
  showPage(prevPage);
}


/* ============================================================
   4. FUNGSI HALAMAN BERANDA
   ============================================================ */

/**
 * initHome()
 * Inisialisasi halaman beranda:
 * - Render 4 produk unggulan
 * - Render semua produk
 */
function initHome() {
  renderProducts(products.slice(0, 4), 'featured-grid');   // 4 produk pertama = unggulan
  renderProducts(products, 'all-products-grid');
}

/**
 * filterCategory(category, chipEl)
 * Filter produk berdasarkan kategori yang diklik
 * @param {string} category - nama kategori ('Semua', 'Elektronik', dll)
 * @param {HTMLElement} chipEl - elemen chip yang diklik (untuk highlight)
 */
function filterCategory(category, chipEl) {
  // Hapus class active dari semua chip
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));

  // Beri class active ke chip yang diklik
  chipEl.classList.add('active');

  // Filter produk sesuai kategori
  const filtered = (category === 'Semua')
    ? products
    : products.filter(p => p.category === category);

  renderProducts(filtered, 'all-products-grid');
}


/* ============================================================
   5. FUNGSI RENDER PRODUK
   ============================================================ */

/**
 * renderProducts(list, containerId)
 * Membuat HTML kartu produk dan memasukkannya ke container
 * @param {Array}  list        - array produk yang akan ditampilkan
 * @param {string} containerId - id elemen container grid
 */
function renderProducts(list, containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  // Jika tidak ada produk, tampilkan pesan kosong
  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1;">
        <div class="icon">🔍</div>
        <p>Produk tidak ditemukan</p>
      </div>`;
    return;
  }

  // Buat kartu untuk setiap produk
  grid.innerHTML = list.map(p => `
    <div class="product-card" onclick="openDetail(${p.id})">
      <div class="product-img">${p.icon}</div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-price">${formatRupiah(p.price)}</div>
        <button
          class="btn-detail"
          onclick="event.stopPropagation(); openDetail(${p.id})"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  `).join('');
}


/* ============================================================
   6. FUNGSI HALAMAN PENCARIAN
   ============================================================ */

/**
 * doSearch()
 * Mencari produk berdasarkan input di kolom pencarian
 * Dipanggil otomatis saat user mengetik (oninput)
 */
function doSearch() {
  const keyword = document.getElementById('search-input').value.toLowerCase();

  // Filter produk yang namanya atau kategorinya mengandung keyword
  const results = products.filter(p =>
    p.name.toLowerCase().includes(keyword) ||
    p.category.toLowerCase().includes(keyword)
  );

  renderProducts(results, 'search-results');
}


/* ============================================================
   7. FUNGSI HALAMAN DETAIL PRODUK
   ============================================================ */

/**
 * openDetail(id)
 * Membuka halaman detail untuk produk tertentu
 * @param {number} id - id produk
 */
function openDetail(id) {
  // Cari produk berdasarkan id
  currentProduct = products.find(p => p.id === id);
  currentQty     = 1;   // Reset jumlah ke 1

  // Isi elemen HTML dengan data produk
  document.getElementById('detail-img').textContent   = currentProduct.icon;
  document.getElementById('detail-name').textContent  = currentProduct.name;
  document.getElementById('detail-desc').textContent  = currentProduct.desc;
  document.getElementById('detail-price').textContent = formatRupiah(currentProduct.price);
  document.getElementById('qty-val').textContent      = 1;

  showPage('detail');
}

/**
 * changeQty(delta)
 * Menambah atau mengurangi jumlah produk di halaman detail
 * @param {number} delta - +1 untuk tambah, -1 untuk kurang
 */
function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);   // Minimum 1
  document.getElementById('qty-val').textContent = currentQty;
}

/**
 * addToCart()
 * Menambahkan produk yang sedang dilihat ke keranjang
 */
function addToCart() {
  if (!currentProduct) return;

  // Cek apakah produk sudah ada di keranjang
  const existing = cart.find(item => item.id === currentProduct.id);

  if (existing) {
    // Jika sudah ada, tambahkan qty-nya
    existing.qty += currentQty;
  } else {
    // Jika belum ada, tambahkan sebagai item baru
    cart.push({ ...currentProduct, qty: currentQty });
  }

  updateCartBadge();
  showToast(`✅ ${currentProduct.name} ditambahkan ke keranjang!`, 'success');

  // Pindah ke halaman keranjang setelah 900ms
  setTimeout(() => showPage('cart'), 900);
}


/* ============================================================
   8. FUNGSI HALAMAN KERANJANG
   ============================================================ */

/**
 * renderCart()
 * Menampilkan semua item di keranjang dan menghitung total
 */
function renderCart() {
  const container = document.getElementById('cart-items-container');

  // Jika keranjang kosong
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="icon">🛒</div>
        <p>Keranjang masih kosong.<br>Yuk, tambahkan produk!</p>
      </div>`;
    document.getElementById('cart-total').textContent = 'Rp 0';
    return;
  }

  // Buat HTML untuk setiap item keranjang
  container.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-img">${item.icon}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatRupiah(item.price)}</div>
        <div style="display:flex; align-items:center; gap:10px;">
          <button class="qty-btn" style="width:28px;height:28px;" onclick="cartChangeQty(${index}, -1)">−</button>
          <span style="font-weight:700;">${item.qty}</span>
          <button class="qty-btn" style="width:28px;height:28px;" onclick="cartChangeQty(${index}, +1)">+</button>
          <button class="btn-hapus" onclick="removeFromCart(${index})">Hapus</button>
        </div>
      </div>
    </div>
  `).join('');

  // Hitung dan tampilkan total harga
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  document.getElementById('cart-total').textContent = formatRupiah(total);
}

/**
 * cartChangeQty(index, delta)
 * Mengubah jumlah item langsung dari halaman keranjang
 * @param {number} index - posisi item dalam array cart
 * @param {number} delta - +1 atau -1
 */
function cartChangeQty(index, delta) {
  cart[index].qty = Math.max(1, cart[index].qty + delta);
  renderCart();
  updateCartBadge();
}

/**
 * removeFromCart(index)
 * Menghapus item dari keranjang
 * @param {number} index - posisi item dalam array cart
 */
function removeFromCart(index) {
  cart.splice(index, 1);   // Hapus 1 item di posisi index
  renderCart();
  updateCartBadge();
}

/**
 * updateCartBadge()
 * Memperbarui angka badge di ikon keranjang navbar
 */
function updateCartBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cart-badge').textContent = totalItems;
}


/* ============================================================
   9. FUNGSI HALAMAN PENGIRIMAN
   ============================================================ */

/**
 * goToCheckout()
 * Validasi form pengiriman lalu pindah ke halaman checkout
 */
function goToCheckout() {
  // Ambil nilai setiap field
  const name     = document.getElementById('sh-name').value.trim();
  const address  = document.getElementById('sh-address').value.trim();
  const city     = document.getElementById('sh-city').value.trim();
  const province = document.getElementById('sh-province').value.trim();
  const postal   = document.getElementById('sh-postal').value.trim();
  const phone    = document.getElementById('sh-phone').value.trim();

  // Validasi: semua field harus diisi
  if (!name || !address || !city || !province || !postal || !phone) {
    showToast('⚠️ Mohon lengkapi semua data pengiriman!');
    return;   // Hentikan proses jika ada yang kosong
  }

  // Simpan data pengiriman ke state
  shippingData = { name, address, city, province, postal, phone };

  showPage('checkout');
}


/* ============================================================
   10. FUNGSI HALAMAN CHECKOUT
   ============================================================ */

/**
 * selectPayment(element, method)
 * Mengubah metode pembayaran yang dipilih
 * @param {HTMLElement} element - elemen .payment-option yang diklik
 * @param {string}      method  - nama metode ('Kartu Kredit', dll)
 */
function selectPayment(element, method) {
  // Hapus class selected dari semua opsi
  document.querySelectorAll('.payment-option').forEach(opt => {
    opt.classList.remove('selected');
    opt.querySelector('input').checked = false;
  });

  // Tandai opsi yang dipilih
  element.classList.add('selected');
  element.querySelector('input').checked = true;

  // Simpan ke state
  selectedPayment = method;
}

/**
 * confirmOrder()
 * Memproses pesanan dan pindah ke halaman konfirmasi
 */
function confirmOrder() {
  if (cart.length === 0) {
    showToast('⚠️ Keranjang masih kosong!');
    return;
  }

  // --- Buat HTML ringkasan item ---
  const itemsHTML = cart.map(item => `
    <div class="summary-row">
      <span>${item.icon} ${item.name} (×${item.qty})</span>
      <span>${formatRupiah(item.price * item.qty)}</span>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const totalHTML = `
    <div class="summary-row total">
      <span>Total</span>
      <span>${formatRupiah(total)}</span>
    </div>`;

  document.getElementById('conf-items').innerHTML = itemsHTML + totalHTML;

  // --- Tampilkan info pengiriman ---
  document.getElementById('conf-shipping').innerHTML = `
    <strong>${shippingData.name}</strong>
    <span>${shippingData.address}</span>
    <span>Kota ${shippingData.city}, ${shippingData.province}</span>
    <span>Kode Pos: ${shippingData.postal}</span>
    <span>Telepon: ${shippingData.phone}</span>
  `;

  // --- Tampilkan metode bayar ---
  document.getElementById('conf-payment').textContent = selectedPayment;

  // Kosongkan keranjang setelah order berhasil
  cart = [];
  updateCartBadge();

  showPage('confirmation');
}


/* ============================================================
   11. FUNGSI HALAMAN KONFIRMASI
   ============================================================ */

/**
 * backToHome()
 * Kembali ke beranda dan reset riwayat navigasi
 */
function backToHome() {
  pageHistory = ['home'];   // Reset history
  showPage('home');
}


/* ============================================================
   12. FUNGSI UTILITAS (HELPER)
   ============================================================ */

/**
 * formatRupiah(number)
 * Mengubah angka menjadi format mata uang Rupiah
 * Contoh: 150000 → "Rp 150.000"
 * @param {number} number - angka yang akan diformat
 * @returns {string} string harga dalam format Rupiah
 */
function formatRupiah(number) {
  return 'Rp ' + number.toLocaleString('id-ID');
}

/**
 * showToast(message, type)
 * Menampilkan notifikasi kecil di bagian bawah layar
 * @param {string} message - pesan yang ditampilkan
 * @param {string} type    - '' (default gelap) atau 'success' (hijau)
 */
function showToast(message, type = '') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className   = 'toast show' + (type ? ' ' + type : '');

  // Sembunyikan otomatis setelah 2.8 detik
  setTimeout(() => {
    toast.className = 'toast';
  }, 2800);
}


/* ============================================================
   13. INISIALISASI AWAL
      Dijalankan satu kali saat halaman pertama dimuat
   ============================================================ */
initHome();   // Tampilkan produk di beranda
doSearch();   // Siapkan halaman pencarian dengan semua produk
