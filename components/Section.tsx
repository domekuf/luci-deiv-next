import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return (
    <section className="px-6 py-(--spacing-section) max-w-3xl mx-auto text-center">
      {children}
    </section>
  );
}
