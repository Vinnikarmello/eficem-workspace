// Timeline data — edit here (or translate) without touching the components.
// IMPORTANT: the milestones below are clearly marked PLACEHOLDERS. Replace period,
// title, description and photo with the real, documented information from the team.
// Never publish dates, results or awards that were not confirmed.

export const TIMELINE_CONTENT = {
  eyebrow: "Conquistas",
  title: "Uma trajetória construída na prática.",
  subtitle: "Cada etapa representa uma evolução do nosso projeto.",
  regionLabel: "Linha do tempo da EFICEM",
  prevLabel: "Marco anterior",
  nextLabel: "Próximo marco",
  goToLabel: "Ir para o marco",
  highlightLabel: "Destaque",
  placeholderBadge: "Dados a confirmar",
  photoPlaceholder: "Foto a inserir",
};

export type TimelineItem = {
  id: string;
  // Year or period, e.g. "2024" (placeholder text until confirmed).
  period: string;
  title: string;
  description: string;
  // Optional photo (e.g. "/images/timeline/shell-2024.jpg"). Use a 16:10 landscape image.
  photo?: { src: string; alt: string };
  // Highlights the card (e.g. documented Shell Eco-marathon participations).
  highlight?: boolean;
  // Set to false once the data is real and confirmed.
  placeholder?: boolean;
};

export const TIMELINE: TimelineItem[] = [
  {
    id: "shell-1",
    period: "Ano a definir",
    title: "Shell Eco-marathon",
    description:
      "Espaço reservado para a participação documentada da EFICEM. Inserir edição, local e resultados confirmados pela equipe.",
    highlight: true,
    placeholder: true,
  },
  {
    id: "shell-2",
    period: "Ano a definir",
    title: "Shell Eco-marathon",
    description:
      "Espaço reservado para outra participação documentada. Inserir edição, local e resultados confirmados pela equipe.",
    highlight: true,
    placeholder: true,
  },
  {
    id: "marco-3",
    period: "Período a definir",
    title: "Marco da trajetória",
    description:
      "Espaço reservado para um acontecimento real fornecido pela equipe: início do projeto, nova versão do veículo ou outra etapa.",
    placeholder: true,
  },
  {
    id: "marco-4",
    period: "Período a definir",
    title: "Marco da trajetória",
    description:
      "Espaço reservado para uma etapa de desenvolvimento, construção ou validação do veículo.",
    placeholder: true,
  },
  {
    id: "marco-5",
    period: "Período a definir",
    title: "Marco da trajetória",
    description:
      "Espaço reservado para um evento, parceria, visita técnica ou conquista documentada.",
    placeholder: true,
  },
  {
    id: "marco-6",
    period: "Período a definir",
    title: "Marco da trajetória",
    description:
      "Espaço reservado para a próxima etapa do projeto. Edite este cartão em src/data/timeline.ts.",
    placeholder: true,
  },
];
