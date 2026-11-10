export const LANGS = ["en", "es"] as const
export type Lang = (typeof LANGS)[number]

export const pathFor = (lang: Lang) => (lang === "en" ? "/" : "/es/")
export const otherLang = (lang: Lang): Lang => (lang === "en" ? "es" : "en")

export const CONTACT = {
  email: "lcastillo.c54@gmail.com",
  linkedin: "https://www.linkedin.com/in/lcascab/",
  github: "https://github.com/TheGreatPapa",
}

export interface Job {
  role: string
  company: string
  url: string
  period: string
  location: string
  note?: string
  bullets: string[]
  tags: string[]
}

export type Visual =
  | { kind: "image"; src: string; alt: string }
  | { kind: "schematic"; variant: "tracker" | "flow" | "ticket"; alt: string }

export interface ProjectLink {
  label: string
  href: string
  type: "code" | "link"
}

export interface Project {
  title: string
  context: string
  description: string
  highlights?: string[]
  note?: string
  tags: string[]
  links: ProjectLink[]
  visual: Visual
}

interface Copy {
  meta: { title: string; description: string; locale: string }
  nav: { experience: string; projects: string; about: string; contact: string; menu: string; switchTo: string }
  hero: {
    kicker: string
    greeting: string
    badge: string
    lead: string
    sub: string
    ctaPrimary: string
    ctaSecondary: string
    portraitAlt: string
  }
  sections: {
    experience: string
    projects: string
    projectsIntro: string
    workshop: string
    workshopIntro: string
    about: string
    credentials: string
    languages: string
  }
  labels: { visit: string; stack: string }
  experience: Job[]
  featured: Project[]
  workshop: Project[]
  about: { paragraphs: string[]; credentials: { title: string; detail: string }[]; languages: string[] }
  footer: { heading: string; text: string; email: string; rights: string; built: string; backToTop: string }
}

const IMG = {
  garage: "/garage.webp",
  femur: "/Femur.webp",
  nutri: "/NutriApp.webp",
  doop: "/doop.webp",
}

const LINKS = {
  garageCode: "https://github.com/TheGreatPapa/Liftmaster-MJ5011U-Controller-",
  garageVideo: "https://www.tiktok.com/@art_ilugios3d/video/7481541354506554629",
  femurDocs: "https://drive.google.com/drive/folders/10ib9FfAdqp-cekgVJZC4e2967jQ5SE1f?usp=sharing",
  ticketCode: "https://github.com/TheGreatPapa/boleyukis",
  doopDocs: "https://drive.google.com/drive/folders/1-M1IJAB9S_PhoOLn06b65NKbhMeAUW2l?usp=sharing",
}

const en: Copy = {
  meta: {
    title: "Luis Carlos Castillo | Full Stack and Automation Engineer",
    description:
      "Full Stack Engineer in Hermosillo, Mexico. React, TypeScript, PostgreSQL, Power Platform and LLM workflows with the Anthropic API and Claude Code.",
    locale: "en_US",
  },
  nav: {
    experience: "Experience",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    menu: "Menu",
    switchTo: "Ver en español",
  },
  hero: {
    kicker: "Full Stack and Automation Engineer",
    greeting: "Hi, I'm",
    badge: "Available for work",
    lead: "I find the step a process is missing and build what fixes it: React and TypeScript apps on PostgreSQL, Power Platform workflows, and LLM features built with the Anthropic API and Claude Code.",
    sub: "Digital Systems and Robotics Engineer from Tecnológico de Monterrey, based in Hermosillo, Sonora, Mexico.",
    ctaPrimary: "See the projects",
    ctaSecondary: "Get in touch",
    portraitAlt: "Portrait of Luis Carlos Castillo",
  },
  sections: {
    experience: "Experience",
    projects: "Projects",
    projectsIntro: "Work running in production, plus the builds I am proudest of.",
    workshop: "From the workshop",
    workshopIntro: "Smaller builds from school and spare time.",
    about: "About me",
    credentials: "Credentials",
    languages: "Languages",
  },
  labels: { visit: "Visit", stack: "Stack" },
  experience: [
    {
      role: "Full Stack Engineer",
      company: "Ardebili Engineering",
      url: "https://www.ardebilieng.com/",
      period: "Oct 2025 - Present",
      location: "Hermosillo, Sonora",
      note: "Joined as Automation Engineer; the role became Full Stack Engineer in Nov 2025 as the company's needs became clear.",
      bullets: [
        "Build internal web applications with React, TypeScript and PostgreSQL (Supabase), deployed as serverless services on Vercel, with Row-Level Security, role-based access and Microsoft (Entra ID) sign-in.",
        "Integrate the Anthropic API (structured outputs, streaming) into the team's day-to-day workflows, with LLM call logging, cost tracking and output validation. Develop with Claude Code using agentic, spec-driven practices.",
        "Built a two-way sync with Deltek Vantagepoint (ERP) that runs in production. When the API documentation no longer matched the real endpoints, confirmed the current behavior with Deltek's developer support and updated the integration.",
        "Delivered a Power Platform solution for design engineers and account managers; every user moved off the old system within a week.",
        "Introduced the first automated tests (Vitest, Testing Library) and GitHub Actions pull-request pipelines on our main internal app.",
      ],
      tags: ["React", "TypeScript", "PostgreSQL", "Supabase", "Python", "FastAPI", "Anthropic API", "Claude Code", "Power Platform", "GitHub Actions", "Vercel", "Docker"],
    },
    {
      role: "Freelance Software Engineer, AI Model Training",
      company: "Outlier",
      url: "https://outlier.ai/",
      period: "Dec 2024 - Oct 2025",
      location: "Remote",
      bullets: [
        "Wrote Python-focused prompts designed to make large language models hallucinate, then authored the correct answers used to train them.",
        "Every submission was quality-gated: it had to score above a set threshold to be accepted.",
      ],
      tags: ["Python", "LLMs", "Prompt design"],
    },
    {
      role: "IT Specialist",
      company: "Centro Escolar Newton",
      url: "https://centroenewton.edu.mx/",
      period: "Aug 2022 - Feb 2025",
      location: "Mexico",
      note: "Joined the Newton Digitalization project as a contributor and later led it.",
      bullets: [
        "Built event-driven automations with Power Automate and SharePoint that cut manual processing time by 60%, with scope-based error handling and retry policies in every flow.",
        "Migrated legacy spreadsheets to cloud databases with Python, and designed Dataverse schemas with role-based access to hold the data.",
        "Administered Azure AD (Entra ID): user access, licenses and audit logs.",
        "Documented the flows and trained staff on the new systems.",
      ],
      tags: ["Power Automate", "SharePoint", "Dataverse", "Python", "Microsoft 365", "Entra ID"],
    },
  ],
  featured: [
    {
      title: "O3T: new-hire evaluation platform",
      context: "Internal tool at Ardebili Engineering, 2026",
      description:
        "Follows each new hire through a 90-day evaluation with configurable review periods. In production with HR and the operations director, about 50 users.",
      highlights: [
        "Layered Row-Level Security (permission plus row scope by supervisor or discipline), an audit log, and about 30 Python scripts that verify the access rules.",
        "Anthropic API features: a help assistant that answers from the app's own documentation, and a compliance check on reviewer feedback that blocks publishing and fails closed.",
        "Privacy-first crash log: anonymous error telemetry with rate limiting and 7-day retention, readable only with a granted permission.",
        "The app's first test suites (Vitest, Testing Library) and a GitHub Actions pipeline running audit, lint, build and test jobs.",
      ],
      note: "Internal tool: the code and screens are private.",
      tags: ["React 19", "TypeScript", "Supabase", "PostgreSQL", "Anthropic API", "Vercel", "Claude Code"],
      links: [],
      visual: { kind: "schematic", variant: "tracker", alt: "Schematic of a 90-day evaluation tracker with review periods and an access shield" },
    },
    {
      title: "Design team workflow app",
      context: "Internal tool at Ardebili Engineering",
      description:
        "A Power Platform solution for design engineers and account managers that replaced their old system. Every user migrated within a week, and clearer notifications reduced misunderstandings.",
      highlights: [
        "Power Apps front end over SharePoint lists, with Power Automate keeping each record's status in sync with Dataverse.",
        "Role-based governance that controls who can change each record.",
      ],
      note: "Internal tool: the screens are private.",
      tags: ["Power Apps", "Power Automate", "SharePoint", "Dataverse"],
      links: [],
      visual: { kind: "schematic", variant: "flow", alt: "Schematic of data flowing from Power Apps through Power Automate into Dataverse" },
    },
    {
      title: "IoT garage door controller",
      context: "Personal project, 2025",
      description:
        "Phone control for an old LiftMaster MJ5011U garage door motor. Runs on any RainMaker-compatible ESP32 and is written in C with ESP-IDF and the ESP RainMaker SDK, so pairing works through a QR code with no custom cloud. I also designed the electronics schematic and a 3D-printed enclosure.",
      tags: ["C", "ESP32", "ESP-IDF", "ESP RainMaker", "3D printing"],
      links: [
        { label: "Code", href: LINKS.garageCode, type: "code" },
        { label: "Video", href: LINKS.garageVideo, type: "link" },
      ],
      visual: { kind: "image", src: IMG.garage, alt: "ESP32 garage door controller in its 3D-printed enclosure" },
    },
  ],
  workshop: [
    {
      title: "Sample holder precision control",
      context: "Degree final project, 2022",
      description:
        "Real-time PID control of stepper motors with micrometer precision, used to position a mouse femur with osteoporosis for UNAM research. Automated test scripts cut calibration time by 50%.",
      tags: ["Python", "Arduino", "PID control"],
      links: [{ label: "Documentation", href: LINKS.femurDocs, type: "link" }],
      visual: { kind: "image", src: IMG.femur, alt: "Computer-assisted sample holder built to position a femur sample" },
    },
    {
      title: "Ticket numberer",
      context: "Personal project, 2024, rebuilt 2026",
      description:
        "Upload a ticket image, choose where the number goes, and get a printable PDF with sequentially numbered tickets laid out on paper. First built in Python, rebuilt in JavaScript.",
      tags: ["JavaScript", "PDF"],
      links: [{ label: "Code", href: LINKS.ticketCode, type: "code" }],
      visual: { kind: "schematic", variant: "ticket", alt: "Schematic of numbered tickets laid out on a printable page" },
    },
    {
      title: "DOOP programming language",
      context: "Course project, 2022",
      description:
        "A small programming language with its own lexer and parser, built with Python PLY (lex-yacc). Supports assignments, matrix operations, loops, logical operators and printing.",
      tags: ["Python", "PLY"],
      links: [{ label: "Documentation", href: LINKS.doopDocs, type: "link" }],
      visual: { kind: "image", src: IMG.doop, alt: "Sample DOOP program and its output" },
    },
    {
      title: "NutriApp AI",
      context: "Personal project, 2023 (not released)",
      description:
        "A system for nutritionists: a Microsoft Forms submission triggers a Python REST API that drafts a nutrition plan with GPT and saves the result to a SharePoint list.",
      tags: ["Python", "Azure", "GPT", "SharePoint"],
      links: [],
      visual: { kind: "image", src: IMG.nutri, alt: "NutriApp AI interface" },
    },
  ],
  about: {
    paragraphs: [
      "Most people call me Luca; my full name is Luis Carlos Castillo Cabrera. I started programming at 15 with an Arduino and went on to graduate as a Digital Systems and Robotics Engineer from Tecnológico de Monterrey.",
      "What I enjoy most is looking at a process, finding what it is missing, and choosing the technology that fixes it. Lately that means AI agents and LLMs, with Claude Code as my everyday tool.",
      "I do my best work in teams with defined workflows that are open to improvement. I research before I commit to a decision, and I like mentoring the people around me.",
    ],
    credentials: [
      { title: "B.S. in Digital Systems and Robotics", detail: "Tecnológico de Monterrey, 2017 - 2022" },
      { title: "Model Context Protocol Intensive Course", detail: "Midudev, 2026" },
      { title: "Embedded Software and Hardware Architecture", detail: "University of Colorado Boulder, 2025" },
      { title: "Google IT Automation with Python", detail: "Google, 2024" },
      { title: "Python, Bash and SQL Essentials for Data Engineering", detail: "Duke University, 2024" },
    ],
    languages: ["Spanish: native", "English: fluent (C1)"],
  },
  footer: {
    heading: "Let's talk",
    text: "Email is the fastest way to reach me.",
    email: "Send an email",
    rights: "Luis Carlos Castillo Cabrera",
    built: "Built with Astro.",
    backToTop: "Back to top",
  },
}

const es: Copy = {
  meta: {
    title: "Luis Carlos Castillo | Ingeniero Full Stack y de Automatización",
    description:
      "Ingeniero Full Stack en Hermosillo, México. React, TypeScript, PostgreSQL, Power Platform y flujos con LLM usando la API de Anthropic y Claude Code.",
    locale: "es_MX",
  },
  nav: {
    experience: "Experiencia",
    projects: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
    menu: "Menú",
    switchTo: "View in English",
  },
  hero: {
    kicker: "Ingeniero Full Stack y de Automatización",
    greeting: "Hola, soy",
    badge: "Disponible para trabajar",
    lead: "Encuentro el paso que le falta a un proceso y construyo lo que lo resuelve: aplicaciones en React y TypeScript sobre PostgreSQL, flujos en Power Platform y funciones con LLM hechas con la API de Anthropic y Claude Code.",
    sub: "Ingeniero en Sistemas Digitales y Robótica por el Tecnológico de Monterrey, en Hermosillo, Sonora, México.",
    ctaPrimary: "Ver proyectos",
    ctaSecondary: "Contáctame",
    portraitAlt: "Retrato de Luis Carlos Castillo",
  },
  sections: {
    experience: "Experiencia",
    projects: "Proyectos",
    projectsIntro: "Trabajo que corre en producción y los proyectos de los que estoy más orgulloso.",
    workshop: "Desde el taller",
    workshopIntro: "Proyectos más pequeños de la escuela y de mi tiempo libre.",
    about: "Sobre mí",
    credentials: "Formación",
    languages: "Idiomas",
  },
  labels: { visit: "Visitar", stack: "Tecnologías" },
  experience: [
    {
      role: "Ingeniero Full Stack",
      company: "Ardebili Engineering",
      url: "https://www.ardebilieng.com/",
      period: "oct 2025 - actualidad",
      location: "Hermosillo, Sonora",
      note: "Entré como Ingeniero de Automatización; en nov 2025 el puesto pasó a Ingeniero Full Stack cuando quedaron claras las necesidades de la empresa.",
      bullets: [
        "Desarrollo aplicaciones web internas con React, TypeScript y PostgreSQL (Supabase), desplegadas como servicios serverless en Vercel, con Row-Level Security, control de acceso por roles e inicio de sesión con Microsoft (Entra ID).",
        "Integro la API de Anthropic (salidas estructuradas, streaming) en los flujos diarios del equipo, con registro de llamadas al LLM, control de costos y validación de resultados. Desarrollo con Claude Code usando prácticas agénticas y guiadas por especificaciones.",
        "Construí una sincronización bidireccional con Deltek Vantagepoint (ERP) que corre en producción. Cuando la documentación de la API ya no coincidía con los endpoints reales, confirmé el comportamiento actual con el soporte para desarrolladores de Deltek y actualicé la integración.",
        "Entregué una solución en Power Platform para ingenieros de diseño y gerentes de cuenta; todos los usuarios dejaron el sistema anterior en menos de una semana.",
        "Introduje las primeras pruebas automatizadas (Vitest, Testing Library) y pipelines de GitHub Actions para pull requests en nuestra aplicación interna principal.",
      ],
      tags: ["React", "TypeScript", "PostgreSQL", "Supabase", "Python", "FastAPI", "Anthropic API", "Claude Code", "Power Platform", "GitHub Actions", "Vercel", "Docker"],
    },
    {
      role: "Ingeniero de Software Freelance, entrenamiento de modelos de IA",
      company: "Outlier",
      url: "https://outlier.ai/",
      period: "dic 2024 - oct 2025",
      location: "Remoto",
      bullets: [
        "Escribí prompts centrados en Python diseñados para hacer alucinar a modelos de lenguaje y después redacté las respuestas correctas para entrenarlos.",
        "Cada entrega pasaba por un control de calidad: debía superar un puntaje mínimo para ser aceptada.",
      ],
      tags: ["Python", "LLMs", "Diseño de prompts"],
    },
    {
      role: "Especialista TI",
      company: "Centro Escolar Newton",
      url: "https://centroenewton.edu.mx/",
      period: "ago 2022 - feb 2025",
      location: "México",
      note: "Entré al proyecto Newton Digitalization como colaborador y después lo lideré.",
      bullets: [
        "Construí automatizaciones basadas en eventos con Power Automate y SharePoint que redujeron 60% el tiempo de procesamiento manual, con manejo de errores por scopes y políticas de reintento en cada flujo.",
        "Migré hojas de cálculo heredadas a bases de datos en la nube con Python y diseñé esquemas en Dataverse con acceso por roles para alojar los datos.",
        "Administré Azure AD (Entra ID): accesos de usuarios, licencias y registros de auditoría.",
        "Documenté los flujos y capacité al personal en los nuevos sistemas.",
      ],
      tags: ["Power Automate", "SharePoint", "Dataverse", "Python", "Microsoft 365", "Entra ID"],
    },
  ],
  featured: [
    {
      title: "O3T: plataforma de evaluación de nuevo ingreso",
      context: "Herramienta interna de Ardebili Engineering, 2026",
      description:
        "Da seguimiento a cada persona de nuevo ingreso durante una evaluación de 90 días con periodos de revisión configurables. En producción con Recursos Humanos y el director de operaciones, alrededor de 50 usuarios.",
      highlights: [
        "Row-Level Security en capas (permiso más alcance por supervisor o disciplina), bitácora de auditoría y unos 30 scripts de Python que verifican las reglas de acceso.",
        "Funciones con la API de Anthropic: un asistente de ayuda que responde a partir de la documentación de la propia app y una revisión de cumplimiento sobre la retroalimentación que bloquea la publicación y falla de forma segura.",
        "Registro de fallas con privacidad primero: telemetría anónima de errores con límite de frecuencia y retención de 7 días, visible solo con un permiso asignado.",
        "Las primeras suites de pruebas de la app (Vitest, Testing Library) y un pipeline de GitHub Actions con auditoría, lint, build y pruebas.",
      ],
      note: "Herramienta interna: el código y las pantallas son privados.",
      tags: ["React 19", "TypeScript", "Supabase", "PostgreSQL", "Anthropic API", "Vercel", "Claude Code"],
      links: [],
      visual: { kind: "schematic", variant: "tracker", alt: "Esquema de un seguimiento de evaluación de 90 días con periodos de revisión y un escudo de acceso" },
    },
    {
      title: "App de flujo para el equipo de diseño",
      context: "Herramienta interna de Ardebili Engineering",
      description:
        "Una solución en Power Platform para ingenieros de diseño y gerentes de cuenta que reemplazó su sistema anterior. Todos los usuarios migraron en menos de una semana y las notificaciones más claras redujeron los malentendidos.",
      highlights: [
        "Interfaz en Power Apps sobre listas de SharePoint, con Power Automate manteniendo el estado de cada registro sincronizado con Dataverse.",
        "Gobernanza por roles que controla quién puede modificar cada registro.",
      ],
      note: "Herramienta interna: las pantallas son privadas.",
      tags: ["Power Apps", "Power Automate", "SharePoint", "Dataverse"],
      links: [],
      visual: { kind: "schematic", variant: "flow", alt: "Esquema de datos que fluyen de Power Apps a Dataverse a través de Power Automate" },
    },
    {
      title: "Control IoT de portón de garage",
      context: "Proyecto personal, 2025",
      description:
        "Control desde el celular para un motor de portón LiftMaster MJ5011U antiguo. Funciona en cualquier ESP32 compatible con RainMaker y está escrito en C con ESP-IDF y el SDK de ESP RainMaker, así que se vincula con un código QR sin una nube propia. También diseñé el esquema electrónico y una carcasa impresa en 3D.",
      tags: ["C", "ESP32", "ESP-IDF", "ESP RainMaker", "Impresión 3D"],
      links: [
        { label: "Código", href: LINKS.garageCode, type: "code" },
        { label: "Video", href: LINKS.garageVideo, type: "link" },
      ],
      visual: { kind: "image", src: IMG.garage, alt: "Controlador de portón con ESP32 en su carcasa impresa en 3D" },
    },
  ],
  workshop: [
    {
      title: "Control de precisión para sujeta muestras",
      context: "Proyecto final de carrera, 2022",
      description:
        "Control PID en tiempo real de motores a pasos con precisión de micrómetros, usado para posicionar el fémur de un ratón con osteoporosis en una investigación de la UNAM. Los scripts de prueba automatizados redujeron 50% el tiempo de calibración.",
      tags: ["Python", "Arduino", "Control PID"],
      links: [{ label: "Documentación", href: LINKS.femurDocs, type: "link" }],
      visual: { kind: "image", src: IMG.femur, alt: "Sujeta muestras asistido por computadora para posicionar un fémur" },
    },
    {
      title: "Numerador de boletos",
      context: "Proyecto personal, 2024, rehecho en 2026",
      description:
        "Subes la imagen de un boleto, eliges dónde va el número y obtienes un PDF listo para imprimir con boletos numerados en secuencia. La primera versión fue en Python y la reconstruí en JavaScript.",
      tags: ["JavaScript", "PDF"],
      links: [{ label: "Código", href: LINKS.ticketCode, type: "code" }],
      visual: { kind: "schematic", variant: "ticket", alt: "Esquema de boletos numerados acomodados en una hoja imprimible" },
    },
    {
      title: "DOOP, lenguaje de programación",
      context: "Proyecto de curso, 2022",
      description:
        "Un lenguaje de programación pequeño con su propio analizador léxico y sintáctico, hecho con Python PLY (lex-yacc). Soporta asignaciones, operaciones con matrices, ciclos, operadores lógicos e impresión.",
      tags: ["Python", "PLY"],
      links: [{ label: "Documentación", href: LINKS.doopDocs, type: "link" }],
      visual: { kind: "image", src: IMG.doop, alt: "Programa de ejemplo en DOOP y su salida" },
    },
    {
      title: "NutriApp AI",
      context: "Proyecto personal, 2023 (no publicado)",
      description:
        "Un sistema para nutriólogos: un formulario de Microsoft Forms dispara una API REST en Python que redacta un plan nutricional con GPT y guarda el resultado en una lista de SharePoint.",
      tags: ["Python", "Azure", "GPT", "SharePoint"],
      links: [],
      visual: { kind: "image", src: IMG.nutri, alt: "Interfaz de NutriApp AI" },
    },
  ],
  about: {
    paragraphs: [
      "Soy Luis Carlos Castillo Cabrera, aunque casi todos me dicen Luca. Empecé a programar a los 15 años con un Arduino y me gradué como Ingeniero en Sistemas Digitales y Robótica en el Tecnológico de Monterrey.",
      "Lo que más disfruto es observar un proceso, encontrar lo que le falta y elegir la tecnología que lo resuelve. Últimamente eso significa agentes de IA y LLMs, con Claude Code como mi herramienta de todos los días.",
      "Trabajo mejor en equipos con flujos definidos y abiertos a mejorar. Investigo antes de comprometerme con una decisión y me gusta ser mentor de las personas a mi alrededor.",
    ],
    credentials: [
      { title: "Ingeniería en Sistemas Digitales y Robótica", detail: "Tecnológico de Monterrey, 2017 - 2022" },
      { title: "Curso intensivo de Model Context Protocol", detail: "Midudev, 2026" },
      { title: "Embedded Software and Hardware Architecture", detail: "University of Colorado Boulder, 2025" },
      { title: "Google IT Automation with Python", detail: "Google, 2024" },
      { title: "Python, Bash and SQL Essentials for Data Engineering", detail: "Duke University, 2024" },
    ],
    languages: ["Español: nativo", "Inglés: fluido (C1)"],
  },
  footer: {
    heading: "Hablemos",
    text: "El correo es la forma más rápida de contactarme.",
    email: "Enviar un correo",
    rights: "Luis Carlos Castillo Cabrera",
    built: "Hecho con Astro.",
    backToTop: "Volver arriba",
  },
}

export const COPY: Record<Lang, Copy> = { en, es }
