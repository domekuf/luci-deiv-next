import { ReactNode } from "react";

export function Text({
  children,
  variant = "serif",
}: {
  children: ReactNode;
  variant?: "serif" | "script";
}) {
  return (
    <p
      className={`text-3xl ${
        variant === "serif"
          ? "font-serif text-primary-light"
          : "font-script text-primary"
      }`}
    >
      {children}
    </p>
  );
}
