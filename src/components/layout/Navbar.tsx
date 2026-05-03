import { businessInfo, contact } from "../../data/businessData";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 text-right">
        <div className="flex items-center gap-4">
          <img
            src="/logo-panacom.png"
            alt="Panacom Logo"
            className="h-10 w-auto"
          />
        </div>
        <a
          href="https://wa.me/972503030690"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-secondary-dark"
        >
          צור קשר
        </a>
      </div>
    </header>
  );
}
