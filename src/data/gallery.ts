// Gallery data — edit here (or translate) without touching the components.
// To use a real photo, set `src` (e.g. "/images/gallery/oficina-01.jpg") and write a
// descriptive `alt`. Items without `src` are shown as clearly identified placeholders
// and are skipped by the enlarged viewer. Use only real EFICEM photos.

export const GALLERY_CONTENT = {
  eyebrow: "Galeria",
  title: "EFICEM na prática",
  subtitle: "Da ideia à execução. Da oficina à competição.",
  cta: { label: "Seja um parceiro", href: "#contato" },
  placeholderLabel: "Foto a inserir",
  openLabel: "Ampliar fotografia",
  dialogLabel: "Fotografia ampliada",
  closeLabel: "Fechar",
  prevLabel: "Fotografia anterior",
  nextLabel: "Próxima fotografia",
};

export type GalleryItem = {
  id: string;
  // Lime tag shown on the photo. Keep it compatible with the image.
  tag: string;
  // White caption.
  title: string;
  alt: string;
  src: string;
  // Tailwind classes that define the editorial composition (mobile + desktop).
  layout: string;
};

export const GALLERY: GalleryItem[] = [
  {
    id: "construcao",
    tag: "Construção",
    title: "Construção do veículo",
    alt: "Equipe EFICEM construindo o veículo na oficina",
    src: "",
    layout: "col-span-2 aspect-[16/10] md:col-span-7 md:row-span-5 md:aspect-auto",
  },
  {
    id: "montagem",
    tag: "Montagem",
    title: "Montagem de componentes",
    alt: "Integrantes da EFICEM montando componentes do veículo",
    src: "",
    layout: "col-span-1 aspect-[4/5] md:col-span-5 md:row-span-3 md:aspect-auto",
  },
  {
    id: "oficina",
    tag: "Oficina",
    title: "Atividades na oficina",
    alt: "Atividades da equipe EFICEM na oficina",
    src: "",
    layout: "col-span-1 aspect-[4/5] md:col-span-5 md:row-span-2 md:aspect-auto",
  },
  {
    id: "testes",
    tag: "Testes",
    title: "Testes e validações",
    alt: "Testes e validações do veículo da EFICEM",
    src: "",
    layout: "col-span-2 aspect-[16/10] md:col-span-5 md:row-span-4 md:aspect-auto",
  },
  {
    id: "visitas",
    tag: "Visitas técnicas",
    title: "Visitas técnicas",
    alt: "Equipe EFICEM em visita técnica",
    src: "",
    layout: "col-span-1 aspect-[3/4] md:col-span-4 md:row-span-4 md:aspect-auto",
  },
  {
    id: "reunioes",
    tag: "Desenvolvimento",
    title: "Reuniões de desenvolvimento",
    alt: "Reunião de desenvolvimento da equipe EFICEM",
    src: "",
    layout: "col-span-1 aspect-[3/4] md:col-span-3 md:row-span-4 md:aspect-auto",
  },
  {
    id: "bastidores",
    tag: "Bastidores",
    title: "Bastidores da equipe",
    alt: "Bastidores da equipe EFICEM",
    src: "",
    layout: "col-span-2 aspect-[4/3] md:col-span-4 md:row-span-3 md:aspect-auto",
  },
  {
    id: "eventos",
    tag: "Competição",
    title: "Eventos e competições",
    alt: "EFICEM participando de evento ou competição",
    src: "",
    layout: "col-span-2 aspect-[21/9] md:col-span-8 md:row-span-3 md:aspect-auto",
  },
];
