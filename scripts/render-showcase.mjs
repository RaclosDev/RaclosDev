import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const require = createRequire(
  process.env.PLAYWRIGHT_PACKAGE_JSON ??
    new URL("../package.json", import.meta.url),
);
const { chromium } = require("@playwright/test");
const root = new URL("../", import.meta.url);
const projects = [
  {
    id: "ascension",
    name: "ASCENSION",
    stack: "JAVA 21 + REACT 19",
    accent: "#8bc7d8",
    title: "Entrenar.<br>Medir.<br><em>Seguir avanzando.</em>",
    description:
      "Entrenos, nutrición y un espacio de entrenador para acompañar el progreso de cada alumno.",
    tags: [
      "Spring Boot",
      "PostgreSQL",
      "Passkeys",
      "Gemini",
      "IndexedDB",
      "PWA",
    ],
    screens: ["ascension-workout", "ascension-coach", "ascension-nutrition"],
  },
  {
    id: "loopdeck",
    name: "LOOPDECK",
    stack: "JAVA 17 + REACT 19",
    accent: "#cebbf0",
    title: "Lo estudias.<br>Lo repasas.<br><em>Lo recuerdas.</em>",
    description:
      "Flashcards, apuntes y tests. Repetición espaciada FSRS-5 y un tutor con IA para cada mazo.",
    tags: [
      "Spring Boot",
      "PostgreSQL",
      "FSRS-5",
      "Gemini",
      "TypeScript",
      "PWA",
    ],
    screens: ["loopdeck-decks", "loopdeck-study", "loopdeck-hub"],
  },
  {
    id: "porrapp",
    name: "PORRAPP",
    stack: "JAVA 21 + REACT 19",
    accent: "#45c9c3",
    title: "Tu liga.<br>Tus reglas.<br><em>Cada jornada cuenta.</em>",
    description:
      "Predicciones deportivas y competiciones propias. Jornadas, clasificaciones en directo y marcadores para tus partidas.",
    tags: [
      "Spring Boot",
      "PostgreSQL",
      "WebSocket",
      "TypeScript",
      "PWA",
      "Docker",
    ],
    screens: ["porrapp-matchday", "porrapp-ranking", "porrapp-scoreboard"],
  },
  {
    id: "portfolio-tracker",
    name: "PORTFOLIO TRACKER",
    stack: "TYPESCRIPT + FASTIFY",
    accent: "#8bd2b9",
    title: "Cada operación.<br>Cada posición.<br><em>Todo en su sitio.</em>",
    description:
      "Listas de vigilancia, niveles de compra y cartera calculada desde tus operaciones. Una herramienta de uso privado.",
    tags: ["React 19", "PostgreSQL", "PGlite", "FIFO", "Zod", "Web Push"],
    screens: [
      "portfolio-watchlist",
      "portfolio-summary",
      "portfolio-operations",
    ],
  },
];
const imageData = async (name) =>
  `data:image/png;base64,${(await readFile(new URL(`projects/screens/${name}.png`, root))).toString("base64")}`;
const fonts =
  '<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">';
const style = `<style>*{box-sizing:border-box}html,body{margin:0;width:1600px;height:800px;overflow:hidden}body{font-family:Inter,sans-serif;background:#101827;color:#f2ecd9}.card{height:100%;position:relative;background:radial-gradient(ellipse at 90% 20%,#19344880,transparent 60%)}.copy{position:absolute;left:76px;top:105px;width:650px}.eyebrow{font-size:18px;font-weight:800;letter-spacing:3px;color:var(--accent);margin:0 0 32px}h1{font-family:Anton,sans-serif;font-size:64px;font-weight:400;line-height:1.17;letter-spacing:.3px;text-transform:uppercase;margin:0 0 28px}em{font-style:normal;color:var(--accent)}.description{max-width:610px;font-size:25px;line-height:1.6;color:#d2d5dc;margin:0 0 30px}.tags{display:flex;gap:10px;flex-wrap:wrap;max-width:610px}.tags span{padding:10px 17px;border:1px solid #697180;border-radius:28px;background:#ffffff08;font-size:17px;font-weight:600}.phones{position:absolute;left:770px;top:68px;width:775px;height:680px}.phone{position:absolute;top:52px;width:289px;aspect-ratio:430/932;border:9px solid #090d13;border-radius:38px;overflow:hidden;background:#101827;box-shadow:0 25px 35px #0006,0 0 0 2px #303643}.phone img{display:block;width:100%;height:100%;object-fit:cover;object-position:top}.phone:nth-child(1){left:0;transform:rotate(-8deg);z-index:1}.phone:nth-child(2){left:245px;top:0;z-index:3}.phone:nth-child(3){left:490px;transform:rotate(8deg);z-index:2}.foot{position:absolute;left:78px;bottom:35px;font-size:13px;letter-spacing:1px;color:#9fa8b8}.banner{background:#f2ecd9;color:#101827}.banner .copy{top:100px;width:1000px}.banner h1{font-size:100px;line-height:1.08}.banner .eyebrow{color:#0b5f74}.banner .description{font-size:29px;max-width:850px;color:#42525b}.banner .tags{max-width:900px}.banner .tags span{border-color:#b4b2aa;background:none}.banner .stamp{position:absolute;right:80px;top:130px;width:260px;border:3px solid #101827;transform:rotate(7deg);padding:28px;font-family:Anton;font-size:39px;line-height:1.3;box-shadow:9px 9px 0 #101827}.banner .stamp strong{display:block;font-size:100px;font-weight:400;color:#0b5f74}.banner .foot{color:#42525b}.banner em{color:#0b5f74}</style>`;
const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1600, height: 800 },
    deviceScaleFactor: 1.6,
  });
  async function capture(html, path) {
    await page.setContent(
      `<!doctype html><html lang="es"><head><meta charset="utf-8">${fonts}${style}</head><body>${html}</body></html>`,
    );
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map((img) => img.decode()));
    });
    if (
      !(await page.evaluate(
        () =>
          document.fonts.check("64px Anton") &&
          document.fonts.check("25px Inter"),
      ))
    )
      throw new Error("Fonts not loaded");
    const overflow = await page
      .locator(".copy")
      .evaluate((el) => el.getBoundingClientRect().bottom > 750);
    if (overflow) throw new Error(`Copy overflows ${path}`);
    await page.screenshot({
      path: fileURLToPath(new URL(path, root)),
      type: "jpeg",
      quality: 92,
    });
    console.log(`Rendered ${path}`);
  }
  for (const p of projects) {
    const images = await Promise.all(p.screens.map(imageData));
    await capture(
      `<main class="card" style="--accent:${p.accent}"><div class="copy"><p class="eyebrow">${p.name} · ${p.stack}</p><h1>${p.title}</h1><p class="description">${p.description}</p><div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div></div><div class="phones">${images.map((src) => `<div class="phone"><img src="${src}" alt=""></div>`).join("")}</div><p class="foot">RACLOSDEV · INTERFAZ REAL / DATOS DE DEMOSTRACIÓN</p></main>`,
      `projects/${p.id}.jpg`,
    );
  }
  await capture(
    `<main class="card banner"><div class="copy"><p class="eyebrow">CARLOS SANZ TOMERO · SOFTWARE ENGINEER</p><h1>BACKEND CON CRITERIO.<br><em>PRODUCTO COMPLETO.</em></h1><p class="description">Java, Spring Boot y TypeScript.<br>De las reglas de negocio a la interfaz y el despliegue.</p><div class="tags"><span>Ascension</span><span>LoopDeck</span><span>PorrApp</span><span>Portfolio Tracker</span></div></div><div class="stamp"><strong>4</strong>PROYECTOS.<br>CÓDIGO<br>PÚBLICO.</div><p class="foot">RACLOSDEV.GITHUB.IO · JAVA / SPRING / REACT / TYPESCRIPT</p></main>`,
    "banner.jpg",
  );
} finally {
  await browser.close();
}
