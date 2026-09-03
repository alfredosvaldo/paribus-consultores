export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export type PracticeVisualKind = "economics" | "finance" | "regulation";
type PracticeArea = { title: string; description: string; visual: PracticeVisualKind };
type PersonDetail = { body: string; verified: boolean };
type PersonPortrait = {
  src: string | null;
  alt: string | null;
  width: number;
  height: number;
  verified: boolean;
  temporary: boolean;
  approvedForProduction: boolean;
  sourceUrl: string | null;
};
export type TeamMember = {
  name: string;
  role: string;
  portrait: PersonPortrait;
  details: PersonDetail[];
};

export const contactEmail = "jvalverde@paribus.cl";

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
  teamLabel: string;
  founder: TeamMember;
  associates: TeamMember[];
  contact: {
    title: string;
    body: string;
    emailCta: string;
  };
  footer: { descriptor: string; location: string };
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
    teamLabel: "Equipo",
    founder: {
      name: "Jorge Valverde Carbonell",
      role: "Fundador",
      portrait: {
        src: "/images/jorge-valverde-cutout.png",
        width: 820,
        height: 1220,
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
    associates: [
      {
        name: "Alexis Salazar",
        role: "Consultor asociado",
        portrait: {
          src: "/images/alexis-salazar-cutout.png",
          width: 576,
          height: 576,
          alt: "Retrato de Alexis Salazar",
          verified: true,
          temporary: false,
          approvedForProduction: true,
          sourceUrl: null,
        },
        details: [
          {
            body: "Doctor (c) en Economía por Maastricht University y UNU-MERIT. Economista y Magíster en Economía por la Universidad de Chile, con un Magíster en Regulación y Mercados de la Competencia de la Barcelona School of Economics.",
            verified: true,
          },
          {
            body: "Cuenta con más de doce años de experiencia en consultoría económica, litigios y arbitraje, y libre competencia, asesorando a empresas y estudios jurídicos en Chile y Europa. Fue Coordinador Económico Anticarteles en la FNE y trabajó en Compass Lexecon (Bruselas) y Butelmann Consultores. Es socio fundador de SG Economics y docente de postgrado en la Universidad Adolfo Ibáñez.",
            verified: true,
          },
        ],
      },
    ],
    contact: {
      title: "Conversemos.",
      body: "Si estás evaluando un problema económico, financiero o regulatorio, podemos conversar.",
      emailCta: "Escríbenos",
    },
    footer: {
      descriptor: "Consultoría económica, financiera y regulatoria",
      location: "Santiago, Chile",
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
    teamLabel: "Team",
    founder: {
      name: "Jorge Valverde Carbonell",
      role: "Founder",
      portrait: {
        src: "/images/jorge-valverde-cutout.png",
        width: 820,
        height: 1220,
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
    associates: [
      {
        name: "Alexis Salazar",
        role: "Associate Consultant",
        portrait: {
          src: "/images/alexis-salazar-cutout.png",
          width: 576,
          height: 576,
          alt: "Portrait of Alexis Salazar",
          verified: true,
          temporary: false,
          approvedForProduction: true,
          sourceUrl: null,
        },
        details: [
          {
            body: "Doctoral candidate in Economics at Maastricht University and UNU-MERIT. Economist and MA in Economics from the University of Chile, with an MSc in Competition and Market Regulation from the Barcelona School of Economics.",
            verified: true,
          },
          {
            body: "He has over twelve years of experience across economic consulting, litigation and arbitration, and competition law, advising companies and law firms in Chile and Europe. He served as Anti-Cartel Economic Coordinator at Chile's competition authority (FNE) and worked at Compass Lexecon (Brussels) and Butelmann Consultores. He is a founding partner of SG Economics and teaches postgraduate courses at Universidad Adolfo Ibáñez.",
            verified: true,
          },
        ],
      },
    ],
    contact: {
      title: "Let’s talk.",
      body: "If you are considering an economic, financial or regulatory problem, we can discuss it.",
      emailCta: "Email us",
    },
    footer: {
      descriptor: "Economic, financial and regulatory consulting",
      location: "Santiago, Chile",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
