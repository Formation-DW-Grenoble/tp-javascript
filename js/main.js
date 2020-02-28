// Définit la valeur de départ de la question actuelle
var currentQuestionId = 0;

// Fonction réutilisable qui permet de charger une question dans la page
function loadQuestion(questionId) {
  // Modifie le numéro de la question
  $('#question-id').html(questionId + 1);
  // Modifie le texte de la question
  $('#current-question-text').html(questionData[questionId].text);
  // Modifie le texte des 4 réponses possibles à la question
  for (var i = 1; i <= 4; i += 1) {
    $('#answer' + i + '-caption').html(questionData[questionId]['answer' + i]);
  }
}

// Associe une action à l'envoi du formulaire
$('#question-form').submit(function(event) {
  // Récupère le contenu du formulaire
  var formContent = $('#question-form').serializeArray();
  // Récupère le numéro de la réponse sélectionnée par l'utilisateur
  var selectedAnswer = formContent[0].value;
  // Si la réponse sélectionnée par l'utilisateur a le même numéro que la bonne réponse à la question
    // (note: la réponse sélectionnée par l'utilisateur revient sous forme de texte,
    // il faut donc commencer par la transformer en nombre)
  if (Number(selectedAnswer) === questionData[currentQuestionId].rightAnswer) {
    window.alert('Bonne réponse!');
  } else {
    window.alert('Mauvaise réponse!');
  }

  // Empêche le rechargement de la page (comportement normal de l'envoi de formulaire)
  event.preventDefault();
  // Augmente le numéro de la question actuelle de 1
  currentQuestionId += 1;
  // Si la dernière question a été atteinte
  if (currentQuestionId >= questionData.length) {
    // Si l'utilisateur souhaite recommencer le quizz
    if (window.confirm('Voulez-vous recommencer?')) {
      // Revient à la première question
      currentQuestionId = 0;
    } else {
      // Arrête la fonction pour éviter de charger une nouvelle question (ligne 33)
      return;
    }
  }
  // Charge la question correspondant à ce numéro
  loadQuestion(currentQuestionId);
});

// Charger la première question
loadQuestion(0);
