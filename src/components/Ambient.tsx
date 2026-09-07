import { cn } from "@/lib/utils";

/** Cinematic background system: dark base, soft radial lighting, faint grid, grain. */
export function Ambient({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none fixed inset-0 z-0 grain", className)}>
      <div className="absolute inset-0 bg-background" />
      <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(90%_60%_at_50%_0%,black,transparent)]" />
      <div className="ambient-drift absolute -top-[26rem] left-1/2 h-[46rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--brand-blue),transparent)] opacity-[0.30] blur-3xl" />
      <div
        className="ambient-drift absolute -left-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,var(--brand-violet),transparent)] opacity-[0.18] blur-3xl"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="ambient-drift absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(closest-side,var(--brand-magenta),transparent)] opacity-[0.14] blur-3xl"
        style={{ animationDelay: "-14s" }}
      />
    </div>
  );
}
