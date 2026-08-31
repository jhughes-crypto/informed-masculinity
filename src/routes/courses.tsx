import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ModuleHover } from "@/components/ModuleHover";
import { CrosswalkBanner } from "@/components/CrosswalkBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Callout } from "@/components/ui/Callout";
import { Button } from "@/components/ui/button";
import { PRODUCTS, SERIES, SITE, TRACTS } from "@/lib/site";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: `${SITE.courseName} — Course Description | ${SITE.name}` },
      {
        name: "description",
        content:
          "The Puberty Box: live online puberty education for boys in grades 3–12. Three tracts, pricing, parent seats, Google Meet, weekends starting September.",
      },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <SiteShell
      pageSlug="courses"
      draft="Grades 3–12 · Caregiver attendance not required · First series Sep 12–21 · 10 AM MST"
    >
      <PageHero eyebrow="Course description" title={SITE.courseName}>
        <div className="not-prose mb-6 flex justify-center sm:justify-start">
          <img
            src="/puberty-box-logo.jpg"
            alt="The Puberty Box — boy and man silhouettes in a glowing hexagon"
            className="h-auto w-full max-w-[min(100%,22rem)] object-contain sm:max-w-md"
            width={640}
            height={360}
          />
        </div>
        <p>
          Live, science-based puberty education for boys in grades 3–12 offered by Informed Masculinity.
        </p>
        <p className="mt-2 italic text-fg-muted">{SITE.tagline}</p>
      </PageHero>

      <section className="page-content py-12 sm:py-16">
        <div className="container-site prose-im max-w-none">
          <Callout title="At a glance">
            <dl className="not-prose m-0 grid gap-3 sm:gap-3.5">
              <div className="grid gap-0.5 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                <dt className="text-sm font-semibold text-fg">Audience</dt>
                <dd className="m-0 text-sm text-fg-muted sm:text-base">
                  Boys in grades 3–12 in three grade-level tracts
                </dd>
              </div>
              <div className="grid gap-0.5 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                <dt className="text-sm font-semibold text-fg">Format</dt>
                <dd className="m-0 text-sm text-fg-muted sm:text-base">
                  Live online on <strong className="font-semibold text-fg">Google Meet</strong>{" "}
                  (60–90 min)
                </dd>
              </div>
              <div className="grid gap-0.5 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                <dt className="text-sm font-semibold text-fg">First series</dt>
                <dd className="m-0 text-sm text-fg-muted sm:text-base">
                  {SERIES.dates} at <strong className="font-semibold text-fg">{SERIES.time}</strong>
                </dd>
              </div>
              <div className="grid gap-0.5 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                <dt className="text-sm font-semibold text-fg">Parents / Caregivers</dt>
                <dd className="m-0 text-sm text-fg-muted sm:text-base">
                  <ul className="m-0 list-disc space-y-1.5 pl-5">
                    <li>Welcome with their own seat; not required to attend</li>
                    <li>
                      Caregivers receive course objectives and a conversation guide for each course
                    </li>
                  </ul>
                </dd>
              </div>
              <div className="grid gap-0.5 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                <dt className="text-sm font-semibold text-fg">Sensitive topics</dt>
                <dd className="m-0 text-sm text-fg-muted sm:text-base">
                  <ul className="m-0 list-disc space-y-1.5 pl-5">
                    <li>Age-targeted discussion, always using medically accurate terms</li>
                    <li>
                      Parents can opt-out on topics by selecting each course and creating their own
                      curriculum
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </Callout>

          <h2>Three grade-level tracts</h2>
          <p className="text-fg-muted">
            Tap a class title for learning objectives, guided by the{" "}
            <a
              href="https://www.futureofsexed.org/sex-ed-standards"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Sex Education Standards (3rd Edition)
            </a>
            .
          </p>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-3">
            {TRACTS.map((t) => (
              <article
                key={t.id}
                className="relative overflow-visible rounded-xl border border-border bg-bg-elevated p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {t.grades}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-fg">{t.name}</h3>
                <p className="mt-2 text-sm text-fg-muted">{t.blurb}</p>
                <ul className="mt-4 flex flex-col gap-1">
                  {t.modules.map((m) => (
                    <ModuleHover key={m.title} module={m} />
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="not-prose my-10">
            <CrosswalkBanner compact />
          </div>

          <h2>Cohort norms & privacy</h2>
          <ul>
            <li>Cameras optional for students; anonymous questions welcome.</li>
            <li>Norms: kindness, privacy, opt-out on sensitive prompts, correct/neutral terms.</li>
            <li>No anatomical close-ups or explicit imagery.</li>
            <li>Each student has their own surface to maintain anonymity for questions.</li>
            <li>
              Parents and siblings who want to attend must purchase their <strong>own seat</strong>.
              Multi-seat purchases receive a <strong>20% discount on additional seats</strong>.
            </li>
          </ul>

          <h2>Introductory rate (per seat)</h2>
          <div className="not-prose my-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((p) => (
              <Link
                key={p.id}
                to="/schedule"
                className={`group block rounded-xl border bg-bg-elevated p-5 shadow-sm no-underline transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                  "featured" in p && p.featured
                    ? "border-primary ring-1 ring-primary/20"
                    : "border-border"
                }`}
              >
                <h3 className="font-display text-xl font-semibold text-fg">{p.name}</h3>
                <p className="mt-2 font-display text-3xl font-semibold text-fg">${p.price}</p>
                <p className="mt-1 text-sm text-fg-subtle">{p.note}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-primary group-hover:underline">
                  Schedule & pay →
                </span>
              </Link>
            ))}
          </div>
          <p>
            <strong>Multi-seat discount:</strong> each <em>additional</em> seat is{" "}
            <strong>20% off</strong> for the same class topic (a future session of that topic is
            fine).
          </p>
          <p>
            <strong>Fit guarantee:</strong> If you don’t feel the fit is right after Class 1 /
            Session 1, email{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> within 24 hours for a full refund.
          </p>

          <h2>Questions?</h2>
          <p>
            See the full{" "}
            <Link to="/faq" className="font-semibold">
              FAQ
            </Link>{" "}
            for answers about sex ed approach, parent attendance, privacy, seats, and enrollment—or{" "}
            <Link to="/contact">contact us</Link>.
          </p>

          <div className="not-prose mt-10 rounded-xl bg-bg-ink p-8 text-center text-primary-fg">
            <h2 className="text-primary-fg">Ready to enroll?</h2>
            <p className="mt-2 text-silver">Pick a product tier, choose seats, and pay.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-primary-soft text-fg hover:bg-primary-soft/90">
                <Link to="/schedule">Schedule & pay</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="border-white/20 bg-transparent text-primary-fg hover:bg-white/10"
              >
                <Link to="/contact">Questions? Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
