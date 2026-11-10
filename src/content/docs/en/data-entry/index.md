---
title: "DNS Data Entry"
description: "User guide to prices, orders, ticket sales, trail checks and KP."
---

DNS Data Entry collects seasonal operational data for Dolomiti NordicSki organisations and reporting areas. Use it to enter and check data; use [Flyer Studio](../flyer-studio/) to produce a designed price list.

## Before you start

1. Open Data Entry through DNS Workspace or its sign-in screen and use your DNS Identity account and password.
2. Check the **season**, **reporting area** and **organisation** before changing anything. You see only the modules and scopes enabled for your account.
3. The application interface supports IT and DE. This English guide uses the Italian button names so you can find the actual controls. Changing the guide language does not change application permissions.
4. **Sola lettura** means read-only. If a scope is missing, ask your DNS contact to have the account checked.

Selecting an area does not grant additional access. **Orders and sales are different records:** ordering materials does not record a ticket sale.

## Quick route

| You need to… | Open… | Finish with… |
|---|---|---|
| Review seasonal configuration | Setup stagione | Check the correct season |
| Set prices, if authorised | Tariffe | Salva in Firebase |
| Order tickets, wristbands or Pocketfolders | Ordini → Ordini stagionali | Salva bozza; Invia ordine when final |
| Report actual ticket sales | Vendite biglietti | Salva in Firebase |
| Report seasonal trail preparation | Controllo piste | Salva on each trail |
| Enter KP observations | KP | Salva dati KP |

Available historical seasons have their own viewing path. Do not treat them as a new editable season.

## Configure prices

This task requires a specific price-management permission.

1. Open **Tariffe** and check the season.
2. Review **Tariffe DNS** and **Tariffe area**. Select the right product, period and sales channel.
3. Enter **Prezzo** and, where applicable, **Valore contabile**. These are separate fields.
4. Use **Override organizzazione** only for an agreed exception. The priority is organisation → area → DNS.
5. Click **Salva in Firebase** and wait for confirmation.

**Save prices before sales.** A value changed only in the form is not yet an officially saved price. When checking a price change in Flyer Studio, also check the price's season, area, channel and period.

## Enter seasonal orders

1. Open **Ordini → Ordini stagionali**.
2. Select **Braccialetti** (wristbands), **Settimanali & stagionali** (weekly and season tickets) or **Pocketfolder**.
3. Under **I miei ordini**, enter quantities for the organisations you may edit. DNS administrators may have the full matrix.
4. Check totals, variant or edition and, for Pocketfolders, the delivery address.
5. Use **Salva bozza** to save without submitting.
6. When the entries are final, select **Invia ordine**. Check each organisation's status: they are saved separately.

After submission, an area operator's order is locked. Contact DNS for a correction; do not create a duplicate to work around the lock.

**Blank is not zero.** A blank cell does not report a quantity; `0` explicitly reports that nothing is ordered. Wristband colours belong to the seasonal catalogue. Screen swatches are not production colour specifications for a printer.

### Print and share with suppliers

DNS administrators can use **Stampa** and the matrix-sharing functions. Changes must be saved before creating or updating a link. The link presents a read-only snapshot of the information the supplier needs, not access to internal orders.

A later matrix change should not be assumed to have reached the supplier: update the share. Revoking a link blocks online reading but does not recall copies or printouts already downloaded. Check category, season and totals in print preview.

### Collective-order limitation

**Ordini collettivi** is separate from seasonal ordering. In the documented version, **Salva intestazione** saves the project, supplier and document references. **Items and allocations remain local and are not saved with the header.** Do not use this section as a complete procurement archive or a final accounting document.

## Report ticket sales

1. Open **Vendite biglietti** and select the correct context.
2. Check product, period, channel and the applied price.
3. Enter **Biglietti venduti**. Leave a quantity blank only when it is not yet reported; use `0` to report no sales.
4. Review calculated revenue. Enter **Ricavo dichiarato** only to make an adjustment, and complete **Motivo della rettifica**.
5. Resolve incomplete rows or **Tariffa mancante**, then click **Salva in Firebase**.
6. Use **Ricarica dati** to check the values actually recorded.

Saved rows retain a price snapshot. An edited row uses the current price and may be rejected if prices changed in the meantime. Do not simply clear a saved quantity to represent a correction: change the value as appropriate and check the result. Reloading discards unsaved changes.

## Complete the trail check

This is a seasonal declaration, separate from the automatic daily history of open or groomed kilometres.

1. Open **Controllo piste** within your scope.
2. Select **Aggiungi pista** and enter the trail name and total kilometres.
3. For **Preparata entro 8 dicembre** (prepared by 8 December) and **Preparata dal 23 dicembre** (prepared from 23 December), select **Sì**, **Parziale**, **No** or **Da compilare**.
4. If the answer is partial, enter the unique prepared kilometres for that observation.
5. Enter a closing date and notes where relevant.
6. Click **Salva** on each trail card. Adding a card does not automatically save it.

Do not copy last season's values as current observations. If a conflict occurs, note changes you still need and use **Ricarica dati**.

## Enter KP data

1. Open **KP** and check the area, partner and observation dates.
2. Enter **Km rete fisici / unici** (physical, unique network length) and **Km potenziali operativi** (operational potential length).
3. For each date, complete **Aperti km** and **KS km**. KS means kilometres on artificial snow and cannot exceed open kilometres. The form calculates natural-snow kilometres, **NS km**, and the indicators.
4. Check **Includi nel calcolo KP area / FAIR**. Give a reason if excluding a record; do not exclude records merely to hide incomplete data.
5. Add necessary notes and click **Salva dati KP**.

Only authorised users can manage observation milestones or validate area candidates. Confirmed records may be locked; further saves of editable records create revisions. A KP candidate or draft is not a finally approved FAIR result.

## Check saving and resolve errors

| What you see | What to do |
|---|---|
| Disabled button or Sola lettura | Check permissions, record status and required fields; ask DNS about a missing scope |
| Missing or outdated price | Have the correct price checked and saved first, then reload sales |
| Another user changed the data | Note unsaved changes, reload and continue from the current values |
| Error during a multi-row save | Do not assume that nothing was saved: reload and check which rows succeeded |
| Confirmed record or submitted order | Ask DNS for the correction procedure |
| Access or connection error | Check your session and connection; send the exact error to support |

The general **Verifica** section is prepared in the interface but does not provide a complete general approval workflow in the documented version. Its presence, or a successful save alone, is not evidence of final approval.

Contact [info@dolomitinordicski.com](mailto:info@dolomitinordicski.com) with the module, season, area and error message. Do not send passwords or unnecessary personal information.

## Sources and update

Documentary review dated **10 November 2026**, covering Data Entry **0.1.4**, Foundation **1.4.1**. Instructions were checked against the integrated modules; this does not certify your account's access or constitute a test of your production data.

- [README and saving rules](https://github.com/dolomitinordicski/DNS-Data-Entry/blob/ee946d158f06dca746e6c3e154d99a9b4d2f428d/README.md) — its Foundation reference predates the installed package.
- [Modules and application paths](https://github.com/dolomitinordicski/DNS-Data-Entry/blob/ee946d158f06dca746e6c3e154d99a9b4d2f428d/src/App.tsx).
- [Order contract](https://github.com/dolomitinordicski/dns-shared-data/blob/ea2022c65a0e8d085ce071744dbe1169b384259c/docs/DNS-Order-Persistence-v0.4.md).
- [Sharing and print contract](https://github.com/dolomitinordicski/dns-shared-data/blob/ea2022c65a0e8d085ce071744dbe1169b384259c/docs/DNS-Public-Order-Sharing-Print-v1.md).
