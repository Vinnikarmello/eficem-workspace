import { PencilRuler, Wrench, Zap, type LucideIcon } from "lucide-react";

// Institutional texts — edit here (or translate) without touching the components.

export const PROJECT_CONTENT = {
  eyebrow: "O projeto",
  title: "Engenharia que vai além da teoria.",
  text: "Na EFICEM, transformamos conhecimento acadêmico em experiência prática. Nosso trabalho reúne estudantes de diferentes áreas em torno de um objetivo comum: desenvolver soluções de engenharia, aprimorar sistemas veiculares e aprender por meio de desafios reais.",
  cta: { label: "Conheça nosso projeto", href: "#equipe" },
  // To use the official photo, set `src` (e.g. "/images/eficem-projeto.jpg").
  photo: {
    src: "" as string,
    alt: "Equipe EFICEM trabalhando no veículo",
    placeholderLabel: "Foto ampla do veículo ou da equipe · substituir pela imagem oficial",
  },
};

export type FocusArea = {
  n: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const FOCUS_AREAS: FocusArea[] = [
  {
    n: "01",
    title: "Projeto",
    description: "Planejamento, modelagem e desenvolvimento técnico.",
    icon: PencilRuler,
  },
  {
    n: "02",
    title: "Construção",
    description: "Prototipagem, montagem e integração de componentes.",
    icon: Wrench,
  },
  {
    n: "03",
    title: "Eficiência",
    description: "Estudo e aprimoramento de soluções voltadas à eficiência energética.",
    icon: Zap,
  },
];

export const TEAM_CONTENT = {
  eyebrow: "A equipe",
  title: "Uma equipe. Muitas especialidades. Um objetivo.",
  subtitle: "Conhecimento compartilhado, colaboração e engenharia aplicada.",
  closing: "Diferentes talentos. Uma construção coletiva.",
  profileLabel: "Perfil profissional",
  placeholder: {
    name: "Nome completo",
    role: "Cargo ou área de atuação",
    photo: "Foto",
  },
};
