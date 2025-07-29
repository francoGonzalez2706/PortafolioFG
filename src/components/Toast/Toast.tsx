// React
import { useState, useEffect, type ReactNode } from "react";
// React DOM
import { createPortal } from "react-dom";
// Framer Motion
import { AnimatePresence } from "framer-motion";
// Context
import { toastContext } from "./ToastContext";
// Types
type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";

type ToastType = "success" | "info" | "warning" | "error";

export type IToast = {
  type: ToastType;
  message: string;
  position?: ToastPosition;
};

export type ToastProvider = {
  children: ReactNode;
  position?: ToastPosition;
};

export type ToastContext = {
  toast: (item: IToast) => void;
};

// Component
import { ToastInformation } from "./ToastInformation";
// Styles
import styles from "./index.module.css";

// Global reference for toast function
let toastGlobal: ((item: IToast) => void) | null = null;

export const Toast = ({ children }: ToastProvider) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const toast = (item: IToast) => {
    setToasts((prevToasts) => {
      const newToasts = [item, ...prevToasts];

      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.slice(0, -1));
      }, 3500);

      return newToasts;
    });
  };

  useEffect(() => {
    toastGlobal = toast;
    return () => {
      toastGlobal = null;
    };
  }, []);

  const container = document.getElementById("toast-root");
  if (!container) return null;
  return (
    <toastContext.Provider value={{ toast }}>
      {children}
      {container &&
        createPortal(
          <div className={`${styles.toasts} `}>
            <AnimatePresence>
              {toasts.map((item: IToast, idx: number) => (
                <ToastInformation
                  key={idx}
                  type={item.type}
                  message={item.message}
                />
              ))}
            </AnimatePresence>
          </div>,
          container
        )}
    </toastContext.Provider>
  );
};

export const toast = (item: IToast) => {
  if (toastGlobal) {
    toastGlobal(item);
  } else {
    console.error(
      "Toast function is not initialized. Make sure Toast is mounted."
    );
  }
};
