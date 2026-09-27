import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search, Globe2 } from "lucide-react";
import { useState } from "react";

const links = [
  ["/", "Home"],
  ["/cabinet", "Cabinet"],
  ["/institutions", "Institutions"],
  ["/about", "About"],
  ["/media", "Media"],
  ["/contact", "Contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gov-border bg-[#f4f8fb]/95 text-gov-text shadow-sm backdrop-blur">
      <div className="container-gov flex min-h-14.5 items-center justify-between gap-7">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="grid h-9 w-9 place-items-center rounded-full border-2 border-gov-gold bg-white text-[10px] font-extrabold text-gov-green">
            SR
          </div>
          <div>
            <strong className="block text-[10px] uppercase tracking-wide text-gov-green">Somali Regional State</strong>
            <span className="block text-[8px] text-gov-muted">President's Office</span>
          </div>
        </Link>

        <nav className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-14.5 flex-col border-b border-gov-border bg-white p-3 shadow-lg md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded px-3 py-2 text-[11px] font-semibold transition ${
                  isActive
                    ? "bg-[#e5f0f7] text-gov-green after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-gov-gold md:bg-transparent"
                    : "text-gov-text hover:bg-[#eaf2f7] hover:text-gov-green"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button className="rounded p-2 text-gov-green hover:bg-[#e5f0f7]" aria-label="Search">
            <Search size={19} />
          </button>
          <div className="hidden items-center gap-1 rounded-full border border-gov-border bg-white px-1 py-1 text-[10px] font-bold md:flex"><span className="rounded-full bg-gov-green px-2 py-1 text-white">EN</span><span className="px-1 text-gov-muted">SO</span></div>
          <Link className="hidden rounded-full bg-gov-green px-4 py-2 text-[10px] font-bold text-white transition hover:bg-gov-green-2 md:inline-flex" to="/contact">Contact Us</Link>
          <button className="rounded p-2 text-gov-green hover:bg-[#e5f0f7] md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
