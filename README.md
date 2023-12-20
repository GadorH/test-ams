# Aplicación de compra de dispositivos móviles

## 📜🖋️ Resumen

Este repositorio alberga una prueba técnica de front-end que se focaliza en el desarrollo de una mini-aplicación destinada a la compra de dispositivos móviles. La aplicación brinda la capacidad de explorar un catálogo de dispositivos móviles, visualizar detalles específicos de cada producto, seleccionar opciones de color y almacenamiento, y agregarlos al carrito de compra. Además, incorpora una práctica barra de búsqueda que permite a los usuarios filtrar productos por modelo y marca.

### Características clave

**Vista Principal (PLP - Product List Page)** La vista principal de la aplicación exhibe un listado de productos obtenidos a través de la API, ofreciendo la posibilidad de filtrar los productos en tiempo real mediante una barra de búsqueda. Además, facilita la navegación a la vista de detalles al seleccionar un producto y presenta una disposición adaptativa que permite mostrar hasta cuatro elementos por fila.

**Detalles del Producto (PDP - Product Details Page)** La página de detalles del producto proporciona una experiencia detallada e inmersiva. Dividida en dos columnas, la primera columna presenta una visualización completa del producto, mostrando su imagen principal. La segunda columna ofrece información exhaustiva, incluyendo detalles clave como marca, modelo, precio, especificaciones técnicas como CPU, RAM, sistema operativo, resolución de pantalla, batería, cámaras, dimensiones y peso.
Asimismo, se incorpora un enlace intuitivo que permite al usuario regresar fácilmente a la lista completa de productos. Los usuarios tienen la flexibilidad de explorar a fondo cada aspecto del producto y tomar decisiones informadas antes de proceder a acciones como agregar el artículo al carrito. Este diseño intuitivo y detallado busca mejorar la experiencia del usuario, brindándole toda la información necesaria para tomar decisiones de compra fundamentadas.

## 💻 Tecnología

1.**React:** La interfaz de usuario de la aplicación se desarrolla con React, un potente y flexible framework de JavaScript que facilita la creación de componentes reutilizables y la gestión eficiente del estado.

2.**Vite:** Vite se utiliza como el bundler (empaquetador) y el servidor de desarrollo, permitiendo una carga rápida y una experiencia de desarrollo ágil.

3.**React Router:**: La navegación entre las vistas de la aplicación se gestiona de manera eficiente mediante React Router, facilitando la transición fluida entre la Vista Principal (PLP) y la Vista de Detalles del Producto (PDP).

4.**CSS y Estilos Adaptables:** La presentación atractiva y adaptable de la aplicación se logra mediante estilos CSS, garantizando una experiencia de usuario consistente en diferentes dispositivos y resoluciones de pantalla.

5.**API de Datos Externa:** Se integra la API externa (https://itx-frontend-test.onrender.com/) para obtener y gestionar los datos de productos de manera dinámica, permitiendo una experiencia de compra actualizada y en tiempo real.

7.**Cypress:**:Se ha implementado Cypress para llevar a cabo pruebas de extremo a extremo(e2e). Cypress proporciona una plataforma poderosa y fácil de usar para garantizar la calidad y la estabilidad de la aplicación mediante pruebas automatizadas.

_Nota: se ha utilizado Node v18.16.0 durante el desarrollo_

## 🚀🔥 Puesta a punto y ejecución

1.**Descarga del repositorio:** Primero, clona el repositorio en tu máquina local. Abre la terminal y ejecuta el siguiente comando `git clone https://github.com/GadorH/test-ams.git`.

2.**Instalación de Dependencias:** Una vez hayas descargado el repositorio, deberás instalar las dependencias con el siguiente comando `npm install`.

3.**Inicio en modo desarrollo:** Para iniciar la aplicación en modo desarrollo, deberás introducir el comando `npm start`.

4.**Compilación para modo producción:** Para la compilación en modo producción, deberás introducir el comando `npm run build`.

5.**Comprobación de Código(Lint):** Para ello, debes introducir el comando `npm run lint`.

6.**Configuración variables de entorno:** Dentro del repositorio encontrarás un archivo `.env.local.example` que deberás renombrar a `.env.local`.

7.**Ejecución de Pruebas:** puedes llevar a cabo las pruebas en el navegador con el comando `cy:open` o en el navegador headless `cy:run:headless`.

## Metodología 📈

Para la realización de este proyecto se ha mantenido una metodología de trabajo utilizando la herramienta de control de verisones Git, para gestionar las actualizaciones y los commits realizados durante el desarrollo del proyecto. Esto permitió mantener un seguimiento preciso de los cambios.

Una de las prácticas clave fue el uso de Conventional Commits, (https://www.conventionalcommits.org/en/v1.0.0/). Esta convención me ayudó a mantener un historial de commits consistente y bien estructurado, facilitando la comprensión de los cambios realizados en el proyecto.
