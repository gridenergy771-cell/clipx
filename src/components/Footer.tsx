import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { XIcon } from "@/components/XIcon";
import { ARC_LABEL, CA, NAV_LINKS, RADARDEX_URL, TOKEN_SYMBOL, X_URL } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-border">
      <div className="mx-auto max-w-[80rem] px-5 py-14 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <BrandLogo size={40} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The onchain layer for creator-owned content. {TOKEN_SYMBOL}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-6">
            <div>
              <p className="eyebrow">Trading</p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href={RADARDEX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Buy on RadarDEX <ArrowUpRight className="size-3.5" />
                </a>
                <a
                  href={RADARDEX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Chart on RadarDEX <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
            <div>
              <p className="eyebrow">Social</p>
              <a
                href={X_URL}
                target={X_URL === "#" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label="CLIPX on X"
                className="mt-4 inline-grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-[oklch(0.99_0_0/28%)] hover:text-foreground"
              >
                <XIcon className="size-[0.85rem]" />
              </a>
            </div>
            <div>
              <p className="eyebrow">Contract</p>
              <p className="mt-3 text-sm font-semibold tracking-[0.14em] text-foreground">
                CA: <span className="text-gradient">{CA}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CLIPX</p>
          <p className="tracking-[0.18em] uppercase">{ARC_LABEL}</p>
        </div>
      </div>
    </footer>
  );
}
