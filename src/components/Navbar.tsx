import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X as CloseIcon, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { XIcon } from "@/components/XIcon";
import { ActionLink } from "@/components/ActionButton";
import { CA, NAV_LINKS, RADARDEX_URL, X_URL } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-[oklch(0.15_0.021_265/78%)] backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid h-16 max-w-[80rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:h-[4.5rem] lg:px-8"
      >
        <div className="flex min-w-0 items-center gap-10">
          <Link to="/" aria-label="CLIPX home" onClick={() => setOpen(false)}>
            <BrandLogo />
          </Link>
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-[0.8rem] font-medium tracking-[0.06em] text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="rounded-full border border-border px-3 py-1.5 text-[0.66rem] font-semibold tracking-[0.18em] text-muted-foreground">
            CA: {CA}
          </span>
          <ActionLink href={RADARDEX_URL} external size="sm" aria-label="Buy CLIPX on RadarDEX">
            Buy <ArrowUpRight className="size-3.5" />
          </ActionLink>
          <ActionLink
            href={RADARDEX_URL}
            external
            size="sm"
            variant="outline"
            aria-label="View CLIPX chart on RadarDEX"
          >
            Chart <ArrowUpRight className="size-3.5" />
          </ActionLink>
          <a
            href={X_URL}
            target={X_URL === "#" ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label="CLIPX on X"
            className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-[oklch(0.99_0_0/28%)] hover:text-foreground"
          >
            <XIcon className="size-[0.85rem]" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 place-items-center rounded-full border border-border text-foreground lg:hidden"
        >
          {open ? <CloseIcon className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-[oklch(0.15_0.021_265/96%)] backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="space-y-6 px-5 py-7">
          <ul className="space-y-1">
            {NAV_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-2xl font-bold tracking-tight text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="gradient-hairline" />
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground">
            CA: {CA}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <ActionLink href={RADARDEX_URL} external size="sm">
              Buy <ArrowUpRight className="size-3.5" />
            </ActionLink>
            <ActionLink href={RADARDEX_URL} external size="sm" variant="outline">
              Chart <ArrowUpRight className="size-3.5" />
            </ActionLink>
            <a
              href={X_URL}
              target={X_URL === "#" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label="CLIPX on X"
              className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground"
            >
              <XIcon className="size-[0.85rem]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
