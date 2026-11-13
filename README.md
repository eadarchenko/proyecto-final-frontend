# Hemp House Building · Frontend

Interfaz de mi proyecto final de Desarrollo de Aplicaciones Web: una web sobre construcción de viviendas ecológicas, con páginas informativas, catálogo y blog. Desarrollada con Angular y conectada mediante servicios HTTP al [backend en Laravel](https://github.com/eadarchenko/proyecto-final-backend).

> Proyecto académico. La estructura de archivos y la integración con la API necesitan revisión antes de ejecutar la aplicación como demo. La autenticación y el carrito son implementaciones de aprendizaje, no soluciones listas para producción.

## Stack

- Angular 13.1 y TypeScript 4.5.
- Angular Material 13.3.
- Bootstrap 5.1.
- RxJS 7.4 y servicios HTTP de Angular.
- Angular CLI 13.

Versiones tomadas de las dependencias declaradas en `package.json`.

## Qué incluye el código

- Páginas de inicio, servicios y presentación del proyecto.
- Vistas de catálogo, detalle de producto y blog.
- Carrito con estado en memoria.
- Formularios de acceso y registro.
- Vistas de administración de productos y artículos.

No se incluye una pasarela de pago ni se presenta el flujo de pedidos como terminado.

## Estado de ejecución

`angular.json` y los archivos TypeScript esperan una estructura bajo `src/`, pero las fuentes están publicadas en la raíz del repositorio. Por ello, clonar e instalar dependencias no basta para garantizar que la aplicación arranque.

Antes de instalar o ejecutar:

1. Recuperar la estructura original de Angular. Revisar `app/`, `assets/`, `environments/`, `main.ts`, `index.html`, estilos, polyfills y archivos auxiliares frente a las rutas de `angular.json` y los `tsconfig`.
2. Revisar imports y resolver cualquier diferencia de rutas tras restaurar `src/`.
3. Unificar la configuración de la API. Actualmente hay referencias tanto al backend Laravel en `127.0.0.1:8000` como a una fuente local de usuarios en el puerto 3000.
4. Alinear las respuestas y operaciones con el backend.

### Comandos del proyecto

Después de corregir la estructura y configurar los servicios, los scripts definidos son:

```bash
npm install
npm start
```

```bash
npm run build
npm test
```

Utiliza un entorno Node compatible con las dependencias de este proyecto Angular 13. Estos comandos no se han validado de principio a fin en la versión publicada. No hay una demo desplegada verificada.

## Mejoras pendientes

- Sustituir el acceso basado en comparaciones locales y marcadores de `localStorage` por un flujo real con la API y controles de autorización en el servidor.
- Unificar la forma de leer las respuestas HTTP: algunos componentes esperan un array y otros `data`.
- Resolver las operaciones de actualización que el frontend solicita pero el backend todavía no declara.
- Revisar cantidades, total y envío del formulario del carrito. El carrito no conserva datos al recargar.
- Añadir pruebas de los flujos y capturas reales después de recuperar una versión ejecutable.

## Repositorio relacionado

[Backend Laravel](https://github.com/eadarchenko/proyecto-final-backend).

## English summary

Angular frontend for my final Web Application Development project: an eco-home website with information pages, a product catalogue, blog and in-memory cart. It uses Angular Material, Bootstrap and HTTP services. The source layout must be restored before running it, and the API integration, authentication and cart flow still need work. No working deployment or end-to-end setup is claimed.
