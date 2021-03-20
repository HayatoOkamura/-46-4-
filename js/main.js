'use strict'

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const rasult = document.getElementById('rasult');
  const scoreLabel = document.querySelector('#result > p');

  const quizSet = shuffle(
    [
     {q: '乃木坂46の4期生は何人いるでしょう？', c: ['16人', '15人', '14人']},
     {q: '北川悠理さんの誕生日は西暦何年、何月何日でしょう？', c: ['2001年8月8日', '2001年8月10日', '2000年8月8日']},
     {q: '26枚目シングル「僕は僕を好きになる」収録曲、「Out of the blue」のセンターを務めているメンバーは誰でしょう？', c: ['早川聖来さん', '田村真佑さん', '掛橋紗耶香さん']},
   ]);
  
  let currentNum = 0;
  let isAnswered;
  let score = 0;

  

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnser(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;
    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');

    }
    btn.classList.remove('disabled');
  }

 function setQuiz() {
   isAnswered = false;

  question.textContent = quizSet[currentNum].q;

  while(choices.firstChild) {
    choices.removeChild(choices.firstChild);
  }

  const shuffledChoices = shuffle([...quizSet[currentNum].c]);
  shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener('click', () => {
      checkAnser(li);
    });
    choices.appendChild(li);
  });

  if (currentNum === quizSet.length - 1) {
    btn.textContent = 'Show score';
  }
 }

 setQuiz();

 btn.addEventListener('click', () => {
  if (btn.classList.contains('disabled')) {
    return;
  }
  btn.classList.add('disabled');

  if (currentNum === quizSet.length - 1) {
    scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
    result.classList.remove('hidden');
  } else {
    currentNum++;
    setQuiz();
  }

 });

}