export function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-6 py-10 text-right">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="mb-4 text-2xl font-black">א. פנקום תקשורת</h3>
            <p className="max-w-2xl leading-7 text-white/80">
              פתרונות CCTV, אינטרקום, אבטחה ותשתית תקשורת מתקדמים לעסקים ולפרויקטים.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-white/70">פרטי התקשרות</p>
            <p>טלפון: *9876</p>
            <p>אימייל: info@panacom.co.il</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/20 pt-6 text-sm text-white/70">
          © 2026 א. פנקום תקשורת. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
