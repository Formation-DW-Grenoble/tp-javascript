// Modifie le numéro de la question
$('#question-id').html('1');
// Modifie le texte de la question
$('#current-question-text').html(questionData[0].text);
// Modifie le texte des 4 réponses possibles à la question
$('#answer1-caption').html(questionData[0].answer1);
$('#answer2-caption').html(questionData[0].answer2);
$('#answer3-caption').html(questionData[0].answer3);
$('#answer4-caption').html(questionData[0].answer4);
