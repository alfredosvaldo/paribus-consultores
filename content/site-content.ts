export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export type PracticeIconKind = "markets" | "competition" | "tax" | "minerals" | "legislation" | "fdi" | "esg";
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

export type NewsItem = { date: string; title: string; summary: string; href?: string };

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
  news: { title: string; intro: string; empty: string; items: NewsItem[] };
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
      { label: "Equipo", href: "#equipo" },
      { label: "Noticias", href: "/news" },
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
        {
          title: "Economía ambiental y finanzas sostenibles",
          description:
            "Análisis económico ambiental y de finanzas sostenibles, incluyendo valoración de externalidades, riesgos climáticos y estructuración de instrumentos de financiamiento verde.",
          icon: "esg",
        },
      ],
    },
    teamLabel: "Equipo",
    founder: {
      name: "Jorge Valverde Carbonell",
      role: "Fundador",
      portrait: {
        src: "/images/jorge-valverde-cutout.png",
        width: 576,
        height: 576,
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
      {
        name: "Sofía Aroca",
        role: "Consultora asociada",
        portrait: {
          src: "/images/sofia-aroca-cutout.png",
          width: 576,
          height: 576,
          alt: "Retrato de Sofía Aroca",
          verified: true,
          temporary: false,
          approvedForProduction: true,
          sourceUrl: null,
        },
        details: [
          {
            body: "Sofía Aroca es economista de la Universidad de Chile, con un MSc en Environment and Development de la London School of Economics, becaria Chevening. Trabaja en el cruce entre economía, naturaleza y biodiversidad, ayudando a que el valor de los ecosistemas se vuelva parte de las decisiones económicas y financieras de empresas, fondos y organismos públicos.",
            verified: true,
          },
          {
            body: "Ha trabajado con el Centro de Medio Ambiente de SOFOFA, con el Fondo Naturaleza Chile y con WWF en el estudio de instrumentos de financiamiento para la conservación. Ha realizado estudios de impacto económico regional para el Puerto de Valparaíso, Colún y Hyst.",
            verified: true,
          },
          {
            body: "También ha trabajado en el Ministerio de Hacienda, donde fue Secretaria Técnica del Comité de Capital Natural, por lo que recibió el Natural Capital Young Leaders Prize del Natural Capital Project de la Universidad de Stanford. Actualmente investiga la valoración del capital natural marino en el Grantham Research Institute de LSE.",
            verified: true,
          },
        ],
      },
      {
        name: "George Lambeth",
        role: "Consultor asociado",
        portrait: {
          src: "/images/george-lambeth-cutout.png",
          width: 576,
          height: 576,
          alt: "Retrato de George Lambeth",
          verified: true,
          temporary: false,
          approvedForProduction: true,
          sourceUrl: null,
        },
        details: [
          {
            body: "George Lambeth es abogado de la Universidad de Chile, LL.M. por UC Berkeley Law y candidato a Doctor en Derecho por la misma universidad, con formación de posgrado en análisis económico en la Facultad de Economía y Negocios de la Universidad de Chile.",
            verified: true,
          },
          {
            body: "Trabaja en la intersección entre regulación económica, derecho público económico, finanzas públicas, inversión, infraestructura y diseño institucional. Cuenta con más de diez años de experiencia en el sector público chileno, habiéndose desempeñado en el Ministerio de Hacienda, la Dirección de Presupuestos (Dipres) y la Fiscalía Nacional Económica (FNE), donde participó en el diseño, análisis e implementación de reformas regulatorias, financieras, presupuestarias y de libre competencia.",
            verified: true,
          },
          {
            body: "En el Ministerio de Hacienda fue asesor en materias de regulación económica, coordinación interministerial e inversión, participando en agendas de modernización regulatoria, permisos sectoriales, facilitación de proyectos estratégicos y coherencia institucional. Previamente, en la Dipres, trabajó en análisis de finanzas públicas, empresas del Estado, infraestructura y riesgos de implementación fiscal e institucional.",
            verified: true,
          },
          {
            body: "Fue director de Empresa Portuaria Valparaíso, donde participó en materias de gobierno corporativo, concesiones, continuidad operacional, riesgos contractuales y diseño competitivo de proyectos de expansión portuaria.",
            verified: true,
          },
        ],
      },
      {
        name: "Francisco Picón",
        role: "Consultor asociado",
        portrait: {
          src: "/images/francisco-picon-cutout.png",
          width: 576,
          height: 576,
          alt: "Retrato de Francisco Picón",
          verified: true,
          temporary: false,
          approvedForProduction: true,
          sourceUrl: null,
        },
        details: [
          {
            body: "Francisco Picón es abogado de la Pontificia Universidad Católica de Chile. Cuenta con un Magíster en Derecho Constitucional de la misma casa de estudios y un Diploma en Estrategias Políticas para Políticas Públicas de la Universidad de Chile. Actualmente reside en Inglaterra, donde cursa el Master of Public Policy en la Blavatnik School of Government de la Universidad de Oxford, como becario Luksic.",
            verified: true,
          },
          {
            body: "Ha trabajado buena parte de su carrera en el sector público. Fue Comisionado de Inversiones de InvestChile para el Golfo con base en Riad, Arabia Saudita, y antes jefe de gabinete y abogado senior de la misma agencia. En el sector privado se desempeñó como consultor senior de asuntos públicos en Extend, donde asesoró a empresas y asociaciones gremiales de industrias reguladas como farmacéutica, fintech y recursos naturales, en diseño regulatorio y estrategias de vinculación con el Congreso y el Ejecutivo.",
            verified: true,
          },
          {
            body: "Durante el último año ha asesorado a empresas, inversionistas y organismos públicos en materias regulatorias y de inversión extranjera, en sectores como minería, energía, desalación, hidrógeno verde e infraestructura digital.",
            verified: true,
          },
        ],
      },
      {
        name: "Sergio Henríquez",
        role: "Consultor externo",
        portrait: {
          src: "/images/sergio-henriquez-cutout.png",
          width: 576,
          height: 576,
          alt: "Retrato de Sergio Henríquez",
          verified: true,
          temporary: false,
          approvedForProduction: true,
          sourceUrl: null,
        },
        details: [
          {
            body: "Sergio Henríquez es abogado de la Universidad de Chile y Magíster en Derecho Tributario de la misma casa de estudios. Cuenta con más de 15 años de experiencia en materia tributaria, desarrollada tanto en el sector público como en el ejercicio privado.",
            verified: true,
          },
          {
            body: "Fue Director de Grandes Contribuyentes del Servicio de Impuestos Internos (SII), dirección encargada de la fiscalización de los principales grupos empresariales del país. Con anterioridad se desempeñó en el Ministerio de Hacienda como asesor y luego Coordinador de Política Tributaria y como Jefe de Gabinete de la Subsecretaría de Hacienda. También fue Jefe de Gabinete del Ministerio de Vivienda y Urbanismo.",
            verified: true,
          },
          {
            body: "En el ámbito privado ejerció como abogado tributario en Sapag y González y en Bofill Escobar Silva, y como Gerente Senior en KPMG, especializándose en tributación inmobiliaria e internacional. Actualmente es abogado Of Counsel en el estudio Valdés y Munita.",
            verified: true,
          },
          {
            body: "Ha sido, además, docente de cursos de postgrado en derecho tributario en la Universidad Adolfo Ibáñez y en la Pontificia Universidad Católica de Valparaíso.",
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
    news: {
      title: "Noticias",
      intro: "Publicaciones, participación en medios y novedades de Paribus.",
      empty: "Pronto publicaremos nuestras primeras noticias.",
      // Newest first. date is ISO (YYYY-MM-DD); href is optional (article URL or a PDF in public/news/).
      items: [
        {
          date: "2026-09-26",
          title: "El Mercurio: Jorge Valverde sobre el empleo que generará la inversión aprobada en 2026",
          summary:
            "En la cobertura sobre el récord de inversiones con aprobación ambiental, nuestro fundador estima que la demanda laboral de estos proyectos se notaría a fines de 2027, y con mayor seguridad a principios de 2028.",
          href: "/news/2026-09-26-el-mercurio-jorge-valverde.pdf",
        },
      ],
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
      { label: "Team", href: "#equipo" },
      { label: "News", href: "/news" },
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
        {
          title: "Environmental economics and sustainable finance",
          description:
            "Environmental economic analysis and sustainable finance, including externality valuation, climate risk assessment and the structuring of green financing instruments.",
          icon: "esg",
        },
      ],
    },
    teamLabel: "Team",
    founder: {
      name: "Jorge Valverde Carbonell",
      role: "Founder",
      portrait: {
        src: "/images/jorge-valverde-cutout.png",
        width: 576,
        height: 576,
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
      {
        name: "Sofía Aroca",
        role: "Associate Consultant",
        portrait: {
          src: "/images/sofia-aroca-cutout.png",
          width: 576,
          height: 576,
          alt: "Portrait of Sofía Aroca",
          verified: true,
          temporary: false,
          approvedForProduction: true,
          sourceUrl: null,
        },
        details: [
          {
            body: "Sofía Aroca is an economist from the Universidad de Chile, with an MSc in Environment and Development from the London School of Economics as a Chevening scholar. She works at the intersection of economics, nature and biodiversity, helping the value of ecosystems become part of the economic and financial decisions of companies, funds and public agencies.",
            verified: true,
          },
          {
            body: "She has worked with SOFOFA's Centre for the Environment, with Fondo Naturaleza Chile and with WWF studying financing instruments for conservation. She has carried out regional economic impact studies for the Port of Valparaíso, Colún and Hyst.",
            verified: true,
          },
          {
            body: "She has also worked at Chile's Ministry of Finance, where she was Technical Secretary of the Natural Capital Committee, for which she received the Natural Capital Young Leaders Prize from Stanford University's Natural Capital Project. She is currently researching the valuation of marine natural capital at LSE's Grantham Research Institute.",
            verified: true,
          },
        ],
      },
      {
        name: "George Lambeth",
        role: "Associate Consultant",
        portrait: {
          src: "/images/george-lambeth-cutout.png",
          width: 576,
          height: 576,
          alt: "Portrait of George Lambeth",
          verified: true,
          temporary: false,
          approvedForProduction: true,
          sourceUrl: null,
        },
        details: [
          {
            body: "George Lambeth is a lawyer from the Universidad de Chile, holds an LL.M. from UC Berkeley Law and is a doctoral candidate in Law at the same university, with postgraduate training in economic analysis at the Universidad de Chile's School of Economics and Business.",
            verified: true,
          },
          {
            body: "He works at the intersection of economic regulation, public economic law, public finance, investment, infrastructure and institutional design. He has more than ten years of experience in the Chilean public sector, having served at the Ministry of Finance, the Budget Office (Dipres) and the National Economic Prosecutor's Office (FNE), where he took part in the design, analysis and implementation of regulatory, financial, budgetary and competition reforms.",
            verified: true,
          },
          {
            body: "At the Ministry of Finance he advised on economic regulation, inter-ministerial coordination and investment, contributing to agendas on regulatory modernisation, sectoral permitting, the facilitation of strategic projects and institutional coherence. Previously, at Dipres, he worked on public finance analysis, state-owned enterprises, infrastructure and fiscal and institutional implementation risks.",
            verified: true,
          },
          {
            body: "He served as a director of Empresa Portuaria Valparaíso, where he worked on corporate governance, concessions, operational continuity, contractual risk and the competitive design of port expansion projects.",
            verified: true,
          },
        ],
      },
      {
        name: "Francisco Picón",
        role: "Associate Consultant",
        portrait: {
          src: "/images/francisco-picon-cutout.png",
          width: 576,
          height: 576,
          alt: "Portrait of Francisco Picón",
          verified: true,
          temporary: false,
          approvedForProduction: true,
          sourceUrl: null,
        },
        details: [
          {
            body: "Francisco Picón is a lawyer from the Pontificia Universidad Católica de Chile. He holds a Master's in Constitutional Law from the same university and a Diploma in Political Strategies for Public Policy from the Universidad de Chile. He currently lives in England, where he is reading for the Master of Public Policy at the University of Oxford's Blavatnik School of Government as a Luksic scholar.",
            verified: true,
          },
          {
            body: "He has spent much of his career in the public sector. He served as InvestChile's Investment Commissioner for the Gulf, based in Riyadh, Saudi Arabia, and previously as the agency's chief of staff and senior lawyer. In the private sector he was a senior public affairs consultant at Extend, advising companies and trade associations in regulated industries such as pharmaceuticals, fintech and natural resources on regulatory design and engagement strategies with Congress and the Executive.",
            verified: true,
          },
          {
            body: "Over the past year he has advised companies, investors and public agencies on regulatory and foreign investment matters in sectors such as mining, energy, desalination, green hydrogen and digital infrastructure.",
            verified: true,
          },
        ],
      },
      {
        name: "Sergio Henríquez",
        role: "External Consultant",
        portrait: {
          src: "/images/sergio-henriquez-cutout.png",
          width: 576,
          height: 576,
          alt: "Portrait of Sergio Henríquez",
          verified: true,
          temporary: false,
          approvedForProduction: true,
          sourceUrl: null,
        },
        details: [
          {
            body: "Sergio Henríquez is a lawyer from the Universidad de Chile and holds a Master's in Tax Law from the same university. He has more than 15 years of experience in tax matters, gained both in the public sector and in private practice.",
            verified: true,
          },
          {
            body: "He served as Director of Large Taxpayers at Chile's tax authority (SII), the division responsible for auditing the country's largest business groups. He previously worked at the Ministry of Finance as an adviser and later Coordinator of Tax Policy, and as Chief of Staff to the Deputy Ministry of Finance. He was also Chief of Staff at the Ministry of Housing and Urban Development.",
            verified: true,
          },
          {
            body: "In private practice he worked as a tax lawyer at Sapag y González and at Bofill Escobar Silva, and as a Senior Manager at KPMG, specialising in real estate and international taxation. He is currently Of Counsel at the firm Valdés y Munita.",
            verified: true,
          },
          {
            body: "He has also taught postgraduate courses in tax law at Universidad Adolfo Ibáñez and at the Pontificia Universidad Católica de Valparaíso.",
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
    news: {
      title: "News",
      intro: "Publications, media appearances and updates from Paribus.",
      empty: "Our first news items are coming soon.",
      items: [
        {
          date: "2026-09-26",
          title: "El Mercurio: Jorge Valverde on the jobs from investment approved in 2026",
          summary:
            "In coverage of this year's record in environmentally approved investment, our founder estimates that the resulting demand for labour would be felt by late 2027, and more reliably in early 2028. Article in Spanish.",
          href: "/news/2026-09-26-el-mercurio-jorge-valverde.pdf",
        },
      ],
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
