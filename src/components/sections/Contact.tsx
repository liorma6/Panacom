export function Contact() {
  return (
    <section id="contact" className="py-20 bg-surface text-right">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
            צרו קשר
          </p>
          <h2 className="text-3xl font-black text-brand-blue sm:text-4xl">
            איך נוכל לעזור לכם?
          </h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-secondary mx-auto"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="tel:0503030690"
            className="group rounded-[1.5rem] bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-xl text-center"
          >
            <div className="mb-4 text-4xl">📞</div>
            <h3 className="text-xl font-black text-brand-blue group-hover:text-brand-blue/80">התקשרו אלינו</h3>
            <p className="mt-2 text-text-secondary">050-303-0690</p>
          </a>

          <a
            href="https://wa.me/972503030690"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[1.5rem] bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-xl text-center"
          >
            <div className="mb-4 text-4xl">💬</div>
            <h3 className="text-xl font-black text-brand-blue group-hover:text-brand-blue/80">שלחו וואטסאפ</h3>
            <p className="mt-2 text-text-secondary">הודעה מהירה</p>
          </a>

          <a
            href="mailto:a.panacom@gmail.com"
            className="group rounded-[1.5rem] bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-xl text-center"
          >
            <div className="mb-4 text-4xl">📧</div>
            <h3 className="text-xl font-black text-brand-blue group-hover:text-brand-blue/80">שלחו אימייל</h3>
            <p className="mt-2 text-text-secondary">a.panacom@gmail.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}
