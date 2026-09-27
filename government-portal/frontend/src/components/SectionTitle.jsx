export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-9 max-w-2xl">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-1 text-3xl font-extrabold leading-tight md:text-4xl">{title}</h2>
      {text && <p className="mt-2 text-gov-muted">{text}</p>}
    </div>
  );
}
