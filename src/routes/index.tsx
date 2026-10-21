import { useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { EFICEM_SITE_HTML, EFICEM_SITE_SCRIPT } from "@/site/eficemSite";

// Home renders the complete EFICEM landing (uploaded site.html) as-is:
// markup and styles come from the generated module; its behavior script
// is initialized once after mount.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EFICEM — Eficiência Energética Veicular | UFSC Joinville" },
      {
        name: "description",
        content:
          "Equipe de eficiência energética veicular da UFSC Joinville. Projetamos, construímos e evoluímos protótipos que percorrem a maior distância com o mínimo de energia.",
      },
      { property: "og:title", content: "EFICEM — Eficiência Energética Veicular" },
      {
        property: "og:description",
        content:
          "Equipe de eficiência energética veicular da UFSC Joinville. Engenharia em movimento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    try {
      new Function(EFICEM_SITE_SCRIPT)();
    } catch (err) {
      console.error("EFICEM page script failed:", err);
    }
  }, []);

  return (
    <div
      className="eficem-page"
      dangerouslySetInnerHTML={{ __html: EFICEM_SITE_HTML }}
    />
  );
}
