const teamMembers = [
  { name: "Alicia", role: "Admin", status: "Active" },
  { name: "Priya", role: "Project Manager", status: "Active" },
  { name: "Isha", role: "Developer", status: "Away" },
];

const TeamPage = () => (
  <div className="space-y-4">
    <div>
      <h2 className="font-display text-2xl font-semibold text-slate-900">Team</h2>
      <p className="text-sm text-slate-500">Manage roles and collaboration.</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      {teamMembers.map((member) => (
        <div key={member.name} className="rounded-xl border border-slate-100 bg-white p-5 shadow-card">
          <h3 className="font-semibold text-slate-900">{member.name}</h3>
          <p className="text-sm text-slate-500">{member.role}</p>
          <span className="mt-3 inline-flex rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500">
            {member.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TeamPage;
