import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32 bg-[var(--bone)]">
      <div className="container-luxe py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="font-display text-2xl text-foreground">
            srylewithus<span className="text-accent">.</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            An editorial men's wardrobe — Korean ease, old-money discipline,
            quiet luxury throughout. Pinterest-first, mobile-first, considered always.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-accent">Shop</Link></li>
            <li><Link to="/journal" className="hover:text-accent">Journal</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Follow</p>
          <ul className="space-y-2 text-sm">
            <li><a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-accent">Pinterest</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-accent">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} srylewithus. Curated, not manufactured.</p>
          <p>As an Amazon Associate we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  );
}
