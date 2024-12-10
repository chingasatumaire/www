function handleLogin(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de usuario y contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar lógica para validar el usuario y la contraseña
    if (username === "admin" && password === "admin") { // Ejemplo de validación simple
        loadPage('home'); // Carga la página de inicio después de iniciar sesión
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
}

function loadPage(page) {
    let content = '';

    switch(page) {
        case 'home':
            content = `
                <div>
                    <h1>Bienvenido a la Página de Inicio</h1>
                    <p>Este es el contenido dinámico de la página de inicio.</p>
                </div>
            `;
            break;
        case 'about':
            content = `
                <div>
                    <h1>Sobre Nosotros</h1>
                    <p>Información sobre la empresa.</p>
                </div>
            `;
            break