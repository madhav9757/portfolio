import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

function SectionWrapper({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="pt-24 pb-32 space-y-48">
        <SectionWrapper id="home">
          <Hero />
        </SectionWrapper>

        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>

        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>

        <SectionWrapper id="about">
          <About />
        </SectionWrapper>

        <SectionWrapper id="contact">
          <ContactForm />
        </SectionWrapper>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
