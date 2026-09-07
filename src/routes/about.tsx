import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ActionRouteLink } from "@/components/ActionButton";
import { MediaFrame } from "@/components/MediaFrame";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ARC_LABEL, ASSETS } from "@/config/site";

const TITLE = "About CLIPX — Where Creativity Becomes Ownership";
const DESC =
  "CLIPX is an onchain creator platform designed for the ARC ecosystem, turning short-form clips into Digital Clip Assets with verifiable ownership.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const chapters = [
  {
    eyebrow: "01 — The problem",
    title: "Attention is measured. Ownership isn't.",
    body: "A clip can travel across millions of screens and leave its creator with nothing but a number. Distribution became frictionless; ownership never followed.",
  },
  {
    eyebrow: "02 — The idea",
    title: "A clip as a unit of value.",
    body: "CLIPX treats a short-form clip as something that can be represented onchain — with a creator attached, a history, and a place in a wider creator economy.",
  },
  {
    eyebrow: "03 — Digital Clip Assets",
    title: "DCA.",
    body: "Digital Clip Assets are onchain representations of short-form creative content, designed to provide a transparent and verifiable record of ownership.",
  },
  {
    eyebrow: "04 — The creator economy",
    title: "Creativity deserves more than views.",
    body: "CLIPX explores a creator economy where digital content can carry ownership, provenance and programmable rewards onchain.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-48">
        <div className="mx-auto max-w-[80rem] px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow">About CLIPX</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,6.6vw,5rem)] font-extrabold leading-[0.98]">
              Where Creativity <span className="text-gradient">Becomes Ownership.</span>
            </h1>
            <p className="mt-8 max-w-xl text-[1.02rem] leading-[1.8] text-muted-foreground">
              The internet made it easy to create and share content. CLIPX is built around what
              comes next: owning it.
            </p>
          </Reveal>

          <Reveal delay={140} className="mt-16">
            <MediaFrame
              src={ASSETS.banner}
              alt="CLIPX campaign banner showing a creator workspace and an onchain film strip"
              className="rounded-3xl"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-[80rem] px-5 lg:mt-40 lg:px-8">
        <div className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
          {chapters.map((c, i) => (
            <Reveal key={c.eyebrow} delay={i * 70} className="bg-surface">
              <article className="grid gap-6 p-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14 lg:p-12">
                <div>
                  <p className="eyebrow">{c.eyebrow}</p>
                  <h2 className="mt-4 text-[clamp(1.5rem,3vw,2.3rem)] font-extrabold leading-[1.08]">
                    {c.title}
                  </h2>
                </div>
                <p className="text-[0.98rem] leading-[1.8] text-muted-foreground lg:pt-8">
                  {c.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-[80rem] px-5 lg:mt-40 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <MediaFrame
              src={ASSETS.editor}
              alt="CLIPX creator environment with a short-form editing timeline and CLIPX marks"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="05 — ARC"
              title="Built on ARC."
              body="CLIPX is designed for the ARC ecosystem, bringing creator-owned digital content into an onchain environment."
            />
            <Reveal delay={120}>
              <p className="mt-7 text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {ARC_LABEL}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-[80rem] px-5 lg:mt-40 lg:px-8">
        <Reveal className="border-t border-border pt-16">
          <p className="eyebrow">06 — The vision</p>
          <h2 className="mt-6 max-w-4xl text-[clamp(2rem,5.4vw,4rem)] font-extrabold leading-[1.02]">
            Content shouldn&apos;t disappear into the feed.
          </h2>
          <p className="mt-8 max-w-xl text-[1.02rem] leading-[1.8] text-muted-foreground">
            A clip can be more than a post. It can become an asset — discoverable, verifiable and
            connected to its creator.
          </p>
          <div className="mt-10">
            <ActionRouteLink to="/app" size="lg">
              Open App <ArrowRight className="size-4" />
            </ActionRouteLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
