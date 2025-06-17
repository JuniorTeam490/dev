
document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('click', () => {
        const desc = service.querySelector('.description');
        desc.style.display = desc.style.display === 'block' ? 'none' : 'block';
    });
});
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
function openImage(img) {
    const src = img.getAttribute("src");
    const win = window.open();
    win.document.write('<img src="' + src + '" style="width:100%;">');
}
