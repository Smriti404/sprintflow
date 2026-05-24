import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import Button from "./ui/button";

const Topbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
          Team Workspace
        </p>
        <h2 className="font-display text-lg font-semibold text-slate-900">
          Welcome back, {user?.name || "Teammate"}
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          Notifications
        </Button>
        <Button variant="primary" size="sm" onClick={() => dispatch(logout())}>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Topbar;
