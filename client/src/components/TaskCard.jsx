import Card from "./ui/card";

const TaskCard = ({ task }) => (
  <Card className="p-4">
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold text-slate-900">{task.title}</p>
      <span className="rounded-full bg-brand-50 px-2 py-1 text-[11px] text-brand-600">
        {task.priority}
      </span>
    </div>
    <p className="mt-2 text-xs text-slate-500">{task.assignee}</p>
    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
      <span>{task.label}</span>
      <span>{task.due}</span>
    </div>
  </Card>
);

export default TaskCard;
