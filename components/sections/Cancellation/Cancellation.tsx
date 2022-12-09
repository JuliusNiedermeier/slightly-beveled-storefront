import { Container } from "~/components/layout/Container/Container";
import { Typography } from "~/components/shared/Typography/Typography";
import styles from "./Cancellation.module.css";

export const Cancellation = () => {
  return (
    <Container>
      <div className={styles.document}>
        <Typography type="heading-md">Rücksendungen</Typography>
        <div>
          <Typography type="generic-bold">
            Unser Rückgaberecht gilt für 30 Tage.
          </Typography>
        </div>
        <div>
          <Typography type="generic">
            Wenn Ihr Kauf mehr als 30 Tage zurück liegt, können wir Ihnen leider
            keine Rückerstattung und keinen Umtausch anbieten. Um für eine
            Rücksendung infrage zu kommen, muss Ihr Artikel unbenutzt und in
            demselben Zustand sein, in dem Sie ihn erhalten haben. Der Artikel
            muss sich zudem in der Originalverpackung befinden.
          </Typography>
        </div>
        <div>
          <Typography type="generic">
            Um Ihre Rückgabe abzuschließen, benötigen wir eine Quittung oder
            einen Kaufbeleg.
          </Typography>
        </div>
        <div>
          <Typography type="generic">
            In bestimmten Situationen werden nur teilweise Rückerstattungen
            gewährt
          </Typography>
          <ul>
            <li>
              <Typography type="generic">
                Artikel mit offensichtlichen Gebrauchspuren
              </Typography>
            </li>
            <li>
              <Typography type="generic">
                Artikel, die sich nicht mehr im Originalzustand befinden,
                beschädigt sind oder bei denen Teile aus Gründen fehlen, die
                nicht auf unseren Fehler zurückzuführen sind.
              </Typography>
            </li>
            <li>
              <Typography type="generic">
                Artikel, die nach Ablauf von 30 Tagen ab Lieferung
                zurückgesendet werden.
              </Typography>
            </li>
          </ul>
        </div>
        <div>
          <Typography type="heading-md">Rückerstattungen</Typography>
        </div>
        <div>
          <Typography type="generic">
            Wenn wir Ihre Rücksendung erhalten und kontrolliert haben, senden
            wir Ihnen eine E-Mail zu, um Sie zu informieren, dass wir den von
            Ihnen zurückgegebenen Artikel erhalten haben. Wir werden Sie auch
            über die Genehmigung oder Ablehnung Ihrer Rückerstattung
            informieren. Wenn Ihre Rückerstattung genehmigt wurde, wird sie
            bearbeitet. Nach einigen Tagen erfolgt dann automatisch eine
            Gutschrift auf Ihre Kreditkarte oder die ursprüngliche
            Zahlungsmethode.
          </Typography>
        </div>
        <div>
          <Typography type="generic-bold">
            Verspätete oder fehlende Rückerstattungen
          </Typography>
        </div>
        <div>
          <Typography type="generic">
            Wenn Sie noch keine Rückerstattung erhalten haben, überprüfen Sie
            zunächst noch einmal Ihr Bankkonto. Kontaktieren Sie anschließend
            Ihr Kreditkartenunternehmen. Es kann einige Zeit dauern, bis Ihre
            Rückerstattung gutgeschrieben wird. Wenden Sie sich als Nächstes an
            Ihre Bank. Es gibt häufig eine Bearbeitungszeit, bis eine
            Rückerstattung auf Ihr Konto gebucht wird.
          </Typography>
        </div>
        <div>
          <Typography type="generic">
            Wenn Sie all dies getan haben und noch immer keine Rückerstattung
            erhalten haben, kontaktieren Sie uns bitte unter
            resosogiha@gotgel.org.
          </Typography>
        </div>
        <div>
          <Typography type="generic-bold">Angebotsartikel</Typography>
        </div>
        <div>
          <Typography type="generic">
            Eine Rückerstattung kann nur für Artikel mit regulärem Preis
            erfolgen, Angebotsartikel sind von der Rückerstattung leider
            ausgeschlossen.
          </Typography>
        </div>
        <div>
          <Typography type="generic-bold">Umtausch</Typography>
        </div>
        <div>
          <Typography type="generic">
            Ein Umtausch wird nur für defekte oder beschädigte Artikel gewährt.
            Wenn Sie einen Artikel gegen den gleichen Artikel umtauschen
            möchten, senden Sie uns eine E-Mail an info@slightly-beveled.com und
            schicken Sie den Artikel an: Moosdorfstraße 10, 12435 Berlin,
            Deutschland.
          </Typography>
        </div>
        <div>
          <Typography type="generic-bold">Versand</Typography>
        </div>
        <div>
          <Typography type="generic">
            Um Ihr Produkt zurückzugeben, sollten Sie Ihr Produkt an:
            Moosdorfstraße 10, 12435 Berlin, Deutschland senden. Sie müssen die
            Versandkosten für die Rücksendung Ihres Artikels selbst tragen.
            Versandkosten können nicht erstattet werden. Wenn Sie eine
            Rückerstattung erhalten, werden die Versandkosten für die
            Rücksendung von Ihrer Rückerstattung abgezogen.
          </Typography>
        </div>
        <div>
          <Typography type="generic">
            Die Zeit, die es dauert, bis der umgetauschte Artikel bei Ihnen
            eintrifft, kann je nach Land, in dem Sie wohnhaft sind, variieren.
            Wenn Sie einen Artikel im Wert von über 75€ verschicken, sollten Sie
            einen Versanddienst mit Sendungsverfolgung oder den Abschluss einer
            Versandversicherung in Betracht ziehen. Wir können nicht
            garantieren, dass wir den von Ihnen zurückgegebenen Artikel erhalten
            werden.
          </Typography>
        </div>
      </div>
    </Container>
  );
};
