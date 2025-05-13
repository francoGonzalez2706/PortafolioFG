import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { downloadCV } from "../../utils";
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
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`${styles.header} ${
        isScrolled ? styles.headerScrolled : styles.headerDefault
      }`}
    >
      <div className={styles.container}>
        <a href="#top" className={`${styles.brand} text-2xl font-bold`}>
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
        </div>
      </div>
    </header>
  );
};
