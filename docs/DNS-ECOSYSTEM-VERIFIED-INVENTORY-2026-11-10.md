# DNS Ecosystem — inventario GitHub verificato (ricognizione 2026-11-10)

> **Documento di ricognizione pubblicabile, NON Admin Handbook riservato.** Nessuna credenziale, email privata, valore secret, ruolo IAM sensibile o dettaglio di recupero account. I risultati descrivono repository e file, **non** garantiscono lo stato dei servizi cloud in produzione.

## Repository verificati tramite GitHub API

| Repository | Visibilità al 10.11.2026 | GitHub Pages abilitato | Descrizione repository |
| --- | --- | --- | --- |
| [dns-wiki](https://github.com/dolomitinordicski/dns-wiki) | Pubblico | Sì | DNS Ecosystem documentation |
| [dns-workspace](https://github.com/dolomitinordicski/dns-workspace) | Pubblico | Sì | All in one place |
| [dns-shared-data](https://github.com/dolomitinordicski/dns-shared-data) | Pubblico | Sì | Shared Data & Foundation docs |
| [DNS-Flyer-Studio](https://github.com/dolomitinordicski/DNS-Flyer-Studio) | Pubblico | Sì | DNS Flyer Studio |
| [DNS-Data-Entry](https://github.com/dolomitinordicski/DNS-Data-Entry) | Pubblico | Sì | Database for Advanced Analytics |
| [analytics](https://github.com/dolomitinordicski/analytics) | Pubblico | Sì | DNS Analytics tool |
| [DNS-Faktura](https://github.com/dolomitinordicski/DNS-Faktura) | Pubblico | Sì | Billing & accountability tool |
| [DNS-Polls-tool](https://github.com/dolomitinordicski/DNS-Polls-tool) | Pubblico | Sì | DNS Polls |
| [dns-partner-hub](https://github.com/dolomitinordicski/dns-partner-hub) | Pubblico | Sì | New DNS Partner Portal & Hub |
| [fairmodel](https://github.com/dolomitinordicski/fairmodel) | Pubblico | Sì | Descrizione assente |
| [hub](https://github.com/dolomitinordicski/hub) | Pubblico | Sì | Partner toolbox hub |
| [partnerportal](https://github.com/dolomitinordicski/partnerportal) | Pubblico | Sì | DNS Partnerportal |
| [qrcodegen](https://github.com/dolomitinordicski/qrcodegen) | Pubblico | Sì | QRcodegenerator v.2 |
| [strategy](https://github.com/dolomitinordicski/strategy) | Pubblico | Sì | DNS Vision |

Altri repository visibili nell'elenco GitHub: `360ARtool`, `smartslopes`. Per essi non è stata eseguita in questa ricognizione la verifica separata della visibilità e di Pages.

**Nota:** `has_pages: true` significa che la funzionalità Pages è configurata; **non** dimostra che ogni URL pubblico sia attualmente raggiungibile o che l'ultimo deploy sia riuscito.

## Configurazioni e riferimenti verificati

- `dns-wiki/astro.config.mjs`: Astro/Starlight, base `/dns-wiki/`, lingue italiano/tedesco/inglese, componenti Header/Footer e tema DNS; la navigazione documenta Workspace, Data Entry, Flyer Studio, Analytics, Faktura, Polls, Partner Hub e Digital Pass.
- `dns-workspace/firebase.identity.json`: configurazione emulatori Auth e Firestore con regole upstream usate nei test; non è un inventario dei progetti Firebase reali.
- `dns-workspace/firebase.access.json`: definisce codebase Functions `workspace-access` in `server` e gli emulatori di test; non prova che la funzione sia distribuita.
- `dns-workspace/.env.example`: nomi di configurazione frontend `VITE_DNS_DIGITAL_PASS_API_BASE` e `VITE_DNS_DIGITAL_PASS_PRIVACY_URL`; non sono valori di secret.
- `dns-shared-data/.firebaserc`: progetto Firebase **configurato di default** `dns-core`. Questo non prova la destinazione di ogni workflow né l'assetto staging.
- `dns-shared-data/firebase.json`: Firestore rules `firestore.rules`, Storage rules `storage.rules`, Functions codebase `digital-pass` in `server`. La presenza nel repository non dimostra che siano le versioni attualmente deployate.

## Matrice di verifica da completare nell'archivio privato

| Dominio | Evidenza da acquisire | Stato |
| --- | --- | --- |
| Account GitHub e GitHub Apps | Owner, installazioni, permessi effettivi, account tecnici | Da verificare |
| Ruleset / branch protection | Regole effettive, bypass, review e ambienti per repo | Da verificare |
| Actions secrets & variables | **Nomi e scope**, consumers, owner, rotazione; mai valori | Da verificare con autorizzazioni appropriate |
| Firebase/GCP | Project ID per ambiente, IAM, service accounts, API e deployment | Da verificare in console |
| Firestore | Database, collezioni, regole deployate, indici, backup | Da verificare in console |
| Firebase Authentication | Provider, autorizzazioni e revoca, MFA amministrativa | Da verificare in console |
| Workspace Identity | Fonte autorevole dei ruoli, scope organizzazione/AT e test 403 | Da verificare end-to-end |
| Digital Pass | Staging vs produzione, QR firmati, funzioni, Brevo, wallet | Da verificare end-to-end |
| Wiki Admin | Archivio privato, endpoint autenticato, isolamento contenuti | Non implementato |

## Regole per la documentazione successiva

1. Separare fatti verificati, ipotesi architetturali e scelte da approvare.
2. Ogni scheda riporta data, fonte, ambiente e responsabile.
3. Non inserire mai materiale riservato nella build pubblica della Wiki, inclusi sitemap, ricerca e bundle.
4. Non cambiare GitHub settings, IAM, Firestore rules, deploy o main durante il solo inventario.
