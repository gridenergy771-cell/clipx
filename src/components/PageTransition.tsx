import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

/** Subtle fade + blur + lift between routes (~450ms). */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [key, setKey] = useState(pathname);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const raf = requestAnimationFrame(() => {
      setKey(pathname);
      setVisible(true);
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <div
      key={key}
      className="transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translate3d(0, 14px, 0)",
        filter: visible ? "blur(0px)" : "blur(6px)",
      }}
    >
      {children}
    </div>
  );
}
