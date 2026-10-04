import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../data/resumeData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-5 flex justify-center">
      <nav
        className={`w-full max-w-3xl flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border border-border"
            : "bg-white/60 backdrop-blur-sm"
        }`}
      >
        <Link
          to="home"
          smooth
          duration={500}
          className="relative cursor-pointer flex items-center shrink-0"
        >
          <span className="absolute left-1/2 -translate-x-1/2 w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#4FE3DC] -z-10" />
          <img
            src="/images/logo.png"
            alt="AbyBalu"
            className="h-7 md:h-8 w-auto"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-90}
                spy
                onSetActive={() => setActive(link.to)}
                className={`nav-underline cursor-pointer text-sm font-medium text-muted hover:text-ink transition-colors ${
                  active === link.to ? "active text-ink" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="contact"
          smooth
          duration={500}
          offset={-90}
          className="hidden lg:inline-block cursor-pointer bg-brand text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-brand-dark transition-colors"
        >
          Let&apos;s talk
        </Link>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="lg:hidden text-xl text-ink"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="lg:hidden absolute top-[calc(100%+0.5rem)] w-[calc(100%-2.5rem)] max-w-3xl bg-white rounded-2xl shadow-lg border border-border p-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-90}
                onClick={() => setOpen(false)}
                className="cursor-pointer text-ink font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
