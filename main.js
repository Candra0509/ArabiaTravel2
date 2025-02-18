let userCount = 0;

document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    userCount++;
    document.getElementById("userCount").textContent = userCount;

    // Buat elemen alert baru
    let alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-success alert-dismissible fade show";
    alertDiv.setAttribute("role", "alert");
    alertDiv.innerHTML = `
        Pemesanan berhasil! Anda adalah pendaftar ke-${userCount}.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    // Tambahkan alert ke dalam container
    let alertContainer = document.getElementById("alertContainer");
    alertContainer.innerHTML = ""; // Hapus alert sebelumnya jika ada
    alertContainer.appendChild(alertDiv);

    // Hapus alert setelah 3 detik
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
});
document.addEventListener("scroll", function () {
    let navbar = document.querySelector(".custom-navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        let navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});

    document.addEventListener("DOMContentLoaded", function () {
        let navLinks = document.querySelectorAll(".nav-link");
        let navbarToggler = document.querySelector(".navbar-toggler");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                if (window.innerWidth < 992) { // Hanya berlaku di mobile/tablet
                    navbarToggler.click();
                }
            });
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        const bookingForm = document.getElementById("bookingForm");
        const containerForm = document.querySelector(".container-form");
    
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Mencegah reload halaman saat submit
    
            // Ubah tampilan container-form setelah submit
            containerForm.innerHTML = `
                <div class="text-center py-5">
                    <i class="fas fa-check-circle text-success" style="font-size: 4rem;"></i>
                    <h2 class="mt-3 text-success">Pesanan Anda Menunggu Konfirmasi</h2>
                    <p class="lead">Kami akan menghubungi Anda melalui email dalam waktu 24 jam.</p>
                </div>
            `;
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        const bookingForm = document.getElementById("bookingForm");
        const containerForm = document.querySelector(".container-form");
    
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Mencegah reload halaman saat submit
    
            // Tambahkan kelas animasi flip
            containerForm.classList.add("flip-animation");
    
            setTimeout(() => {
                // Ubah konten setelah flip selesai
                containerForm.innerHTML = `
                    <div class="text-center py-5">
                        <i class="fas fa-check-circle text-success" style="font-size: 4rem;"></i>
                        <h2 class="mt-3 text-success">Pesanan Anda Menunggu Konfirmasi</h2>
                        <p class="lead">Kami akan menghubungi Anda melalui email dalam waktu 24 jam.</p>
                    </div>
                `;
    
                // Hapus efek flip dan ubah background
                containerForm.classList.remove("flip-animation");
                containerForm.classList.add("bg-solid");
            }, 500); // Waktu sesuai dengan durasi animasi
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        const userCountEl = document.getElementById("happyClients");
        let currentUserCount = localStorage.getItem("userCount") || 12000; // Default 12K
    
        // Fungsi untuk menambah jumlah pemesan
        function updateUserCount() {
            currentUserCount++;
            localStorage.setItem("userCount", currentUserCount);
            animateCounter(userCountEl, currentUserCount);
        }
    
        // Animasi hitung angka dari angka lama ke angka baru
        function animateCounter(element, newValue) {
            let current = parseInt(element.innerText.replace(/\D/g, "")); // Ambil angka saja
            let increment = (newValue - current) / 100; // Buat animasi smooth
    
            let counter = setInterval(() => {
                current += increment;
                if (current >= newValue) {
                    clearInterval(counter);
                    current = newValue;
                }
                element.innerText = Math.floor(current).toLocaleString() + "+";
            }, 10);
        }
    
        // Update counter saat halaman dimuat
        animateCounter(userCountEl, currentUserCount);
    
        // Tambahkan event listener ke form submit
        document.getElementById("bookingForm").addEventListener("submit", function (event) {
            event.preventDefault();
            updateUserCount(); // Tambahkan pemesan baru ke count
        });
    });
            
