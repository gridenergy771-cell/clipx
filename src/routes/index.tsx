import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ActionLink, ActionRouteLink } from "@/components/ActionButton";
import { BrandLogo } from "@/components/BrandLogo";
import { MediaFrame } from "@/components/MediaFrame";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ARC_LABEL, ASSETS, SITE_DESCRIPTION, SITE_TITLE } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "CLIPX, creator economy, SocialFi, onchain creators, digital assets, ARC, creator ownership, short-form content",
      },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const flow = [
  { n: "01", title: "Create", copy: "Create short-form content in the formats your audience already lives in." },
  { n: "02", title: "Mint", copy: "Designed to turn a clip into a Digital Clip Asset with attached metadata." },
  { n: "03", title: "Own", copy: "Establishes a verifiable onchain record of ownership and provenance." },
  { n: "04", title: "Earn", copy: "Enables creator reward and monetization mechanisms around the asset." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-44">
        <div className="mx-auto max-w-[80rem] px-5 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="rise-in flex items-center gap-3" style={{ animationDelay: "60ms" }}>
                <BrandLogo size={54} withWordmark={false} />
                <span className="eyebrow">{ARC_LABEL}</span>
              </div>

              <h1 className="mt-8 text-[clamp(2.6rem,7.6vw,5.4rem)] font-extrabold leading-[0.95]">
                <span className="rise-in block" style={{ animationDelay: "180ms" }}>
                  Every Clip.
                </span>
                <span
                  className="rise-in text-gradient block"
                  style={{ animationDelay: "320ms" }}
                >
                  An Asset.
                </span>
              </h1>

              <p
                className="rise-in mt-7 max-w-lg text-[1.02rem] leading-[1.75] text-muted-foreground"
                style={{ animationDelay: "460ms" }}
              >
                CLIPX is the onchain layer for creator-owned content, built on ARC. Turn short-form
                creativity into verifiable digital assets.
              </p>

              <div
                className="rise-in mt-10 flex flex-wrap items-center gap-3"
                style={{ animationDelay: "600ms" }}
              >
                <ActionLink href="#socialfi" size="lg">
                  Explore CLIPX <ArrowRight className="size-4" />
                </ActionLink>
                <ActionRouteLink to="/app" variant="outline" size="lg">
                  Open App
                </ActionRouteLink>
              </div>

              <dl
                className="rise-in mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-7"
                style={{ animationDelay: "720ms" }}
              >
                {[
                  ["Create", "Short-form first"],
                  ["Own", "Verifiable record"],
                  ["Earn", "Creator rewards"],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <dt className="text-sm font-bold tracking-[0.08em] text-foreground">{term}</dt>
                    <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rise-in relative" style={{ animationDelay: "380ms" }}>
              <div
                aria-hidden
                className="absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,var(--brand-violet),transparent)] opacity-25 blur-3xl"
              />
              <MediaFrame
                src={ASSETS.editor}
                alt="CLIPX creator environment: a short-form video editing timeline surrounded by film frames and CLIPX marks"
                priority
                className="rotate-[-1.2deg]"
              />
              <div className="mt-4 flex items-center justify-between text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase">
                <span>Creator environment</span>
                <span>Concept visual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WIDE BANNER */}
      <section className="mx-auto mt-24 max-w-[86rem] px-5 lg:mt-32 lg:px-8">
        <Reveal>
          <MediaFrame
            src={ASSETS.banner}
            alt="CLIPX promotional banner: Create, Own, Earn — built on ARC"
            className="rounded-3xl"
          />
        </Reveal>
      </section>

      {/* SOCIALFI INTRO */}
      <section id="socialfi" className="mx-auto mt-28 max-w-[80rem] px-5 lg:mt-40 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <SectionHeading
            eyebrow="SocialFi"
            title={
              <>
                Creators made the content economy.
                <br className="hidden sm:block" />{" "}
                <span className="text-gradient">CLIPX gives it ownership.</span>
              </>
            }
            body="Short-form content moves at internet speed. CLIPX brings ownership and monetization onchain, giving creators a new way to turn creativity into digital assets."
          />
          <Reveal delay={120} className="self-end">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {[
                ["Ownership", "Content tied to its creator."],
                ["Provenance", "A record that travels with the clip."],
                ["Rewards", "Value routed back to creators."],
                ["Onchain", "Designed for the ARC ecosystem."],
              ].map(([title, copy]) => (
                <div key={title} className="bg-surface p-6">
                  <p className="text-sm font-bold tracking-[0.06em]">{title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIGITAL CLIP ASSETS */}
      <section className="mx-auto mt-28 max-w-[80rem] px-5 lg:mt-40 lg:px-8">
        <SectionHeading
          eyebrow="Digital Clip Assets — DCA"
          title="Turn a clip into something you can own."
          body="Digital Clip Assets are onchain representations of short-form creative content, designed to provide a transparent and verifiable record of ownership."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <ol className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
            {["Create", "Mint", "Own", "Share", "Earn"].map((step, i) => (
              <Reveal as="li" key={step} delay={i * 80} className="bg-surface">
                <div className="flex items-center gap-5 px-6 py-5">
                  <span className="text-[0.7rem] font-semibold tracking-[0.2em] text-muted-foreground">
                    0{i + 1}
                  </span>
                  <span className="text-lg font-bold tracking-tight">{step}</span>
                  <span className="ml-auto h-px w-10 bg-brand-gradient opacity-60" />
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={140}>
            <MediaFrame
              src={ASSETS.editor}
              alt="CLIPX editing environment used to prepare a clip for minting as a Digital Clip Asset"
              className="rotate-[0.8deg]"
            />
            <p className="mt-4 text-xs text-muted-foreground">
              Product vision visual. The CLIPX mechanism is presented as a design direction, not a
              live onchain service.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CREATOR ECONOMY */}
      <section className="relative mt-28 overflow-hidden py-20 lg:mt-40 lg:py-28">
        <div className="mx-auto max-w-[80rem] px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <Reveal>
              <MediaFrame
                src={ASSETS.banner}
                alt="CLIPX creator campaign visual with short-form clips and an onchain film strip"
                className="rounded-2xl"
              />
            </Reveal>
            <div className="lg:pl-6">
              <SectionHeading
                eyebrow="Creator economy"
                title="Creativity deserves more than views."
                body="CLIPX explores a new creator economy where digital content can carry ownership, provenance and programmable rewards onchain."
              />
              <Reveal delay={120}>
                <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                  Create. Own. Earn. — three words instead of a metrics dashboard. CLIPX is being
                  built around the creator, not the feed.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-[80rem] px-5 lg:px-8">
        <SectionHeading eyebrow="How it works" title="The CLIPX flow." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {flow.map((item, i) => (
            <Reveal key={item.n} delay={i * 90} className="bg-surface">
              <div className="card-plate h-full border-0 p-7">
                <span className="text-[0.7rem] font-semibold tracking-[0.2em] text-muted-foreground">
                  {item.n}
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ARC */}
      <section className="mx-auto mt-28 max-w-[80rem] px-5 lg:mt-40 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 lg:p-16">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,var(--brand-cyan),transparent)] opacity-20 blur-3xl"
          />
          <p className="eyebrow">ARC ecosystem</p>
          <h2 className="mt-5 max-w-2xl text-[clamp(1.9rem,4.5vw,3.4rem)] font-extrabold leading-[1.03]">
            Built on ARC.
          </h2>
          <p className="mt-5 max-w-xl text-[0.98rem] leading-[1.75] text-muted-foreground">
            CLIPX is designed for the ARC ecosystem, bringing creator-owned digital content into an
            onchain environment.
          </p>
        </Reveal>
      </section>

      {/* INSIDE CLIPX */}
      <section className="mx-auto mt-28 max-w-[80rem] px-5 lg:mt-40 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Product preview" title="Inside CLIPX." />
          <Reveal delay={100}>
            <ActionRouteLink to="/app" variant="outline">
              Open the demo <ArrowUpRight className="size-3.5" />
            </ActionRouteLink>
          </Reveal>
        </div>
        <Reveal delay={120} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div className="flex items-center gap-3">
                <BrandLogo size={22} />
                <span className="text-xs text-muted-foreground">Creator Dashboard</span>
              </div>
              <span className="rounded-full border border-border px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.2em] text-muted-foreground">
                DEMO
              </span>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-3">
              {[
                ["Total Clips", "12", "Demo value"],
                ["Owned Assets", "8", "Demo value"],
                ["Creator Rewards", "Demo", "Preview only"],
              ].map(([label, value, note]) => (
                <div key={label} className="bg-surface p-6">
                  <p className="eyebrow">{label}</p>
                  <p className="mt-3 text-2xl font-extrabold tracking-tight">{value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border p-6">
              <p className="eyebrow">Recent activity</p>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "Demo clip prepared for minting",
                  "Demo asset metadata generated",
                  "Demo reward preview updated",
                ].map((row) => (
                  <li key={row} className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">{row}</span>
                    <span className="text-[0.62rem] tracking-[0.2em] text-muted-foreground">
                      DEMO
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CLOSING */}
      <section className="mx-auto mt-28 max-w-[80rem] px-5 lg:mt-40 lg:px-8">
        <Reveal className="border-t border-border pt-16">
          <h2 className="max-w-3xl text-[clamp(2rem,5.2vw,3.8rem)] font-extrabold leading-[1.02]">
            Content shouldn&apos;t disappear into the feed.
          </h2>
          <div className="mt-9 flex flex-wrap gap-3">
            <ActionRouteLink to="/app" size="lg">
              Open App <ArrowRight className="size-4" />
            </ActionRouteLink>
            <ActionRouteLink to="/about" variant="outline" size="lg">
              Read the story
            </ActionRouteLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
