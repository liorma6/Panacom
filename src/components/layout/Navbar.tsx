import { businessInfo, contact } from "../../data/businessData";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 text-right">
        <div className="flex flex-col items-end">
          <span
            style={{
              fontFamily: "'Arial Black', Impact, sans-serif",
              fontWeight: 900,
              color: "#0041C2",
              fontSize: "1.5rem",
              letterSpacing: "0.1em",
            }}
          >
            PANACOM
          </span>
          <span className="text-xs text-gray-500">תקשורת ואבטחה</span>
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
