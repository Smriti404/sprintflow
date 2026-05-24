import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "../redux/slices/tasksSlice";
import Table from "../components/Table";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorState from "../components/ErrorState";

const TasksPage = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const columns = [
    { label: "Task", accessor: "title" },
    { label: "Status", accessor: "status" },
    { label: "Priority", accessor: "priority" },
  ];

  const data = list.map((task) => ({
    id: task._id,
    title: task.title,
    status: task.status,
    priority: task.priority,
  }));

  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-display text-2xl font-semibold text-slate-900">Tasks</h2>
        <p className="text-sm text-slate-500">Prioritize and manage work items.</p>
      </div>
      {loading && <LoadingSpinner />}
      {error && <ErrorState message={error} />}
      {!loading && !error && <Table columns={columns} data={data} />}
    </div>
  );
};

export default TasksPage;
