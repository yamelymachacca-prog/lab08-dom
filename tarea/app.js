// Tarea - Version 3: con clases y objetos

// Clase propia Estudiante
class Estudiante {

    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    // Metodo 1
    descripcion() {
        return this.nombre + " - Nota: " + this.nota;
    }

    // Metodo 2
    estado() {
        if (this.nota >= 13) {
            return "Aprobado";
        } else {
            return "Desaprobado";
        }
    }
}


// Seleccionamos elementos del DOM
const formulario = document.querySelector("#formEstudiante");
const nombre = document.querySelector("#nombre");
const nota = document.querySelector("#nota");
const mensaje = document.querySelector("#mensaje");
const listaEstudiantes = document.querySelector("#listaEstudiantes");
const buscar = document.querySelector("#buscar");
const textoBusqueda = document.querySelector("#textoBusqueda");


// Arreglo donde guardaremos los objetos
const estudiantes = [];


// EVENTO 1: submit
formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const nombreIngresado = nombre.value.trim();
    const notaIngresada = Number(nota.value);

    // Validacion del nombre
    if (nombreIngresado === "") {
        mensaje.textContent = "Debe ingresar el nombre del estudiante.";
        mensaje.classList.add("error");
        return;
    }

    // Validacion de la nota
    if (nota.value === "" || notaIngresada < 0 || notaIngresada > 20) {
        mensaje.textContent = "La nota debe estar entre 0 y 20.";
        mensaje.classList.add("error");
        return;
    }

    mensaje.textContent = "Estudiante registrado correctamente.";
    mensaje.classList.remove("error");


    // Creamos un OBJETO de la clase Estudiante
    const nuevoEstudiante = new Estudiante(
        nombreIngresado,
        notaIngresada
    );

    // Guardamos el objeto
    estudiantes.push(nuevoEstudiante);


    // Creamos un elemento con el DOM
    const elemento = document.createElement("li");
    elemento.classList.add("estudiante");

    elemento.textContent =
        nuevoEstudiante.descripcion() +
        " - " +
        nuevoEstudiante.estado() +
        " ";


    // Creamos el boton eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";


    // EVENTO 2: click
    botonEliminar.addEventListener("click", () => {

        elemento.remove();

        const posicion = estudiantes.indexOf(nuevoEstudiante);

        if (posicion !== -1) {
            estudiantes.splice(posicion, 1);
        }

    });


    elemento.appendChild(botonEliminar);
    listaEstudiantes.appendChild(elemento);


    // Limpiamos los campos
    nombre.value = "";
    nota.value = "";
});


// EVENTO 3: input
buscar.addEventListener("input", () => {

    textoBusqueda.textContent =
        "Buscando: " + buscar.value;

});