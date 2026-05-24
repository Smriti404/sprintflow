import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProjects } from "../redux/slices/projectsSlice";
import Table from "../components/Table";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorState from "../components/ErrorState";

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch]);

  const columns = [
    { label: "Project", accessor: "title" },
    { label: "Status", accessor: "status" },
    { label: "Manager", accessor: "manager" },
  ];

  const data = list.map((project) => ({
    id: project._id,
    title: project.title,
    status: project.status,
    manager: project.manager?.name || "Unassigned",
  }));

  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-display text-2xl font-semibold text-slate-900">Projects</h2>
        <p className="text-sm text-slate-500">Track active and planned initiatives.</p>
      </div>
      {loading && <LoadingSpinner />}
      {error && <ErrorState message={error} />}
      {!loading && !error && <Table columns={columns} data={data} />}
    </div>
  );
};

export default ProjectsPage;
