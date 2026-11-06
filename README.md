<div align="center">
  <a href="https://raclosdev.github.io"><img src="banner.jpg" alt="Hola, soy Carlos. Backend Developer, Java y Spring Boot. Tres ideas, tres aplicaciones: Ascension, LoopDeck y PorrApp." width="100%" /></a>

  <br><br>

  [![Portfolio](https://img.shields.io/badge/Portfolio-raclosdev.github.io-f3ead8?style=for-the-badge&logo=googlechrome&logoColor=0f1729&labelColor=0f1729)](https://raclosdev.github.io)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Carlos_Sanz_Tomero-f3ead8?style=for-the-badge&logo=linkedin&logoColor=0A66C2&labelColor=0f1729)](https://www.linkedin.com/in/carlos-sanz-tomero/)
  [![Email](https://img.shields.io/badge/Email-raclosdev@gmail.com-f3ead8?style=for-the-badge&logo=gmail&logoColor=EA4335&labelColor=0f1729)](mailto:raclosdev@gmail.com)
</div>

<br>

## Lo que he construido

> Tres productos full-stack en producción, desde la idea hasta el despliegue: Java y Spring Boot en el backend, React y TypeScript en el frontend.

<br>

### Ascension · entrenamiento y nutrición

<a href="https://github.com/RaclosDev/ascension-tracker"><img src="projects/ascension.jpg" alt="Ascension: capturas móviles del inicio, un entreno en curso y el diario de nutrición" width="100%" /></a>

PWA para registrar entrenos, comidas y progreso. Puedes anotar una comida con una **foto del plato** y Gemini estima calorías y macros. Incluye un **modo entrenador** para pautar programas y nutrición a alumnos, que deciden qué comparten. Por dentro: escrituras idempotentes, límites de uso con *token bucket* en PostgreSQL, temporizadores push con `FOR UPDATE SKIP LOCKED` y el entreno en curso guardado en IndexedDB.

<p>
  <img src="https://img.shields.io/badge/Java_21-0f1729?style=flat-square&logo=openjdk&logoColor=ED8B00" />
  <img src="https://img.shields.io/badge/Spring_Boot_4.1-0f1729?style=flat-square&logo=springboot&logoColor=6DB33F" />
  <img src="https://img.shields.io/badge/React_19-0f1729?style=flat-square&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-0f1729?style=flat-square&logo=typescript&logoColor=3178C6" />
  <img src="https://img.shields.io/badge/PostgreSQL_16-0f1729?style=flat-square&logo=postgresql&logoColor=4169E1" />
  <img src="https://img.shields.io/badge/Gemini-0f1729?style=flat-square&logo=googlegemini&logoColor=8E75B2" />
  <img src="https://img.shields.io/badge/+850_tests-0f1729?style=flat-square&logo=junit5&logoColor=25A162" />
</p>

**[Abrir la app](https://ascension.raclos.es)** · [Código](https://github.com/RaclosDev/ascension-tracker) · [Arquitectura](https://github.com/RaclosDev/ascension-tracker/blob/main/docs/architecture.md)

<br>

### LoopDeck · flashcards y repetición espaciada

<a href="https://github.com/RaclosDev/loopdeck"><img src="projects/loopdeck.jpg" alt="LoopDeck: capturas móviles de los mazos, un repaso y el centro de estudio" width="100%" /></a>

Plataforma de estudio con repetición espaciada **FSRS-5**, apuntes DOCX junto a cada mazo, tests de cuatro opciones y un **tutor con IA** que responde sobre el contenido del mazo. Gemini también genera tarjetas a partir de listas de términos, siempre desde el backend.

<p>
  <img src="https://img.shields.io/badge/Java_17-0f1729?style=flat-square&logo=openjdk&logoColor=ED8B00" />
  <img src="https://img.shields.io/badge/Spring_Boot_3-0f1729?style=flat-square&logo=springboot&logoColor=6DB33F" />
  <img src="https://img.shields.io/badge/React_19-0f1729?style=flat-square&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-0f1729?style=flat-square&logo=typescript&logoColor=3178C6" />
  <img src="https://img.shields.io/badge/PostgreSQL-0f1729?style=flat-square&logo=postgresql&logoColor=4169E1" />
  <img src="https://img.shields.io/badge/Gemini-0f1729?style=flat-square&logo=googlegemini&logoColor=8E75B2" />
  <img src="https://img.shields.io/badge/Playwright-0f1729?style=flat-square&logo=playwright&logoColor=2EAD33" />
</p>

**[Abrir la app](https://loopdeck.raclos.es)** · [Código](https://github.com/RaclosDev/loopdeck) · [Arquitectura](https://github.com/RaclosDev/loopdeck/blob/main/docs/ARCHITECTURE.md)

<br>

### PorrApp · porras de fútbol con amigos

<a href="https://github.com/RaclosDev/porrApp"><img src="projects/porrapp.jpg" alt="PorrApp: capturas móviles del inicio, la clasificación y el cuadro" width="100%" /></a>

Ligas privadas con tres formatos de porra (cuadro completo, eliminatorias o jornada a jornada). Los resultados se sincronizan solos desde ESPN, la puntuación se calcula en el backend y la clasificación se actualiza **en directo por WebSocket**. El cuadro oficial aplica los desempates FIFA del Mundial 2026, y la puntuación sigue el patrón *Strategy* para admitir torneos nuevos.

<p>
  <img src="https://img.shields.io/badge/Java_21-0f1729?style=flat-square&logo=openjdk&logoColor=ED8B00" />
  <img src="https://img.shields.io/badge/Spring_Boot_4.1-0f1729?style=flat-square&logo=springboot&logoColor=6DB33F" />
  <img src="https://img.shields.io/badge/React_19-0f1729?style=flat-square&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-0f1729?style=flat-square&logo=typescript&logoColor=3178C6" />
  <img src="https://img.shields.io/badge/PostgreSQL-0f1729?style=flat-square&logo=postgresql&logoColor=4169E1" />
  <img src="https://img.shields.io/badge/WebSockets-0f1729?style=flat-square&logo=socketdotio&logoColor=2fc4c4" />
  <img src="https://img.shields.io/badge/+1.000_tests-0f1729?style=flat-square&logo=junit5&logoColor=25A162" />
</p>

**[Probar la demo sin registro](https://porrapp.app/demo)** · [Código](https://github.com/RaclosDev/porrApp) · [Arquitectura](https://github.com/RaclosDev/porrApp/blob/main/docs/architecture.md)

<br>

## Un poco más sobre mí

Soy ingeniero de software con perfil **backend** y experiencia en **Java**, **Spring Boot** y arquitecturas de microservicios. En mi día a día trabajo con transaccionalidad, infraestructura financiera y bots de trading algorítmico de baja latencia.

En mis proyectos personales me gusta tener el control *end-to-end* del producto: diseño la arquitectura, implemento APIs robustas en el backend y desarrollo los frontends en **React**. Así llevo cada aplicación desde la idea hasta producción, con pruebas automatizadas, Docker y CI en GitHub Actions.

<div align="center">
  <br>
  <img src="https://skillicons.dev/icons?i=java,spring,react,ts,tailwind,postgres,docker,githubactions&theme=dark&perline=8" alt="Java, Spring, React, TypeScript, Tailwind, PostgreSQL, Docker y GitHub Actions" />
  <br>
</div>
