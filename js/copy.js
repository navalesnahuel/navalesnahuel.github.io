document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.copy-text').forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            const text = this.getAttribute('data-text');
            navigator.clipboard.writeText(text).then(() => {
                showNotification('Texto copiado al portapapeles');
            }).catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
        });
    });

    function showNotification(message) {
        let notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        // Forzar un reflujo para asegurarse de que la transición ocurra
        notification.offsetWidth; // Este comando obliga al navegador a "recalcular" estilos

        // Muestra la notificación con fade-in
        notification.classList.add('show');

        // Oculta la notificación con fade-out después de 3 segundos
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500); // Espera a que termine el fade-out antes de eliminar el elemento
        }, 2000);
    }
});
