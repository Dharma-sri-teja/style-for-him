import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — srylewithus" },
      { name: "description", content: "Get in touch with the srylewithus editorial team for collaborations, press, or styling questions." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="container-luxe py-20 md:py-32 grid gap-16 lg:grid-cols-2">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="font-display text-5xl md:text-6xl mt-4 leading-tight">
          Let's talk
          <br /><em className="text-accent not-italic">style.</em>
        </h1>
        <p className="mt-8 text-foreground/80 max-w-md leading-relaxed">
          For collaborations, press inquiries, or a question about a piece on
          the edit — we read every note. Replies usually within 48 hours.
        </p>
        <div className="mt-12 space-y-5">
          <a href="mailto:hello@srylewithus.com" className="flex items-center gap-4 group">
            <span className="grid h-10 w-10 place-items-center border border-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
              <Mail size={16} />
            </span>
            <div>
              <p className="eyebrow">Email</p>
              <p className="text-foreground">hello@srylewithus.com</p>
            </div>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
            <span className="grid h-10 w-10 place-items-center border border-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
              <Instagram size={16} />
            </span>
            <div>
              <p className="eyebrow">Social</p>
              <p className="text-foreground">@srylewithus</p>
            </div>
          </a>
        </div>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="bg-[var(--bone)] p-8 md:p-12 space-y-6"
      >
        <div>
          <label className="eyebrow">Name</label>
          <input required type="text" className="mt-2 w-full border-b border-foreground bg-transparent py-3 outline-none focus:border-accent" />
        </div>
        <div>
          <label className="eyebrow">Email</label>
          <input required type="email" className="mt-2 w-full border-b border-foreground bg-transparent py-3 outline-none focus:border-accent" />
        </div>
        <div>
          <label className="eyebrow">Message</label>
          <textarea required rows={5} className="mt-2 w-full border-b border-foreground bg-transparent py-3 outline-none focus:border-accent resize-none" />
        </div>
        <button
          type="submit"
          className="w-full bg-foreground text-background py-4 text-sm tracking-widest uppercase hover:bg-accent transition-colors"
        >
          {sent ? "Sent — thank you" : "Send message"}
        </button>
      </form>
    </div>
  );
}
