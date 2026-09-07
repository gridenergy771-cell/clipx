import { cn } from "@/lib/utils";

/**
 * Cinematic image frame: masked edges, hairline border, controlled overlay.
 * Never crops or distorts the source — aspect ratio is preserved by the image itself.
 */
export function MediaFrame({
  src,
  alt,
  className,
  imgClassName,
  priority,
  overlay = true,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  overlay?: boolean;
}) {
  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-cinema)]",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className={cn(
          "block h-auto w-full object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]",
          imgClassName,
        )}
      />
      {overlay ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,oklch(0.1_0.02_265/55%)_100%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(120%_80%_at_20%_0%,oklch(0.62_0.22_262/14%),transparent)]"
          />
        </>
      ) : null}
    </figure>
  );
}
