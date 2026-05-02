import { whyChooseUsData } from "../../data/businessData";

export function WhyChooseUs() {
  return (
    <section id="advantages" className="bg-surface py-20 text-right">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
              {whyChooseUsData.title}
            </p>
            <h2 className="mb-6 text-3xl font-black text-brand-blue sm:text-4xl">
              {whyChooseUsData.title}
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-text-secondary">
              {whyChooseUsData.marketingText}
            </p>
          </div>

          <div className="grid gap-4 rounded-[2rem] bg-white p-8 shadow-soft">
            {whyChooseUsData.items.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="mt-1 text-2xl">✔️</span>
                <p className="text-text-secondary leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
