# Proyecto

- Nombre del proyecto: **Staffing Follower**
- POD: **Postres** (#3)

# Diseño

Ver un mock interactivo del diseño en [Marvel App](https://marvelapp.com/35f0ai0/screen/47999475)

# Desarrollo

## Tecnologías (Frontend)

- HTML5
- CSS3
- Javascript
- Webpack
- Babel
- React JS
- React Redux
- React Router

## Requisitos

### Node JS

Para que la aplicación pueda funcionar en un _entorno de desarrollo_, es necesario instalar Node JS.

- Ir al [sitio oficial](https://nodejs.org/en/) de Node JS.
- Descargar e instalar la versión 10.x.x o superior

## Repositorio (Frontend)

Para comenzar a trabajar es necesario clonar el proyecto desde Globant Corp, para hacer esto siga las siguientes instrucciones.

- Abrir una terminal/consola y ejecutar `git clone https://github.corp.globant.com/lucas-romero/staffing-follower-pod3-frontend.git`
- Ubicarse en la carpeta recien clonada `cd staffing-follower-pod3-frontend`

## Entorno de desarrollo

Siga las siguientes instrucciones para montar el proyecto de frontend en un servidor local y verlo en el navegador.

- Abrir una terminal en la raiz del proyecto
- Cambiar a la rama `develop`
- Corroborar que tenga los últimos cambios y branches mediante `git fetch` y luego `git pull origin develop`
- Instalar dependencias necesarias para correr el proyecto: `npm install`
- Correr el proyecto en el navegador: `npm start`
- Abrir navegador en el puerto [localhost:8080](http://localhost:8080)

### Servidor backend

El servidor backend se levanta en la IP y puerto especificado en el archivo `src/fetchURL.js`

## Entorno de producción

- Abrir una terminal en la raiz del proyecto
- Cambiar a la rama `master`
- Corroborar que tenga los últimos cambios y branches mediante `git fetch` y luego `git pull origin master`
- Instalar dependencias necesarias para correr el proyecto: `npm install`
- Construir el proyecto con el comando `npm run build`
- Copiar el contenido de la carpeta `dist/` y alojarlo en el servidor
