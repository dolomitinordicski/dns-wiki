---
title: "DNS Flyer Studio"
description: "User guide to creating flyers, using shared prices and exporting PDF and PNG files."
---

DNS Flyer Studio prepares visual materials from DNS templates and shared data. Select an enabled template, edit its permitted fields and check the preview before exporting. Correct official prices in [Data Entry](../data-entry/), not by inserting replacement text in a flyer.

## Sign in and check the context

1. Open Flyer Studio through DNS Workspace or its sign-in screen.
2. Sign in to DNS Identity with your email and password. **Accedi con Google** is also available for authorised accounts.
3. Wait for permissions, available templates and the saved document to load.
4. Check the area and flyer type before editing.

Being signed in does not grant access to every document. Area operators need an area-specific authorisation; organisation membership alone does not automatically grant access to area documents. If the area is ambiguous or unavailable, ask DNS to check the account.

The interface supports **IT and DE**; document languages are **DE, IT and EN**. This guide uses Italian control names where useful. Changing the interface language does not automatically translate entered text.

## Quick workflow

1. In **Flyer**, select an available template.
2. Complete **Contenuti** (content) and check the document language.
3. If supported, select or upload the main **Immagine** (image).
4. Use **Colori** (colours), **Layout** and **QR** within the template's limits.
5. Wait for **Salvato automaticamente in DNS Core ✓**.
6. Check the preview in every language you need.
7. Select **PDF** or **PNG**, then inspect the resulting file.

The area is taken from your authorised context. Templates, styles and block arrangements are not a blank design canvas: some fields or tabs are intentionally restricted.

## Choose the right template

The **Flyer** tab shows only products enabled by DNS. The code's catalogue includes:

| Template | Purpose and responsibility |
|---|---|
| DNS general price list | Centrally managed DNS document; read-only for area operators |
| Regional price list | Your area's prices and content |
| DNS weekly ticket, area weekly ticket, area daily ticket | Three distinct products; each document is rendered in one language at a time |
| Packages and offers | Offer text, editorial prices, services, image and contacts |
| Gift certificate | Holder, validity and document code in the permitted fields |
| Service voucher | Guest, services, validity and offer references |
| Promotion | Promotional content and conditions |

Not every catalogue product must be available to your account. To edit area material, choose **Listino regionale** rather than making an editable copy of the general DNS list.

## Prepare content and languages

- Under **Contenuti**, check the title, description, validity, services and contact fields available for the template.
- Explicitly review DE, IT and EN before distribution. Existing template text does not prove that your own change has been translated.
- Do not change official prices or facts through unrelated editorial fields.
- In **Layout**, use only settings offered for that product. Applying or reopening a template may restore its canonical block order and required elements.
- The main **Immagine** tab is disabled for ticket templates. Additional images or logos supported by the template are managed through **Contenuti**.

Ticket templates and visual proofs do not replace official ticket issuance or validation. A proof marked **DEMO / not valid** is not a usable ticket.

## Check price-list values

DNS prices and regional list prices come from the pricing data saved in Data Entry. Regional **“from” prices** on the general DNS list are editorial values managed by DNS.

If a price is absent, marked unavailable or incorrect:

1. Check the document's season and area.
2. Ask the pricing owner to check product, channel and period in Data Entry and save the correction.
3. Reopen or refresh the flyer and check its preview again.
4. Export only after the check.

Do not replace a missing official price with a sample value from a template. Statements about validity areas and reciprocal acceptance need a confirmed DNS source; a preset alone is not sufficient.

## Select and save an image

1. Open **Immagine**, if available.
2. Select a DNS photo or click **Cambia immagine** and choose an authorised file.
3. Adjust the crop and use **Centra inquadratura** when needed.
4. Wait for upload completion. Accessible assets appear under **Immagini salvate**, and you can reload the list.
5. Check the preview and wait for the flyer itself to be saved as well.

**Seeing a photo does not mean it is saved.** If a temporary-preview warning or upload error appears, the image can disappear on reload. Do not close your work assuming the upload succeeded.

If only the library listing is unavailable, images already associated with the flyer may remain usable. A listing error alone does not prove that the document is lost. For a denied upload, have permissions checked; do not bypass them with embedded image data or unauthorised copies. Use photos with the required usage rights and retain required credits.

## Add a QR code

Under **QR**, enable the code where supported, enter the real destination URL and check the caption. If the template places these fields under **Contenuti**, use them there.

- Open the address and check that it is correct and accessible to the intended recipient.
- Check the language and validity of the linked content.
- Scan the QR code in the final PDF or PNG too.

The application does not invent an official destination. A sample URL, QR image or DEMO code does not certify issuance or service validity.

## Understand saving status

| Status | Meaning |
|---|---|
| Saved on device / sign-in required | Not confirmation of a DNS Core save |
| Changes waiting for synchronisation | Some changes have not yet been recorded |
| Saving to DNS Core | Wait for completion |
| Salvato automaticamente in DNS Core ✓ | Cloud saving has been confirmed |
| Cloud-save error | The draft is not confirmed saved; retain the message and resolve the error |

Autosave requires sign-in, write permission and a safely loaded document. If **Impossibile caricare in sicurezza il flyer** appears, saving is blocked to protect existing data. Use **Riprova** or contact support. Do not replace the document with a sample just to dismiss the error.

**A saved draft, an exported file and a publication are different things.** The DNS contract separates a working document from its immutable publication snapshot. Corrections require a new publication and the appropriate permissions.

## Export and share

### PDF

1. Click **PDF**.
2. For price lists, use **Stampa PDF / Salva come PDF**.
3. For other templates, choose **PDF unico · 3 lingue (DE / IT / EN)** or an individual language where available.
4. In the browser's print dialog, select **Save as PDF** or the intended printer.
5. Check format, orientation, page count, images, prices, contacts and QR code in the final file.

PDF uses the browser's vector-print engine. Options depend on document type; a price list does not necessarily offer the same menu as a promotional flyer.

### PNG and Condividi

**PNG** produces image files: choose one language or the three DE/IT/EN images where offered. A raster PNG is not a vector PDF.

**Condividi** prepares text, links and social-network or device-sharing tools. Check the link and download the image if it must be attached. Opening a social service does not confirm that a recipient received the file and does not automatically publish an official snapshot in DNS Core.

## Common problems

| Problem | What to do |
|---|---|
| Access denied or still being checked | Wait for loading; if it persists, have the account and area checked |
| Flyer unavailable | Check template availability; choose the regional list for local materials |
| General DNS list is read-only | It is centrally managed; request the correction from DNS |
| Price missing | Correct the Data Entry source; do not insert sample values |
| Photo is only temporary | Resolve the upload before reloading or closing |
| PDF/PNG export fails | Check images and layout, then retry without running simultaneous exports |

Contact [info@dolomitinordicski.com](mailto:info@dolomitinordicski.com) with the template, area, language, operation and exact error message. Do not send passwords or unnecessary confidential content.

## Sources and update

Documentary review dated **10 November 2026**, covering Flyer Studio **0.0.4**, Foundation **1.4.1**. Actual availability and permissions depend on DNS configuration; this guide does not replace checking your account.

- [Templates and permitted fields](https://github.com/dolomitinordicski/DNS-Flyer-Studio/blob/97b8b97105238af41e3dd7261cbe48a1c0e88fbd/src/model/flyerProductModel.ts).
- [Editor and saving states](https://github.com/dolomitinordicski/DNS-Flyer-Studio/blob/97b8b97105238af41e3dd7261cbe48a1c0e88fbd/src/components/EditorPanel.tsx).
- [Price lists and ticket products](https://github.com/dolomitinordicski/DNS-Flyer-Studio/blob/97b8b97105238af41e3dd7261cbe48a1c0e88fbd/docs/F7.1-PRICE-LISTS-AND-TICKETS.md) — operational details were checked against code integrated after this document.
- [Data and publication contract](https://github.com/dolomitinordicski/dns-shared-data/blob/ea2022c65a0e8d085ce071744dbe1169b384259c/docs/DNS-Flyer-Data-Domain-v1.md).
