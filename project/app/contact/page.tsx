"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, Clock, Loader2, Send, ShieldCheck } from "lucide-react";

// Relay endpoint. Submissions are forwarded by the form provider, so no
// personal inbox address is exposed in the client bundle.
const FORM_ENDPOINT = "https://formspree.io/f/mdkadkyd";

type Status = "idle" | "submitting" | "success" | "error";

const emptyForm = { name: "", email: "", subject: "", message: "", company: "" };

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Honeypot: bots fill hidden fields, people don't.
    if (formData.company) return;

    setStatus("submitting");

    try {
      const { company: _honeypot, ...payload } = formData;

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      setFormData(emptyForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (status === "success" || status === "error") setStatus("idle");
  };

  const isSubmitting = status === "submitting";

  return (
    <div>
      <section className="relative isolate overflow-hidden border-b">
        <div className="aurora-field absolute inset-0 -z-10" aria-hidden="true" />
        <div className="container max-w-3xl space-y-4 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&rsquo;s talk about your project.
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Freelance work, collaborations or a technical question — the form
            below is the way in. Tell me what you&rsquo;re building and
            what&rsquo;s in the way.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <Card className="tile p-7 md:p-9">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="How should I address you?"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="A few sentences on the project, timeline and budget range is plenty to start."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  className="min-h-[180px] resize-y"
                />
              </div>

              {/* Honeypot — hidden from people, tempting to bots. */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company (leave blank)</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="h-12 w-full gap-2 rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </Button>

              {/* Status is announced to screen readers as it changes. */}
              <div aria-live="polite" className="min-h-[1.5rem]">
                {status === "success" && (
                  <p className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    Message sent — thank you. You&rsquo;ll hear back shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    That didn&rsquo;t send. Please try again in a moment.
                  </p>
                )}
              </div>
            </form>
          </Card>

          <div className="space-y-5">
            <Card className="tile p-7">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Clock className="h-5 w-5" />
              </span>
              <h2 className="mb-2 font-semibold tracking-tight">
                Response time
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Most messages get a reply within two working days. Detailed
                briefs may take a little longer — they get a proper answer
                rather than a quick one.
              </p>
            </Card>

            <Card className="tile p-7">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h2 className="mb-2 font-semibold tracking-tight">
                Your details
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                What you send is used only to reply to your enquiry. Nothing is
                stored on this site, and nothing is passed to third parties for
                marketing.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
