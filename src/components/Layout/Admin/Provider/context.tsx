import React, { PropsWithChildren } from "react";
import { useRouter } from "next/router";
type ToggleContextType = {
  open: boolean;
  ref: React.RefObject<HTMLElement | null>;
  toggle: () => void;
};
// create new context
const Context = React.createContext<ToggleContextType>({
  open: false,
  ref: React.createRef<HTMLElement>(),
  toggle: () => {},
});
export default function DashboardProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLButtonElement | null>(null);
  const router = useRouter();

  const toggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  // set the html tag style overflow to hidden
  React.useEffect(() => {
    document.documentElement.style.overflow = "hidden";
  }, []);

  // close side navigation when route changes
  React.useEffect(() => {
    if (open) {
      router.events.on("routeChangeStart", () => setOpen(false));
    }

    return () => {
      if (open) {
        router.events.off("routeChangeStart", () => setOpen(false));
      }
    };
  }, [open, router]);

  // close side navigation on click outside
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      // change the event type
      if (ref.current && !ref.current?.contains(event.target as Node)) {
        if (!open) return;
        setOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [open, ref]);

  return (
    <Context.Provider value={{ open, ref, toggle }}>
      {children}
    </Context.Provider>
  );
}

// custom hook to consume all context values { open, ref, toggle }
export function useToggle() {
  return React.useContext(Context);
}
