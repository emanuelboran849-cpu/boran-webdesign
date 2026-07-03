import type { Metadata } from "next";

export const metadata = {
  title: "Impressum | Boran Webdesign",
  description: "Impressum von Boran Webdesign.",
} satisfies Metadata;

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-28 text-white md:px-8 md:py-36">
      <section className="mx-auto max-w-3xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 transition hover:text-white"
        >
          ← Zurück zur Startseite
        </a>

        <p className="mt-14 text-[0.72rem] font-black uppercase tracking-[0.22em] text-[#db3150]">
          Rechtliche Angaben
        </p>

        <h1 className="mt-5 font-serif text-[clamp(3rem,10vw,5.8rem)] leading-[0.9] tracking-[-0.065em]">
          Impressum.
        </h1>

        <div className="mt-12 space-y-10 text-white/72">
          <section>
            <h2 className="text-xl font-bold text-white">
              Angaben gemäß § 5 DDG
            </h2>

            <p className="mt-4 leading-7">
              Boran Webdesign
              <br />
              Emanuel Boran
              <br />
              Am Eckrain 15/1
              <br />
              78554 Aldingen
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">Kontakt</h2>

            <p className="mt-4 leading-7">
              Telefon:{" "}
              <a
                href="tel:+4915561950565"
                className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
              >
                +49 155 61950565
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:kontakt@boran-webdesign.de"
                className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
              >
                kontakt@boran-webdesign.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>

            <p className="mt-4 leading-7">
              Emanuel Boran
              <br />
              Am Eckrain 15/1
              <br />
              78554 Aldingen
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              Verbraucherstreitbeilegung
            </h2>

            <p className="mt-4 leading-7">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">Haftung für Inhalte</h2>

            <p className="mt-4 leading-7">
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch
              nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">Haftung für Links</h2>

            <p className="mt-4 leading-7">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">Urheberrecht</h2>

            <p className="mt-4 leading-7">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge
              Dritter sind als solche gekennzeichnet. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}