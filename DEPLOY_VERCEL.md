# 🚀 Guía de Despliegue en Vercel — Royal Wash

El proyecto está 100% preparado y optimizado para ser desplegado en **Vercel** en menos de 2 minutos.

---

## Opción 1: Despliegue con GitHub / GitLab / Bitbucket (Recomendado)

1. **Sube este repositorio a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: Royal Wash landing page completa"
   git branch -M main
   git remote add origin <URL_DE_TU_REPOSITORIO_GITHUB>
   git push -u origin main
   ```

2. **Conecta en Vercel**:
   - Ingresa a [vercel.com](https://vercel.com/) e inicia sesión.
   - Presiona el botón **"Add New..."** → **"Project"**.
   - Selecciona tu repositorio `Royal_Wash`.
   - Vercel detectará automáticamente la configuración:
     - **Framework Preset:** `Vite`
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
   - Haz clic en **"Deploy"**.

3. **¡Listo!** Vercel te proporcionará un dominio `.vercel.app` con certificado SSL automático y CDN global ultra-rápida.

---

## Opción 2: Despliegue directo mediante Vercel CLI

Si tienes instalado Vercel CLI en tu terminal:

1. Ejecuta en la raíz del proyecto:
   ```bash
   npx vercel
   ```
2. Sigue las instrucciones interactivas:
   - *Set up and deploy?* → `y`
   - *Which scope?* → Tu cuenta de Vercel
   - *Link to existing project?* → `N`
   - *What's your project's name?* → `royal-wash`
   - *In which directory is your code located?* → `./`
   - *Want to modify settings?* → `N`
3. Para publicar directamente a producción:
   ```bash
   npx vercel --prod
   ```

---

## Archivos clave de configuración ya incluidos:

- `vercel.json`: Reglas de enrutamiento SPA (`rewrite` a `/index.html`) para evitar errores 404 al recargar.
- `index.html`: Open Graph tags, meta descripción SEO, favicon personalizado del logo Royal Wash y tipografías Outfit + Inter.
- `public/images/`: 13 imágenes en alta definición generadas con IA (hero, equipo, 9 servicios, equipamiento y logotipo).
- `package.json`: Scripts de desarrollo y compilación (`npm run build` verificado exitosamente).
