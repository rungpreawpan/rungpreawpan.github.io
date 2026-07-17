"use client";

import { useEffect, useState } from "react";
import { resume } from "@/data/resume";

const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

const initials = resume.name
  .split(" ")
  .map((w) => w[0])
  .slice(0, 2)
  .join("");

function Icon({ path }: { path: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d={path} />
    </svg>
  );
}

const ICONS = {
  pin: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z M12 10a1 1 0 1 0 0 0",
  mail: "M4 6h16v12H4z M4 7l8 6 8-6",
  phone:
    "M5 4h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2",
};

export function Sidebar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <aside
      className="border-b text-[color:var(--sb-text)] lg:fixed lg:inset-y-0 lg:left-0 lg:w-[340px] lg:overflow-y-auto lg:border-b-0 lg:border-r"
      style={{ background: "var(--sb-bg)", borderColor: "var(--sb-border)" }}
    >
      <div className="flex flex-col gap-8 px-8 py-10 lg:min-h-full lg:py-12">
        {/* Avatar + identity */}
        <div>
          <div className="flex items-center gap-4 lg:flex-col lg:items-start">
            {resume.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={resume.photo}
                alt={resume.name}
                className="h-20 w-20 rounded-2xl object-cover lg:h-28 lg:w-28"
              />
            ) : (
              <div className="accent-gradient flex h-20 w-20 items-center justify-center rounded-2xl text-2xl font-bold text-white lg:h-28 lg:w-28 lg:text-3xl">
                {initials}
              </div>
            )}
            <div>
              <h1 className="text-xl font-bold leading-tight tracking-tight lg:mt-5 lg:text-2xl">
                {resume.name}
              </h1>
              <p className="mt-1 font-medium text-[color:var(--sb-accent)]">
                {resume.role}
              </p>
            </div>
          </div>

          <span
            className="mt-5 hidden w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-[color:var(--sb-accent)] lg:inline-flex"
            style={{ background: "var(--sb-soft)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            เปิดรับโอกาสใหม่ ๆ
          </span>
        </div>

        {/* Contact */}
        <ul className="space-y-3 text-sm text-[color:var(--sb-muted)]">
          <li className="flex items-center gap-3">
            <Icon path={ICONS.pin} />
            {resume.location}
          </li>
          <li>
            <a
              href={`mailto:${resume.email}`}
              className="flex items-center gap-3 transition-colors hover:text-[color:var(--sb-accent)]"
            >
              <Icon path={ICONS.mail} />
              {resume.email}
            </a>
          </li>
          <li>
            <a
              href="tel:+66809537819"
              className="flex items-center gap-3 transition-colors hover:text-[color:var(--sb-accent)]"
            >
              <Icon path={ICONS.phone} />
              (+66) 080 953 7819
            </a>
          </li>
        </ul>

        {/* Nav (desktop only) */}
        <nav className="hidden lg:block">
          <ul className="space-y-1">
            {nav.map((n) => {
              const on = active === n.id;
              return (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      on
                        ? "text-[color:var(--sb-accent)]"
                        : "text-[color:var(--sb-muted)] hover:text-[color:var(--sb-text)]"
                    }`}
                    style={on ? { background: "var(--sb-soft)" } : undefined}
                  >
                    <span
                      className={`h-px transition-all ${
                        on
                          ? "w-6 bg-[color:var(--sb-accent)]"
                          : "w-3 bg-[color:var(--sb-muted)]"
                      }`}
                    />
                    {n.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Languages */}
        <div className="hidden lg:block">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[color:var(--sb-muted)]">
            Languages
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Thai", "English", "Chinese"].map((l) => (
              <span
                key={l}
                className="rounded-md border px-2.5 py-1 text-xs"
                style={{ borderColor: "var(--sb-border)" }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        <a
          href={`mailto:${resume.email}`}
          className="accent-gradient mt-auto hidden rounded-xl px-4 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:block"
        >
          ติดต่อร่วมงาน
        </a>
      </div>
    </aside>
  );
}
