var currentQuestionId = 0;

// Modifie le numéro de la question
$('#question-id').html('1');
// Modifie le texte de la question
$('#current-question-text').html(questionData[0].text);
// Modifie le texte des 4 réponses possibles à la question
for (var i = 1; i <= 4; i += 1) {
  $('#answer' + i + '-caption').html(questionData[0]['answer' + i]);
}

// Associe une action à l'envoi du formulaire
$('#question-form').submit(function(event) {
  currentQuestionId += 1;
  // Empêche le rechargement de la page (comportement normal de l'envoi de formulaire)
  event.preventDefault();
  // Modifie le numéro de la question
  $('#question-id').html(currentQuestionId + 1);
  // Modifie le texte de la question
  $('#current-question-text').html(questionData[currentQuestionId].text);
  // Modifie le texte des 4 réponses possibles à la question
  for (var i = 1; i <= 4; i += 1) {
    $('#answer' + i + '-caption').html(questionData[currentQuestionId]['answer' + i]);
  }
});


