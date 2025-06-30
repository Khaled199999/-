function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'ar-SA';
  window.speechSynthesis.speak(msg);
}

function playLetter(letter) {
  speak(letter);
}

function playWord(word) {
  speak(word);
}

function playSentence(sentence) {
  speak(sentence);
}

function checkAnswer(answer) {
  const result = document.getElementById('quizResult');
  if (answer === 'كتب') {
    result.textContent = '✔️ إجابة صحيحة!';
  } else {
    result.textContent = '❌ حاول مرة أخرى.';
  }
}

function checkGameWord() {
  const input = document.getElementById('wordInput').value.trim();
  const valid = ['بحر', 'حبر', 'برح', 'ربح', 'بر', 'بح', 'حب', 'حر'];
  const result = document.getElementById('gameResult');
  if (valid.includes(input)) {
    result.textContent = '✔️ كلمة صحيحة!';
  } else {
    result.textContent = '❌ جرب مرة أخرى.';
  }
}

function finishAll() {
  document.getElementById('certificate').style.display = 'block';
}

function showFinalCertificate() {
  const name = document.getElementById('childName').value.trim();
  if (name) {
    document.getElementById('finalCert').innerHTML = '<h3>🌟 شهادة إتمام 🌟</h3><p>مبروك للطالب:</p><strong>' + name + '</strong>';
  }
}
