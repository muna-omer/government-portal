import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";

const items = [
  ["Our Purpose", "To make government information easier to find, understand and access through a modern digital platform."],
  ["Our Vision", "A connected public sector where reliable information and communication are accessible to everyone."],
  ["Transparency", "We support clear and timely public communication through official information and updates."],
  ["Accessibility", "The portal is designed for desktop and mobile users and can be expanded with additional digital services."]
];

export default function About() {
  return (
    <>
      <PageHero title="About" text="Learn about the portal, its purpose and public information role." />
      <section className="py-20 md:py-[85px]">
        <div className="container-gov max-w-[900px]">
          <SectionTitle eyebrow="About the Portal" title="A single place for official public information" />
          <p className="text-lg leading-8 text-gov-muted">
            The Government Portal provides a central digital space for citizens and partners to access official information about government leadership, institutions, announcements and public communication.
          </p>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {items.map(([title, text]) => (
              <div key={title} className="rounded-xl border border-gov-border p-6">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-gov-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
