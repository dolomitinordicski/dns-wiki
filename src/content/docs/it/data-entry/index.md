---
title: "DNS Data Entry"
description: "Guida operativa a tariffe, ordini, vendite, controllo piste e KP."
---

DNS Data Entry raccoglie i dati operativi della stagione per le organizzazioni e le aree Dolomiti NordicSki. Usa questa guida per inserire e controllare i dati; per preparare un listino grafico passa a [Flyer Studio](../flyer-studio/).

## Prima di iniziare

1. Accedi da DNS Workspace oppure dalla schermata di Data Entry con il tuo account DNS Identity e la password.
2. Controlla **stagione**, **area** e **organizzazione** prima di modificare dati. Vedi soltanto i moduli e gli ambiti abilitati al tuo account.
3. Scegli IT o DE nell'interfaccia. La lingua della guida non cambia la lingua o i permessi dell'applicazione.
4. Se compare **Sola lettura**, puoi consultare i dati ma non modificarli. Per un ambito mancante chiedi la verifica dell'account al referente DNS.

Il selettore di area non concede nuovi permessi. **Ordini** e **vendite** sono dati diversi: ordinare materiale non registra una vendita.

## Percorso rapido

| Devi… | Apri… | Concludi con… |
|---|---|---|
| Consultare la configurazione stagionale | Setup stagione | Controllo della stagione corretta |
| Impostare i prezzi, se autorizzato | Tariffe | Salva in Firebase |
| Ordinare biglietti, braccialetti o Pocketfolder | Ordini → Ordini stagionali | Salva bozza; Invia ordine quando definitivo |
| Dichiarare i biglietti venduti | Vendite biglietti | Salva in Firebase |
| Dichiarare la preparazione stagionale delle piste | Controllo piste | Salva per ciascuna pista |
| Inserire le rilevazioni KP | KP | Salva dati KP |

Le stagioni storiche disponibili sono consultabili nel percorso dedicato: non trattarle come una nuova stagione modificabile.

## Configurare le tariffe

Questa attività richiede il permesso specifico di gestione prezzi.

1. Apri **Tariffe** e verifica la stagione.
2. Controlla le sezioni **Tariffe DNS** e **Tariffe area**. Seleziona prodotto, periodo e canale corretti.
3. Inserisci il **Prezzo** e, dove previsto, il **Valore contabile**. Sono campi distinti.
4. Usa **Override organizzazione** soltanto per un'eccezione concordata. La priorità è organizzazione → area → DNS.
5. Premi **Salva in Firebase** e attendi il messaggio di conferma.

**Salva le tariffe prima delle vendite.** Una variazione ancora presente soltanto nel modulo non è un prezzo ufficialmente salvato. Per verificare un aggiornamento del listino in Flyer Studio, controlla anche stagione, area, canale e periodo della tariffa.

## Inserire gli ordini stagionali

1. Apri **Ordini → Ordini stagionali**.
2. Scegli **Braccialetti**, **Settimanali & stagionali** oppure **Pocketfolder**.
3. Nel modulo **I miei ordini**, inserisci le quantità per le organizzazioni abilitate. DNS può disporre della matrice complessiva.
4. Controlla totali, variante o edizione e, per i Pocketfolder, l'indirizzo di consegna.
5. Usa **Salva bozza** per conservare il lavoro senza inviarlo.
6. Quando i dati sono definitivi, scegli **Invia ordine**. Verifica lo stato di ogni organizzazione: i salvataggi sono separati.

Dopo l'invio, l'ordine dell'operatore di area risulta bloccato. Per una correzione contatta DNS; non creare un duplicato per aggirare il blocco.

**Vuoto e zero non sono equivalenti.** Una cella vuota non dichiara una quantità; `0` dichiara esplicitamente nessun ordine. I colori dei braccialetti appartengono al catalogo della stagione: il campione a schermo non è una specifica colore per la tipografia.

### Stampa e condivisione con i fornitori

L'amministratore DNS può usare **Stampa** e le funzioni di condivisione della matrice. Prima di creare o aggiornare un link deve salvare le modifiche. Il link espone una fotografia in sola lettura dei dati necessari al fornitore; non dà accesso agli ordini interni.

Una modifica successiva della matrice non va considerata già comunicata: occorre aggiornare la condivisione. Un link revocato non consente più la lettura online, ma la revoca non ritira copie o stampe già scaricate. Prima della stampa controlla categoria, stagione e totali nell'anteprima.

### Limite degli ordini collettivi

La scheda **Ordini collettivi** è separata dagli ordini stagionali. Nella versione esaminata, **Salva intestazione** conserva progetto, fornitore e riferimenti documentali. **Articoli e assegnazioni restano locali e non vengono salvati insieme all'intestazione.** Non usarla come archivio completo dell'acquisto o come documento contabile definitivo.

## Dichiarare le vendite

1. Apri **Vendite biglietti** e seleziona il contesto corretto.
2. Controlla prodotto, periodo, canale e tariffa applicata.
3. Inserisci i **Biglietti venduti**. Lascia vuoto soltanto ciò che non è ancora dichiarato; usa `0` per dichiarare nessuna vendita.
4. Verifica il ricavo calcolato. Compila **Ricavo dichiarato** soltanto per una rettifica e inserisci il **Motivo della rettifica**.
5. Risolvi le righe incomplete o con **Tariffa mancante**, quindi premi **Salva in Firebase**.
6. Usa **Ricarica dati** per controllare i valori effettivamente registrati.

Le righe salvate conservano una fotografia dei prezzi; una modifica successiva usa la tariffa corrente e può essere rifiutata se i prezzi sono cambiati nel frattempo. Non cancellare una quantità già salvata per rappresentare una rettifica: modifica il valore secondo il caso e verifica l'esito. Le modifiche non salvate si perdono ricaricando.

## Compilare il controllo piste

Questa è una dichiarazione stagionale, distinta dallo storico automatico dei chilometri aperti o preparati giornalmente.

1. Apri **Controllo piste** nel tuo ambito.
2. Usa **Aggiungi pista** e indica nome e chilometri complessivi.
3. Per **Preparata entro 8 dicembre** e **Preparata dal 23 dicembre**, scegli **Sì**, **Parziale**, **No** oppure **Da compilare**.
4. Se scegli **Parziale**, indica i chilometri unici preparati per quella rilevazione.
5. Compila data di chiusura e note quando pertinenti.
6. Premi **Salva** nella scheda di ciascuna pista. Aggiungere una scheda non la salva automaticamente.

Non copiare i valori della stagione precedente come se fossero rilevazioni attuali. Per un conflitto usa **Ricarica dati** dopo aver annotato le modifiche ancora da recuperare.

## Inserire i dati KP

1. Apri **KP** e controlla area, partner e date delle rilevazioni.
2. Inserisci i **Km rete fisici / unici** e i **Km potenziali operativi**.
3. Per ogni rilevazione compila **Aperti km** e **KS km**. KS indica i chilometri su neve artificiale; non può superare i chilometri aperti. I chilometri su neve naturale, **NS km**, e gli indicatori sono calcolati dal modulo.
4. Controlla **Includi nel calcolo KP area / FAIR**. Se escludi un record, indica il motivo; non usare l'esclusione per nascondere dati incompleti.
5. Aggiungi le note necessarie e premi **Salva dati KP**.

Solo gli utenti abilitati possono gestire le milestone o validare i candidati di area. I record confermati possono essere bloccati; i salvataggi successivi di record modificabili producono revisioni. Un candidato KP o una bozza non equivale a un risultato FAIR definitivamente approvato.

## Controllare il salvataggio e risolvere gli errori

| Cosa vedi | Come procedere |
|---|---|
| Pulsante disabilitato o Sola lettura | Controlla permessi, stato del record e campi obbligatori; chiedi a DNS se l'ambito manca |
| Tariffa mancante o prezzo non aggiornato | Fai verificare e salvare prima la tariffa corretta, poi ricarica le vendite |
| Dati modificati da un altro utente | Annota le modifiche non salvate, ricarica e riparti dai valori correnti |
| Errore durante un salvataggio multiplo | Non presumere che tutte le righe siano rimaste invariate: ricarica e verifica quali sono state salvate |
| Dati già confermati o ordine inviato | Chiedi la procedura di correzione a DNS |
| Errore di accesso o connessione | Verifica sessione e connessione; comunica il messaggio esatto al supporto |

La scheda generale **Verifica** è predisposta nell'interfaccia, ma nella versione documentata non offre un workflow generale completo di approvazione. Non interpretare la sua presenza, o un semplice salvataggio, come approvazione finale.

Per assistenza scrivi a [info@dolomitinordicski.com](mailto:info@dolomitinordicski.com), indicando modulo, stagione, area e messaggio d'errore. Non inviare password o dati personali non necessari.

## Fonti e aggiornamento

Verifica documentale del **10 novembre 2026**, su Data Entry **0.1.4**, Foundation **1.4.1**. Le istruzioni sono state confrontate con i moduli integrati; non attestano l'abilitazione del tuo account o una prova dei tuoi dati di produzione.

- [README e regole di salvataggio](https://github.com/dolomitinordicski/DNS-Data-Entry/blob/ee946d158f06dca746e6c3e154d99a9b4d2f428d/README.md) — il riferimento Foundation nel README è precedente al pacchetto installato.
- [Moduli e percorsi applicativi](https://github.com/dolomitinordicski/DNS-Data-Entry/blob/ee946d158f06dca746e6c3e154d99a9b4d2f428d/src/App.tsx).
- [Contratto degli ordini](https://github.com/dolomitinordicski/dns-shared-data/blob/ea2022c65a0e8d085ce071744dbe1169b384259c/docs/DNS-Order-Persistence-v0.4.md).
- [Contratto di condivisione e stampa](https://github.com/dolomitinordicski/dns-shared-data/blob/ea2022c65a0e8d085ce071744dbe1169b384259c/docs/DNS-Public-Order-Sharing-Print-v1.md).
