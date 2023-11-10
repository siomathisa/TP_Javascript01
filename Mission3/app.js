const image = document.getElementById('image');
const changerButton = document.getElementById('changer');
changerButton.addEventListener('click', toggleImage);
function toggleImage() {
    const currentSrc = image.src;
    image.src = currentSrc === 'https://picsum.photos/id/237/200/300' ? 'https://picsum.photos/seed/picsum/200/300' : 'https://picsum.photos/id/237/200/300';
    image.alt = currentSrc === 'https://picsum.photos/id/237/200/300' ? 'Seed' : '237';
}
