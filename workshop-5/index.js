const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
    card.addEventListener('click', function(){
        const flippedCard = document.querySelector('.is-active');
        card.classList.add('is-active');
        checkPreviousCard(flippedCard, card);
    });
});

function checkPreviousCard (flippedCard, card) {
    if(flippedCard != null) {
        const previousValue = flippedCard.querySelector('.front').textContent;
        const currentValue = card.querySelector('.front').textContent;

        if(previousValue == currentValue) {
            flippedCard.classList.add('blocked');
            card.classList.add('blocked');
        }

        setTimeout(() => {
            flippedCard.classList.remove('is-active');
            card.classList.remove('is-active');
        }, 750);
    }
}