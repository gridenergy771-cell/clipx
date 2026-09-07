import { useEffect, useState } from "react";
import { CheckCircle2, UploadCloud } from "lucide-react";
import { ActionButton } from "@/components/ActionButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const STAGES = ["Preparing Asset", "Generating Metadata", "Simulating Onchain Mint", "Complete"];

const fieldClass =
  "rounded-xl border-input bg-[oklch(0.99_0_0/3%)] text-sm placeholder:text-muted-foreground/70";

export function CreateClipModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [title, setTitle] = useState("");
  const [minting, setMinting] = useState(false);
  const [stage, setStage] = useState(-1);

  useEffect(() => {
    if (!minting) return;
    if (stage >= STAGES.length - 1) {
      setMinting(false);
      return;
    }
    const t = setTimeout(() => setStage((s) => s + 1), 850);
    return () => clearTimeout(t);
  }, [minting, stage]);

  const reset = () => {
    setFileName(null);
    setTitle("");
    setStage(-1);
    setMinting(false);
  };

  const done = stage === STAGES.length - 1;

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) reset();
      }}
    >
      <DialogContent className="max-w-lg rounded-2xl border-border bg-[oklch(0.185_0.022_265)] p-7">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-lg font-bold tracking-tight">
            Create Clip
            <span className="rounded-full border border-border px-2 py-0.5 text-[0.6rem] font-semibold tracking-[0.2em] text-muted-foreground">
              DEMO
            </span>
          </DialogTitle>
        </DialogHeader>

        {stage < 0 ? (
          <div className="space-y-5">
            <label
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                setFileName(e.dataTransfer.files?.[0]?.name ?? "demo-clip.mp4");
              }}
              className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed px-6 py-10 text-center transition-colors ${
                dragging ? "border-[var(--brand-cyan)] bg-[oklch(0.99_0_0/4%)]" : "border-input"
              }`}
            >
              <UploadCloud className="size-6 text-muted-foreground" />
              <span className="text-sm font-medium">
                {fileName ?? "Drag & drop a clip, or browse"}
              </span>
              <span className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                MP4 · MOV · WEBM
              </span>
              <input
                type="file"
                accept="video/mp4,video/quicktime,video/webm"
                className="sr-only"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
            </label>

            {fileName ? (
              <div className="grid h-28 place-items-center rounded-xl border border-border bg-[oklch(0.99_0_0/3%)] text-xs text-muted-foreground">
                Clip preview placeholder — no file is uploaded in demo mode
              </div>
            ) : null}

            <div className="grid gap-4">
              <div>
                <Label htmlFor="clip-title" className="text-xs tracking-[0.14em] uppercase">
                  Clip Title
                </Label>
                <Input
                  id="clip-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Sunset run, take 3"
                  className={`${fieldClass} mt-2 h-11`}
                />
              </div>
              <div>
                <Label htmlFor="clip-desc" className="text-xs tracking-[0.14em] uppercase">
                  Description
                </Label>
                <Textarea
                  id="clip-desc"
                  rows={3}
                  placeholder="What happens in this clip?"
                  className={`${fieldClass} mt-2`}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="clip-creator" className="text-xs tracking-[0.14em] uppercase">
                    Creator
                  </Label>
                  <Input
                    id="clip-creator"
                    defaultValue="Demo Creator"
                    className={`${fieldClass} mt-2 h-11`}
                  />
                </div>
                <div>
                  <Label htmlFor="clip-category" className="text-xs tracking-[0.14em] uppercase">
                    Category
                  </Label>
                  <select
                    id="clip-category"
                    className="mt-2 h-11 w-full rounded-xl border border-input bg-[oklch(0.99_0_0/3%)] px-3 text-sm"
                  >
                    {["Video", "Meme", "Art", "Community", "Other"].map((c) => (
                      <option key={c} className="bg-[oklch(0.19_0.023_265)]">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <ActionButton
              className="w-full"
              disabled={!fileName || title.trim().length < 2}
              onClick={() => {
                setStage(0);
                setMinting(true);
              }}
            >
              Mint DCA
            </ActionButton>
            <p className="text-center text-[0.7rem] text-muted-foreground">
              Demo only — no blockchain transaction is performed.
            </p>
          </div>
        ) : (
          <div className="space-y-4 py-2">
            <ol className="space-y-3">
              {STAGES.map((s, i) => (
                <li key={s} className="flex items-center gap-3 text-sm">
                  <span
                    className={`grid size-5 place-items-center rounded-full border text-[0.6rem] ${
                      i <= stage
                        ? "border-transparent bg-brand-gradient text-[oklch(0.14_0.02_265)]"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {i <= stage ? "✓" : i + 1}
                  </span>
                  <span className={i <= stage ? "text-foreground" : "text-muted-foreground"}>
                    {s}
                  </span>
                </li>
              ))}
            </ol>
            <div className="h-1 overflow-hidden rounded-full bg-[oklch(0.99_0_0/8%)]">
              <div
                className="h-full bg-brand-gradient transition-[width] duration-700 ease-out"
                style={{ width: `${((stage + 1) / STAGES.length) * 100}%` }}
              />
            </div>
            {done ? (
              <div className="rounded-xl border border-border bg-[oklch(0.99_0_0/3%)] p-5 text-center">
                <CheckCircle2 className="mx-auto size-7 text-[var(--brand-cyan)]" />
                <p className="mt-3 text-base font-bold tracking-tight">Demo Asset Created</p>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  Simulated locally. No onchain mint took place.
                </p>
                <ActionButton variant="outline" size="sm" className="mt-4" onClick={reset}>
                  Create another
                </ActionButton>
              </div>
            ) : null}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
