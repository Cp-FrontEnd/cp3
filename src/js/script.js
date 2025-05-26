document.addEventListener('DOMContentLoaded', function() {
    const mainBackground = document.getElementById('heroback');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            thumbnails.forEach(t => t.style.borderColor = 'transparent');
            this.style.borderColor = '#FFEBAA';
            // Pega o caminho da imagem grande que está armazenado no atributo 'data-full-image'
            const novofundo = this.getAttribute('data-full-image');
            mainBackground.style.backgroundImage = `url('${novofundo}')`;
        });
    });

    if (thumbnails.length > 0) {
        thumbnails[0].style.borderColor = '##FFEBAA';
    }
});