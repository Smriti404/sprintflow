import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => (
  <div className="min-h-screen bg-slate-950 text-white">
    <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 lg:grid-cols-2">
      <div className="hidden flex-col justify-between bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 p-12 text-white lg:flex">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">SprintFlow</p>
          <h1 className="mt-4 font-display text-4xl font-semibold">
            Sprint better. Ship faster.
          </h1>
          <p className="mt-4 max-w-sm text-sm text-white/80">
            A modern agile workspace inspired by Jira and GoodDay for teams that
            need clarity, speed, and a great UI.
          </p>
        </div>
        <div className="text-sm text-white/70">
          <p>Need an account?</p>
          <Link to="/register" className="text-white underline">
            Create one now
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  </div>
);

export default AuthLayout;
