import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop the Edit — srylewithus" },
      { name: "description", content: "Browse curated men's fashion: polos, baggy jeans, watches, sneakers, sunglasses and quiet luxury knits." },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

function Shop() {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="container-luxe py-16 md:py-24">
      <p className="eyebrow">The Shop</p>
      <h1 className="font-display text-5xl md:text-6xl mt-4">Every piece, considered.</h1>
      <p className="mt-5 max-w-xl text-muted-foreground">
        A focused selection of menswear shoppable directly via Amazon. Tap any piece
        to read the styling note and grab the link.
      </p>

      <div className="mt-12 flex flex-wrap gap-2 border-y border-border py-5">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`eyebrow px-4 py-2 transition-colors ${
              active === c ? "bg-foreground !text-background" : "hover:!text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => <ProductCard key={p.slug} product={p} />)}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-24">More pieces in this category coming soon.</p>
      )}
    </div>
  );
}
