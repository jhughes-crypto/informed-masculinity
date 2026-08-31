/** Shared site content for Informed Masculinity / The Puberty Box */

export const SITE = {
  name: "Informed Masculinity",
  courseName: "The Puberty Box",
  tagline: "Education that builds autonomy.",
  orgLine: "Colorado 501(c)(3) nonprofit",
  email: "jennifer@informedmasculinity.org",
  website: "https://informedmasculinity.org",
  founder: "Dr. Jennifer Hughes",
  chatbotUrl: "https://chat.informedmasculinity.com",
} as const;

export const SERIES = {
  title: "First series",
  dates: "Sep 12, 13, 20 & 21, 2026",
  time: "10:00 AM MST",
  format: "Live on Google Meet",
} as const;

export const PRODUCTS = [
  {
    id: "single",
    name: "Single class",
    price: 48,
    note: "per seat · intro rate",
    bullets: [
      "One live Google Meet class",
      "Materials for that session",
      "Meet link to purchaser email",
    ],
  },
  {
    id: "foundations-complete",
    name: "Foundations complete",
    price: 172,
    note: "per seat · 4 classes · $43 / class",
    tractId: "foundations",
    featured: true,
    bullets: [
      "All 4 Foundations classes (grades 3–5)",
      "Handouts & caregiver guides",
      "Additional seats 20% off",
    ],
  },
  {
    id: "navigators-complete",
    name: "Navigators complete",
    price: 172,
    note: "per seat · 4 classes · $43 / class",
    tractId: "navigators",
    bullets: [
      "All 4 Navigators classes (grades 6–8)",
      "Handouts & caregiver guides",
      "Additional seats 20% off",
    ],
  },
  {
    id: "builders-complete",
    name: "Builders complete",
    price: 215,
    note: "per seat · 5 classes · $43 / class",
    tractId: "builders",
    bullets: [
      "All 5 Builders classes (grades 9–12)",
      "Fuller arc of modules",
      "Additional seats 20% off",
    ],
  },
] as const;

/**
 * National Sex Education Standards (3rd Edition) topic strands.
 * Source: Future of Sex Education (FoSE) Initiative.
 * https://www.futureofsexed.org/sex-ed-standards
 * Definitions are plain-language summaries for caregivers/educators (not legal text).
 */
export const NSES_STRANDS = {
  CHR: {
    code: "CHR",
    name: "Consent and Healthy Relationships",
    short: "Consent & relationships",
    definition:
      "Skills and knowledge for building respectful, safe relationships—including communication, boundaries, friendship skills, and what consent means at each grade level.",
  },
  AP: {
    code: "AP",
    name: "Anatomy and Physiology",
    short: "Anatomy & physiology",
    definition:
      "Medically accurate names and functions of the reproductive and sexual body systems, taught in age-appropriate depth so students can understand health information and ask informed questions.",
  },
  PD: {
    code: "PD",
    name: "Puberty and Adolescent Sexual Development",
    short: "Puberty & development",
    definition:
      "How bodies, brains, emotions, and social life change during puberty and adolescence—normalizing growth and helping students anticipate what is typical over time.",
  },
  GI: {
    code: "GI",
    name: "Gender Identity and Expression",
    short: "Gender identity",
    definition:
      "Understanding gender identity and expression as part of human diversity, with respect for self and others and an awareness of how gender messages shape expectations and well-being.",
  },
  SO: {
    code: "SO",
    name: "Sexual Orientation and Identity",
    short: "Sexual orientation",
    definition:
      "Age-appropriate understanding of sexual orientation and attraction, emphasizing respect, accurate language, and healthy identity development without stigma.",
  },
  SH: {
    code: "SH",
    name: "Sexual Health",
    short: "Sexual health",
    definition:
      "Practical sexual and reproductive health knowledge—hygiene, prevention, STIs, pregnancy, health care access, and habits that support wellness across the lifespan. Includes currently available methods and what is emerging in research, such as male contraceptives in clinical trials and female contraceptives in development.",
  },
  IV: {
    code: "IV",
    name: "Interpersonal Violence",
    short: "Interpersonal violence",
    definition:
      "Recognizing bullying, coercion, abuse, and other forms of interpersonal harm; knowing how to get help, support peers safely, and practice personal safety skills.",
  },
} as const;

export type NsesStrandCode = keyof typeof NSES_STRANDS;

/** NSES grade bands used by The Puberty Box tracts */
export const NSES_GRADE_BANDS = {
  "3-5": { label: "Grades 3–5", grades: "Grades 3–5", tract: "Foundations" },
  "6-8": { label: "Grades 6–8", grades: "Grades 6–8", tract: "Navigators" },
  "9-12": { label: "Grades 9–12", grades: "Grades 9–12", tract: "Builders" },
} as const;

export type NsesGradeBand = keyof typeof NSES_GRADE_BANDS;

export type CourseModule = {
  title: string;
  gradeBand: NsesGradeBand;
  strands: readonly NsesStrandCode[];
  nses: string;
  objectives: readonly string[];
};

export type Tract = {
  id: string;
  grades: string;
  name: string;
  blurb: string;
  gradeBand: NsesGradeBand;
  modules: readonly CourseModule[];
};

export const TRACTS: readonly Tract[] = [
  {
    id: "foundations",
    grades: "Grades 3–5",
    name: "Foundations",
    blurb: "The basics, delivered with warmth and clarity.",
    gradeBand: "3-5" as const,
    modules: [
      {
        title: "Body Changes & Puberty Basics",
        gradeBand: "3-5" as const,
        strands: ["PD", "AP"] as const,
        nses: "PD · AP · Grades 3–5 — puberty basics & introductory anatomy",
        objectives: [
          "Name common physical changes of puberty using medically accurate terms",
          "Describe puberty as a normal, expected stage of growth",
          "Identify at least one trusted adult to ask health questions",
        ],
      },
      {
        title: "How Puberty Changes our Behaviors",
        gradeBand: "3-5" as const,
        strands: ["PD", "CHR"] as const,
        nses: "PD · CHR · Grades 3–5 — emotions, behavior & decision-making",
        objectives: [
          "Describe how hormones can affect mood, energy, and behavior",
          "Recognize that emotional and behavioral shifts during puberty are common",
          "List simple, age-appropriate strategies for managing strong feelings",
        ],
      },
      {
        title: "Hygiene & Healthy Habits",
        gradeBand: "3-5" as const,
        strands: ["PD", "SH"] as const,
        nses: "PD · SH · Grades 3–5 — personal health, self-care & wellness",
        objectives: [
          "Describe daily hygiene practices that support health during puberty",
          "Explain why sleep, nutrition, and movement matter during growth",
          "Identify when a hygiene or health concern needs adult help",
        ],
      },
      {
        title: "Friendships, Bullying & Speaking Up",
        gradeBand: "3-5" as const,
        strands: ["CHR", "IV"] as const,
        nses: "CHR · IV · Grades 3–5 — healthy friendships, bullying & help-seeking",
        objectives: [
          "Describe qualities of a healthy friendship",
          "Identify examples of bullying, exclusion, and unkind behavior",
          "Discuss the bullying cycle and how to break it",
          "Practice ways to speak up, seek help, or support a peer safely",
        ],
      },
    ],
  },
  {
    id: "navigators",
    grades: "Grades 6–8",
    name: "Navigators",
    blurb: "Social dynamics, reproduction, and the bigger picture.",
    gradeBand: "6-8" as const,
    modules: [
      {
        title: "Social Media & Gaming Literacy",
        gradeBand: "6-8" as const,
        strands: ["CHR", "SH"] as const,
        nses: "CHR · SH · Grades 6–8 — media literacy, online safety & self-image",
        objectives: [
          "Identify how media and games can shape body image and relationships",
          "Distinguish reliable health information from online misinformation",
          "Describe strategies for safer online communication and personal boundaries",
        ],
      },
      {
        title: "Reproduction happens in male bodies",
        gradeBand: "6-8" as const,
        strands: ["AP", "PD"] as const,
        nses: "AP · PD · Grades 6–8 — male reproductive anatomy & function",
        objectives: [
          "Name main parts of the male reproductive system with accurate terms",
          "Describe basic functions related to puberty and sperm production",
          "Correct common myths about male reproduction at an age-appropriate level",
        ],
      },
      {
        title: "Reproduction happens in female bodies",
        gradeBand: "6-8" as const,
        strands: ["AP", "PD"] as const,
        nses: "AP · PD · Grades 6–8 — female reproductive anatomy & menstruation",
        objectives: [
          "Name main parts of the female reproductive system with accurate terms",
          "Describe menstruation and ovulation in clear, age-appropriate language",
          "Correct common myths about female reproduction and periods",
        ],
      },
      {
        title: "Identity, Attraction & Respect",
        gradeBand: "6-8" as const,
        strands: ["GI", "SO", "CHR"] as const,
        nses: "GI · SO · CHR · Grades 6–8 — identity, attraction, respect & boundaries",
        objectives: [
          "Define identity and attraction in age-appropriate terms",
          "Describe how to treat others with respect across differences",
          "Practice communication that honors personal and peer boundaries",
        ],
      },
    ],
  },
  {
    id: "builders",
    grades: "Grades 9–12",
    name: "Builders",
    blurb: "Harder conversations—handled head-on, with care.",
    gradeBand: "9-12" as const,
    modules: [
      {
        title: "Consent",
        gradeBand: "9-12" as const,
        strands: ["CHR", "IV"] as const,
        nses: "CHR · IV · Grades 9–12 — consent, communication & personal safety",
        objectives: [
          "Define consent as clear, ongoing, freely given, and reversible",
          "Identify situations where consent cannot be given or is not valid",
          "Demonstrate respectful ways to ask for, give, and refuse consent",
        ],
      },
      {
        title: "Contraception and STIs",
        gradeBand: "9-12" as const,
        strands: ["SH", "AP"] as const,
        nses: "SH · AP · Grades 9–12 — pregnancy prevention, STIs & risk reduction",
        objectives: [
          "Identify common methods of pregnancy prevention and how they work at a high level",
          "Describe male contraceptives currently in clinical trials and female contraceptives in development",
          "Describe what STIs are and how they can and cannot be transmitted",
          "List risk-reduction strategies and when to seek confidential health care",
        ],
      },
      {
        title: "Pregnancy and childbirth",
        gradeBand: "9-12" as const,
        strands: ["SH", "AP"] as const,
        nses: "SH · AP · Grades 9–12 — pregnancy, prenatal development & birth",
        objectives: [
          "Describe the basic stages of pregnancy and prenatal development",
          "Explain childbirth in medically accurate, non-graphic terms",
          "Identify why prenatal care matters and where to find trusted information",
        ],
      },
      {
        title: "Healthy Masculinity",
        gradeBand: "9-12" as const,
        strands: ["CHR", "GI"] as const,
        nses: "CHR · GI · Grades 9–12 — gender socialization, mental health & relationships",
        objectives: [
          "Identify harmful versus healthy messages about masculinity",
          "Describe how gender stereotypes can affect mental health and relationships",
          "Practice skills for emotional awareness, empathy, and peer support",
        ],
      },
      {
        title: "Lifelong Reproductive Health",
        gradeBand: "9-12" as const,
        strands: ["SH", "AP"] as const,
        nses: "SH · AP · Grades 9–12 — reproductive wellness across the lifespan",
        objectives: [
          "Describe reproductive health needs that continue beyond adolescence",
          "Identify when and how to seek routine reproductive and sexual health care",
          "List personal health habits that support long-term wellness",
          "Discuss common environmental toxicants that affect male reproductive health",
        ],
      },
    ],
  },
];

export const ALL_MODULES = TRACTS.flatMap((t) =>
  t.modules.map((m) => ({
    ...m,
    tractId: t.id,
    tractName: t.name,
    tractGrades: t.grades,
  })),
);

export const MODULE_COUNT = ALL_MODULES.length;

export function chatbotHref(pageSlug = "site") {
  const base = "https://chat.informedmasculinity.com";
  const q = new URLSearchParams({
    utm_source: "website",
    utm_medium: "referral",
    utm_content: pageSlug,
  });
  return `${base}?${q.toString()}`;
}

export function calcSeatsTotal(unitPrice: number, seats: number) {
  const n = Math.max(1, Math.min(10, Math.floor(seats)));
  const list = unitPrice * n;
  const savings = n > 1 ? unitPrice * 0.2 * (n - 1) : 0;
  return { seats: n, list, savings, total: list - savings };
}

export const RESOURCES: ReadonlyArray<{
  category: string;
  items: ReadonlyArray<{
    name: string;
    href: string;
    description: string;
    secondary?: ReadonlyArray<{ label: string; href: string }>;
  }>;
}> = [
  {
    category: "Men’s mental health & support",
    items: [
      {
        name: "HeadsUpGuys",
        href: "https://headsupguys.org",
        description:
          "Practical tools, articles, and support for men’s mental health—built for guys who want clear next steps.",
      },
    ],
  },
  {
    category: "Reproductive health & education",
    items: [
      {
        name: "Talk with Turek (Paul Turek, MD)",
        href: "https://www.theturekclinic.com/talk-with-turek-podcast/",
        description:
          "Conversations on men’s reproductive and sexual health from a leading urologist and educator.",
      },
      {
        name: "Male Contraceptive Initiative",
        href: "https://www.malecontraceptive.org/",
        description:
          "Nonprofit funding and advocacy for research and development of novel, non-hormonal, reversible male contraceptives.",
      },
    ],
  },
  {
    category: "Healthy masculinity & emotional intelligence",
    items: [
      {
        name: "Man Enough (Justin Baldoni)",
        href: "https://manenough.com",
        description: "Media and conversation about redefining masculinity with honesty and care.",
        secondary: [
          { label: "Podcast", href: "https://manenough.com/podcast" },
          { label: "Book", href: "https://manenough.com" },
        ],
      },
      {
        name: "Boys Will Be Human (Justin Baldoni)",
        href: "https://boyswillbehuman.com/",
        description:
          "A real-talk, self-esteem-building guidebook that helps boys ages 11 and up embrace their feelings and fears instead of repressing them.",
      },
      {
        name: "Equimundo",
        href: "https://www.equimundo.org/",
        description:
          "Center for Masculinities and Social Justice—research and programs engaging men and boys in gender equality and healthier masculinities.",
      },
      {
        name: "Nation (Terry Pratchett)",
        href: "https://en.wikipedia.org/wiki/Nation_(novel)",
        description:
          "A standalone novel about survival, identity, and building a community after catastrophe—rich ground for conversations about responsibility, culture, and becoming a man.",
      },
    ],
  },
  {
    category: "Research & policy for boys and men",
    items: [
      {
        name: "American Institute for Boys and Men",
        href: "https://aibm.org/",
        description:
          "Nonpartisan research and policy organization focused on the well-being of boys and men across education, health, work, and family life.",
      },
    ],
  },
];
