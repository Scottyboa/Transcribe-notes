// js/language-it.js

export const indexTranslations = {
  pageTitle: "Transcribe Notes",
  headerTitle: "Transcribe Notes",
  headerSubtitle: "Trascrizioni e generazione di note per consultazioni sanitarie avanzate, alimentate da intelligenza artificiale",
  startText: "Per iniziare, inserisci la tua chiave API di OpenAI:",
  apiPlaceholder: "Inserisci qui la chiave API",
  enterButton: "Accedi allo strumento di trascrizione",
  guideButton: "Guida API - Come utilizzare",
  securityButton: "Sicurezza",
  aboutButton: "Informazioni",
  adRevenueMessage: "Poiché questo sito è gratuito e si basa esclusivamente sui ricavi pubblicitari, ti preghiamo di acconsentire alla visualizzazione di annunci personalizzati per sostenere il servizio.",
  securityModalHeading: "Privacy",
securityModalText: `La tua privacy e la sicurezza delle informazioni dei pazienti sono la nostra massima priorità. Questa web app è stata progettata affinché tutta l’elaborazione dei dati avvenga direttamente e temporaneamente nel tuo browser – senza alcuna memorizzazione o elaborazione lato server da parte nostra.<br><br>

<strong>Come vengono trattati i dati:</strong><br>
Le registrazioni audio, le trascrizioni e le note generate vengono elaborate localmente nel tuo browser e inviate direttamente a OpenAI tramite la loro API sicura. Le trascrizioni e le note sono visualizzate solo temporaneamente nel browser e vengono eliminate automaticamente quando vengono sostituite o quando la pagina viene chiusa. I file audio vengono elaborati solo temporaneamente per consentire la trascrizione e non vengono conservati dopo l'uso.<br><br>

<strong>Conservazione presso OpenAI:</strong><br>
I dati testuali vengono conservati temporaneamente per un massimo di 30 giorni per supportare la risoluzione di eventuali problemi tecnici e richieste di accesso da parte dell’utente, dopodiché vengono eliminati automaticamente. I dati non vengono utilizzati per l’addestramento dei modelli o per lo sviluppo futuro. OpenAI aderisce inoltre al quadro normativo GDPR per il trasferimento dei dati e la protezione della privacy. Per maggiori informazioni, visita <a href="https://openai.com/security-and-privacy/" target="_blank" style="color: blue; text-decoration: underline;">OpenAI Sicurezza e Privacy</a>.<br><br>
Si consiglia inoltre agli utenti di sottoscrivere un Data Processing Addendum (DPA) con OpenAI. È possibile farlo facilmente seguendo le istruzioni disponibili nella <strong>guida all’API sulla pagina iniziale</strong>.<br><br>

<strong>Cookie e pubblicità:</strong><br>
Utilizziamo i cookie esclusivamente per migliorare l’esperienza dell’utente e mostrare annunci pertinenti tramite Google Ads. Questi cookie non memorizzano dati personali oltre quanto necessario per il funzionamento e la personalizzazione. Il sito utilizza anche cookie per salvare le preferenze linguistiche, le impostazioni dei prompt personalizzati e le scelte relative al consenso.`,
  aboutModalHeading: "Informazioni",
aboutModalText: `Questo sito è stato creato per offrire ai professionisti sanitari e ad altri utenti un accesso diretto a trascrizioni vocali di alta qualità e alla generazione di note cliniche—senza costi superflui o intermediari.<br><br>
Utilizzando la tua chiave API OpenAI personale, ti connetti direttamente alla fonte della tecnologia. Ciò significa che paghi soltanto il costo effettivo stabilito da OpenAI, senza maggiorazioni o tariffe di abbonamento.<br><br>
Molti fornitori offrono servizi simili, ma applicano prezzi significativamente più elevati—spesso da 8 a 10 volte il costo reale della tecnologia sottostante. Questa piattaforma offre le stesse funzionalità a una frazione del prezzo.<br><br>
<strong>Punti chiave:</strong><br>
• Nessun abbonamento, nessun account richiesto.<br>
• Paghi solo OpenAI per ciò che utilizzi.<br>
• Il sito stesso è completamente gratuito.<br><br>
Per continuare a offrire questo servizio gratuito, ti saremmo molto grati se accettassi la visualizzazione degli annunci Google Ads. I ricavi pubblicitari ci aiutano a coprire i costi di hosting e gestione, permettendo al servizio di rimanere accessibile a tutti.`,
  guideModalHeading: "Come si usa",
guideModalText: `Per utilizzare questa web app, devi prima creare un account API di OpenAI, generare una chiave API e assicurarti che il tuo wallet OpenAI abbia fondi sufficienti. La chiave API va copiata e incollata nel campo designato. Quando premi "Enter", la web app salva temporaneamente la chiave per la durata della sessione – questa chiave ti collega ai server OpenAI, permettendo la trascrizione da voce a testo e la generazione delle note. Tieni presente che ogni operazione (trascrizione e/o generazione di note) viene addebitata immediatamente. Per maggiori dettagli sui costi, consulta la sezione "Informazioni sui costi" nella home page.
<br><br>
<strong>1. Crea il tuo account API OpenAI</strong><br>
Per iniziare, devi creare un account sulla piattaforma API di OpenAI. Questo account ti permetterà di gestire le tue chiavi API e la fatturazione. Per registrarti, visita <a href="https://platform.openai.com/signup" style="color:blue;">Registrazione API di OpenAI</a>. Segui le istruzioni per creare il tuo profilo utente. Una volta registrato, avrai accesso al pannello di controllo, dove potrai generare una chiave API personale e caricare credito nel tuo wallet OpenAI.
<br><br>
<strong>2. Genera una chiave API</strong><br>
Dopo aver creato il tuo account, vai alla pagina di <a href="https://platform.openai.com/account/api-keys" style="color:blue;">gestione delle chiavi API</a> per generare una nuova chiave. Clicca sul pulsante per creare una nuova chiave. Importante: la chiave sarà visibile solo una volta. Copiala immediatamente e conservala in un luogo sicuro (ad esempio in un file di testo). Se perdi la chiave o sospetti che sia stata compromessa, puoi disattivarla/eliminarla e generarne una nuova dallo stesso pannello.
<br><br>
<strong>3. Aggiungi fondi al tuo wallet OpenAI</strong><br>
Per far funzionare la web app, il tuo wallet OpenAI deve avere fondi disponibili. Visita la <a href="https://platform.openai.com/account/billing/overview" style="color:blue;">pagina di fatturazione e pagamento</a> per aggiungere credito. Puoi ricaricare in qualsiasi momento l’importo che preferisci. Finché il saldo è disponibile, potrai utilizzare le funzionalità della web app – ogni operazione viene addebitata immediatamente. Per una panoramica dettagliata dei prezzi, consulta la sezione "Informazioni sui costi".
<br><br>
<strong>4. Firma un accordo per il trattamento dei dati (DPA)</strong><br>
Se intendi utilizzare i servizi API per trattare dati personali (ad esempio nel contesto sanitario), è consigliabile firmare un accordo per il trattamento dei dati con OpenAI. Puoi trovare l’accordo standard di OpenAI qui: <a href="https://ironcladapp.com/public-launch/63ffefa2bed6885f4536d0fe" style="color:blue;">Accordo di trattamento dei dati di OpenAI (DPA)</a>. Per inserire il tuo codice organizzativo corretto, visita <a href="https://platform.openai.com/settings/organization/general" style="color:blue;">il tuo profilo organizzativo OpenAI</a>. Una volta firmato l’accordo, sei pronto per utilizzare il servizio.
<br><br>
<strong>Nota sulla sicurezza della sessione</strong><br>
Quando effettui l’accesso inserendo la chiave API nella pagina principale e premi Enter, la chiave viene salvata solo temporaneamente nella sessione del tuo browser. Ciò significa che se lasci la pagina, chiudi il browser o spegni il computer, la chiave non verrà conservata. Dovrai incollarla nuovamente alla successiva visita, il che contribuisce a mantenere sicura la tua chiave.`,
  priceButton: "Prezzo",
  priceModalHeading: "Prezzo",
priceModalText: `
<div>
  <p><strong>Informazioni sui costi</strong></p>
  <p>Paghi solo per ciò che usi – direttamente alla fonte, senza intermediari costosi. Nessun abbonamento. Nessun vincolo.</p>

  <p><strong>Prezzi:</strong></p>
  <ul>
    <li>Trascrizione audio: $0.006 al minuto</li>
    <li>Generazione note: $5 per 1 milione di token (input) e $10 per 1 milione di token (output)</li>
  </ul>

  <p><strong>Esempio – Consulto di 15 minuti:</strong></p>
  <ul>
    <li>Trascrizione: 15 × $0.006 = $0.09</li>
    <li>Generazione nota: solitamente tra $0.005 e $0.01</li>
    <li>Totale: circa $0.10 per l’intero consulto</li>
  </ul>

  <p><strong>Esempio di costo mensile con uso regolare:</strong></p>
  <ul>
    <li>20 consulti al giorno × 4 giorni a settimana × 4 settimane = 320 consulti</li>
    <li>Costo mensile totale: circa $30–31</li>
  </ul>

  <p><strong>Paghi solo in base all'utilizzo:</strong><br>
  Se non utilizzi il servizio per ferie, malattia o congedo, non paghi nulla.</p>
</div>
`,
};

export const transcribeTranslations = {
  pageTitle: "Strumento di Trascrizione con Annunci e Sovrapposizione della Guida",
  openaiUsageLinkText: "Riepilogo dei costi",
  openaiWalletLinkText: "Saldo Portafoglio",
  btnFunctions: "Funzioni",
  btnGuide: "Guida",
  backToHome: "Torna alla pagina iniziale",
  recordingAreaTitle: "Area di Registrazione",
  recordTimer: "Timer di Registrazione: 0 sec",
  transcribeTimer: "Timer di Completamento: 0 sec",
  transcriptionPlaceholder: "Il risultato della trascrizione apparirà qui...",
  startButton: "Avvia Registrazione",
  readFirstText: "Leggi prima! ➔",
  stopButton: "Ferma/Completa",
  pauseButton: "Pausa Registrazione",
  statusMessage: "Benvenuto! Clicca su \"Avvia Registrazione\" per iniziare.",
  noteGenerationTitle: "Generazione delle Note",
  generateNoteButton: "Genera Nota",
  noteTimer: "Timer per la Generazione della Nota: 0 sec",
  generatedNotePlaceholder: "La nota generata apparirà qui...",
  customPromptTitle: "Prompt Personalizzato",
  promptSlotLabel: "Slot del Prompt:",
  customPromptPlaceholder: "Inserisci qui il prompt personalizzato",
  adUnitText: "Il tuo annuncio qui",
  guideHeading: "Guida e Istruzioni",
guideText: `Benvenuto in <strong>Transcribe Notes</strong>. Questa applicazione consente a professionisti sanitari, terapisti e altri operatori di registrare e trascrivere consulti, nonché di generare note professionali utilizzando un generatore di testi basato su intelligenza artificiale.<br><br>

<strong>Come utilizzare le funzionalità:</strong><br><br>

<ul>
  <li><strong>Registrazione:</strong> È sempre necessario ottenere il consenso del paziente prima di utilizzare questa applicazione. Clicca su "Avvia registrazione" per iniziare a catturare l’audio. Ogni 2 minuti, un segmento audio viene inviato automaticamente ai server di OpenAI per la trascrizione. Le trascrizioni appariranno in sequenza nel campo di output.<br><br>
  <strong><u>Importante:</u> Il registratore non funziona su tutti i browser. Si consiglia di utilizzare <strong>Google Chrome</strong> o <strong>Microsoft Edge</strong>.</strong></li><br>

  <li><strong>Pausa e ripresa:</strong> Puoi usare il pulsante "Pausa" per interrompere temporaneamente la registrazione, ad esempio se la consultazione viene interrotta o se devi uscire dall’ambulatorio per un momento. Quando fai clic su "Pausa", il segmento audio corrente viene caricato e trascritto, e la registrazione viene messa in pausa. Quando sei pronto a continuare, clicca su "Riprendi" e la registrazione riprenderà automaticamente con il segmento successivo. Il timer continuerà da dove si era interrotto e la sessione potrà essere conclusa normalmente con "Stop/Completa".</li><br>

  <li><strong>Completamento:</strong> Dopo aver cliccato su "Stop/Completa", la registrazione si interrompe. Il timer di completamento calcola il tempo necessario per ricevere l’intera trascrizione (solitamente entro 5–10 secondi).</li><br>

  <li><strong>Prompt personalizzato:</strong> Sulla destra, seleziona uno slot prompt (1–10) e inserisci il tuo prompt personalizzato. Il prompt viene salvato automaticamente e associato alla tua chiave API. Puoi creare qualsiasi prompt adatto al tuo stile di documentazione, tono e area clinica. Hai piena libertà nel modo in cui vengono generate le note.</li><br>

  <li><strong>Generazione della nota:</strong> Una volta completata la trascrizione, clicca su "Genera nota" per creare una nota basata sulla trascrizione e sul prompt selezionato/personalizzato. Le note cliniche generate devono essere esaminate e convalidate da personale sanitario prima dell’utilizzo.</li><br>

  <li><strong>Panoramica dei costi:</strong> Per verificare il tuo attuale utilizzo su OpenAI, clicca sul link alla panoramica dei costi situato in alto a destra di questa pagina.</li><br>

  <li><strong>Sicurezza:</strong> La registrazione audio viene inviata direttamente ai server API di OpenAI, che non memorizzano i dati e li usano solo per la trascrizione. Il testo trascritto è visibile solo nel tuo browser e <strong>viene eliminato/scompare non appena chiudi il browser o carichi nuovi contenuti.</strong></li><br>

  <li><strong>Pulsante "Guida":</strong> Clicca di nuovo sul pulsante "Guida" per tornare all'interfaccia principale.</li>
</ul><br><br>

<strong>Esempi di prompt:</strong><br><br>

<strong>Consultazione:</strong><br>
"Prompt di sistema – Generatore di nota medica

Scrivi una nota medica precisa e pronta per il diario clinico, basata su una conversazione trascritta tra medico e paziente. Utilizza la seguente struttura (salvo diverse indicazioni nel dettato):
Contesto (solo se ci sono precedenti rilevanti), Sintomi/anamnesi, Esame (in elenco puntato), Valutazione, Piano.

Regole:
– Non includere informazioni, esami o riscontri non menzionati esplicitamente.
– Inserire riscontri negativi solo se dichiarati.
– Esami del sangue: scrivere “si richiedono esami del sangue pertinenti”, senza elencarli.
– Correggere errori evidenti nei nomi dei farmaci.
– Non usare caratteri speciali o andare a capo prima dei titoli.
– Seguire le istruzioni esplicite del medico riguardo stile, lunghezza o formulazioni specifiche.

Se il medico aggiunge commenti dopo che il paziente è uscito, vanno presi in considerazione. La nota deve essere ben scritta."

<br><br>

<strong>Lettera al paziente:</strong><br>
"Scrivi una lettera dal medico al paziente. Inizia con Ciao \\"nome\\", e termina con<br>
Cordiali saluti<br>
\\"Il tuo nome\\"<br>
\\"Nome dello studio\\"<br>
La lettera deve avere un tono professionale e formale. Puoi migliorare leggermente il testo per renderlo più fluido."

<br><br>

Questi sono esempi efficaci, ma puoi adattarli liberamente al tuo stile documentale, alla tua specializzazione o al tipo di consultazione. Puoi anche creare prompt completamente personalizzati per ogni esigenza.
`,
};

export default { indexTranslations, transcribeTranslations };
