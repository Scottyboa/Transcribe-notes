// js/language-sv.js

export const indexTranslations = {
  pageTitle: "Transcribe Notes",
  headerTitle: "Transcribe Notes",
  headerSubtitle: "Avancerad AI-driven tal-till-text och notisgenerering för vårdkonsultationer",
  startText: "För att komma igång, vänligen ange din OpenAI API-nyckel:",
  apiPlaceholder: "Ange API-nyckel här",
  enterButton: "Gå till transkriptionsverktyget",
  guideButton: "Hur du använder",
  securityButton: "Säkerhet",
  aboutButton: "Om",
  adRevenueMessage: "Eftersom denna webbplats är gratis att använda och enbart finansieras genom annonsintäkter, vänligen godkänn annonser för att stödja tjänsten.",

  securityModalHeading: "Integritet",
securityModalText: `Din integritet och säkerheten för patientinformation är vår högsta prioritet. Vi använder robusta åtgärder för att säkerställa att dina uppgifter förblir konfidentiella och skyddade:<br><br>
- <strong>Datakryptering:</strong> All data som behandlas av vårt system – inklusive ljudinspelningar, transkriptioner och anteckningar – är krypterad med branschstandardmetoder. Transkriptioner och anteckningar är uteslutande kopplade till din krypterade personliga API-nyckel och den enhet som används för åtkomst, vilket garanterar att endast du kan se det genererade innehållet.<br><br>
- <strong>Automatisk radering:</strong> När en transkription eller anteckning har genererats och visats på din skärm, raderas den automatiskt och oåterkalleligt från våra servrar inom 2 minuter. Ljudfiler lagras endast tillfälligt för bearbetning och sparas inte efter att de använts.<br><br>
- <strong>Skydd mot obehörig åtkomst:</strong> Även om obehörig åtkomst till din API-nyckel skulle inträffa, förblir dina data krypterade och skyddade av enhetsspecifika markörer, vilket gör informationen oåtkomlig.<br><br>
- <strong>GDPR-kompatibel hosting:</strong> Alla backend-processer körs på dedikerade Microsoft Azure-servrar inom EU och är fullt kompatibla med GDPR-förordningen. Du kan läsa mer om hur vi skyddar dina data genom att besöka <a href="https://openai.com/security-and-privacy/" target="_blank" style="color: blue; text-decoration: underline;">OpenAI säkerhet och integritet</a>.<br><br>
<strong>Ytterligare integritetspraxis:</strong><br><br>
- <strong>Minimal datainsamling:</strong> Vi samlar endast in den information som är nödvändig för att tillhandahålla våra tjänster. Detta inkluderar din OpenAI API-nyckel (lagras i krypterad form under sessionens varaktighet), enhetstoken som endast används för kryptering, samt ditt språkval. Ingen ytterligare personlig information lagras.<br><br>
- <strong>Användning av cookies:</strong> Cookies på denna webbplats används uteslutande för att visa personligt anpassade annonser och förbättra din upplevelse. Vi använder inte cookies för att samla in eller lagra personlig information utöver det som krävs för detta ändamål. Vår webbplats använder även cookies för att spara användarinställningar och hantera samtycke.<br><br>
- <strong>Databearbetning och lagring:</strong> All data som behandlas av vårt system – inklusive ljudinspelningar, transkriptioner och genererade anteckningar – lagras endast så länge det är nödvändigt för att slutföra transkription- och anteckningsprocessen, och raderas automatiskt kort därefter. Vi lagrar eller delar inte någon personligt identifierbar information utöver vad som krävs för att tjänsten ska fungera korrekt.<br><br>
- <strong>Tredjepartsdelning och efterlevnad av regler:</strong> Vi säljer eller delar inte din personliga information med tredje part. All data som delas med externa tjänster – såsom OpenAI för transkription och anteckningsgenerering eller Google AdSense för personligt anpassade annonser – är begränsad till anonymiserad information som enbart rör annonsanpassning och användarinställningar, och inkluderar inte dina inspelningar, transkriptioner eller genererade anteckningar. All datadelning sker under strikt sekretess och i full överensstämmelse med gällande integritetsregler.<br><br>
Observera att all data automatiskt raderas kort efter bearbetning och inte lagras långsiktigt på grund av hur vårt system är utformat.`,


  aboutModalHeading: "Om",
aboutModalText: `Denna webbplats skapades för att ge vårdpersonal och andra användare direkt tillgång till högkvalitativ tal-till-text-transkription och generering av kliniska notat – utan onödiga kostnader eller mellanhänder.<br><br>
Genom att använda din egen OpenAI API-nyckel kopplar du dig direkt till källan för teknologin. Det innebär att du endast betalar den faktiska användningskostnaden som sätts av OpenAI, utan påslag eller prenumerationsavgifter.<br><br>
Många befintliga leverantörer erbjuder liknande tjänster men tar betydligt mer betalt – ofta 8 till 10 gånger den verkliga kostnaden för den underliggande tekniken. Denna plattform erbjuder samma funktionalitet till en bråkdel av priset.<br><br>
<strong>Viktiga punkter:</strong><br>
• Ingen prenumeration, inget konto krävs.<br>
• Du betalar endast direkt till OpenAI för det du använder.<br>
• Webbplatsen i sig är helt gratis.<br><br>
För att vi ska kunna fortsätta erbjuda den här gratistjänsten skulle vi verkligen uppskatta om du godkänner att annonser från Google Ads visas. Annonsintäkterna hjälper oss att täcka kostnader för hosting och drift, så att tjänsten kan förbli tillgänglig för alla.`,
  
  guideModalHeading: "API-guide – Hur du använder",
  guideModalText: `För att använda denna webbapp måste du först skapa en OpenAI API-profil, generera en API-nyckel och ladda ditt OpenAI-konto med pengar. Din API-nyckel kopieras och klistras sedan in i det angivna fältet. När du klickar på Enter sparas nyckeln tillfälligt för din session – denna nyckel kopplar dig till OpenAI:s servrar så att tal-till-text-transkription och notatgenerering kan fungera. Observera att du debiteras direkt per utfört uppdrag. För mer information om kostnader, se avsnittet "Pris" på startsidan.
<br><br>
<strong>1. Skapa din OpenAI API-profil</strong><br>
För att börja måste du skapa en profil på OpenAIs API-plattform. Denna profil fungerar som ditt konto för att hantera API-nycklar och fakturering. För att komma igång, besök <a href="https://platform.openai.com/signup" style="color:blue;">OpenAI API Registrering</a>. Följ instruktionerna för att registrera dig genom att ange din e-postadress, skapa ett lösenord och verifiera ditt konto. När du är registrerad får du tillgång till din kontrollpanel.
<br><br>
<strong>2. Generera en API-nyckel</strong><br>
När du har skapat din profil, generera en API-nyckel genom att gå till sidan <a href="https://platform.openai.com/account/api-keys" style="color:blue;">Hantera API-nycklar</a>. Klicka på knappen för att skapa en ny API-nyckel. Viktigt: Du kommer endast att se nyckeln en gång. Kopiera den direkt och spara den säkert (t.ex. i en textfil) för framtida användning. Om du förlorar nyckeln eller misstänker att den har blivit komprometterad, ta bort den från ditt konto och skapa en ny.
<br><br>
<strong>3. Ladda ditt OpenAI-konto</strong><br>
För att webbappen ska fungera måste ditt OpenAI-konto ha tillräckligt med pengar. Besök <a href="https://platform.openai.com/account/billing/overview" style="color:blue;">Fakturering & betalning</a> för att lägga till medel. Du kan överföra valfritt belopp när som helst. Så länge det finns pengar på kontot kan du använda webbappen – varje uppgift debiteras omedelbart.
<br><br>
<strong>Påminnelse om sessionsäkerhet</strong><br>
När du loggar in genom att ange din API-nyckel lagras den endast tillfälligt i din webbläsarsession. Det innebär att om du lämnar webbplatsen, stänger webbläsaren eller stänger av datorn så sparas inte nyckeln. Du måste ange nyckeln på nytt nästa gång du använder webbappen, vilket säkerställer att din nyckel förblir skyddad.`,  
  priceButton: "Pris",
  priceModalHeading: "Pris",
priceModalText: `
<div>
  <p><strong>Kostnadsinformation</strong></p>
  <p>Du betalar endast för det du använder – direkt från källan, utan dyra mellanhänder. Ingen prenumeration. Inga bindningar.</p>

  <p><strong>Priser:</strong></p>
  <ul>
    <li>Tal-till-text: $0.006 per minut</li>
    <li>Notatgenerering: $5 per 1 miljon tokens (input) och $10 per 1 miljon tokens (output)</li>
  </ul>

  <p><strong>Exempel – 15 minuters konsultation:</strong></p>
  <ul>
    <li>Tal-till-text: 15 × $0.006 = $0.09</li>
    <li>Notatgenerering: vanligtvis mellan $0.005 och $0.01</li>
    <li>Totalt: cirka $0.10 för hela konsultationen</li>
  </ul>

  <p><strong>Exempel på månadskostnad vid full användning:</strong></p>
  <ul>
    <li>20 konsultationer per dag × 4 dagar i veckan × 4 veckor = 320 konsultationer</li>
    <li>Total månadskostnad: cirka $30–31</li>
  </ul>

  <p><strong>Du betalar bara för användning:</strong><br>
  Om du inte använder tjänsten på grund av semester, sjukdom eller ledighet, betalar du ingenting.</p>
</div>
`,
};

export const transcribeTranslations = {
  pageTitle: "Transkriptionstjänst med annonser och guideöverlägg",
  openaiUsageLinkText: "Översikt över kostnader",
  openaiWalletLinkText: "Plånbokssaldo",
  btnFunctions: "Funktioner",
  btnGuide: "Guide",
  backToHome: "Tillbaka till startsidan",
  recordingAreaTitle: "Inspelningsområde",
  recordTimer: "Inspelningstimer: 0 sek",
  transcribeTimer: "Fullföljandetimer: 0 sek",
  transcriptionPlaceholder: "Transkriptionsresultatet visas här...",
  startButton: "Starta inspelning",
  readFirstText: "Läs först! ➔",
  stopButton: "Stoppa/Avsluta",
  pauseButton: "Pausa inspelning",
  statusMessage: "Välkommen! Klicka på 'Starta inspelning' för att börja.",
  noteGenerationTitle: "Notisgenerering",
  generateNoteButton: "Generera notis",
  noteTimer: "Notisgenereringstimer: 0 sek",
  generatedNotePlaceholder: "Den genererade notisen visas här...",
  customPromptTitle: "Anpassad prompt",
  promptSlotLabel: "Promptplats:",
  customPromptPlaceholder: "Ange anpassad prompt här",
  adUnitText: "Din annons här",
  guideHeading: "Guide & Instruktioner",
guideText: `Välkommen till <strong>Transcribe Notes</strong>. Denna applikation gör det möjligt för vårdpersonal, terapeuter och andra yrkesutövare att spela in och transkribera konsultationer, samt generera professionella journalanteckningar med hjälp av en AI-driven notatgenerator.<br><br>

<strong>Så här använder du funktionerna:</strong><br><br>

<ul>
  <li><strong>Inspelning:</strong> Klicka på "Starta inspelning" för att börja spela in ljud. Varje 2 minuter skickas ett ljudavsnitt automatiskt till OpenAIs servrar för transkribering. Transkriptionen visas successivt i textfältet för transkribering.<br><br>
  <strong><u>Viktigt:</u> Inspelningsfunktionen fungerar inte i alla webbläsare. Vi rekommenderar att du använder <strong>Google Chrome</strong> eller <strong>Microsoft Edge</strong>.</strong></li><br>

  <li><strong>Paus och återuppta:</strong> Du kan använda knappen "Paus" för att tillfälligt stoppa inspelningen – till exempel om konsultationen avbryts eller om du behöver lämna rummet en stund. När du klickar på "Paus" laddas det aktuella ljudsegmentet upp och transkriberas, och inspelningen pausas. När du är redo att fortsätta klickar du på "Återuppta", och inspelningen återupptas automatiskt med nästa segment. Timern fortsätter från där den stannade, och sessionen kan avslutas som vanligt med "Stoppa/Avsluta".</li><br>

  <li><strong>Avslut:</strong> När du klickar på "Stoppa/Klar", avslutas inspelningen. Tidsräknaren för slutförande visar hur lång tid det tar att ta emot hela transkriptionen (vanligtvis inom 5–10 sekunder).</li><br>

  <li><strong>Anpassad prompt:</strong> Till höger kan du välja en promptplats (1–10) och skriva in din egen prompt. Prompten sparas automatiskt och kopplas till din API-nyckel. Du kan skapa vilken prompt du vill som passar din dokumentationsstil, ton och kliniska inriktning. Detta ger dig full flexibilitet i hur anteckningarna genereras.</li><br>

  <li><strong>Generera anteckning:</strong> När transkriptionen är klar, klicka på "Generera anteckning" för att skapa ett journalutdrag baserat på din transkription och valda/skapade prompt. Genererade journalanteckningar måste granskas och valideras av vårdpersonal innan de används.</li><br>

  <li><strong>Kostnadsöversikt:</strong> För att se din nuvarande användning hos OpenAI, klicka på länken för kostnadsöversikt som är placerad uppe till höger på sidan.</li><br>

  <li><strong>Säkerhet:</strong> Din ljudinspelning skickas direkt till OpenAIs API-servrar, som inte lagrar datan och endast använder den för transkribering. Den transkriberade texten visas endast i din webbläsare, och <strong>den raderas/försvinner så snart du stänger webbläsaren eller laddar nytt innehåll.</strong></li><br>

  <li><strong>Guide-knappen:</strong> Klicka på "Guide"-knappen igen för att återgå till huvudsidan.</li>
</ul><br><br>

<strong>Exempel på promptar:</strong><br><br>

<strong>Konsultation:</strong><br>
"Systemprompt – Medicinsk notatsgenerator

Skriv en medicinskt korrekt, journalfärdig notis baserad på ett transkriberat samtal mellan läkare och patient. Använd följande struktur (om inget annat anges i diktatet):
Bakgrund (endast vid relevant historik), Aktuellt/anamnes, Undersökning (punktform), Bedömning, Plan.

Regler:
– Inkludera inte information, undersökningar eller fynd som inte uttryckligen nämns.
– Negativa fynd endast om de anges.
– Blodprover: skriv “relevanta blodprover beställs”, lista dem inte.
– Rätta uppenbara stavfel i läkemedelsnamn.
– Använd inte specialtecken eller radbrytningar före rubriker.
– Följ läkarens uttryckliga instruktioner kring stil, längd eller specifika formuleringar.

Om läkaren lägger till kommentarer efter att patienten har lämnat ska dessa beaktas. Notatet ska vara välformulerat."

<br><br>

<strong>Brev till patient:</strong><br>
"Skriv ett brev från läkaren till patienten. Börja med Hej \\"namn\\", och avsluta med<br>
Vänligen<br>
\\"Ditt namn\\"<br>
\\"Namn på vårdcentral\\"<br>
Brevet ska ha en professionell och formell ton. Du kan förbättra språket något för bättre flyt."

<br><br>

Dessa är välfungerande exempel, men du kan gärna anpassa dem till din egen dokumentationsstil, specialitet och typ av konsultation. Du kan också skapa helt egna promptar för andra ändamål.
`,
};
