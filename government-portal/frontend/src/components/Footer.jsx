import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#4e5c68] pt-12 text-[#c8d6df]">
      <div className="container-gov grid gap-10 pb-11 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-gov-gold bg-white text-xs font-extrabold text-gov-green">SR</div>
            <div>
              <strong className="block text-white">Somali Regional State</strong>
              <span className="block text-[10px]">President's Office</span>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7">
            Official information, services and public updates in one place.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white">Quick Links</h4>
          <Link className="mt-3 block text-sm hover:text-white" to="/cabinet">Cabinet</Link>
          <Link className="mt-2 block text-sm hover:text-white" to="/institutions">Institutions</Link>
          <Link className="mt-2 block text-sm hover:text-white" to="/media">Media</Link>
          <Link className="mt-2 block text-sm text-white/60 hover:text-white" to="/login">Admin Login</Link>
        </div>

        <div>
          <h4 className="font-bold text-white">Contact</h4>
          <p className="mt-3 text-sm">Email: info@example.gov</p>
          <p className="mt-2 text-sm">Phone: +251 000 000 000</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-xs">
        <div className="container-gov">© 2026 Government Portal. All rights reserved.</div>
      </div>
    </footer>
  );
}
