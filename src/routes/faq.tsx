import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { FaqMark } from "@/components/FaqMark";
import { Button } from "@/components/ui/button";
import { SERIES, SITE, chatbotHref } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `FAQ — ${SITE.name}` },
      {
        name: "description",
        content:
          "Frequently asked questions about The Puberty Box: sex ed approach, parent attendance, privacy, seats, pricing, and enrollment.",
      },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  {
    q: "Is this “sex ed”?",
    a: (
      <>
        This is sex ed that goes light years beyond how to put a condom on a banana. It gives the
        students agency for preventative self-care. A narrative that isn’t derogatory or shaming for
        masturbation. A path out of the bullying cycle. And a roadmap to how to take care of their
        bodies for the rest of their lives—including learning about{" "}
        <strong className="text-fg">male contraceptives going through clinical trials</strong> and{" "}
        <strong className="text-fg">female contraceptives in development</strong>, not only methods
        that already exist.
      </>
    ),
  },
  {
    q: "Must a parent or caregiver attend?",
    a: (
      <>
        No. Caregivers are not required to attend—students may join on their own. Parents and
        siblings who want to attend must purchase their own seat. Multi-seat purchases receive a 20%
        discount on additional seats.
      </>
    ),
  },
  {
    q: "Do additional seats have to be the same session?",
    a: (
      <>
        No. An extra seat for the <strong className="text-fg">same class topic</strong> does not
        need to be the exact same session date. A sibling, caregiver, or another student can use
        that seat in a <strong className="text-fg">future offering of that topic</strong> and still
        get 20% off.
      </>
    ),
  },
  {
    q: "How are private questions handled?",
    a: (
      <>
        Students can ask anonymous questions in class. Outside of class, families can use{" "}
        <a href={chatbotHref("faq")} target="_blank" rel="noopener noreferrer">
          The PubertyBot
        </a>{" "}
        (placeholder until live). Caregivers also receive course objectives and a conversation guide
        for each class.
      </>
    ),
  },
  {
    q: "What is The PubertyBot?",
    a: (
      <>
        <strong className="text-fg">The PubertyBot</strong> is our anonymous Q&A chatbot for
        private puberty and sexual health questions. It answers from a curated question bank.{" "}
        <strong className="text-fg">
          Questions the bank cannot handle are directed to the instructor
        </strong>{" "}
        for a personalized response—and to improve the question bank over time.
        <br />
        <br />
        Questions submitted to the bot{" "}
        <strong className="text-fg">
          never include identifying information other than age and gender
        </strong>
        . Anonymized questions and related information may be used to improve the model, support
        future curriculum development, and—with appropriate consent—future research
        endeavors.
      </>
    ),
  },
  {
    q: "Who is The Puberty Box for?",
    a: (
      <>
        Live online puberty education for boys in grades 3–12, organized into three grade-level
        tracts: Foundations (grades 3–5), Navigators (grades 6–8), and Builders (grades 9–12).
      </>
    ),
  },
  {
    q: "What is the Class 1 fit guarantee?",
    a: (
      <>
        If you don’t feel the fit is right after Class 1 / Session 1, email{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> within 24 hours for a full refund.
      </>
    ),
  },
  {
    q: "When is the next series?",
    a: (
      <>
        First series: <strong className="text-fg">{SERIES.dates}</strong> at{" "}
        <strong className="text-fg">{SERIES.time}</strong> on Google Meet. See{" "}
        <Link to="/schedule">Schedule & pay</Link> to enroll.
      </>
    ),
  },
  {
    q: "Is the curriculum aligned to national standards?",
    a: (
      <>
        Yes. Classes are tagged to National Sex Education Standards (3rd Edition) topic strands and
        grade bands. See the full{" "}
        <Link to="/standards-crosswalk">NSES standards crosswalk</Link>.
      </>
    ),
  },
] as const;

function FaqPage() {
  return (
    <SiteShell pageSlug="faq">
      <header className="relative overflow-hidden border-b border-border bg-bg-elevated">
        {/* Soft glow */}
        <div
          className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-primary-soft/50 blur-2xl"
          aria-hidden
        />
        {/* Question-mark cluster watermark */}
        <div
          className="pointer-events-none absolute -right-4 top-0 h-44 w-64 select-none sm:right-4 sm:h-52 sm:w-80 lg:right-12 lg:h-56 lg:w-[22rem]"
          aria-hidden
        >
          <FaqMark className="h-full w-full" opacity={0.18} />
        </div>

        <div className="container-site relative py-12 sm:py-16">
          <div className="flex items-center gap-2.5">
            <span
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft ring-1 ring-primary/15"
              aria-hidden
            >
              <FaqMark className="h-6 w-6" opacity={1} variant="badge" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Help</p>
          </div>
          <h1 className="mt-3 max-w-3xl text-3xl sm:text-4xl md:text-[2.65rem]">
            Frequently asked questions
          </h1>
          <p className="mt-4 max-w-2xl text-base text-fg-muted sm:text-lg">
            Straight answers about {SITE.courseName}, enrollment, privacy, and how we teach. Still
            stuck?{" "}
            <Link to="/contact" className="font-medium">
              Contact us
            </Link>
            .
          </p>
        </div>
      </header>

      <section className="py-12 sm:py-16">
        <div className="container-site max-w-3xl">
          <div className="space-y-4">
            {FAQS.map((item) => (
              <article
                key={item.q}
                className="rounded-xl border border-border bg-bg-elevated p-5 shadow-sm sm:p-6"
              >
                <div className="flex gap-3">
                  <span
                    className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary"
                    aria-hidden
                  >
                    <FaqMark className="h-4 w-4" opacity={1} variant="badge" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display text-lg font-semibold text-fg sm:text-xl">
                      {item.q}
                    </h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-fg-muted sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="not-prose mt-12 rounded-xl bg-bg-ink p-8 text-center text-primary-fg">
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
