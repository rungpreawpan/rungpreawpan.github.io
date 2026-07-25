"use client";

import { useState, useEffect } from "react";
import { portfolioContent } from "@/data/portfolio-i18n";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [progress, setProgress] = useState(0);

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
    document.body.style.overflow = menuOpen || resumeOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, resumeOpen]);

  useEffect(() => {
    if (!resumeOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setResumeOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [resumeOpen]);

  const t = portfolioContent;

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
          </nav>

          {/* mobile controls */}
          <div className="flex md:hidden items-center gap-3">
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
          <div className="flex lg:hidden w-20 h-20 rounded-full overflow-hidden border-2 border-[#35d0a5] mb-6">
            <img src="/rung.png" alt="Preawpan Siriphalangkanont" className="w-full h-full object-cover" />
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
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="px-6 py-3 text-sm font-bold border border-[#24302b] text-white rounded hover:border-[#35d0a5] hover:text-[#35d0a5] transition uppercase tracking-wider flex items-center gap-2"
            >
              {t.btnResume}
            </button>
          </div>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-96 aspect-[4/5] rounded overflow-hidden hidden lg:flex border border-[#35d0a5]/60">
          <img src="/rung.png" alt="Preawpan Siriphalangkanont" className="w-full h-full object-cover" />
        </div>
      </section>

      {resumeOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0e1412]/90 backdrop-blur-sm px-4 py-6 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={t.resumePreview}
        >
          <div className="mx-auto flex h-full max-w-5xl flex-col overflow-hidden rounded border border-[#24302b] bg-[#f2f1ea] text-[#1b1f1d] shadow-2xl">
            <div className="flex items-center justify-between gap-3 border-b border-[#cfccc2] px-4 py-3 sm:px-5">
              <h2 className="text-base font-black uppercase tracking-wider">{t.resumePreview}</h2>
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download
                  className="rounded bg-[#1b1f1d] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#0e7a5f]"
                >
                  {t.resumeDownload}
                </a>
                <button
                  type="button"
                  onClick={() => setResumeOpen(false)}
                  className="rounded border border-[#1b1f1d] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#1b1f1d] transition hover:border-[#0e7a5f] hover:text-[#0e7a5f]"
                >
                  {t.close}
                </button>
              </div>
            </div>
            <object
              data="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
              type="application/pdf"
              className="min-h-0 w-full flex-1 bg-white"
              aria-label={t.resumePreview}
            >
              <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-white p-6 text-center">
                <p className="text-sm text-[#7b7f7a]">{t.resumePreviewFallback}</p>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-[#1b1f1d] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#1b1f1d] transition hover:border-[#0e7a5f] hover:text-[#0e7a5f]"
                >
                  {t.resumeOpenPdf}
                </a>
              </div>
            </object>
          </div>
        </div>
      )}

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
                  <span className="text-xs text-[#35d0a5] font-bold tracking-wide whitespace-nowrap">{g.group}</span>
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
                  href="https://ieeexplore.ieee.org/document/11298017"
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
                  <h3 className="font-bold text-sm mb-1 leading-snug">
                    {"href" in c && c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-[#35d0a5]"
                      >
                        {c.name}
                      </a>
                    ) : (
                      c.name
                    )}
                  </h3>
                  <p className="text-xs text-[#35d0a5]/80 font-semibold tracking-wider uppercase">{c.issuer}</p>
                  {"issued" in c && c.issued && (
                    <p className="text-xs text-[#8a978f] mt-2">{t.certIssued}: {c.issued}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#f2f1ea] text-[#1b1f1d] py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto rv">
          <h2 className="text-5xl font-black mb-3 leading-tight">
            Interested in working together?
            <span className="block text-[#0e7a5f]">Let's talk.</span>
          </h2>
          <p className="text-[#7b7f7a] mb-10">{t.contactSub}</p>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Email",
                value: "siri.preawpan@gmail.com",
                href: "mailto:siri.preawpan@gmail.com",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                value: "preawpan-siriphalangkanont",
                href: "https://www.linkedin.com/in/preawpan-siriphalangkanont-3781791ba/",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M6.9 8.9H3.8v10.3h3.1V8.9ZM5.4 4.8a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Zm13.8 8.6c0-3-1.6-4.8-4.1-4.8-1.7 0-2.7.9-3.1 1.7h-.1V8.9H9v10.3h3.1v-5.1c0-1.4.7-2.6 2.1-2.6 1.3 0 1.9.9 1.9 2.6v5.1h3.1v-5.8Z" />
                  </svg>
                ),
              },
              {
                label: "Tel",
                value: "(+66) 080 953 7819",
                href: "tel:+66809537819",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "LinkedIn" ? "_blank" : undefined}
                rel={item.label === "LinkedIn" ? "noreferrer" : undefined}
                className="group flex gap-4 rounded border border-[#24302b] bg-[#131b18] p-5 text-left shadow-[0_18px_45px_rgba(14,20,18,0.18)] transition hover:-translate-y-1 hover:border-[#35d0a5] hover:shadow-[0_22px_55px_rgba(14,122,95,0.2)]"
              >
                <span className="block w-1 shrink-0 rounded bg-[#35d0a5]" />
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded border border-[#35d0a5]/35 text-[#35d0a5] transition group-hover:border-[#35d0a5] group-hover:bg-[#35d0a5] group-hover:text-[#062a20]">
                    {item.icon}
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest text-[#8a978f]">{item.label}</span>
                  <span className="mt-2 break-words text-sm font-bold leading-snug text-white">{item.value}</span>
                </span>
              </a>
            ))}
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
