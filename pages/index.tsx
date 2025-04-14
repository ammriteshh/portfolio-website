import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amritesh Singh | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Achievements />
      <Footer />
    </>
  );
}
