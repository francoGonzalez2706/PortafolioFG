import styles from "./ButtonGoTop.module.css";
type Props = {
  scrollToTop: () => void;
};

export const ButtonGoTop = ({ scrollToTop }: Props) => {
  return (
    <button
      onClick={scrollToTop}
      className={styles.btnGoTop}
      aria-label="Back to top"
    >
      <i className="ri-arrow-up-line text-xl"></i>
    </button>
  );
};
