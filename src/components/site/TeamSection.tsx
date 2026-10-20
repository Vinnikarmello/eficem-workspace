import { ArrowUpRight, User } from "lucide-react";
import { TEAM_CONTENT } from "@/data/content";
import { TEAM, TEAM_MIN_SLOTS, type TeamMember } from "@/data/team";

function MemberCard({ member, index }: { member?: TeamMember; index: number }) {
  const { placeholder } = TEAM_CONTENT;
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className="group flex flex-col overflow-hidden border border-white/10 bg-graphite text-white transition-colors duration-300 hover:border-lime focus-within:border-lime">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink">
        {member?.photo ? (
          <img
            src={member.photo}
            alt={`Foto de ${member.name}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="tech-grid flex h-full w-full flex-col items-center justify-center gap-3 transition-transform duration-500 group-hover:scale-105">
            <User className="h-14 w-14 text-white/25" strokeWidth={1.25} aria-hidden="true" />
            <span className="font-sport text-[11px] uppercase tracking-[0.2em] text-white/40">
              {placeholder.photo} {number}
            </span>
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-graphite/80 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <span
          className="absolute left-5 top-0 h-0.5 w-10 bg-lime transition-all duration-300 group-hover:w-20"
          aria-hidden="true"
        />
        <h3 className="mt-2 font-display text-lg font-bold leading-tight text-white">
          {member ? member.name : placeholder.name}
        </h3>
        <p className="mt-1 text-sm text-white/70">{member ? member.role : placeholder.role}</p>
        {member?.link && (
          <a
            href={member.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${TEAM_CONTENT.profileLabel} de ${member.name}`}
            className="mt-4 inline-flex items-center gap-1.5 self-start border-b border-lime pb-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
          >
            {TEAM_CONTENT.profileLabel}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </li>
  );
}

export function TeamSection() {
  const slots = Array.from(
    { length: Math.max(TEAM_MIN_SLOTS, TEAM.length) },
    (_, i) => TEAM[i] as TeamMember | undefined,
  );

  return (
    <section id="equipe" className="relative overflow-hidden bg-ink text-white">
      <div className="tech-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 flex items-center gap-3 font-sport text-xs uppercase tracking-[0.3em] text-white/70">
            <span className="h-px w-10 bg-lime" aria-hidden="true" />
            {TEAM_CONTENT.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            {TEAM_CONTENT.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
            {TEAM_CONTENT.subtitle}
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {slots.map((member, i) => (
            <MemberCard key={member ? member.name : `slot-${i}`} member={member} index={i} />
          ))}
        </ul>

        <div className="mt-16 flex flex-col items-start gap-5 border-t border-white/10 pt-10 sm:flex-row sm:items-center lg:mt-20">
          <span className="h-1.5 w-12 shrink-0 bg-lime" aria-hidden="true" />
          <p className="font-display text-xl font-bold uppercase leading-tight tracking-tight sm:text-2xl lg:text-3xl">
            {TEAM_CONTENT.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
