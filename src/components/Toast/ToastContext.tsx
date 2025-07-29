// React
import { createContext } from "react";
// Types
import type { ToastContext } from "./Toast";

export const toastContext = createContext<ToastContext>({} as ToastContext);
