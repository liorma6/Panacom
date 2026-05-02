import { servicesData } from "../../data/businessData";

export function Services() {
  return (
    <section id="services" className="py-20 text-right">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
            השירותים שלנו
          </p>
          <h2 className="text-3xl font-black text-brand-blue sm:text-4xl">
            הפתרונות שאנחנו מספקים
          </h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-secondary"></div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {servicesData.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.5rem] bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-blue text-2xl text-white">
                {service.icon}
              </div>
              <h3 className="mb-4 text-xl font-black text-brand-blue">{service.title}</h3>
              <p className="text-text-secondary leading-7">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
