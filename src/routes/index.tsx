import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Link2,
  Code2,
  Brain,
  Mountain,
  Briefcase,
  Terminal,
  Mic,
  Hand,
  BookOpen,
  FlaskConical,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yojit Yadav — B.Tech AI & ML Student" },
      { name: "description", content: "Personal portfolio of Yojit Yadav, a B.Tech AI & ML student and aspiring developer interested in business, coding, machine learning, and exploration." },
      { property: "og:title", content: "Yojit Yadav — B.Tech AI & ML Student" },
      { property: "og:description", content: "Personal portfolio of Yojit Yadav, a B.Tech AI & ML student and aspiring developer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const socialLinks = [
  { label: "Email", href: "mailto:yaenosh@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/yojityadav", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yojityadav", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/yojityadav.yae", icon: Instagram },
  { label: "Linktree", href: "https://linktr.ee/yojityadav", icon: Link2 },
];

const interests = [
  { label: "Business", icon: Briefcase, description: "Entrepreneurship, strategy, and how ideas become impact." },
  { label: "Coding", icon: Code2, description: "Building logic, solving problems, and learning by doing." },
  { label: "Machine Learning", icon: Brain, description: "Exploring how data and algorithms can model the world." },
  { label: "Mountaineering & Exploration", icon: Mountain, description: "Pushing limits, embracing discomfort, and discovering new horizons." },
];

const explorations = [
  {
    title: "Voice Launcher",
    status: "Learning experiment",
    icon: Mic,
    description: "A hands-on project exploring voice-controlled interfaces and basic automation. Built to understand speech input handling and command parsing.",
  },
  {
    title: "Gesture Lock",
    status: "Learning experiment",
    icon: Hand,
    description: "An experiment in computer vision and gesture recognition, focused on detecting simple hand patterns to trigger actions.",
  },
  {
    title: "C Programming Fundamentals",
    status: "Skill-building",
    icon: Terminal,
    description: "Working through core concepts in C — memory, pointers, data structures, and problem-solving patterns.",
  },
  {
    title: "ML Learning Lab",
    status: "Learning experiment",
    icon: FlaskConical,
    description: "A personal sandbox for following ML courses, reproducing small models, and understanding how learning algorithms behave.",
  },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <span className="text-xs font-medium uppercase tracking-widest text-dim">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="section-padding container-tight flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center"
    >
      <div className="flex max-w-3xl flex-col items-center">
        <div className="mb-8 grid h-28 w-28 shrink-0 place-items-center rounded-full border border-border bg-surface text-3xl font-semibold text-foreground">
          YY
        </div>
        <p className="text-sm font-medium uppercase tracking-widest text-dim">
          B.Tech Student & Aspiring Developer
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Yojit Yadav
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          A curious B.Tech AI & ML student learning to build with code. Interested in business,
          machine learning, mountaineering, and the art of continuous exploration.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-tight">
        <SectionHeading
          eyebrow="About"
          title="Learning by building, exploring by nature."
          description="I am a B.Tech student specializing in Artificial Intelligence and Machine Learning. Beyond the classroom, I am drawn to business strategy, hands-on coding, the science of machine learning, and the discipline of mountaineering."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-6">
            <h3 className="text-lg font-medium text-foreground">What drives me</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              I believe the best way to learn is to build. Every project — even the small,
              unfinished ones — teaches something new. I am not here to pretend expertise; I am
              here to document the journey of becoming better.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-background p-6">
            <h3 className="text-lg font-medium text-foreground">How I think</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Curiosity first. I like connecting ideas across disciplines: a business model, a
              line of code, a neural network, or a mountain route. Each has patterns worth
              understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Skills"
          title="Honest progress, not inflated expertise."
          description="I prefer to be transparent about where I stand. Here is what I am actively learning right now."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-ring/50">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-background text-foreground">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">C Programming</h3>
                <p className="text-sm text-dim">Currently Learning</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Building a foundation in memory management, pointers, data structures, and
              problem-solving.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-ring/50">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-background text-foreground">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Machine Learning</h3>
                <p className="text-sm text-dim">Exploring</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Learning core concepts through courses, small experiments, and reproducing basic
              models.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-ring/50">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-background text-foreground">
                <Terminal className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Development Tools</h3>
                <p className="text-sm text-dim">Learning</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Getting comfortable with version control, the terminal, and the workflow of
              building real projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Projects & Explorations"
          title="Learning experiments, not finished products."
          description="These are small builds and guided experiments I am working on to understand concepts better. They are labeled honestly as learning projects."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {explorations.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-ring/50 hover:bg-surface-elevated"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-surface text-foreground group-hover:bg-background">
                    <project.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{project.title}</h3>
                    <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-xs font-medium text-dim">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Education"
          title="Formal learning with industry alignment."
        />
        <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-background text-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">B.Tech in AI & ML</h3>
                <p className="mt-1 text-muted-foreground">Bachelor of Technology</p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Pursuing a degree focused on Artificial Intelligence and Machine Learning,
                  combining computer science fundamentals with applied AI coursework.
                </p>
              </div>
            </div>
            <div className="shrink-0 rounded-lg border border-border bg-background px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-widest text-dim">Training Partner</p>
              <p className="mt-1 font-medium text-foreground">IBM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Interests() {
  return (
    <section id="interests" className="section-padding bg-surface">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Interests"
          title="A few things that keep me curious."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((interest) => (
            <div
              key={interest.label}
              className="rounded-xl border border-border bg-background p-6 text-center transition-all hover:border-ring/50 hover:bg-surface-elevated"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-surface text-foreground">
                <interest.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-medium text-foreground">{interest.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s connect."
          description="Whether it is about tech, business, mountains, or just a good conversation — feel free to reach out."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-medium text-foreground">Send an email</h3>
            <p className="mt-2 text-muted-foreground">
              The fastest way to reach me is by email.
            </p>
            <a
              href="mailto:yaenosh@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" />
              yaenosh@gmail.com
            </a>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-medium text-foreground">Find me online</h3>
            <p className="mt-2 text-muted-foreground">
              I am active on these platforms.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.slice(1).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Interests />
      <Contact />
    </>
  );
}
