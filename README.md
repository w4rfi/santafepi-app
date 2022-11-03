# **SANTADEPI-APP**

Proyecto E-commerce en desarrollo, en el cual se van aplicando las habilidades adquiridas en el curso de ReactJs de CoderHouse. Santadepi-app lo que busca es que los clientes de esta empresa puedan elegir el combo de servicios y obtener un turno para asistir al local. 


## Instalación

Usar el package manager [npm](https://docs.npmjs.com/) para instalar santadepi-app.

Luego de descargar el repositorio

```bash
npm install 
```

## Uso

En la terminal para iniciar la app

```bash
npm start
```

Cuando se inicie la app en el NavBar se puede elegir una categoría.

Dentro de las categorías se puede seleccionar un servicio e ingresar al detalle.

En el detalle se puede seleccionar y agregar al carrito, el stock disponible es 1 (uno) por cada servicio, ya que, tener mas stock iría encontra de el modelo de negocio.

Una vez elegidos los servicios, se puede visualizar el carrito para verificar.

Si se esta de acuerdo con lo visualizado en el carrito se puede finalizar compra de servicios.

En ese instante se genera una orden, la cual se aloja en FireBase con una fecha, los datos ingresados y los servicios seleccionados. 


# Observaciones:

* Aún no se refleja el número de orden al finalizar la compra
* Falta optimizar código
* El código aún se encuentra con styles in line y se está trabajando para mejorar eso, ya que Material UI tiene muchas prioridades en los styles como para usar directamente css.


# **TECNOLOGÍAS**

* Material UI
* FireBase de Google
