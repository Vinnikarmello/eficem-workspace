export type TeamMember = {
  name: string;
  role: string;
  // Photo path (e.g. "/images/team/maria.jpg"). Use a 4:5 portrait for consistent framing.
  photo?: string;
  // Professional profile link (LinkedIn, Lattes...), optional.
  link?: string;
};

// Add the real members here. Until then, placeholder cards are shown.
export const TEAM: TeamMember[] = [];

// Minimum number of cards in the grid (empty ones are shown as placeholders).
export const TEAM_MIN_SLOTS = 8;
