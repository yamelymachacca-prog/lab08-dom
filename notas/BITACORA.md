# Bitacora de JavaScript interactivo
 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)
 
## Ejercicio 2: Seleccionar y modificar el DOM
| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde la consola | El titulo cambio a "Hola desde la consola" | No |
| textContent desde app.js | El titulo cambio a "Hola TECSUP" | Si |
| style.color | El titulo cambio a color azul | Si |
| classList.add | El texto "Este texto va a cambiar" obtuvo un fondo amarillo | Si |
| createElement + appendChild | Se agrego "JavaScript" a la lista de HTML y CSS | Si |
 
## Ejercicio 3: Evento click
 | Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Hacer un clic en el boton | 1 |
| dblclick | Hacer doble clic en el boton | 1 |
| mouseover | Pasar el cursor sobre el boton | 1 |

evento.type mostro en la consola el tipo de evento que se realizo, por ejemplo click, dblclick o mouseover.
evento.target mostro el elemento donde ocurrio el evento, en este caso el boton "Sumar 1".
## Ejercicio 4: Eventos input y submit
 | Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | El saludo fue cambiando y mostro el nombre que escribi | No |
| Enviar sin preventDefault | El mensaje "Enviado" aparecio por un momento y luego desaparecio | Si |
| Enviar con preventDefault, correo sin @ | Aparecio el mensaje "Correo no valido: falta @" en rojo | No |
| Enviar con preventDefault, correo con @ | Aparecio "Enviado" junto con el correo que escribi | No |
## Ejercicio 5: Clases y objetos
| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
|--------|--------|--------|---------------|--------------------|
| laptop | Laptop | 3500 | Laptop - S/ 3500.00 | 2625.00 |
| mouse | Mouse | 80 | Mouse - S/ 80.00 | 60.00 |
| teclado | Teclado | 120 | Teclado - S/ 120.00 | 90.00 |
| monitor | Monitor | 680 | Monitor - S/ 680.00 | 510.00 |

Usar la clase permite crear productos con la misma estructura, indicando solo sus datos como el nombre y el precio.
Además, podemos mostrarlos en la página desde JavaScript sin tener que agregar cada producto directamente en el HTML.
 
## Ejercicio 6: DOM, eventos y objetos juntos
| Prueba | Total que muestra la pagina | Correcto (Si/No) |
|--------|-----------------------------|------------------|
| Cuaderno 12.50 | S/ 12.50 | Si |
| + Lapicero 3.20 | S/ 15.70 | Si |
| + Mochila 89.90 | S/ 105.60 | Si |
| Sin Number() | Los valores se concatenan como texto y el total es incorrecto | No |

| Pieza | Linea de tu codigo donde aparece | Para que sirve |
|-------|----------------------------------|----------------|
| DOM | document.querySelector("#carrito") | Selecciona la lista del carrito para poder modificarla |
| Evento | formProducto.addEventListener("submit", (evento) => { | Detecta cuando se envia el formulario para agregar un producto |
| Objeto | const producto = new Producto(prodNombre.value, precio); | Crea un nuevo objeto Producto con el nombre y precio ingresados |