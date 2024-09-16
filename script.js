document.addEventListener('DOMContentLoaded', function () {
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');
    const cards = document.querySelector('.card-content');
    const card = cards.querySelector('.card');
    const gap = 20;
    const cardWidth = card.offsetWidth;

    function handleScrollNext() {
        cards.scrollBy({
            top: 0,
            left: cardWidth + gap,
            behavior: 'smooth'
        });

        setTimeout(() => {
            const firstCard = cards.querySelector('.card');
            cards.appendChild(firstCard);
            cards.scrollLeft -= cardWidth + gap;
        }, 300);
    }

    function handleScrollPrev() {
        const lastCard = cards.lastElementChild;
        cards.insertBefore(lastCard, cards.firstElementChild);
        cards.scrollLeft += cardWidth + gap;

        setTimeout(() => {
            cards.scrollBy({
                top: 0,
                left: -(cardWidth + gap),
                behavior: 'smooth'
            });
        }, 100);
    }

    function autoSlide() {
        handleScrollNext();
    }

    const autoSlideInterval = setInterval(autoSlide, 3000);

    next.addEventListener('click', function() {
        clearInterval(autoSlideInterval);
        handleScrollNext();
    });

    prev.addEventListener('click', function() {
        clearInterval(autoSlideInterval);
        handleScrollPrev();
    });
});
