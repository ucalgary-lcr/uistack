class CSlider {
    /**
     * Set up initial references and state
     */
    constructor(el) {
        this.slider = el;
        this.track = el.querySelector('.c-slider__track');
        this.dots = el.querySelector('.c-slider__dots');
        this.cards = Array.from(this.track.querySelectorAll('.c-slider__card'));
        this.loopMode = el.classList.contains('c-slider--loop');

        this.currentIndex = 0;
        this.isDragging = false;
        this.startPos = 0;

        this.init();
    }

    /**
     * Initialize measurements and UI components
     */
    init() {
        const style = window.getComputedStyle(this.track);
        this.gap = parseFloat(style.gap) || 0;
        // Adjust this to match your site's container padding/alignment
        this.alignmentOffset = 16; 

        this.setupEvents();
        this.createPagination();
        this.update();
    }

    /**
     * Attach interaction listeners for navigation, drag, and resize
     */
    setupEvents() {
        // Arrow Button Navigation
        this.slider.querySelector('.c-slider__btn--prev')?.addEventListener('click', () => this.slide(-1));
        this.slider.querySelector('.c-slider__btn--next')?.addEventListener('click', () => this.slide(1));

        // Interaction Start (Mouse/Touch)
        const start = (e) => {
            this.isDragging = true;
            this.startPos = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            this.track.style.transition = 'none';
        };

        // Interaction Move (Calculation for drag resistance)
        const move = (e) => {
            if (!this.isDragging) return;
            const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            const walk = x - this.startPos;
            
            // Calculate current position based on cumulative widths for accurate dragging
            let currentOffset = 0;
            for (let i = 0; i < this.currentIndex; i++) {
                currentOffset += this.cards[i].getBoundingClientRect().width + this.gap;
            }
            
            const translate = (-currentOffset + this.alignmentOffset) + walk;
            this.track.style.transform = `translateX(${translate}px)`;
        };

        // Interaction End (Determine if slide should trigger)
        const end = (e) => {
            if (!this.isDragging) return;
            this.isDragging = false;
            const x = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX;
            const movedBy = x - this.startPos;

            this.track.style.transition = 'transform 0.3s ease';
            // Threshold of 50px to trigger a move to next/prev
            if (Math.abs(movedBy) > 50) {
                this.slide(movedBy > 0 ? -1 : 1);
            } else {
                this.update();
            }
        };

        this.track.addEventListener('mousedown', start);
        this.track.addEventListener('touchstart', start, { passive: true });
        window.addEventListener('mousemove', move);
        window.addEventListener('touchmove', move, { passive: true });
        window.addEventListener('mouseup', end);
        window.addEventListener('touchend', end);

        // Re-calculate measurements on window resize
        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(() => this.init(), 150);
        });
    }

    /**
     * Build the pagination dot indicators
     */
    createPagination() {
        if (!this.dots) return;
        this.dots.innerHTML = this.cards.map((_, i) =>
            `<button class="c-slider__dot" aria-label="Page ${i + 1}" data-index="${i}"></button>`
        ).join('');

        this.dots.onclick = (e) => {
            const dot = e.target.closest('.c-slider__dot');
            if (dot) this.goToCard(parseInt(dot.dataset.index));
        };
    }

    /**
     * Handle direction logic (looping vs. clamped)
     */
    slide(dir) {
        let next = this.currentIndex + dir;
        if (this.loopMode) {
            next = (next + this.cards.length) % this.cards.length;
        } else {
            next = Math.max(0, Math.min(next, this.cards.length - 1));
        }
        this.goToCard(next);
    }

    /**
     * Set the active index and trigger UI update
     */
    goToCard(index) {
        this.currentIndex = index;
        this.update();
    }

    /**
     * Apply physical transformation and update UI states
     */
    update() {
        // Calculate cumulative width of all cards prior to active index
        let cumulativeOffset = 0;
        for (let i = 0; i < this.currentIndex; i++) {
            cumulativeOffset += this.cards[i].getBoundingClientRect().width + this.gap;
        }
        
        // Final position adjusted for container alignment
        const finalTranslate = -cumulativeOffset + this.alignmentOffset;
        this.track.style.transform = `translateX(${finalTranslate}px)`;

        // Sync pagination dots
        this.dots?.querySelectorAll('.c-slider__dot').forEach((dot, i) => {
            dot.classList.toggle('c-slider__dot--active', i === this.currentIndex);
        });

        // Toggle disabled states for buttons (only if not in loop mode)
        if (!this.loopMode) {
            const prevBtn = this.slider.querySelector('.c-slider__btn--prev');
            const nextBtn = this.slider.querySelector('.c-slider__btn--next');
            if (prevBtn) prevBtn.disabled = this.currentIndex === 0;
            if (nextBtn) nextBtn.disabled = this.currentIndex === this.cards.length - 1;
        }
    }
}

/**
 * Initialize sliders when they enter the viewport
 */
const sliderObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (!entry.target.instance) {
                entry.target.instance = new CSlider(entry.target);
            }
        }
    });
}, { threshold: 0.1 });

/**
 * Trigger slider setup on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.c-slider').forEach(el => new CSlider(el));
});