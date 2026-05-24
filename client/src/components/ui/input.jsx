import { cn } from "../../lib/utils";

const Input = ({ className, ...props }) => (
  <input
    className={cn(
      "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-soft focus:border-brand-400 focus:outline-none",
      className
    )}
    {...props}
  />
);

export default Input;
