document.addEventListener('DOMContentLoaded', function() {
    const mainBackground = document.getElementById('heroback');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const backgroundTitle = document.getElementById('background-title');
    const backgroundText = document.getElementById('background-text');

   
    function updateContent(title, description) {
        
        backgroundTitle.classList.remove('visible');
        backgroundText.classList.remove('visible');

        
        setTimeout(() => {
            backgroundTitle.textContent = title;
            backgroundText.textContent = description;

           
            backgroundTitle.classList.add('visible');
            backgroundText.classList.add('visible');
        }, 300); 
    }

  
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            thumbnails.forEach(t => t.style.borderColor = 'transparent');

           
            this.style.borderColor = '#FFEBAA';

            
            const newBackgroundImage = this.getAttribute('data-full-image');
            const newTitle = this.getAttribute('data-title');
            const newDescription = this.getAttribute('data-description');

           
            mainBackground.style.backgroundImage = `url('${newBackgroundImage}')`;

           
            updateContent(newTitle, newDescription);
        });
    });

   
    if (thumbnails.length > 0) {
        const initialThumbnail = thumbnails[0];
        initialThumbnail.style.borderColor = '#FFEBAA';

        
        const initialTitle = initialThumbnail.getAttribute('data-title');
        const initialDescription = initialThumbnail.getAttribute('data-description');

        
        backgroundTitle.textContent = initialTitle;
        backgroundText.textContent = initialDescription;
        backgroundTitle.classList.add('visible');
        backgroundText.classList.add('visible');
    }
});