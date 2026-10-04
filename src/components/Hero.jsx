import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaReact, FaCode, FaPalette } from "react-icons/fa";
import { SiTypescript, SiGraphql, SiRedux, SiJest } from "react-icons/si";
import { profile } from "../data/resumeData";

const skillPills = [
  { label: "React Native", Icon: FaReact },
  { label: "Frontend", Icon: FaCode },
  { label: "UI/UX", Icon: FaPalette },
];

const badges = [
  {
    Icon: FaReact,
    color: "#61DAFB",
    className: "-top-2 -left-6 md:-left-10",
    delay: 0,
  },
  {
    Icon: SiTypescript,
    color: "#3178C6",
    className: "top-12 -right-4 md:-right-8",
    delay: 0.5,
  },
  {
    Icon: SiGraphql,
    color: "#E10098",
    className: "bottom-20 -left-10 md:-left-14",
    delay: 1,
  },
  {
    Icon: SiRedux,
    color: "#764ABC",
    className: "-bottom-2 right-4",
    delay: 1.5,
  },
  {
    Icon: SiJest,
    color: "#C21325",
    className: "top-1/2 -right-12 hidden md:flex",
    delay: 2,
  },
];

export default function Hero() {
  const sequence = profile.roles.flatMap((role) => [role, 2000]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-5 pt-32 pb-20 overflow-hidden grain"
    >
      <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-brand-soft blur-3xl opacity-70 animate-drift" />
      <div
        className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-accent2-soft blur-3xl opacity-70 animate-drift"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-muted mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
            </span>
            Available for freelance work
          </span>

          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] text-ink mb-6">
            Hey, I&apos;m{" "}
            <span className="italic text-brand">{profile.name}</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-muted font-medium mb-8">
            I craft experiences as a{" "}
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="type-cursor font-semibold"
            />
          </h2>

          <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-ink mb-4">
            I build digital experiences that people enjoy using.
          </h3>
          <p className="text-muted text-base md:text-lg mb-6">
            React Native developer focused on creating fast, intuitive and
            beautifully crafted products.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            {skillPills.map(({ label, Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm font-medium text-ink"
              >
                <Icon className="text-brand" />
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="about"
              smooth
              duration={500}
              offset={-80}
              className="inline-block cursor-pointer bg-ink text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-brand transition-colors shadow-sm"
            >
              Explore my work
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="inline-block cursor-pointer border border-border bg-white text-ink px-8 py-3.5 rounded-full text-sm font-semibold hover:border-ink transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 blob-shape bg-brand-soft -z-10" />
            <div className="w-full h-full blob-shape overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/images/hero.jpg"
                alt={profile.name}
                className="w-full h-full object-cover object-[50%_28%] scale-[1.15]"
              />
            </div>
            <span className="absolute bottom-5 right-5 w-6 h-6 rounded-full bg-accent2 ring-4 ring-white" />

            {badges.map(({ Icon, color, className, delay }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + delay * 0.15 }}
                className={`absolute hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-lg border border-border animate-drift ${className}`}
                style={{ animationDelay: `${delay}s` }}
              >
                <Icon size={22} color={color} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
