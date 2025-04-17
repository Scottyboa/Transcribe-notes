// js/language-fr.js

export const indexTranslations = {
  pageTitle: "Transcribe Notes",
  headerTitle: "Transcribe Notes",
  headerSubtitle: "Transcription audio en texte et génération de notes avancées pour consultations médicales, propulsées par l'IA",
  startText: "Pour commencer, veuillez entrer votre clé API OpenAI :",
  apiPlaceholder: "Entrez la clé API ici",
  enterButton: "Accéder à l'outil de transcription",
  guideButton: "Guide API – Mode d'emploi",
  securityButton: "Sécurité",
  aboutButton: "À propos",
  adRevenueMessage: "Comme ce site est gratuit et financé uniquement par la publicité, veuillez accepter les publicités personnalisées afin de soutenir le service.",
  securityModalHeading: "Confidentialité",
securityModalText: `Votre vie privée et la sécurité des informations des patients sont notre priorité absolue. Cette application web a été conçue pour que toutes les opérations de traitement des données se déroulent directement et temporairement dans votre navigateur – sans aucun stockage ni traitement côté serveur de notre part.<br><br>

<strong>Comment les données sont traitées :</strong><br>
Les enregistrements audio, les transcriptions et les notes générées sont traités localement dans votre navigateur et envoyés directement à OpenAI via leur API sécurisée. Les transcriptions et notes ne sont affichées que temporairement dans le navigateur et sont automatiquement supprimées lorsqu'elles sont remplacées ou lorsque la page est fermée. Les fichiers audio sont traités uniquement de manière temporaire pour permettre la transcription, puis ils ne sont pas conservés.<br><br>

<strong>Stockage chez OpenAI :</strong><br>
Les données textuelles sont conservées temporairement pendant une durée maximale de 30 jours afin de faciliter la résolution de problèmes et les éventuelles demandes d'accès de la part de l'utilisateur, après quoi elles sont automatiquement supprimées. Les données ne sont pas utilisées pour l'entraînement des modèles ni pour leur développement futur. OpenAI respecte également le cadre réglementaire du RGPD pour le transfert et la protection des données. Pour en savoir plus, consultez <a href="https://openai.com/security-and-privacy/" target="_blank" style="color: blue; text-decoration: underline;">OpenAI Sécurité et Confidentialité</a>.<br><br>
Il est également recommandé que les utilisateurs concluent un accord de traitement des données (DPA) avec OpenAI. Cela peut être fait facilement, et les instructions se trouvent dans le <strong>guide API disponible sur la page d’accueil</strong>.<br><br>

<strong>Cookies et publicités :</strong><br>
Nous utilisons des cookies uniquement pour améliorer l’expérience utilisateur et pour afficher des publicités pertinentes via Google Ads. Ces cookies ne stockent pas de données personnelles au-delà de ce qui est nécessaire pour le bon fonctionnement et la personnalisation. Le site utilise également des cookies pour enregistrer vos préférences linguistiques, les paramètres de prompts personnalisés et les choix de consentement.`,
  aboutModalHeading: "À propos",
  aboutModalText: `Ce site a été créé pour offrir aux professionnels de santé et autres utilisateurs un accès direct à une transcription vocale de haute qualité et à la génération de notes cliniques—sans frais inutiles ni intermédiaires.<br><br>
En utilisant votre propre clé API OpenAI, vous vous connectez directement à la source de la technologie. Cela signifie que vous ne payez que le coût réel d’utilisation défini par OpenAI, sans majoration ni abonnement.<br><br>
De nombreux fournisseurs proposent des services similaires, mais à des tarifs bien plus élevés—souvent 8 à 10 fois plus que le coût réel de la technologie sous-jacente. Cette plateforme offre les mêmes fonctionnalités à une fraction du prix.<br><br>
<strong>Points clés :</strong><br>
• Aucun abonnement, aucun compte requis.<br>
• Vous payez uniquement OpenAI directement pour ce que vous utilisez.<br>
• Le site lui-même est entièrement gratuit.<br><br>
Pour continuer à offrir ce service gratuitement, nous vous serions très reconnaissants d’accepter l’affichage de publicités Google Ads. Les revenus publicitaires nous aident à couvrir les frais d’hébergement et de fonctionnement, afin que le service reste accessible à tous.`,
  guideModalHeading: "Comment utiliser",
guideModalText: `Pour utiliser cette application web, vous devez d'abord créer un compte API OpenAI, générer une clé API et vous assurer que votre portefeuille OpenAI dispose de fonds suffisants. La clé API doit être copiée et collée dans le champ prévu à cet effet. Lorsque vous appuyez sur "Entrée", l'application web enregistre temporairement la clé pour la durée de la session – cette clé vous connecte aux serveurs OpenAI afin de permettre la transcription audio en texte et la génération de notes. Veuillez noter que chaque tâche (transcription et/ou génération de notes) est facturée immédiatement. Pour plus d'informations sur les coûts, consultez la section "Informations sur les coûts" en page d'accueil.
<br><br>
<strong>1. Créez votre compte API OpenAI</strong><br>
Pour commencer, vous devez créer un compte sur la plateforme API d'OpenAI. Ce compte vous permet de gérer vos clés API et vos paramètres de facturation. Pour vous inscrire, rendez-vous sur <a href="https://platform.openai.com/signup" style="color:blue;">Inscription à l’API OpenAI</a>. Suivez les instructions pour créer votre profil utilisateur. Une fois enregistré, vous aurez accès à votre tableau de bord, où vous pourrez générer une clé API personnelle et ajouter des crédits à votre portefeuille OpenAI.
<br><br>
<strong>2. Générez une clé API</strong><br>
Après avoir créé votre compte, rendez-vous sur la page de <a href="https://platform.openai.com/account/api-keys" style="color:blue;">gestion des clés API</a> pour générer une nouvelle clé. Cliquez sur le bouton pour créer une nouvelle clé API. Important : la clé n’apparaîtra qu’une seule fois. Copiez-la immédiatement et conservez-la en lieu sûr (par exemple dans un fichier texte). Si vous la perdez ou pensez qu’elle a été compromise, vous pouvez facilement la désactiver ou la supprimer, puis en générer une nouvelle.
<br><br>
<strong>3. Ajoutez des fonds à votre portefeuille OpenAI</strong><br>
Pour que l'application fonctionne, votre portefeuille OpenAI doit contenir suffisamment de crédits. Accédez à la <a href="https://platform.openai.com/account/billing/overview" style="color:blue;">page de facturation</a> pour ajouter des fonds. Vous pouvez recharger le montant de votre choix à tout moment. Tant que votre solde est positif, vous pouvez utiliser toutes les fonctionnalités de cette application – chaque tâche est facturée immédiatement. Pour consulter les tarifs en détail, veuillez voir la section "Informations sur les coûts".
<br><br>
<strong>4. Signez un accord de traitement des données (DPA)</strong><br>
Si vous comptez utiliser les services de l'API pour traiter des données personnelles (par exemple dans un contexte médical), il est recommandé de signer un accord de traitement des données avec OpenAI. Vous pouvez trouver l’accord standard ici : <a href="https://ironcladapp.com/public-launch/63ffefa2bed6885f4536d0fe" style="color:blue;">Accord de traitement des données OpenAI (DPA)</a>. Pour renseigner correctement votre identifiant d’organisation, rendez-vous sur <a href="https://platform.openai.com/settings/organization/general" style="color:blue;">votre profil d'organisation OpenAI</a>. Une fois l’accord signé, vous êtes prêt à utiliser le service.
<br><br>
<strong>Remarque sur la sécurité de la session</strong><br>
Lorsque vous vous connectez en saisissant votre clé API sur la page d'accueil et en appuyant sur Entrée, cette clé est stockée uniquement temporairement dans votre session de navigateur. Cela signifie que si vous quittez le site, fermez le navigateur ou éteignez l’ordinateur, la clé ne sera pas conservée. Vous devrez la coller à nouveau lors de votre prochaine utilisation – ce qui garantit une meilleure sécurité de votre clé.`,
  priceButton: "Prix",
  priceModalHeading: "Prix",
priceModalText: `
<div>
  <p><strong>Informations sur les coûts</strong></p>
  <p>Vous ne payez que ce que vous utilisez — directement à la source, sans intermédiaires coûteux. Aucun abonnement. Aucun engagement.</p>

  <p><strong>Tarifs :</strong></p>
  <ul>
    <li>Transcription audio : $0.006 par minute</li>
    <li>Génération de notes : $5 pour 1 million de tokens (entrée) et $10 pour 1 million de tokens (sortie)</li>
  </ul>

  <p><strong>Exemple – Consultation de 15 minutes :</strong></p>
  <ul>
    <li>Transcription : 15 × $0.006 = $0.09</li>
    <li>Génération de note : généralement entre $0.005 et $0.01</li>
    <li>Total : environ $0.10 pour toute la consultation</li>
  </ul>

  <p><strong>Exemple de coût mensuel en utilisation régulière :</strong></p>
  <ul>
    <li>20 consultations par jour × 4 jours par semaine × 4 semaines = 320 consultations</li>
    <li>Coût mensuel total : environ $30–31</li>
  </ul>

  <p><strong>Vous ne payez qu’à l’usage :</strong><br>
  En cas de congés, maladie ou absence, vous ne payez rien.</p>
</div>
`,
};

export const transcribeTranslations = {
  pageTitle: "Outil de transcription avec publicités et superposition de guide",
  openaiUsageLinkText: "Aperçu des coûts d'utilisation",
  openaiWalletLinkText: "Solde du portefeuille",
  btnFunctions: "Fonctions",
  btnGuide: "Guide",
  backToHome: "Retour à la page d'accueil",
  recordingAreaTitle: "Zone d'enregistrement",
  recordTimer: "Chronomètre d'enregistrement : 0 sec",
  transcribeTimer: "Chronomètre d'achèvement : 0 sec",
  transcriptionPlaceholder: "Le résultat de la transcription apparaîtra ici…",
  startButton: "Commencer l'enregistrement",
  readFirstText: "À lire d'abord ! ➔",
  stopButton: "Arrêter/Terminer",
  pauseButton: "Mettre l'enregistrement en pause",
  statusMessage: "Bienvenue ! Cliquez sur « Commencer l'enregistrement » pour débuter.",
  noteGenerationTitle: "Génération de notes",
  generateNoteButton: "Générer une note",
  noteTimer: "Chronomètre de génération de notes : 0 sec",
  generatedNotePlaceholder: "La note générée apparaîtra ici…",
  customPromptTitle: "Invite personnalisée",
  promptSlotLabel: "Emplacement de l'invite :",
  customPromptPlaceholder: "Saisissez l'invite personnalisée ici",
  adUnitText: "Votre publicité ici",
  guideHeading: "Guide et instructions",
guideText: `Bienvenue dans <strong>Transcribe Notes</strong>. Cette application permet aux professionnels de santé, thérapeutes et autres praticiens d’enregistrer et de transcrire des consultations, ainsi que de générer des notes professionnelles grâce à un générateur alimenté par intelligence artificielle.<br><br>

<strong>Comment utiliser les fonctionnalités :</strong><br><br>

<ul>
  <li><strong>Enregistrement :</strong> Cliquez sur "Démarrer l’enregistrement" pour commencer à capturer l’audio. Toutes les 2 minutes, un segment audio est automatiquement envoyé aux serveurs d’OpenAI pour transcription. Les transcriptions apparaîtront progressivement dans le champ de sortie.<br><br>
  <strong><u>Important :</u> L’enregistreur ne fonctionne pas avec tous les navigateurs. Il est recommandé d’utiliser <strong>Google Chrome</strong> ou <strong>Microsoft Edge</strong>.</strong></li><br>

  <li><strong>Pause et reprise :</strong> Vous pouvez utiliser le bouton "Pause" pour interrompre temporairement l’enregistrement, par exemple si la consultation est interrompue ou si vous devez quitter le cabinet un instant. Lorsque vous cliquez sur "Pause", le segment audio en cours est téléchargé et transcrit, puis l’enregistrement est mis en pause. Lorsque vous êtes prêt à continuer, cliquez sur "Reprendre", et l’enregistrement reprendra automatiquement avec le segment suivant. Le minuteur continue là où il s’était arrêté, et la session peut être terminée normalement en cliquant sur "Stop/Terminer".</li><br>

  <li><strong>Finalisation :</strong> Après avoir cliqué sur "Stop/Terminer", l’enregistrement s’arrête. Le minuteur de finalisation indique le temps nécessaire pour recevoir la transcription complète (généralement en 5 à 10 secondes).</li><br>

  <li><strong>Prompt personnalisé :</strong> Sur la droite, sélectionnez un emplacement de prompt (1 à 10) et saisissez votre propre prompt. Il sera automatiquement enregistré et associé à votre clé API. Vous pouvez créer tout type de prompt adapté à votre style de documentation, ton et domaine clinique. Cela vous offre une flexibilité totale dans la génération des notes.</li><br>

  <li><strong>Génération de note :</strong> Une fois la transcription terminée, cliquez sur "Générer la note" pour créer une note basée sur la transcription et le prompt sélectionné/personnalisé. Les notes médicales générées doivent être vérifiées et validées par du personnel de santé avant d’être utilisées.</li><br>

  <li><strong>Aperçu des coûts :</strong> Pour consulter votre utilisation actuelle chez OpenAI, cliquez sur le lien vers l’aperçu des coûts situé en haut à droite de cette page.</li><br>

  <li><strong>Sécurité :</strong> Votre enregistrement audio est envoyé directement aux serveurs API d’OpenAI, qui ne stockent pas les données et les utilisent uniquement pour la transcription. Le texte transcrit s’affiche uniquement dans votre navigateur, et <strong>il est supprimé/disparaît dès que vous fermez le navigateur ou rechargez du contenu.</strong></li><br>

  <li><strong>Bouton "Guide" :</strong> Cliquez de nouveau sur le bouton "Guide" pour revenir à l’interface principale.</li>
</ul><br><br>

<strong>Exemples de prompts :</strong><br><br>

<strong>Consultation :</strong><br>
"Prompt système – Générateur de note médicale

Rédigez une note médicalement précise et prête pour le journal à partir d’une conversation transcrite entre le médecin et le patient. Utilisez la structure suivante (sauf indication contraire dans le dictat) :
Contexte (seulement si antécédents pertinents), Motif de consultation/anamnèse, Examen (puces), Évaluation, Plan.

Règles :
– Ne pas inclure d’informations, examens ou constatations non mentionnés explicitement.
– Constatations négatives uniquement si mentionnées.
– Bilans sanguins : écrivez “des bilans sanguins pertinents sont prescrits”, sans les détailler.
– Corrigez les fautes évidentes dans les noms de médicaments.
– N’utilisez pas de caractères spéciaux ni de sauts de ligne avant les titres.
– Suivez les instructions explicites du médecin concernant le style, la longueur ou les formulations spécifiques.

Si le médecin ajoute des commentaires après le départ du patient, ceux-ci doivent être pris en compte. La note doit être bien rédigée."

<br><br>

<strong>Lettre au patient :</strong><br>
"Rédigez une lettre du médecin au patient. Commencez par Bonjour \\"nom\\", et terminez par<br>
Cordialement<br>
\\"Votre nom\\"<br>
\\"Nom du cabinet\\"<br>
La lettre doit avoir un ton professionnel et formel. Vous pouvez améliorer légèrement le style pour une meilleure fluidité."

<br><br>

Ce sont des exemples efficaces, mais vous êtes libre de les adapter à votre style de documentation, votre spécialité ou votre type de consultation. Vous pouvez également créer vos propres prompts pour tout autre usage.
`,
};
