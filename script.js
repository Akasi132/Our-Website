document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const container = document.querySelector('.container');
    const images = document.querySelectorAll('.photo-gallery img');
    const titles = document.querySelectorAll('h1, h2');
    const note = document.querySelector('.note');
    const sparklesContainer = document.querySelector('.sparkles');
    
    // Add initial subtle movement to envelope
    envelope.style.transform = 'rotate(-2deg)';

    // Create sparkles with different sizes and colors
    function createSparkles() {
        sparklesContainer.style.display = 'block';
        for (let i = 0; i < 75; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            
            // Randomize sparkle sizes
            const size = Math.random() * 8 + 4;
            sparkle.style.width = size + 'px';
            sparkle.style.height = size + 'px';
            
            // Add subtle color variations
            const hue = Math.random() * 60 - 30; // vary between warm colors
            sparkle.style.filter = `drop-shadow(0 0 3px rgba(255,255,255,0.8)) hue-rotate(${hue}deg)`;
            
            sparklesContainer.appendChild(sparkle);
        }
    }

    // Handle envelope click
    envelope.addEventListener('click', function() {
        envelope.classList.add('open');
        createSparkles();
        
        // Show love message first with cute characters
        const loveMessage = document.querySelector('.love-message');
        const characters = document.querySelectorAll('.character');
        loveMessage.style.display = 'block';
        
        setTimeout(() => {
            loveMessage.classList.add('show');
            characters.forEach((char, index) => {
                // Add different animation delays for each character
                setTimeout(() => {
                    char.style.animation = 'bounce 2s infinite, wiggle 3s infinite';
                }, index * 200);
            });
        }, 100);

        // Hide message and show gallery after delay
        setTimeout(() => {
            loveMessage.style.display = 'none';
            envelope.style.display = 'none';
            container.classList.add('show');
            
            // Animate titles
            titles.forEach(title => title.classList.add('show'));

            // Animate all elements in the gallery
            const galleryItems = document.querySelectorAll('.photo-gallery > *');
            galleryItems.forEach((item, index) => {
                const delay = index * 200; // Sequence everything
                setTimeout(() => {
                    item.classList.add('show');
                }, delay);

                // Add hover effect for love quotes and notes
                if (item.classList.contains('love-quote') || item.classList.contains('memory-note')) {
                    item.addEventListener('mouseenter', () => {
                        item.style.transform = 'translateY(-5px) scale(1.02)';
                        item.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    });
                    item.addEventListener('mouseleave', () => {
                        item.style.transform = 'translateY(0) scale(1)';
                    });
                }
            });

            // Show note
            note.classList.add('show');

            // Remove sparkles after animation
            setTimeout(() => {
                sparklesContainer.style.display = 'none';
            }, 3000);
        }, 4000); // Increased delay to allow time for the love message
    });

    // Add hover effect to images
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
});