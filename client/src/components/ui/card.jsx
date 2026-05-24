import { cn } from "../../lib/utils";

const Card = ({ className, ...props }) => (
  <div
    className={cn(
      "rounded-xl border border-slate-100 bg-white shadow-card",
      className
    )}
    {...props}
  />
);

export default Card;
