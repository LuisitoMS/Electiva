// Obtener los datos del LocalStorage
var datosJSON = localStorage.getItem("datosFormulario");

// Convertir los datos a objeto
var datosFormulario = JSON.parse(datosJSON);

// Mostrar los datos en la página de confirmación
var datosRecibidosDiv = document.getElementById("datosRecibidos");
datosRecibidosDiv.innerHTML = "<p><strong>Nombre:</strong> " + datosFormulario.nombre + "</p>" +
                              "<p><strong>Correo Electrónico:</strong> " + datosFormulario.email + "</p>" +
                              "<p><strong>Mensaje:</strong> " + datosFormulario.mensaje + "</p>";
