import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - Lemke Gebäudereinigung",
  description: "Rechtliche Hinweise und Kontaktinformationen",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://lemke-gebaeudereinigung.de/impressum" },
};

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full h-full services__background">
      <div className="flex justify-center align-center flex-col px-[10vw] gap-8 py-16 text-colorPrimary">
        <section aria-labelledby="company-info">
          <h2 id="company-info" className="text-3xl py-8">
            Unternehmensinformationen
          </h2>
          <p>
            <strong>Name des Unternehmens:</strong> Lemke Gebäudereinigung
          </p>
          <p>
            <strong>Adresse:</strong> Karl-Kellner-Str., 30853 Hannover
          </p>
          <p>
            <strong>Telefon:</strong>{" "}
            <a href="tel:05117900900">+49 511 7-900-900</a>
          </p>
          <p>
            <strong>E-Mail:</strong>{" "}
            <a href="mailto:service@lemke-gebäudereinigung.de">
              service@lemke-gebäudereinigung.de
            </a>
          </p>
          <p>
            <strong>Geschäftsführer:</strong> Wolfgang Lemke
          </p>
        </section>
        {/* <section aria-labelledby="register-legal">
          <h2 id="register-legal" className="text-3xl py-8">
            Handelsregister und rechtliche Informationen
          </h2>
          <p>
            <strong>Handelsregister:</strong> Amtsgericht Musterstadt, HRB 12345
          </p>
        </section> */}
        <section className="">
          <h2 className="text-3xl py-8">Datenschutzerklärung</h2>
          <p>
            <strong>Verantwortlicher</strong>
            <br />
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            Lemke Gebäudereinigung
            <br />
            Vertreten durch Wolfgang Lemke
            <br />
            (Kontaktinformationen finden Sie im Impressum unserer Webseite)
          </p>

          <h2 className="text-3xl py-8">Datenerhebung und -verwendung</h2>
          <p>
            Wir, Lemke Gebäudereinigung, nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst und behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p>
            Auf unserer Webseite werden keine personenbezogenen Daten
            automatisch gesammelt. Persönliche Daten werden nur erhoben und
            gespeichert, wenn Sie diese aktiv über unser Kontaktformular
            eingeben. Diese Daten verwenden wir ausschließlich zur Bearbeitung
            Ihres Anliegens.
          </p>

          <h2 className="text-3xl py-8">Speicherung und Sicherheit</h2>
          <p>
            Die über das Kontaktformular übermittelten Daten werden per E-Mail
            an uns gesendet und zur Bearbeitung Ihres Anliegens gespeichert. Wir
            ergreifen geeignete Sicherheitsmaßnahmen, um sicherzustellen, dass
            Ihre Daten vor unbefugtem Zugriff geschützt sind.
          </p>

          <h2 className="text-3xl py-8">Cookies und lokale Speicherung</h2>
          <p>
            Wir verwenden keine Cookies auf unserer Webseite. Als Maßnahme gegen
            Spam wird lediglich ein Zeitstempel im Local Storage Ihres Browsers
            gespeichert, der es ermöglicht, das Kontaktformular nur jede Stunde
            zu nutzen.
          </p>

          <h2 className="text-3xl py-8">Datenübermittlung</h2>
          <p>
            Die Übermittlung Ihrer Daten erfolgt über das CDN von Netlify, um
            eine sichere und effiziente Bereitstellung unserer Website-Inhalte
            zu gewährleisten. Es findet keine weitere Datenübermittlung an
            Dritte statt.
          </p>

          <h2 className="text-3xl py-8">Ihre Rechte</h2>
          <p>
            Sie haben das Recht, Auskunft über Ihre bei uns gespeicherten
            personenbezogenen Daten, deren Herkunft, den Empfänger und den Zweck
            der Datenverarbeitung zu erhalten. Außerdem haben Sie ein Recht auf
            Berichtigung, Sperrung oder Löschung dieser Daten. Bei weiteren
            Fragen zum Thema personenbezogene Daten können Sie sich jederzeit
            über die im Impressum angegebenen Kontaktdaten an uns wenden.
          </p>

          <h2 className="text-3xl py-8">Kontakt für Datenschutzanfragen</h2>
          <p>
            Fragen zum Datenschutz richten Sie bitte an die im Impressum unserer
            Webseite hinterlegten Kontaktinformationen.
          </p>
        </section>
        <section aria-labelledby="disclaimer">
          <h2 id="disclaimer" className="text-3xl py-8">
            Haftungsausschluss
          </h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
            gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <h2 id="copyright">Copyright</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
