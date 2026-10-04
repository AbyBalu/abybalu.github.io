import { motion } from "framer-motion";
import { profile } from "../data/resumeData";

const infoItems = [
  { label: "Name", value: profile.name },
  { label: "Address", value: profile.address },
  { label: "Email", value: profile.emails[0] },
  { label: "Phone", value: profile.phone },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-[1fr_1.2fr] gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:sticky md:top-32"
        >
          <span className="uppercase tracking-[3px] text-brand text-xs font-semibold">
            Get to know me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink mt-3 mb-2">
            About Me
          </h2>
          <p className="text-brand font-semibold mb-4">{profile.tagline}</p>
          <p className="text-muted text-lg leading-relaxed mb-6">
            {profile.bio}
          </p>
          <div className="relative blob-shape bg-accent2-soft p-1 w-48">
            <div className="blob-shape overflow-hidden border-4 border-white shadow-md">
              <img
                src="/images/about-2.jpg"
                alt={profile.name}
                className="w-full aspect-square object-cover object-[74%_36%] scale-[1.2]"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {infoItems.map((item) => (
            <div key={item.label} className="card rounded-2xl p-5">
              <span className="text-xs uppercase tracking-wide text-muted">
                {item.label}
              </span>
              <p className="font-display text-lg font-medium text-ink mt-1">
                {item.value}
              </p>
            </div>
          ))}
          <div className="rounded-2xl p-5 bg-ink text-white sm:col-span-2 flex items-center justify-between gap-4 shadow-sm">
            <div>
              <span className="text-xs uppercase tracking-wide text-white/60">
                Currently
              </span>
              <p className="font-display text-lg font-medium mt-1">
                {profile.headline}
              </p>
            </div>
            <span className="text-3xl">💼</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
