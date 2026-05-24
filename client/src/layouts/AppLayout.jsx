import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const AppLayout = () => (
  <div className="flex min-h-screen bg-surface-50">
    <Sidebar />
    <div className="flex flex-1 flex-col">
      <Topbar />
      <main className="flex-1 px-6 pb-10 pt-6">
        <Outlet />
      </main>
    </div>
  </div>
);

export default AppLayout;
