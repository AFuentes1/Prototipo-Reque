document.addEventListener("DOMContentLoaded", function() {
    const reportarProblemaButton = document.getElementById('reportarProblemaButton');
    const modal = document.getElementById('reportarProblemaModal');
    const closeModal = document.querySelector('.modal .close');
    
    // Mostrar el modal al hacer clic en el botón "Reportar Problema"
    reportarProblemaButton.addEventListener('click', function() {
        modal.style.display = "block";
    });
    
    // Cerrar el modal al hacer clic en el botón de cerrar
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });
    
    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Manejar el envío del formulario
    document.getElementById('problemaForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí puedes agregar tu lógica para enviar el formulario por AJAX si lo prefieres
        // o simplemente dejar que el formulario se envíe normalmente.

        // Simulación de envío exitoso
        alert("El reporte ha sido enviado exitosamente. Número de seguimiento: 123456");
        modal.style.display = "none";
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const reportarProblemaButton = document.getElementById('reportarProblemaButton');
    const consultarEstadoButton = document.getElementById('consultarEstadoButton');
    const reportarProblemaModal = document.getElementById('reportarProblemaModal');
    const consultarEstadoModal = document.getElementById('consultarEstadoModal');
    const closeModalButtons = document.querySelectorAll('.modal .close');
    
    // Mostrar el modal al hacer clic en el botón "Reportar Problema"
    reportarProblemaButton.addEventListener('click', function() {
        reportarProblemaModal.style.display = "block";
    });

    // Mostrar el modal al hacer clic en el botón "Consultar Estado de un Reporte"
    consultarEstadoButton.addEventListener('click', function() {
        consultarEstadoModal.style.display = "block";
        cargarReportes();
    });

    // Cerrar los modales al hacer clic en el botón de cerrar
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.parentElement.parentElement.style.display = "none";
        });
    });
    
    // Cerrar los modales al hacer clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target == reportarProblemaModal) {
            reportarProblemaModal.style.display = "none";
        }
        if (event.target == consultarEstadoModal) {
            consultarEstadoModal.style.display = "none";
        }
    });

    // Manejar el envío del formulario
    document.getElementById('problemaForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí puedes agregar tu lógica para enviar el formulario por AJAX si lo prefieres
        // o simplemente dejar que el formulario se envíe normalmente.

        // Simulación de envío exitoso
        alert("El reporte ha sido enviado exitosamente. Número de seguimiento: 123456");
        reportarProblemaModal.style.display = "none";
    });

    // Función para cargar reportes del usuario
    function cargarReportes() {
        const reportesContainer = document.getElementById('reportesContainer');
        reportesContainer.innerHTML = ''; // Limpiar contenido previo

        // Aquí deberías obtener los reportes del servidor
        // Simulación de datos de reportes
        const reportes = [
            { id: 1, descripcion: "Fuga de agua en la calle", estado: "En proceso", notas: "Equipo en camino" },
            { id: 2, descripcion: "Poste de luz caído", estado: "Resuelto", notas: "Reparado el 01/06/2024" },
        ];

        reportes.forEach(reporte => {
            const reporteDiv = document.createElement('div');
            reporteDiv.classList.add('reporte');
            reporteDiv.innerHTML = `
                <h3>Reporte #${reporte.id}</h3>
                <p><strong>Descripción:</strong> ${reporte.descripcion}</p>
                <p><strong>Estado:</strong> ${reporte.estado}</p>
                <p><strong>Notas:</strong> ${reporte.notas}</p>
            `;
            reportesContainer.appendChild(reporteDiv);
        });
    }
});