export function Contact() {
  return (
    <section id="contact" className="py-20 bg-surface text-right">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.8fr]">
          <div className="rounded-[2rem] bg-white p-10 shadow-soft">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
              צרו קשר
            </p>
            <h2 className="mb-6 text-3xl font-black text-brand-blue sm:text-4xl">
              דברו עם אלון משיח
            </h2>
            <p className="mb-8 text-lg leading-8 text-text-secondary">
              נשמח לתאם פגישה, להציע פתרון מותאם ולהתחיל את הפרויקט שלכם מתוך הבנה מלאה של הצרכים.
            </p>
            <div className="space-y-6">
              <div className="rounded-[1.5rem] bg-surface p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">טלפון</p>
                <a href="tel:050-303-0690" className="mt-2 block text-text-primary hover:text-brand-blue">050-303-0690</a>
              </div>
              <div className="rounded-[1.5rem] bg-surface p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">וואטסאפ</p>
                <a href="https://wa.me/972503030690" target="_blank" rel="noopener noreferrer" className="mt-2 block text-text-primary hover:text-brand-blue">הודעה מהירה</a>
              </div>
              <div className="rounded-[1.5rem] bg-surface p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">אימייל</p>
                <a href="mailto:a.panacom@gmail.com" className="mt-2 block text-text-primary hover:text-brand-blue">a.panacom@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-brand-blue p-10 text-white shadow-soft">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-secondary/80">
              שליחת בקשה
            </p>
            <form action="https://formspree.io/f/a.panacom@gmail.com" method="POST" className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold">שם מלא</label>
                <input
                  name="name"
                  className="w-full rounded-3xl border border-white/20 bg-white/10 px-5 py-3 text-white outline-none transition focus:border-white focus:bg-white/15"
                  type="text"
                  placeholder="ישראל ישראלי"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold">טלפון</label>
                <input
                  name="phone"
                  className="w-full rounded-3xl border border-white/20 bg-white/10 px-5 py-3 text-white outline-none transition focus:border-white focus:bg-white/15"
                  type="tel"
                  placeholder="050-0000000"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold">איך נוכל לעזור?</label>
                <textarea
                  name="message"
                  className="h-40 w-full rounded-3xl border border-white/20 bg-white/10 px-5 py-4 text-white outline-none transition focus:border-white focus:bg-white/15"
                  placeholder="ספר לנו על הפרויקט שלך..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-3xl bg-secondary px-6 py-4 text-sm font-semibold text-white transition hover:bg-secondary-dark"
              >
                שלח הודעה
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
