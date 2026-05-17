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
  affiliate: string;
};

export const products: Product[] = [
  {
    slug: "cream-pique-polo",
    name: "Cream Piqué Polo",
    category: "Polo T-Shirts",
    price: "$48",
    image: polo,
    description:
      "A refined piqué polo cut from breathable cotton. Tailored collar, mother-of-pearl buttons, and a slim-yet-relaxed silhouette built for warm evenings and quiet rooms.",
    tips: [
      "Tuck into pleated trousers with loafers for old-money summer ease.",
      "Layer beneath a beige overshirt for a clean Seoul café look.",
      "Pair with a steel-link watch and tortoise sunglasses.",
    ],
    affiliate: "https://www.amazon.com/dp/B0C5M8R7GK?tag=srylewithus-20&linkCode=ll1"
  },
  {
    slug: "indigo-baggy-jeans",
    name: "Indigo Baggy Jeans",
    category: "Baggy Jeans",
    price: "$92",
    image: jeans,
    description:
      "Heavyweight selvedge denim with a wide, easy leg. Honest indigo wash and clean topstitching for a quiet streetwear staple.",
    tips: [
      "Cuff once over white leather sneakers.",
      "Anchor with a black knit and silver chain for Korean street energy.",
      "Stack over chunky loafers for downtown evenings.",
    ],
    affiliate: "https://www.amazon.com/dp/B08N5WRWNW?tag=srylewithus-20&linkCode=ll1"
  },
  {
    slug: "silver-link-watch",
    name: "Silver Link Watch",
    category: "Watches",
    price: "$185",
    image: watch,
    description:
      "Brushed stainless case on a five-link bracelet. Slim, unassuming, the kind of watch that earns trust over time.",
    tips: [
      "Slide under a knit cuff — let the bracelet peek.",
      "Works with polo, oxford, or bare wrist.",
      "Replace the leather strap seasonally to refresh the look.",
    ],
    affiliate: "https://www.amazon.com/dp/B07HDSK9VV?tag=srylewithus-20&linkCode=ll1"
  },
  {
    slug: "leather-court-sneaker",
    name: "Leather Court Sneaker",
    category: "Sneakers",
    price: "$120",
    image: sneakers,
    description:
      "Minimal court-style sneaker in full-grain leather. Clean lines, gum-edged sole, made to patina beautifully.",
    tips: [
      "Wear sockless with tailored shorts in summer.",
      "Pair with cream trousers for a quiet luxury Sunday.",
      "Keep them clean — that's the entire point.",
    ],
    affiliate: "https://www.amazon.com/dp/B07ZPKN6L8?tag=srylewithus-20&linkCode=ll1"
  },
  {
    slug: "tortoise-sunglasses",
    name: "Tortoise Sunglasses",
    category: "Sunglasses",
    price: "$68",
    image: sunglasses,
    description:
      "Hand-finished acetate frames in deep tortoise. Round-square silhouette that flatters most face shapes.",
    tips: [
      "Hook into a polo placket for editorial ease.",
      "Pair with a beige overshirt and silver chain.",
      "Wipe with a microfiber cloth — never your t-shirt.",
    ],
    affiliate: "https://www.amazon.com/dp/B01M1EEPOB?tag=srylewithus-20&linkCode=ll1"
  },
  {
    slug: "forest-cashmere-knit",
    name: "Forest Cashmere Knit",
    category: "Quiet Luxury Fits",
    price: "$210",
    image: knit,
    description:
      "Twelve-gauge cashmere in a deep forest tone. Crew neck, ribbed cuffs, the quietest piece in your wardrobe.",
    tips: [
      "Drape over the shoulders for an Italian evening.",
      "Tuck the front into pleated trousers for a sculpted line.",
      "Hand wash cold, dry flat — it will last a decade.",
    ],
    affiliate: "https://www.amazon.com/dp/B09QK4LQ7R?tag=srylewithus-20&linkCode=ll1"
  },
];

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
