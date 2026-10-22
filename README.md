# La Estantería - Catálogo de videojuegos

Proyecto hecho en React para una actividad de la universidad. Es un catálogo de videojuegos donde se pueden buscar juegos por nombre, filtrarlos por género, marcar favoritos y ver la información de cada juego.

El diseño está pensado como el estante de una tienda de videojuegos, donde cada juego es una caja y el color del lomo cambia según el género.

## Funcionalidades

- Ver el catálogo con 12 videojuegos
- Buscar un juego por su nombre
- Filtrar por género (Acción, Aventura, Deportes y Estrategia)
- La búsqueda y el filtro de género funcionan al mismo tiempo
- Marcar y desmarcar juegos como favoritos
- Contador de favoritos
- Ver solo los juegos favoritos
- Ver el detalle de un juego en una ventana (modal)
- Mensaje cuando no hay resultados, con un botón para limpiar los filtros

## Tecnologías

- React
- Vite
- JavaScript
- CSS

## Cómo ejecutarlo

Primero hay que tener instalado Node.js (versión LTS).

1. Clonar el repositorio:

```bash
git clone https://github.com/camilovisbal/catalogo-videojuegos.git
```

2. Entrar a la carpeta:

```bash
cd catalogo-videojuegos
```

3. Instalar las dependencias:

```bash
npm install
```

4. Ejecutar el proyecto:

```bash
npm run dev
```

5. Abrir en el navegador la dirección que aparece en la terminal, normalmente `http://localhost:5173`

## Estructura del proyecto

```
src/
├── components/   componentes de la página (tarjeta, lista, buscador, filtros, modal)
├── data/         lista de videojuegos
├── utils/        función para filtrar los juegos
├── App.jsx       componente principal, aquí está el estado
└── main.jsx      archivo de entrada
public/images/    portadas de los juegos
```

## Cómo funciona

Todo el estado de la aplicación está en `App.jsx` usando `useState`: el texto de búsqueda, el género elegido, los favoritos, si se están viendo solo los favoritos y el juego seleccionado para el detalle. Lo puse ahí porque varios componentes necesitan esos datos, y desde App.jsx se los paso por props.

Los demás componentes no tienen estado propio. Solo muestran lo que reciben y cuando el usuario hace algo (escribir, hacer clic) avisan a App con una función.

Para mostrar los juegos uso `map()` y para filtrarlos uso `filter()`. La función de filtrado está en `utils/filterGames.js` para que App.jsx no quede tan cargado.

Los favoritos se guardan como una lista de ids de los juegos y no como los juegos completos.

## Limitaciones

- Los favoritos se borran al recargar la página porque solo se guardan con `useState`.
- Los juegos están escritos en un archivo, no vienen de una API.

## Imágenes

Las portadas de los juegos pertenecen a sus respectivos estudios. Se usan solo con fines académicos.

## Autor

Camilo Andrés Visbal Beltrán
Ingeniería de Sistemas - Universidad de la Costa (CUC)
