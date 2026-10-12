// Tarea - Version 1: solo DOM

const titulo = document.querySelector("#titulo");
const listaEstudiantes = document.querySelector("#listaEstudiantes");

// Modificamos el titulo usando el DOM
titulo.textContent = "Registro de notas";

// Creamos un estudiante desde JavaScript
const estudiante = document.createElement("li");

estudiante.textContent = "Ana - Nota: 18";
estudiante.classList.add("estudiante");

// Agregamos el elemento a la pagina
listaEstudiantes.appendChild(estudiante);