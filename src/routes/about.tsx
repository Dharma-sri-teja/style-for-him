import { createFileRoute } from "@tanstack/react-router";
import quiet from "@/assets/quiet.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — srylewithus" },
      { name: "description", content: "The story behind srylewithus — a men's wardrobe edit inspired by Korean fashion, old money style, and quiet luxury." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="container-luxe py-20 md:py-32 grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="aspect-[3/4] overflow-hidden bg-[var(--bone)] sticky top-24">
            <img src={quiet} alt="Quiet luxury menswear" width={1024} height={1280}
              className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="eyebrow">About</p>
          <h1 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05]">
            A wardrobe edited from
            <br /><em className="text-accent not-italic">Seoul to Saint-Tropez.</em>
          </h1>

          <div className="mt-10 space-y-6 text-foreground/80 leading-relaxed">
            <p>
              srylewithus began as a Pinterest board — a quiet collection of men
              dressed with intention. Soft Korean tailoring next to old-money
              chinos. Forest cashmere beside white leather sneakers. None of it
              shouted. All of it stayed.
            </p>
            <p>
              We turned that board into a shop. Every piece here is sourced from
              Amazon — not because it's easy, but because we believe quiet
              luxury isn't a price point. It's a posture.
            </p>
            <p>
              Our edit favors three registers: <strong className="text-foreground">Korean ease</strong>,
              for the man who moves through cities; <strong className="text-foreground">old money</strong>,
              for the man who values continuity; and <strong className="text-foreground">quiet luxury</strong>,
              for the man with nothing to prove.
            </p>
            <p>
              We don't manufacture. We don't markup. We curate, we style, we link.
              If a piece earns its place in your wardrobe, that's the only review
              we need.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8 border-t border-border pt-10">
            {[
              { n: "200+", l: "Pieces curated" },
              { n: "12k", l: "Pinterest saves / mo" },
              { n: "3", l: "Style registers" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl md:text-4xl text-foreground">{s.n}</p>
                <p className="eyebrow mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
