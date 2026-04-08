/**
 * =============================================================================
 * CONFIGURACIÓN POR CLIENTE — Edita solo este archivo para una nueva landing
 * =============================================================================
 * Duplica la carpeta del template, cambia textos, imágenes, número de WhatsApp
 * y colores en `theme` + `content_es` / `content_en`.
 */

const THEME = {
  colors: {
    primary: "#775a19",
    primaryDim: "#6a4e0d",
    onPrimary: "#fff6ed",
    background: "#faf9f7",
    onSurface: "#2f3331",
    onSurfaceVariant: "#5c605d",
    surfaceContainerLow: "#f3f4f1",
    surfaceContainerHighest: "#e0e3e0",
    outlineVariant: "#afb3b0",
  },
};

const CONTENT_ES = {
  meta: {
    title: "RHINO LUXE | Rinoplastia de Excelencia en Barranquilla",
    description:
      "Especialistas en rinoplastia en Barranquilla. Atención personalizada para pacientes locales e internacionales.",
    lang: "es",
  },
  clinicName: "RHINO LUXE",
  clinicTagline: "El estándar de oro en cirugía de rinoplastia.",

  nav: {
    items: [
      { href: "#procedures", label: "Procedimientos" },
      { href: "#results", label: "Antes/Después" },
      { href: "#location", label: "Ubicación" },
      { href: "#about", label: "Nosotros" },
    ],
    cta: "Agenda tu valoración",
  },

  contact: {
    /** Solo dígitos con código de país, sin + ni espacios (ej: 573001234567) */
    whatsapp: "573001234567",
    whatsappMessage:
      "Hola, me gustaría agendar una valoración en RHINO LUXE. ¿Me pueden orientar?",
    email: "hola@rhinoluxe.com",
    address: "Barranquilla, Colombia",
    mapsUrl: "https://maps.google.com/?q=Barranquilla",
  },

  social: {
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://linkedin.com/",
  },

  hero: {
    badge: "Expertise en Rinoplastia",
    headline: "Rinoplastia en Barranquilla con",
    headlineItalic: "resultados naturales",
    headlineRest: "y seguros",
    subheadline:
      "Especialistas en pacientes nacionales e internacionales. Atención personalizada y segura para esculpir la armonía de tu rostro.",
    cta: "Agenda tu valoración por WhatsApp",
    ctaNote: "Cupos limitados por mes | Respuesta en menos de 24h",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUen3kLroY0rVhWn_2N7_xS7hTpopGBNlUkyttdOIADxM7MeN2UUXzVtO0em9XRioP8_8fUKdJ51GNRISCXwpg9WXpYiBGDyY1qxnqhTmCYEKhG7Thy5fIY-btggFmYmTd0v1nrGYarh0iGboa3f6KWieugL0SS-7uD22xgOdWIW8dd_EZPiHdt9CA36axHQQHRM8Y5aH6Na8u1JyfxwZPdwIqlR7alp44_iyaudV1G1zVDRSLDaFf8jKrwzvxeWoHMH4QbS7m1Nk",
    imageAlt: "Retrato de perfil con resultado natural de rinoplastia.",
    trustCard: {
      title: "Confianza global",
      quote: "Un cambio que se ve natural, tal como lo imaginé.",
      avatars: [{ initials: "EM" }, { initials: "JV" }],
    },
  },

  trust: {
    stats: [
      { value: "15+", label: "Años de experiencia" },
      { value: "2000+", label: "Pacientes satisfechos" },
      { value: "Board Certified", label: "Cirujanos internacionales" },
    ],
  },

  beforeAfter: {
    id: "results",
    title: "Excelencia esculpida",
    subtitle:
      "Resultados que preservan la identidad, mejorando la proporción y funcionalidad.",
    beforeLabel: "Antes",
    afterLabel: "Después",
    cases: [
      {
        before:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDLKKfmDN4uYSTf6PhnZpGdRl0t4J5-aPzAGPs9sMcBuWmAWYypHgPARFFG9szyPFnUNbHRKfZDwGuloh5Qbd_HTVvaCjV4jC0w0n8RGD3fvcHWzE851srC1y6tqWwyi-uEaBhudHJuC5jS8xKWTslR8M5Tm62lyz9ZFnxw4EMWKFYVzn4_RulixCk3yEMhzs3l-NGNsmckuvD67a3Fq8IsOCGARlycZGba1fiNrgK3uFjHWgbqTY4t9T6AEZVdU5EaqmTlfHeeakc",
        after:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDVDPzln25O28TwhWRwtj-4iEmU6OaJGM4QlCz8JRDcXTz5pyI8V00QISxbT7e-Axe8qsxNb3MNWW7pQfUGdW0CRVqQPmqtw057Yefd8iWbnk7wdVkXFz_tOesChiKbhWGU5uKeXPb5RsnB-xwwW8sZJhd-e67Oq6OPaxJ6clXQrESzYB2pG4eHH5kzX3xRQQAEHjN6crHtrwrqhTPD5uoCAAI_uv67eTiLhu1S0fTM7bm4kRIJYPzXlZAcFxe5BaOTGBwl7DcBC2U",
        caption: "Caso destacado — vista clínica de perfil",
      },
    ],
  },

  procedures: {
    id: "procedures",
    title: "Procedimientos",
    subtitle:
      "Soluciones personalizadas según tu anatomía y objetivos estéticos o funcionales.",
    items: [
      {
        icon: "face_3",
        title: "Rinoplastia primaria",
        text: "Primera cirugía para refinar forma, función y proporción con técnicas modernas.",
      },
      {
        icon: "healing",
        title: "Rinoplastia secundaria",
        text: "Corrección de resultados previos con enfoque en estructura y función nasal.",
      },
      {
        icon: "air",
        title: "Rinoplastia funcional",
        text: "Mejora de la respiración y el valle nasal sin sacrificar la estética.",
      },
      {
        icon: "spa",
        title: "Consulta y planificación 3D",
        text: "Valoración detallada y comunicación clara de expectativas antes de operar.",
      },
    ],
  },

  international: {
    id: "patients",
    eyebrow: "Experiencia premium",
    title: "Viaja a Barranquilla con confianza para tu cirugía",
    body: "Entendemos los desafíos de viajar por salud. Hemos diseñado una experiencia tipo “white glove” para que tu único enfoque sea tu recuperación.",
    cards: [
      {
        icon: "videocam",
        title: "Consulta inicial online",
        text: "Evaluación preliminar desde la comodidad de tu hogar para definir objetivos y expectativas.",
      },
      {
        icon: "support_agent",
        title: "Acompañamiento total",
        text: "Un concierge personal asignado para guiarte en cada trámite médico y logístico.",
      },
      {
        icon: "hotel",
        title: "Asistencia en hospedaje",
        text: "Alianzas con los mejores hoteles y suites de recuperación postquirúrgica en la ciudad.",
      },
      {
        icon: "medical_services",
        title: "Seguimiento remoto",
        text: "Monitoreo constante incluso después de tu regreso a casa, vía telemedicina 24/7.",
      },
    ],
  },

  testimonials: {
    title: "Historias de transformación",
    items: [
      {
        name: "Elena Martinez",
        location: "Miami, USA",
        photo:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD932hbeZSXAYgfa9IwbZ_nsA3j-fZLNIC8liTKT7Obmwktj7HJqd-hv_kt1l5MZO-8N7I0gVgMvAuE5zORWo6O2ApSGMJY_H9b0CtaSqp4Ejuk-kNNCdD_urHlDUJYCHNhXebRzmY2qiiCaO6LD7hgADARMX8QqJTi9kbNqyV5IhWCxwnyQgeAUEBSHdhnLPC0DCOM2l07FYZ4u2xHQgbiO2RwEcft6qHQBmMnteaUXpFJT0bTjRrBV1L8a_3ox6RJ6STHRQQIA74",
        quote:
          "Buscaba un cirujano que entendiera mi estructura ósea. En Rhino Luxe encontré profesionalismo absoluto. Viajar desde Miami fue la mejor decisión.",
      },
      {
        name: "Julian Vance",
        location: "New York, USA",
        photo:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBq7FVu-OAcCe4mvTl8LKxRBtmu8Aq2GU4f5C87CAMhHh77z8ZXoqEUwF6JbACqUn6GSaOqj70MTLMk4ZNO7ID9mV-iUMv7epL1d9DABd8A0M7skN354ME8sv734-lEo1tSC8yQiGbkCYE96UO4ondu6ri-t-DzejuXPbXTX1BmYCdVc7oXGJA9zFcgRYP60l_LVGmjeWSJaepfNbZDR23dd6yj6hA13iHuFYosGr3yXUQOVDlE0iGx26eVkwn3FszBK6xHirCrwWo",
        quote:
          "La recuperación fue mucho más rápida de lo que esperaba. El equipo me hizo sentir en casa y los resultados funcionales cambiaron mi calidad de vida.",
      },
      {
        name: "Ricardo Mendoza",
        location: "Barranquilla, COL",
        photo:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDUOc3QZpBx927ZNvMYlYTPpPgBK2XtYxuJZ4W3rG0V8t9j17NspHrY-vFfQSW5bMOnRDZIi6tSAjQp3VNJ0VqbQYouSuIpq8DmPSmFxOLMxkBamjQxEDw7u9SIpPmA-YNTLc7TA-2FM65E9C3WOJ_ZP8AWwnYBWB-3LAvShHaJjp0Fpumdo3Cj7ogQSzWUITK5KVpHcgEZeGNanMow58ZpF0UUEJiY4dx6tC8SPQIbKb3jlr6S4E8Cy7PNWlUJNjE-L2cTwUFyNKk",
        quote:
          "Orgulloso de tener este nivel de excelencia en mi ciudad. El trato humano y la precisión técnica del doctor son incomparables.",
      },
    ],
  },

  about: {
    id: "about",
    title: "Sobre nosotros",
    body: "Equipo enfocado en seguridad, naturalidad y acompañamiento cercano en cada etapa del proceso.",
  },

  location: {
    id: "location",
    title: "Ubicación",
    body: "Atendemos en Barranquilla con protocolos claros para pacientes locales e internacionales.",
    ctaMaps: "Ver en mapa",
  },

  finalCta: {
    title: "Inicia tu transformación hoy",
    body: "Estamos listos para escucharte y diseñar el plan quirúrgico que mejor se adapte a tus necesidades.",
    cta: "Agenda tu valoración por WhatsApp",
    note: "Atención prioritaria para pacientes registrados hoy",
  },

  footer: {
    legalTitle: "Legal",
    legal: [
      { label: "Privacidad", href: "#" },
      { label: "Términos", href: "#" },
    ],
    queriesTitle: "Consultas",
    queries: [
      { label: "Contacto", href: "#" },
      { label: "Preguntas frecuentes", href: "#" },
    ],
    socialLabels: {
      instagram: "Instagram",
      youtube: "YouTube",
      linkedin: "LinkedIn",
    },
    copyright: "© 2026 Rhino Luxe Barranquilla. Excelencia en rinoplastia.",
  },

  langLabel: "Idioma",
};

const CONTENT_EN = {
  meta: {
    title: "RHINO LUXE | Excellence in Rhinoplasty in Barranquilla",
    description:
      "Rhinoplasty specialists in Barranquilla. Personalized care for local and international patients.",
    lang: "en",
  },
  clinicName: "RHINO LUXE",
  clinicTagline: "The gold standard in rhinoplasty surgery.",

  nav: {
    items: [
      { href: "#procedures", label: "Procedures" },
      { href: "#results", label: "Before/After" },
      { href: "#location", label: "Location" },
      { href: "#about", label: "About" },
    ],
    cta: "Book your consultation",
  },

  contact: {
    whatsapp: "573001234567",
    whatsappMessage:
      "Hello, I would like to book a consultation at RHINO LUXE. Could you help me?",
    email: "hola@rhinoluxe.com",
    address: "Barranquilla, Colombia",
    mapsUrl: "https://maps.google.com/?q=Barranquilla",
  },

  social: {
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://linkedin.com/",
  },

  hero: {
    badge: "Expertise in Rhinoplasty",
    headline: "Rhinoplasty in Barranquilla with",
    headlineItalic: "natural and safe",
    headlineRest: "results",
    subheadline:
      "Specialists in national and international patients. Personalized, safe care to sculpt the harmony of your face.",
    cta: "Book your consultation via WhatsApp",
    ctaNote: "Limited slots per month | Response in less than 24 hours",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUen3kLroY0rVhWn_2N7_xS7hTpopGBNlUkyttdOIADxM7MeN2UUXzVtO0em9XRioP8_8fUKdJ51GNRISCXwpg9WXpYiBGDyY1qxnqhTmCYEKhG7Thy5fIY-btggFmYmTd0v1nrGYarh0iGboa3f6KWieugL0SS-7uD22xgOdWIW8dd_EZPiHdt9CA36axHQQHRM8Y5aH6Na8u1JyfxwZPdwIqlR7alp44_iyaudV1G1zVDRSLDaFf8jKrwzvxeWoHMH4QbS7m1Nk",
    imageAlt: "Profile portrait with natural rhinoplasty outcome.",
    trustCard: {
      title: "Global trust",
      quote: "A change that looks natural, exactly as I imagined.",
      avatars: [{ initials: "EM" }, { initials: "JV" }],
    },
  },

  trust: {
    stats: [
      { value: "15+", label: "Years of experience" },
      { value: "2000+", label: "Satisfied patients" },
      { value: "Board certified", label: "International surgeons" },
    ],
  },

  beforeAfter: {
    id: "results",
    title: "Sculpted excellence",
    subtitle:
      "Results that preserve identity while improving proportion and function.",
    beforeLabel: "Before",
    afterLabel: "After",
    cases: [
      {
        before:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDLKKfmDN4uYSTf6PhnZpGdRl0t4J5-aPzAGPs9sMcBuWmAWYypHgPARFFG9szyPFnUNbHRKfZDwGuloh5Qbd_HTVvaCjV4jC0w0n8RGD3fvcHWzE851srC1y6tqWwyi-uEaBhudHJuC5jS8xKWTslR8M5Tm62lyz9ZFnxw4EMWKFYVzn4_RulixCk3yEMhzs3l-NGNsmckuvD67a3Fq8IsOCGARlycZGba1fiNrgK3uFjHWgbqTY4t9T6AEZVdU5EaqmTlfHeeakc",
        after:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDVDPzln25O28TwhWRwtj-4iEmU6OaJGM4QlCz8JRDcXTz5pyI8V00QISxbT7e-Axe8qsxNb3MNWW7pQfUGdW0CRVqQPmqtw057Yefd8iWbnk7wdVkXFz_tOesChiKbhWGU5uKeXPb5RsnB-xwwW8sZJhd-e67Oq6OPaxJ6clXQrESzYB2pG4eHH5kzX3xRQQAEHjN6crHtrwrqhTPD5uoCAAI_uv67eTiLhu1S0fTM7bm4kRIJYPzXlZAcFxe5BaOTGBwl7DcBC2U",
        caption: "Featured case — clinical profile view",
      },
    ],
  },

  procedures: {
    id: "procedures",
    title: "Procedures",
    subtitle:
      "Personalized solutions based on your anatomy and aesthetic or functional goals.",
    items: [
      {
        icon: "face_3",
        title: "Primary rhinoplasty",
        text: "First surgery to refine shape, function, and proportion with modern techniques.",
      },
      {
        icon: "healing",
        title: "Secondary rhinoplasty",
        text: "Revision focused on structure and nasal function after a previous result.",
      },
      {
        icon: "air",
        title: "Functional rhinoplasty",
        text: "Breathing improvement without sacrificing aesthetics.",
      },
      {
        icon: "spa",
        title: "Consultation & 3D planning",
        text: "Clear expectations and detailed assessment before surgery.",
      },
    ],
  },

  international: {
    id: "patients",
    eyebrow: "Premium experience",
    title: "Travel to Barranquilla with confidence for your surgery",
    body: "We understand the challenges of traveling for care. We designed a white-glove experience so your only focus is recovery.",
    cards: [
      {
        icon: "videocam",
        title: "Initial online consultation",
        text: "Preliminary evaluation from home to define goals and expectations.",
      },
      {
        icon: "support_agent",
        title: "Full accompaniment",
        text: "A personal concierge for every medical and logistics step.",
      },
      {
        icon: "hotel",
        title: "Lodging assistance",
        text: "Partnerships with leading hotels and post-surgical recovery suites.",
      },
      {
        icon: "medical_services",
        title: "Remote follow-up",
        text: "Ongoing monitoring after you return home, with 24/7 telemedicine.",
      },
    ],
  },

  testimonials: {
    title: "Transformation stories",
    items: [
      {
        name: "Elena Martinez",
        location: "Miami, USA",
        photo:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD932hbeZSXAYgfa9IwbZ_nsA3j-fZLNIC8liTKT7Obmwktj7HJqd-hv_kt1l5MZO-8N7I0gVgMvAuE5zORWo6O2ApSGMJY_H9b0CtaSqp4Ejuk-kNNCdD_urHlDUJYCHNhXebRzmY2qiiCaO6LD7hgADARMX8QqJTi9kbNqyV5IhWCxwnyQgeAUEBSHdhnLPC0DCOM2l07FYZ4u2xHQgbiO2RwEcft6qHQBmMnteaUXpFJT0bTjRrBV1L8a_3ox6RJ6STHRQQIA74",
        quote:
          "I was looking for a surgeon who understood my bone structure. At Rhino Luxe, I found absolute professionalism. Traveling from Miami was the best decision.",
      },
      {
        name: "Julian Vance",
        location: "New York, USA",
        photo:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBq7FVu-OAcCe4mvTl8LKxRBtmu8Aq2GU4f5C87CAMhHh77z8ZXoqEUwF6JbACqUn6GSaOqj70MTLMk4ZNO7ID9mV-iUMv7epL1d9DABd8A0M7skN354ME8sv734-lEo1tSC8yQiGbkCYE96UO4ondu6ri-t-DzejuXPbXTX1BmYCdVc7oXGJA9zFcgRYP60l_LVGmjeWSJaepfNbZDR23dd6yj6hA13iHuFYosGr3yXUQOVDlE0iGx26eVkwn3FszBK6xHirCrwWo",
        quote:
          "Recovery was faster than I expected. The team made me feel at home and the functional results changed my quality of life.",
      },
      {
        name: "Ricardo Mendoza",
        location: "Barranquilla, COL",
        photo:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDUOc3QZpBx927ZNvMYlYTPpPgBK2XtYxuJZ4W3rG0V8t9j17NspHrY-vFfQSW5bMOnRDZIi6tSAjQp3VNJ0VqbQYouSuIpq8DmPSmFxOLMxkBamjQxEDw7u9SIpPmA-YNTLc7TA-2FM65E9C3WOJ_ZP8AWwnYBWB-3LAvShHaJjp0Fpumdo3Cj7ogQSzWUITK5KVpHcgEZeGNanMow58ZpF0UUEJiY4dx6tC8SPQIbKb3jlr6S4E8Cy7PNWlUJNjE-L2cTwUFyNKk",
        quote:
          "Proud to have this level of excellence in my city. The human touch and the doctor’s technical precision are incomparable.",
      },
    ],
  },

  about: {
    id: "about",
    title: "About us",
    body: "A team focused on safety, natural results, and close support at every stage.",
  },

  location: {
    id: "location",
    title: "Location",
    body: "We serve patients in Barranquilla with clear protocols for local and international visitors.",
    ctaMaps: "View on map",
  },

  finalCta: {
    title: "Start your transformation today",
    body: "We are ready to listen and design the surgical plan that best fits your needs.",
    cta: "Book your consultation via WhatsApp",
    note: "Priority attention for patients who reach out today",
  },

  footer: {
    legalTitle: "Legal",
    legal: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
    queriesTitle: "Contact",
    queries: [
      { label: "Contact us", href: "#" },
      { label: "FAQs", href: "#" },
    ],
    socialLabels: {
      instagram: "Instagram",
      youtube: "YouTube",
      linkedin: "LinkedIn",
    },
    copyright: "© 2026 Rhino Luxe Barranquilla. Excellence in rhinoplasty.",
  },

  langLabel: "Language",
};
