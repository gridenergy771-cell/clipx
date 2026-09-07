import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn(align === "center" && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 text-[clamp(1.85rem,4.4vw,3.35rem)] font-extrabold leading-[1.05]">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 max-w-xl text-[0.98rem] leading-[1.75] text-muted-foreground">{body}</p>
      ) : null}
    </Reveal>
  );
}
