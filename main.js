window.addEventListener('scroll', function () {
    var navbar = document.getElementById('nav-hidden');
    var scrollPosition = window.scrollY;

    // Calculate the maximum scroll position
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the opacity based on the scroll position
    var opacity = Math.min(1, Math.max(0, scrollPosition / maxScroll));

    // Update the navbar opacity

    // Toggle navbar display based on opacity threshold
    if (opacity >= 0.2) {

        navbar.style.opacity = 1;
        navbar.style.display = 'block'; // Show navbar
    }
    else {
        navbar.style.display = 'none'; // Hide navbar
    }
});

const mailBtn = document.getElementById("send-btn");

mailBtn.addEventListener("click",(e)=>{
    e.preventDefault();
})

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    function goToSlide(index) {
        if (index < 0 || index >= carouselItems.length) return;
        currentIndex = index;
        const offset = -currentIndex * carouselItems[0].offsetWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    prevBtn.addEventListener("click", () => {
        goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
        goToSlide(currentIndex + 1);
    });
});
