import { Leaf } from "./Leaf";

export function BotanicalDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-16">
      <Leaf className="w-12 opacity-70" />
      <div className="h-px w-24 bg-gold opacity-50" />
      <Leaf className="w-16 opacity-90" />
    </div>
  );
}
