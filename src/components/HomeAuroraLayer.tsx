/**
 * Single full-page aurora behind hero + below-hero so the mesh never “resets” at a section edge.
 */
export function HomeAuroraLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_80%_20%,rgba(252,200,209,0.55),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_10%_80%,rgba(245,224,200,0.65),transparent_55%)]" />

      <div className="absolute -left-[18%] top-[4%] h-[min(82vw,580px)] w-[min(82vw,580px)] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(244,114,182,0.42),rgba(251,182,193,0.28)_50%,transparent_72%)] opacity-90 blur-[72px] sm:blur-[90px]" />
      <div className="absolute left-[12%] top-[38%] h-[min(68vw,460px)] w-[min(68vw,460px)] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.28),rgba(253,186,170,0.35)_55%,transparent_70%)] opacity-90 blur-[68px] sm:blur-[85px]" />
      <div className="absolute -right-[12%] top-[10%] h-[min(72vw,500px)] w-[min(72vw,500px)] rounded-full bg-[radial-gradient(circle_at_55%_45%,rgba(252,211,232,0.55),rgba(254,215,170,0.32)_52%,transparent_72%)] opacity-90 blur-[76px] sm:blur-[92px]" />
      <div className="absolute bottom-[-8%] left-[22%] h-[min(62vw,420px)] w-[min(88vw,540px)] rounded-full bg-[radial-gradient(circle_at_45%_45%,rgba(251,207,232,0.45),rgba(230,200,180,0.4)_50%,transparent_70%)] opacity-90 blur-[64px] sm:blur-[80px]" />
      <div className="absolute right-[4%] bottom-[12%] h-[min(48vw,300px)] w-[min(48vw,300px)] rounded-full bg-[radial-gradient(circle,rgba(252,165,165,0.35),transparent_68%)] opacity-90 blur-[56px] sm:blur-[70px]" />

      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(58, 54, 51, 0.045) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
    </div>
  );
}
