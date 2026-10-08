# Catálogo Cisco C9200L-24P-4G-E

Página de **producto del switch Cisco Catalyst 9200L C9200L-24P-4G-E** hecha con Astro y Tailwind CSS: una ficha estática con submenú de marca, navegación por cascada, especificaciones técnicas, precio y productos similares.

> **Prueba el proyecto en vivo:** [abrahamsil626.github.io/PruebaDemo_Astro_C9200L-24P-4G-E](https://abrahamsil626.github.io/PruebaDemo_Astro_C9200L-24P-4G-E/)

## Funcionalidad

* Interfaz íntegramente **en español**.
* Secciones: barra de navegación con contacto, submenú de marca, cascada de navegación, ficha del producto (sidebar derecho), productos similares y pie de página.
* Descripción, especificaciones y productos similares cargados desde archivos JSON (`src/config/`), sin tocar los componentes.
* Diseño adaptable (responsive) con menú móvil.
* Sitio 100 % estático, publicado en GitHub Pages.

## Stack

Astro 5 · Tailwind CSS v4 · GitHub Pages.

## Empezar

```bash
npm install
npm run dev        # http://localhost:4321/PruebaDemo_Astro_C9200L-24P-4G-E/
```

| Script | Qué hace |
|--------|----------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Sirve localmente el build |

> El sitio usa `base: '/PruebaDemo_Astro_C9200L-24P-4G-E'`, por eso la ruta local incluye ese prefijo. Las imágenes de `public/` se referencian con `import.meta.env.BASE_URL`.

## Estructura

```
public/
  icons/        Iconos del submenú de marca
src/
  components/   Navbar, Head, Footer y content/ (submenú, cascada, sidebar, similares)
  config/       descripcion_*.json y similares_*.json (contenido editable)
  js/           Scripts de navegación y pestañas
  layouts/      Layout base
  pages/        index y página del producto
  styles/       Estilos globales
.github/
  workflows/    Despliegue a GitHub Pages
```

## Sistema de diseño

Estilos con utilidades de Tailwind CSS v4 (integrado vía `@tailwindcss/vite`) y estilos globales en `src/styles/`.
