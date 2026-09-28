let currentLang = 'en';

function switchLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update all elements with data-en and data-zh attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        if (lang === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else {
            element.textContent = element.getAttribute('data-zh');
        }
    });
}

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.getElementById('navLinks').classList.remove('active');
        }
    });
});

// Update prices periodically (mock data)
function updatePrices() {
    const prices = {
        gold: 2050 + (Math.random() * 20 - 10),
        silver: 24.5 + (Math.random() * 0.5 - 0.25),
        platinum: 950 + (Math.random() * 10 - 5),
        palladium: 1200 + (Math.random() * 15 - 7.5)
    };
    
    document.querySelectorAll('.price-value')[0].textContent = '$' + prices.gold.toFixed(2);
    document.querySelectorAll('.price-value')[1].textContent = '$' + prices.silver.toFixed(2);
    document.querySelectorAll('.price-value')[2].textContent = '$' + prices.platinum.toFixed(2);
    document.querySelectorAll('.price-value')[3].textContent = '$' + prices.palladium.toFixed(2);
}

// Update prices every 5 seconds
setInterval(updatePrices, 5000);

// Product catalog: filter by category
document.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');
        document.querySelectorAll('.filter-btn').forEach(function (b) {
            b.classList.remove('active');
        });
        this.classList.add('active');
        document.querySelectorAll('.product-card').forEach(function (card) {
            var cat = card.getAttribute('data-category');
            if (filter === 'all' || cat === filter) {
                card.classList.remove('hidden-by-filter');
            } else {
                card.classList.add('hidden-by-filter');
            }
        });
    });
});

