export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export type PracticeVisualKind = "economics" | "finance" | "regulation";
type PracticeArea = { title: string; description: string; visual: PracticeVisualKind };
type FounderDetail = { body: string; verified: boolean };
type FounderPortrait = {
  src: string | null;
  alt: string | null;
  verified: boolean;
  temporary: boolean;
  approvedForProduction: boolean;
  sourceUrl: string | null;
};

export type ContactCopy = {
  name: string;
  email: string;
  message: string;
  submit: string;
  submitting: string;
  required: string;
  invalidEmail: string;
  notEnabled: string;
  genericError: string;
};

export type SiteContent = {
  locale: Locale;
  metadata: { title: string; description: string; ogTitle: string };
  accessibility: {
    skip: string;
    mainNav: string;
    menuOpen: string;
    menuClose: string;
    home: string;
  };
  nav: Array<{ label: string; href: string }>;
  languageLabel: string;
  hero: {
    descriptor: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  statement: { title: string; body: string };
  practices: { title: string; items: PracticeArea[] };
  founder: {
    name: string;
    role: string;
    portrait: FounderPortrait;
    details: FounderDetail[];
  };
  contact: {
    title: string;
    body: string;
    form: ContactCopy;
  };
  footer: { descriptor: string };
};

export const siteContent: Record<Locale, SiteContent> = {
  es: {
    locale: "es",
    metadata: {
      title: "Paribus | Consultoría económica, financiera y regulatoria",
      ogTitle: "Rigor para decisiones complejas.",
      description:
        "Consultoría económica, financiera y regulatoria para organizaciones que enfrentan decisiones de alta complejidad.",
    },
    accessibility: {
      skip: "Saltar al contenido",
      mainNav: "Navegación principal",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      home: "Paribus — Inicio",
    },
    nav: [
      { label: "Áreas de práctica", href: "#areas" },
      { label: "Contacto", href: "#contacto" },
    ],
    languageLabel: "Cambiar idioma a inglés",
    hero: {
      descriptor: "Consultoría económica, financiera y regulatoria",
      title: "Rigor para decisiones complejas.",
      body: "Estructuramos problemas complejos, evaluamos escenarios y traducimos evidencia técnica en implicancias concretas.",
      primaryCta: "Áreas de práctica",
      secondaryCta: "Conversemos",
    },
    statement: {
      title: "El análisis importa cuando cambia una decisión.",
      body: "Combinamos economía, finanzas y análisis regulatorio para estructurar problemas complejos, ordenar la evidencia, evaluar escenarios y traducir el análisis en implicancias concretas para la decisión.",
    },
    practices: {
      title: "Áreas de práctica",
      items: [
        {
          title: "Economía",
          description:
            "Análisis económico aplicado para comprender mercados, incentivos, escenarios y efectos sobre empresas e instituciones.",
          visual: "economics",
        },
        {
          title: "Finanzas",
          description:
            "Modelación y análisis financiero para evaluar valor, inversión, riesgo y decisiones de asignación de capital.",
          visual: "finance",
        },
        {
          title: "Regulación",
          description:
            "Análisis económico-regulatorio para anticipar, evaluar y responder a cambios en marcos normativos y sectores regulados.",
          visual: "regulation",
        },
      ],
    },
    founder: {
      name: "Jorge Valverde Carbonell",
      role: "Fundador",
      portrait: {
        src: "/images/jorge-valverde-cutout.png",
        alt: "Retrato de Jorge Valverde Carbonell",
        verified: true,
        temporary: false,
        approvedForProduction: true,
        sourceUrl: null,
      },
      details: [
        {
          body: "Economista y Doctor en Economía por Maastricht University y UNU-MERIT. Su trabajo se ha concentrado en economía aplicada, inversión, regulación y desarrollo productivo.",
          verified: true,
        },
        {
          body: "Ha desarrollado investigación y asesoría en temas de competitividad, recursos naturales, innovación y transición verde en América Latina.",
          verified: true,
        },
      ],
    },
    contact: {
      title: "Conversemos.",
      body: "Si estás evaluando un problema económico, financiero o regulatorio, podemos conversar.",
      form: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        submit: "Contactar",
        submitting: "Validando…",
        required: "Este campo es obligatorio.",
        invalidEmail: "Ingrese un correo válido.",
        notEnabled: "El envío de mensajes aún no está habilitado.",
        genericError: "No fue posible validar el mensaje. Revise los campos e intente nuevamente.",
      },
    },
    footer: {
      descriptor: "Consultoría económica, financiera y regulatoria",
    },
  },
  en: {
    locale: "en",
    metadata: {
      title: "Paribus | Economic, financial and regulatory consulting",
      ogTitle: "Rigour for complex decisions.",
      description:
        "Economic, financial and regulatory consulting for organisations facing highly complex decisions.",
    },
    accessibility: {
      skip: "Skip to content",
      mainNav: "Primary navigation",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      home: "Paribus — Home",
    },
    nav: [
      { label: "Areas of Practice", href: "#areas" },
      { label: "Contact", href: "#contacto" },
    ],
    languageLabel: "Switch language to Spanish",
    hero: {
      descriptor: "Economic, financial and regulatory consulting",
      title: "Rigour for complex decisions.",
      body: "We structure complex problems, assess scenarios and turn technical evidence into concrete implications.",
      primaryCta: "Areas of Practice",
      secondaryCta: "Contact",
    },
    statement: {
      title: "Analysis matters when it changes a decision.",
      body: "We combine economics, finance and regulatory analysis to structure complex problems, organise the evidence, assess scenarios and translate analysis into concrete implications for decision-making.",
    },
    practices: {
      title: "Areas of Practice",
      items: [
        {
          title: "Economics",
          description:
            "Applied economic analysis to understand markets, incentives, scenarios and their effects on companies and institutions.",
          visual: "economics",
        },
        {
          title: "Finance",
          description:
            "Financial modelling and analysis to assess value, investment, risk and capital allocation decisions.",
          visual: "finance",
        },
        {
          title: "Regulation",
          description:
            "Economic and regulatory analysis to anticipate, assess and respond to changes in regulatory frameworks and regulated sectors.",
          visual: "regulation",
        },
      ],
    },
    founder: {
      name: "Jorge Valverde Carbonell",
      role: "Founder",
      portrait: {
        src: "/images/jorge-valverde-cutout.png",
        alt: "Portrait of Jorge Valverde Carbonell",
        verified: true,
        temporary: false,
        approvedForProduction: true,
        sourceUrl: null,
      },
      details: [
        {
          body: "Jorge Valverde Carbonell is an economist and holds a PhD in Economics from Maastricht University and UNU-MERIT. His work has focused on applied economics, investment, regulation and productive development.",
          verified: true,
        },
        {
          body: "He has conducted research and advisory work on competitiveness, natural resources, innovation and the green transition in Latin America.",
          verified: true,
        },
      ],
    },
    contact: {
      title: "Let’s talk.",
      body: "If you are considering an economic, financial or regulatory problem, we can discuss it.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Contact",
        submitting: "Validating…",
        required: "This field is required.",
        invalidEmail: "Enter a valid email address.",
        notEnabled: "Message delivery is not yet enabled.",
        genericError: "The message could not be validated. Review the fields and try again.",
      },
    },
    footer: {
      descriptor: "Economic, financial and regulatory consulting",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
