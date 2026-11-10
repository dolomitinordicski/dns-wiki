---
title: "DNS Data Entry"
description: "Bedienungsanleitung für Tarife, Bestellungen, Verkäufe, Loipenkontrolle und KP."
---

DNS Data Entry erfasst die saisonalen Betriebsdaten der Organisationen und Gebiete von Dolomiti NordicSki. Hier trägst du Daten ein und prüfst sie. Für die grafische Gestaltung einer Preisliste verwende [Flyer Studio](../flyer-studio/).

## Bevor du beginnst

1. Öffne Data Entry über DNS Workspace oder die Anmeldeseite und melde dich mit deinem DNS-Identity-Konto und Passwort an.
2. Prüfe vor jeder Änderung **Saison**, **Gebiet** und **Organisation**. Sichtbar sind nur freigeschaltete Module und Zuständigkeitsbereiche.
3. Wähle IT oder DE in der Anwendung. Die Sprache dieser Anleitung verändert weder die Anwendungssprache noch deine Berechtigungen.
4. Bei **Nur Lesen** kannst du Daten ansehen, aber nicht ändern. Fehlt ein Bereich, bitte die DNS-Ansprechperson, das Konto zu prüfen.

Die Gebietsauswahl erteilt keine zusätzlichen Rechte. **Bestellungen** und **Verkäufe** sind getrennte Daten: Bestelltes Material gilt nicht als verkauftes Ticket.

## Schnell zum richtigen Modul

| Du möchtest… | Öffne… | Abschließen mit… |
|---|---|---|
| Saisonkonfiguration ansehen | Saison-Setup | Richtige Saison prüfen |
| Berechtigte Tarifänderungen vornehmen | Tarife | In Firebase speichern |
| Tickets, Armbänder oder Pocketfolder bestellen | Bestellungen → Saisonbestellungen | Entwurf speichern; endgültige Bestellung absenden |
| Tatsächliche Ticketverkäufe melden | Ticket-Verkäufe | In Firebase speichern |
| Saisonale Loipenpräparierung melden | Loipenkontrolle | Für jede Loipe speichern |
| KP-Erhebungen eintragen | KP | KP-Daten speichern |

Verfügbare historische Saisonen werden im eigenen Lesebereich angezeigt. Behandle sie nicht wie eine neue, bearbeitbare Saison.

## Tarife konfigurieren

Dafür ist eine ausdrückliche Berechtigung zur Tarifverwaltung erforderlich.

1. Öffne **Tarife** und kontrolliere die Saison.
2. Prüfe **DNS-Tarife** und **Gebietstarife**. Wähle das richtige Produkt, die Periode und den Kanal.
3. Trage den **Preis** und gegebenenfalls den **Abrechnungswert** ein. Es handelt sich um verschiedene Felder.
4. Verwende **Organisations-Overrides** nur für vereinbarte Ausnahmen. Die Priorität lautet Organisation → Gebiet → DNS.
5. Klicke auf **In Firebase speichern** und warte auf die Bestätigung.

**Speichere die Tarife vor den Verkäufen.** Eine Änderung, die nur im Formular steht, ist noch kein gespeicherter offizieller Tarif. Prüfe bei einer Preisänderung für Flyer Studio auch Saison, Gebiet, Kanal und Periode.

## Saisonbestellungen erfassen

1. Öffne **Bestellungen → Saisonbestellungen**.
2. Wähle **Armbänder**, **Wochen- & Saisonkarten** oder **Pocketfolder**.
3. Trage unter **Meine Bestellungen** die Mengen für die freigeschalteten Organisationen ein. DNS kann die Gesamtmatrix sehen.
4. Prüfe Summen, Variante oder Ausgabe und bei Pocketfoldern die Lieferadresse.
5. Mit **Entwurf speichern** sicherst du den Arbeitsstand, ohne die Bestellung abzusenden.
6. Sind alle Angaben endgültig, wähle **Bestellung absenden**. Kontrolliere den Status jeder Organisation: Die Speichervorgänge sind getrennt.

Nach dem Absenden ist die Bestellung für den Gebietsoperator gesperrt. Bitte DNS um eine Korrektur; lege keine zweite Bestellung an, um die Sperre zu umgehen.

**Leer ist nicht gleich null.** Ein leeres Feld enthält keine Mengenmeldung; `0` meldet ausdrücklich, dass nichts bestellt wird. Armbandfarben gehören zum saisonalen Katalog. Die Farbvorschau am Bildschirm ist keine verbindliche Druckfarbspezifikation.

### Drucken und mit Lieferanten teilen

DNS-Administratoren können **Drucken** und die Freigabefunktionen der Matrix verwenden. Vor dem Erstellen oder Aktualisieren eines Links müssen Änderungen gespeichert sein. Der Link zeigt einen schreibgeschützten Stand der benötigten Lieferantendaten und öffnet keinen Zugang zu internen Bestellungen.

Nachträgliche Matrixänderungen gelten nicht automatisch als mitgeteilt: Aktualisiere die Freigabe. Ein widerrufener Link ist online nicht mehr lesbar; bereits heruntergeladene Kopien oder Ausdrucke werden dadurch nicht zurückgerufen. Prüfe Kategorie, Saison und Summen vor dem Druck.

### Grenze der Sammelbestellungen

**Sammelbestellungen** sind von den Saisonbestellungen getrennt. In der dokumentierten Version speichert **Bestellkopf speichern** Projekt, Lieferant und Belegreferenzen. **Artikel und Zuordnungen bleiben lokal und werden nicht mit dem Bestellkopf gespeichert.** Verwende diesen Bereich nicht als vollständiges Beschaffungsarchiv oder endgültigen Buchungsbeleg.

## Ticketverkäufe melden

1. Öffne **Ticket-Verkäufe** und wähle den richtigen Kontext.
2. Prüfe Produkt, Periode, Kanal und angewandten Tarif.
3. Trage die **Verkauften Tickets** ein. Leer bedeutet noch nicht gemeldet; `0` bedeutet ausdrücklich keine Verkäufe.
4. Kontrolliere den berechneten Umsatz. Trage **Gemeldeter Umsatz** nur als Korrektur ein und ergänze die **Begründung der Abweichung**.
5. Behebe unvollständige Zeilen und **Tarif fehlt**, danach **In Firebase speichern**.
6. Prüfe die tatsächlich gespeicherten Angaben mit **Neu laden**.

Gespeicherte Zeilen behalten ihren Preis-Snapshot. Änderungen verwenden den aktuellen Tarif und können abgelehnt werden, wenn sich Preise zwischenzeitlich geändert haben. Leere eine bereits gespeicherte Menge nicht einfach, um eine Korrektur darzustellen. Ändere den Wert sachgerecht und prüfe das Ergebnis. Ungespeicherte Änderungen gehen beim Neuladen verloren.

## Loipenkontrolle ausfüllen

Diese saisonale Meldung ist von der automatischen täglichen Historie geöffneter oder präparierter Kilometer getrennt.

1. Öffne **Loipenkontrolle** im eigenen Zuständigkeitsbereich.
2. Wähle **Loipe hinzufügen** und trage Name und Gesamtkilometer ein.
3. Wähle für **Bis 8. Dezember präpariert** und **Ab 23. Dezember präpariert** jeweils **Ja**, **Teilweise**, **Nein** oder **Nicht gemeldet**.
4. Bei **Teilweise** trage die präparierten Einzelkilometer der jeweiligen Erhebung ein.
5. Ergänze gegebenenfalls Schließungsdatum und Notizen.
6. Klicke bei jeder Loipe auf **Speichern**. Das Hinzufügen einer Karte speichert sie noch nicht.

Übernimm Vorjahreswerte nicht als aktuelle Erhebung. Bei einem Konflikt notiere noch benötigte Änderungen und verwende **Daten neu laden**.

## KP-Daten erfassen

1. Öffne **KP** und kontrolliere Gebiet, Partner und Stichtage.
2. Erfasse **Physische / eindeutige Netz-km** und **Operative Potenzial-km**.
3. Trage pro Stichtag **Geöffnet km** und **KS km** ein. KS steht für Kilometer auf Kunstschnee und darf die geöffneten Kilometer nicht übersteigen. **NS km** und die Kennzahlen berechnet das Formular.
4. Prüfe **In Regions-KP / FAIR einbeziehen**. Eine Ausnahme braucht eine Begründung; schließe keine Datensätze aus, nur um unvollständige Angaben auszublenden.
5. Ergänze nötige Notizen und klicke auf **KP-Daten speichern**.

Nur berechtigte Personen dürfen Stichtage verwalten oder Gebietskandidaten validieren. Bestätigte Datensätze können gesperrt sein; weitere Speicherungen bearbeitbarer Daten erzeugen Revisionen. Ein KP-Kandidat oder Entwurf ist kein endgültig genehmigtes FAIR-Ergebnis.

## Speicherung prüfen und Fehler beheben

| Anzeige | Vorgehen |
|---|---|
| Deaktivierter Knopf oder Nur Lesen | Rechte, Datensatzstatus und Pflichtfelder prüfen; fehlenden Bereich mit DNS klären |
| Fehlender oder veralteter Tarif | Zuerst den richtigen Tarif prüfen und speichern lassen, dann Verkäufe neu laden |
| Daten wurden von jemand anderem geändert | Ungespeicherte Änderungen notieren, neu laden und mit dem aktuellen Stand weiterarbeiten |
| Fehler beim Speichern mehrerer Zeilen | Nicht von einem vollständigen Abbruch ausgehen: neu laden und erfolgreich gespeicherte Zeilen prüfen |
| Bestätigter Datensatz oder abgesendete Bestellung | Korrekturverfahren mit DNS klären |
| Zugriffs- oder Verbindungsfehler | Sitzung und Verbindung prüfen; genaue Fehlermeldung an den Support geben |

Der allgemeine Bereich **Prüfung** ist in der Oberfläche vorbereitet, bietet in der dokumentierten Version aber keinen vollständigen allgemeinen Freigabeprozess. Seine Anzeige und ein einfaches Speichern sind kein Nachweis einer endgültigen Genehmigung.

Hilfe: [info@dolomitinordicski.com](mailto:info@dolomitinordicski.com). Nenne Modul, Saison, Gebiet und Fehlermeldung. Sende keine Passwörter oder unnötigen personenbezogenen Daten.

## Quellen und Aktualisierung

Dokumentationsprüfung vom **10. November 2026** für Data Entry **0.1.4**, Foundation **1.4.1**. Die Schritte wurden mit den integrierten Modulen abgeglichen; sie bestätigen weder deine Kontofreigabe noch einen Test deiner Produktionsdaten.

- [README und Speicherregeln](https://github.com/dolomitinordicski/DNS-Data-Entry/blob/ee946d158f06dca746e6c3e154d99a9b4d2f428d/README.md) — die Foundation-Angabe im README ist älter als das installierte Paket.
- [Module und Anwendungswege](https://github.com/dolomitinordicski/DNS-Data-Entry/blob/ee946d158f06dca746e6c3e154d99a9b4d2f428d/src/App.tsx).
- [Bestellvertrag](https://github.com/dolomitinordicski/dns-shared-data/blob/ea2022c65a0e8d085ce071744dbe1169b384259c/docs/DNS-Order-Persistence-v0.4.md).
- [Vertrag zu Freigabe und Druck](https://github.com/dolomitinordicski/dns-shared-data/blob/ea2022c65a0e8d085ce071744dbe1169b384259c/docs/DNS-Public-Order-Sharing-Print-v1.md).
