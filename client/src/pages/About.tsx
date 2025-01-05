import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { Timer, TrendingUp, Layers, Lightbulb, Users, Heart, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function About() {
  const team = [
    {
      name: "Edgaras Benediktavicius",
      role: "Product Designer & Developer",
      bio: "Freelance product designer and developer specializing in UX/UI design, no-code, and JavaScript development.",
      interests: "UX, UI, web/app technologies, service systems design, digital concept development, traveling.",
      tools: "Next.js, Tailwind, Bun, Figma"
    },
    {
      name: "Isabella Russi Gallon",
      role: "UX/UI Designer & Content Writer",
      bio: "UX / UI designer and content writer specializing in user research, prototyping, copywriting, and graphic design for websites and apps.",
      interests: "UX/UI design, fashion, traveling, fitness, music, movies.",
      tools: "Figma, Webflow, WordPress, Airtable, Google Docs, Canva, Adobe Illustrator"
    },
    {
      name: "Tomas Laurinavicius",
      role: "Growth Marketer & Developer",
      bio: "Growth marketer, designer, developer, and writer interested in calm micro software and digital media businesses.",
      interests: "Reading, indie hacking, traveling, weightlifting, basketball.",
      tools: "Next.js, Tailwind, Python, Pynions, Google Sheets, Ahrefs, Screaming Frog, WordPress, GitHub, Raycast, Cursor, HTTPie, Cloudflare, Vercel, Hetzner, Figma"
    }
  ];

  const principles = [
    {
      title: "Ship Fast and Often",
      description: "First do it, then improve it. It's easy to overthink and imagine big things, but everything starts small and fast."
    },
    {
      title: "Stay Lean and Move Fast",
      description: "We simplify things and keep costs low. Single Google Sheet for pretty much everything, anyone?"
    },
    {
      title: "People Over Quick Money",
      description: "We play the long game and want to make friends along the way."
    },
    {
      title: "Build Exciting Things",
      description: "If it's not fun, why even bother to start your own business?"
    },
    {
      title: "Ask Questions",
      description: "We are naturally curious and ask (humans and AI) lots of questions."
    },
    {
      title: "No Drama",
      description: "Be nice. There's a lot going on in the world and we want to build calmly."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-[1200px] mx-auto px-6">
        <div className="pt-36 pb-24">
          <div className="max-w-[800px] mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-[-0.02em] leading-[1.1]">
              About Growthlog
            </h1>
            <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-[600px] mx-auto">
              Transform business development processes into actionable insights through strategic tracking and optimization of entrepreneurial journeys.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="pb-24">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px]">
              We're building a platform that empowers entrepreneurs and marketers with a comprehensive growth management ecosystem, transforming complex initiatives into focused, actionable tasks.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.div variants={item}>
              <Card className="p-6 h-full hover:border-primary/50 transition-colors">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Timer className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold mb-2">25-Minute Growth Sprints</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Break down complex growth initiatives into focused, actionable tasks designed to fit within a single Pomodoro session.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="p-6 h-full hover:border-primary/50 transition-colors">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold mb-2">Progress Tracking</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Monitor your momentum with intelligent tracking of daily wins, achievements, and growth metrics specific to SaaS businesses.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="pb-24">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px]">
              We're a remote team of makers passionate about building tools that help businesses grow sustainably.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Interests</h4>
                    <p className="text-sm text-muted-foreground">{member.interests}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Tools</h4>
                    <p className="text-sm text-muted-foreground">{member.tools}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Principles Section */}
        <div className="pb-24">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Principles
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px]">
              We're building an ethical and sustainable business, guided by these core principles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Copyright Footer */}
        <footer className="border-t border-zinc-200/80 mt-24">
          <div className="container mx-auto px-6 py-8 max-w-6xl">
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 pb-8 border-b border-zinc-200/80">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Logo className="text-[#2F363F]" />
                    <h3 className="font-semibold text-[#2F363F]">Growthlog</h3>
                  </div>
                  <p className="text-sm text-zinc-500 max-w-[280px]">
                    A platform for transforming business development processes into actionable insights through strategic tracking and optimization.
                  </p>
                  <div className="flex items-center space-x-3 pt-2">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-900 transition-colors"
                      aria-label="View on GitHub"
                      href="https://github.com"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.3724 0 0 5.3556 0 11.964C0 17.2488 3.438 21.732 8.2068 23.3136C8.8068 23.424 9.0252 23.0544 9.0252 22.7376C9.0252 22.4544 9.0156 21.7008 9.0096 20.7036C5.6712 21.426 4.9668 19.0992 4.9668 19.0992C4.422 17.718 3.6348 17.3496 3.6348 17.3496C2.5452 16.608 3.7176 16.6224 3.7176 16.6224C4.9212 16.7064 5.5548 17.8548 5.5548 17.8548C6.6252 19.6836 8.364 19.1556 9.0468 18.8484C9.1572 18.0768 9.4668 17.5488 9.81 17.25C7.146 16.9488 4.344 15.9216 4.344 11.3376C4.344 10.032 4.812 8.9628 5.5788 8.1276C5.4552 7.8252 5.0436 6.6084 5.6964 4.962C5.6964 4.962 6.7044 4.6404 8.9964 6.1884C9.97544 5.92201 10.9854 5.78604 12 5.784C13.02 5.7888 14.046 5.9208 15.0048 6.1872C17.2956 4.6392 18.3012 4.9608 18.3012 4.9608C18.9564 6.6072 18.548 18.4212 18.3012 4.9608C18.9564 6.6072 18.548 18.4212 8.1264C19.1892 8.9616 19.6548 10.0308 19.6548 11.3364C19.6548 15.9324 19.6548 16.944 14.1756 17.2404C14.6064 17.6088 14.9892 18.3384 14.9892 19.4556C14.9892 21.054 14.9748 22.344 14.9748 22.7364C14.9748 23.0568 15.1908 23.4288 15.8004 23.3124C20.5644 21.7284 24 17.2476 24 11.9628C24 5.3556 18.6264 0 12 0Z"/>
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-900 transition-colors"
                      aria-label="Follow us on X (Twitter)"
                      href="https://twitter.com"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Features</h4>
                  <ul className="space-y-3 text-sm text-zinc-500">
                    <li><Link href="/features/growth-sprints">25-Minute Growth Sprints</Link></li>
                    <li><Link href="/features/progress-tracking">Progress Tracking</Link></li>
                    <li><Link href="/features/framework">Structured Framework</Link></li>
                    <li><Link href="/features/growth-ideas">Growth Ideas Library</Link></li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Product</h4>
                  <ul className="space-y-3 text-sm text-zinc-500">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li><Link href="/manifesto">Manifesto</Link></li>
                    <li><Link href="/integrations">Integrations</Link></li>
                    <li><Link href="/documentation">Documentation</Link></li>
                    <li><Link href="/updates">Updates</Link></li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Resources</h4>
                  <ul className="space-y-3 text-sm text-zinc-500">
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/report-issue">Report Issue</Link></li>
                    <li><Link href="/status">Status</Link></li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Legal</h4>
                  <ul className="space-y-3 text-sm text-zinc-500">
                    <li><Link href="/license">License</Link></li>
                    <li><Link href="/terms">Terms</Link></li>
                    <li><Link href="/privacy">Privacy</Link></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-zinc-400">
                <div>
                  2025 © Growthlog - A platform for transforming business development processes into actionable insights. Standing on the shoulders of giants.
                </div>
                <div className="flex items-center gap-2">
                  Built by{" "}
                  <a
                    href="https://craftled.com"
                    className="inline-flex items-center hover:text-zinc-800"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 154 154"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0"
                    >
                      <rect
                        width="154"
                        height="154"
                        rx="77"
                        fill="#0A0A0A"
                      ></rect>
                      <path
                        d="M77.8 106.2C71.9667 106.2 66.85 105.033 62.45 102.7C58.05 100.333 54.6333 97.05 52.2 92.85C49.8 88.65 48.6 83.8 48.6 78.3C48.6 72.7333 49.8 67.9167 52.2 63.85C54.6333 59.75 58.05 56.5667 62.45 54.3C66.85 52.0333 71.9667 50.9 77.8 50.9C82.1667 50.9 86.0333 51.55 89.4 52.85C92.7667 54.1167 95.5833 55.8 97.85 57.9C100.117 60 101.833 62.3 103 64.8C104.167 67.3 104.75 69.7833 104.75 72.25C104.75 72.2833 104.75 72.35 104.75 72.45C104.75 72.5167 104.75 72.5833 104.75 72.65H89.4C89.4 72.45 89.3833 72.2667 89.35 72.1C89.35 71.9 89.3167 71.7 89.25 71.5C88.9833 70.1 88.4 68.7833 87.5 67.55C86.6 66.3167 85.3333 65.3167 83.7 64.55C82.1 63.75 80.1 63.35 77.7 63.35C75.1333 63.35 72.8333 63.9167 70.8 65.05C68.8 66.1833 67.2167 67.8667 66.05 70.1C64.8833 72.3 64.3 75.0333 64.3 78.3C64.3 81.5 64.8833 84.2667 66.05 86.6C67.2167 88.9 68.8 90.6667 70.8 91.9C72.8333 93.1333 75.1333 93.75 77.7 93.75C80.3333 93.75 82.4833 93.35 84.15 92.55C85.8167 91.7167 87.0667 90.6167 87.9 89.25C88.7333 87.85 89.2333 86.3167 89.4 84.65H104.75C104.75 87.1167 104.167 89.6333 103 92.2C101.867 94.7333 100.167 97.05 97.9 99.15C95.6667 101.25 92.8667 102.95 89.5 104.25C86.1333 105.55 82.2333 106.2 77.8 106.2Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span className="ml-1">Craftled</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}