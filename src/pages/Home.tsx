import { useEffect, useState } from "react";
import { Header } from "@components/Header/Header";
import { useScrollSpy } from "@hooks/useScrollSpy";
import { useSectionObserver } from "@hooks/useSectionObserver";
import { ButtonGoTop } from "@components/ui/ButtonGoTop/ButtonGoTop";
import { Hero } from "@components/Hero/Hero";
import { AboutMe } from "@components/AboutMe/AboutMe";
import { Skills } from "@components/skills/Skills";
import { Exprerience } from "@components/Experience/Experience";
import Footer from "@components/Footer/Footer";
import { ContactMe } from "@components/ContactMe/ContactMe";
import { Toast } from "@components/Toast/Toast";

export const Home = () => {
  useSectionObserver();
  const activeSection = useScrollSpy();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Toast>
        <>
          <Header activeSection={activeSection} />

          <main>
            <Hero />
            <AboutMe />
            <Skills />
            <Exprerience />
            <ContactMe />
          </main>
          <Footer />

          {showBackToTop && <ButtonGoTop scrollToTop={scrollToTop} />}
        </>
      </Toast>
    </div>
  );
};
