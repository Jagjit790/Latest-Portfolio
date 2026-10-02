const contact = [
  { label: "+91 8146264594", href: "tel:+918146264594" },
  { label: "singjagjit3914@gmail.com", href: "mailto:singjagjit3914@gmail.com" },
  { label: "linkedin.com/in/jagjit-singh-cse", href: "https://linkedin.com/in/jagjit-singh-cse" },
  { label: "github.com/Jagjit790", href: "https://github.com/Jagjit790" },
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

const projects = [
  {
    title: "Responsive Restaurant Website",
    date: "September 2024",
    stack: "HTML5, CSS3, JavaScript",
    points: [
      "Engineered a fully responsive restaurant website spanning 5 pages (home, menu, booking, about, contact) with an interactive menu and table-booking interface, tested across 3 screen breakpoints (desktop, tablet, mobile).",
      "Applied responsive web design principles (CSS Flexbox/Grid, media queries) to deliver consistent layouts and eliminate layout-shift issues across devices.",
      "Implemented JavaScript-driven interactions, including category-based menu filtering and real-time booking form validation, to improve user engagement and streamline the browsing experience.",
    ],
  },
  {
    title: "AI Study Buddy",
    date: "April 2026",
    stack: "Python, Flask, JavaScript, HTML/CSS, Groq API",
    points: [
      "Architected a full-stack AI study assistant using Python, Flask, JavaScript, HTML/CSS, and the Groq API, delivering real-time AI responses to personalized study queries.",
      "Built multi-chat functionality supporting unlimited concurrent conversations with automatic chat naming, local history persistence, and instant English/Hindi language switching.",
      "Enabled document upload support (PDF parsing) and microphone-based voice input, reducing manual typing and improving accessibility within a responsive chatbot UI.",
    ],
  },
  {
    title: "Sustainable Fertilizer Optimizer for Higher Yield",
    date: "May 2026",
    stack: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB Atlas",
    points: [
      "Built a data-driven MERN-stack web application analysing soil NPK levels, pH, and crop type to generate tailored fertilizer recommendations for farmers.",
      "Designed rule-based recommendation logic covering 4 crop types to suggest fertilizer type, quantity, and application timing based on soil nutrient deficiencies.",
      "Integrated MongoDB Atlas for persistent application data storage and a live weather forecasting API to deliver weather-aware, soil-based recommendations in real time.",
    ],
  },
];

const achievements = [
  "Ranked in the Top 30 out of 200+ participants in the University Code Quiz organized by club Optimyzr for Success, involving DSA and logic-building rounds — September 2024",
  "Selected participant in Career Connect, a professional networking and case-study competition organized by Magnitude Club — October 2024",
];

const certifications = [
  "React.js — 15+ hour MOOC | Tech Veda — March 2025",
  "Programming in C++ | Infosys Springboard — May 2025",
  "Programming in Java | iamNeo — May 2026",
];

const education = [
  {
    school: "Lovely Professional University",
    place: "Phagwara, Punjab",
    degree: "Bachelor of Technology — Computer Science and Engineering | CGPA: 8.2 / 10",
    date: "August 2024 – present",
  },
  {
    school: "Kamla Nehru Public School",
    place: "Chak Hakim, Phagwara",
    degree: "Intermediate (PCM — Physics, Chemistry, Mathematics) | Percentage: 72%",
    date: "April 2022 – March 2024",
  },
  {
    school: "Akal Academy Chak Mander",
    place: "Chak Mander, Banga",
    degree: "Matriculation | Percentage: 94.8%",
    date: "April 2021 – March 2022",
  },
];

function Section({ title, children }) {
  return (
    <section className="mb-5 md:mb-6">
      <h2 className="mb-2 border-b border-gray-200 pb-1 text-xs font-bold uppercase tracking-wider text-blue-900 sm:text-sm">
        {title}
      </h2>
      {children}
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="ml-4 list-disc space-y-1 text-xs leading-relaxed sm:text-[13px] md:text-sm">
      {items.map((item) => (
        <li key={item} className="pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function GeneralCV() {
  return (
    <div className="h-full w-full overflow-y-auto bg-white px-4 py-6 text-[#111] sm:px-6 sm:py-8 md:px-10 md:py-10">
      <div className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <header className="mb-5 border-b border-gray-300 pb-3 text-center md:mb-6">
          <h1 className="font-display text-2xl font-bold tracking-wide text-blue-900 sm:text-3xl md:text-4xl">
            JAGJIT SINGH
          </h1>
          <p className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] text-gray-600 sm:text-xs md:text-sm">
            {contact.map((c, i) => (
              <span key={c.label} className="flex items-center gap-x-2">
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="break-all hover:text-blue-900 hover:underline"
                >
                  {c.label}
                </a>
                {i < contact.length - 1 && <span className="hidden text-gray-400 sm:inline">|</span>}
              </span>
            ))}
          </p>
        </header>

        {/* Technical Skills */}
        <Section title="Technical Skills">
          <div className="space-y-1 text-xs leading-relaxed sm:text-[13px] md:text-sm">
            {skills.map(([label, value]) => (
              <p key={label}>
                <strong>{label}:</strong> {value}
              </p>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          {projects.map((p) => (
            <div key={p.title} className="mb-4 last:mb-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-sm font-bold md:text-base">{p.title}</h3>
                <span className="text-xs text-gray-500 sm:shrink-0 md:text-sm">{p.date}</span>
              </div>
              <p className="mb-1 text-xs italic text-gray-600 sm:text-[13px] md:text-sm">
                Tech Stack: {p.stack}
              </p>
              <BulletList items={p.points} />
            </div>
          ))}
        </Section>

        {/* Achievements */}
        <Section title="Achievements">
          <BulletList items={achievements} />
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          <BulletList items={certifications} />
        </Section>

        {/* Education */}
        <Section title="Education">
          {education.map((e) => (
            <div key={e.school} className="mb-3 text-xs sm:text-[13px] md:text-sm last:mb-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                <span className="font-bold">{e.school}</span>
                <span className="text-gray-600 sm:shrink-0">{e.place}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                <span>{e.degree}</span>
                <span className="text-gray-600 sm:shrink-0">{e.date}</span>
              </div>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
}
