import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BarChart3, Building2, Check, ChevronDown, FileText, Grid2X2, List, Search, Shield, Star, Users, X } from "lucide-react";
import { api } from "../api";

const portraits = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=85"
];

const sampleMembers = [
  ["Hon. Ahmed Yusuf", "Head of Finance Bureau", "Economic Development", "Public financial management and economic development expert."],
  ["Hon. Amina Ali", "Head of Education Bureau", "Human Development", "Education policy and human capital development specialist."],
  ["Hon. Mohamed Farah", "Head of Health Bureau", "Human Development", "Health systems strengthening and public health expert."],
  ["Hon. Fatima Hassan", "Head of Women & Children", "Human Development", "Gender equality and social inclusion advocate."],
  ["Hon. Ibrahim Ahmed", "Head of Investment Bureau", "Economic Development", "Investment promotion and private sector development expert."],
  ["Hon. Abdi Sheikh", "Head of Roads & Transport", "Infrastructure & Resources", "Infrastructure development and transport systems specialist."],
  ["Hon. Hodan Osman", "Head of Youth & Sport", "Human Development", "Youth empowerment and sports development specialist."],
  ["Hon. Yusuf Aden", "Head of Agriculture Bureau", "Infrastructure & Resources", "Agricultural development and food systems expert."],
  ["Hon. Safiya Ali", "Head of Trade Bureau", "Economic Development", "Trade policy and market development specialist."],
  ["Hon. Khalid Mohamed", "Head of Peace & Security", "Governance & Justice", "Peacebuilding and community security expert."],
  ["Hon. Zahra Ibrahim", "Head of Water Bureau", "Infrastructure & Resources", "Water resources management and resilience specialist."],
  ["Hon. Ali Mohamed", "Head of Justice Bureau", "Governance & Justice", "Legal reform and justice administration expert."]
].map(([name, position, portfolio, bio], index) => ({ id: index + 1, name, position, portfolio, bio, image: portraits[index] }));

const categories = [
  ["All Members", 24, Users], ["Executive Leadership", 3, Star], ["Economic Development", 6, BarChart3],
  ["Human Development", 6, Users], ["Infrastructure & Resources", 5, Building2], ["Governance & Justice", 4, Shield]
];

const stats = [["24", "Cabinet Members", Users], ["16", "Institutions", Building2], ["8", "New Appointments", FileText], ["6", "Women Leaders", Users], ["67%", "With Advanced Degrees", null]];

export default function Cabinet() {
  const [members, setMembers] = useState(sampleMembers);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Members");
  const [view, setView] = useState("grid");
  const [error, setError] = useState("");

  useEffect(() => {
    api.cabinet().then(data => {
      if (data?.length) setMembers(data.map((member, index) => ({ ...sampleMembers[index % sampleMembers.length], ...member, image: member.image || portraits[index % portraits.length] })));
    }).catch(() => setError("Showing sample cabinet profiles. Connect the backend to load live data."));
  }, []);

  const filtered = useMemo(() => members.filter(member => {
    const matchesSearch = `${member.name} ${member.position} ${member.portfolio || member.ministry || ""}`.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All Members" || (member.portfolio || "").toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  }), [members, search, activeCategory]);

  return (
    <div className="bg-[#f5f7f9] pb-16">
      <section className="relative overflow-hidden bg-[#08263d] text-white">
        <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85" alt="Government building exterior" />
        <div className="photo-overlay absolute inset-0" />
        <div className="container-gov relative py-10 md:py-12">
          <div className="text-xs text-white/75">Home <span className="mx-2">›</span> Cabinet</div>
          <h1 className="mt-4 text-3xl font-extrabold md:text-5xl">THE CABINET</h1>
          <p className="mt-1 text-sm text-white/85 md:text-base">Meet the leaders appointed to serve the Somali Regional State.</p>
        </div>
      </section>

      <section className="relative z-10 -mt-1 md:-mt-7"><div className="container-gov grid overflow-hidden rounded-lg border border-gov-border bg-white shadow-[0_10px_28px_rgba(23,50,74,.1)] sm:grid-cols-3 lg:grid-cols-5">{stats.map(([value, label, Icon]) => <div key={label} className="flex items-center gap-3 border-b border-gov-border p-4 last:border-0 sm:border-r sm:border-b-0 lg:justify-center"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-[#eaf2f7] text-gov-green-2">{Icon ? <Icon size={19} /> : <strong className="text-xs">%</strong>}</div><div><strong className="block text-xl text-gov-green">{value}</strong><span className="block text-[10px] text-gov-muted">{label}</span></div></div>)}</div></section>

      <section className="container-gov mt-6">
        {error && <div className="mb-4 rounded-md border border-[#cce3d5] bg-[#eff9f2] p-3 text-xs text-gov-green">{error}</div>}
        <div className="grid gap-4 lg:grid-cols-[210px_1fr]">
          <aside className="h-fit rounded-lg border border-gov-border bg-white p-3 shadow-sm"><nav className="space-y-1">{categories.map(([label, count, Icon]) => <button key={label} onClick={() => setActiveCategory(label)} className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-[11px] font-semibold transition ${activeCategory === label ? "bg-[#e8f1f7] text-gov-green" : "text-gov-muted hover:bg-gov-light"}`}><Icon size={16} /><span className="flex-1">{label}</span><span className="text-[10px]">{count}</span></button>)}</nav><div className="my-3 border-t border-gov-border" /><h3 className="px-3 pb-2 text-xs font-bold">Filter by</h3>{["Select Institution", "Select Education Level", "Select Gender", "Select Appointment Type"].map(label => <button key={label} className="mb-2 flex w-full items-center justify-between rounded border border-gov-border px-3 py-2 text-[10px] text-gov-muted"><span>{label}</span><ChevronDown size={13} /></button>)}<button onClick={() => { setActiveCategory("All Members"); setSearch(""); }} className="mt-1 flex items-center gap-2 px-3 py-2 text-[10px] font-bold text-gov-green-2"><X size={13} /> Clear Filters</button></aside>

          <div><div className="mb-4 flex flex-wrap items-center gap-2"><div className="relative min-w-55 flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gov-muted" size={16} /><input value={search} onChange={event => setSearch(event.target.value)} className="h-10 w-full rounded-md border border-gov-border bg-white pl-9 pr-3 text-xs outline-none focus:border-gov-green-2 focus:ring-2 focus:ring-gov-green-2/10" placeholder="Search by name, office or institution..." /></div><button className="h-10 rounded-md bg-gov-green px-5 text-xs font-bold text-white">Search</button><div className="ml-auto flex rounded-md border border-gov-border bg-white p-1"><button onClick={() => setView("grid")} className={`rounded p-2 ${view === "grid" ? "bg-gov-green text-white" : "text-gov-muted"}`} aria-label="Grid view"><Grid2X2 size={15} /></button><button onClick={() => setView("list")} className={`rounded p-2 ${view === "list" ? "bg-gov-green text-white" : "text-gov-muted"}`} aria-label="List view"><List size={15} /></button></div></div>

            <div className={view === "grid" ? "grid gap-3 sm:grid-cols-2 xl:grid-cols-3" : "space-y-3"}>{filtered.map(member => <article key={member.id} className={`overflow-hidden rounded-lg border border-gov-border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${view === "list" ? "flex" : ""}`}><div className={`${view === "list" ? "h-28 w-28" : "h-56 w-full"} flex shrink-0 items-center justify-center overflow-hidden bg-[#eeeae7]`}><img className="h-full w-full object-cover object-top" src={member.image} alt={member.name} /></div><div className="flex min-w-0 flex-1 flex-col p-3"><h2 className="text-sm font-extrabold leading-tight">{member.name}</h2><p className="mt-0.5 text-[10px] font-semibold text-gov-green-2">{member.position || member.ministry}</p><p className="mt-2 line-clamp-2 text-[10px] leading-4 text-gov-muted">{member.bio}</p><div className="mt-3 flex items-center justify-between gap-2"><span className="rounded bg-[#eef7f1] px-2 py-1 text-[9px] font-bold text-[#2b7c58]">{member.portfolio || "Cabinet Office"}</span><button className="flex items-center gap-1 text-[10px] font-bold text-gov-green-2">View Profile <ArrowRight size={12} /></button></div></div></article>)}</div>
            {!filtered.length && <div className="rounded-lg border border-dashed border-gov-border bg-white p-10 text-center text-sm text-gov-muted">No cabinet members match your search.</div>}
            <div className="mt-5 flex items-center justify-between text-[10px] text-gov-muted"><span>Showing 1 – {filtered.length} of {members.length} members</span><div className="flex gap-1"><button className="rounded border border-gov-border bg-white px-2 py-1">‹</button><button className="rounded bg-gov-green px-2.5 py-1 font-bold text-white">1</button><button className="rounded border border-gov-border bg-white px-2.5 py-1">2</button><button className="rounded border border-gov-border bg-white px-2 py-1">›</button></div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
