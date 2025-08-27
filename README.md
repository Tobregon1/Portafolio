# Portafolio — Tobias Obregón

Portafolio estático, profesional, listo para desplegar (GitHub Pages, Netlify, Vercel, etc.).

## Cómo editar
1. Abrí `index.html` y reemplazá:
   - `tu-linkedin` por tu handle real de LinkedIn.
   - `tu-usuario` de GitHub.
   - `tucorreo@ejemplo.com` por tu email.
   - Sección **Proyectos**: agregá tarjetas reales (demo/código).
2. Ajustá habilidades/experiencia según tu perfil.
3. (Opcional) agregá tu CV en `assets/CV-Tobias-Obregon.pdf` y actualizá el link.

## Despliegue rápido

### Opción A — GitHub Pages
1. Creá un repo: `portfolio` (o el nombre que prefieras).
2. Subí todos los archivos de este folder a la rama `main`.
3. En **Settings → Pages**: Source = `Deploy from a branch`, Branch = `main` (root).
4. Tu sitio quedará en `https://tu-usuario.github.io/portfolio/`.

### Opción B — Netlify
1. Entrá a Netlify y conectá el repo.
2. Build command: _vacío_ (sitio estático).
3. Publish directory: la raíz del proyecto.
4. El formulario de contacto funciona con `data-netlify="true"`.

### Opción C — Vercel
1. Importá el repo en Vercel.
2. Framework: **Other**.
3. Output: la raíz del proyecto.

## Accesibilidad y performance
- Semántica HTML5 + navegación por teclado.
- `skip-link` para salto al contenido.
- Diseño responsive y ligero (sin frameworks).

## Estructura
```
.
├── index.html
├── styles.css
├── script.js
└── assets/
```

¡Éxitos! 🚀
