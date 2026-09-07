import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import { ActionButton } from "@/components/ActionButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  displayName: z
    .string()
    .trim()
    .min(2, { message: "Display name must be at least 2 characters" })
    .max(60, { message: "Display name must be under 60 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  xUsername: z
    .string()
    .trim()
    .regex(/^@?[A-Za-z0-9_]{1,15}$/, { message: "Use a valid X username, e.g. @creator" }),
  wallet: z
    .string()
    .trim()
    .regex(/^(0x[a-fA-F0-9]{40}|[1-9A-HJ-NP-Za-km-z]{32,44})$/, {
      message: "Enter a valid wallet address",
    }),
  category: z.enum(["Video Creator", "Meme Creator", "Artist", "Community", "Other"]),
});

type FormValues = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormValues, string>>;

const categories: FormValues["category"][] = [
  "Video Creator",
  "Meme Creator",
  "Artist",
  "Community",
  "Other",
];

const fieldClass =
  "h-11 rounded-xl border-input bg-[oklch(0.99_0_0/3%)] text-sm text-foreground placeholder:text-muted-foreground/70";

export function RegistrationForm() {
  const [values, setValues] = useState<Record<keyof FormValues, string>>({
    displayName: "",
    email: "",
    xUsername: "",
    wallet: "",
    category: "Video Creator",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (key: keyof FormValues, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("error");
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-border bg-surface p-10 text-center"
      >
        <CheckCircle2 className="mx-auto size-9 text-[var(--brand-cyan)]" />
        <h3 className="mt-5 text-2xl font-extrabold tracking-tight">You&apos;re on the list.</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Your CLIPX creator profile has been registered for the demo. Nothing was submitted to a
          live backend and no account was created.
        </p>
        <ActionButton
          variant="outline"
          className="mt-7"
          onClick={() => {
            setValues({
              displayName: "",
              email: "",
              xUsername: "",
              wallet: "",
              category: "Video Creator",
            });
            setStatus("idle");
          }}
        >
          Register another demo profile
        </ActionButton>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-surface p-7 lg:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="displayName"
          label="Display Name"
          value={values.displayName}
          error={errors.displayName}
          onChange={(v) => set("displayName", v)}
          placeholder="Creator name"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={(v) => set("email", v)}
          placeholder="you@example.com"
        />
        <Field
          id="xUsername"
          label="X Username"
          value={values.xUsername}
          error={errors.xUsername}
          onChange={(v) => set("xUsername", v)}
          placeholder="@creator"
        />
        <Field
          id="wallet"
          label="Wallet Address"
          value={values.wallet}
          error={errors.wallet}
          onChange={(v) => set("wallet", v)}
          placeholder="0x… (public address only)"
        />
        <div className="sm:col-span-2">
          <Label htmlFor="category" className="text-xs tracking-[0.14em] uppercase">
            Creator Category
          </Label>
          <select
            id="category"
            value={values.category}
            onChange={(e) => set("category", e.target.value)}
            className="mt-2 h-11 w-full rounded-xl border border-input bg-[oklch(0.99_0_0/3%)] px-3 text-sm text-foreground"
          >
            {categories.map((c) => (
              <option key={c} value={c} className="bg-[oklch(0.19_0.023_265)]">
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        Public wallet address only. CLIPX will never ask for a seed phrase, private key or wallet
        password.
      </p>

      {status === "error" ? (
        <p role="alert" className="mt-4 text-xs text-destructive">
          Please correct the highlighted fields and try again.
        </p>
      ) : null}

      <ActionButton type="submit" size="lg" className="mt-6" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Joining
          </>
        ) : (
          "Join CLIPX"
        )}
      </ActionButton>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | undefined;
  type?: string | undefined;
  placeholder?: string | undefined;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-xs tracking-[0.14em] uppercase">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldClass} mt-2 ${error ? "border-destructive" : ""}`}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
