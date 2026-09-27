import { Link } from "react-router-dom";
import {
  ArrowRight, BriefcaseBusiness, Building2, ChevronRight, GraduationCap,
  HeartPulse, Landmark, Leaf, Newspaper, Scale, ShieldCheck, Users
} from "lucide-react";

const stats = [
  ["24", "Cabinet Members"], ["16", "Institutions"], ["8", "New Appointments"], ["6", "Women Leaders"], ["67%", "Women Advanced Degrees"]
];

const portfolios = [
  { title: "Economic Development", color: "bg-[#26865e]", icon: BriefcaseBusiness, items: ["Finance", "Investment", "Trade", "Revenue", "Planning"] },
  { title: "Human Development", color: "bg-[#d84e50]", icon: Users, items: ["Education", "Health", "Youth & Sports", "Women & Children", "Labour & Skills"] },
  { title: "Infrastructure & Resources", color: "bg-[#2475b5]", icon: Building2, items: ["Water", "Roads", "Energy", "Urban Development", "Agriculture & Livestock"] },
  { title: "Governance & Justice", color: "bg-[#d49a2f]", icon: Scale, items: ["Peace & Security", "Justice", "Administration", "Public Service", "Disaster Management"] }
];

const services = [
  ["I want to start a business", BriefcaseBusiness], ["I want to invest in the region", Building2],
  ["I want to find employment opportunities", Users], ["I want to find agricultural support", Leaf],
  ["I want to access education services", GraduationCap], ["I want to report a government issue", Newspaper],
  ["I want to get healthcare services", HeartPulse], ["I want to find a government office", Landmark]
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-125 overflow-hidden bg-[#08263d] text-white">
        <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85" alt="Government building exterior" />
        <div className="photo-overlay absolute inset-0" />
        <div className="container-gov relative flex min-h-125 items-center py-16">
          <div className="max-w-xl">
            <span className="eyebrow">Somali Regional State</span>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] md:text-6xl">CABINET <span className="text-gov-gold">2026</span></h1>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Meet Your Government</h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/80 md:text-base">The Somali Regional State administration. A renewed mandate. A stronger region. A government ready to serve.</p>
            <div className="mt-7 flex flex-wrap gap-3"><Link className="btn-primary" to="/cabinet">Explore the Cabinet <ArrowRight size={16} /></Link><Link className="btn-light" to="/about">How Government Works</Link></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-[#071f32]/80"><div className="container-gov grid grid-cols-3 gap-3 py-3 text-center text-[10px] font-semibold uppercase tracking-wide text-white/75 md:grid-cols-5"><span>People</span><span>Service</span><span>Development</span><span>Peace</span><span>Opportunity</span></div></div>
      </section>

      <section className="relative z-10 -mt-7"><div className="container-gov grid overflow-hidden rounded-lg border border-gov-border bg-white shadow-[0_12px_30px_rgba(23,50,74,.12)] sm:grid-cols-3 lg:grid-cols-5">{stats.map(([value, label], index) => <div key={label} className="border-b border-gov-border p-4 text-center last:border-0 sm:border-r sm:border-b-0 lg:p-5"><strong className={`block text-2xl ${index === 3 ? "text-[#8958a9]" : "text-gov-green"}`}>{value}</strong><span className="text-[10px] text-gov-muted">{label}</span></div>)}</div></section>

      <section className="section-band mt-7"><div className="container-gov"><div className="mb-7 flex items-end justify-between gap-4"><div><span className="eyebrow">Government Directory</span><h2 className="mt-1 text-2xl font-extrabold md:text-3xl">Explore by portfolio</h2><p className="mt-1 text-sm text-gov-muted">Discover the institutions that work on issues that matter to you.</p></div><Link className="hidden items-center gap-1 text-xs font-bold text-gov-green-2 sm:flex" to="/institutions">View all <ArrowRight size={14} /></Link></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{portfolios.map(({ title, color, icon: Icon, items }) => <article key={title} className="overflow-hidden rounded-lg border border-gov-border bg-white shadow-sm"><div className={`${color} flex items-center gap-3 p-4 text-white`}><Icon size={22} /><h3 className="text-sm font-bold leading-tight">{title}</h3></div><ul className="space-y-2 p-4 text-xs text-gov-muted">{items.map(item => <li key={item} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-gov-gold" />{item}</li>)}</ul></article>)}</div></div></section>

      <section className="border-t border-gov-border bg-[#edf3f6] py-14"><div className="container-gov grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><span className="eyebrow">Citizen Services</span><h2 className="mt-1 text-2xl font-extrabold md:text-3xl">How can we help you?</h2><p className="mt-2 max-w-md text-sm leading-6 text-gov-muted">Find the right government office and service for your needs.</p><div className="mt-6 flex items-center gap-3 text-sm font-bold text-gov-green"><ShieldCheck size={22} /> Built for citizens</div></div><div className="grid gap-2 sm:grid-cols-2">{services.map(([label, Icon]) => <Link key={label} to="/contact" className="flex min-h-12 items-center justify-between gap-3 rounded-md border border-gov-border bg-white px-3 py-3 text-xs font-semibold transition hover:border-gov-green-2 hover:shadow-sm"><span className="flex items-center gap-2"><Icon size={17} className="text-gov-green-2" />{label}</span><ChevronRight size={15} className="shrink-0 text-gov-muted" /></Link>)}</div></div></section>

      <section className="section-band"><div className="container-gov grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center"><div><span className="eyebrow">Government Structure</span><h2 className="mt-1 text-2xl font-extrabold md:text-3xl">How government is organized</h2><p className="mt-2 max-w-md text-sm leading-6 text-gov-muted">A strong structure for a stronger region, with leadership and portfolios working together.</p><Link className="btn-primary mt-6" to="/about">Learn more <ArrowRight size={16} /></Link></div><div className="rounded-lg border border-gov-border bg-[#f7fafc] p-5 text-center"><div className="mx-auto max-w-48 rounded-md bg-gov-green px-4 py-3 text-xs font-bold text-white">President<br /><span className="font-normal text-white/70">Somali Regional State</span></div><div className="mx-auto h-5 w-px bg-gov-green/30" /><div className="mx-auto max-w-56 rounded-md bg-[#2b76ad] px-4 py-2 text-[10px] font-bold text-white">Executive Leadership</div><div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4">{portfolios.map(({ title, color, icon: Icon }) => <div key={title} className={`${color} rounded p-3 text-[9px] font-bold text-white`}><Icon className="mx-auto mb-1" size={16} />{title}</div>)}</div></div></div></section>
    </>
  );
}
