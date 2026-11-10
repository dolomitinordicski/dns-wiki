# DNS Admin Handbook — piano di implementazione

Stato: **proposta tecnica, NON pubblicata e NON protetta da autenticazione**.
Data: 2026-11-10. Nessuna credenziale o valore di secret va inserito in questo repository pubblico.

## Obiettivo

Creare una documentazione amministrativa riservata, raggiungibile dal DNS Workspace e collegata alla DNS Wiki, senza esporre documenti amministrativi nel sito statico GitHub Pages.

## Confine di sicurezza

- `dns-wiki` è un repository pubblico con build statica Astro/Starlight su GitHub Pages. Non inserire file amministrativi in `src/content/docs`, `public`, asset o bundle JS.
- Una voce di navigazione **Admin Handbook** deve essere visibile solo a DNS Admin nel Workspace; questa è una comodità UI, **non** una protezione.
- Il contenuto riservato deve risiedere in uno storage/backend non pubblico, con controllo autorizzativo **server-side** per ogni richiesta.
- Il backend deve verificare l'identità Firebase/Google già in uso nel Workspace, il ruolo DNS Admin da fonte autorevole e l'eventuale revoca. Negare per default; non fidarsi di ruoli inviati dal browser.
- Niente contenuti admin in localStorage, cache pubbliche, CDN o log applicativi; header `Cache-Control: private, no-store` per le risposte sensibili.
- Accesso diretto a URL, API, download e allegati deve essere negato a utenti area, AT, Partner Hub e non autenticati.
- Valutare un archivio GitHub **privato** come sorgente versionata e un backend autenticato come lettore, oppure storage privato equivalente. La sola privacy del repository non protegge un export statico su Pages.
- Nessuna modifica a Firebase IAM, rules, secrets, deployment o main senza verifica e autorizzazione.

## Indice proposto (solo nell'archivio privato)

1. Mappa dell'ecosistema e dipendenze: Foundation, Core, Shared Data, Identity, Workspace, applicazioni.
2. Registro account: identità, tipologia, owner operativo, MFA, recupero, contatti (senza password).
3. Matrice autorizzazioni: Admin, organizzazione, AT, operatori, partner; lettura/scrittura per risorsa.
4. GitHub: organizzazione, repository, owner, GitHub Apps, branch protection, environments, reviewer, CI/CD.
5. Firebase/GCP: progetti e ambienti, Auth, Firestore, Storage, Functions, IAM, service account e confini di accesso.
6. Secrets & Variables: **solo nome, scope, posizione, scopo, consumer, owner, rotazione**, mai valori.
7. Applicazioni: URL, repository, versione, dipendenze, ambienti, responsabili, procedure di test.
8. Integrazioni: LTS, Priot, Contwise, Brevo, Wallet, OpenDataHub e relativi flussi.
9. Operatività: rilascio, rollback, backup, disaster recovery, audit, incident response.
10. Registro decisioni e verifiche: data, fonte, stato verificato/da verificare, responsabile.

## Modello di scheda inventario

| Campo | Significato |
| --- | --- |
| ID e componente | Nome univoco, repository/progetto |
| Funzione | Cosa fa, da chi viene usato |
| Dipendenze | Upstream/downstream |
| Identità | Owner umano / account tecnico |
| Permessi | IAM / ruoli / scope effettivi |
| Configurazione | Percorso esatto nell'interfaccia o nel repository |
| Secrets | **Solo nomi**, posizione e scopo |
| Ambienti | DEV / staging / produzione |
| Deploy | Trigger, approvazione, rollback |
| Fonte e verifica | URL/commit, data, verificato / non verificato |
| Continuità | Backup, sostituto, recupero accesso |

## Inventario preliminare: NON sostituisce audit

- GitHub: `dolomitinordicski/dns-wiki`, `dns-workspace`, `dns-shared-data` risultano pubblici nella ricognizione del 10.11.2026.
- La Wiki usa Astro/Starlight con IT/DE/EN e GitHub Pages.
- Identity/Workspace, Foundation/Core/Shared Data e i tool sono livelli distinti; i loro contratti e le versioni reali vanno ricostruiti dai repository e verificati, non dedotti dal disegno.
- La lettura dei **nomi** di GitHub Actions secrets/variables e delle assegnazioni IAM non è disponibile dalla ricognizione GitHub pubblica: segnare `DA VERIFICARE`, non inventare.
- Account proprietario GitHub e account di review devono essere verificati insieme ai poteri effettivi e alle possibili eccezioni di bypass.

## Collaudo obbligatorio prima del go-live

1. DNS Admin autenticato: elenco e lettura documenti consentiti.
2. Account area e account AT: menu assente **e** API/documenti con risposta 403.
3. Utente anonimo: API/documenti con risposta 401/403.
4. Accesso diretto a URL, allegati e link condivisi: negato.
5. Revoca ruolo Admin: accesso negato dopo aggiornamento token/sessione secondo policy.
6. Verifica che build Pages, sitemap, ricerca Starlight e asset statici **non** contengano il materiale admin.
7. Audit logging degli accessi amministrativi senza riportare dati sensibili.
8. Piano di ripristino e controllo autorizzazioni per deploy.

## Decisioni ancora necessarie

- Archivio privato dedicato e metodo di distribuzione server-side.
- Fonte autorevole del ruolo DNS Admin e durata massima della sessione.
- Responsabile della manutenzione dell'inventario e frequenza di revisione.
- Autorizzazione esplicita per eventuali cambiamenti infrastrutturali.
