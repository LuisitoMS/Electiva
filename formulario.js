document.getElementById("formularioContacto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional
    
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    
    // Crear objeto con los datos del formulario
    var datosFormulario = {
      nombre: nombre,
      email: email,
      mensaje: mensaje
    };
    
    // Convertir el objeto a JSON
    var datosJSON = JSON.stringify(datosFormulario);
    
    // Almacenar los datos en el LocalStorage
    localStorage.setItem("datosFormulario", datosJSON);
    
    // Redirigir a la página de confirmación
    window.location.href = "confirmacion.html";
  });
  