import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { downloadCV } from "../../utils";
import { SideBarMobile } from "./SideBarMobile/SideBarMobile";
type Props = {
  activeSection: string;
};

export const Header = ({ activeSection }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skillData" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  const [theme, settheme] = useState(true);
  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    settheme(!theme);
  }
  return (
    <>
      <header
        className={`${styles.header} ${
          isScrolled ? styles.headerScrolled : styles.headerDefault
        }`}
      >
        <div className={styles.container}>
          <a href="#top" className={`${styles.brand}`}>
            <span className={styles.brandForeground}>Franco</span>
            <span className={styles.brandPrimary}>.</span>
          </a>

          {/* Desktop Navigation */}
          <div className={styles.navDesktop}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  activeSection === item.href.substring(1)
                    ? styles.navLinkActive
                    : ""
                }`}
              >
                {item.label}
              </a>
            ))}
            <button onClick={downloadCV} className={styles.buttonResume}>
              Resume
            </button>
            <i
              className={!theme ? "ri-sun-line" : "ri-contrast-2-line"}
              style={{ color: theme ? "black" : "white", cursor: "pointer" }}
              onClick={toggleTheme}
            ></i>
          </div>
          {/* Movil Navigation */}
          <div className={styles.movilContainer}>
            <i className="ri-menu-line" onClick={() => setMobileOpen(true)}></i>
          </div>
        </div>
      </header>
      {mobileOpen && (
        <SideBarMobile
          activeSection={activeSection}
          navItems={navItems}
          closeBar={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};
