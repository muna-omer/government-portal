import { useState } from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { api } from "../api";

export default function Contact() {
  const [form, setForm] = useState({name:"",email:"",subject:"",message:""});
  const [status, setStatus] = useState("");

  function change(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  async function submit(e) {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await api.contact(form);
      setStatus("Thank you. Your message has been submitted.");
      setForm({name:"",email:"",subject:"",message:""});
    } catch {
      setStatus("The backend is not available. Start the API and try again.");
    }
  }

  return (
    <>
      <PageHero title="Contact" text="Get in touch with the government information office." />
      <section className="py-20 md:py-[85px]">
        <div className="container-gov grid gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Get in touch" title="We are here to help" />
            {[
              ["Office", "Government Information Office"],
              ["Email", "info@example.gov"],
              ["Phone", "+251 000 000 000"],
              ["Address", "Government Offices, Ethiopia"]
            ].map(([label, value]) => (
              <div key={label} className="border-b border-gov-border py-4">
                <strong className="block text-sm">{label}</strong>
                <span className="text-sm text-gov-muted">{value}</span>
              </div>
            ))}
          </div>

          <form className="rounded-[14px] border border-gov-border p-7 shadow-[0_12px_35px_rgba(20,40,30,.08)]" onSubmit={submit}>
            {[
              ["name", "Name", "text"],
              ["email", "Email", "email"],
              ["subject", "Subject", "text"]
            ].map(([name, label, type]) => (
              <label key={name} className="mb-4 block text-sm font-bold">
                {label}
                <input
                  type={type}
                  name={name}
                  required={name !== "subject"}
                  value={form[name]}
                  onChange={change}
                  className="mt-2 w-full rounded-lg border border-gov-border px-3 py-3 font-normal outline-none focus:border-gov-green-2 focus:ring-4 focus:ring-[#1d5b40]/10"
                />
              </label>
            ))}

            <label className="mb-5 block text-sm font-bold">
              Message
              <textarea
                name="message"
                required
                rows="6"
                value={form.message}
                onChange={change}
                className="mt-2 w-full resize-y rounded-lg border border-gov-border px-3 py-3 font-normal outline-none focus:border-gov-green-2 focus:ring-4 focus:ring-[#1d5b40]/10"
              />
            </label>

            <button className="btn-primary" type="submit">Send Message</button>
            {status && <div className="mt-4 rounded-lg bg-[#eef5f0] p-3 text-sm text-gov-green">{status}</div>}
          </form>
        </div>
      </section>
    </>
  );
}
