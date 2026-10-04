import { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import {
  education,
  experience,
  circularSkills,
  barSkills,
} from "../data/resumeData";
import CircularProgress from "./CircularProgress";
import SkillBar from "./SkillBar";

const tabs = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

function TimelineItem({ date, title, place, detail, icon, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative pl-14 pb-10"
    >
      {!isLast && (
        <span className="absolute left-5 top-11 bottom-0 w-px bg-border" />
      )}
      <div className="absolute left-0 top-0 w-11 h-11 rounded-full bg-brand-soft border border-brand/20 flex items-center justify-center text-brand text-lg">
        {icon}
      </div>
      <span className="text-brand font-semibold text-sm">{date}</span>
      <h2 className="font-display text-xl font-semibold text-ink mt-1">
        {title}
      </h2>
      <span className="text-muted font-medium">{place}</span>
      {detail && (
        <span className="block text-sm text-muted mt-1">{detail}</span>
      )}
    </motion.div>
  );
}

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="resume" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="uppercase tracking-[3px] text-brand text-xs font-semibold">
            My journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink mt-3">
            Resume
          </h2>
        </div>

        <div className="flex justify-center gap-2 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                activeTab === tab.id
                  ? "bg-ink text-white"
                  : "bg-bg text-muted hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          {activeTab === "experience" && (
            <div>
              {experience.map((item, idx) => (
                <TimelineItem
                  key={item.title}
                  {...item}
                  icon={<FaBriefcase />}
                  isLast={idx === experience.length - 1}
                />
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div>
              {education.map((item, idx) => (
                <TimelineItem
                  key={item.title}
                  {...item}
                  icon={<FaGraduationCap />}
                  isLast={idx === education.length - 1}
                />
              ))}
            </div>
          )}
        </div>

        {activeTab === "skills" && (
          <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 max-w-4xl mx-auto">
              {circularSkills.map((skill) => (
                <CircularProgress key={skill.name} {...skill} />
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-x-10 card rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
              {barSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
