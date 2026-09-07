import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  BarChart3,
  Coins,
  Film,
  LayoutDashboard,
  Plus,
  User,
  Wallet,
} from "lucide-react";
import { ActionButton } from "@/components/ActionButton";
import { BrandLogo } from "@/components/BrandLogo";
import { CreateClipModal } from "@/components/app/CreateClipModal";
import { RegistrationForm } from "@/components/app/RegistrationForm";
import { MediaFrame } from "@/components/MediaFrame";
import { Reveal } from "@/components/Reveal";
import { ASSETS } from "@/config/site";
import { cn } from "@/lib/utils";

const TITLE = "CLIPX App — Creator Workspace (Demo)";
const DESC =
  "A product preview of the CLIPX creator workspace: mint Digital Clip Assets, review assets and rewards, and join the CLIPX creator network.";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/app" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/app" }],
  }),
  component: AppPage,
});

const TABS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "create", label: "Create", icon: Plus },
  { id: "clips", label: "My Clips", icon: Film },
  { id: "assets", label: "Assets", icon: Coins },
  { id: "rewards", label: "Rewards", icon: BarChart3 },
  { id: "profile", label: "Profile", icon: User },
] as const;

type TabId = (typeof TABS)[number]["id"];

function AppPage() {
  const [tab, setTab] = useState<TabId>("dashboard");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-20 sm:pt-24">
      <div className="mx-auto max-w-[84rem] px-5 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-sidebar p-4">
              <div className="hidden px-2 py-2 lg:block">
                <BrandLogo size={26} />
              </div>
              <nav aria-label="Workspace" className="mt-2 flex gap-1.5 overflow-x-auto lg:flex-col">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTab(t.id);
                      if (t.id === "create") setModalOpen(true);
                    }}
                    aria-current={tab === t.id ? "page" : undefined}
                    className={cn(
                      "flex shrink-0 items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm transition-colors",
                      tab === t.id
                        ? "bg-[oklch(0.99_0_0/7%)] text-foreground"
                        : "text-muted-foreground hover:bg-[oklch(0.99_0_0/4%)] hover:text-foreground",
                    )}
                  >
                    <t.icon className="size-4" />
                    {t.label}
                  </button>
                ))}
              </nav>
              <div className="mt-4 hidden border-t border-border pt-4 lg:block">
                <Link
                  to="/"
                  className="flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="size-3.5" /> Back to Website
                </Link>
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="min-w-0">
            <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex sm:justify-between">
              <div className="min-w-0">
                <h1 className="truncate text-xl font-extrabold tracking-tight sm:text-2xl">
                  Welcome to CLIPX
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">Your creator workspace.</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="rounded-full border border-border px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.2em] text-muted-foreground">
                  DEMO MODE
                </span>
                <span className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[0.62rem] tracking-[0.16em] text-muted-foreground sm:inline-flex">
                  <Wallet className="size-3" /> WALLET · DEMO
                </span>
              </div>
            </header>

            <section className="mt-6">
              {tab === "dashboard" || tab === "create" ? <DashboardView /> : null}
              {tab === "clips" ? <ClipsView /> : null}
              {tab === "assets" ? <AssetsView /> : null}
              {tab === "rewards" ? <RewardsView /> : null}
              {tab === "profile" ? <ProfileView /> : null}
            </section>

            <section className="mt-6 rounded-2xl border border-border bg-surface p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold tracking-tight">Create a Digital Clip Asset</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Walk through the CLIPX minting flow in demo mode.
                  </p>
                </div>
                <ActionButton onClick={() => setModalOpen(true)}>
                  <Plus className="size-4" /> Create Clip
                </ActionButton>
              </div>
            </section>

            {/* Registration */}
            <section className="mt-14">
              <Reveal>
                <p className="eyebrow">Creator network</p>
                <h2 className="mt-4 text-[clamp(1.6rem,3.6vw,2.5rem)] font-extrabold leading-[1.06]">
                  Join the CLIPX Creator Network
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  Get early access to the CLIPX creator experience. This is a demo waitlist
                  registration.
                </p>
              </Reveal>
              <Reveal delay={120} className="mt-8">
                <RegistrationForm />
              </Reveal>
            </section>

            <div className="mt-10 lg:hidden">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="size-3.5" /> Back to Website
              </Link>
            </div>
          </main>
        </div>
      </div>

      <CreateClipModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}

function Panel({
  title,
  children,
  note,
}: {
  title: string;
  children: React.ReactNode;
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-bold tracking-[0.08em] uppercase">{title}</h2>
        <span className="text-[0.6rem] tracking-[0.2em] text-muted-foreground">DEMO</span>
      </div>
      <div className="mt-5">{children}</div>
      {note ? <p className="mt-4 text-xs text-muted-foreground">{note}</p> : null}
    </div>
  );
}

function DashboardView() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["Total Clips", "12"],
          ["Owned Assets", "8"],
          ["Creator Rewards", "Demo"],
        ].map(([label, value]) => (
          <div key={label} className="card-plate rounded-2xl p-5">
            <p className="eyebrow">{label}</p>
            <p className="mt-3 text-2xl font-extrabold tracking-tight">{value}</p>
            <p className="mt-1 text-xs text-muted-foreground">Demo value</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Panel title="Recent activity" note="Demo records generated locally for preview purposes.">
          <ul className="divide-y divide-border text-sm">
            {[
              ["Demo clip prepared", "Create"],
              ["Demo metadata generated", "Mint"],
              ["Demo asset recorded", "Own"],
              ["Demo reward preview", "Earn"],
            ].map(([row, kind]) => (
              <li key={row} className="flex items-center justify-between gap-4 py-3">
                <span className="text-muted-foreground">{row}</span>
                <span className="text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                  {kind}
                </span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Workspace preview">
          <MediaFrame
            src={ASSETS.editor}
            alt="CLIPX editing workspace preview"
            className="rounded-xl"
          />
        </Panel>
      </div>
    </div>
  );
}

function ClipsView() {
  return (
    <Panel title="My Clips" note="Placeholder rows — the CLIPX clip library is in development.">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] text-sm">
          <thead>
            <tr className="text-left text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
              <th className="pb-3 font-semibold">Clip</th>
              <th className="pb-3 font-semibold">Category</th>
              <th className="pb-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              ["Demo Clip 01", "Video", "Minted (demo)"],
              ["Demo Clip 02", "Meme", "Draft"],
              ["Demo Clip 03", "Art", "Minted (demo)"],
            ].map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i} className={cn("py-3", i > 0 && "text-muted-foreground")}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

function AssetsView() {
  return (
    <Panel title="Assets" note="Asset previews use the CLIPX campaign visual in demo mode.">
      <div className="grid gap-4 sm:grid-cols-2">
        {["Demo DCA 001", "Demo DCA 002"].map((name) => (
          <div key={name} className="card-plate overflow-hidden rounded-xl">
            <MediaFrame
              src={ASSETS.banner}
              alt={`${name} preview`}
              className="rounded-none border-0 shadow-none"
              overlay={false}
            />
            <div className="flex items-center justify-between p-4">
              <p className="text-sm font-semibold">{name}</p>
              <span className="text-[0.6rem] tracking-[0.2em] text-muted-foreground">DEMO</span>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function RewardsView() {
  return (
    <Panel title="Rewards" note="Reward mechanics are part of the CLIPX vision and not yet live.">
      <div className="space-y-4">
        {["Ownership rewards", "Engagement rewards", "Collector rewards"].map((row) => (
          <div key={row}>
            <div className="flex items-center justify-between text-sm">
              <span>{row}</span>
              <span className="text-xs text-muted-foreground">Demo</span>
            </div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-[oklch(0.99_0_0/8%)]">
              <div className="h-full w-1/3 bg-brand-gradient opacity-70" />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function ProfileView() {
  return (
    <Panel title="Profile" note="Demo profile. No account exists and no wallet is connected.">
      <div className="flex flex-wrap items-center gap-5">
        <BrandLogo size={52} withWordmark={false} />
        <div className="min-w-0">
          <p className="text-lg font-bold tracking-tight">Demo Creator</p>
          <p className="mt-1 text-sm text-muted-foreground">12 Clips · 8 Assets · Demo Rewards</p>
        </div>
      </div>
    </Panel>
  );
}
