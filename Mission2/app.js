const image = document.getElementById('image');
image.addEventListener('click', toggleImage);
function toggleImage() {
    if (image.currentSrc === 'https://picsum.photos/id/237/200/300') {
        image.src = 'https://picsum.photos/seed/picsum/200/300';
        image.alt = 'Seed';
    } else {
        image.src = 'https://picsum.photos/id/237/200/300';
        image.alt = '237';
    }
}
