export default function PageHero({ title, text }) {
  return (
    <section className="bg-[#0b3755] py-12 text-white md:py-16">
      <div className="container-gov">
        <span className="eyebrow">Somali Regional State</span>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight md:text-5xl">{title}</h1>
        {text && <p className="mt-2 max-w-2xl text-sm text-white/75">{text}</p>}
      </div>
    </section>
  );
}
