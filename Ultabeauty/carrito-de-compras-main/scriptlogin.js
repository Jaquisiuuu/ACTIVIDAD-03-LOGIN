const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// AQUI COMIENZA EL SCRIPT DE LAS VALIDACIONES
// Usuarios predeterminados
const users = [
    { email: "20635@utsc.com", password: "contraseña123" },
    { email: "user2@example.com", password: "password456" },
    { email: "user3@example.com", password: "password789" }
  ];
  
  // Obtén los elementos del DOM
  const signInForm = document.querySelector(".sign-in form");
  const emailInput = signInForm.querySelector("input[type='text']");
  const passwordInput = signInForm.querySelector("input[type='password']");
  const signInButton = signInForm.querySelector("button");
  const errorMessage = document.createElement("p");
  const verificationDiv = document.getElementById("verification");
  const codeInput = document.getElementById("codeInput");
  const verifyButton = document.getElementById("verifyButton");
  let verificationCode = "";
  
  // Agrega un contenedor para mostrar errores debajo del botón de iniciar sesión
  signInForm.appendChild(errorMessage);
  errorMessage.style.color = "red";
  
  // Validación de email en tiempo real
  emailInput.addEventListener("keyup", () => {
    if (!validateEmail(emailInput.value)) {
      errorMessage.textContent = "Email inválido.";
    } else {
      errorMessage.textContent = "";
    }
  });
  
  // Validación de contraseña en tiempo real
  passwordInput.addEventListener("keyup", () => {
    if (passwordInput.value.length < 6) {
      errorMessage.textContent = "La contraseña debe tener al menos 6 caracteres.";
    } else {
      errorMessage.textContent = "";
    }
  });
  
  // Evento de click para el botón de inicio de sesión
  signInButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
  
    if (!validateEmail(email)) {
      errorMessage.textContent = "Por favor, ingresa un correo electrónico válido.";
      return;
    }
  
    if (password.length < 6) {
      errorMessage.textContent = "La contraseña debe tener al menos 6 caracteres.";
      return;
    }
  
    // Verificación de usuario
    const user = users.find(user => user.email === email && user.password === password);
  
    if (user) {
      // Simula el envío de un código de verificación
      verificationCode = generateVerificationCode();
      errorMessage.textContent = `Inicio de sesión exitoso. Se ha enviado un código de verificación a ${email}.`;
      errorMessage.style.color = "green";
  
      // Muestra el campo para ingresar el código de verificación
      verificationDiv.style.display = "block";
    } else {
      errorMessage.textContent = "Correo o contraseña incorrectos.";
      errorMessage.style.color = "red";
    }
  });
  
  // Agrega esta línea para definir un código de verificación fijo
const fixedVerificationCode = "cristiano777";

// Evento de click para el botón de verificación
verifyButton.addEventListener("click", (e) => {
  e.preventDefault();
  const enteredCode = codeInput.value;

  // Cambiamos la condición para comparar con el código fijo
  if (enteredCode === fixedVerificationCode) {
    errorMessage.textContent = "Verificación exitosa. ¡Bienvenido!";
    errorMessage.style.color = "green";
    // Aquí puedes redirigir al usuario o mostrarle el contenido correspondiente
  } else {
    errorMessage.textContent = "Código de verificación incorrecto.";
    errorMessage.style.color = "red";
  }
});

  
  // Función para generar un código de verificación de 6 dígitos
  function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Código de 6 dígitos
  }
  
  // Función de validación de email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

 
    document.getElementById("verifyButton").addEventListener("click", function() {
        // Obtén el valor ingresado en el campo de código
        const codeInput = document.getElementById("codeInput").value;

        // Verifica si el código es correcto
        if (codeInput === "cristiano777") {
            // Redirige a index.html si el código es correcto
            window.location.href = "index.html"; 
        } else {
            // Muestra un mensaje de error si el código es incorrecto
            document.getElementById("error-message").innerText = "Código de verificación incorrecto. Intenta nuevamente.";
        }
    });


  