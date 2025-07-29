import styles from "./Footer.module.css";
export default function Footer() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skillData" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];
  const socialLinks = [
    {
      icon: "ri-linkedin-fill",
      href: "https://www.linkedin.com/in/franco-gonzalez-reale/",
      label: "LinkedIn",
    },
    {
      icon: "ri-github-fill",
      href: "https://github.com/francoGonzalez2706",
      label: "GitHub",
    },
    {
      icon: "ri-instagram-fill",
      href: "https://www.instagram.com/francogonzalez276/",
      label: "Instagram",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <a href="#top" className={styles.brandLink}>
              <span className={styles.textForeground}>Franco</span>
              <span className={styles.textPrimary}>.</span>
            </a>
            <p className={styles.textMuted}>
              Frontend Developer & 3D Specialist
            </p>
          </div>

          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={styles.navItem}>
                {item.label}
              </a>
            ))}
          </div>

          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={styles.socialLink}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {currentYear} Franco Gonzalez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
