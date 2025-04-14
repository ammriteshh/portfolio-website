import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; // New navbar import

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <header className="text-center p-4">
        <img
          src="/images/profile-pic.jpeg"
          alt="Profile Picture"
          className="mx-auto w-32 h-32 rounded-full"
        />
        <h1 className="text-3xl font-bold mt-2">Amritesh Singh</h1>
        <p className="text-lg text-gray-600">B.Tech CSE | Full-Stack Developer | Software Testing</p>
      </header>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <Footer />
    </main>
  );
}
