import type { Metadata } from "next";
import {
  BookOpenText,
  Server,
  Cloud,
  Sparkles,
  Workflow,
  Globe,
} from "lucide-react";
import SectionHeader from "../_components/SectionHeader";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about my background and experience",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section>
        {/* About Section */}
        <SectionHeader title="About Me" icon={<BookOpenText size={36} className="text-white dark:text-white"/>} />

        <p className="tracking-wide text-lg mb-4 mt-6 text-gray-900 dark:text-white">
          I'm a Full Stack Software Engineer from Assam, India, who builds fast,
          reliable web applications that scale under real traffic. My strength
          is backend development—designing scalable APIs, optimizing data
          access, and keeping systems stable as demand grows.
        </p>

        <p className="tracking-wide text-lg mb-4 text-gray-900 dark:text-white">
          I work primarily with{" "}
          <span className="font-semibold text-blue-400">Node.js</span> and{" "}
          <span className="font-semibold text-blue-400">NestJS</span>, building
          REST and GraphQL services on{" "}
          <span className="font-semibold text-blue-400">MongoDB</span> and{" "}
          <span className="font-semibold text-blue-400">Redis</span>. I've
          implemented real-time features with WebSockets and GraphQL
          subscriptions, tuned database indexes to cut latency, and built
          applications that handle thousands of concurrent users.
        </p>

        <p className="tracking-wide text-lg mb-4 text-gray-900 dark:text-white">
          On the frontend, I develop responsive interfaces using{" "}
          <span className="font-semibold text-blue-400">React</span> and{" "}
          <span className="font-semibold text-blue-400">Next.js</span>, focusing
          on clean state management, component architecture, and user
          experience. I've deployed production systems on{" "}
          <span className="font-semibold text-blue-400">AWS</span> (EC2, S3,
          CloudFront) with CI/CD pipelines using{" "}
          <span className="font-semibold text-blue-400">Docker</span> and{" "}
          <span className="font-semibold text-blue-400">GitHub Actions</span>{" "}
          for reliable releases.
        </p>

        <p className="tracking-wide text-lg mb-4 text-gray-900 dark:text-white">
          I've contributed to microservices-oriented architectures, learning
          firsthand about service boundaries and operational trade-offs.
          Recently, I've integrated AI tools like{" "}
          <a
            href="https://www.anthropic.com/claude"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-800 font-medium"
          >
            Claude
          </a>
          ,{" "}
          <a
            href="https://github.com/features/copilot"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-800 font-medium"
          >
            Copilot
          </a>
          , and{" "}
          <a
            href="https://cursor.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-800 font-medium"
          >
            Cursor
          </a>{" "}
          into my workflow — not to cut corners, but to solve problems faster
          and iterate smarter while keeping code quality high.
        </p>
      </section>

      <section className="space-y-6">
        <SectionHeader title="My Expertise" className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AI-Powered Development */}
          <div className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-700 transition-all hover:shadow-lg bg-white dark:bg-gray-900/50">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                  AI-Powered Development
                  <span className="text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full">
                    Cutting-edge
                  </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Leveraging tools like{" "}
                  <span className="font-medium text-purple-600 dark:text-purple-400">
                    Claude Code
                  </span>
                  , GitHub Copilot with Sonnet 4, Cursor, and ForgeCode to
                  revolutionize workflows, accelerate problem-solving, and
                  create innovative solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Backend & APIs */}
          <div className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-700 transition-all hover:shadow-lg bg-white dark:bg-gray-900/50">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Backend & APIs</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Architecting high-performance systems with{" "}
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    Node.js
                  </span>
                  , Express, NestJS, REST API and GraphQL. Understanding in
                  microservices, MongoDB optimization, Redis caching.
                </p>
              </div>
            </div>
          </div>

          {/* Infrastructure & DevOps */}
          <div className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-700 transition-all hover:shadow-lg bg-white dark:bg-gray-900/50">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg group-hover:scale-110 transition-transform">
                <Cloud className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Infrastructure & DevOps
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Hands-on experience deploying applications on AWS using EC2,
                  S3, and CloudFront. Familiar with server configuration, static
                  asset hosting, CDN integration, and supporting CI/CD pipelines
                  to streamline production deployments.
                </p>
              </div>
            </div>
          </div>

          {/* Frontend Development */}
          <div className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-700 transition-all hover:shadow-lg bg-white dark:bg-gray-900/50">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Frontend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Creating responsive, performant interfaces with{" "}
                  <span className="font-medium text-green-600 dark:text-green-400">
                    React.js
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-green-600 dark:text-green-400">
                    Next.js
                  </span>
                  . Focus on clean component architecture, state management, and
                  exceptional user experiences.
                </p>
              </div>
            </div>
          </div>

          {/* iGaming Backend Development - Special addition */}
          <div className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-700 transition-all hover:shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 md:col-span-2">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                <Workflow className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 text-gray-900 dark:text-white">
                  <h3 className="text-lg font-semibold">
                    iGaming Backend Development
                  </h3>
                  <span className="text-xs bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                    Specialized
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Developed scalable backends specializing in slot games engine,
                  table games engine and provably fair games backend. Expert in
                  building Remote Gaming Server (RGS) architecture for modular
                  and reliable game integrations.
                </p>
                <div className="flex flex-wrap gap-2 mt-3 text-gray-900 dark:text-white">
                  <span className="text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-full">
                    Node.JS
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-full">
                    Socket.io
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-full">
                    Redis Pub/Sub
                  </span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-full">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
