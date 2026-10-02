import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useEffect } from "react";

import { ArrowDownRight, ArrowUpRight, BookOpen, Braces, Code2, Download, Github, Linkedin, Mail, Menu, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import GeneralCV from "@/components/ui/GeneralCV";
import SpecializedCV from "@/components/ui/SpecializedCV";
import agriSmartImage from "@/assets/agrismart.png";
import foodieGoImage from "@/assets/foodiego.jpg";
import studyBuddyImage from "@/assets/study-buddy.png";
import ipcImage from "@/assets/ipc-framework.png";
import restaurantImage from "@/assets/restaurant-site.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jagjit Singh Khalsa — Full Stack Developer & CS Student" },
      { name: "description", content: "Portfolio of Jagjit Singh Khalsa, a Computer Science student building practical full-stack, Android, AI, and systems projects." },
      { property: "og:title", content: "Jagjit Singh Khalsa — Builder in Progress" },
      { property: "og:description", content: "Explore practical full-stack, Android, AI, and systems projects by Computer Science student Jagjit Singh Khalsa." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

type Project = {
  number: string;
  name: string;
  type: string;
  summary: string;
  stack: string[];
  image: string;
  accent: string;
  problem: string;
  built: string;
  workings: string;
  features: string[];
  learned: string;
  githubUrl?: string;   // Optional property for the GitHub link
  liveDemoUrl?: string;
};

const projects: Project[] = [
  { number: "01", name: "AgriSmart", type: "web application", summary: "A practical tool for making clearer fertilizer decisions from agricultural and environmental information.", stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"], image: agriSmartImage, accent: "bg-mint", problem: "Fertilizer decisions depend on several pieces of field and environmental information that are difficult to weigh together.", built: "A web-based optimizer that collects relevant inputs and turns them into an easier-to-understand fertilizer recommendation.", workings: "The interface captures field information, sends it through an Express service, and stores structured records in MongoDB before presenting the recommendation.", features: ["Structured agricultural inputs", "Recommendation view", "Saved records", "Responsive interface"], learned: ["How data modeling, backend routes, and interface clarity have to work together in a practical product."], githubUrl: ["https://github.com/Jagjit790/AgriSmart"], liveDemoUrl: ["https://agri-smart-ag3c.vercel.app/"] },
  { number: "02", name: "FoodieGo", type: "android application", summary: "A native food-discovery experience built around visual browsing and smooth restaurant exploration.", stack: ["Java", "Android Studio", "RecyclerView", "Material Design", "ViewPager2"], image: foodieGoImage, accent: "bg-sky", problem: "Restaurant discovery becomes tiring when menus and choices are presented without a clear browsing rhythm.", built: "An Android application that organizes food and restaurant choices into an approachable, visual flow.", workings: "RecyclerView handles efficient lists while ViewPager2 supports swipeable discovery patterns within a Material Design interface.", features: ["Restaurant browsing", "Category discovery", "Swipeable views", "Native Android UI"], learned: "How mobile navigation, lifecycle constraints, and compact screen layouts shape an application differently from the web." },
  { number: "03", name: "AI Study Buddy", type: "python service", summary: "A study companion designed to help students balance focused learning with the rest of daily life.", stack: ["Python", "Flask", "Groq API"], image: studyBuddyImage, accent: "bg-lilac", problem: "Study tools often focus only on output, while students also need help planning and keeping their workload manageable.", built: "A conversational study companion with a lightweight Flask backend and AI-assisted responses.", workings: "The Flask service prepares study prompts, communicates with the Groq API, and returns useful guidance to a focused chat interface.", features: ["Study conversations", "Planning prompts", "Focused responses", "Simple Flask service"], learned: "How to shape prompts, handle an external API responsibly, and keep an AI feature useful rather than decorative.",  githubUrl: ["https://github.com/MohitBeetan/AI-Study-Buddy"]},
  { number: "04", name: "OS IPC Framework", type: "systems experiment", summary: "A low-level exploration of process communication, connected to a real-time browser-facing layer.", stack: ["C", "System Calls", "Node.js", "Express", "WebSockets"], image: ipcImage, accent: "bg-butter", problem: "Operating-system concepts can feel abstract until process behavior is made observable and interactive.", built: "An experimental framework where C processes communicate through system primitives and surface activity through a web layer.", workings: "Native processes exchange messages through IPC mechanisms; a Node and WebSocket bridge exposes events to the browser in real time.", features: ["Inter-process messaging", "System-call experiments", "WebSocket bridge", "Browser visualization"], learned: "How low-level process behavior can be translated into a form that is easier to inspect and understand." , githubUrl: ["https://github.com/Jagjit790/ipc-project"]},
  { number: "05", name: "Restaurant Website", type: "frontend study", summary: "A responsive restaurant experience built to strengthen layout, hierarchy, and core web fundamentals.", stack: ["HTML", "CSS", "JavaScript"], image: restaurantImage, accent: "bg-primary", problem: "A restaurant site must make atmosphere, menu information, and key actions clear across every screen size.", built: "A responsive front-end experience with structured content, considered typography, and mobile-friendly navigation.", workings: "Semantic HTML provides the structure, CSS controls the responsive composition, and JavaScript supports lightweight interactions.", features: ["Responsive layouts", "Menu presentation", "Accessible structure", "Mobile navigation"], learned: "Why fundamentals—spacing, hierarchy, responsiveness, and semantics—still decide whether an interface feels complete.",  githubUrl: ["https://github.com/Jagjit790/Project"], liveDemoUrl: ["https://jagjit790.github.io/Project/"]  },
];

const skillGroups = [
  { title: "Frontend", color: "bg-primary", tint: "bg-primary/10", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { title: "Backend", color: "bg-sky", tint: "bg-sky/10", items: ["Node.js", "Express.js", "Flask"] },
  { title: "Language & Data", color: "bg-mint", tint: "bg-mint/10", items: ["Java", "C", "Python", "MongoDB", "SQL"] },
  { title: "Tools", color: "bg-butter", tint: "bg-butter/15", items: ["Git", "GitHub", "VS Code", "Android Studio"] },
];

const handleDownload = () => {
  // Triggers the first download (General CV)
  const link1 = document.createElement("a");
  link1.href = "/general-cv.pdf"; // Must be in your project's 'public' folder
  link1.download = "Jagjit_Singh_General_CV.pdf";
  link1.click();
};

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDevHovered, setIsDevHovered] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only track mouse if device supports hover to save performance on mobile touch devices
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
        setMousePos({ x, y });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <header className="sticky top-0 z-40 px-4 pt-3 sm:px-6">
        <>
  {/* TOP NAVIGATION BAR */}
  <nav aria-label="Main navigation" className="mx-auto max-w-6xl rounded-full border border-border bg-surface/75 px-4 py-2 shadow-[var(--shadow-soft)] backdrop-blur-xl relative z-30">
    <div className="flex items-center justify-between">
      <a href="#top" className="font-display text-xl font-semibold">JSK<span className="text-primary">.</span></a>
      
      {/* Desktop Links */}
      <div className="hidden items-center gap-1 text-sm text-muted-foreground md:flex">
        {[["About", "about"], ["Projects", "projects"], ["Skills", "skills"], ["Journey", "journey"]].map(([label, id]) => (
          <a key={id} href={`#${id}`} className="rounded-full px-3 py-2 transition-colors hover:bg-secondary/70 hover:text-foreground">
            {label}
          </a>
        ))}
      </div>
      
      <div className="flex items-center gap-2">
        <Button asChild variant="portfolioDark" size="sm">
          <a href="#contact">Let's connect</a>
        </Button>
        {/* Mobile Hamburger Button */}
        <Button variant="ghost" size="icon" className="rounded-full md:hidden" aria-label="Open navigation" onClick={() => setMenuOpen(true)}>
          <Menu />
        </Button>
      </div>
    </div>
  </nav>

  {/* MOBILE SLIDE-IN MENU */}
  {/* 1. Dark Overlay Backdrop */}
  <div 
    className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
      menuOpen ? "visible opacity-100" : "invisible opacity-0"
    }`}
    onClick={() => setMenuOpen(false)}
    aria-hidden="true"
  />

  {/* 2. Slide-in Side Panel */}
  <div 
    className={`fixed inset-y-0 left-0 z-50 flex w-[280px] max-w-[80vw] flex-col gap-8 border-r border-border bg-background p-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
      menuOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    {/* Mobile Menu Header */}
    <div className="flex items-center justify-between">
      <a href="#top" className="font-display text-2xl font-semibold" onClick={() => setMenuOpen(false)}>
        JSK<span className="text-primary">.</span>
      </a>
      <Button variant="ghost" size="icon" className="rounded-full" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>
        <X />
      </Button>
    </div>

    {/* Mobile Menu Links */}
    <div className="flex flex-col gap-2">
      {[["About", "about"], ["Projects", "projects"], ["Skills", "skills"], ["Journey", "journey"]].map(([label, id]) => (
        <a 
          key={id} 
          href={`#${id}`} 
          onClick={() => setMenuOpen(false)} 
          className="rounded-xl px-4 py-3 text-lg font-medium transition-colors hover:bg-secondary hover:text-foreground"
        >
          {label}
        </a>
      ))}
    </div>
  </div>
</>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5 sm:px-8">
        
       <section className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-[1400px] flex-col overflow-hidden px-4 pt-8 pb-0 sm:pt-14 lg:block lg:min-h-0 lg:overflow-visible lg:pt-24 lg:pb-28">
  {/* Mobile/tablet: single column. Desktop (lg+): 6/5 split */}
  <div className="flex flex-1 flex-col lg:grid lg:grid-cols-11 lg:place-items-center lg:items-center lg:gap-10 xl:gap-16">

    {/* ========================================== */}
    {/* LEFT COLUMN (6 cols on desktop)            */}
    {/* ========================================== */}
    <div className="flex w-full flex-1 flex-col items-center lg:col-span-6 lg:flex-none lg:justify-center">

      {/* 1. GREETING */}
      <div className="mb-4 flex items-center gap-1.5 font-sans text-sm font-medium text-foreground/80 sm:mb-6 sm:text-base">
        <span>👋</span>
        <span>I am Jagjit Singh</span>
      </div>

      {/* 2. HEADING COMPOSITION */}
      <div className="relative flex w-full flex-col items-center justify-center select-none">

        {/* --- LAYER 1: BACK TEXT --- */}
        <h1 className="relative z-0 m-0 flex flex-col items-center justify-center text-center leading-[0.9] font-black tracking-tight text-[2.9rem] min-[400px]:text-[3.4rem] sm:text-7xl md:text-[6.5rem] lg:leading-[0.85] lg:text-[4.5rem] xl:text-[6.5rem] 2xl:text-[8rem]">

          <span
            onClick={() => setIsDevHovered(false)}
            className={`whitespace-nowrap transition-all duration-500 ease-in-out ${
              isDevHovered
                ? "text-transparent [-webkit-text-stroke:1.5px_black] dark:[-webkit-text-stroke:1.5px_white]"
                : "text-black [-webkit-text-stroke:1.5px_white] dark:text-white dark:[-webkit-text-stroke:1.5px_black]"
            }`}
          >
            Full Stack
          </span>

          <span
            onMouseEnter={() => setIsDevHovered(true)}
            onMouseLeave={() => setIsDevHovered(false)}
            onClick={() => setIsDevHovered((v) => !v)} // tap support on mobile
            className={`cursor-pointer whitespace-nowrap transition-all duration-500 ease-in-out ${
              isDevHovered
                ? "text-black [-webkit-text-stroke:1.5px_white] dark:text-white dark:[-webkit-text-stroke:1.5px_black]"
                : "text-transparent [-webkit-text-stroke:1.5px_black] dark:[-webkit-text-stroke:1.5px_white]"
            }`}
          >
            Developer
          </span>
        </h1>

        {/* --- LAYER 2: DESKTOP PORTRAIT (overlaps text, lg+ only) --- */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden w-[180px] -translate-x-1/2 -translate-y-[40%] lg:block xl:w-[240px] 2xl:w-[300px]"
        >
          <img
            src="/profile.png"
            alt="Jagjit Singh"
            className="h-auto w-full object-contain brightness-110"
          />
        </div>

        {/* --- LAYER 3: FOREGROUND STROKE TEXT (desktop only, sits over portrait) --- */}
        <h1
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 m-0 hidden flex-col items-center justify-center text-center leading-[0.85] font-black tracking-tight lg:flex lg:text-[4.5rem] xl:text-[6.5rem] 2xl:text-[8rem]"
        >
          <span
            className={`whitespace-nowrap text-transparent transition-opacity duration-500 ease-in-out [-webkit-text-stroke:1.5px_white] dark:[-webkit-text-stroke:1.5px_black] ${
              isDevHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            Full Stack
          </span>
          <span
            className={`whitespace-nowrap text-transparent transition-opacity duration-500 ease-in-out [-webkit-text-stroke:1.5px_white] dark:[-webkit-text-stroke:1.5px_black] ${
              isDevHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            Developer
          </span>
        </h1>
      </div>

      {/* 3. CTA BUTTONS */}
      <div className="relative z-30 mt-8 flex w-full max-w-xs flex-col gap-3 sm:mt-14 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 lg:mt-27">
        <Button
          asChild
          className="h-12 w-full rounded-full bg-black px-7 font-medium text-white shadow-md hover:bg-neutral-800 sm:w-auto dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          <a href="#projects" className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap">
            View Projects <ArrowUpRight className="size-4" />
          </a>
        </Button>

        <Button
          asChild
          variant="outline"
          className="h-12 w-full rounded-full border border-black bg-transparent px-7 font-medium text-black hover:bg-black/5 sm:w-auto dark:border-white dark:text-white dark:hover:bg-white/10"
        >
          <a href="#contact" className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap">
            Hire Me <ArrowUpRight className="size-4" />
          </a>
        </Button>
      </div>

      {/* 4. MOBILE/TABLET: tagline + stack pills (fills the empty space) */}
      <div className="mt-8 flex w-full max-w-sm flex-col items-center gap-5 text-center sm:mt-10 lg:hidden">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          I build fast, clean web apps, from pixel-perfect interfaces to the APIs behind them.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {["React", "Next.js", "Node.js", "Tailwind"].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-xs text-foreground/80 backdrop-blur dark:bg-neutral-900/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 5. MOBILE/TABLET PORTRAIT: pinned to the bottom, with floating status chips */}
      <div className="relative mt-auto flex w-full justify-center pt-12 leading-none lg:hidden">
        {/* soft arch behind the portrait */}
        <div className="absolute bottom-0 left-1/2 h-[90%] w-72 -translate-x-1/2 rounded-t-full bg-gradient-t from-foreground/10 to-transparent min-[400px]:w-95 sm:w-96" />

        <img
          src="/profile.png"
          alt="Jagjit Singh"
          className="relative z-0 -mb-px block h-auto w-72 object-contain object-bottom align-bottom brightness-110 min-[400px]:w-110 sm:w-96"
        />
      </div>
    </div>

    {/* ========================================== */}
    {/* RIGHT COLUMN: STATUS CARD (desktop only)   */}
    {/* Hidden below lg so the portrait sits flush */}
    {/* ========================================== */}
    <div className="hidden w-full flex-col lg:col-span-5 lg:flex">
      <div className="relative w-full overflow-hidden rounded-[1.75rem] border border-border bg-surface/70 p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl xl:p-8 dark:bg-neutral-900/70">

        {/* Header */}
        <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="size-2 animate-pulse rounded-full bg-green-500" /> build in progress
          </span>
          <span>rev 0.3</span>
        </div>

        {/* Main Focus */}
        <div className="my-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-sm text-muted-foreground">current focus</p>
            <p className="mt-2 font-serif text-3xl font-semibold xl:text-4xl">Full-stack depth</p>
          </div>
          <Braces className="size-10 text-foreground opacity-50" strokeWidth={1.25} />
        </div>

        {/* Progress Bar */}
        <div className="h-2 overflow-hidden rounded-full bg-foreground/10">
          <div className="h-full w-2/3 rounded-full bg-foreground" />
        </div>

        {/* Activity Blocks */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-4">
            <p className="font-mono text-[10px] uppercase text-muted-foreground">now building</p>
            <p className="mt-2 text-sm font-medium">Next.js · APIs</p>
          </div>
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4">
            <p className="font-mono text-[10px] uppercase text-muted-foreground">exploring</p>
            <p className="mt-2 text-sm font-medium">Systems · IPC</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-between border-t border-border pt-5 font-mono text-xs text-muted-foreground">
          <span>status: learning</span>
          <span>keep scrolling ↓</span>
        </div>
      </div>
    </div>

  </div>
</section>


        <section id="about" className="border-t border-border py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><Eyebrow>(a) — the loop</Eyebrow><h2 className="mt-4 font-display text-4xl font-semibold">How I actually learn</h2><p className="mt-5 leading-relaxed text-foreground/70">I'm a B.Tech Computer Science Engineering student with a minor in Full Stack Development. I learn best when every layer has a job in a real, working product.</p></div><div className="grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-4">{[["01", "Learning", "Read the docs, then write it."], ["02", "Building", "Make the smallest useful version."], ["03", "Experimenting", "Try the unfamiliar path."], ["04", "Improving", "Return and refine the rough edges."]].map(([number, title, copy], i) => <div key={title} className={`rounded-3xl border border-border bg-surface/65 p-5 shadow-sm backdrop-blur-xl ${i % 2 ? "lg:translate-y-5" : ""}`}><span className={`font-display text-3xl ${i === 0 ? "text-lilac" : i === 1 ? "text-primary" : i === 2 ? "text-sky" : "text-mint"}`}>{number}</span><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p></div>)}</div></div>
        </section>

        <section id="projects" className="py-20 lg:py-28">
          <div className="mb-12 flex items-end justify-between"><div><Eyebrow>(b) — selected builds</Eyebrow><h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Things I've made work</h2></div><span className="hidden font-mono text-xs text-muted-foreground sm:block">05 projects · open each story</span></div>
          <div className="space-y-10 lg:space-y-16">{projects.map((project, index) => <ProjectFeature key={project.name} project={project} reverse={index % 2 === 1} />)}</div>
        </section>

        <section id="skills" className="border-y border-border py-20 lg:py-28"><Eyebrow>(c) — the toolkit</Eyebrow><h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">What I work with</h2><p className="mt-4 max-w-lg text-foreground/70">Grouped by how the pieces come together—not by percentages I can't honestly defend.</p><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{skillGroups.map((group) => <div key={group.title} className="rounded-3xl border border-border bg-surface/65 p-5 shadow-sm backdrop-blur-xl"><h3 className="flex items-center gap-2 font-semibold"><span className={`size-2 rounded-full ${group.color}`} />{group.title}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className={`rounded-full px-3 py-1.5 text-xs font-medium ${group.tint}`}>{item}</span>)}</div></div>)}</div></section>

        <section id="journey" className="py-20 lg:py-28"><Eyebrow>(d) — the path so far</Eyebrow><h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">A growing line</h2><div className="relative mt-12"><div className="absolute top-2 bottom-2 left-[7px] w-px bg-border sm:left-1/2" /><ol className="space-y-9">{["Started with web development", "Built frontend projects", "Learned Java and programming fundamentals", "Moved into backend development", "Built full-stack applications", "Explored Android development", "Started larger, real-world projects", "Currently strengthening full-stack skills"].map((step, index) => <li key={step} className={`relative pl-8 sm:w-1/2 sm:pl-0 ${index % 2 ? "sm:ml-auto sm:pl-10" : "sm:pr-10 sm:text-right"}`}><span className={`absolute top-1.5 left-0 size-3.5 rounded-full ring-4 ring-background ${index % 2 ? "sm:-left-[7px]" : "sm:right-[-7px] sm:left-auto"} ${index === 7 ? "bg-primary" : index % 3 === 0 ? "bg-lilac" : index % 3 === 1 ? "bg-sky" : "bg-mint"}`} /><p className="font-mono text-xs text-muted-foreground">{index === 7 ? "now" : `step 0${index + 1}`}</p><p className="mt-1 font-medium">{step}</p></li>)}</ol></div></section>

        <section className="grid gap-6 py-12 lg:grid-cols-12"><div className="rounded-[2rem] border border-border bg-surface/65 p-7 shadow-sm backdrop-blur-xl lg:col-span-7"><Eyebrow>(e) — current focus</Eyebrow><h2 className="mt-3 font-display text-3xl font-semibold">Where I'm pointing next</h2><div className="mt-6 flex flex-wrap gap-2.5">{["Full Stack Development", "Next.js", "Backend Architecture", "Database Design", "Problem Solving", "Real-world Projects"].map((item, i) => <span key={item} className={`rounded-full border border-border px-4 py-2 text-sm font-medium ${i % 3 === 0 ? "bg-primary/10" : i % 3 === 1 ? "bg-sky/10" : "bg-mint/10"}`}>{item}</span>)}</div></div>
        <div className="rounded-[2rem] bg-foreground p-7 text-background lg:col-span-5"><Eyebrow light>the receipts</Eyebrow><h2 className="mt-3 font-display text-3xl font-semibold">See the actual code</h2><p className="mt-3 leading-relaxed text-background/70">No inflated numbers—just repositories, commits, and experiments as they are.</p>
       <Button 
          onClick={() => window.open("https://github.com/Jagjit790", "_blank")}
          variant="portfolioOutline" 
          className="mt-6 border-background/20 bg-background text-foreground hover:bg-foreground hover:text-background"
        >
          View GitHub <Github />
        </Button></div>
        </section>

        <section className="grid gap-6 py-12 md:grid-cols-2"><div className="border-t border-border pt-7"><Eyebrow>resume</Eyebrow><h2 className="mt-3 font-display text-3xl font-semibold">The concise version</h2><p className="mt-3 max-w-md text-foreground/70">Education, tools, and project work in a familiar one-page format.</p><div className="mt-6 flex gap-3">
          <Button onClick={() => setIsResumeOpen(true)} variant="portfolioOutline">View resume <BookOpen /></Button>
          <Button onClick={handleDownload} variant="portfolioOutline">Download <Download /></Button>
          </div></div><div className="border-t border-border pt-7"><Eyebrow>education</Eyebrow><p className="mt-3 font-display text-3xl font-semibold">B.Tech Computer Science Engineering</p><p className="mt-3 text-foreground/70">Minor in Full Stack Development</p></div></section>

        <section id="contact" className="py-20 lg:py-28">
          <div className="rounded-[2.25rem] border border-border bg-surface/70 p-7 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <Eyebrow>(f) — say hello</Eyebrow>
                <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Have an idea worth building?</h2>
                <p className="mt-5 max-w-md leading-relaxed text-foreground/70">
                  I'm a student, not a senior—but I care about turning rough ideas into thoughtful, working builds.
                </p>
                
                {/* UPDATED LINKS HERE */}
                <div className="mt-8 flex flex-col gap-3">
                  <ContactPlaceholder 
                    icon={<Mail />} 
                    label="singhjagjit3914@gmail.com" 
                    href="mailto:singhjagjit3914@gmail.com" 
                  />
                  <ContactPlaceholder 
                    icon={<Github />} 
                    label="github.com/Jagjit790" 
                    href="https://github.com/Jagjit790" 
                  />
                  <ContactPlaceholder 
                    icon={<Linkedin />} 
                    label="linkedin.com/in/jagjit-singh-cse" 
                    href="https://linkedin.com/in/jagjit-singh-cse" 
                  />
                </div>
              </div>

              <form 
                  className="space-y-4" 
                  onSubmit={(event) => { 
                    event.preventDefault(); 
                    
                    // 1. Extract data from the form fields
                    const formData = new FormData(event.currentTarget);
                    const name = formData.get("name");
                    const email = formData.get("email");
                    const message = formData.get("message");
                    
                    // 2. Format the message text
                    const text = `Hello Jagjit! New message :\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
                    
                    // 3. Encode the text so it works in a URL
                    const encodedText = encodeURIComponent(text);
                    
                    // 4. Add your WhatsApp number (Include country code, no + or spaces)
                    const phoneNumber = "918146264594"; // <-- REPLACE WITH YOUR NUMBER
                    
                    // 5. Open WhatsApp in a new tab
                    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
                    
                    // 6. Show success message on the website
                    setFormSent(true); 
                  }}
                >
                  <label className="block">
                    <span className="font-mono text-xs text-muted-foreground">name</span>
                    {/* Added name="name" */}
                    <Input required name="name" className="mt-2 h-12 rounded-2xl bg-background/70 px-4" placeholder="Your name" />
                  </label>
                  
                  <label className="block">
                    <span className="font-mono text-xs text-muted-foreground">email</span>
                    {/* Added name="email" */}
                    <Input required type="email" name="email" className="mt-2 h-12 rounded-2xl bg-background/70 px-4" placeholder="you@example.com" />
                  </label>
                  
                  <label className="block">
                    <span className="font-mono text-xs text-muted-foreground">message</span>
                    {/* Added name="message" */}
                    <Textarea required name="message" rows={5} className="mt-2 resize-none rounded-2xl bg-background/70 px-4 py-3" placeholder="What are you thinking about?" />
                  </label>
                  
                  <Button type="submit" variant="portfolio" size="portfolio" className="w-full">
                    Send via WhatsApp <Send />
                  </Button>
                  
                  
                </form>
            </div>
          </div>
        </section>

      
        <footer className="flex flex-col items-center justify-between gap-4 border-t border-border py-8 text-sm text-muted-foreground sm:flex-row"><p className="font-display text-lg font-semibold text-foreground">Jagjit Singh Khalsa<span className="text-primary">.</span></p><a href="#top" className="hover:text-foreground">Back to top ↑</a><p className="font-mono text-xs">B.Tech CSE · still building</p></footer>
      
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
      </main>
    </div>
  );
}



function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`font-mono text-xs uppercase tracking-[0.2em] ${light ? "text-background/55" : "text-muted-foreground"}`}>{children}</p>;
}

// function ResumeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {}
// ---- PASTE-READY BLOCK FOR index.tsx ----
// 1) Make sure these imports exist at the top of index.tsx (merge with your current ones):
//      import { useEffect, useState, type ReactNode } from "react";
//      import { X } from "lucide-react";
//      import GeneralCV from "./GeneralCV";
//      import SpecializedCV from "./SpecializedCV";
// 2) Replace your old ResumeModal function with everything below.
// 3) Use it as before: <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

const isDesktop = () => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches;

/**
 * A scrollable book page. The CV renders at normal, readable size and the page
 * scrolls with the mouse wheel / touch. Clicking the content turns the page on
 * desktop (scrollbar clicks and links are ignored). On mobile, use the Back/Next bar.
 */
function PageScroll({ children, onTurn }: { children: ReactNode; onTurn?: () => void }) {
  return (
    <div className="resume-scroll h-full w-full overflow-y-auto overscroll-contain bg-white">
      <div
        className="min-h-full pb-4 md:cursor-pointer md:pb-0"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) return; // let links work
          if (isDesktop()) onTurn?.();
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** Shadow near the spine so each page looks bound into the book (all sizes). */
const Spine = () => (
  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-r from-black/20 to-transparent md:w-6" />
);

function ResumeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // 0 = Closed (Cover), 1 = General CV, 2 = Specialized CV
  const [page, setPage] = useState(0);

  // Reset to cover when closed
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setPage(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Esc closes the book
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/75 backdrop-blur-sm transition-all duration-500 ease-out ${
        isOpen ? "opacity-100 visible" : "invisible opacity-0 pointer-events-none"
      }`}
    >
      {/* Close (X) */}
      <button
        onClick={onClose}
        className={`absolute right-3 top-3 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-500 hover:bg-white/20 md:right-8 md:top-8 md:h-12 md:w-12 ${
          isOpen ? "translate-y-0 opacity-100 delay-200" : "-translate-y-8 opacity-0"
        }`}
        aria-label="Close CV"
        title="Return to portfolio"
      >
        <X size={24} className="h-6 w-6 md:h-7 md:w-7" />
      </button>

      {/* Mobile-only page navigation (tapping pages would fight with scrolling) */}
      {page >= 1 && (
        <div className="absolute bottom-6 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-1 rounded-full bg-black/80 p-1 text-sm text-white shadow-lg backdrop-blur-md md:hidden">
          <button
            onClick={() => setPage(page - 1)}
            className="rounded-full px-4 py-2 active:bg-white/20"
            aria-label="Previous page"
          >
            ‹ Back
          </button>
          <span className="px-1 text-white/70">{page === 1 ? "General" : "Specialized"}</span>
          <button
            onClick={() => setPage(2)}
            disabled={page === 2}
            className="rounded-full px-4 py-2 active:bg-white/20 disabled:opacity-30"
            aria-label="Next page"
          >
            Next ›
          </button>
        </div>
      )}

      <div
        className={`relative flex h-full w-full flex-col items-center justify-center transition-all duration-500 delay-100 ease-out md:h-auto md:w-auto ${
          isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-12 scale-90 opacity-0"
        }`}
      >
        <p className="mb-4 hidden font-mono text-sm text-white/80 md:mb-6 md:block">
          {page === 0 ? "Click the cover to open" : "Scroll to read · click right page to turn, left page to go back"}
        </p>

        {/*
          Mobile: one portrait page (1 : 1.4) with margins around it, like a book held in the hand.
          Desktop: pages (1 : 1.3) that fit the screen; the open book slides right
          by half a page so the two-page spread stays centred.
        */}
        <div
          className={`book-scene relative aspect-[1/1.4] w-[min(86vw,calc(72dvh/1.4))] transition-transform duration-[1500ms] ease-in-out md:aspect-[1/1.3] md:w-[min(44vw,calc(84vh/1.3),560px)] ${
            page >= 1 ? "md:translate-x-1/2" : ""
          }`}
        >
          {/* LAYER 1: BASE PAGE (Specialized CV - Bottom-most layer, does not move) */}
          <div className="absolute inset-0 z-10 overflow-hidden rounded-l-sm rounded-r-xl border border-gray-200 bg-white shadow-[2px_0_0_#e5e5e5,4px_0_0_#d4d4d4,6px_0_0_#c4c4c4,0_12px_30px_rgba(0,0,0,0.35)]">
            <PageScroll onTurn={() => setPage(0)}>
              <SpecializedCV />
            </PageScroll>
            <Spine />
          </div>

          {/* LAYER 2: PAGE ONE (General CV - Middle layer) */}
          <div
            className={`page-turn preserve-3d absolute inset-0 origin-left ${
              page >= 2 ? "z-30 rotate-y-[-180deg]" : "z-30 rotate-y-0"
            }`}
          >
            {/* Front of Page One: General CV */}
            <div className="backface-hidden absolute inset-0 z-10 overflow-hidden rounded-l-sm rounded-r-xl border border-gray-200 bg-white shadow-xl">
              <PageScroll onTurn={() => setPage(2)}>
                <GeneralCV />
              </PageScroll>
              <Spine />
            </div>

            {/* Back of Page One: left page when Specialized CV is showing */}
            <div
              className="backface-hidden rotate-y-180 absolute inset-0 flex cursor-pointer flex-col items-center justify-center rounded-l-xl border border-gray-200 bg-[#faf9f6] p-6 text-center shadow-inner"
              onClick={() => setPage(1)}
            >
              <p className="font-display text-lg font-bold text-black md:text-xl">Specialized Resume</p>
              <p className="mt-1 text-xs text-gray-600 md:text-sm">Turn the page →</p>
            </div>
          </div>

          {/* LAYER 3: COVER (Navy Cover - Top-most layer) */}
          <div
            className={`page-turn preserve-3d absolute inset-0 origin-left ${
              page >= 1 ? "z-20 rotate-y-[-180deg]" : "z-40 rotate-y-0"
            }`}
          >
            {/* Front Cover */}
            <div
              className="backface-hidden absolute inset-0 flex cursor-pointer flex-col items-center justify-center rounded-l-sm rounded-r-xl bg-[#000080] p-4 text-center shadow-2xl"
              onClick={() => setPage(1)}
            >
              <div className="absolute inset-3 rounded-r-lg border-2 border-white opacity-80"></div>
              <h1 className="z-10 font-display text-4xl font-bold tracking-widest text-white">RESUME</h1>
              <p className="z-10 mt-2 font-mono text-xs uppercase tracking-widest text-white/80">Jagjit Singh Khalsa</p>
              <p className="z-10 mt-8 font-mono text-xs text-white/60 md:hidden">Tap to open</p>
            </div>

            {/* Back Cover: left page when General CV is showing */}
            <div
              className="backface-hidden rotate-y-180 absolute inset-0 flex cursor-pointer flex-col items-center justify-center rounded-l-xl border border-gray-200 bg-[#faf9f6] p-6 text-center shadow-inner"
              onClick={() => setPage(0)}
            >
              <p className="font-display text-lg font-bold text-black md:text-xl">General Resume</p>
              <p className="mt-1 text-xs text-gray-600 md:text-sm">Turn the page →</p>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .book-scene { perspective: 1500px; transform-style: preserve-3d; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .rotate-y-\\[-180deg\\] { transform: rotateY(-180deg); }
        .rotate-y-0 { transform: rotateY(0deg); }

        /* Animates the flip over 1.5s, but freezes the layer order for 0.75s until the page is perfectly sideways */
        .page-turn {
          transition: transform 1.5s ease-in-out, z-index 0s 0.75s;
        }

        /* Slim scrollbar so the page still looks like paper */
        .resume-scroll { scrollbar-width: thin; scrollbar-color: #bbb transparent; }
        .resume-scroll::-webkit-scrollbar { width: 6px; }
        .resume-scroll::-webkit-scrollbar-thumb { background: #bbb; border-radius: 3px; }
      `,
        }}
      />
    </div>
  );
}


function ContactPlaceholder({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  const isEmail = href.startsWith("mailto:");

  const handleClick = (e: React.MouseEvent) => {
    if (isEmail) {
      e.preventDefault(); // Stops the broken mailto behavior
      navigator.clipboard.writeText(label); // Copies the email address
      alert("Email copied to clipboard: " + label); // Quick confirmation for the user
    }
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      target={href.startsWith("http") ? "_blank" : "_self"} 
      rel="noopener noreferrer" 
      className="flex w-fit cursor-pointer items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <span className="grid size-9 place-items-center rounded-full bg-primary/10 text-primary [&_svg]:size-4">
        {icon}
      </span>
      {label}
    </a>
  );
}

function ProjectFeature({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <article className="group grid items-center gap-6 rounded-[2rem] border border-border bg-surface/60 p-4 shadow-sm backdrop-blur-xl lg:grid-cols-12 lg:p-6">
      
      {/* IMAGE CONTAINER */}
      <div className={`overflow-hidden rounded-3xl lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
        <img 
          src={project.image} 
          alt={`${project.name} project interface preview`} 
          width={1200} 
          height={800} 
          loading="lazy" 
          className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" 
        />
      </div>

      {/* TEXT CONTAINER */}
      <div className={`p-2 lg:col-span-5 lg:p-5 ${reverse ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          <span className={`size-1.5 rounded-full ${project.accent}`} />
          {project.number} · {project.type}
        </div>
        
        <h3 className="mt-3 font-display text-3xl font-semibold">{project.name}</h3>
        <p className="mt-3 max-w-md leading-relaxed text-foreground/70">{project.summary}</p>
        <p className="mt-4 font-mono text-xs text-muted-foreground">{project.stack.join(" · ")}</p>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="portfolioOutline" className="mt-6">
              Open case study <ArrowUpRight />
            </Button>
          </DialogTrigger>
          
          <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-3xl border-border bg-background p-0">
            <img 
              src={project.image} 
              alt="" 
              width={1200} 
              height={800} 
              className="aspect-[2/1] w-full rounded-t-3xl object-cover" 
            />
            
            <div className="p-6 sm:p-8">
              <DialogHeader>
                <Eyebrow>{project.number} · case study</Eyebrow>
                <DialogTitle className="font-display text-4xl">{project.name}</DialogTitle>
                <DialogDescription className="text-base leading-relaxed">{project.summary}</DialogDescription>
              </DialogHeader>
              
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <CaseBlock title="Problem" copy={project.problem} />
                <CaseBlock title="What I built" copy={project.built} />
                <CaseBlock title="How it works" copy={project.workings} />
                <CaseBlock title="What I learned" copy={project.learned} />
              </div>
              
              <div className="mt-7 border-t border-border pt-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Key features</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span key={feature} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">Technology</h4>
                <p className="mt-2 text-sm">{project.stack.join(" · ")}</p>
                
                {/* DYNAMIC LINKS ADDED HERE */}
                <div className="mt-6 flex gap-3">
                  {project.githubUrl && (
                    <Button asChild variant="portfolioOutline">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        View Source <Github />
                      </a>
                    </Button>
                  )}
                  
                  {project.liveDemoUrl && (
                    <Button asChild variant="portfolioOutline">
                      <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo <Code2 />
                      </a>
                    </Button>
                  )}
                </div>

              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
}

function CaseBlock({ title, copy }: { title: string; copy: string }) {
  return <div><h4 className="font-mono text-xs uppercase tracking-widest text-primary">{title}</h4><p className="mt-2 text-sm leading-relaxed text-foreground/70">{copy}</p></div>;
}
