import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="grid min-h-[400px] place-items-center px-5 text-center">
      <div>
        <h1 className="text-4xl font-extrabold">Page not found</h1>
        <Link className="btn-primary mt-6" to="/">Go Home</Link>
      </div>
    </section>
  );
}
