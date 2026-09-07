import { ASSETS, PROJECT_NAME } from "@/config/site";
import { cn } from "@/lib/utils";

export function BrandLogo({
  size = 34,
  withWordmark = true,
  className,
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <img
        src={ASSETS.logo}
        alt={`${PROJECT_NAME} logo`}
        width={size}
        height={size}
        decoding="async"
        className="shrink-0 object-contain drop-shadow-[0_0_18px_oklch(0.62_0.22_262/45%)]"
        style={{ width: size, height: size }}
      />
      {withWordmark ? (
        <span className="text-[0.95rem] font-extrabold tracking-[0.16em] text-foreground">
          CLIPX
        </span>
      ) : null}
    </span>
  );
}
