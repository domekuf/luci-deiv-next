type LeafProps = {
  className?: string;
};

export function Leaf({ className }: LeafProps) {
  return (
    <svg viewBox="0 0 120 60" fill="none" className={className} aria-hidden>
      <path
        d="M5 30C30 5 90 5 115 30C90 55 30 55 5 30Z"
        stroke="var(--color-gold)"
        strokeWidth="1"
      />
    </svg>
  );
}
