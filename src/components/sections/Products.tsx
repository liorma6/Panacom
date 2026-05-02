import { productCategories } from "../../data/businessData";

export function Products() {
  return (
    <section id="brands" className="py-20 text-right">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
            מוצרי הדגמה
          </p>
          <h2 className="text-3xl font-black text-brand-blue sm:text-4xl">
            פתרונות בולטים למשרד ולעסק
          </h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-secondary"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.slice(0, 3).map((product) => (
            <article
              key={product.title}
              className="overflow-hidden rounded-[1.5rem] bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-2xl font-black text-brand-blue">{product.title}</h3>
                <p className="mb-6 text-text-secondary leading-7">{product.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {product.brands.map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full bg-brand-blue/10 px-3 py-2 text-sm font-semibold text-brand-blue"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
