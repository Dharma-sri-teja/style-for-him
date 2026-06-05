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

export const AMAZON_AFFILIATE_TAG = "srylewithus21-21";

const ASIN_REGEX = /^(B[0-9A-Z]{9}|\d{10})$/;

export const isValidAsin = (asin: string | undefined | null): boolean =>
  !!asin && ASIN_REGEX.test(asin);

export const getAffiliateUrl = (asin: string): string | null => {
  if (!isValidAsin(asin)) return null;
  return `https://www.amazon.in/dp/${asin}/?tag=${AMAZON_AFFILIATE_TAG}`;
};

const rawProducts: Product[] = [
  {
    slug: "cream-pique-polo",
    name: "Cream Piqué Polo",
    category: "Polo T-Shirts",
    price: "₹7,900",
    image: "https://m.media-amazon.com/images/I/A11jfEmNhdL._SX679_.jpg",
    description:
      "A refined piqué polo cut from breathable cotton. Tailored collar, mother-of-pearl buttons, and a slim-yet-relaxed silhouette built for warm evenings and quiet rooms.",
    tips: [
      "Tuck into pleated trousers with loafers for old-money summer ease.",
      "Layer beneath a beige overshirt for a clean Seoul café look.",
      "Pair with a steel-link watch and tortoise sunglasses.",
    ],
    asin: "B099KKLMSR",
  },
  {
    slug: "souled-store-plaid-shirt",
    name: "Plaid Collared Shirt",
    category: "Shirts",
    price: "₹1,449",
    image: "https://m.media-amazon.com/images/I/814IIfW62OL._SX679_.jpg",
    description:
      "The Souled Store's plaid collared shirt in a clean check pattern. Relaxed regular fit, soft fabric, and a collar that holds its shape — the kind of shirt that looks considered without trying.",
    tips: [
      "Leave untucked over slim chinos for a casual weekend look.",
      "Button to the top and tuck in for a clean Korean prep aesthetic.",
      "Layer over a white tee with the sleeves rolled for effortless summer style.",
    ],
    asin: "B0CVKZMFKB",
  },
  {
    slug: "flannel-button-shirt",
    name: "Flannel Button Shirt",
    category: "Shirts",
    price: "₹499",
    image: "https://m.media-amazon.com/images/I/51bpPpB9BqL.jpg",
    description:
      "A soft flannel shirt in a classic pattern with a chest pocket and relaxed sleeve. Lightweight, easygoing, and built for layering — the kind of piece that gets better with every wash.",
    tips: [
      "Wear open over a plain tee for a laid-back street look.",
      "Half-tuck into baggy jeans with white sneakers for Korean casual energy.",
      "Roll the sleeves to the elbow — it's the only way to wear flannel in warm weather.",
    ],
    asin: "B0GQQ4YS94",
  },
  {
    slug: "indigo-baggy-jeans",
    name: "Indigo Baggy Jeans",
    category: "Baggy Jeans",
    price: "₹999",
    image: "https://m.media-amazon.com/images/I/91ckM8pz-XL._SX679_.jpg",
    description:
      "Heavyweight denim with a wide, easy leg. Honest indigo wash and clean topstitching for a quiet streetwear staple.",
    tips: [
      "Cuff once over white leather sneakers.",
      "Anchor with a black knit and silver chain for Korean street energy.",
      "Stack over chunky loafers for downtown evenings.",
    ],
    asin: "B0CR9TLVPF",
  },
  {
    slug: "wide-leg-baggy-jeans",
    name: "Wide Leg Baggy Jeans",
    category: "Baggy Jeans",
    price: "₹479",
    image: "https://m.media-amazon.com/images/I/41MBH8nt7HL._MCnd_AC_.jpg",
    description:
      "Easy wide-leg denim at an honest price. Clean wash, relaxed silhouette, and a versatile cut that works from campus to street.",
    tips: [
      "Pair with a crisp white tee and clean sneakers for effortless everyday wear.",
      "Fold the cuff once for a sharper ankle line.",
      "Layer a hoodie or oversized tee for a classic Korean street look.",
    ],
    asin: "B0DWK2B887",
  },
  {
    slug: "kvetoo-high-neck-sweater",
    name: "High Neck Zipper Sweater",
    category: "Korean Fashion",
    price: "₹705",
    image: "https://m.media-amazon.com/images/I/61h448vEmPL._SX679_.jpg",
    description:
      "Kvetoo's high neck zipper knit in a clean solid tone. Full sleeve, ribbed cuffs, and a structured silhouette that captures Korean winter layering at an honest price.",
    tips: [
      "Wear zipped up fully with baggy jeans and white sneakers for a clean Seoul-inspired fit.",
      "Half-zip over a longline tee for a layered editorial look.",
      "The structured neck holds its shape — no ironing needed.",
    ],
    asin: "B0DDWK6DSL",
  },
  {
    slug: "silver-link-watch",
    name: "Silver Link Watch",
    category: "Watches",
    price: "₹1,675",
    image: "https://m.media-amazon.com/images/I/51V0QjoUh9L._SX679_.jpg",
    description:
      "Brushed stainless case on a five-link bracelet. Slim, unassuming, the kind of watch that earns trust over time.",
    tips: [
      "Slide under a knit cuff — let the bracelet peek.",
      "Works with polo, oxford, or bare wrist.",
      "Replace the leather strap seasonally to refresh the look.",
    ],
    asin: "B00ISNVM0S",
  },
  {
    slug: "sonata-analog-watch",
    name: "Sonata Analog Watch",
    category: "Watches",
    price: "₹849",
    image: "https://m.media-amazon.com/images/I/61eYSQwKGLL._SY741_.jpg",
    description:
      "A clean Sonata analog with a white dial and slim case. No fuss, no excess — just reliable timekeeping in a quietly sharp package.",
    tips: [
      "Wear with a polo or oxford for a put-together everyday look.",
      "The white dial reads well against a dark knit cuff.",
      "A great entry point — clean, readable, built to last.",
    ],
    asin: "B00BPF1XZA",
  },
  {
    slug: "white-court-sneaker",
    name: "White Court Sneaker",
    category: "Sneakers",
    price: "₹4,499",
    image: "https://m.media-amazon.com/images/I/61WOArNjbnL._SY695_.jpg",
    description:
      "Puma Smash V2 — the all-time classic tennis court sneaker in clean all-white leather. Minimal, timeless, built for daily wear.",
    tips: [
      "Wear sockless with tailored shorts in summer.",
      "Pair with cream trousers for a quiet luxury Sunday.",
      "Keep them clean — that's the entire point.",
    ],
    asin: "B077MFTZB7",
  },
  {
    slug: "asian-basketball-sneaker",
    name: "ASIAN Basket-14 Sneaker",
    category: "Sneakers",
    price: "₹1,299",
    image: "https://m.media-amazon.com/images/I/71s8SzcDYvL._SY625_.jpg",
    description:
      "ASIAN's Basket-14 with cushioned sole and a bold high-top silhouette. Built for the court but worn on the street — chunky, confident, and easy to style.",
    tips: [
      "Pair with baggy jeans cuffed at the ankle to let the sneaker speak.",
      "Wear with a plain tee and joggers for clean athleisure energy.",
      "The chunky sole adds height — style with slim-fit pieces to balance.",
    ],
    asin: "B0G954CQ5S",
  },
  {
    slug: "tortoise-sunglasses",
    name: "Tortoise Sunglasses",
    category: "Sunglasses",
    price: "₹4,510",
    image: "https://m.media-amazon.com/images/I/81l0QF2kLyL._SX679_.jpg",
    description:
      "Hand-finished acetate frames in deep tortoise. Round-square silhouette that flatters most face shapes.",
    tips: [
      "Hook into a polo placket for editorial ease.",
      "Pair with a beige overshirt and silver chain.",
      "Wipe with a microfiber cloth — never your t-shirt.",
    ],
    asin: "B07K22WV7W",
  },
  {
    slug: "elegante-silver-sunglasses",
    name: "Elegante Silver Sunglasses",
    category: "Sunglasses",
    price: "₹426",
    image: "https://m.media-amazon.com/images/I/515gKnUgwpL._SX679_.jpg",
    description:
      "Lightweight silver-black frames from Elegante. Slim metal build, UV-protective lenses, and a clean minimal silhouette that punches well above its price.",
    tips: [
      "Pair with a white tee and baggy jeans for an effortless off-duty look.",
      "The silver frame works well with both warm and cool toned outfits.",
      "Keep the lenses clean — smudges kill the vibe at any price point.",
    ],
    asin: "B089FNHYND",
  },
  {
    slug: "forest-cashmere-knit",
    name: "Forest Cashmere Knit",
    category: "Quiet Luxury Fits",
    price: "₹8,999",
    image: "https://m.media-amazon.com/images/I/61kXNWxMpyL._SY741_.jpg",
    description:
      "Fine-gauge knit in a deep forest tone. Crew neck, ribbed cuffs, the quietest piece in your wardrobe.",
    tips: [
      "Drape over the shoulders for an Italian evening.",
      "Tuck the front into pleated trousers for a sculpted line.",
      "Hand wash cold, dry flat — it will last a decade.",
    ],
    asin: "B082NZNL9M",
  },
];

export const products: Product[] = rawProducts.filter((p) => isValidAsin(p.asin));

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const categories = [
  "Polo T-Shirts",
  "Shirts",
  "Baggy Jeans",
  "Korean Fashion",
  "Watches",
  "Sneakers",
  "Sunglasses",
  "Quiet Luxury Fits",
];