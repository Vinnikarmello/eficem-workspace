import { Mail } from "lucide-react";
import type { ChannelKey } from "@/data/contact";

type IconProps = { className?: string };

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-1 1.84-2.07 3.79-2.07 4.05 0 4.82 2.66 4.82 6.13v5.87h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75Z" />
    </svg>
  );
}

function WhatsappIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21Z" />
      <path d="M9 8.5c0 3.5 2.5 6 6 6l1.2-1.4-2-1-.8.8c-1-.4-1.8-1.2-2.2-2.2l.8-.8-1-2L9 8.5Z" />
    </svg>
  );
}

export function ChannelIcon({ channel, className }: { channel: ChannelKey; className?: string }) {
  switch (channel) {
    case "email":
      return <Mail className={className} strokeWidth={1.75} aria-hidden="true" />;
    case "instagram":
      return <InstagramIcon className={className} />;
    case "linkedin":
      return <LinkedinIcon className={className} />;
    case "whatsapp":
      return <WhatsappIcon className={className} />;
  }
}
