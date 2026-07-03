import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Datenschutz | Boran Webdesign",
  description: "Datenschutzerklärung von Boran Webdesign.",
};

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-14 border-t border-white/[0.1] pt-10">
      <h2 className="font-serif text-[clamp(2rem,7vw,3.9rem)] leading-[0.95] tracking-[-0.06em] text-white">
        {title}
      </h2>

      <div className="mt-7 space-y-7 text-[1rem] leading-[1.78] text-white/68 md:text-[1.05rem]">
        {children}
      </div>
    </section>
  );
}

function LegalSubsection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h3 className="text-[1.28rem] font-extrabold leading-[1.15] tracking-[-0.035em] text-white md:text-[1.55rem]">
        {title}
      </h3>

      <div className="space-y-4">{children}</div>
    </section>
  );
}

function LegalSmallTitle({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h4 className="text-[1rem] font-extrabold text-white/88">{title}</h4>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function LegalList({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-white/68 marker:text-[#db3150]">
      {children}
    </ul>
  );
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-28 text-white md:px-8 md:py-36">
      <section className="mx-auto max-w-4xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 transition hover:text-white"
        >
          ← Zurück zur Startseite
        </a>

        <p className="mt-14 text-[0.72rem] font-black uppercase tracking-[0.22em] text-[#db3150]">
          Datenschutz
        </p>

        <h1 className="mt-5 font-serif text-[clamp(3rem,10vw,5.8rem)] leading-[0.9] tracking-[-0.065em]">
          Datenschutz.
        </h1>

        <div className="mt-12">
          <LegalSection title="1. Datenschutz auf einen Blick">
            <LegalSubsection title="Allgemeine Hinweise">
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können. Ausführliche
                Informationen zum Thema Datenschutz entnehmen Sie unserer unter
                diesem Text aufgeführten Datenschutzerklärung.
              </p>
            </LegalSubsection>

            <LegalSubsection title="Datenerfassung auf dieser Website">
              <LegalSmallTitle title="Wer ist verantwortlich für die Datenerfassung auf dieser Website?">
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den
                  Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                  „Hinweis zur verantwortlichen Stelle“ in dieser
                  Datenschutzerklärung entnehmen.
                </p>
              </LegalSmallTitle>

              <LegalSmallTitle title="Wie erfassen wir Ihre Daten?">
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                  mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
                  in ein Kontaktformular eingeben.
                </p>

                <p>
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung
                  beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                  sind vor allem technische Daten, zum Beispiel Internetbrowser,
                  Betriebssystem oder Uhrzeit des Seitenaufrufs. Die Erfassung
                  dieser Daten erfolgt automatisch, sobald Sie diese Website
                  betreten.
                </p>
              </LegalSmallTitle>

              <LegalSmallTitle title="Wofür nutzen wir Ihre Daten?">
                <p>
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie
                  Bereitstellung der Website zu gewährleisten. Andere Daten
                  können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  Sofern über die Website Verträge geschlossen oder angebahnt
                  werden können, werden die übermittelten Daten auch für
                  Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen
                  verarbeitet.
                </p>
              </LegalSmallTitle>

              <LegalSmallTitle title="Welche Rechte haben Sie bezüglich Ihrer Daten?">
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                  Herkunft, Empfänger und Zweck Ihrer gespeicherten
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                  Recht, die Berichtigung oder Löschung dieser Daten zu
                  verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                  erteilt haben, können Sie diese Einwilligung jederzeit für die
                  Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                  bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
                  ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>

                <p>
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
                  Sie sich jederzeit an uns wenden.
                </p>
              </LegalSmallTitle>
            </LegalSubsection>
          </LegalSection>

          <LegalSection title="2. Hosting">
            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

            <LegalSubsection title="Externes Hosting">
              <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten,
                die auf dieser Website erfasst werden, werden auf den Servern
                des Hosters / der Hoster gespeichert. Hierbei kann es sich vor
                allem um IP-Adressen, Kontaktanfragen, Meta- und
                Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                Websitezugriffe und sonstige Daten, die über eine Website
                generiert werden, handeln.
              </p>

              <p>
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
                gegenüber unseren potenziellen und bestehenden Kunden (Art. 6
                Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
                und effizienten Bereitstellung unseres Online-Angebots durch
                einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
                die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1
                lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die
                Speicherung von Cookies oder den Zugriff auf Informationen im
                Endgerät des Nutzers, zum Beispiel Device-Fingerprinting, im
                Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit
                widerrufbar.
              </p>

              <p>
                Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
                verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
                erforderlich ist und unsere Weisungen in Bezug auf diese Daten
                befolgen.
              </p>

              <p>Wir setzen folgende(n) Hoster ein:</p>

              <p>
                Vercel Inc.
                <br />
                440 N Barranca Ave #4133
                <br />
                Covina, CA 91723
                <br />
                USA
              </p>
            </LegalSubsection>
          </LegalSection>

          <LegalSection title="3. Allgemeine Hinweise und Pflichtinformationen">
            <LegalSubsection title="Datenschutz">
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <p>
                Wenn Sie diese Website benutzen, werden verschiedene
                personenbezogene Daten erhoben. Personenbezogene Daten sind
                Daten, mit denen Sie persönlich identifiziert werden können. Die
                vorliegende Datenschutzerklärung erläutert, welche Daten wir
                erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
                welchem Zweck das geschieht.
              </p>

              <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet,
                zum Beispiel bei der Kommunikation per E-Mail, Sicherheitslücken
                aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
                durch Dritte ist nicht möglich.
              </p>
            </LegalSubsection>

            <LegalSubsection title="Hinweis zur verantwortlichen Stelle">
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>

              <p>
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

              <p>
                Telefon:{" "}
                <a
                  href="tel:+4915561950565"
                  className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                >
                  +49 15561950565
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

              <p>
                Verantwortliche Stelle ist die natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten, zum
                Beispiel Namen oder E-Mail-Adressen, entscheidet.
              </p>
            </LegalSubsection>

            <LegalSubsection title="Speicherdauer">
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
                Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe
                für die Speicherung Ihrer personenbezogenen Daten haben, zum
                Beispiel steuer- oder handelsrechtliche Aufbewahrungsfristen. Im
                letztgenannten Fall erfolgt die Löschung nach Fortfall dieser
                Gründe.
              </p>
            </LegalSubsection>

            <LegalSubsection title="Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website">
              <p>
                Sofern Sie in die Datenverarbeitung eingewilligt haben,
                verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
                Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO,
                sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung
                in die Übertragung personenbezogener Daten in Drittstaaten
                erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49
                Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies
                oder in den Zugriff auf Informationen in Ihr Endgerät, zum
                Beispiel via Device-Fingerprinting, eingewilligt haben, erfolgt
                die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1
                TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre
                Daten zur Vertragserfüllung oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
                Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
                verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer
                rechtlichen Verpflichtung erforderlich sind, auf Grundlage von
                Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner
                auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1
                lit. f DSGVO erfolgen. Über die jeweils im Einzelfall
                einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen
                dieser Datenschutzerklärung informiert.
              </p>
            </LegalSubsection>

            <LegalSubsection title="Empfänger von personenbezogenen Daten">
              <p>
                Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit
                verschiedenen externen Stellen zusammen. Dabei ist teilweise auch
                eine Übermittlung von personenbezogenen Daten an diese externen
                Stellen erforderlich. Wir geben personenbezogene Daten nur dann
                an externe Stellen weiter, wenn dies im Rahmen einer
                Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu
                verpflichtet sind, zum Beispiel Weitergabe von Daten an
                Steuerbehörden, wenn wir ein berechtigtes Interesse nach Art. 6
                Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine
                sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim
                Einsatz von Auftragsverarbeitern geben wir personenbezogene
                Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags
                über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen
                Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung
                geschlossen.
              </p>
            </LegalSubsection>

            <LegalSubsection title="Widerruf Ihrer Einwilligung zur Datenverarbeitung">
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                ausdrücklichen Einwilligung möglich. Sie können eine bereits
                erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                Widerruf unberührt.
              </p>
            </LegalSubsection>

            <LegalSubsection title="Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)">
              <p className="font-semibold uppercase text-white/78">
                Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit.
                e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus
                Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen
                die Verarbeitung Ihrer personenbezogenen Daten Widerspruch
                einzulegen; dies gilt auch für ein auf diese Bestimmungen
                gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen
                eine Verarbeitung beruht, entnehmen Sie dieser
                Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir
                Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten,
                es sei denn, wir können zwingende schutzwürdige Gründe für die
                Verarbeitung nachweisen, die Ihre Interessen, Rechte und
                Freiheiten überwiegen oder die Verarbeitung dient der
                Geltendmachung, Ausübung oder Verteidigung von
                Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
              </p>

              <p className="font-semibold uppercase text-white/78">
                Werden Ihre personenbezogenen Daten verarbeitet, um
                Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit
                Widerspruch gegen die Verarbeitung Sie betreffender
                personenbezogener Daten zum Zwecke derartiger Werbung
                einzulegen; dies gilt auch für das Profiling, soweit es mit
                solcher Direktwerbung in Verbindung steht. Wenn Sie
                widersprechen, werden Ihre personenbezogenen Daten anschließend
                nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch
                nach Art. 21 Abs. 2 DSGVO).
              </p>
            </LegalSubsection>

            <LegalSubsection title="Beschwerderecht bei der zuständigen Aufsichtsbehörde">
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
                Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
                Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
                oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
                besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                gerichtlicher Rechtsbehelfe.
              </p>
            </LegalSubsection>

            <LegalSubsection title="Recht auf Datenübertragbarkeit">
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erfüllung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem gängigen,
                maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                direkte Übertragung der Daten an einen anderen Verantwortlichen
                verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>
            </LegalSubsection>

            <LegalSubsection title="Auskunft, Berichtigung und Löschung">
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
                auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
                weiteren Fragen zum Thema personenbezogene Daten können Sie sich
                jederzeit an uns wenden.
              </p>
            </LegalSubsection>

            <LegalSubsection title="Recht auf Einschränkung der Verarbeitung">
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Hierzu können Sie sich
                jederzeit an uns wenden. Das Recht auf Einschränkung der
                Verarbeitung besteht in folgenden Fällen:
              </p>

              <LegalList>
                <li>
                  Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                  personenbezogenen Daten bestreiten, benötigen wir in der Regel
                  Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben
                  Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </li>

                <li>
                  Wenn die Verarbeitung Ihrer personenbezogenen Daten
                  unrechtmäßig geschah/geschieht, können Sie statt der Löschung
                  die Einschränkung der Datenverarbeitung verlangen.
                </li>

                <li>
                  Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen,
                  Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung
                  von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                  Löschung die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </li>

                <li>
                  Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                  eingelegt haben, muss eine Abwägung zwischen Ihren und unseren
                  Interessen vorgenommen werden. Solange noch nicht feststeht,
                  wessen Interessen überwiegen, haben Sie das Recht, die
                  Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                  verlangen.
                </li>
              </LegalList>

              <p>
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
                abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
                Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
                der Rechte einer anderen natürlichen oder juristischen Person
                oder aus Gründen eines wichtigen öffentlichen Interesses der
                Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
              </p>
            </LegalSubsection>

            <LegalSubsection title="SSL- bzw. TLS-Verschlüsselung">
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
                oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
                erkennen Sie daran, dass die Adresszeile des Browsers von
                „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in
                Ihrer Browserzeile.
              </p>

              <p>
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
                Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
                werden.
              </p>
            </LegalSubsection>

            <LegalSubsection title="Widerspruch gegen Werbe-E-Mails">
              <p>
                Der Nutzung von im Rahmen der Impressumspflicht
                veröffentlichten Kontaktdaten zur Übersendung von nicht
                ausdrücklich angeforderter Werbung und Informationsmaterialien
                wird hiermit widersprochen. Die Betreiber der Seiten behalten
                sich ausdrücklich rechtliche Schritte im Falle der unverlangten
                Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
              </p>
            </LegalSubsection>
          </LegalSection>

          <LegalSection title="4. Datenerfassung auf dieser Website">
            <LegalSubsection title="Server-Log-Dateien">
              <p>
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in so genannten Server-Log-Dateien, die Ihr
                Browser automatisch an uns übermittelt. Dies sind:
              </p>

              <LegalList>
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </LegalList>

              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen.
              </p>

              <p>
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
                1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
                Interesse an der technisch fehlerfreien Darstellung und der
                Optimierung seiner Website – hierzu müssen die Server-Log-Files
                erfasst werden.
              </p>
            </LegalSubsection>

            <LegalSubsection title="Kontaktformular">
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der effektiven
                Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit.
                f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
                DSGVO) sofern diese abgefragt wurde; die Einwilligung ist
                jederzeit widerrufbar.
              </p>

              <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
                zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt, zum Beispiel nach abgeschlossener
                Bearbeitung Ihrer Anfrage. Zwingende gesetzliche Bestimmungen –
                insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </LegalSubsection>

            <LegalSubsection title="Anfrage per E-Mail, Telefon oder Telefax">
              <p>
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
                Ihre Anfrage inklusive aller daraus hervorgehenden
                personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der effektiven
                Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit.
                f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
                DSGVO) sofern diese abgefragt wurde; die Einwilligung ist
                jederzeit widerrufbar.
              </p>

              <p>
                Die von Ihnen an uns per Kontaktanfragen übersandten Daten
                verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
                Einwilligung zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt, zum Beispiel nach abgeschlossener
                Bearbeitung Ihres Anliegens. Zwingende gesetzliche Bestimmungen
                – insbesondere gesetzliche Aufbewahrungsfristen – bleiben
                unberührt.
              </p>
            </LegalSubsection>

            <p className="pt-4 text-sm text-white/42">
              Quelle:{" "}
              <a
                href="https://www.e-recht24.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 underline decoration-white/30 underline-offset-4 transition hover:text-white hover:decoration-white"
              >
                https://www.e-recht24.de
              </a>
            </p>
          </LegalSection>
        </div>
      </section>
    </main>
  );
}