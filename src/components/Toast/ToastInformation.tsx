// Framer motion
import { motion } from "framer-motion";
// Types

import type { IToast } from "./Toast";
// Images

// Styles
import styles from "./index.module.css";

export const ToastInformation = ({ type, message }: IToast) => {
  const animationVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };
  const selectColor = (type: string) => {
    switch (type) {
      case "warning":
        return "var(--warning)";
      case "success":
        return "var(--sucess)";
      case "info":
        return "var(--primary)";
      case "error":
        return "var(--destructive)";
      default:
        return "#f00";
    }
  };

  const selectIcon = (type: string) => {
    switch (type) {
      case "warning":
        return "ri-error-warning-line";
      case "success":
        return "ri-checkbox-circle-line";
      case "info":
        return "ri-error-warning-line";
      case "error":
        return "ri-error-warning-line";
      default:
        return "ri-error-warning-line";
    }
  };

  return (
    <motion.div
      className={`${styles.toast__item} ${styles[`${type}`]}`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animationVariants}
      transition={{ duration: 0.3 }}
    >
      <i className={selectIcon(type)} />
      <span>{message}</span>
      <i className="ri-close-line" style={{ color: selectColor(type) }}></i>
    </motion.div>
  );
};
