// js/language-no.js

export const indexTranslations = {
  pageTitle: "Transcribe Notes",
  headerTitle: "Transcribe Notes",
  headerSubtitle: "Avansert AI-drevet tale-til-tekst og notatgenerering for helsekonsultasjoner",
  startText: "Har du ikke en API-nøkkel ennå? Klikk på «API nøkkel – Hvordan lage» for enkel veiledning.",
  apiPlaceholder: "Skriv inn API-nøkkel her",
  enterButton: "Gå til transkripsjonsverktøyet",
  guideButton: "API-guide – Slik bruker du den",
  securityButton: "Sikkerhet",
  aboutButton: "Om",
  adRevenueMessage: "Siden dette nettstedet er gratis å bruke og utelukkende finansieres av annonseinntekter, setter vi stor pris på om du godtar annonser for å støtte tjenesten.",
  
  securityModalHeading: "Personvern",
securityModalText: `Personvernet ditt og sikkerheten til pasientinformasjon er vår høyeste prioritet. Vi har utviklet denne webappen slik at all behandling skjer direkte og midlertidig i nettleseren – uten noen form for datalagring eller serverbasert prosessering fra vår side.<br><br>

<strong>Hvordan data behandles:</strong><br>
Lydopptak, transkripsjoner og genererte notater behandles lokalt i nettleseren din og sendes direkte til OpenAI via deres sikre API. Transkripsjoner og notater vises kun i nettleseren, og slettes automatisk når de erstattes eller siden lukkes. Lydfiler behandles kun midlertidig for å muliggjøre transkripsjon, og beholdes ikke etter bruk.<br><br>

<strong>Lagring hos OpenAI:</strong><br>
Tekstdata lagres midlertidig i opptil 30 dager for å kunne støtte feilsøking og eventuelle innsynsforespørsler fra brukeren, før det automatisk slettes. Dataene brukes ikke til modelltrening eller videreutvikling. OpenAI følger også GDPR-rammeverket for dataoverføring og personvern. Les mer hos <a href="https://openai.com/security-and-privacy/" target="_blank" style="color: blue; text-decoration: underline;">OpenAI sikkerhet og personvern</a>.<br><br>
Det anbefales også at brukere inngår databehandleravtale (DPA) med OpenAI. Dette kan gjøres enkelt, og instruksjoner for dette finner du i informasjonsseksjonen <strong>API-guiden her på forsiden</strong>.<br><br>

<strong>Informasjonskapsler og annonser:</strong><br>
Vi benytter informasjonskapsler (cookies) utelukkende for å forbedre brukeropplevelsen og vise relevante annonser gjennom Google Ads. Informasjonskapslene lagrer ikke personopplysninger utover det som er nødvendig for funksjonalitet og tilpasning. Nettstedet bruker også informasjonskapsler for å lagre språkvalg, tilpassede promptinnstillinger og samtykkevalg.`,
  
  aboutModalHeading: "Om",
  aboutModalText: `Denne nettsiden ble opprettet for å gi helsepersonell og andre brukere direkte tilgang til høykvalitets tale-til-tekst transkripsjon og klinisk notatgenerering – uten unødvendige kostnader eller mellomledd.<br><br>
Ved å bruke din egen OpenAI API-nøkkel kobler du deg direkte til kilden for teknologien. Dette betyr at du kun betaler den faktiske bruksprisen fastsatt av OpenAI, uten påslag eller abonnementsavgifter.<br><br>
Mange eksisterende leverandører tilbyr lignende tjenester, men tar betydelig mer – ofte 8 til 10 ganger den reelle kostnaden for den underliggende teknologien. Denne plattformen tilbyr samme funksjonalitet til en brøkdel av prisen.<br><br>
<strong>Nøkkelpunkter:</strong><br>
• Ingen abonnement, ingen konto kreves.<br>
• Du betaler kun OpenAI direkte for det du bruker.<br>
• Nettsiden i seg selv er helt gratis.<br><br>
For at vi skal kunne fortsette å tilby denne tjenesten gratis, så hadde vi satt stor pris på om du godtar at det vises reklame fra Google Ads. Annonseinntektene hjelper oss å dekke kostnader til hosting og drift, slik at tjenesten kan forbli tilgjengelig for alle.`,  
  guideModalHeading: "API nøkkel - Hvordan lage",
guideModalText: `For å bruke denne webappen, må du først opprette en OpenAI API-profil, generere en API-nøkkel og sørge for at din OpenAI-lommebok har tilstrekkelige midler. API-nøkkelen kopieres deretter og limes inn i det angitte feltet. Når du trykker på "Enter", lagrer webappen API-nøkkelen midlertidig for økten – denne nøkkelen kobler deg til OpenAI-serverne slik at tale-til-tekst-transkripsjon og notatgenerering kan fungere. Vennligst merk at du belastes umiddelbart per utførte oppgave (tale-til-tekst og/eller notatgenerering). For mer informasjon om kostnader, se "Kostnadsinformasjon"-seksjonen på forsiden.
<br><br>
<strong>1. Opprett din OpenAI API-profil</strong><br>
For å komme i gang, må du opprette en profil på OpenAI API-plattformen. Denne profilen fungerer som din konto for administrasjon av API-nøkler og fakturering. For å starte, besøk <a href="https://platform.openai.com/signup" style="color:blue;">OpenAI API Registrering</a>. Følg instruksjonene og opprett en bruker. Når du er registrert, får du tilgang til dashbordet ditt. Du vil da ha mulighet til å generere en personlig API-nøkkel, samt laste opp kreditt til din OpenAI-lommebok.
<br><br>
<strong>2. Generer en API-nøkkel</strong><br>
Etter at du har opprettet profilen din, generer en API-nøkkel ved å gå til <a href="https://platform.openai.com/account/api-keys" style="color:blue;">API-nøkkeladministrasjonen</a>. Klikk på knappen for å opprette en ny API-nøkkel. Viktig: Du vil kun se nøkkelen én gang. Kopier den umiddelbart og oppbevar den sikkert (f.eks. i en tekstfil). Hvis du mister nøkkelen eller mistenker at den har blitt kompromittert, kan du enkelt deaktivere/slette den på samme sted som du genererte den og samtidig opprette en ny.
<br><br>
<strong>3. Sett inn midler på din OpenAI-lommebok</strong><br>
For at webappen skal fungere, må din OpenAI-lommebok ha tilstrekkelige midler. Besøk <a href="https://platform.openai.com/account/billing/overview" style="color:blue;">Fakturerings- og betalingsside</a> for å sette inn midler. Du kan overføre hvilket som helst beløp når som helst. Så lenge midlene er tilgjengelige, vil du kunne bruke funksjonene i denne webapp – hver oppgave belastes umiddelbart. For detaljert prisoversikt, se "Kostnadsinformasjon".
<br><br>
<strong>4. Inngå databehandleravtale (DPA)</strong><br>
Hvis du skal bruke API-tjenestene til behandling av personopplysninger (f.eks. i helsetjenesten), anbefales det at du inngår en databehandleravtale med OpenAI. Du finner OpenAI sin standardavtale her: <a href="https://ironcladapp.com/public-launch/63ffefa2bed6885f4536d0fe" style="color:blue;">OpenAI databehandleravtale (DPA)</a>. For å fylle inn korrekt organisasjonsnummer, kan du finne dette ved å gå til <a href="https://platform.openai.com/settings/organization/general" style="color:blue;">din OpenAI organisasjonsprofil</a>. Når avtalen er signert, er du klar til å bruke tjenesten.
<br><br>
<strong>Sikkerhetsmerknad for økten</strong><br>
Når du logger inn ved å skrive inn API-nøkkelen i feltet på denne forsiden og klikker på enter, så lagres denne kun midlertidig i nettleserøkten din. Dette betyr at hvis du forlater nettsiden, lukker nettleseren eller slår av datamaskinen, vil ikke API-nøkkelen bli lagret. Du må da klippe og lime den inn på nytt neste gang du bruker webappen, noe som sikrer at nøkkelen din forblir sikker.`,
  priceButton: "Pris",
  priceModalHeading: "Kostnadsinformasjon",
priceModalText: `
<div>
  <p><strong>Kostnadsinformasjon</strong></p>
  <p>Du betaler kun for det du bruker, direkte fra kilden, uten dyre mellomledd – ingen abonnement, ingen binding.</p>

  <p><strong>Priser:</strong></p>
  <ul>
    <li>Tale-til-tekst: $0.006 per minutt</li>
    <li>Notatgenerering: $5 per 1 million tokens (input) og $10 per 1 million tokens (output)</li>
  </ul>

  <p><strong>Eksempel – 15-minutters konsultasjon:</strong></p>
  <ul>
    <li>Tale-til-tekst: 15 × $0.006 = $0.09</li>
    <li>Notatgenerering: vanligvis mellom $0.005 og $0.01</li>
    <li>Totalt: cirka $0.10 for hele konsultasjonen</li>
  </ul>

  <p><strong>Eksempel på månedskostnad ved full bruk:</strong></p>
  <ul>
    <li>20 konsultasjoner per dag × 4 dager i uken × 4 uker = 320 konsultasjoner</li>
    <li>Totalkostnad denne måned: cirka $30–31</li>
  </ul>

  <p><strong>Du betaler bare for bruk:</strong><br>
  Hvis du ikke bruker tjenesten på grunn av ferie, sykdom, permisjon etc, betaler du ingenting.</p>
</div>
`,
};

export const transcribeTranslations = {
  pageTitle: "Transkripsjonsverktøy med annonser og guideoverlegg",
  openaiUsageLinkText: "Kostnadsoversikt",
  openaiWalletLinkText: "OpenAI-kreditt",
  btnFunctions: "Funksjoner",
  btnGuide: "Guide",
  backToHome: "Tilbake til forsiden",
  recordingAreaTitle: "Opptaksområde",
  recordTimer: "Opptakstimer: 0 sek",
  transcribeTimer: "Fullføringstimer: 0 sek",
  transcriptionPlaceholder: "Transkripsjonsresultatet vil vises her...",
  startButton: "Start opptak",
  readFirstText: "Les først! ➔",
  stopButton: "Stopp/Fullfør",
  pauseButton: "Pause opptak",
  statusMessage: "Velkommen! Klikk på \"Start opptak\" for å begynne.",
  noteGenerationTitle: "Notatgenerering",
  generateNoteButton: "Generer notat",
  noteTimer: "Notatgenereringstimer: 0 sek",
  generatedNotePlaceholder: "Generert notat vil vises her...",
  customPromptTitle: "Tilpasset prompt",
  promptSlotLabel: "Prompt Slot:",
  customPromptPlaceholder: "Skriv inn tilpasset prompt her",
  adUnitText: "Din annonse her",
  guideHeading: "Guide & Instruksjoner",
guideText: `Velkommen til <strong>Transcribe Notes</strong>. Denne applikasjonen lar helsepersonell, terapeuter og andre fagpersoner ta opp og transkribere konsultasjoner, samt generere profesjonelle notater ved hjelp av en AI-basert notatgenerator.<br><br>

<strong>Slik bruker du funksjonene:</strong><br><br>

<ul>
  <li><strong>Opptak:</strong> Klikk på "Start opptak" for å begynne å ta opp lyd. Hvert 2. minutt sendes en lydsekvens automatisk til OpenAI sine servere for transkribering. Transkriberingen vises fortløpende i tekstfeltet for transkripsjon.<br><br>
  <strong><u>Viktig:</u> Opptaksfunksjonen fungerer ikke i alle nettlesere. Vi anbefaler derfor å bruke <strong>Google Chrome</strong> eller <strong>Microsoft Edge</strong>.</strong></li><br>

  <li><strong>Pause og gjenoppta:</strong> Du kan bruke "Pause"-knappen til midlertidig å stoppe opptaket, for eksempel dersom konsultasjonen blir avbrutt eller du trenger å forlate kontoret et øyeblikk. Når du trykker på "Pause", lastes det aktuelle lydsegmentet opp og transkriberes, og opptaket settes på pause. Når du er klar til å fortsette, klikker du på "Fortsett", og opptaket gjenopptas automatisk med neste segment. Tidtakeren fortsetter der den slapp, og opptaket kan til slutt avsluttes som vanlig med "Stopp/Ferdig".</li><br>

  <li><strong>Fullføring:</strong> Når du klikker på "Stopp/Ferdig", stopper opptaket. Fullføringstimeren teller tiden til hele transkripsjonen er mottatt (vanligvis innen 3-7 sekunder).</li><br>

  <li><strong>Tilpasset prompt:</strong> På høyre side kan du velge en promptplass (1–10) og skrive inn din egen prompt. Prompten lagres automatisk og knyttes til din API-nøkkel. Du kan lage hvilken som helst prompt som passer din dokumentasjonsstil, tone og faglige fokus. Dette gir deg full fleksibilitet i hvordan notatene dine genereres.</li><br>

  <li><strong>Notatgenerering:</strong> Når transkripsjonen er fullført, klikker du på "Generer notat" for å lage et notat basert på transkripsjonen og den valgte/tilpassede prompten. Genererte journalnotater må gjennomgås og valideres av helsepersonell før de tas i bruk.</li><br>

  <li><strong>Kostnadsoversikt:</strong> For å se ditt nåværende forbruk hos OpenAI, klikk på lenken for kostnadsoversikt som er plassert oppe til høyre på denne siden.</li><br>

  <li><strong>Sikkerhet:</strong> Lydopptaket ditt sendes direkte til OpenAI sine API-servere, som ikke lagrer dataene og kun bruker dem til transkribering. Den transkriberte teksten vises kun i nettleseren din, og <strong>den slettes/forsvinner så snart du lukker nettleseren eller laster inn nytt innhold.</strong></li><br>

  <li><strong>Guide-knapp:</strong> Klikk på "Guide"-knappen igjen for å gå tilbake til hovedvisningen.</li>
</ul><br><br>

<strong>Eksempler på prompts:</strong><br><br>

<strong>Konsultasjon:</strong><br>
"Systemprompt – Medisinsk notatgenerator

Skriv et medisinsk presist, journalklart notat basert på en transkribert lege-pasient-samtale. Bruk følgende struktur (med mindre annet er spesifisert i diktatet):
Bakgrunn (kun ved relevant historikk), Aktuelt/anamnese, Undersøkelse (punktvis), Vurdering, Plan.

Regler:
– Ikke inkluder opplysninger, undersøkelser eller funn som ikke er eksplisitt nevnt.
– Negative funn kun hvis nevnt.
– Hvis blodprøver rekvireres: skriv “relevante blodprøver rekvireres”, ikke list opp alle prøvene så langt lege ikke nevner dette eksplisitt.
– Rett åpenbare feilstavinger i medikamentnavn.
– Ikke bruk spesialtegn eller linjeskift før overskrifter.
– Følg eksplisitte instruksjoner fra legen om stil, lengde eller spesifikke formuleringer.

Dersom legen legger til kommentarer etter at pasienten har gått, skal disse hensyntas. Det er viktig at det brukes godt språk i notatet."<br><br>

<strong>Brev til pasient:</strong><br>
"Skriv brev fra lege til pasient. Start med Hei \\"navn\\", og avslutt med<br>
Mvh<br>
\\"Ditt navn\\"<br>
\\"Navn på legesenteret\\"<br><
Brevet må ha en profesjonell og formel fremtoning. Kan godt rette litt på språket for bedre tekst."<br><br>

Dette er eksempler som fungerer godt, men du står fritt til å tilpasse dem slik at de passer din dokumentasjonsstil, spesialitet og type konsultasjon. Du kan også lage helt egne prompts til hvilket formål du måtte ønske.  
`,
};

export default { indexTranslations, transcribeTranslations };
