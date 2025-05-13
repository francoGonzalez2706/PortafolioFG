import { useEffect, useState } from "react";
import { Header } from "@components/Header/Header";
import { useScrollSpy } from "@hooks/useScrollSpy";
import { useSectionObserver } from "@hooks/useSectionObserver";
import { ButtonGoTop } from "@components/ui/ButtonGoTop/ButtonGoTop";
import { Hero } from "@components/Hero/Hero";
import { AboutMe } from "@components/AboutMe/AboutMe";

export const Home = () => {
  // Initialize intersection observer for animation
  useSectionObserver();

  // Initialize scroll spy for navigation
  const activeSection = useScrollSpy();

  // Add back-to-top functionality
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
      <Header activeSection={activeSection} />

      <main>
        <Hero />
        <AboutMe />
      </main>
      {/* <Footer /> */}

      {showBackToTop && <ButtonGoTop scrollToTop={scrollToTop} />}
    </div>
  );
};
