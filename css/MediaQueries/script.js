document.addEventListener('DOMContentLoaded', function() {
    const heartIcons = document.querySelectorAll('.fa-heart');

    heartIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            this.classList.toggle('heart-red'); /* Aggiunge o rimuove la classe al click */
        });
    });
});





 // Seleziona tutti i dropdown
var dropdowns = document.querySelectorAll('.dropdown');

// Itera su ogni dropdown
dropdowns.forEach(function(dropdown) {
    // Aggiungi un listener per l'evento click a ciascun dropdown
    dropdown.addEventListener('click', function() {
        // Seleziona il dropdown-content all'interno del dropdown corrente
        var dropdownContent = dropdown.querySelector('.dropdown-content');
        // Verifica se il dropdown-content è già visibile
        var isVisible = dropdownContent.classList.contains('show');
        // Nascondi tutti i dropdown-content
        dropdowns.forEach(function(dropdown) {
            dropdown.querySelector('.dropdown-content').classList.remove('show');
        });
        // Se il dropdown-content è visibile, nascondilo; altrimenti, mostralo
        if (isVisible) {
            dropdownContent.classList.remove('show');
        } else {
            dropdownContent.classList.add('show');
        }
    });
});
