document.addEventListener('DOMContentLoaded', () => {
    // Logo Pop-up on Page Load
    const logoPopupOverlay = document.getElementById('logoPopupOverlay');
    if (logoPopupOverlay) {
        setTimeout(() => {
            logoPopupOverlay.classList.add('hidden');
        }, 2000); // Hide after 2 seconds
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            // Add active class to the clicked link
            this.classList.add('active');

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight, // Adjust for fixed navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Carousel Functionality for Main Frame
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

        // Auto-play carousel
        setInterval(showNextSlide, 5000); // Change slide every 5 seconds
    }
    // Handle Sign Up / Log In Modal Popup
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

        // Close modal if user clicks outside modal content
        window.addEventListener('click', function (e) {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }
});