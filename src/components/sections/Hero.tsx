import { heroData } from "../../data/businessData";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555985540-5fc57f9ef4b8?auto=format&fit=crop&w=1600&q=80"
          alt="מערכת תקשורת ואבטחה"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
      </div>

      <div className="relative container mx-auto px-6 py-28 lg:py-32">
        <div className="max-w-3xl text-right">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-secondary/80">
            א. פנקום תקשורת
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight text-white sm:text-6xl">
            {heroData.heading}
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-8 text-white/80">
            {heroData.subtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
            {heroData.buttons.slice(0, 2).map((button) => {
              const isExternal = button.href.startsWith("http");
              return (
                <a
                  key={button.label}
                  href={button.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-slate-100"
                >
                  {button.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
