const changerBtns = document.querySelectorAll('.changerBtn');
const images = {
    'i1': document.getElementById('i1'),
    'i2': document.getElementById('i2')
};
changerBtns.forEach(btn => {
    btn.addEventListener('click', onClick);
});
function onClick(e) {
    e.preventDefault();
    const imageId = e.target.getAttribute('data-image');
    const currentSrc = images[imageId].src;
    images[imageId].src = currentSrc === 'https://picsum.photos/id/237/200/300' ? 'https://picsum.photos/seed/picsum/200/300' : 'https://picsum.photos/id/237/200/300';
    images[imageId].alt = currentSrc === 'https://picsum.photos/id/237/200/300' ? 'Seed' : '237';
}
