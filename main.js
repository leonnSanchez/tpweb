document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencia a los botones de control de scroll
    var prevButton = document.querySelector('.prev');
    var nextButton = document.querySelector('.next');

    // Obtener referencia al contenedor de imágenes
    var imageContainer = document.querySelector('.popular-content');

    // Event listener para el botón de anterior
    prevButton.addEventListener('click', function() {
        // Obtener la posición actual del scroll
        var currentPosition = imageContainer.scrollLeft;

        // Calcular la posición de destino para el scroll suave
        var targetPosition = currentPosition - 350; // Cambiar 350 según el ancho de la imagen

        // Scroll suave hacia la posición de destino
        imageContainer.scrollTo({
            left: targetPosition,
            behavior: 'smooth' // Hace que el scroll sea suave
        });
    });

    // Event listener para el botón de siguiente
    nextButton.addEventListener('click', function() {
        // Obtener la posición actual del scroll
        var currentPosition = imageContainer.scrollLeft;

        // Calcular la posición de destino para el scroll suave
        var targetPosition = currentPosition + 350; // Cambiar 350 según el ancho de la imagen

        // Scroll suave hacia la posición de destino
        imageContainer.scrollTo({
            left: targetPosition,
            behavior: 'smooth' // Hace que el scroll sea suave
        });
    });
});



