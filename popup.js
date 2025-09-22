// Handle logo popup, smooth scroll, carousel, modal (from your original code)
document.addEventListener('DOMContentLoaded', () => {
    // Logo popup
    const logoPopupOverlay = document.getElementById('logoPopupOverlay');
    if (logoPopupOverlay) {
        setTimeout(() => {
            logoPopupOverlay.classList.add('hidden');
        }, 2000);
    }

    // Smooth scrolling for navbar
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Carousel
    const carousel = document.getElementById('mainFrameCarousel');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    if (prevButton && nextButton && carouselItems.length > 0) {
        nextButton.addEventListener('click', showNextSlide);
        prevButton.addEventListener('click', showPrevSlide);
        setInterval(showNextSlide, 5000);
    }

    // Login modal
    const signupBtn = document.querySelector('.signup-btn');
    const loginModal = document.getElementById('loginModal');
    const closeModalBtn = document.getElementById('closeModal');

    if (signupBtn && loginModal && closeModalBtn) {
        signupBtn.addEventListener('click', function (e) {
            e.preventDefault();
            loginModal.style.display = 'block';
        });

        closeModalBtn.addEventListener('click', function () {
            loginModal.style.display = 'none';
        });

        window.addEventListener('click', function (e) {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }

    // View Courses popup window with tabs
    document.querySelectorAll('.view-course').forEach(button => {
        button.addEventListener('click', () => {
            const popup = window.open('', '', 'width=800,height=600');
            popup.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Course Details</title>
                    <link rel="stylesheet" href="popup.css">
                </head>
                <body>
                    <h2>Course Details</h2>
                    <div class="tabs">
                        <div class="tab active" onclick="showTab(0)">Overview</div>
                        <div class="tab" onclick="showTab(1)">Syllabus</div>
                        <div class="tab" onclick="showTab(2)">Reviews</div>
                    </div>
                    <div class="tab-content active">
                        <p>This course helps you improve your skills and achieve your goals.</p>
                    </div>
                    <div class="tab-content">
                        <p>1. Introduction<br>2. Core Concepts<br>3. Final Project</p>
                    </div>
                    <div class="tab-content">
                        <p>⭐️⭐️⭐️⭐️☆<br>“Very helpful and practical.”</p>
                    </div>

                    <script>
                        function showTab(index) {
                            const tabs = document.querySelectorAll('.tab');
                            const contents = document.querySelectorAll('.tab-content');
                            tabs.forEach((tab, i) => {
                                tab.classList.toggle('active', i === index);
                                contents[i].classList.toggle('active', i === index);
                            });
                        }
                    </script>
                </body>
                </html>
            `);
        });
    });
});
