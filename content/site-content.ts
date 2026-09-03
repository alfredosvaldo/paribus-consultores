export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export type PracticeIconKind = "markets" | "competition" | "tax" | "minerals" | "legislation" | "fdi";
type PracticeArea = { title: string; description: string; icon: PracticeIconKind };
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
      title: "Paribus. Rigor para decisiones complejas.",
      body: "Estructuramos problemas complejos, evaluamos escenarios y traducimos evidencia técnica en implicancias concretas.",
      primaryCta: "Áreas de práctica",
      secondaryCta: "Conversemos",
    },
    statement: {
      title: "Porque en la práctica, no todo permanece constante.",
      body: "Combinamos economía, finanzas y análisis regulatorio para estructurar problemas complejos, ordenar la evidencia, evaluar escenarios y traducir el análisis en implicancias concretas para la decisión.",
    },
    practices: {
      title: "Áreas de práctica",
      items: [
        {
          title: "Economía aplicada y modelamiento de mercados",
          description:
            "Análisis económico aplicado y modelamiento de mercados para comprender incentivos, escenarios y efectos sobre empresas e instituciones.",
          icon: "markets",
        },
        {
          title: "Libre competencia, litigios y arbitrajes",
          description:
            "Análisis económico para procesos de libre competencia, litigios y arbitrajes, ante autoridades, tribunales y contrapartes.",
          icon: "competition",
        },
        {
          title: "Tributación y finanzas públicas",
          description:
            "Evaluación y diseño de política tributaria y fiscal, incluyendo estimación de impactos y análisis de financiamiento público.",
          icon: "tax",
        },
        {
          title: "Economía de minerales y evaluación de proyectos",
          description:
            "Economía de minerales y evaluación de proyectos, desde tributación y royalty hasta cadenas de valor y transición energética.",
          icon: "minerals",
        },
        {
          title: "Regulación económica y análisis legislativo",
          description:
            "Análisis económico-regulatorio y legislativo para anticipar, evaluar y responder a cambios en marcos normativos y sectores regulados.",
          icon: "legislation",
        },
        {
          title: "Fomento y atracción de FDI",
          description:
            "Estrategias de fomento y atracción de inversión extranjera directa, incluyendo análisis de competitividad, incentivos y posicionamiento de proyectos ante inversionistas.",
          icon: "fdi",
        },
      ],
    },
    teamLabel: "Equipo",
    founder: {
      name: "Jorge Valverde Carbonell",
      role: "Fundador",
      portrait: {
        src: "/images/jorge-valverde-cutout.png",
        width: 2048,
        height: 2048,
        alt: "Retrato de Jorge Valverde Carbonell",
        verified: true,
        temporary: false,
        approvedForProduction: true,
        sourceUrl: null,
      },
      details: [
        {
          body: "Jorge Valverde-Carbonell es doctor en Economía por la Universidad de Maastricht y el UNU-MERIT (Países Bajos) y magíster en Análisis Económico de la Universidad de Chile. Cuenta con más de 15 años como consultor económico senior, ha asesorado a los principales organismos multilaterales —el Banco Interamericano de Desarrollo (BID), la CEPAL, la OCDE, la UNCTAD y el Banco de Desarrollo de América Latina (CAF)—, a ministerios y organismos de gobierno, y a empresas e instituciones líderes como Codelco y Déficit Cero de la Cámara Chilena de la Construcción.",
          verified: true,
        },
        {
          body: "Sus trabajos abarcan un espectro amplio de materias: competitividad y desarrollo productivo, tributación minera y royalty, transición energética y minerales críticos, cadenas globales de valor, política fiscal y financiamiento de la vivienda, entre otras.",
          verified: true,
        },
        {
          body: "A ello suma una perspectiva única de policymaker, ya que fue Asesor Económico Senior en el Ministerio de Hacienda de Chile, lo que le permite traducir análisis técnicos complejos en recomendaciones concretas de política y estrategia para la alta dirección.",
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
      title: "Paribus. Rigour for complex decisions.",
      body: "We structure complex problems, assess scenarios and turn technical evidence into concrete implications.",
      primaryCta: "Areas of Practice",
      secondaryCta: "Contact",
    },
    statement: {
      title: "Because in practice, nothing stays constant.",
      body: "We combine economics, finance and regulatory analysis to structure complex problems, organise the evidence, assess scenarios and translate analysis into concrete implications for decision-making.",
    },
    practices: {
      title: "Areas of Practice",
      items: [
        {
          title: "Applied economics and market modelling",
          description:
            "Applied economic analysis and market modelling to understand incentives, scenarios and their effects on companies and institutions.",
          icon: "markets",
        },
        {
          title: "Competition, litigation and arbitration",
          description:
            "Economic analysis for competition proceedings, litigation and arbitration, before authorities, tribunals and counterparties.",
          icon: "competition",
        },
        {
          title: "Taxation and public finance",
          description:
            "Assessment and design of tax and fiscal policy, including impact estimation and public financing analysis.",
          icon: "tax",
        },
        {
          title: "Mineral economics and project evaluation",
          description:
            "Mineral economics and project evaluation, spanning taxation and royalties to value chains and the energy transition.",
          icon: "minerals",
        },
        {
          title: "Economic regulation and legislative analysis",
          description:
            "Economic and regulatory analysis, including legislative review, to anticipate, assess and respond to changes in regulatory frameworks and regulated sectors.",
          icon: "legislation",
        },
        {
          title: "FDI promotion and attraction",
          description:
            "Strategies to promote and attract foreign direct investment, including competitiveness analysis, incentive design and positioning of projects for investors.",
          icon: "fdi",
        },
      ],
    },
    teamLabel: "Team",
    founder: {
      name: "Jorge Valverde Carbonell",
      role: "Founder",
      portrait: {
        src: "/images/jorge-valverde-cutout.png",
        width: 2048,
        height: 2048,
        alt: "Portrait of Jorge Valverde Carbonell",
        verified: true,
        temporary: false,
        approvedForProduction: true,
        sourceUrl: null,
      },
      details: [
        {
          body: "Jorge Valverde-Carbonell holds a PhD in Economics from Maastricht University and UNU-MERIT (Netherlands) and an MA in Economic Analysis from the University of Chile. He has more than 15 years of experience as a senior economic consultant, having advised leading multilateral organisations —the Inter-American Development Bank (IDB), ECLAC, the OECD, UNCTAD and the Development Bank of Latin America (CAF)—, government ministries and agencies, and leading companies and institutions such as Codelco and Déficit Cero at the Cámara Chilena de la Construcción.",
          verified: true,
        },
        {
          body: "His work spans a broad range of topics: competitiveness and productive development, mining taxation and royalties, energy transition and critical minerals, global value chains, fiscal policy and housing finance, among others.",
          verified: true,
        },
        {
          body: "He brings a distinctive policymaker perspective as well, having served as Senior Economic Advisor at Chile's Ministry of Finance, which allows him to translate complex technical analysis into concrete policy and strategy recommendations for senior leadership.",
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
