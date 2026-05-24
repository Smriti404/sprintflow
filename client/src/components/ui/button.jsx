import { cn } from "../../lib/utils";

const Button = ({ className, variant = "primary", size = "md", ...props }) => {
  const variants = {
    primary: "bg-brand-500 text-white hover:bg-brand-600",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
    outline: "border border-slate-200 text-slate-700 hover:bg-slate-50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};

export default Button;
