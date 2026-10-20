import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { SponsorsStrip } from "@/components/site/SponsorsStrip";
import { ProjectSection } from "@/components/site/ProjectSection";
import { TeamSection } from "@/components/site/TeamSection";
import { TimelineSection } from "@/components/site/TimelineSection";
import { GallerySection } from "@/components/site/GallerySection";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      <main>
        <Hero />
        <SponsorsStrip />
        <ProjectSection />
        <TeamSection />
        <TimelineSection />
        <GallerySection />
        {/* Next stages: #contato */}
      </main>
    </div>
  );
}
