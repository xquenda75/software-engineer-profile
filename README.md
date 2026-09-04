# Jorge Alfonso López Alcántara — CV Web / Portafolio

Versión web profesional de mi currículum, orientada a puestos de **Full Stack Developer / Backend Engineer**. Construida con **React + Vite** y publicada en **GitHub Pages**.

> El propio sitio es una demostración de las habilidades que presenta: React, TypeScript, arquitectura moderna y despliegue con CI/CD.

## Stack

- React 18
- Vite 5
- **TypeScript** (TSX) con tipado estricto
- CSS puro, diseño responsive (one-page)

## Scripts

```bash
npm run dev        # servidor de desarrollo
npm run typecheck  # verificación de tipos con tsc
npm run build      # typecheck + build de producción
npm run preview    # previsualizar el build
npm run deploy     # publicar en GitHub Pages (gh-pages)
```

## Estructura / Secciones

Sitio de una sola página (one-page) navegable mediante una **barra de navegación fija** (sticky navbar) con scroll suave. Todas las secciones son de ancho completo, con fondos alternos y tarjetas modernas:

- **Hero** — Pantalla completa con imagen de fondo de estación de trabajo (laptop), overlay oscuro, nombre, posicionamiento y botones de acción
- **Sobre mí** — Perfil profesional con tarjeta de métrica (20+ años) y descripción orientada a Senior/Cloud/Backend
- **Experiencia** — Dock Tech (destacada, con grid de proyectos y responsabilidades) seguida de la trayectoria desde el año 2000 en tarjetas
- **Tecnologías** — Grid de tarjetas por categoría (Frontend, Backend, APIs, BD, Contenedores, Infraestructura, Observabilidad, CI/CD, Arquitectura)
- **AWS** — Sección con fondo oscuro y grid de servicios (IAM, Lambda, SQS, EventBridge, RDS, EC2, EKS, S3, API Gateway)
- **Formación** — Tarjetas académicas (Ingeniería en Computación, UNAM)
- **Idiomas** — Tarjetas con el nivel
- **Contacto** — Sección con fondo oscuro y tarjetas de contacto (LinkedIn, GitHub, email, teléfono)

## Imagen de fondo

El hero usa una imagen libre de ejemplo desde **Unsplash** (fotografía de estación de trabajo con laptop). La URL se configura en `src/styles.css` (`--hero-url`). Si prefieres usar una imagen local, puedes:

1. Colocar tu imagen en la carpeta `public/` (por ejemplo `public/hero.jpg`).
2. Cambiar `--hero-url` en `src/styles.css` por `url('/hero.jpg')`.

## Desarrollo local

```bash
npm install
npm run dev
```

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub con el mismo nombre que la carpeta (por ejemplo, `software-engineer-profile`).
2. Verifica (o ajusta) el valor de `base` dentro de `vite.config.ts` para que coincida con el nombre del repositorio:

   ```ts
   base: '/nombre-de-tu-repositorio/',
   ```

3. Sube el proyecto al repositorio:

   ```bash
   git init
   git add .
   git commit -m "CV web"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/nombre-de-tu-repositorio.git
   git push -u origin main
   ```

4. Publica con `gh-pages`:

   ```bash
   npm run deploy
   ```

5. En GitHub, ve a **Settings → Pages** y, en *Build and deployment* → *Source*, selecciona **Deploy from a branch** y la rama **`gh-pages`** desde `/ (root)`.

La página quedará disponible en:

```
https://TU_USUARIO.github.io/nombre-de-tu-repositorio/
```

## Despliegue automático (GitHub Actions)

Se incluye un flujo de trabajo en `.github/workflows/deploy.yml` que construye y publica el sitio automáticamente en cada `push` a la rama `main`. Para usarlo:

1. En GitHub, ve a **Settings → Actions → General** y, en *Workflow permissions*, selecciona **Read and write permissions**.
2. Configura también **Settings → Pages** con la rama **`gh-pages`** como fuente.
