import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Bookmark } from "lucide-react";
import { getProduct, products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData, params }) => ({
    meta: [
      { title: loaderData ? `${loaderData.name} — srylewithus` : "Product" },
      { name: "description", content: loaderData?.description ?? "" },
      { property: "og:title", content: loaderData?.name ?? "" },
      { property: "og:description", content: loaderData?.description ?? "" },
      { property: "og:image", content: loaderData?.image ?? "" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: `/product/${params.slug}` }],
    scripts: loaderData
      ? [{
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: loaderData.name,
            description: loaderData.description,
            category: loaderData.category,
            offers: { "@type": "Offer", price: loaderData.price.replace("$", ""), priceCurrency: "USD" },
          }),
        }]
      : [],
  }),
  component: ProductPage,
});

function ProductPage() {
  const product = Route.useLoaderData();
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const pinUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    `https://srylewithus.com/product/${product.slug}`
  )}&media=&description=${encodeURIComponent(product.name)}`;

  return (
    <>
      <div className="container-luxe py-12 md:py-20">
        <Link to="/shop" className="eyebrow hover:!text-accent">← Back to shop</Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-[var(--bone)]">
              <img src={product.image} alt={product.name} width={1024} height={1280}
                className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square overflow-hidden bg-[var(--bone)] opacity-70">
                  <img src={product.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Detail */}
          <div className="lg:pt-6">
            <p className="eyebrow">{product.category}</p>
            <h1 className="font-display text-4xl md:text-5xl mt-3">{product.name}</h1>
            <p className="mt-6 text-2xl text-muted-foreground">{product.price}</p>

            <p className="mt-8 text-base leading-relaxed text-foreground/80">
              {product.description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href={product.affiliate}
                target="_blank"
                rel="noopener nofollow sponsored"
                className="group inline-flex items-center justify-center gap-3 bg-foreground px-8 py-4 text-sm tracking-widest uppercase text-background hover:bg-accent transition-colors"
              >
                Buy on Amazon
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={pinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-foreground px-6 py-4 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                <Bookmark size={15} /> Save
              </a>
            </div>

            <div className="mt-12 border-t border-border pt-10">
              <p className="eyebrow">Styling Notes</p>
              <ul className="mt-5 space-y-4">
                {product.tips.map((t: string, i: number) => (
                  <li key={i} className="flex gap-4 text-sm text-foreground/80">
                    <span className="font-display text-accent text-lg leading-none">0{i + 1}</span>
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-10 text-xs text-muted-foreground">
              srylewithus is an Amazon Associate. We earn from qualifying purchases at no extra cost to you.
            </p>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="container-luxe py-20 border-t border-border">
        <p className="eyebrow">Pair it with</p>
        <h2 className="font-display text-3xl md:text-4xl mt-3 mb-10">Related outfits</h2>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
    </>
  );
}
