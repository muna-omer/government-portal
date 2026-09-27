import { useEffect, useState } from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { api } from "../api";

const fallback = [
  {id:1,title:"Government launches new digital public services",summary:"A new phase of digital public service delivery has been announced.",published_at:"2026-09-20"},
  {id:2,title:"Cabinet holds regular coordination meeting",summary:"Government leaders reviewed priorities and implementation updates.",published_at:"2026-09-15"}
];

export default function Media() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.media().then(setItems).catch(() => setItems(fallback));
  }, []);

  const filtered = items.filter(x =>
    `${x.title} ${x.summary}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PageHero title="Media Centre" text="News, announcements and official public information." />
      <section className="py-20 md:py-[85px]">
        <div className="container-gov">
          <SectionTitle eyebrow="Latest" title="News & announcements" />
          <input
            className="mb-6 w-full max-w-xl rounded-lg border border-gov-border px-4 py-3 outline-none transition focus:border-gov-green-2 focus:ring-4 focus:ring-[#1d5b40]/10"
            placeholder="Search news..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(item => (
              <Card key={item.id}>
                <div className="mb-5 grid h-44 place-items-center rounded-xl bg-gradient-to-br from-[#dfe8e2] to-[#9db7a5] font-extrabold tracking-widest text-gov-green">NEWS</div>
                <small className="text-gov-muted">{new Date(item.published_at).toLocaleDateString()}</small>
                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gov-muted">{item.summary}</p>
                <button className="mt-3 font-extrabold text-gov-green-2">Read more →</button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
