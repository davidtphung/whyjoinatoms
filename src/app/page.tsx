import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Kitchen from "@/components/sections/Kitchen";
import Numbers from "@/components/sections/Numbers";
import JDMatch from "@/components/sections/JDMatch";
import Credentials from "@/components/sections/Credentials";
import Closing from "@/components/sections/Closing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Kitchen />
      <Numbers />
      <JDMatch />
      <Credentials />
      <Closing />
      <footer className="border-t border-border-default py-8 px-6">
        <div className="max-w-[960px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-dim">2026 David T Phung</p>
          <p className="text-xs text-text-dim">
            <a
              href="https://x.com/davidtphung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              @davidtphung
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
