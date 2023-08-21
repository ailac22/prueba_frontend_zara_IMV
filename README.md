# Prueba técnica para Zara.com de Iván Moreno Valdés

Este repositorio contiene mi solución a una prueba técnica para la empresa Zara. Consiste en un prototipo de aplicación sencilla de podcasts. Para su desarrollo se ha usado:

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [React Router 6](https://reactrouter.com/en/main)
- [Tanstack Query](https://tanstack.com/query/latest)
- [TailwindCSS](https://tailwindcss.com/)
- [fast-xml-parser](https://www.npmjs.com/package/fast-xml-parser)
- [Material UI](https://mui.com/)
- [react-html-parser](https://www.npmjs.com/package/react-html-parser)


# Uso

Se puede ver la web directamente en el [deploy de Netlify](https://chipper-bunny-025dbd.netlify.app/), o bien descargarse el repo y hacer en local

```bash
npm i --legacy-peer-deps
npm run dev
```

y luego ir con el navegador a la url tipo localhost:{puerto} indicada

Este desarrollo se ha realizado y probado con node v20.5.0

# Notas

- Lo más importante que se me ha quedado en el tintero ha sido el indicador de carga de datos en la barra principal. Tanto por tiempo como por estructura no lo he podido hacer
- La duración de cada episodio sale de diferentes maneras en cada podcast, pero eso es por inconsistencia de los datos y dado que no es muy importante no le he dedicado tiempo
- Hay distintos campos en un epidsodio individual que podrian ser la descripción. He puesto el campo 'descripción', pero a veces es muy largo y no me ha dado tiempo a hacer elisión
- Otros detalles de estilo son mejorables: barra de audio con mejor estilo, pequeño incremento de tamaño de la barra lateral al entrar en episodio, tabla más similar a la del pdf, imágenes en la vista principal que sobresalgan del contenedor, etc...

