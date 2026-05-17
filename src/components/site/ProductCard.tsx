import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { Bookmark } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const pinUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    `https://srylewithus.com/product/${product.slug}`
  )}&media=&description=${encodeURIComponent(product.name)}`;
  return (
    <article className="group">
      <Link to="/product/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bone)]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={1024}
            height={1280}
            className="img-zoom h-full w-full object-cover"
          />
          <a
            href={pinUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label="Save to Pinterest"
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100"
          >
            <Bookmark size={15} />
          </a>
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">{product.category}</p>
            <h3 className="font-display text-xl mt-1 text-foreground">{product.name}</h3>
          </div>
          <span className="text-sm text-muted-foreground pt-1">{product.price}</span>
        </div>
      </Link>
    </article>
  );
}
