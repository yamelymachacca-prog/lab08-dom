// Tarea - Version 2: con eventos

const formulario = document.querySelector("#formEstudiante");
const nombre = document.querySelector("#nombre");
const nota = document.querySelector("#nota");
const mensaje = document.querySelector("#mensaje");
const listaEstudiantes = document.querySelector("#listaEstudiantes");
const buscar = document.querySelector("#buscar");
const textoBusqueda = document.querySelector("#textoBusqueda");

// EVENTO 1: submit
formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const nombreIngresado = nombre.value.trim();
    const notaIngresada = Number(nota.value);

    // Validamos los datos
    if (nombreIngresado === "") {
        mensaje.textContent = "Debe ingresar el nombre del estudiante.";
        mensaje.classList.add("error");
        return;
    }

    if (nota.value === "" || notaIngresada < 0 || notaIngresada > 20) {
        mensaje.textContent = "La nota debe estar entre 0 y 20.";
        mensaje.classList.add("error");
        return;
    }

    mensaje.textContent = "Estudiante registrado correctamente.";
    mensaje.classList.remove("error");

    // Creamos el elemento mediante el DOM
    const estudiante = document.createElement("li");
    estudiante.classList.add("estudiante");

    estudiante.textContent =
        nombreIngresado + " - Nota: " + notaIngresada + " ";

    // Creamos un boton para eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    // EVENTO 2: click
    botonEliminar.addEventListener("click", () => {
        estudiante.remove();
    });

    estudiante.appendChild(botonEliminar);
    listaEstudiantes.appendChild(estudiante);

    nombre.value = "";
    nota.value = "";
});

// EVENTO 3: input
buscar.addEventListener("input", () => {

    textoBusqueda.textContent = "Buscando: " + buscar.value;

});