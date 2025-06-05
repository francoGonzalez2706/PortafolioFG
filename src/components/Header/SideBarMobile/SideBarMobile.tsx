import { downloadCV } from "../../../utils";
import styles from "./SideBarMobile.module.css";
type Props = {
  navItems: {
    label: string;
    href: string;
  }[];
  activeSection: string;
  closeBar: () => void;
};
export const SideBarMobile = ({ navItems, activeSection, closeBar }: Props) => {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.navDesktop}>
        <div className={styles.close_sidebar} onClick={closeBar}>
          <i className="ri-close-line"></i>
        </div>
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
  );
};
