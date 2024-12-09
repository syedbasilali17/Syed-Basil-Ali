document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.image-slider');
    
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        const dots = slider.querySelectorAll('.slider-dot');
        let currentIndex = 0;

        // Function to show specific image
        function showImage(index) {
            images.forEach(img => img.style.opacity = 0);
            dots.forEach(dot => dot.classList.remove('active'));
            
            images[index].style.opacity = 1;
            dots[index].classList.add('active');
        }

        // Add click events to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                showImage(currentIndex);
            });
        });

        // Auto-advance slides every 4 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 4000);
    });

    // Add click event to Buy Now buttons
    const buyButtons = document.querySelectorAll('.buy-now-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add your cart functionality here
            alert('Item added to cart!');
        });
    });
});