const SprintsPage = () => (
  <div className="space-y-4">
    <div>
      <h2 className="font-display text-2xl font-semibold text-slate-900">Sprints</h2>
      <p className="text-sm text-slate-500">Plan, track, and review iterations.</p>
    </div>
    <div className="grid gap-4 lg:grid-cols-2">
      {[
        { name: "Sprint 1", progress: 68, date: "May 20 - May 27" },
        { name: "Sprint 2", progress: 42, date: "May 28 - Jun 4" },
      ].map((sprint) => (
        <div
          key={sprint.name}
          className="rounded-xl border border-slate-100 bg-white p-5 shadow-card"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-slate-900">{sprint.name}</h3>
            <span className="text-xs text-slate-400">{sprint.date}</span>
          </div>
          <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
            <div
              className="h-2 rounded-full bg-brand-500"
              style={{ width: `${sprint.progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-slate-500">{sprint.progress}% completed</p>
        </div>
      ))}
    </div>
  </div>
);

export default SprintsPage;
