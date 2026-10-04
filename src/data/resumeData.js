export const profile = {
  name: "Aby B",
  headline: "Technology Analyst @ Infosys",
  roles: [
    "Technology Analyst.",
    "React Native Developer.",
    "Mobile App Engineer.",
    "Curious Learner.",
  ],
  tagline: "Technology Analyst @ Infosys | React Native Developer",
  bio: "With over 5.3+ years of experience in the IT industry, I've specialized in software development and business analysis. I've overseen the complete lifecycle of both Android and iOS application development, with hands-on experience in requirement gathering, documentation, prototyping, and delivery — skilled in Agile, Scrum, and SWOT methodologies.",
  address: "Thiruvananthapuram, Kerala, India",
  emails: ["abybalu@gmail.com"],
  phone: "+91 9656984960",
  social: {
    twitter: "https://twitter.com/abybalu",
    facebook: "https://www.facebook.com/aby.balu",
    instagram: "https://www.instagram.com/aby_balu_",
    linkedin: "https://www.linkedin.com/in/aby-b-313519149",
  },
};

export const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Resume", to: "resume" },
  { label: "Services", to: "services" },
  { label: "Contact", to: "contact" },
];

export const education = [
  {
    date: "2017-2021",
    title: "Bachelor of Technology - Computer Science Engineering",
    place: "APJ Abdul Kalam Technological University",
    detail: "Grade: 8.33",
  },
  {
    date: "2015-2017",
    title: "Plus One - Plus Two, Computer Science",
    place: "St. Mary's Higher Secondary School, Thiruvananthapuram",
  },
  {
    date: "2009-2015",
    title: "Class V - X",
    place: "Marygiri Senior Secondary School, TVM",
  },
];

export const experience = [
  {
    date: "Jan 2025 - Present",
    title: "Technology Analyst",
    place: "Infosys · Nu Skin Enterprises",
  },
  {
    date: "Oct 2022 - Apr 2025",
    title: "Senior Systems Engineer",
    place: "Infosys · Nu Skin Enterprises",
  },
  {
    date: "Aug 2021 - Oct 2022",
    title: "Systems Engineer",
    place: "Infosys · Nu Skin Enterprises",
  },
  {
    date: "Jul 2021 - Aug 2021",
    title: "Systems Engineer Trainee",
    place: "Infosys",
  },
];

export const circularSkills = [
  { name: "React Native", value: 95, lastWeek: 40, lastMonth: 78 },
  { name: "JavaScript", value: 92, lastWeek: 36, lastMonth: 74 },
  { name: "TypeScript", value: 88, lastWeek: 30, lastMonth: 68 },
  { name: "React.js", value: 90, lastWeek: 34, lastMonth: 72 },
  { name: "Apollo GraphQL", value: 80, lastWeek: 24, lastMonth: 58 },
  { name: "Redux", value: 85, lastWeek: 28, lastMonth: 62 },
];

export const barSkills = [
  { name: "Jest", value: 80 },
  { name: "Firebase", value: 85 },
  { name: "Google Cloud Platform (GCP)", value: 75 },
  { name: "Generative AI", value: 70 },
  { name: "Agile & Scrum", value: 90 },
  { name: "Spring Boot", value: 65 },
  { name: "Android Development", value: 85 },
  { name: "iOS Development", value: 75 },
];

export const services = [
  { title: "Mobile App Development", icon: "web" },
  { title: "Cross-Platform Engineering", icon: "ux" },
  { title: "API & Backend Integration", icon: "ideas" },
  { title: "Technical Consulting", icon: "innovation" },
];

export const footerLinks = navLinks;

export const footerServices = services.map((s) => s.title);
