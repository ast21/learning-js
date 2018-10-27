export default function modal() {

    let more = document.querySelectorAll('.more, .description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.forEach((item) => {
        item.addEventListener('click', () => {
            overlay.style.display = 'block';
            item.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.forEach((item) => {
            item.classList.remove('more-splash');
        });
        document.body.style.overflow = '';
    });
}