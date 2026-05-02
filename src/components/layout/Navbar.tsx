import { businessInfo, contact } from "../../data/businessData";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 text-right">
        <div className="flex items-center gap-4">
          <span className="text-2xl">☰</span>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-secondary">{businessInfo.name}</p>
            <h1 className="text-xl font-black text-brand-blue">א. פנקום תקשורת</h1>
          </div>
        </div>
        <a
          href={contact.whatsapp}
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
