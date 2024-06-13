document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("Usuario").value;
    const contraseña = document.getElementById("Contraseña").value;
    const fileInput = document.getElementById("fileInput").files[0];

    if (!fileInput) {
        alert("Por favor, seleccione el archivo de usuarios.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const data = event.target.result;
        console.log("Contenido de Usuarios.txt:\n", data);

        const users = data.split('\n').filter(line => line.trim() !== '');
        let validUser = false;

        for (let i = 0; i < users.length; i++) {
            const [storedUser, storedPass] = users[i].split(':');
            if (storedUser.trim() === usuario && storedPass.trim() === contraseña) {
                validUser = true;
                break;
            }
        }

        if (validUser) {
            window.location.href = '../Principal/Prototipo.html'; 
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
    };

    reader.readAsText(fileInput);
});
