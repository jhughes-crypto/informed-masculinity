import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { FlaskConical, Layers, HeartHandshake, Lock } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { FlipCard } from "@/components/FlipCard";
import { ModuleHover } from "@/components/ModuleHover";
import { CrosswalkBanner } from "@/components/CrosswalkBanner";
import { Button } from "@/components/ui/button";
import { PRODUCTS, SERIES, SITE, TRACTS, chatbotHref } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${SITE.name} — ${SITE.tagline}`,
      },
      {
        name: "description",
        content: `${SITE.courseName}: live online puberty education for boys in grades 3–12.`,
      },
    ],
  }),
  component: HomePage,
});

const HIGHLIGHTS = [
  {
    icon: FlaskConical,
    title: "Science-led",
    body: "Taught by a PhD reproductive physiologist. Aligned with national standards.",
  },
  {
    icon: Layers,
    title: "Age-banded",
    body: "Three tracts across grades 3–12—Foundations, Navigators, and Builders.",
  },
  {
    icon: HeartHandshake,
    title: "Parent partnership",
    body: "Guides for Caregivers, student privacy is our priority.",
  },
] as const;

function HomePage() {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <SiteShell
      pageSlug="home"
      draft={`First series: ${SERIES.dates.replace(", 2026", "")} · ${SERIES.time} · Stripe checkout ready for test mode`}
    >
      {/* Hero */}
      <section className="border-b border-border bg-bg-elevated py-12 sm:py-16">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {SITE.tagline}
            </p>
            <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
              Puberty education for boys,{" "}
              <span className="text-primary">grounded in science.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-fg-muted">
              <strong className="font-semibold text-fg">{SITE.courseName}</strong> is our live online
              course for boys in grades <strong className="font-semibold text-fg">3–12</strong>—honest,
              grade-banded answers about bodies, feelings, and health—offered by{" "}
              <strong className="font-semibold text-fg">{SITE.name}</strong>, a Colorado 501(c)(3)
              nonprofit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/schedule">Schedule & pay</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={chatbotHref("home")} target="_blank" rel="noopener noreferrer">
                  Ask anonymously
                </a>
              </Button>
            </div>
            <p className="mt-5 text-sm text-fg-subtle">
              <strong className="font-semibold text-fg">First series:</strong> {SERIES.dates} ·{" "}
              {SERIES.time} · Google Meet · Multi-seat discounts
            </p>
          </div>
          <div>
            <img
              className="aspect-[4/5] w-full rounded-xl border border-border object-cover object-[center_20%] shadow-md sm:aspect-[5/4] lg:aspect-[4/5]"
              src="/hero-illustration.jpg"
              alt="Young person learning about health online at a desk"
              width={800}
              height={1000}
            />
          </div>
        </div>
      </section>

      {/* Why this why now */}
      <section className="py-16 sm:py-20">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Why This, Why Now?
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Boys are getting their answers from the wrong places.
            </h2>
            <p className="mt-4 text-fg-muted">
              Peers, algorithms, and locker rooms aren’t curriculum. We replace noise with a calm,
              expert voice—and hand the conversation back to families.
            </p>
          </div>
          <div className="mt-12 grid items-start gap-4 sm:grid-cols-3 sm:gap-5">
            {HIGHLIGHTS.map((item) => (
              <FlipCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                body={item.body}
                open={openTitle === item.title}
                onOpen={() => setOpenTitle(item.title)}
                onClose={() =>
                  setOpenTitle((current) => (current === item.title ? null : current))
                }
              />
            ))}
          </div>
          <div className="mt-10 grid gap-5 rounded-xl border border-border bg-bg-elevated p-7 shadow-sm md:grid-cols-[auto_1fr] md:gap-8">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary-soft text-primary">
              <Lock className="h-5 w-5" strokeWidth={2} aria-hidden />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Privacy-first
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">
                Ask freely. Stay anonymous. Protect every student.
              </h3>
              <p className="mt-3 text-fg-muted">
                Classes run on a{" "}
                <strong className="font-semibold text-fg">synchronous online platform</strong> with
                an <strong className="font-semibold text-fg">anonymous chat interface</strong>, so
                every question gets answered without embarrassment or shame.
              </p>
              <p className="mt-3 mb-0 text-fg-muted">
                Parents and caregivers are welcome to attend, but they{" "}
                <strong className="font-semibold text-fg">must have their own seat</strong> to protect
                the privacy of all students—including their own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracts */}
      <section className="border-y border-border bg-bg-elevated py-16 sm:py-20">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {SITE.courseName}
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Thirteen modules. Three tracts. One arc.
            </h2>
            <p className="mt-4 text-fg-muted">
              From “what’s happening to my body?” at age 8 to “what does healthy masculinity
              actually look like?” at 17. Tap or hover a class for learning objectives.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TRACTS.map((t) => (
              <article
                key={t.id}
                className="relative flex flex-col overflow-visible rounded-xl border border-border bg-bg p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {t.grades}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold">{t.name}</h3>
                <p className="mt-2 text-sm text-fg-muted">{t.blurb}</p>
                <ul className="mt-4 flex flex-1 flex-col gap-1">
                  {t.modules.map((m) => (
                    <ModuleHover key={m.title} module={m} />
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-16 sm:py-20">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Introductory rate · per seat
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Pick what fits. Save on multiple seats.</h2>
            <p className="mt-4 text-fg-muted">
              Additional seats for the same class topic are{" "}
              <strong className="font-semibold text-fg">20% off for siblings or caregivers</strong>
              —including a future session of that topic.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((p) => (
              <Link
                key={p.id}
                to="/schedule"
                className={`group block rounded-xl border bg-bg-elevated p-6 shadow-sm no-underline transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                  "featured" in p && p.featured
                    ? "border-primary ring-1 ring-primary/20"
                    : "border-border"
                }`}
              >
                <h3 className="font-display text-xl font-semibold text-fg">{p.name}</h3>
                <p className="mt-2 font-display text-4xl font-semibold text-fg">${p.price}</p>
                <p className="mt-1 text-sm text-fg-subtle">{p.note}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-fg-muted">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <span className="mt-5 flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-fg transition-colors group-hover:bg-primary/90">
                  Schedule & pay
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-fg-subtle">
            <Link to="/courses" className="font-medium">
              See full course details →
            </Link>
          </p>
        </div>
      </section>

      {/* Chat CTA */}
      <section className="bg-bg-ink py-16 text-primary-fg sm:py-20">
        <div className="container-site text-center">
          <h2 className="text-primary-fg">Have a private question?</h2>
          <p className="mx-auto mt-3 max-w-xl text-silver">
            Our anonymous Q&A chatbot is a separate tool (placeholder until live). No name required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-primary-soft text-fg hover:bg-primary-soft/90">
              <a href={chatbotHref("home")} target="_blank" rel="noopener noreferrer">
                Open anonymous chatbot
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="border-white/20 bg-transparent text-primary-fg hover:bg-white/10"
            >
              <Link to="/contact">Contact the team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-16 sm:py-20">
        <div className="container-site grid items-center gap-6 sm:gap-8 md:grid-cols-[auto_1fr] md:gap-10">
          <img
            className="mx-auto h-44 w-44 shrink-0 rounded-full border border-border object-cover object-top shadow-md sm:h-52 sm:w-52 md:mx-0"
            src="/headshot.jpg"
            alt={`${SITE.founder}, founder of ${SITE.name}`}
            width={208}
            height={208}
          />
          <div className="min-w-0 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              About the organization
            </p>
            <h2 className="mt-3">{SITE.name}</h2>
            <p className="mt-4 text-fg-muted">
              {SITE.name} is a Colorado <strong className="font-semibold text-fg">501(c)(3)</strong>{" "}
              nonprofit. <strong className="font-semibold text-fg">{SITE.courseName}</strong> is the
              course we offer to families seeking science-based puberty education for boys in grades
              3–12.
            </p>
            <p className="mt-3 text-fg-muted">
              Founded by <strong className="font-semibold text-fg">{SITE.founder}</strong>, a
              reproductive physiologist (PhD, UC Davis), the organization’s mission is to offer
              clear, respectful reproductive education for men and the people who raise them, and to
              advocate for comprehensive reproductive education for all.
            </p>
            <p className="mt-4 text-sm text-fg-subtle">
              <Link to="/about" className="font-medium">
                More about us →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Standards */}
      {/* NSES crosswalk emphasis */}
      <section className="border-t border-border bg-bg-subtle py-14 sm:py-16">
        <div className="container-site">
          <CrosswalkBanner />
        </div>
      </section>
    </SiteShell>
  );
}
