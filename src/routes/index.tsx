import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import korean from "@/assets/korean.jpg";
import oldmoney from "@/assets/oldmoney.jpg";
import quiet from "@/assets/quiet.jpg";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "srylewithus — Quiet Luxury Menswear & Pinterest Style Edit" },
      { name: "description", content: "Trending men's fashion: Korean streetwear, old money outfits, quiet luxury essentials. Shop the edit on Amazon." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="container-luxe grid gap-10 lg:grid-cols-12 lg:gap-16 pt-12 pb-20 lg:pt-20 lg:pb-32">
          <div className="lg:col-span-6 flex flex-col justify-center fade-up">
            <p className="eyebrow">Edition Nº 04 — Spring</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mt-6 text-foreground">
              The quiet
              <br />
              <em className="not-italic text-accent">art</em> of dressing
              <br />
              well.
            </h1>
            <p className="mt-8 max-w-md text-base text-muted-foreground leading-relaxed">
              A men's wardrobe edited from Seoul to the South of France.
              Korean ease, old-money discipline, and the kind of pieces
              that last more than a season.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-sm tracking-widest uppercase text-background hover:bg-accent transition-colors"
              >
                Shop the edit
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/journal" className="eyebrow !text-foreground border-b border-foreground pb-1">
                Read the journal
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bone)]">
              <img
                src={hero}
                alt="Quiet luxury menswear editorial"
                width={1536}
                height={1920}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-background border border-border px-5 py-4">
              <p className="eyebrow">Featured</p>
              <p className="font-display text-lg">Cashmere & Cream</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES STRIP */}
      <section className="border-y border-border bg-[var(--bone)]">
        <div className="container-luxe py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {categories.map((c) => (
            <Link
              key={c}
              to="/shop"
              className="eyebrow hover:!text-accent transition-colors"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      {/* THREE WORLDS */}
      <section className="container-luxe py-24 md:py-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow">Three Worlds</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Find your register.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: korean, label: "Korean Streetwear", copy: "Soft tailoring, baggy denim, quiet confidence from Seoul." },
            { img: oldmoney, label: "Old Money", copy: "Cream polos, pleated chinos, the racquet club at dusk." },
            { img: quiet, label: "Quiet Luxury", copy: "Forest cashmere, black wool, nothing to prove." },
          ].map((w) => (
            <Link to="/shop" key={w.label} className="group block hover-lift">
              <div className="aspect-[3/4] overflow-hidden bg-[var(--bone)]">
                <img src={w.img} alt={w.label} loading="lazy" width={1024} height={1280}
                  className="img-zoom h-full w-full object-cover" />
              </div>
              <div className="mt-5">
                <p className="eyebrow">Edit</p>
                <h3 className="font-display text-2xl mt-1">{w.label}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{w.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRENDING PRODUCTS */}
      <section className="container-luxe py-16 md:py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow">Trending Now</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">The current obsession.</h2>
          </div>
          <Link to="/shop" className="eyebrow hidden md:inline-block !text-foreground border-b border-foreground pb-1">
            View all
          </Link>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      {/* EDITORIAL QUOTE */}
      <section className="bg-foreground text-background py-24 md:py-36 mt-16">
        <div className="container-luxe text-center">
          <p className="eyebrow !text-background/60">A note from the editor</p>
          <blockquote className="font-display text-3xl md:text-5xl mt-8 max-w-3xl mx-auto leading-tight">
            "Style is a slow accumulation. Buy fewer things.
            <em className="text-accent not-italic"> Buy better things.</em> Wear them
            until they remember you."
          </blockquote>
        </div>
      </section>
    </>
  );
}
