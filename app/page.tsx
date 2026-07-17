"use client";

import { useState, useEffect } from "react";
import { portfolioI18n, type Language } from "@/data/portfolio-i18n";

const STORAGE_KEY = "pf-lang";

const NAV = [
  { id: "about", label: "About" },
  { id: "toolbox", label: "Toolbox" },
  { id: "work", label: "Portfolio" },
  { id: "xp", label: "Experience" },
  { id: "edu", label: "Education" },
  { id: "certs", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Portfolio() {
  const [lang, setLang] = useState<Language>("th");
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [progress, setProgress] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) || "th") as Language;
    setLang(saved);
  }, []);

  // reveal + scroll-spy + progress
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    if (reduce) {
      revealEls.forEach((el) => el.classList.add("go"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("go");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      revealEls.forEach((el) => io.observe(el));
    }

    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => spy.observe(s));

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      spy.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const changeLang = (l: Language) => {
    setLang(l);
    localStorage.setItem(STORAGE_KEY, l);
  };

  const t = portfolioI18n[lang];

  const submitContact = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = t.formErrName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t.formErrEmail;
    if (!form.message.trim()) errs.message = t.formErrMsg;
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const subject = encodeURIComponent(`${t.mailSubject} — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:siri.preawpan@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#0e1412] text-[#eaece7] min-h-screen scroll-smooth">
      <style>{`
        :root {
          --ink: #0e1412;
          --ink-2: #131b18;
          --paper: #f2f1ea;
          --text: #eaece7;
          --mut: #8a978f;
          --acc: #35d0a5;
          --acc-ink: #062a20;
          --acc-deep: #0e7a5f;
          --line: #24302b;
        }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans Thai", sans-serif; line-height: 1.6; }
        .rv { opacity: 0; transform: translateY(26px); transition: opacity 0.7s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1); }
        .rv.go { opacity: 1; transform: none; }
        @media (max-width: 720px) {
          .hero { flex-direction: column; align-items: flex-start; }
        }
        @media (prefers-reduced-motion: reduce) {
          .rv { opacity: 1; transform: none; transition: none; }
          html { scroll-behavior: auto; }
        }
      `}</style>

      {/* Scroll progress bar */}
      <div className="fixed top-0 inset-x-0 z-[60] h-[3px] bg-transparent">
        <div className="h-full bg-[#35d0a5] transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-black/10 backdrop-blur border-b border-[#24302b]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center gap-4">
          <span className="text-sm font-bold tracking-wider">
            PREAWPAN<span className="text-[#35d0a5]">.</span>
          </span>
          {/* desktop nav */}
          <nav className="hidden md:flex gap-6 text-xs font-light items-center text-[#8a978f]">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`transition hover:text-white ${active === n.id ? "text-[#35d0a5]" : ""}`}
              >
                {n.label}
              </a>
            ))}
            <div className="flex border border-[#24302b] rounded">
              <button
                onClick={() => changeLang("th")}
                className={`px-3 py-1 text-xs font-bold ${lang === "th" ? "bg-[#35d0a5] text-[#062a20]" : ""}`}
              >
                TH
              </button>
              <button
                onClick={() => changeLang("en")}
                className={`px-3 py-1 text-xs font-bold ${lang === "en" ? "bg-[#35d0a5] text-[#062a20]" : ""}`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex border border-[#24302b] rounded">
              <button
                onClick={() => changeLang("th")}
                className={`px-2.5 py-1 text-xs font-bold ${lang === "th" ? "bg-[#35d0a5] text-[#062a20]" : "text-[#8a978f]"}`}
              >
                TH
              </button>
              <button
                onClick={() => changeLang("en")}
                className={`px-2.5 py-1 text-xs font-bold ${lang === "en" ? "bg-[#35d0a5] text-[#062a20]" : "text-[#8a978f]"}`}
              >
                EN
              </button>
            </div>
            <button
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="p-1.5 text-[#eaece7]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0e1412]/97 backdrop-blur-sm flex flex-col items-center justify-center gap-6 md:hidden">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-bold tracking-wide transition ${active === n.id ? "text-[#35d0a5]" : "text-[#eaece7]"}`}
            >
              {n.label}
            </a>
          ))}
        </div>
      )}

      {/* Hero */}
      <section className="hero min-h-screen flex items-center relative overflow-hidden max-w-6xl mx-auto px-6 py-28 gap-10 pt-28">
        <div className="intro relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs text-[#8a978f] font-semibold mb-6 tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#35d0a5] shadow-lg"></span>
            {t.status}
          </div>
          {/* avatar วงกลมเฉพาะจอเล็ก (การ์ดใหญ่ด้านขวาถูกซ่อน <lg) — สลับเป็นรูปจริงได้โดยแทนตัว PS ด้วย <img src="/profile.jpg" className="w-full h-full object-cover rounded-full" /> */}
          <div className="flex lg:hidden w-20 h-20 rounded-full bg-gradient-to-br from-[#35d0a5] to-[#1fa27e] items-center justify-center mb-6">
            <span className="text-2xl font-black text-[#062a20]">PS</span>
          </div>
          <p className="text-sm text-[#8a978f] mb-2 font-semibold tracking-widest">I'M</p>
          <h1 className="text-7xl sm:text-8xl font-black leading-tight mb-6 -tracking-tight">
            PREAW<br/>PAN<span className="text-[#35d0a5]">.</span>
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold mb-4">
            Mobile Developer — <span className="text-[#35d0a5]">Flutter Specialist</span>
          </p>
          <p className="text-[#8a978f] text-lg mb-8 leading-relaxed max-w-md">{t.tag}</p>
          <div className="flex gap-3 flex-wrap">
            <a href="#work" className="px-6 py-3 text-sm font-bold bg-[#35d0a5] text-[#062a20] rounded hover:brightness-110 transition uppercase tracking-wider">
              {t.btnWork}
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 text-sm font-bold border border-[#24302b] text-white rounded hover:border-[#35d0a5] hover:text-[#35d0a5] transition uppercase tracking-wider flex items-center gap-2"
            >
              ⬇ {t.btnResume}
            </a>
          </div>
        </div>
        {/* การ์ดใหญ่เฉพาะ desktop — สลับเป็นรูปจริงได้โดยแทนตัว PS ด้วย <img src="/profile.jpg" className="absolute inset-0 w-full h-full object-cover rounded" /> */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-96 aspect-[4/5] bg-gradient-to-br from-[#35d0a5] to-[#1fa27e] rounded flex items-center justify-center hidden lg:flex flex-col p-6 text-[#062a20]">
          <div className="text-9xl font-black opacity-80 mb-auto">PS</div>
          <div className="text-center">
            <div className="font-bold text-lg mb-1">Preawpan Siriphalangkanont</div>
            <div className="text-sm opacity-75">Mobile Developer · Flutter</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#f2f1ea] text-[#1b1f1d] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 rv">
            <h2 className="text-5xl font-black mb-2 tracking-wider"><span className="text-[#0e7a5f]">01</span> ABOUT</h2>
            <p className="text-[#7b7f7a] text-sm tracking-widest uppercase">Who I am</p>
          </div>
          <p className="text-xl max-w-3xl mx-auto text-center mb-8 rv leading-relaxed">
            {t.about1}
          </p>
          <p className="text-xl max-w-3xl mx-auto text-center rv leading-relaxed">
            {t.about2}
          </p>
        </div>
      </section>

      {/* Toolbox */}
      <section id="toolbox" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 rv">
            <h2 className="text-5xl font-black mb-2 tracking-wider"><span className="text-[#35d0a5]">02</span> TOOLBOX</h2>
            <p className="text-[#8a978f] text-sm tracking-widest uppercase">What I build with</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {[
              { name: "Flutter", svg: '<svg viewBox="0 0 24 24"><path fill="#54C5F8" d="M13.9 2 4 11.9l3.1 3.1L20.1 2z"/><path fill="#01579B" d="M13.9 11.1l-5.3 5.3 3.1 3.1 3.1-3.1 5.3-5.3z"/><path fill="#29B6F6" d="M11.7 19.5l-3.1-3.1 3.1-3.1 3.1 3.1z"/></svg>' },
              { name: "Dart", svg: '<svg viewBox="0 0 24 24"><path fill="#00C4B3" d="M4.2 4.2h9.4l6.2 6.2v9.4h-9.4L4.2 13.6z"/><path fill="#0075C9" d="M4.2 4.2 14 14l5.8 5.8h-9.4L4.2 13.6z" opacity="0.85"/></svg>' },
              { name: "JavaScript", svg: '<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="2" fill="#F7DF1E"/><text x="12" y="17" font-size="9" font-weight="800" text-anchor="middle" fill="#111" font-family="Arial">JS</text></svg>' },
              { name: "React", svg: '<svg viewBox="-12 -12 24 24"><circle r="2.1" fill="#61DAFB"/><g stroke="#61DAFB" stroke-width="1" fill="none"><ellipse rx="10.5" ry="4.3"/><ellipse rx="10.5" ry="4.3" transform="rotate(60)"/><ellipse rx="10.5" ry="4.3" transform="rotate(120)"/></g></svg>' },
              { name: "Node.js", svg: '<svg viewBox="0 0 24 24"><path fill="#83CD29" d="M12 1.8 21 7v10l-9 5.2L3 17V7z"/><text x="12" y="16" font-size="8" font-weight="800" text-anchor="middle" fill="#0e1412" font-family="Arial">n</text></svg>' },
              { name: "Golang", svg: '<svg viewBox="0 0 24 24"><text x="12" y="16.5" font-size="11" font-weight="800" text-anchor="middle" fill="#00ADD8" font-family="Arial">GO</text></svg>' },
              { name: "Python", svg: '<svg viewBox="0 0 24 24"><path fill="#3776AB" d="M11.8 2C7.6 2 7.9 3.9 7.9 3.9v2h4.2v.6H5.9S2 6.1 2 10.7s3.4 4.4 3.4 4.4h2v-2.1s-.1-3.4 3.3-3.4h4.1s3.2.1 3.2-3V4.9S18.5 2 11.8 2z"/><path fill="#FFDC41" d="M12.2 22c4.2 0 3.9-1.9 3.9-1.9v-2h-4.2v-.6h6.2S22 17.9 22 13.3s-3.4-4.4-3.4-4.4h-2V11s.1 3.4-3.3 3.4H9.2S6 14.3 6 17.4v1.7S5.5 22 12.2 22z"/></svg>' },
              { name: "Firebase", svg: '<svg viewBox="0 0 24 24"><path fill="#FFA000" d="M6 18.5 8.8 3.2l3.1 5.4z"/><path fill="#F57C00" d="M12.9 7.5l1.7-3.3L20 18.5l-7.9 4z"/><path fill="#FFCA28" d="M6 18.5l6.5-6 5 6-6 3.5z"/></svg>' },
              { name: "GCP", svg: '<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M17.2 10.1a5.3 5.3 0 0 0-10.1-1.7A4.8 4.8 0 0 0 8 18h9a3.7 3.7 0 0 0 .2-7.9z"/></svg>' },
              { name: "AWS", svg: '<svg viewBox="0 0 24 24"><text x="12" y="12.5" font-size="7" font-weight="800" text-anchor="middle" fill="#eaece7" font-family="Arial">aws</text><path d="M4.5 15.5c4.5 3.2 10.5 3.2 15 0" stroke="#FF9900" fill="none" stroke-width="1.5" stroke-linecap="round"/></svg>' },
              { name: "MySQL", svg: '<svg viewBox="0 0 24 24"><text x="12" y="15.5" font-size="6" font-weight="800" text-anchor="middle" fill="#4a9fc7" font-family="Arial">MySQL</text></svg>' },
              { name: "MongoDB", svg: '<svg viewBox="0 0 24 24"><path fill="#47A248" d="M12 2s5.2 5 5.2 11.2c0 4.1-3.1 7-5.2 8.8-2.1-1.8-5.2-4.7-5.2-8.8C6.8 7 12 2 12 2z"/><path d="M12 6v14" stroke="#2e6b33" stroke-width="0.8"/></svg>' },
              { name: "SQLite", svg: '<svg viewBox="0 0 24 24"><text x="12" y="15.5" font-size="6" font-weight="800" text-anchor="middle" fill="#57aadf" font-family="Arial">SQLite</text></svg>' },
              { name: "Figma", svg: '<svg viewBox="0 0 24 24"><path fill="#F24E1E" d="M8.7 2H12v6.6H8.7a3.3 3.3 0 0 1 0-6.6z"/><path fill="#FF7262" d="M12 2h3.3a3.3 3.3 0 0 1 0 6.6H12z"/><path fill="#A259FF" d="M8.7 8.7H12v6.6H8.7a3.3 3.3 0 0 1 0-6.6z"/><circle cx="15.3" cy="12" r="3.3" fill="#1ABCFE"/><path fill="#0ACF83" d="M8.7 15.4H12v3.3a3.3 3.3 0 1 1-3.3-3.3z"/></svg>' },
              { name: "Git", svg: '<svg viewBox="0 0 24 24"><rect x="5.2" y="5.2" width="13.6" height="13.6" rx="2.6" transform="rotate(45 12 12)" fill="#F05032"/><circle cx="9.7" cy="9.7" r="1.3" fill="#fff"/><circle cx="14.3" cy="14.3" r="1.3" fill="#fff"/><path d="M10.6 10.6l2.8 2.8" stroke="#fff" stroke-width="1"/></svg>' },
              { name: "Postman", svg: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5" fill="#FF6C37"/><text x="12" y="16" font-size="9" font-weight="800" text-anchor="middle" fill="#fff" font-family="Arial">P</text></svg>' },
              { name: "Arduino", svg: '<svg viewBox="0 0 24 24"><g fill="none" stroke="#00979D" stroke-width="1.5"><circle cx="7.4" cy="12" r="4.1"/><circle cx="16.6" cy="12" r="4.1"/></g><path d="M5.8 12h3.2M15 12h3.2M16.6 10.4v3.2" stroke="#00979D" stroke-width="1.2"/></svg>' },
              { name: "ROS", svg: '<svg viewBox="0 0 24 24"><g fill="#eaece7"><circle cx="5" cy="5" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="19" cy="19" r="2"/></g></svg>' },
            ].map((t, i) => (
              <div key={i} className="rv border border-[#24302b] bg-[#131b18] p-5 text-center rounded hover:translate-y-[-3px] hover:border-[#35d0a5] transition">
                <div className="w-8 h-8 mb-2 mx-auto" dangerouslySetInnerHTML={{__html: t.svg}} />
                <div className="text-xs text-[#8a978f] font-semibold uppercase tracking-wide">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="bg-[#131b18] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 rv">
            <h2 className="text-5xl font-black mb-2 tracking-wider"><span className="text-[#35d0a5]">03</span> PORTFOLIO</h2>
            <p className="text-[#8a978f] text-sm tracking-widest uppercase">My work</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {[
              {
                group: "Freewill FX · 2022 — Present",
                items: [
                  { idx: "01", name: "SiteInsight by SCG", desc: t.pjSite, tech: "Flutter · Golang" },
                  { idx: "02", name: "Terminus", desc: t.pjTerminus, tech: "Flutter · Fleet" },
                  { idx: "03", name: "Terminus Technician", desc: t.pjTermTech, tech: "Flutter · Maintenance" },
                  { idx: "04", name: "Linktrack", desc: t.pjLinktrack, tech: "Flutter · Google Maps" },
                  { idx: "05", name: "Cloudtime Passenger", desc: t.pjCtPass, tech: "Flutter · Booking" },
                  { idx: "06", name: "Cloudtime Patrol", desc: t.pjCtPatrol, tech: "Flutter · Security" },
                  { idx: "07", name: "Cloudtime Attendance", desc: t.pjCtAtt, tech: "Flutter · Workforce" },
                  { idx: "08", name: "True Delivery Tracker", desc: t.pjTrue, tech: "Flutter · Realtime" },
                  { idx: "09", name: "Smart QC", desc: t.pjSmartQc, tech: "Flutter · Construction" },
                ],
              },
              {
                group: "mµ Space Corp · 2021 — 2022",
                items: [
                  { idx: "10", name: "Internal Portal", desc: t.pjPortal, tech: "React · Web" },
                  { idx: "11", name: "Battery Management System", desc: t.pjBms, tech: "Flutter · Realtime" },
                  { idx: "12", name: "Autonomous Robot App", desc: t.pjRobot, tech: "Flutter · Robotics" },
                  { idx: "13", name: "Environmental Monitoring", desc: t.pjEnv, tech: "IoT · Dashboard" },
                  { idx: "14", name: "Inventory Management", desc: t.pjInv, tech: "Python" },
                  { idx: "15", name: "BLDC Motor Control", desc: t.pjBldc, tech: "Arduino · Embedded" },
                ],
              },
            ].map((g) => (
              <div key={g.group} className="mb-12 last:mb-0">
                <div className="rv flex items-center gap-4 mb-2">
                  <span className="text-xs text-[#35d0a5] font-bold tracking-[0.22em] uppercase whitespace-nowrap">{g.group}</span>
                  <span className="h-px flex-1 bg-[#24302b]" />
                </div>
                {g.items.map((p) => (
                  <div
                    key={p.idx}
                    className="rv group grid grid-cols-[2.5rem_1fr] sm:grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 gap-y-1 py-4 border-b border-[#24302b] hover:bg-[#35d0a5]/5 transition-colors px-2 -mx-2"
                  >
                    <span className="text-xs text-[#8a978f]/60 font-bold tracking-wider tabular-nums pt-0.5">{p.idx}</span>
                    <div>
                      <h3 className="font-bold group-hover:text-[#35d0a5] transition-colors">{p.name}</h3>
                      <p className="text-[#8a978f] text-sm mt-0.5">{p.desc}</p>
                    </div>
                    <span className="text-[11px] text-[#35d0a5]/80 font-semibold tracking-wider uppercase text-left sm:text-right col-start-2 sm:col-start-3">{p.tech}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="xp" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 rv">
            <h2 className="text-5xl font-black mb-2 tracking-wider"><span className="text-[#35d0a5]">04</span> EXPERIENCE</h2>
            <p className="text-[#8a978f] text-sm tracking-widest uppercase">Where I've worked</p>
          </div>
          <div className="max-w-2xl mx-auto relative">
            {/* เส้น timeline เส้นเดียวต่อเนื่อง วางกึ่งกลางจุด (จุดกว้าง 12px → กึ่งกลาง 6px) */}
            <span aria-hidden className="absolute left-[5.5px] top-1.5 bottom-1.5 w-px bg-[#24302b]"></span>
            <div className="space-y-12">
              {[
                { when: "2022 — " + t.present, role: "Mobile Developer", org: "Freewill FX", items: [t.xp1a, "CRM · Fleet · Logistics · Workforce"] },
                { when: "2021 — 2022", role: "Software Engineer", org: "mµ Space Corp", items: ["Internal Portal (React)", t.xp2a] },
                { when: "2021", role: "Electronics Engineer", org: "mµ Space Corp", items: [t.xp3a, "Assembly · Arduino · BLDC Motor"] },
              ].map((x, i) => (
                <div key={i} className="rv relative pl-10">
                  <span className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[#35d0a5] shadow-[0_0_0_4px_#0e1412,0_0_12px_#35d0a5]"></span>
                  <p className="text-sm text-[#35d0a5] font-bold tracking-wider uppercase mb-1">{x.when}</p>
                  <h3 className="font-bold text-lg mb-1">{x.role}</h3>
                  <p className="text-[#8a978f] text-sm mb-3">{x.org}</p>
                  <ul className="text-sm text-[#8a978f] space-y-1">
                    {x.items.map((item, j) => <li key={j}>• {item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="edu" className="bg-[#131b18] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 rv">
            <h2 className="text-5xl font-black mb-2 tracking-wider"><span className="text-[#35d0a5]">05</span> EDUCATION</h2>
            <p className="text-[#8a978f] text-sm tracking-widest uppercase">{t.eduSub}</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Thai-Nichi + thesis + publication */}
            <div className="rv border border-[#24302b] bg-[#0e1412] rounded overflow-hidden">
              <div className="p-6 pb-5">
                <p className="text-xs text-[#35d0a5] font-bold mb-2 tracking-wider">2024 — 2026</p>
                <h3 className="font-bold text-xl mb-1">Thai-Nichi Institute of Technology</h3>
                <p className="text-sm text-[#8a978f]">M.Sc. Information Technology</p>
              </div>
              <div className="mx-6 mb-4 border border-[#35d0a5]/60 rounded p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex gap-3 flex-1">
                  <span className="text-xl">📄</span>
                  <div>
                    <p className="text-xs text-[#35d0a5] font-bold mb-1 tracking-wider uppercase">{t.lblPub}</p>
                    <h4 className="font-bold italic text-sm mb-1">An Indoor Context-Aware Obstacle Detection Application for Visually Impaired Users</h4>
                    <p className="text-xs text-[#8a978f]">{t.pubNote}</p>
                  </div>
                </div>
                <a
                  href="https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=An%20Indoor%20Context-Aware%20Obstacle%20Detection%20Application%20for%20Visually%20Impaired%20Users"
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 px-4 py-2.5 text-xs font-bold bg-[#35d0a5] text-[#062a20] rounded hover:brightness-110 transition uppercase tracking-wider self-start sm:self-center"
                >
                  {t.btnIeee} ↗
                </a>
              </div>
              <div className="mx-6 mb-6 border border-[#35d0a5]/60 rounded p-5 flex gap-3">
                <span className="text-xl">🎓</span>
                <div>
                  <p className="text-xs text-[#35d0a5] font-bold mb-1 tracking-wider uppercase">{t.lblThesis}</p>
                  <h4 className="font-bold text-sm mb-1">Seeable — Indoor Navigation for the Visually Impaired</h4>
                  <p className="text-xs text-[#8a978f] mb-2">{t.pjSeeable}</p>
                  <p className="text-[11px] text-[#35d0a5]/80 font-semibold tracking-wider uppercase">Flutter · AI · Accessibility</p>
                </div>
              </div>
            </div>
            {/* CATC */}
            <div className="rv border border-[#24302b] bg-[#0e1412] rounded overflow-hidden">
              <div className="p-6 pb-5">
                <p className="text-xs text-[#35d0a5] font-bold mb-2 tracking-wider">2017 — 2021</p>
                <h3 className="font-bold text-xl mb-1">Civil Aviation Training Center</h3>
                <p className="text-sm text-[#8a978f]">B.Eng. Aviation Electronics</p>
              </div>
              <div className="mx-6 mb-6 space-y-4">
                {[
                  { icon: "🌫️", name: "PM 2.5 Monitoring", desc: t.pjPm, tech: "IoT · LINE Notify" },
                  { icon: "🔋", name: "Solar Power Bank", desc: t.pjSolar, tech: "Electronics" },
                ].map((p) => (
                  <div key={p.name} className="border border-[#35d0a5]/60 rounded p-5 flex gap-3">
                    <span className="text-xl">{p.icon}</span>
                    <div>
                      <p className="text-xs text-[#35d0a5] font-bold mb-1 tracking-wider uppercase">{t.lblProject}</p>
                      <h4 className="font-bold text-sm mb-1">{p.name}</h4>
                      <p className="text-xs text-[#8a978f] mb-2">{p.desc}</p>
                      <p className="text-[11px] text-[#35d0a5]/80 font-semibold tracking-wider uppercase">{p.tech}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certs" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 rv">
            <h2 className="text-5xl font-black mb-2 tracking-wider"><span className="text-[#35d0a5]">06</span> CERTIFICATES</h2>
            <p className="text-[#8a978f] text-sm tracking-widest uppercase">{t.certsSub}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {t.certs.map((c) => (
              <div key={c.name} className="rv border border-[#24302b] bg-[#131b18] rounded p-5 flex gap-4 hover:border-[#35d0a5] transition-colors">
                <span className="text-2xl shrink-0">📜</span>
                <div>
                  <h3 className="font-bold text-sm mb-1 leading-snug">{c.name}</h3>
                  <p className="text-xs text-[#35d0a5]/80 font-semibold tracking-wider uppercase">{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#f2f1ea] text-[#1b1f1d] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto rv">
          <h2 className="text-5xl font-black mb-3 leading-tight">
            {lang === "th" ? "สนใจร่วมงานกัน " : "Interested in working together? "}
            <span className="text-[#0e7a5f]">{lang === "th" ? "ทักมาคุยได้เลย" : "Let's talk."}</span>
          </h2>
          <p className="text-[#7b7f7a] mb-8">{t.contactSub}</p>

          <form onSubmit={submitContact} noValidate className="text-left max-w-lg mx-auto mb-10">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  placeholder={t.formName}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded border border-[#cfccc2] bg-white text-sm focus:outline-none focus:border-[#0e7a5f]"
                />
                {errors.name && <p className="text-xs text-[#b3372a] mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t.formEmail}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded border border-[#cfccc2] bg-white text-sm focus:outline-none focus:border-[#0e7a5f]"
                />
                {errors.email && <p className="text-xs text-[#b3372a] mt-1">{errors.email}</p>}
              </div>
            </div>
            <textarea
              placeholder={t.formMsg}
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded border border-[#cfccc2] bg-white text-sm focus:outline-none focus:border-[#0e7a5f] resize-y"
            />
            {errors.message && <p className="text-xs text-[#b3372a] mt-1">{errors.message}</p>}
            <button
              type="submit"
              className="mt-4 w-full sm:w-auto px-8 py-3 text-sm font-bold bg-[#1b1f1d] text-white rounded hover:bg-[#0e7a5f] transition uppercase tracking-wider"
            >
              {t.formSend}
            </button>
          </form>

          <p className="text-xs text-[#7b7f7a] uppercase tracking-widest mb-4">{t.orReach}</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="mailto:siri.preawpan@gmail.com" className="px-6 py-3 text-sm font-bold bg-[#1b1f1d] text-white rounded hover:bg-[#0e7a5f] transition uppercase tracking-wider">
              siri.preawpan@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/preawpan-siriphalangkanont" target="_blank" rel="noreferrer" className="px-6 py-3 text-sm font-bold border border-[#1b1f1d] text-[#1b1f1d] rounded hover:border-[#0e7a5f] hover:text-[#0e7a5f] transition uppercase tracking-wider flex items-center gap-2">
              LinkedIn
            </a>
            <a href="tel:+66809537819" className="px-6 py-3 text-sm font-bold border border-[#1b1f1d] text-[#1b1f1d] rounded hover:border-[#0e7a5f] hover:text-[#0e7a5f] transition uppercase tracking-wider">
              (+66) 080 953 7819
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#24302b] py-6 px-6 text-center text-sm text-[#8a978f]">
        © 2026 Preawpan Siriphalangkanont · Mobile Developer
      </footer>
    </div>
  );
}
