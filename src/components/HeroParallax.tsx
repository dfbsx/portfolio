export function HeroParallax({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative flex min-h-[min(92vh,900px)] items-center overflow-hidden border-b border-[var(--border)] bg-transparent">
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
