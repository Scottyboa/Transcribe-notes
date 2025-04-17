export const indexTranslations = {
  pageTitle: "Transcribe Notes",
  headerTitle: "Transcribe Notes",
  headerSubtitle: "Advanced AI-Powered Speech-to-Text and Clinical Note Generation for Healthcare Consultations",
  startText: "Dont have an API-key yet? Click on «API guide- How to Get» for easy instructions.",
  apiPlaceholder: "Enter API Key here",
  enterButton: "Enter Transcription Tool",
  guideButton: "API guide - How to use",
  securityButton: "Security",
  aboutButton: "About",
  adRevenueMessage: "As this website is free to use and relies solely on ad revenue, please consent to ads to help support the service.",
  securityModalHeading: "Privacy",
securityModalText: `Your privacy and the security of patient information are our highest priority. We implement robust measures to ensure your data remains confidential and secure:<br><br>
- <strong>Direct and local processing:</strong> All data processed by our system – including audio recordings, transcripts, and notes – is sent directly to OpenAI via their secure API. No data is processed or stored on our own servers. Transcripts and notes are only displayed and temporarily stored in your browser and are automatically deleted when replaced or when the browser is closed.<br><br>
- <strong>Automatic deletion:</strong> As soon as a transcript or note is generated and displayed on your screen, it is automatically removed from your browser's memory when replaced with new content or when you leave the page. Audio files are processed only temporarily in the browser to enable upload to OpenAI and are not retained after use.<br><br>
- <strong>Protection against unauthorized access:</strong> Your data is processed directly by OpenAI and is only visible locally in your browser. Nothing is stored on our servers. Even if someone gains access to your API key, no data can be retrieved from our service.<br><br>
- <strong>GDPR-compliant data processing:</strong> All data processing is handled through OpenAI’s APIs and displayed only in your browser. OpenAI provides GDPR-compliant data handling and does not use your content for model training or further development. <p>
  You can read more about this at <a href="https://openai.com/security-and-privacy/" target="_blank" style="color: blue; text-decoration: underline;">OpenAI Security and Privacy Policy</a>.
<br><br>
<strong>Additional privacy practices:</strong><br><br>
- <strong>Minimal data collection:</strong> We collect only the information necessary to deliver our services. This includes your language preference and a device token used solely to store user preferences locally in your browser. Your OpenAI API key is never stored by us but is temporarily held in your browser during the session. No additional personal information is collected or processed.<br><br>
- <strong>Use of cookies:</strong> Cookies on this site are used exclusively to display personalized ads and improve your user experience. We do not use these cookies to collect or store personal data beyond what is required for this purpose. In addition, the site uses cookies to store user preferences – such as language selection and custom prompts – and to manage consent.<br><br>
- <strong>Data processing and retention:</strong> All data – including audio recordings, transcripts, and generated notes – is processed solely in the browser and via OpenAI. Nothing is stored permanently, and all content is automatically deleted once the process is complete or when the page is closed. We do not store or share any personally identifiable information.<br><br>
- <strong>Third-party data sharing and regulatory compliance:</strong> We do not sell or share your personal data with third parties. Any data shared with external services – such as OpenAI for transcription and note generation or Google AdSense for personalized advertising – is limited to anonymized information strictly related to ad personalization and user preferences, and does not include your recordings, transcripts, or generated notes. All data sharing is conducted under strict confidentiality standards and in full compliance with applicable privacy regulations.<br><br>
Please note that due to the system’s design, all data is automatically deleted shortly after processing and is not stored permanently anywhere, unless you as the user choose to save the information locally.`,
  aboutModalHeading: "About",
  aboutModalText: `This website was created to provide healthcare professionals and other users with direct access to high-quality speech-to-text transcription and clinical note generation—without unnecessary costs or intermediaries.<br><br>
By using your own OpenAI API key, you connect directly to the source of the technology. This means you only pay the actual usage cost set by OpenAI, without markups or subscription fees.<br><br>
Many existing providers offer similar services but charge significantly more—often 8 to 10 times the real cost of the underlying technology. This platform offers the same functionality at a fraction of the price.<br><br>
<strong>Key points:</strong><br>
• No subscription, no account required.<br>
• You only pay OpenAI directly for what you use.<br>
• The website itself is completely free.<br><br>
To continue offering this free service, we would greatly appreciate it if you accept the display of ads from Google Ads. Ad revenue helps us cover hosting and operational costs, allowing the service to remain accessible to everyone.`,
  guideModalHeading: "API key - How to Get",
guideModalText: `To use this web app, you must first create an OpenAI API account, generate an API key, and ensure that your OpenAI wallet has sufficient funds. The API key is then copied and pasted into the designated field. When you press "Enter", the web app temporarily stores the API key for the session—this key connects you to OpenAI’s servers so that speech-to-text transcription and note generation can function. Please note that you are charged immediately for each task (speech-to-text and/or note generation). For more information on costs, see the "Cost Information" section on the homepage.
<br><br>
<strong>1. Create your OpenAI API account</strong><br>
To get started, you need to create an account on the OpenAI API platform. This account serves as your dashboard for managing API keys and billing. To begin, visit <a href="https://platform.openai.com/signup" style="color:blue;">OpenAI API Registration</a>. Follow the instructions to create a user account. Once registered, you’ll gain access to your dashboard, where you can generate a personal API key and add credit to your OpenAI wallet.
<br><br>
<strong>2. Generate an API key</strong><br>
After creating your account, go to the <a href="https://platform.openai.com/account/api-keys" style="color:blue;">API Key Management</a> page to generate a new API key. Click the button to create a new key. Important: The key will only be visible once. Copy it immediately and store it securely (e.g., in a text file). If you lose the key or suspect it has been compromised, you can easily deactivate/delete it and generate a new one on the same page.
<br><br>
<strong>3. Add funds to your OpenAI wallet</strong><br>
To use the web app, your OpenAI wallet must have sufficient funds. Visit the <a href="https://platform.openai.com/account/billing/overview" style="color:blue;">Billing and Payment page</a> to top up your balance. You can add any amount at any time. As long as funds are available, you’ll be able to use the features in this web app—each task is charged immediately. For a detailed pricing overview, see the "Cost Information" section.
<br><br>
<strong>4. Sign a Data Processing Agreement (DPA)</strong><br>
If you plan to use the API services to process personal data (e.g., in a healthcare setting), it is recommended that you enter into a Data Processing Agreement with OpenAI. You can find OpenAI’s standard agreement here: <a href="https://ironcladapp.com/public-launch/63ffefa2bed6885f4536d0fe" style="color:blue;">OpenAI Data Processing Agreement (DPA)</a>. To fill in your correct organization ID, visit <a href="https://platform.openai.com/settings/organization/general" style="color:blue;">your OpenAI organization profile</a>. Once the agreement is signed, you’re ready to use the service.
<br><br>
<strong>Session Security Notice</strong><br>
When you log in by entering your API key on the homepage and pressing Enter, the key is stored only temporarily in your browser session. This means that if you leave the site, close your browser, or shut down your computer, the API key will not be saved. You’ll need to paste it again the next time you use the web app, which helps keep your key secure.`,
  priceButton: "Price",
  priceModalHeading: "Price",
priceModalText: `
<div>
  <p><strong>Cost Information</strong></p>
  <p>You only pay for what you use — directly from the source, with no costly middlemen. No subscription. No commitment.</p>

  <p><strong>Prices:</strong></p>
  <ul>
    <li>Speech-to-text: $0.006 per minute</li>
    <li>Note generation: $5 per 1 million tokens (input) and $10 per 1 million tokens (output)</li>
  </ul>

  <p><strong>Example – 15-minute consultation:</strong></p>
  <ul>
    <li>Speech-to-text: 15 × $0.006 = $0.09</li>
    <li>Note generation: typically between $0.005 and $0.01</li>
    <li>Total: approximately $0.10 for the full consultation</li>
  </ul>

  <p><strong>Example monthly cost with regular use:</strong></p>
  <ul>
    <li>20 consultations per day × 4 days per week × 4 weeks = 320 consultations</li>
    <li>Total monthly cost: approximately $30–31</li>
  </ul>

  <p><strong>You only pay for usage:</strong><br>
  If you don’t use the service due to vacation, illness, or other reasons, you pay nothing.</p>
</div>
`,
};

export const transcribeTranslations = {
  pageTitle: "Transcription Tool with Ads and Guide Overlay",
  openaiUsageLinkText: "Cost Usage Overview",
  openaiWalletLinkText: "Wallet Balance",
  btnFunctions: "Functions",
  btnGuide: "Guide",
  backToHome: "Back to frontpage",
  recordingAreaTitle: "Recording Area",
  recordTimer: "Recording Timer: 0 sec",
  transcribeTimer: "Completion Timer: 0 sec",
  transcriptionPlaceholder: "Transcription result will appear here...",
  startButton: "Start Recording",
  readFirstText: "Read first! ➔",
  stopButton: "Stop/Complete",
  pauseButton: "Pause Recording",
  statusMessage: "Welcome! Click \"Start Recording\" to begin.",
  noteGenerationTitle: "Note Generation",
  generateNoteButton: "Generate Note",
  noteTimer: "Note Generation Timer: 0 sec",
  generatedNotePlaceholder: "Generated note will appear here...",
  customPromptTitle: "Custom Prompt",
  promptSlotLabel: "Prompt Slot:",
  customPromptPlaceholder: "Enter custom prompt here",
  adUnitText: "Your Ad Here",
  guideHeading: "Guide & Instructions",
guideText: `Welcome to the Transcribe Notes Transcription tool. This application allows medical professionals, therapists, and other practitioners to record and transcribe consultations, as well as generate professional notes using an AI-powered note generator.<br><br>

<strong>How to Use the Functions:</strong><br><br>

<ul>
  <li><strong>Recording:</strong> Click "Start Recording" to begin capturing audio. Every 2 minutes, a chunk of audio is automatically sent to the OpenAI servers for transcription. The transcripts will appear sequentially in the transcription output field.<br><br>
  <strong><u>Important:</u> The recorder does not work in every web browser. It is recommended to use either <strong>Google Chrome</strong> or <strong>Microsoft Edge</strong>.</strong></li><br>

  <li><strong>Pause and Resume:</strong> You can use the "Pause" button to temporarily stop the recording—for instance, if the consultation is interrupted or you need to step out of the office briefly. When you click "Pause", the current audio segment is uploaded and transcribed, and the recording is paused. When you're ready to continue, click "Resume", and the recording automatically resumes with the next segment. The timer continues from where it left off, and the session can be ended as usual by clicking "Stop/Complete".</li><br>

  <li><strong>Completion:</strong> After clicking "Stop/Complete", the recording stops. The Completion Timer counts until the full transcript is received (usually within 5–10 seconds).</li><br>

  <li><strong>Custom Prompt:</strong> On the right, select a prompt slot (1–10) and enter your custom prompt. Your prompt is saved automatically and linked to your API key. You can create any prompt that fits your documentation style, tone, and clinical focus. This gives you full flexibility over how your notes are generated.</li><br>

  <li><strong>Note Generation:</strong> Once transcription is complete, click "Generate Note" to create a note based on your transcript and selected/custom prompt. Generated medical notes must be reviewed and validated by healthcare professionals before use.</li><br>

  <li><strong>Usage Overview:</strong> To check your current usage at OpenAI, click on the usage overview hyperlink on the main interface.</li><br>

  <li><strong>Security:</strong> Your audio recording is sent directly to OpenAI’s API servers, which do not store the data and only use it for the purpose of transcription. The transcribed text displayed in your browser is not saved anywhere, and it is deleted/disappears as soon as you close the browser or load new content.</li><br>

  <li><strong>Guide Toggle:</strong> Click the "Guide" button again to return to the main interface.</li>
</ul><br><br>

<strong>Prompt Examples:</strong><br><br>

<strong>Consultation:</strong><br>
"System prompt – Medical Note Generator

Write a medically accurate, journal-ready note based on a transcribed doctor-patient conversation. Use the following structure (unless otherwise specified in the dictation):
Background (only if relevant history), Presenting complaint/anamnesis, Examination (bullet points), Assessment, Plan.

Rules:
– Do not include information, investigations, or findings not explicitly mentioned.
– Negative findings only if stated.
– Blood tests: write “relevant blood tests are ordered”, do not list them.
– Correct obvious misspellings in medication names.
– Do not use special characters or line breaks before headings.
– Follow explicit instructions from the doctor regarding style, length, or specific wording.

If the doctor adds comments after the patient has left, these must be considered. The note should be well-written."

<br><br>

<strong>Letter to patient:</strong><br>
"Write a letter from the doctor to the patient. Start with Hi \\"name\\", and end with<br>
Regards<br>
\\"Your name\\"<br>
\\"Clinic name\\"<br>
The letter must have a professional and formal tone. You may improve the wording slightly for better flow."

<br><br>

These are examples that work well, but feel free to adapt them to your documentation style, specialty, and type of consultation. You can also create entirely custom prompts for any purpose you wish.
`,
};

export default { indexTranslations, transcribeTranslations };
