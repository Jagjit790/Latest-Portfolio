// Styled to match the PDF: black text on white, Calibri-style sans-serif,
// bold section headings with a thin black rule, bold right-aligned dates,
// italic tech stacks / sub-lines, dash bullets, and icons in the contact row.

const FONT = { fontFamily: "Calibri, Carlito, 'Segoe UI', Arial, sans-serif" };

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const icons = {
  phone: (
    <Icon>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </Icon>
  ),
  mail: (
    <Icon>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </Icon>
  ),
  linkedin: (
    <Icon>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </Icon>
  ),
  github: (
    <Icon>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </Icon>
  ),
};

const contact = [
  { icon: "phone", label: "+91 8146264594", href: "tel:+918146264594", plain: true },
  { icon: "mail", label: "singjagjit3914@gmail.com", href: "mailto:singjagjit3914@gmail.com" },
  { icon: "linkedin", label: "linkedin.com/in/jagjit-singh-cse", href: "https://linkedin.com/in/jagjit-singh-cse" },
  { icon: "github", label: "github.com/Jagjit790", href: "https://github.com/Jagjit790" },
];

// Wrap text in **double asterisks** to render it bold.
const projects = [
  {
    title: "Responsive Restaurant Website",
    date: "September 2024",
    stack: "HTML5, CSS3, JavaScript",
    points: [
      "Engineered a **fully responsive restaurant website** spanning 5 pages (home, menu, booking, about, contact) with an **interactive menu** and **table-booking interface**, tested across 3 screen breakpoints (desktop, tablet, mobile).",
      "Applied **responsive web design** principles (**CSS Flexbox/Grid**, **media queries**) to deliver consistent layouts and eliminate layout-shift issues across devices.",
      "Implemented **JavaScript-driven interactions**, including category-based menu filtering and real-time booking form validation, to improve user engagement and streamline the browsing experience.",
    ],
  },
  {
    title: "AI Study Buddy",
    date: "April 2026",
    stack: "Python, Flask, JavaScript, HTML/CSS, Groq API",
    points: [
      "Architected a **full-stack AI study assistant** using **Python**, **Flask**, **JavaScript**, **HTML/CSS**, and the **Groq API**, delivering real-time AI responses to personalized study queries.",
      "Built **multi-chat functionality** supporting unlimited concurrent conversations with automatic chat naming, local history persistence, and instant **English/Hindi language switching**.",
      "Enabled **document upload support (PDF parsing)** and **microphone-based voice input**, reducing manual typing and improving accessibility within a responsive chatbot UI.",
    ],
  },
  {
    title: "Sustainable Fertilizer Optimizer for Higher Yield",
    date: "May 2026",
    stack: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB Atlas",
    points: [
      "Built a data-driven **MERN-stack web application** analysing soil **NPK levels**, **pH**, and **crop type** to generate tailored fertilizer recommendations for farmers.",
      "Designed **rule-based recommendation logic** covering 4 crop types to suggest fertilizer type, quantity, and application timing based on soil nutrient deficiencies.",
      "Integrated **MongoDB Atlas** for persistent application data storage and a **live weather forecasting API** to deliver weather-aware, soil-based recommendations in real time.",
    ],
  },
];

const achievements = [
  {
    title: "Top 30 out of 200+ Participants — University Code Quiz",
    date: "September 2024",
    detail: "Organized by club Optimyzr for Success — DSA and logic-building rounds",
  },
  {
    title: "Selected Participant — Career Connect",
    date: "October 2024",
    detail: "Professional networking and case-study competition organized by Magnitude Club",
  },
];

const certifications = [
  { title: "React.js", date: "March 2025", detail: "Tech Veda — 15+ hour MOOC" },
  { title: "Programming in C++", date: "May 2025", detail: "Infosys Springboard" },
  { title: "Programming in Java", date: "May 2026", detail: "iamNeo" },
];

const skills = [
  ["Languages", "C++, Java, Python, JavaScript, C"],
  ["Web Technologies", "HTML5, CSS3, JavaScript, React.js, Responsive Web Design, Bootstrap"],
  ["Backend & APIs", "Node.js, Express.js, Flask, REST APIs"],
  ["Database", "MongoDB, MongoDB Atlas, SQL, DBMS"],
  [
    "Core CS Concepts",
    "Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), Software Engineering, Computer Networks, Operating Systems",
  ],
  ["Tools & Platforms", "Git, GitHub, VS Code, Postman, Vercel, Groq API"],
];

const education = [
  {
    title: "Lovely Professional University",
    date: "August 2024 - present",
    detail: "Bachelor of Technology — Computer Science and Engineering — CGPA: 8.2 / 10",
    place: "Phagwara, Punjab",
  },
  {
    title: "Kamla Nehru Public School",
    date: "April 2022 – March 2024",
    detail: "Intermediate (PCM — Physics, Chemistry, Mathematics) — Percentage: 72%",
    place: "Chak Hakim, Phagwara",
  },
  {
    title: "Akal Academy Chak Mander",
    date: "April 2021 – March 2022",
    detail: "Matriculation — Percentage: 94.8%",
    place: "Chak Mander, Banga",
  },
];

function RichText({ text }) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-3 sm:mb-4">
      <h2 className="mb-1.5 border-b border-black pb-0.5 text-[15px] font-bold sm:text-base md:text-lg">
        {title}
      </h2>
      {children}
    </section>
  );
}

// Bold title + bold date on the right, italic detail (+ italic place on the right).
function Entry({ title, date, detail, place }) {
  return (
    <div className="mb-1.5 text-[13px] leading-snug sm:text-sm md:text-[15px]">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <span className="font-bold">{title}</span>
        <span className="font-bold sm:shrink-0">{date}</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <span className="italic">{detail}</span>
        {place && <span className="italic sm:shrink-0">{place}</span>}
      </div>
    </div>
  );
}

export default function SpecializedCV() {
  return (
    <div
      style={FONT}
      className="h-full w-full overflow-y-auto bg-white px-4 py-5 text-black sm:px-6 sm:py-7 md:px-10 md:py-9"
    >
      <div className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <header className="mb-2 text-center sm:mb-3">
          <h1 className="text-lg font-bold sm:text-xl md:text-2xl">Jagjit Singh</h1>
          <p className="mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[13px] sm:text-sm">
            {contact.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 break-all ${c.plain ? "" : "underline underline-offset-2"}`}
              >
                {icons[c.icon]}
                {c.label}
              </a>
            ))}
          </p>
        </header>

        {/* Projects */}
        <Section title="Projects">
          {projects.map((p) => (
            <div key={p.title} className="mb-2 text-[13px] leading-snug sm:text-sm md:text-[15px]">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3>
                  <span className="font-bold">{p.title}</span>
                  <span> | </span>
                  <span className="italic">{p.stack}</span>
                </h3>
                <span className="font-bold sm:shrink-0">{p.date}</span>
              </div>
              <ul className="mt-0.5 space-y-0.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 pl-1 sm:pl-2">
                    <span className="font-bold" aria-hidden="true">
                      -
                    </span>
                    <span>
                      <RichText text={pt} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        {/* Achievements */}
        <Section title="Achievements">
          {achievements.map((a) => (
            <Entry key={a.title} {...a} />
          ))}
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          {certifications.map((c) => (
            <Entry key={c.title} {...c} />
          ))}
        </Section>

        {/* Technical Skills */}
        <Section title="Technical Skills">
          <div className="space-y-1 pl-1 text-[13px] leading-snug sm:pl-2 sm:text-sm md:text-[15px]">
            {skills.map(([label, value]) => (
              <p key={label}>
                <strong>{label}</strong>: {value}
              </p>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          {education.map((e) => (
            <Entry key={e.title} {...e} />
          ))}
        </Section>
      </div>
    </div>
  );
}
