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

## Version 3: con clases y objetos

## Donde uso DOM, eventos y objetos

## Pruebas realizadas

## Por que disene asi mi clase