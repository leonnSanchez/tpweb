document.addEventListener('DOMContentLoaded', function () {
    console.log("hola chupapijas");

    var input_nombre = document.getElementById("nombre");
    var input_email = document.getElementById("email");
    var input_artist = document.getElementById("artist");
    var input_submit = document.getElementById("boton-enviar");

    console.log(input_nombre);
    console.log(input_email);
    console.log(input_artist);
    console.log(input_submit);

    input_submit.addEventListener("click", enviarFormulario);

    function enviarFormulario(event) {
        event.preventDefault();
        console.log("Hemos hecho click!");

        var valor_nombre = input_nombre.value.trim();
        var valor_email = input_email.value.trim();
        var valor_artist = input_artist.value.trim();

        // Verificar si algún campo está vacío
        if (valor_nombre === '' || valor_email === '' || valor_artist === '') {
            alert('Por favor, completa todos los campos del formulario.');
            return; // Detener la ejecución de la función si algún campo está vacío
        }

        console.log(valor_nombre);
        console.log(valor_email);
        console.log(valor_artist);

        var placeholder_nombre = document.getElementById("nombre-placeholder");
        var placeholder_email = document.getElementById("email-placeholder");
        var placeholder_artist = document.getElementById("artist-placeholder");

        placeholder_nombre.innerHTML = valor_nombre;
        placeholder_email.innerHTML = valor_email;
        placeholder_artist.innerHTML = valor_artist;

        var elemento_feedback = document.getElementById("feedback");
        elemento_feedback.classList.remove("oculto");

        var elemento_formulario = document.getElementById("formulario");
        elemento_formulario.classList.add("oculto");



        document.getElementById("feedback").classList.add("feedback");
    }

    // Resto de tu código aquí...

    // Event listener para botones de control de scroll
    var prevButton = document.querySelector('.prev');
    var nextButton = document.querySelector('.next');
    var imageContainer = document.querySelector('.popular-content');

    // Event listener para el botón de anterior
    prevButton.addEventListener('click', function () {
        var currentPosition = imageContainer.scrollLeft;
        var targetPosition = currentPosition - 350; // Cambiar 350 según el ancho de la imagen
        imageContainer.scrollTo({
            left: targetPosition,
            behavior: 'smooth'
        });
    });

    // Event listener para el botón de siguiente
    nextButton.addEventListener('click', function () {
        var currentPosition = imageContainer.scrollLeft;
        var targetPosition = currentPosition + 350; // Cambiar 350 según el ancho de la imagen
        imageContainer.scrollTo({
            left: targetPosition,
            behavior: 'smooth'
        });
    });
});



