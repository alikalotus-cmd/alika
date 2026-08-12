// Sample Data Tugas Informatika
const dataInformatika = [
  {
    id: 'info-1',
    title: 'Website Portfolio Interaktif Berbasis Pastel Purple Theme',
    category: 'Web Dev',
    date: '18 Juli 2026',
    status: 'Selesai',
    score: '100 / 100',
    summary: 'Rancangan halaman web responsif berkonsep pastel ungu (soft lavender & violet) dengan Tailwind CSS, komponen interaktif, dan modal viewer.',
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'UI/UX'],
    fileSize: '1.2 MB',
    codeSnippet: `<!DOCTYPE html>
<html lang="id" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8">
  <title>Portofolio & Repositori Tugas | Alika</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-purple-50/50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 font-sans">
  <div class="max-w-4xl mx-auto py-12 px-6">
    <h1 class="text-4xl font-extrabold text-purple-600 dark:text-purple-400">Halo, Saya Alika 👋</h1>
    <p class="mt-4 text-zinc-600 dark:text-zinc-300">Selamat datang di hub portofolio & tugas sekolah saya.</p>
  </div>
</body>
</html>`,
    instructions: '1. Buat struktur HTML5 semantic.\n2. Hubungkan dengan CDN Tailwind CSS.\n3. Aplikasikan warna pastel ungu (lavender & violet) yang lembut dan elegan.'
  },
  {
    id: 'info-2',
    title: 'Algoritma Pencarian & Pengurutan Data (Sorting System)',
    category: 'Algoritma',
    date: '10 Juli 2026',
    status: 'Selesai',
    score: '95 / 100',
    summary: 'Implementasi algoritma Bubble Sort, Quick Sort, dan Binary Search berbasis Python dengan analisis kompleksitas Big-O.',
    tags: ['Python', 'Data Structures', 'Algorithms'],
    fileSize: '450 KB',
    codeSnippet: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

# Test Data
numbers = [42, 12, 88, 3, 27, 65, 1]
sorted_numbers = quick_sort(numbers)
print("Data Terurut:", sorted_numbers)`,
    instructions: '1. Tulis kode program pengurutan data.\n2. Hitung statistik waktu eksekusi untuk 10,000 sampel data.'
  },
  {
    id: 'info-3',
    title: 'Desain Wireframe & Prototype Aplikasi Edukasi Sekolah',
    category: 'UI/UX',
    date: '25 Juni 2026',
    status: 'Selesai',
    score: '98 / 100',
    summary: 'Studi kasus perancangan antarmuka aplikasi manajemen tugas kelas menggunakan prinsip Soft UI/UX Design dan palet warna lavender.',
    tags: ['Figma', 'UI/UX Design', 'Wireframing', 'User Testing'],
    fileSize: '5.8 MB',
    codeSnippet: `/* UI Design System Specs - Soft Pastel Purple */
:root {
  --primary-purple: #9333ea;
  --accent-violet: #8b5cf6;
  --soft-lavender-bg: #f5f3ff;
  --text-primary: #3f3f46;
  --accent-border: #ddd6fe;
  --border-radius-card: 16px;
}`,
    instructions: '1. Buat User Persona siswa dan guru.\n2. Rancang wireframe low-fidelity dan prototype hi-fi di Figma.\n3. Gunakan skema warna pastel ungu yang menenangkan.'
  },
  {
    id: 'info-4',
    title: 'Rancangan Basis Data Perpus Digital (Relational DB Schema)',
    category: 'Basis Data',
    date: '12 Juni 2026',
    status: 'Selesai',
    score: '92 / 100',
    summary: 'Desain Entity Relationship Diagram (ERD) dan skrip SQL untuk sistem perpustakaan sekolah.',
    tags: ['SQL', 'MySQL', 'ERD', 'Database Schema'],
    fileSize: '820 KB',
    codeSnippet: `CREATE TABLE Anggota (
    id_anggota VARCHAR(10) PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    kelas VARCHAR(20) NOT NULL,
    email VARCHAR(100) UNIQUE
);

CREATE TABLE Peminjaman (
    id_pinjam INT AUTO_INCREMENT PRIMARY KEY,
    id_anggota VARCHAR(10),
    tanggal_pinjam DATE,
    FOREIGN KEY (id_anggota) REFERENCES Anggota(id_anggota)
);`,
    instructions: '1. Buat diagram ERD 3-NF.\n2. Eksekusi DDL script untuk membuat tabel dan foreign keys.'
  }
];

// Sample Data Tugas Bahasa Indonesia
const dataBahasaIndonesia = [
  {
    id: 'bindo-1',
    title: 'Teks Eksposisi: Dampak Kecerdasan Buatan terhadap Pendidikan Masa Depan',
    category: 'Teks Eksposisi',
    date: '15 Juli 2026',
    status: 'Selesai',
    score: '98 / 100',
    readTime: '4 min baca',
    summary: 'Analisis kritis mengenai integrasi AI dalam metode pembelajaran sekolah serta etika pemanfaatan teknologi digital.',
    tags: ['Teks Eksposisi', 'Esai Ilmiah', 'Opini', 'Teknologi'],
    content: `### Tesis (Pernyataan Pendapat)
Perkembangan pesat Kecerdasan Buatan (Artificial Intelligence) telah membawa transformasi mendasar dalam berbagai sektor kehidupan, tak terkecuali dunia pendidikan. Penggunaan AI bukan lagi sekadar alat bantu opsional, melainkan elemen integral yang membentuk cara belajar siswa abad ke-21.

### Argumen Pendukung
Pertama, AI memungkinkan pembelajaran yang terpersonalisasi (personalized learning). Setiap siswa memiliki kecepatan dan gaya belajar yang berbeda. Melalui platform pintar, materi dapat disesuaikan secara otomatis berdasarkan tingkat pemahaman individu.

Kedua, efisiensi tugas administratif guru. AI dapat membantu memverifikasi tugas dasar sehingga pengajar memiliki waktu lebih banyak untuk melakukan interaksi emosional dan pembimbingan karakter siswa.

Namun demikian, ketergantungan yang berlebihan pada teknologi dapat menumpulkan daya kritis dan kreativitas alami. Oleh karena itu, integritas akademik dan pemahaman etika penggunaan AI harus senantiasa ditanamkan sejak dini.

### Penegasan Ulang
Sebagai kesimpulan, AI adalah alat pembantu yang sangat kuat namun tidak dapat menggantikan peran empati dan bimbingan guru. Penguasaan teknologi yang dibarengi etika adalah kunci utama menghadapi masa depan.`
  },
  {
    id: 'bindo-2',
    title: 'Resensi Buku: "Bumi Manusia" karya Pramoedya Ananta Toer',
    category: 'Resensi Buku',
    date: '02 Juli 2026',
    status: 'Selesai',
    score: '96 / 100',
    readTime: '5 min baca',
    summary: 'Ulasan komprehensif mengenai latar belakang sejarah, karakterisasi Minke, dan relevansi pesan keadilan sosial.',
    tags: ['Resensi', 'Sastra Indonesia', 'Kritik Sastra'],
    content: `### Identitas Buku
* **Judul**: Bumi Manusia
* **Penulis**: Pramoedya Ananta Toer
* **Penerbit**: Lentera Dipantara
* **Jumlah Halaman**: 535 Halaman

### Ringkasan & Analisis
Bumi Manusia mengisahkan perjalanan hidup Minke, seorang pemuda pribumi berbakat di era kolonial Hindia Belanda. Roman ini menggambarkan pertarungan gagasan antara kemajuan pemikiran rasional Eropa dengan penindasan sistemis yang terjadi di tanah air.

Gaya bahasa Pramoedya sangat lugas, kaya akan metafora perjuangan, serta menyentuh aspek kesetaraan manusia. Karakter Nyai Ontosoroh ditampilkan sangat kuat sebagai simbol keteguhan wanita independen di tengah dominasi patriarki kolonial.

### Kesimpulan & Rekomendasi
Bumi Manusia bukan sekadar novel sejarah, tetapi manifesto pentingnya pendidikan, keberanian berpikir bebas, dan harga diri bangsa.`
  },
  {
    id: 'bindo-3',
    title: 'Antologi Puisi: "Jejak Langkah di Lorong Sekolah"',
    category: 'Puisi/Sastra',
    date: '18 Juni 2026',
    status: 'Selesai',
    score: '94 / 100',
    readTime: '3 min baca',
    summary: 'Kumpulan puisi kontemplatif tentang persahabatan, perjuangan menuntut ilmu, dan harapan masa depan.',
    tags: ['Puisi', 'Sastra', 'Karya Kreatif'],
    content: `### Bayang Lembar Kertas

Di antara garis buku yang membisu,
Ada selarik gita yang terus bergema.
Bukan tentang seberapa cepat kita melangkah,
Namun seberapa dalam kita memahami makna.

Papan tulis menghapus jejak kemarin,
Waktu merajut masa depan di balik jemari.
Di lorong sekolah ini kita berjanji,
Menjadi cahaya di gelapnya malam nanti.

---
*Dibuat untuk Tugas Apresiasi Sastra Kelas XI*`
  },
  {
    id: 'bindo-4',
    title: 'Makalah Penelitian: Efektivitas Penggunaan Bahasa Indonesia Baku dalam Media Sosial',
    category: 'Karya Tulis',
    date: '05 Mei 2026',
    status: 'Selesai',
    score: '95 / 100',
    readTime: '6 min baca',
    summary: 'Studi tata bahasa dan fenomena ragam slang di kalangan generasi Z pada platform komunikasi digital.',
    tags: ['Makalah', 'Tata Bahasa', 'Sosiolinguistik'],
    content: `### BAB I: PENDAHULUAN
Bahasa Indonesia sebagai bahasa nasional mengalami perkembangan dinamis seiring populernya platform jejaring sosial. Makalah ini mengkaji bagaimana kaidah Ejaan yang Disempurnakan (EYD V) diterapkan dalam komunikasi informal sehari-hari di internet.

### BAB II: PEMBAHASAN
Berdasarkan sampel 200 unggahan di media sosial, terjadi pergeseran singkatan dan istilah serapan informal. Meskipun demikian, kesadaran akan penggunaan bahasa baku tetap tinggi dalam situasi formal seperti penulisan artikel ilmiah dan karya jurnalistik.`
  }
];

// App State Management
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  renderInformatika(dataInformatika);
  renderBahasaIndonesia(dataBahasaIndonesia);
  setupFilters();
  setupSearch();
  setupModals();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('alika_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('alika_theme', isDark ? 'dark' : 'light');
    });
  }
}

// Navigation Logic
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.tab-section');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  function switchTab(targetTabId) {
    // Hide all sections
    sections.forEach(sec => {
      sec.classList.add('hidden');
      sec.classList.remove('animate-fade-in');
    });

    // Remove active state from links
    navLinks.forEach(link => {
      link.classList.remove('active', 'text-pink-600', 'dark:text-pink-400');
      link.classList.add('text-zinc-600', 'dark:text-zinc-400');
    });

    // Target Section
    const activeSection = document.getElementById(targetTabId);
    if (activeSection) {
      activeSection.classList.remove('hidden');
      activeSection.classList.add('animate-fade-in');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Activate Nav Buttons
    const activeLinks = document.querySelectorAll(`[data-target="${targetTabId}"]`);
    activeLinks.forEach(link => {
      link.classList.add('active', 'text-pink-600', 'dark:text-pink-400');
      link.classList.remove('text-zinc-600', 'dark:text-zinc-400');
    });

    // Update Hash
    history.replaceState(null, '', `#${targetTabId}`);

    // Close mobile menu
    if (mobileNav && !mobileNav.classList.contains('hidden')) {
      mobileNav.classList.add('hidden');
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      if (target) switchTab(target);
    });
  });

  // Handle Initial Hash
  const hash = window.location.hash.substring(1);
  if (hash && document.getElementById(hash)) {
    switchTab(hash);
  } else {
    switchTab('dashboard');
  }

  // Mobile Menu Toggle
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }
}

// Helper for pastel category badges
function getPastelCategoryClasses(category) {
  switch (category) {
    case 'Web Dev':
    case 'Teks Eksposisi':
      return 'bg-pastel-pink-bg text-pastel-pink-accent border-pastel-pink-border/40 dark:bg-pastel-pink-light/10 dark:border-pastel-pink-border/20';
    case 'Algoritma':
    case 'Resensi Buku':
      return 'bg-pastel-purple-bg text-pastel-purple-accent border-pastel-purple-border/40 dark:bg-pastel-purple-light/10 dark:border-pastel-purple-border/20';
    case 'UI/UX':
    case 'Puisi/Sastra':
      return 'bg-pastel-blue-bg text-pastel-blue-accent border-pastel-blue-border/40 dark:bg-pastel-blue-light/10 dark:border-pastel-blue-border/20';
    case 'Basis Data':
    case 'Karya Tulis':
      return 'bg-pastel-peach-bg text-pastel-peach-accent border-pastel-peach-border/40 dark:bg-pastel-peach-light/10 dark:border-pastel-peach-border/20';
    default:
      return 'bg-pastel-mint-bg text-pastel-mint-accent border-pastel-mint-border/40 dark:bg-pastel-mint-light/10 dark:border-pastel-mint-border/20';
  }
}

// Render Informatics Assignments
function renderInformatika(items) {
  const container = document.getElementById('informatikaGrid');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-zinc-500 dark:text-zinc-400">
        <svg class="w-12 h-12 mx-auto mb-3 text-pink-300 dark:text-pink-800/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <p class="font-medium">Tidak ada tugas Informatika yang cocok dengan pencarian.</p>
      </div>`;
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="glass-panel p-6 rounded-[1.5rem] border border-white/50 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group card-hologram">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="tag-badge border ${getPastelCategoryClasses(item.category)}">
            ${item.category}
          </span>
          <span class="text-xs font-semibold text-zinc-400 dark:text-zinc-500">${item.date}</span>
        </div>
        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
          ${item.title}
        </h3>
        <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
          ${item.summary}
        </p>
      </div>

      <div>
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${item.tags.map(t => `<span class="text-[11px] px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-900/40 text-zinc-500 dark:text-zinc-400 font-mono border border-zinc-200/50 dark:border-zinc-800/40">#${t}</span>`).join('')}
        </div>
        <div class="pt-4 border-t border-pink-100/50 dark:border-zinc-800/40 flex items-center justify-between">
          <span class="text-xs font-semibold text-pink-600 dark:text-pink-400 flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Nilai: ${item.score}
          </span>
          <button onclick="openInfoModal('${item.id}')" class="px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-pink-400 to-purple-400 hover:opacity-90 dark:from-pink-500 dark:to-purple-500 rounded-xl transition-all shadow-md flex items-center gap-1.5 shadow-pink-300/10">
            <span>Detail Kode</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Indonesian Language Assignments
function renderBahasaIndonesia(items) {
  const container = document.getElementById('bindoGrid');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-zinc-500 dark:text-zinc-400">
        <svg class="w-12 h-12 mx-auto mb-3 text-pink-300 dark:text-pink-800/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <p class="font-medium">Tidak ada tugas Bahasa Indonesia yang cocok dengan pencarian.</p>
      </div>`;
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="glass-panel p-6 rounded-[1.5rem] border border-white/50 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group card-hologram">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="tag-badge border ${getPastelCategoryClasses(item.category)}">
            ${item.category}
          </span>
          <span class="text-xs font-semibold text-zinc-400 dark:text-zinc-500">${item.readTime}</span>
        </div>
        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
          ${item.title}
        </h3>
        <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
          ${item.summary}
        </p>
      </div>

      <div>
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${item.tags.map(t => `<span class="text-[11px] px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-900/40 text-zinc-500 dark:text-zinc-400 font-mono border border-zinc-200/50 dark:border-zinc-800/40">#${t}</span>`).join('')}
        </div>
        <div class="pt-4 border-t border-pink-100/50 dark:border-zinc-800/40 flex items-center justify-between">
          <span class="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            ${item.date}
          </span>
          <button onclick="openBindoModal('${item.id}')" class="px-4 py-2.5 text-xs font-bold text-pink-700 bg-pink-50 hover:bg-pink-100 dark:bg-pink-950/40 dark:text-pink-300 dark:hover:bg-pink-900/50 border border-pink-200/50 dark:border-pink-800/30 rounded-xl transition-all flex items-center gap-1.5">
            <span>Baca Teks</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Search Functionality
function setupSearch() {
  const searchInput = document.getElementById('globalSearchInput');
  const mobileSearchInput = document.getElementById('mobileSearchInput');

  function handleSearch(query) {
    const q = query.toLowerCase().trim();

    // Filter Informatika
    const filteredInfo = dataInformatika.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    );
    renderInformatika(filteredInfo);

    // Filter Bahasa Indonesia
    const filteredBindo = dataBahasaIndonesia.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    );
    renderBahasaIndonesia(filteredBindo);
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  }
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  }
}

// Category Filter Functionality
function setupFilters() {
  // Informatika Filters
  const infoFilterBtns = document.querySelectorAll('.info-filter-btn');
  infoFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      infoFilterBtns.forEach(b => {
        b.classList.remove('bg-pink-500', 'text-white', 'dark:bg-pink-600');
        b.classList.add('bg-pink-50', 'text-pink-800', 'dark:bg-zinc-800', 'dark:text-zinc-300');
      });

      btn.classList.remove('bg-pink-50', 'text-pink-800', 'dark:bg-zinc-800', 'dark:text-zinc-300');
      btn.classList.add('bg-pink-500', 'text-white', 'dark:bg-pink-600');

      const cat = btn.getAttribute('data-category');
      if (cat === 'All') {
        renderInformatika(dataInformatika);
      } else {
        renderInformatika(dataInformatika.filter(i => i.category === cat));
      }
    });
  });

  // Bahasa Indonesia Filters
  const bindoFilterBtns = document.querySelectorAll('.bindo-filter-btn');
  bindoFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      bindoFilterBtns.forEach(b => {
        b.classList.remove('bg-pink-500', 'text-white', 'dark:bg-pink-600');
        b.classList.add('bg-pink-50', 'text-pink-800', 'dark:bg-zinc-800', 'dark:text-zinc-300');
      });

      btn.classList.remove('bg-pink-50', 'text-pink-800', 'dark:bg-zinc-800', 'dark:text-zinc-300');
      btn.classList.add('bg-pink-500', 'text-white', 'dark:bg-pink-600');

      const cat = btn.getAttribute('data-category');
      if (cat === 'All') {
        renderBahasaIndonesia(dataBahasaIndonesia);
      } else {
        renderBahasaIndonesia(dataBahasaIndonesia.filter(i => i.category === cat));
      }
    });
  });
}

// Modal Viewers Setup
function setupModals() {
  const modalOverlay = document.getElementById('assignmentModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (closeModalBtn && modalOverlay) {
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.add('hidden');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.add('hidden');
      }
    });
  }
}

// Open Informatika Modal
window.openInfoModal = function (id) {
  const item = dataInformatika.find(i => i.id === id);
  if (!item) return;

  const modalOverlay = document.getElementById('assignmentModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalMeta = document.getElementById('modalMeta');
  const modalBody = document.getElementById('modalBody');

  modalTitle.innerText = item.title;
  modalMeta.innerHTML = `
    <span class="tag-badge border ${getPastelCategoryClasses(item.category)}">${item.category}</span>
    <span class="text-xs text-zinc-500 dark:text-zinc-400">Diposting: ${item.date}</span>
    <span class="text-xs text-pink-600 dark:text-pink-400 font-semibold">Status: ${item.status} (${item.score})</span>
  `;

  modalBody.innerHTML = `
    <div class="space-y-4">
      <div>
        <h4 class="text-xs uppercase tracking-wider font-semibold text-pink-500 dark:text-pink-400 mb-1">Ringkasan Tugas</h4>
        <p class="text-sm text-zinc-700 dark:text-zinc-300">${item.summary}</p>
      </div>

      <div>
        <h4 class="text-xs uppercase tracking-wider font-semibold text-pink-500 dark:text-pink-400 mb-1">Instruksi Guru</h4>
        <p class="text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-line bg-pink-50/20 dark:bg-zinc-900/40 p-3 rounded-xl border border-pink-100/50 dark:border-zinc-800/40">${item.instructions}</p>
      </div>

      <div>
        <div class="flex items-center justify-between mb-2">
          <h4 class="text-xs uppercase tracking-wider font-semibold text-pink-500 dark:text-pink-400">Source Code / Output</h4>
          <button onclick="copyCodeSnippet()" class="text-xs text-pink-500 dark:text-pink-400 hover:underline font-mono flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            <span id="copyCodeText">Salin Kode</span>
          </button>
        </div>
        <pre id="codeSnippetPre" class="bg-zinc-950 text-pink-100 p-4 rounded-xl text-xs overflow-x-auto border border-zinc-800 font-mono leading-relaxed"><code>${escapeHtml(item.codeSnippet)}</code></pre>
      </div>
    </div>
  `;

  modalOverlay.classList.remove('hidden');
};

// Open Bahasa Indonesia Modal
window.openBindoModal = function (id) {
  const item = dataBahasaIndonesia.find(i => i.id === id);
  if (!item) return;

  const modalOverlay = document.getElementById('assignmentModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalMeta = document.getElementById('modalMeta');
  const modalBody = document.getElementById('modalBody');

  modalTitle.innerText = item.title;
  modalMeta.innerHTML = `
    <span class="tag-badge border ${getPastelCategoryClasses(item.category)}">${item.category}</span>
    <span class="text-xs text-zinc-500 dark:text-zinc-400">Estimasi: ${item.readTime}</span>
    <span class="text-xs text-pink-600 dark:text-pink-400 font-semibold">Status: ${item.status} (${item.score})</span>
  `;

  modalBody.innerHTML = `
    <div class="space-y-4">
      <div class="bg-pink-50/20 dark:bg-zinc-900/40 p-4 rounded-xl border border-pink-100/50 dark:border-zinc-800/40 mb-4">
        <h4 class="text-xs uppercase tracking-wider font-semibold text-pink-500 dark:text-pink-400 mb-1">Abstrak / Pendahuluan</h4>
        <p class="text-sm text-zinc-700 dark:text-zinc-300">${item.summary}</p>
      </div>

      <div class="prose dark:prose-invert max-w-none text-sm leading-relaxed text-zinc-800 dark:text-zinc-200 whitespace-pre-line">
        ${item.content}
      </div>
    </div>
  `;

  modalOverlay.classList.remove('hidden');
};

// Utility: Copy Code Snippet
window.copyCodeSnippet = function () {
  const codePre = document.getElementById('codeSnippetPre');
  const copyText = document.getElementById('copyCodeText');
  if (!codePre) return;

  navigator.clipboard.writeText(codePre.innerText).then(() => {
    if (copyText) {
      copyText.innerText = 'Tersalin! ✓';
      setTimeout(() => {
        copyText.innerText = 'Salin Kode';
      }, 2000);
    }
  });
};

// Utility: Copy Social Media Link
window.copySocialLink = function (url, platformName) {
  navigator.clipboard.writeText(url).then(() => {
    showToast(`Link ${platformName} tersalin ke clipboard!`);
  }).catch(() => {
    showToast(`Buka: ${url}`);
  });
};

// Toast Notification
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-pink-600 text-white dark:bg-pink-500 dark:text-white px-5 py-3 rounded-2xl shadow-xl text-xs font-semibold transform transition-all duration-300 translate-y-10 opacity-0 flex items-center gap-2 border border-pink-400/30';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-4 h-4 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    <span>${message}</span>
  `;

  setTimeout(() => {
    toast.classList.remove('translate-y-10', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 3000);
}

// Escape HTML utility
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
