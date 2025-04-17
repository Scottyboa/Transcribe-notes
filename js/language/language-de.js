// js/language-de.js

export const indexTranslations = {
  pageTitle: "Transcribe Notes",
  headerTitle: "Transcribe Notes",
  headerSubtitle: "Fortschrittliche KI-gestützte Sprach-zu-Text-Transkription und Notizenerstellung für medizinische Konsultationen",
  startText: "Um zu beginnen, geben Sie bitte Ihren OpenAI API-Schlüssel ein:",
  apiPlaceholder: "Geben Sie hier den API-Schlüssel ein",
  enterButton: "Transkriptionstool öffnen",
  guideButton: "API-Anleitung – So nutzen Sie es",
  securityButton: "Sicherheit",
  aboutButton: "Über",
  adRevenueMessage: "Da diese Website kostenlos genutzt werden kann und ausschließlich auf Werbeeinnahmen angewiesen ist, stimmen Sie bitte personalisierter Werbung zu, um den Dienst zu unterstützen.",
  securityModalHeading: "Datenschutz",
securityModalText: `Der Schutz Ihrer Privatsphäre und die Sicherheit von Patientendaten haben für uns oberste Priorität. Diese Web-App wurde so entwickelt, dass die gesamte Datenverarbeitung direkt und temporär in Ihrem Browser erfolgt – ohne jegliche serverseitige Speicherung oder Verarbeitung unsererseits.<br><br>

<strong>Wie Daten verarbeitet werden:</strong><br>
Audioaufnahmen, Transkriptionen und generierte Notizen werden lokal in Ihrem Browser verarbeitet und direkt über die sichere API von OpenAI übermittelt. Transkriptionen und Notizen werden ausschließlich temporär im Browser angezeigt und automatisch gelöscht, sobald sie ersetzt oder die Seite geschlossen wird. Audiodateien werden lediglich vorübergehend verarbeitet, um die Transkription zu ermöglichen, und nicht gespeichert.<br><br>

<strong>Speicherung bei OpenAI:</strong><br>
Textdaten werden vorübergehend für bis zu 30 Tage gespeichert, um Fehlerbehebung und mögliche Auskunftsanfragen durch den Nutzer zu unterstützen. Anschließend werden sie automatisch gelöscht. Die Daten werden nicht für das Training oder die Weiterentwicklung von Modellen verwendet. OpenAI folgt außerdem dem GDPR-Rahmenwerk für Datenschutz und Datenübermittlung. Weitere Informationen finden Sie unter <a href="https://openai.com/security-and-privacy/" target="_blank" style="color: blue; text-decoration: underline;">OpenAI Sicherheit und Datenschutz</a>.<br><br>
Nutzern wird zudem empfohlen, eine Datenschutzvereinbarung (Data Processing Addendum, DPA) mit OpenAI abzuschließen. Dies ist einfach möglich – eine Anleitung dazu finden Sie im <strong>API-Leitfaden auf der Startseite</strong>.<br><br>

<strong>Cookies und Werbung:</strong><br>
Wir verwenden Cookies ausschließlich zur Verbesserung der Benutzererfahrung und zur Anzeige relevanter Werbung über Google Ads. Diese Cookies speichern keine personenbezogenen Daten über das für Funktionalität und Anpassung erforderliche Maß hinaus. Die Website verwendet Cookies auch zur Speicherung von Spracheinstellungen, benutzerdefinierten Prompts und Einwilligungspräferenzen.`,

  aboutModalHeading: "Über uns",
  aboutModalText: `Diese Website wurde entwickelt, um Gesundheitsfachkräfte und andere Nutzer mit direktem Zugang zu hochwertiger Spracherkennung und klinischer Notizgenerierung zu versorgen – ohne unnötige Kosten oder Zwischenhändler.<br><br>
Durch die Verwendung Ihres eigenen OpenAI API-Schlüssels verbinden Sie sich direkt mit der Quelle der Technologie. Das bedeutet, dass Sie nur die tatsächlichen Nutzungskosten zahlen, die von OpenAI festgelegt werden, ohne Aufschläge oder Abonnementgebühren.<br><br>
Viele bestehende Anbieter offerieren ähnliche Dienste, verlangen jedoch deutlich mehr – oftmals 8 bis 10 Mal die tatsächlichen Kosten der zugrunde liegenden Technologie. Diese Plattform bietet dieselbe Funktionalität zu einem Bruchteil des Preises.<br><br>
<strong>Wichtige Punkte:</strong><br>
• Kein Abonnement, kein Konto erforderlich.<br>
• Sie zahlen nur OpenAI direkt für die tatsächlich genutzte Leistung.<br>
• Die Website selbst ist völlig kostenlos.<br><br>
Damit wir diesen kostenlosen Dienst weiterhin anbieten können, würden wir uns sehr freuen, wenn du der Anzeige von Werbung über Google Ads zustimmst. Die Werbeeinnahmen helfen uns, die Kosten für Hosting und Betrieb zu decken, damit der Dienst für alle verfügbar bleiben kann.`,
  guideModalHeading: "Anleitung",
guideModalText: `Um diese Web-App nutzen zu können, musst du zunächst ein OpenAI API-Konto erstellen, einen API-Schlüssel generieren und sicherstellen, dass dein OpenAI-Wallet über ausreichendes Guthaben verfügt. Der API-Schlüssel wird dann in das vorgesehene Feld eingefügt. Wenn du auf "Enter" klickst, wird der Schlüssel vorübergehend für die Dauer der Sitzung gespeichert – er verbindet dich mit den Servern von OpenAI, damit Sprach-zu-Text-Transkription und Notizgenerierung funktionieren können. Bitte beachte, dass für jede durchgeführte Aufgabe (Sprach-zu-Text und/oder Notizgenerierung) sofort Kosten anfallen. Weitere Informationen zu den Kosten findest du im Abschnitt "Kosteninformationen" auf der Startseite.
<br><br>
<strong>1. Erstelle dein OpenAI API-Konto</strong><br>
Um loszulegen, musst du ein Konto auf der OpenAI API-Plattform erstellen. Dieses Konto dient zur Verwaltung deiner API-Schlüssel und deiner Abrechnungsdaten. Besuche <a href="https://platform.openai.com/signup" style="color:blue;">OpenAI API Registrierung</a>, um dich anzumelden. Folge den Anweisungen, um ein Benutzerkonto zu erstellen. Nach der Registrierung erhältst du Zugriff auf dein Dashboard, wo du deinen persönlichen API-Schlüssel generieren und Guthaben auf dein OpenAI-Wallet aufladen kannst.
<br><br>
<strong>2. Generiere einen API-Schlüssel</strong><br>
Nachdem du dein Konto erstellt hast, gehe zur Seite <a href="https://platform.openai.com/account/api-keys" style="color:blue;">API-Schlüsselverwaltung</a>, um einen neuen Schlüssel zu generieren. Klicke auf die Schaltfläche zum Erstellen eines neuen API-Schlüssels. Wichtig: Der Schlüssel wird nur einmal angezeigt – kopiere ihn sofort und speichere ihn sicher (z. B. in einer Textdatei). Falls du den Schlüssel verlierst oder vermutest, dass er kompromittiert wurde, kannst du ihn an derselben Stelle deaktivieren/löschen und einen neuen erstellen.
<br><br>
<strong>3. Lade Guthaben auf dein OpenAI-Wallet</strong><br>
Damit die Web-App funktioniert, muss dein OpenAI-Wallet über ausreichend Guthaben verfügen. Besuche die <a href="https://platform.openai.com/account/billing/overview" style="color:blue;">Abrechnungs- und Zahlungsseite</a>, um Guthaben aufzuladen. Du kannst jederzeit einen beliebigen Betrag einzahlen. Solange Guthaben vorhanden ist, kannst du alle Funktionen der Web-App nutzen – jede Aufgabe wird direkt abgerechnet. Eine detaillierte Preisübersicht findest du im Abschnitt "Kosteninformationen".
<br><br>
<strong>4. Schließe eine Datenverarbeitungsvereinbarung (DPA) ab</strong><br>
Wenn du planst, die API-Dienste zur Verarbeitung personenbezogener Daten zu nutzen (z. B. im Gesundheitswesen), wird empfohlen, eine Datenverarbeitungsvereinbarung mit OpenAI abzuschließen. Du findest die Standardvereinbarung hier: <a href="https://ironcladapp.com/public-launch/63ffefa2bed6885f4536d0fe" style="color:blue;">OpenAI Datenverarbeitungsvereinbarung (DPA)</a>. Um deine korrekte Organisations-ID anzugeben, besuche bitte dein <a href="https://platform.openai.com/settings/organization/general" style="color:blue;">OpenAI Organisationsprofil</a>. Sobald die Vereinbarung unterzeichnet ist, bist du bereit, den Dienst zu nutzen.
<br><br>
<strong>Sicherheitshinweis zur Sitzung</strong><br>
Wenn du deinen API-Schlüssel auf der Startseite eingibst und auf Enter klickst, wird dieser nur vorübergehend in deiner aktuellen Browsersitzung gespeichert. Das bedeutet: Wenn du die Seite verlässt, den Browser schließt oder den Computer ausschaltest, wird der Schlüssel nicht gespeichert. Du musst ihn beim nächsten Besuch erneut einfügen – das sorgt dafür, dass dein Schlüssel sicher bleibt.`,
  priceButton: "Preis",
  priceModalHeading: "Preis",
priceModalText: `
<div>
  <p><strong>Kostenübersicht</strong></p>
  <p>Sie zahlen nur für das, was Sie tatsächlich nutzen – direkt an die Quelle, ohne teure Zwischenhändler. Kein Abo. Keine Bindung.</p>

  <p><strong>Preise:</strong></p>
  <ul>
    <li>Spracherkennung: $0.006 pro Minute</li>
    <li>Notizerstellung: $5 pro 1 Million Tokens (Input) und $10 pro 1 Million Tokens (Output)</li>
  </ul>

  <p><strong>Beispiel – 15-minütige Konsultation:</strong></p>
  <ul>
    <li>Spracherkennung: 15 × $0.006 = $0.09</li>
    <li>Notizerstellung: typischerweise zwischen $0.005 und $0.01</li>
    <li>Gesamt: etwa $0.10 für die gesamte Konsultation</li>
  </ul>

  <p><strong>Monatliche Beispielkosten bei voller Nutzung:</strong></p>
  <ul>
    <li>20 Konsultationen pro Tag × 4 Tage pro Woche × 4 Wochen = 320 Konsultationen</li>
    <li>Gesamtkosten pro Monat: etwa $30–31</li>
  </ul>

  <p><strong>Sie zahlen nur bei Nutzung:</strong><br>
  Bei Urlaub, Krankheit oder Elternzeit fallen keine Kosten an.</p>
</div>
`,
};

export const transcribeTranslations = {
  pageTitle: "Transkriptionstool mit Werbung und Anleitung",
  openaiUsageLinkText: "Kostenübersicht",
  openaiWalletLinkText: "Kontostand",
  btnFunctions: "Funktionen",
  btnGuide: "Anleitung",
  backToHome: "Zurück zur Startseite",
  recordingAreaTitle: "Aufnahmebereich",
  recordTimer: "Aufnahmetimer: 0 sek",
  transcribeTimer: "Abschlusstimer: 0 sek",
  transcriptionPlaceholder: "Transkriptionsergebnis wird hier angezeigt...",
  startButton: "Aufnahme starten",
  readFirstText: "Erst lesen! ➔",
  stopButton: "Stoppen/Abschließen",
  pauseButton: "Aufnahme pausieren",
  statusMessage: "Willkommen! Klicken Sie auf 'Aufnahme starten', um zu beginnen.",
  noteGenerationTitle: "Notizenerstellung",
  generateNoteButton: "Notiz generieren",
  noteTimer: "Notiz-Timer: 0 sek",
  generatedNotePlaceholder: "Generierte Notiz erscheint hier...",
  customPromptTitle: "Benutzerdefinierter Prompt",
  promptSlotLabel: "Prompt-Slot:",
  customPromptPlaceholder: "Benutzerdefinierten Prompt hier eingeben",
  adUnitText: "Ihre Anzeige hier",
  guideHeading: "Anleitung & Instruktionen",
guideText: `Willkommen bei <strong>Transcribe Notes</strong>. Diese Anwendung ermöglicht es medizinischem Fachpersonal, Therapeut:innen und anderen Anwender:innen, Gespräche aufzuzeichnen und zu transkribieren sowie professionelle Notizen mithilfe eines KI-gestützten Notizgenerators zu erstellen.<br><br>

<strong>So verwendest du die Funktionen:</strong><br><br>

<ul>
  <li><strong>Aufnahme:</strong> Klicke auf "Aufnahme starten", um mit der Tonaufnahme zu beginnen. Alle 2 Minuten wird ein Audioabschnitt automatisch an die Server von OpenAI gesendet, um transkribiert zu werden. Die Transkripte erscheinen fortlaufend im Transkriptionsfeld.<br><br>
  <strong><u>Wichtig:</u> Die Aufnahmefunktion funktioniert nicht in allen Webbrowsern. Wir empfehlen die Verwendung von <strong>Google Chrome</strong> oder <strong>Microsoft Edge</strong>.</strong></li><br>

  <li><strong>Pausieren und Fortsetzen:</strong> Sie können die "Pause"-Schaltfläche verwenden, um die Aufnahme vorübergehend zu stoppen – zum Beispiel, wenn die Konsultation unterbrochen wird oder Sie kurz das Büro verlassen müssen. Wenn Sie auf "Pause" klicken, wird das aktuelle Audiosegment hochgeladen und transkribiert, und die Aufnahme pausiert. Wenn Sie bereit sind fortzufahren, klicken Sie auf "Fortsetzen", und die Aufnahme wird automatisch mit dem nächsten Segment fortgesetzt. Der Timer läuft dort weiter, wo er gestoppt wurde, und die Sitzung kann wie gewohnt mit "Stopp/Abschließen" beendet werden.</li><br>

  <li><strong>Abschluss:</strong> Wenn du auf "Stopp/Fertig" klickst, wird die Aufnahme beendet. Der Abschlusstimer zählt, bis das vollständige Transkript empfangen wurde (in der Regel innerhalb von 5–10 Sekunden).</li><br>

  <li><strong>Benutzerdefinierter Prompt:</strong> Wähle rechts einen Prompt-Slot (1–10) aus und gib deinen eigenen Prompt ein. Dein Prompt wird automatisch gespeichert und mit deinem API-Schlüssel verknüpft. Du kannst jeden beliebigen Prompt erstellen, der zu deinem Dokumentationsstil, Tonfall und fachlichen Fokus passt. So hast du volle Kontrolle über die Generierung deiner Notizen.</li><br>

  <li><strong>Notiz generieren:</strong> Sobald die Transkription abgeschlossen ist, klicke auf "Notiz generieren", um eine medizinische Notiz basierend auf deinem Transkript und dem gewählten Prompt zu erstellen. Generierte medizinische Notizen müssen vor der Verwendung von medizinischem Fachpersonal überprüft und validiert werden.</li><br>

  <li><strong>Kostenübersicht:</strong> Um deine aktuellen Nutzungskosten bei OpenAI zu überprüfen, klicke auf den Link zur Kostenübersicht oben rechts auf dieser Seite.</li><br>

  <li><strong>Sicherheit:</strong> Deine Audioaufnahme wird direkt an die API-Server von OpenAI gesendet, die die Daten nicht speichern und nur für die Transkription verwenden. Der transkribierte Text wird nur in deinem Browser angezeigt und <strong>er wird gelöscht/verschwindet, sobald du den Browser schließt oder neue Inhalte lädst.</strong></li><br>

  <li><strong>Guide-Schaltfläche:</strong> Klicke erneut auf die "Guide"-Schaltfläche, um zur Hauptansicht zurückzukehren.</li>
</ul><br><br>

<strong>Beispiel-Prompts:</strong><br><br>

<strong>Konsultation:</strong><br>
"Systemprompt – Medizinischer Notizgenerator

Erstelle eine medizinisch präzise, dokumentationsfertige Notiz basierend auf einem transkribierten Arzt-Patienten-Gespräch. Verwende folgende Struktur (sofern im Diktat nicht anders angegeben):
Hintergrund (nur bei relevanter Vorgeschichte), Aktuelle Beschwerden/Anamnese, Untersuchung (stichpunktartig), Einschätzung, Plan.

Regeln:
– Keine Informationen, Untersuchungen oder Befunde einfügen, die nicht ausdrücklich erwähnt wurden.
– Negative Befunde nur, wenn erwähnt.
– Blutuntersuchungen: schreibe “relevante Blutuntersuchungen werden veranlasst”, ohne sie aufzulisten.
– Offensichtliche Rechtschreibfehler bei Medikamentennamen korrigieren.
– Keine Sonderzeichen oder Zeilenumbrüche vor Überschriften verwenden.
– Halte dich an explizite Anweisungen des Arztes bzgl. Stil, Länge oder Formulierungen.

Wenn der Arzt nach dem Gespräch noch Anmerkungen macht, sind diese zu berücksichtigen. Die Notiz sollte sprachlich gut ausgearbeitet sein."

<br><br>

<strong>Brief an den Patienten:</strong><br>
"Schreibe einen Brief vom Arzt an den Patienten. Beginne mit Hallo \\"Name\\", und schließe mit<br>
Mit freundlichen Grüßen<br>
\\"Ihr Name\\"<br>
\\"Praxisname\\"<br>
Der Brief soll professionell und formell formuliert sein. Du kannst den Text stilistisch leicht verbessern."

<br><br>

Diese Beispiele funktionieren gut, aber du kannst sie gern an deinen Dokumentationsstil, deine Fachrichtung oder Konsultationstypen anpassen oder ganz eigene Prompts erstellen.
`,
};
