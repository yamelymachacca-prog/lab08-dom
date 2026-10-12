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
En esta tercera version agregue la clase Estudiante para organizar mejor los datos de cada estudiante. Ahora cada estudiante se crea como un objeto que guarda su nombre y nota, y puede indicar su descripcion y si esta aprobado o desaprobado.

### Codigo principal

```js
class Estudiante {
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    descripcion() {
        return this.nombre + " - Nota: " + this.nota;
    }

    estado() {
        if (this.nota >= 13) {
            return "Aprobado";
        } else {
            return "Desaprobado";
        }
    }
}

const estudiantes = [];

const nuevoEstudiante = new Estudiante(
    nombreIngresado,
    notaIngresada
);

estudiantes.push(nuevoEstudiante);

const elemento = document.createElement("li");

elemento.textContent =
    nuevoEstudiante.descripcion() +
    " - " +
    nuevoEstudiante.estado();
```

**Que agregue:** Agregue la clase Estudiante con los atributos nombre y nota, y los metodos descripcion() y estado().

**Por que lo agregue:** Para organizar los datos de cada estudiante en objetos y reutilizar la misma estructura cada vez que se registra uno nuevo.

**Que cambio en la pagina:** Ahora, al registrar un estudiante, se crea un objeto de la clase Estudiante y se muestra tambien si esta aprobado o desaprobado.

## Donde uso DOM, eventos y objetos
| Parte | Linea de mi codigo | Para que sirve |
|-------|--------------------|----------------|
| DOM | document.querySelector("#formEstudiante") | Selecciona el formulario de la pagina |
| DOM | document.createElement("li") | Crea un nuevo elemento para mostrar al estudiante |
| Evento submit | formulario.addEventListener("submit", ...) | Permite registrar un estudiante al enviar el formulario |
| Evento click | botonEliminar.addEventListener("click", ...) | Permite eliminar un estudiante de la lista |
| Evento input | buscar.addEventListener("input", ...) | Detecta lo que el usuario escribe en el buscador |
| Objeto | new Estudiante(nombreIngresado, notaIngresada) | Crea un objeto con el nombre y la nota del estudiante |
## Pruebas realizadas
| Accion | Resultado esperado | Resultado obtenido | Cumple |
|--------|--------------------|--------------------|--------|
| Registrar Maria con nota 18 | Mostrar Maria, nota 18 y Aprobado | Se mostro Maria - Nota: 18 - Aprobado | Si |
| Registrar Carlos con nota 10 | Mostrar Carlos, nota 10 y Desaprobado | Se mostro Carlos - Nota: 10 - Desaprobado | Si |
| Registrar una nota 25 | Mostrar mensaje de error | Se mostro que la nota debe estar entre 0 y 20 | Si |
| Registrar sin nombre | Mostrar mensaje de error | Se mostro que debe ingresar el nombre | Si |
| Presionar Eliminar | Eliminar al estudiante seleccionado | El estudiante desaparecio de la lista | Si |
| Escribir en Buscar | Mostrar el texto que se esta escribiendo | El texto de busqueda cambio mientras escribia | Si |
## Por que disene asi mi clase
Disene la clase Estudiante con los atributos nombre y nota porque son los datos principales que necesito guardar de cada estudiante. Agregue el metodo descripcion() para mostrar sus datos de forma ordenada y el metodo estado() para saber si esta aprobado o desaprobado segun su nota. De esta manera puedo crear varios estudiantes usando la misma estructura sin repetir todo el codigo.