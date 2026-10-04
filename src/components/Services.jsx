import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaLightbulb,
  FaProjectDiagram,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { services } from "../data/resumeData";

const iconMap = {
  web: FaLaptopCode,
  ux: FaMobileAlt,
  ideas: FaLightbulb,
  innovation: FaProjectDiagram,
};

const spanMap = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-4",
];
const toneMap = ["bg-ink text-white", "card", "card", "bg-brand-soft"];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[3px] text-brand text-xs font-semibold">
            What I do
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink mt-3">
            Services
          </h2>
        </div>
        <div className="grid lg:grid-cols-6 gap-5">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon];
            const isDark = toneMap[idx].includes("bg-ink");
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={spanMap[idx % spanMap.length]}
              >
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  offset={-80}
                  className={`group cursor-pointer block p-8 rounded-2xl transition-all duration-300 h-full ${toneMap[idx % toneMap.length]}`}
                >
                  <Icon
                    className={`text-4xl mb-6 ${isDark ? "text-brand" : "text-brand"}`}
                  />
                  <h3
                    className={`font-display text-xl font-semibold relative inline-block pb-3 ${isDark ? "text-white" : "text-ink"}`}
                  >
                    {service.title}
                    <span className="absolute left-0 bottom-0 w-8 h-px bg-brand group-hover:w-full transition-all duration-300" />
                  </h3>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
