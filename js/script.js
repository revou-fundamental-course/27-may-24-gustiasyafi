document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const now = new Date();
    const formattedTime = now.toLocaleString();

    const name = document.getElementById('name').value;
    const tgllahir = document.getElementById('tgllahir').value;
    const jeniskelamin = document.querySelector('input[name="jeniskelamin"]:checked').value;
    const pesan = document.getElementById('pesan').value;
    
    const date = new Date(tgllahir);
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

    const formDataContent = `
        <p><strong>Current Time:</strong> ${formattedTime}</p> <br>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${formattedDate}</p>
        <p><strong>Jenis Kelamin:</strong> ${jeniskelamin}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;

    document.getElementById('formData').innerHTML = formDataContent;

    this.reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.querySelector('a[href="#home"]');
    const ourLink = document.querySelector('a[href="#our"]');
    const messageLink = document.querySelector('a[href="#message"]');

    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();

            const homeSection = document.getElementById('home');

            if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    if (ourLink) {
        ourLink.addEventListener('click', function(e) {
            e.preventDefault();

            const ourSection = document.getElementById('our');

            if (ourSection) {
                ourSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    if (messageLink) {
        messageLinkLink.addEventListener('click', function(e) {
            e.preventDefault();

            const messageSection = document.getElementById('message');

            if (messageSection) {
                messageSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll ke bawah
        document.querySelector(".nav").style.top = "-60px"; // Sesuaikan dengan tinggi navbar Anda
    } else {
        // Scroll ke atas
        document.querySelector(".nav").style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);
