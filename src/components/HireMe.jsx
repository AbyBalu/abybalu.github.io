import { Link } from "react-scroll";

const words = [
  "Let's work together",
  "Available for freelance",
  "Open to opportunities",
];

export default function HireMe() {
  return (
    <section className="py-20 bg-ink text-center overflow-hidden grain">
      <div className="max-w-2xl mx-auto px-5 mb-14">
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-6">
          Got a project in mind?
        </h2>
        <Link
          to="contact"
          smooth
          duration={500}
          offset={-80}
          className="inline-block cursor-pointer bg-brand text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-brand-dark transition-colors shadow-sm"
        >
          Hire me
        </Link>
      </div>

      <div className="relative flex overflow-hidden border-y border-white/10 py-5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, loop) => (
            <span key={loop} className="flex items-center">
              {words.map((word) => (
                <span key={word} className="flex items-center">
                  <span className="font-display text-2xl md:text-4xl font-medium text-white/90 mx-6">
                    {word}
                  </span>
                  <span className="text-brand text-2xl">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
