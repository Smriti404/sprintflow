import Button from "../components/ui/button";
import Input from "../components/ui/input";

const ProfilePage = () => (
  <div className="space-y-4">
    <div>
      <h2 className="font-display text-2xl font-semibold text-slate-900">Profile</h2>
      <p className="text-sm text-slate-500">Keep your details up to date.</p>
    </div>
    <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-card">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Name
          </label>
          <Input defaultValue="Alicia Parker" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Email
          </label>
          <Input type="email" defaultValue="admin@sprintflow.dev" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Role
          </label>
          <Input defaultValue="Admin" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Password
          </label>
          <Input type="password" defaultValue="Password123!" />
        </div>
      </div>
      <Button className="mt-6">Save changes</Button>
    </div>
  </div>
);

export default ProfilePage;
