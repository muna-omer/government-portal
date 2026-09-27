import { useState } from "react";
import { KeyRound, LockKeyhole, LogIn, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function change(event) {
    setForm(current => ({ ...current, [event.target.name]: event.target.value }));
    setStatus("");
  }

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const result = await api.login(form);
      localStorage.setItem("government_portal_session", JSON.stringify(result));
      navigate("/cabinet");
    } catch (error) {
      setStatus(error.message || "Unable to sign in. Please check your details.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative grid min-h-155 place-items-center overflow-hidden bg-[#08263d] px-5 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(39,121,171,.35),transparent_45%),linear-gradient(135deg,#08263d,#123f62)]" />
      <div className="relative w-full max-w-md rounded-xl border border-white/15 bg-white p-7 shadow-2xl md:p-9">
        <div className="mb-7 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full border-2 border-gov-gold text-sm font-extrabold text-gov-green">SR</div>
          <div><strong className="block text-sm text-gov-green">Staff Portal</strong><span className="text-xs text-gov-muted">Somali Regional State President's Office</span></div>
        </div>
        <div className="mb-6"><span className="eyebrow">Authorized access</span><h1 className="mt-1 text-2xl font-extrabold">Welcome back</h1><p className="mt-2 text-sm leading-6 text-gov-muted">Sign in to manage official cabinet, institution, and media information.</p></div>
        <form className="space-y-4" onSubmit={submit}>
          <label className="block text-xs font-bold">Username<div className="relative mt-2"><UserRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gov-muted" size={16} /><input className="h-11 w-full rounded-md border border-gov-border pl-10 pr-3 text-sm font-normal outline-none transition focus:border-gov-green-2 focus:ring-4 focus:ring-gov-green-2/10" name="username" value={form.username} onChange={change} autoComplete="username" required /></div></label>
          <label className="block text-xs font-bold">Password<div className="relative mt-2"><LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-gov-muted" size={16} /><input className="h-11 w-full rounded-md border border-gov-border pl-10 pr-3 text-sm font-normal outline-none transition focus:border-gov-green-2 focus:ring-4 focus:ring-gov-green-2/10" type="password" name="password" value={form.password} onChange={change} autoComplete="current-password" required /></div></label>
          {status && <div className="rounded-md border border-[#f0caca] bg-[#fff3f3] p-3 text-xs text-[#a33a3a]">{status}</div>}
          <button className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-gov-green text-sm font-bold text-white transition hover:bg-gov-green-2 disabled:cursor-not-allowed disabled:opacity-60" disabled={loading} type="submit"><LogIn size={16} />{loading ? "Signing in..." : "Sign in"}</button>
        </form>
        <p className="mt-6 flex items-center justify-center gap-2 text-center text-[11px] text-gov-muted"><KeyRound size={13} /> Access is restricted to authorized staff.</p>
      </div>
    </section>
  );
}
