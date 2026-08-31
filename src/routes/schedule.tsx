import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/ui/PageHero";
import { Callout } from "@/components/ui/Callout";
import { Button } from "@/components/ui/button";
import { PRODUCTS, SERIES, SITE, TRACTS, calcSeatsTotal } from "@/lib/site";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: `Schedule & Pay — ${SITE.courseName} | ${SITE.name}` },
      {
        name: "description",
        content:
          "Enroll in The Puberty Box. First series Sep 12, 13, 20, 21 at 10 AM MST. Per-seat pricing with multi-seat discount.",
      },
    ],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  const [productId, setProductId] = useState<string>(PRODUCTS[1].id);
  const [seats, setSeats] = useState(1);
  const [tract, setTract] = useState<string>(TRACTS[0].id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [student, setStudent] = useState("");
  const [agree, setAgree] = useState(false);
  const [seriesSelected, setSeriesSelected] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const product = PRODUCTS.find((p) => p.id === productId) ?? PRODUCTS[0];
  const lockedTract = "tractId" in product && product.tractId ? product.tractId : null;
  const effectiveTract = lockedTract ?? tract;
  const tractLabel =
    TRACTS.find((t) => t.id === effectiveTract)?.name ?? effectiveTract;
  const totals = useMemo(() => calcSeatsTotal(product.price, seats), [product.price, seats]);
  const canPay = seriesSelected && name.trim() && email.trim() && agree && totals.seats >= 1;

  function handleCheckout() {
    if (!canPay) return;
    setSubmitted(true);
  }

  return (
    <SiteShell
      pageSlug="schedule"
      draft="Stripe test-mode ready · Meet link auto-emailed to purchaser · Multi-seat = 20% off additional seats"
    >
      <PageHero eyebrow="Enroll" title="Schedule & pay">
        <p>
          First series: <strong className="text-fg">{SERIES.dates}</strong> at{" "}
          <strong className="text-fg">{SERIES.time}</strong> on Google Meet. Introductory rates are per seat;
          additional seats are 20% off. After payment, the Meet link is emailed to the purchaser
          automatically.
        </p>
      </PageHero>

      <section className="py-12 sm:py-16">
        <div className="container-site max-w-3xl space-y-8">
          <Callout title="Seats & privacy">
            <p>
              Each participant needs their own seat. Parents may attend only if they purchase a seat
              (multi-seat discount applies).{" "}
              <strong className="text-fg">Caregivers are not required to attend</strong>—students may
              join on their own.
            </p>
            <p className="mt-3">
              <strong className="text-fg">Additional seats for the same class topic</strong> do{" "}
              <strong className="text-fg">not</strong> have to be used in the exact same session. A
              second seat (sibling, caregiver, or another student) can join a{" "}
              <strong className="text-fg">future offering of that same topic</strong> and still
              receive the 20% multi-seat discount.
            </p>
          </Callout>

          {submitted ? (
            <div className="rounded-xl border border-primary/30 bg-primary-soft/40 p-8 text-center">
              <h2 className="font-display text-2xl font-semibold text-fg">Enrollment recorded</h2>
              <p className="mx-auto mt-3 max-w-md text-fg-muted">
                Stripe Payment Links are not connected in this demo. Your order summary was prepared
                for <strong className="text-fg">{email}</strong> — total{" "}
                <strong className="text-fg">${totals.total.toFixed(2)}</strong> ({totals.seats} seat
                {totals.seats > 1 ? "s" : ""}
                ; tract: {tractLabel}).
              </p>
              <p className="mt-3 text-sm text-fg-subtle">
                In production, checkout completes via Stripe and the Google Meet link is emailed to
                the purchaser automatically.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button type="button" onClick={() => setSubmitted(false)}>
                  Edit enrollment
                </Button>
                <Button asChild variant="secondary">
                  <Link to="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  1. Series
                </p>
                <button
                  type="button"
                  onClick={() => setSeriesSelected(true)}
                  className={`w-full rounded-xl border p-5 text-left shadow-sm transition-colors ${
                    seriesSelected
                      ? "border-primary bg-primary-soft/30 ring-1 ring-primary/25"
                      : "border-border bg-bg-elevated hover:bg-bg-subtle"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-fg">{SERIES.title}</h3>
                      <p className="mt-1 text-sm text-fg-muted">
                        {SERIES.dates} · {SERIES.time}
                      </p>
                      <p className="mt-1 text-sm text-fg-subtle">{SERIES.format}</p>
                    </div>
                    <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-fg">
                      Open
                    </span>
                  </div>
                </button>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  2. Product & seats
                </p>
                <div className="space-y-4 rounded-xl border border-border bg-bg-elevated p-5 shadow-sm sm:p-6">
                  <label className="block space-y-1.5">
                    <span className="text-sm font-medium text-fg">Product (per seat)</span>
                    <select
                      className="field-input"
                      value={productId}
                      onChange={(e) => {
                        const next = e.target.value;
                        setProductId(next);
                        const chosen = PRODUCTS.find((p) => p.id === next);
                        if (chosen && "tractId" in chosen && chosen.tractId) {
                          setTract(chosen.tractId);
                        }
                      }}
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} — ${p.price}
                        </option>
                      ))}
                    </select>
                  </label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block space-y-1.5">
                      <span className="text-sm font-medium text-fg">Number of seats</span>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={seats}
                        onChange={(e) => setSeats(Number(e.target.value))}
                        className="field-input"
                      />
                      <span className="text-xs text-fg-subtle">
                        Seat 1 full price; each additional seat 20% off. Extra seats apply to the same
                        class topic—not required to be the same date/session (future sessions OK).
                      </span>
                    </label>
                    <label className="block space-y-1.5">
                      <span className="text-sm font-medium text-fg">Grade tract for student(s)</span>
                      <select
                        className="field-input"
                        value={lockedTract ?? tract}
                        disabled={Boolean(lockedTract)}
                        onChange={(e) => setTract(e.target.value)}
                      >
                        {TRACTS.map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.name} ({t.grades})
                          </option>
                        ))}
                      </select>
                      {lockedTract ? (
                        <span className="text-xs text-fg-subtle">
                          This package includes the full {TRACTS.find((t) => t.id === lockedTract)?.name}{" "}
                          tract.
                        </span>
                      ) : null}
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  3. Purchaser details
                </p>
                <div className="space-y-4 rounded-xl border border-border bg-bg-elevated p-5 shadow-sm sm:p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block space-y-1.5">
                      <span className="text-sm font-medium text-fg">Purchaser name</span>
                      <input
                        className="field-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="name"
                        required
                      />
                    </label>
                    <label className="block space-y-1.5">
                      <span className="text-sm font-medium text-fg">Purchaser email</span>
                      <input
                        type="email"
                        className="field-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                      />
                      <span className="text-xs text-fg-subtle">
                        Google Meet link and receipt go here
                      </span>
                    </label>
                  </div>
                  <label className="block space-y-1.5">
                    <span className="text-sm font-medium text-fg">
                      Student first name(s){" "}
                      <span className="font-normal text-fg-subtle">(roster only)</span>
                    </span>
                    <input
                      className="field-input"
                      value={student}
                      onChange={(e) => setStudent(e.target.value)}
                      placeholder="e.g., Alex"
                    />
                  </label>
                  <label className="flex items-start gap-3 text-sm text-fg-muted">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-border"
                    />
                    <span>
                      I agree to the{" "}
                      <Link to="/terms" className="font-medium">
                        Terms of Enrollment
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="font-medium">
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-bg-elevated p-5 shadow-sm sm:p-6">
                <h3 className="font-display text-lg font-semibold text-fg">Order summary</h3>
                <dl className="mt-4 space-y-2 text-sm">
                  <Row label="Series" value={SERIES.title} />
                  <Row label="Product" value={`${product.name} ($${product.price})`} />
                  <Row label="Tract" value={tractLabel} />
                  <Row label="Seats" value={String(totals.seats)} />
                  <Row label="List total" value={`$${totals.list.toFixed(2)}`} />
                  <Row label="Multi-seat savings" value={`−$${totals.savings.toFixed(2)}`} />
                  <div className="flex justify-between border-t border-border pt-3 text-base font-semibold text-fg">
                    <span>Total (USD)</span>
                    <span>${totals.total.toFixed(2)}</span>
                  </div>
                </dl>
                <p className="mt-3 text-xs text-fg-subtle">
                  Stripe Payment Links: demo mode (no live charges). Class 1 fit guarantee applies.
                </p>
                <span className="mt-3 inline-block rounded-full bg-bg-subtle px-3 py-1 text-xs font-medium text-fg-muted">
                  Stripe demo · connect live keys later
                </span>
                <div className="mt-5">
                  <Button
                    type="button"
                    className="w-full sm:w-auto"
                    disabled={!canPay}
                    onClick={handleCheckout}
                  >
                    Continue to payment
                  </Button>
                </div>
                {!canPay ? (
                  <p className="mt-2 text-xs text-fg-subtle">
                    Complete name, email, and terms to continue.
                  </p>
                ) : null}
              </div>

              <Callout title="After you pay">
                <ol className="ml-4 list-decimal space-y-1">
                  <li>Stripe confirms payment (when connected).</li>
                  <li>Confirmation email to the purchaser address.</li>
                  <li>
                    Same email includes the <strong className="text-fg">Google Meet link</strong> for
                    all sessions—sent automatically.
                  </li>
                  <li>
                    Jennifer is notified at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
                  </li>
                </ol>
              </Callout>

              <p className="text-sm text-fg-subtle">
                Schools / PTAs / custom cohorts: use the{" "}
                <Link to="/contact" className="font-medium">
                  contact form
                </Link>
                .
              </p>
            </>
          )}
        </div>
      </section>

      <style>{`
        .field-input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid var(--color-border);
          background: var(--color-bg);
          padding: 0.65rem 0.85rem;
          font-size: 0.95rem;
          color: var(--color-fg);
          outline: none;
        }
        .field-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 20%, transparent);
        }
      `}</style>
    </SiteShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 text-fg-muted">
      <dt>{label}</dt>
      <dd className="text-right text-fg">{value}</dd>
    </div>
  );
}
