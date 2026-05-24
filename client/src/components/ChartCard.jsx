import Card from "./ui/card";

const ChartCard = ({ title, children }) => (
  <Card className="p-5">
    <div className="flex items-center justify-between">
      <h4 className="font-display text-lg font-semibold text-slate-900">
        {title}
      </h4>
      <span className="text-xs text-slate-400">Last 30 days</span>
    </div>
    <div className="mt-4 h-64">{children}</div>
  </Card>
);

export default ChartCard;
