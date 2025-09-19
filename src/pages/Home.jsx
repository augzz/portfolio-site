import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-dvh bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};