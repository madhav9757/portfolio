import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      {/* NAVBAR (Sticky Top) */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="pt-20 pb-28 space-y-40">
        
        {/* HOME */}
        <section id="home" className="scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <Hero />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <Projects />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <Skills />
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <Experience />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <About />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <ContactForm />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
