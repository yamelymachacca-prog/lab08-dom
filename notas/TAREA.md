# Tarea: Mi componente interactivo

## Componente elegido

Registro de notas de estudiantes.

## Version 1: solo DOM
En esta primera version cree la estructura basica del registro de notas. Use el DOM para modificar el titulo y agregar un estudiante a la lista desde JavaScript.

### Codigo principal

```js
const titulo = document.querySelector("#titulo");
const listaEstudiantes = document.querySelector("#listaEstudiantes");

titulo.textContent = "Registro de notas";

const estudiante = document.createElement("li");
estudiante.textContent = "Ana - Nota: 18";
estudiante.classList.add("estudiante");

listaEstudiantes.appendChild(estudiante);
```

**Que agregue:** Una lista de estudiantes y un estudiante de ejemplo llamado Ana con nota 18.

**Por que lo agregue:** Para comprobar que puedo crear y mostrar elementos desde JavaScript usando el DOM.

**Que cambio en la pagina:** El estudiante se muestra en la lista sin haber escrito el elemento directamente en el HTML.

## Version 2: con eventos
En esta segunda version agregue un formulario para registrar estudiantes y diferentes eventos para que la pagina pueda responder a las acciones del usuario.

### Codigo principal

```js
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombreIngresado = nombre.value.trim();
    const notaIngresada = Number(nota.value);

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

    const estudiante = document.createElement("li");
    estudiante.textContent =
        nombreIngresado + " - Nota: " + notaIngresada + " ";

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", () => {
        estudiante.remove();
    });

    estudiante.appendChild(botonEliminar);
    listaEstudiantes.appendChild(estudiante);
});

buscar.addEventListener("input", () => {
    textoBusqueda.textContent = "Buscando: " + buscar.value;
});
```

**Que agregue:** Agregue un formulario para ingresar el nombre y la nota del estudiante. Tambien agregue los eventos submit, click e input.

**Por que lo agregue:** Para que el usuario pueda interactuar con la pagina, registrar estudiantes, eliminar registros y escribir en el campo de busqueda.

**Que cambio en la pagina:** Ahora los estudiantes se pueden agregar desde el formulario y cada uno tiene un boton para eliminarlo. Tambien el texto de busqueda cambia mientras el usuario escribe.

**Validacion:** Se valida que el nombre no este vacio y que la nota se encuentre entre 0 y 20. Si algun dato es incorrecto, se muestra un mensaje visible en la pagina.

## Version 3: con clases y objetos

## Donde uso DOM, eventos y objetos

## Pruebas realizadas

## Por que disene asi mi clase