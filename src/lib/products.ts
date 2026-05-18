import polo from "@/assets/p-polo.jpg";
import jeans from "@/assets/p-jeans.jpg";
import watch from "@/assets/p-watch.jpg";
import sneakers from "@/assets/p-sneakers.jpg";
import sunglasses from "@/assets/p-sunglasses.jpg";
import knit from "@/assets/p-knit.jpg";

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  tips: string[];
  asin: string;
};

/** Amazon Associates India tracking ID. Update here to change site-wide. */
export const AMAZON_AFFILIATE_TAG = "srylewithus21-21";

/** Valid Amazon ASINs are 10 chars: starts with B + 9 alphanumerics, or 10 digits (older books). */
const ASIN_REGEX = /^(B[0-9A-Z]{9}|\d{10})$/;

export const isValidAsin = (asin: string | undefined | null): boolean =>
  !!asin && ASIN_REGEX.test(asin);

/**
 * Generate a valid Amazon India affiliate URL for a given ASIN.
 * Returns null if the ASIN is invalid — caller should hide the product.
 */
export const getAffiliateUrl = (asin: string): string | null => {
  if (!isValidAsin(asin)) return null;
  return `https://www.amazon.in/dp/${asin}/?tag=${AMAZON_AFFILIATE_TAG}`;
};

const rawProducts: Product[] = [
  {
    slug: "cream-pique-polo",
    name: "Cream Piqué Polo",
    category: "Polo T-Shirts",
    price: "₹1,299",
    image: polo,
    description:
      "A refined piqué polo cut from breathable cotton. Tailored collar, mother-of-pearl buttons, and a slim-yet-relaxed silhouette built for warm evenings and quiet rooms.",
    tips: [
      "Tuck into pleated trousers with loafers for old-money summer ease.",
      "Layer beneath a beige overshirt for a clean Seoul café look.",
      "Pair with a steel-link watch and tortoise sunglasses.",
    ],
    asin: "B0CRDDP5XK",
  },
  {
    slug: "indigo-baggy-jeans",
    name: "Indigo Baggy Jeans",
    category: "Baggy Jeans",
    price: "₹1,899",
    image: jeans,
    description:
      "Heavyweight denim with a wide, easy leg. Honest indigo wash and clean topstitching for a quiet streetwear staple.",
    tips: [
      "Cuff once over white leather sneakers.",
      "Anchor with a black knit and silver chain for Korean street energy.",
      "Stack over chunky loafers for downtown evenings.",
    ],
    asin: "B0CHDQX6KL",
  },
  {
    slug: "silver-link-watch",
    name: "Silver Link Watch",
    category: "Watches",
    price: "₹4,499",
    image: watch,
    description:
      "Brushed stainless case on a five-link bracelet. Slim, unassuming, the kind of watch that earns trust over time.",
    tips: [
      "Slide under a knit cuff — let the bracelet peek.",
      "Works with polo, oxford, or bare wrist.",
      "Replace the leather strap seasonally to refresh the look.",
    ],
    asin: "B07GVR9TS8",
  },
  {
    slug: "leather-court-sneaker",
    name: "Leather Court Sneaker",
    category: "Sneakers",
    price: "₹2,799",
    image: sneakers,
    description:
      "Minimal court-style sneaker in full-grain leather. Clean lines, gum-edged sole, made to patina beautifully.",
    tips: [
      "Wear sockless with tailored shorts in summer.",
      "Pair with cream trousers for a quiet luxury Sunday.",
      "Keep them clean — that's the entire point.",
    ],
    asin: "B0BTYCRJSS",
  },
  {
    slug: "tortoise-sunglasses",
    name: "Tortoise Sunglasses",
    category: "Sunglasses",
    price: "₹1,499",
    image: sunglasses,
    description:
      "Hand-finished acetate frames in deep tortoise. Round-square silhouette that flatters most face shapes.",
    tips: [
      "Hook into a polo placket for editorial ease.",
      "Pair with a beige overshirt and silver chain.",
      "Wipe with a microfiber cloth — never your t-shirt.",
    ],
    asin: "B08L5VG843",
  },
  {
    slug: "forest-cashmere-knit",
    name: "Forest Cashmere Knit",
    category: "Quiet Luxury Fits",
    price: "₹3,299",
    image: knit,
    description:
      "Fine-gauge knit in a deep forest tone. Crew neck, ribbed cuffs, the quietest piece in your wardrobe.",
    tips: [
      "Drape over the shoulders for an Italian evening.",
      "Tuck the front into pleated trousers for a sculpted line.",
      "Hand wash cold, dry flat — it will last a decade.",
    ],
    asin: "B0CJ7P82L9",
  },
];

/** Only products with valid ASINs are rendered — broken links are hidden automatically. */
export const products: Product[] = rawProducts.filter((p) => isValidAsin(p.asin));

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const categories = [
  "Polo T-Shirts",
  "Baggy Jeans",
  "Korean Fashion",
  "Watches",
  "Sneakers",
  "Sunglasses",
  "Quiet Luxury Fits",
];
