# Riat Archidecor - Backend Server

Configurazione backend per il sito [Riat Archidecor](https://www.riatarchidecor.it). Il suo scopo principale è fornire un'API per gestire le operazioni lato server, con un focus particolare sull'integrazione del sistema di pagamento Stripe per la creazione di sessioni di checkout (i dati dei prodotti acquistabili sono recuperati da Wordpress utilizzato come Headless CMS)

## Tecnologie Utilizzate

- **Linguaggio:** JavaScript
- **Runtime:** Node.js
- **Framework Web:** Express.js (per la gestione delle route e del server HTTP)
- **Gestione Variabili d'Ambiente:** Dotenv (per caricare variabili d'ambiente da un file `.env`)
- **Integrazione Pagamenti:** Stripe API (tramite la libreria `stripe` per Node.js, per la creazione di sessioni di checkout)
- **Cross-Origin Resource Sharing (CORS):** CORS (middleware per abilitare richieste cross-origin)
- **Gestione Dipendenze:** npm (Node Package Manager)
