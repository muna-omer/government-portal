import { useEffect, useState } from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { api } from "../api";

const fallback = [
  {id:1,name:"Ministry of Education",category:"Ministry",description:"National education policy, standards and programs."},
  {id:2,name:"Ministry of Finance",category:"Ministry",description:"Public finance, budget and economic management."},
  {id:3,name:"Public Service Commission",category:"Agency",description:"Public service administration and institutional development."}
];

export default function Institutions() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.institutions().then(setItems).catch(() => setItems(fallback));
  }, []);

  const filtered = items.filter(x =>
    `${x.name} ${x.category} ${x.description}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PageHero title="Institutions" text="Explore ministries, agencies and public institutions." />
      <section className="py-20 md:py-[85px]">
        <div className="container-gov">
          <SectionTitle eyebrow="Government" title="Institutions directory" />
          <input
            className="mb-6 w-full max-w-xl rounded-lg border border-gov-border px-4 py-3 outline-none transition focus:border-gov-green-2 focus:ring-4 focus:ring-[#1d5b40]/10"
            placeholder="Search institutions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(item => (
              <Card key={item.id}>
                <div className="grid h-13 w-13 place-items-center rounded-xl bg-[#edf5ef] text-xl font-extrabold text-gov-green">{item.name.charAt(0)}</div>
                <span className="mt-4 inline-block rounded-full bg-[#edf5ef] px-3 py-1 text-[10px] font-extrabold uppercase text-gov-green">{item.category || "Institution"}</span>
                <h3 className="mt-3 text-xl font-bold">{item.name}</h3>
                <p className="mt-2 text-sm leading-7 text-gov-muted">{item.description}</p>
                {item.website && <a className="mt-3 inline-block font-extrabold text-gov-green-2" href={item.website} target="_blank" rel="noreferrer">Visit website →</a>}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
