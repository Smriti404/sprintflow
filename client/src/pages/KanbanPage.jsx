import { useMemo, useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import KanbanColumn from "../components/KanbanColumn";
import SortableTaskCard from "../components/SortableTaskCard";

const initialColumns = {
  Backlog: [
    { id: "t1", title: "Plan sprint retro", priority: "Medium", assignee: "Priya", label: "Sprint", due: "May 26" },
  ],
  Todo: [
    { id: "t2", title: "Define API contracts", priority: "High", assignee: "Isha", label: "API", due: "May 27" },
  ],
  "In Progress": [
    { id: "t3", title: "Build dashboard cards", priority: "High", assignee: "Amin", label: "UI", due: "May 28" },
  ],
  Review: [
    { id: "t4", title: "QA auth flow", priority: "Medium", assignee: "Sam", label: "Auth", due: "May 29" },
  ],
  Done: [
    { id: "t5", title: "Project onboarding", priority: "Low", assignee: "Taylor", label: "Docs", due: "May 24" },
  ],
};

const KanbanPage = () => {
  const [columns, setColumns] = useState(initialColumns);

  const containers = useMemo(() => Object.keys(columns), [columns]);

  const findContainer = (id) =>
    containers.find((container) => columns[container].some((task) => task.id === id));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const from = findContainer(active.id);
    const to = findContainer(over.id) || over.id;

    if (!from || !to) return;
    if (from === to) {
      const items = columns[from];
      const oldIndex = items.findIndex((task) => task.id === active.id);
      const newIndex = items.findIndex((task) => task.id === over.id);
      if (oldIndex !== newIndex) {
        setColumns({ ...columns, [from]: arrayMove(items, oldIndex, newIndex) });
      }
      return;
    }

    const activeTask = columns[from].find((task) => task.id === active.id);
    setColumns({
      ...columns,
      [from]: columns[from].filter((task) => task.id !== active.id),
      [to]: [activeTask, ...columns[to]],
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-display text-2xl font-semibold text-slate-900">Kanban Board</h2>
        <p className="text-sm text-slate-500">Drag tasks between stages.</p>
      </div>
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {containers.map((column) => (
            <KanbanColumn key={column} title={column} tasks={columns[column]}>
              {columns[column].map((task) => (
                <SortableTaskCard key={task.id} task={task} />
              ))}
            </KanbanColumn>
          ))}
        </div>
      </DndContext>
    </div>
  );
};

export default KanbanPage;
