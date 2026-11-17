"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Check, Plus, X, Menu, Phone, Mail, MapPin, MessageCircle,
  ShieldCheck, Truck, Wrench, BadgeCheck, HeartHandshake, Send, ClipboardList, Loader2,
} from "lucide-react";
import { asset, company, categories, sectors, reasons, values, credentials, steps } from "@/lib/site";

const nav = [
  { href: "#catalogue", label: "Catalogue" },
  { href: "#why", label: "Why Alfatech" },
  { href: "#about", label: "About" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];
const reasonIcons = [BadgeCheck, Wrench, Truck, ShieldCheck, HeartHandshake];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`font-display text-xs font-bold uppercase tracking-[0.22em] flex items-center gap-3 ${light ? "text-sky" : "text-azure"}`}>
      <span className="h-px w-8 bg-gold" /> {children}
    </p>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-white">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" aria-label="Alfatech Resources Ltd home" className="flex items-center">
          <img src={asset("/logo-full.png")} alt="Alfatech Resources Ltd" className="h-11 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-navy/75 transition hover:text-azure">{n.label}</a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-azure">
            Request a quote <ArrowRight size={15} />
          </a>
        </nav>
        <button className="lg:hidden p-2 text-navy" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-navy/10 bg-white px-5 py-4 lg:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-navy">{n.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-navy py-3 text-center font-semibold text-white">Request a quote</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-[72px] text-white">
      <div className="blueprint-dark absolute inset-0" />
      <div className="swoosh absolute -left-40 -top-40 h-[480px] w-[720px] -rotate-[28deg] rounded-[50%] opacity-25 blur-sm" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div>
          <motion.div {...reveal}><Eyebrow light>Office · IT · Security · Power</Eyebrow></motion.div>
          <motion.h1 {...reveal} className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.6rem]">
            The right equipment,<br />
            <span className="bg-gradient-to-r from-sky to-gold bg-clip-text text-transparent">supplied with precision.</span>
          </motion.h1>
          <motion.p {...reveal} className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Alfatech Resources Ltd is your one-stop supplier of office furniture, stationery, computers, printers, CCTV and
            power solutions — for government, corporate and institutional clients across Nigeria.
          </motion.p>
          <motion.div {...reveal} className="mt-9 flex flex-wrap gap-4">
            <a href="#catalogue" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-ink transition hover:bg-white">
              Browse the catalogue <ArrowRight size={18} />
            </a>
            <a href={`tel:${company.phoneTel}`} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold transition hover:border-sky hover:text-sky">
              <Phone size={17} /> {company.phoneDisplay}
            </a>
          </motion.div>
          <motion.dl {...reveal} className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[["6", "Product lines"], ["6", "Sectors served"], ["2025", "Established"]].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl font-extrabold text-gold">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-white/60">{l}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="relative mx-auto aspect-square w-full max-w-[540px]">
          {/* compass rings echoing the emblem */}
          <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 h-full w-full text-sky/40" fill="none" stroke="currentColor" strokeWidth="0.4">
            <circle cx="100" cy="100" r="98" strokeDasharray="1 3" />
            <circle cx="100" cy="100" r="88" />
            {Array.from({ length: 72 }).map((_, i) => (
              <line key={i} x1="100" y1="2" x2="100" y2={i % 6 === 0 ? 10 : 6} transform={`rotate(${i * 5} 100 100)`} />
            ))}
          </svg>
          <svg viewBox="0 0 200 200" className="spin-rev absolute inset-[7%] h-[86%] w-[86%] text-gold/50" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="100" cy="100" r="96" strokeDasharray="14 6" />
          </svg>
          <div className="absolute inset-[13%] overflow-hidden rounded-full border-4 border-white/15 shadow-2xl shadow-azure/30">
            <img src={asset("/images/smart-security.jpg")} alt="Smart security camera technology" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -left-2 bottom-[10%] w-36 rounded-2xl bg-white p-2 shadow-xl sm:w-44">
            <img src={asset("/images/dome-cam.jpg")} alt="Dome CCTV camera" className="aspect-[4/3] w-full rounded-xl object-cover" />
            <p className="px-1 pt-1.5 text-[11px] font-semibold text-navy">CCTV & Surveillance</p>
          </div>
          <div className="absolute -right-2 top-[8%] w-32 rounded-2xl bg-white p-2 shadow-xl sm:w-40">
            <img src={asset("/images/gadgets.jpg")} alt="Smart devices" className="aspect-[4/3] w-full rounded-xl object-cover" />
            <p className="px-1 pt-1.5 text-[11px] font-semibold text-navy">Smart Gadgets</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const all = categories.flatMap((c) => c.items.slice(0, 3));
  const row = [...all, ...all];
  return (
    <div className="overflow-hidden border-y border-navy/10 bg-white py-4" aria-hidden>
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-sm font-semibold uppercase tracking-wider text-navy/60">
            {t} <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Catalogue({ picked, toggle }: { picked: string[]; toggle: (s: string) => void }) {
  const [active, setActive] = useState(categories[0].id);
  const cat = categories.find((c) => c.id === active)!;
  return (
    <section id="catalogue" className="blueprint relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...reveal} className="max-w-2xl">
          <Eyebrow>Catalogue</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">Everything your workplace runs on.</h2>
          <p className="mt-4 text-lg text-navy/70">Select the items you need and add them to your quote request — we will respond with a clear quotation.</p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr]">
          <div role="tablist" aria-label="Product categories" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
            {categories.map((c) => {
              const on = c.id === active;
              return (
                <button
                  key={c.id} role="tab" aria-selected={on} onClick={() => setActive(c.id)}
                  className={`flex shrink-0 items-center gap-4 rounded-2xl border px-5 py-4 text-left transition ${on ? "border-navy bg-navy text-white shadow-lg" : "border-navy/10 bg-white text-navy hover:border-azure"}`}
                >
                  <span className={`font-display text-sm font-bold ${on ? "text-gold" : "text-azure"}`}>{c.index}</span>
                  <span className="text-sm font-semibold leading-snug">{c.title}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={cat.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-xl shadow-navy/5">
              <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[240px] bg-mist">
                  <img src={asset(cat.image)} alt={cat.title} className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-navy px-3 py-1 font-display text-xs font-bold text-gold">{cat.index} / 06</span>
                </div>
                <div className="p-7 sm:p-9">
                  <h3 className="text-2xl font-bold text-navy">{cat.title}</h3>
                  <p className="mt-2 text-navy/65">{cat.blurb}</p>
                  <ul className="mt-6 space-y-2.5">
                    {cat.items.map((it) => {
                      const on = picked.includes(it);
                      return (
                        <li key={it}>
                          <button onClick={() => toggle(it)} aria-pressed={on}
                            className={`group flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${on ? "border-azure bg-mist text-navy" : "border-navy/10 text-navy/85 hover:border-azure"}`}>
                            {it}
                            <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition ${on ? "bg-azure text-white" : "bg-navy/5 text-navy group-hover:bg-gold"}`}>
                              {on ? <Check size={14} /> : <Plus size={14} />}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <motion.div {...reveal}>
          <Eyebrow>Why Alfatech</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">A supplier that stays after delivery.</h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/70">
            We aim to be a one-stop solution provider for office, IT and security needs — combining quality products,
            competitive pricing and excellent customer service.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl">
            <img src={asset("/images/it-hardware.jpg")} alt="Range of IT hardware" className="w-full object-cover" />
          </div>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((r, i) => {
            const Icon = reasonIcons[i];
            return (
              <motion.div key={r.t} {...reveal} transition={{ ...reveal.transition, delay: i * 0.06 }}
                className={`rounded-3xl border border-navy/10 p-7 ${i === 0 ? "bg-navy text-white sm:col-span-2" : "bg-paper"}`}>
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${i === 0 ? "bg-gold text-ink" : "bg-mist text-azure"}`}><Icon size={22} /></div>
                <h3 className="mt-5 text-lg font-bold">{r.t}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? "text-white/70" : "text-navy/65"}`}>{r.d}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...reveal}><Eyebrow>How it works</Eyebrow><h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">From enquiry to after-sales, in four steps.</h2></motion.div>
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.li key={s.t} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }} className="relative rounded-3xl bg-white p-7 shadow-sm">
              <span className="font-display text-5xl font-extrabold text-sky/70">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-navy/65">{s.d}</p>
              {i < 3 && <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-gold md:block" />}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="blueprint-dark absolute inset-0" />
      <img src={asset("/logo-emblem.png")} alt="" aria-hidden className="spin-slow absolute -right-32 top-10 w-[520px] opacity-[0.07] invert" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...reveal} className="max-w-3xl">
          <Eyebrow light>About us</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">A dynamic, customer-focused supply company.</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Alfatech Resources Limited specialises in high-quality office accessories, stationery, computers, printers,
            electronics, CCTV cameras and related technology — delivering reliable products and innovative solutions that
            enhance productivity, security and operational efficiency.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div {...reveal} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">Our vision</p>
            <p className="mt-4 text-xl font-semibold leading-snug">To become a leading and trusted supplier of office and technology solutions across Nigeria and beyond.</p>
          </motion.div>
          <motion.div {...reveal} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">Our mission</p>
            <p className="mt-4 text-xl font-semibold leading-snug">To provide durable, cost-effective and cutting-edge office and electronic solutions that improve business operations while maintaining the highest standards of professionalism and integrity.</p>
          </motion.div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {values.map((v) => (
            <span key={v} className="rounded-full border border-sky/30 px-5 py-2 text-sm font-medium text-sky">{v}</span>
          ))}
        </div>
        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/50">Who we serve</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <div key={s} className="flex items-center gap-3 rounded-2xl bg-white/5 px-5 py-4 text-sm font-semibold"><Check size={16} className="text-gold" /> {s}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section id="credentials" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...reveal} className="max-w-2xl">
          <Eyebrow>Credentials</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">Registered, compliant and ready to contract.</h2>
        </motion.div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((c, i) => (
            <motion.div key={c.k} {...reveal} transition={{ ...reveal.transition, delay: i * 0.06 }} className="rounded-3xl border border-navy/10 bg-paper p-7">
              <span className="inline-block rounded-lg bg-navy px-3 py-1 font-display text-sm font-extrabold tracking-wider text-gold">{c.k}</span>
              <h3 className="mt-4 text-lg font-bold text-navy">{c.t}</h3>
              <p className="mt-2 text-sm text-navy/65">{c.d}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-sm text-navy/55">Registered office: {company.address}</p>
      </div>
    </section>
  );
}

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

function Contact({ picked, toggle, clear }: { picked: string[]; toggle: (s: string) => void; clear: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");
  const [f, setF] = useState({ name: "", org: "", phone: "", email: "", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  const summary = useMemo(
    () => `Hello Alfatech, I would like a quotation.${picked.length ? `\n\nItems:\n- ${picked.join("\n- ")}` : ""}${f.message ? `\n\nNotes: ${f.message}` : ""}${f.name ? `\n\nFrom: ${f.name}${f.org ? `, ${f.org}` : ""}` : ""}`,
    [picked, f]
  );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!WEB3FORMS_KEY) {
      setErr("Online form is not yet activated. Please use WhatsApp, call or email us directly.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Quote request from ${f.name} — Alfatech website`,
          from_name: "Alfatech Website",
          name: f.name, organisation: f.org, phone: f.phone, email: f.email,
          items: picked.join(", ") || "None selected", message: f.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed");
      setStatus("done"); clear(); setF({ name: "", org: "", phone: "", email: "", message: "" });
    } catch (x) {
      setErr(x instanceof Error ? x.message : "Something went wrong."); setStatus("error");
    }
  }

  const input = "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-azure focus:ring-4 focus:ring-azure/15";

  return (
    <section id="contact" className="blueprint py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <motion.div {...reveal}>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">Let’s equip your organisation.</h2>
          <p className="mt-4 text-lg text-navy/70">Send a requirement list or a single enquiry — we’ll come back with a clear quotation.</p>
          <ul className="mt-9 space-y-5">
            <li className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy text-gold"><MapPin size={19} /></span><span className="text-navy/80">{company.address}</span></li>
            <li className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy text-gold"><Phone size={19} /></span><a href={`tel:${company.phoneTel}`} className="self-center font-semibold text-navy hover:text-azure">{company.phoneDisplay}</a></li>
            <li className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy text-gold"><Mail size={19} /></span><a href={`mailto:${company.email}`} className="self-center font-semibold text-navy hover:text-azure">{company.email}</a></li>
          </ul>
          <a target="_blank" rel="noreferrer" href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(summary)}`}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#1fa855] px-6 py-3.5 font-semibold text-white transition hover:brightness-110">
            <MessageCircle size={19} /> Chat on WhatsApp {picked.length > 0 && `(${picked.length} item${picked.length > 1 ? "s" : ""})`}
          </a>
        </motion.div>

        <motion.form {...reveal} onSubmit={submit} className="rounded-3xl border border-navy/10 bg-white p-7 shadow-xl shadow-navy/5 sm:p-9">
          <div className="flex items-center gap-2 font-display text-sm font-bold text-navy"><ClipboardList size={18} className="text-azure" /> Your quote list</div>
          <div className="mt-3 flex min-h-[44px] flex-wrap gap-2 rounded-2xl bg-paper p-3">
            {picked.length === 0 && <span className="text-sm text-navy/50">Nothing selected yet — add items from the <a href="#catalogue" className="underline">catalogue</a>, or describe your needs below.</span>}
            {picked.map((p) => (
              <button type="button" key={p} onClick={() => toggle(p)} className="inline-flex items-center gap-1.5 rounded-full bg-navy py-1.5 pl-3 pr-2 text-xs font-medium text-white">
                {p} <X size={13} className="text-gold" />
              </button>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-navy">Full name<input required className={`${input} mt-1.5`} value={f.name} onChange={set("name")} autoComplete="name" /></label>
            <label className="text-sm font-medium text-navy">Organisation<input className={`${input} mt-1.5`} value={f.org} onChange={set("org")} autoComplete="organization" /></label>
            <label className="text-sm font-medium text-navy">Phone<input required type="tel" className={`${input} mt-1.5`} value={f.phone} onChange={set("phone")} autoComplete="tel" /></label>
            <label className="text-sm font-medium text-navy">Email<input required type="email" className={`${input} mt-1.5`} value={f.email} onChange={set("email")} autoComplete="email" /></label>
          </div>
          <label className="mt-4 block text-sm font-medium text-navy">Requirements & quantities
            <textarea rows={4} className={`${input} mt-1.5 resize-none`} value={f.message} onChange={set("message")} />
          </label>
          <button disabled={status === "sending"} className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3.5 font-semibold text-white transition hover:bg-azure disabled:opacity-60">
            {status === "sending" ? <Loader2 size={18} className="animate-spin" /> : <Send size={17} />} Send request
          </button>
          <div aria-live="polite" className="mt-4 text-sm">
            {status === "done" && <p className="font-medium text-[#14854a]">Thank you — your request has been sent. We’ll be in touch shortly.</p>}
            {status === "error" && <p className="font-medium text-red-600">{err}</p>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="inline-block rounded-2xl bg-white px-4 py-3"><img src={asset("/logo-full.png")} alt="Alfatech Resources Ltd" className="h-11 w-auto" /></div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">One-stop supplier of office, IT and security solutions for businesses, institutions and government organisations.</p>
          </div>
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">{nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-sky">{n.label}</a></li>)}</ul>
          </div>
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">Reach us</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>{company.address}</li>
              <li><a href={`tel:${company.phoneTel}`} className="hover:text-sky">{company.phoneDisplay}</a></li>
              <li><a href={`mailto:${company.email}`} className="hover:text-sky">{company.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} {company.name} · {company.rc}. All rights reserved.</p>
          <p>Abuja · Nationwide delivery</p>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (s: string) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Catalogue picked={picked} toggle={toggle} />
        <Why />
        <Process />
        <About />
        <Credentials />
        <Contact picked={picked} toggle={toggle} clear={() => setPicked([])} />
      </main>
      <Footer />
      <AnimatePresence>
        {picked.length > 0 && (
          <motion.a href="#contact" initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 font-semibold text-ink shadow-2xl">
            <ClipboardList size={18} /> Quote list · {picked.length} <ArrowUpRight size={16} />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
