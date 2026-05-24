import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";
import { loadProjects } from "../redux/slices/projectsSlice";
import { loadTasks } from "../redux/slices/tasksSlice";

const activityData = [
  { name: "Mon", value: 24 },
  { name: "Tue", value: 32 },
  { name: "Wed", value: 28 },
  { name: "Thu", value: 42 },
  { name: "Fri", value: 38 },
  { name: "Sat", value: 22 },
  { name: "Sun", value: 18 },
];

const sprintData = [
  { name: "Sprint 1", value: 68 },
  { name: "Sprint 2", value: 82 },
  { name: "Sprint 3", value: 55 },
  { name: "Sprint 4", value: 91 },
];

const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProjects());
    dispatch(loadTasks());
  }, [dispatch]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Projects" value="14" hint="+2 this month" />
        <StatCard label="Total Tasks" value="128" hint="24 assigned today" />
        <StatCard label="Completed" value="86" hint="67% completion" />
        <StatCard label="Pending" value="42" hint="5 overdue" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Task Completion">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activityData}>
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#2f5fff" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Sprint Performance">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sprintData}>
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip />
              <Bar dataKey="value" fill="#2f5fff" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

export default DashboardPage;
