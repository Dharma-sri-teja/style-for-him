import { createFileRoute, Link } from "@tanstack/react-router";
import korean from "@/assets/korean.jpg";
import oldmoney from "@/assets/oldmoney.jpg";
import quiet from "@/assets/quiet.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — srylewithus" },
      { name: "description", content: "Fashion essays, styling notes, and outfit inspiration for the modern man. Korean fashion, old money, quiet luxury." },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: Journal,
});

const posts = [
  {
    img: korean,
    tag: "Korean Fashion",
    title: "Seoul, slowly: building a Korean streetwear capsule",
    excerpt: "Five pieces that anchor a soft, considered Korean wardrobe — and why they all start with a beige overshirt.",
    read: "6 min",
  },
  {
    img: oldmoney,
    tag: "Old Money",
    title: "The cream polo: the most underrated piece in menswear",
    excerpt: "It survives summers, weddings, brunches, and bad weeks. Here's how to wear one without looking like your dad.",
    read: "4 min",
  },
  {
    img: quiet,
    tag: "Quiet Luxury",
    title: "Forest, navy, bone: a three-color rule for the modern wardrobe",
    excerpt: "On the discipline of restraint — and why the most expensive-looking men own twelve things.",
    read: "5 min",
  },
  {
    img: hero,
    tag: "Essentials",
    title: "Notes on cashmere: choosing, washing, keeping",
    excerpt: "A short field guide to the only sweater you should buy this year.",
    read: "3 min",
  },
];

function Journal() {
  return (
    <div className="container-luxe py-16 md:py-24">
      <p className="eyebrow">The Journal</p>
      <h1 className="font-display text-5xl md:text-6xl mt-4">Essays on dressing well.</h1>

      <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {posts.map((p, i) => (
          <Link to="/journal" key={i} className="group block">
            <div className="aspect-[4/3] overflow-hidden bg-[var(--bone)]">
              <img src={p.img} alt={p.title} loading="lazy" className="img-zoom h-full w-full object-cover" />
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs">
              <span className="eyebrow">{p.tag}</span>
              <span className="h-px w-8 bg-border" />
              <span className="text-muted-foreground">{p.read} read</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl mt-3 group-hover:text-accent transition-colors">
              {p.title}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
