// Usuarios y contraseñas predefinidos
const users = [
    { email: "monica@correo.com", password: "123456" },
    { email: "roberto@correo.com", password: "abcdef" }
];

// Manejo del formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío del formulario

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Validación de credenciales
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Redirigir al usuario a la página "informacion.html"
        window.location.href = "../pages/informacion.html";
    } else {
        // Mostrar mensaje de error
        errorMessage.style.display = "block";
    }
});
