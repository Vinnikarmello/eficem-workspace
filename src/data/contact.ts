// Contact, sponsors CTA and footer data — edit here (or translate) without touching the components.
// IMPORTANT: only fill in OFFICIAL information provided by the team. Empty values are hidden
// from the footer and shown as "channel to be announced" in the contact section.

export const CONTACT = {
  // Official institutional e-mail, e.g. "contato@exemplo.com".
  email: "",
  // Official Instagram: full URL and the text to display (e.g. "@perfil").
  instagram: { url: "", label: "" },
  // Official LinkedIn page, optional.
  linkedin: { url: "", label: "" },
  // Official WhatsApp, optional. Number with country code (e.g. "5547999999999").
  whatsapp: { number: "", label: "" },
  // Form submission endpoint (any service that accepts a JSON POST). When empty, the form
  // falls back to opening the e-mail client (if an e-mail is set) and never fakes a success.
  formEndpoint: "",
  // Where the sponsor buttons lead. Use "#contato" or an official channel URL.
  sponsorHref: "#contato",
};

export type ChannelKey = "email" | "instagram" | "linkedin" | "whatsapp";

export type ContactChannel = {
  key: ChannelKey;
  label: string;
  display?: string;
  href?: string;
  external: boolean;
};

export function getContactChannels(): ContactChannel[] {
  const whatsappDigits = CONTACT.whatsapp.number.replace(/\D/g, "");
  return [
    {
      key: "email",
      label: "E-mail institucional",
      display: CONTACT.email || undefined,
      href: CONTACT.email ? `mailto:${CONTACT.email}` : undefined,
      external: false,
    },
    {
      key: "instagram",
      label: "Instagram oficial",
      display: CONTACT.instagram.url ? CONTACT.instagram.label || CONTACT.instagram.url : undefined,
      href: CONTACT.instagram.url || undefined,
      external: true,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      display: CONTACT.linkedin.url ? CONTACT.linkedin.label || CONTACT.linkedin.url : undefined,
      href: CONTACT.linkedin.url || undefined,
      external: true,
    },
    {
      key: "whatsapp",
      label: "WhatsApp oficial",
      display: whatsappDigits ? CONTACT.whatsapp.label || `+${whatsappDigits}` : undefined,
      href: whatsappDigits ? `https://wa.me/${whatsappDigits}` : undefined,
      external: true,
    },
  ];
}

export const SPONSORS_CTA = {
  eyebrow: "Patrocínio e parcerias",
  title: "Faça parte do nosso próximo capítulo.",
  text: "Conecte sua marca à engenharia, à inovação e ao desenvolvimento de soluções de mobilidade eficiente. Seja parceiro da EFICEM e contribua para a evolução de um projeto que transforma conhecimento em experiência prática.",
  cta: "Quero ser patrocinador",
  // To use the official photo of the team or vehicle, set `src` (e.g. "/images/eficem-patrocinio.jpg").
  photo: {
    src: "" as string,
    alt: "Equipe EFICEM com o veículo",
  },
  fronts: [
    {
      n: "01",
      title: "Desenvolvimento técnico",
      description: "Apoio às atividades de projeto, construção e evolução do veículo.",
    },
    {
      n: "02",
      title: "Inovação e engenharia",
      description: "Conexão com tecnologia, educação e desenvolvimento de soluções.",
    },
    {
      n: "03",
      title: "Formação de talentos",
      description: "Apoio à formação prática de estudantes de engenharia.",
    },
  ],
};

export const CONTACT_CONTENT = {
  eyebrow: "Contato e parcerias",
  title: "Vamos construir algo juntos?",
  text: "Estamos abertos a conexões com empresas, instituições e pessoas interessadas em apoiar a engenharia, a inovação e o desenvolvimento da EFICEM.",
  channelsTitle: "Canais oficiais",
  channelPending: "Canal a ser divulgado",
  form: {
    title: "Envie uma mensagem",
    requiredHint: "Campos marcados com * são obrigatórios.",
    optional: "opcional",
    submit: "Enviar mensagem",
    sending: "Enviando...",
    fields: {
      name: { label: "Nome", placeholder: "Seu nome completo" },
      organization: { label: "Empresa ou instituição", placeholder: "Nome da organização" },
      email: { label: "E-mail", placeholder: "voce@exemplo.com" },
      subject: { label: "Assunto", placeholder: "Sobre o que deseja falar?" },
      message: { label: "Mensagem", placeholder: "Conte como podemos conectar nossos projetos." },
    },
    errors: {
      name: "Informe seu nome.",
      email: "Informe um e-mail válido.",
      subject: "Informe o assunto.",
      message: "Escreva uma mensagem com pelo menos 10 caracteres.",
    },
    feedback: {
      success: "Mensagem enviada. Obrigado pelo contato! Retornaremos em breve.",
      error: "Não foi possível enviar sua mensagem agora. Tente novamente em instantes.",
      mailto:
        "Abrimos seu aplicativo de e-mail com a mensagem preenchida. Confirme o envio por lá.",
      unavailable:
        "O envio por este formulário ainda não está disponível. Em breve divulgaremos os canais oficiais de contato.",
    },
    notConfigured:
      "O envio de mensagens ainda será conectado. Os canais oficiais serão divulgados em breve.",
  },
};

export const FOOTER_CONTENT = {
  description:
    "Equipe de eficiência energética veicular da UFSC Joinville. Engenharia, inovação e trabalho em equipe para projetar, construir e evoluir soluções de mobilidade eficiente.",
  linksTitle: "Navegação",
  contactTitle: "Contato",
  socialTitle: "Redes",
  contactLink: { label: "Contato", href: "#contato" },
  backToTop: "Voltar ao topo",
  copyright: "EFICEM — UFSC Joinville. Todos os direitos reservados.",
};
