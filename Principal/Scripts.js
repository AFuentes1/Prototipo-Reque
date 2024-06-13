document.addEventListener("DOMContentLoaded", function() {
    const reportarProblemaButton = document.getElementById('reportarProblemaButton');
    const consultarEstadoButton = document.getElementById('consultarEstadoButton');
    const consultarMapaIncidenciasButton = document.getElementById('consultarMapaIncidencias');

    const reportarProblemaModal = document.getElementById('reportarProblemaModal');
    const consultarEstadoModal = document.getElementById('consultarEstadoModal');
    const mapaIncidenciasModal = document.getElementById('mapaIncidencias');

    const closeModalButtons = document.querySelectorAll('.modal .close');

    // Modal de reportar problema, botón "Reportar Problema"
    reportarProblemaButton.addEventListener('click', function() {
        reportarProblemaModal.style.display = "block";
    });

    // Modal de consultar estado, botón "Consultar Estado de un Reporte"
    consultarEstadoButton.addEventListener('click', function() {
        consultarEstadoModal.style.display = "block";
        cargarReportes(); // Función para cargar los reportes del usuario
    });

    // Modal del mapa de incidencias, botón "Mapa de Incidencias"
    consultarMapaIncidenciasButton.addEventListener('click', function() {
        mapaIncidenciasModal.style.display = "block";
        initMap(); // Función para inicializar el mapa de incidencias
    });

    // Cerrar todos los modales
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.parentElement.parentElement.style.display = "none";
        });
    });

    // Cerrar los modales al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target == reportarProblemaModal) {
            reportarProblemaModal.style.display = "none";
        }
        if (event.target == consultarEstadoModal) {
            consultarEstadoModal.style.display = "none";
        }
        if (event.target == mapaIncidenciasModal) {
            mapaIncidenciasModal.style.display = "none";
        }
    });

    // Función para cargar reportes del usuario (simulación)
    function cargarReportes() {
        const reportesContainer = document.getElementById('reportesContainer');
        reportesContainer.innerHTML = ''; // Limpiar contenido previo

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

    // Función Mapa
    function initMap() {
        const map = L.map('map').setView([9.9334147, -84.0846116], 8); // Coordenadas de ejemplo

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Simulación de datos de problemas/incidencias
        const problemas = [
            { lat: 9.9442299, lng: -84.1506225, descripcion: "Problema 1", estado: "Pendiente" },
            { lat: 9.8553244, lng: -83.9099147, descripcion: "Problema 2", estado: "Resuelto" },
            // Ubicación de los incidentes
        ];

        problemas.forEach(problema => {
            L.marker([problema.lat, problema.lng]).addTo(map)
                .bindPopup(`<b>${problema.descripcion}</b><br>${problema.estado}`);
        });
    }
});
