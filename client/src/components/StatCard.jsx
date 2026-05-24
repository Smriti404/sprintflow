import Card from "./ui/card";

const StatCard = ({ label, value, hint }) => (
  <Card className="p-5">
    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
    <h3 className="mt-3 font-display text-3xl font-semibold text-slate-900">
      {value}
    </h3>
    {hint && <p className="mt-2 text-xs text-slate-500">{hint}</p>}
  </Card>
);

export default StatCard;
