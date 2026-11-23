# Composiciones del perfil

Las portadas combinan capturas reales con tipografía y marcos HTML/CSS: tres móviles por proyecto y, en Portfolio Tracker, dos ventanas de escritorio (`layout: "desktop"`). No recrean la interfaz mediante IA. `projects/screens` contiene las imágenes de origen; los repositorios de cada aplicación incluyen sus scripts de captura y los datos de demostración.

Con Node.js y Chromium de Playwright instalados:

```bash
npm install --no-save --package-lock=false @playwright/test
npx playwright install chromium
node scripts/render-showcase.mjs
```

Si Playwright está instalado en otro proyecto, `PLAYWRIGHT_PACKAGE_JSON` puede apuntar a su `package.json`. El render requiere acceso a Google Fonts y comprueba que Anton e Inter estén cargadas antes de generar JPEG de 2560 × 1280. Los textos y pantallas de cada composición se definen en el script.

Para actualizar: regenera primero las capturas desde cada aplicación, sustituye las fuentes de `projects/screens`, ejecuta el render y copia cada portada a `docs/screenshots/hero.jpg` de su repositorio. Revisa el resultado visual y las afirmaciones del texto antes de publicarlo. Todas las capturas usan datos ficticios: las de Portfolio Tracker y PorrApp salen del modo demo de cada aplicación, y las de Ascension y LoopDeck, de una API simulada en el propio script de captura.
