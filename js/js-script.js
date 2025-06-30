let synth = window.speechSynthesis;
let selectedVoice = null;

function initVoices() {
  let voices = synth.getVoices();
  // ابحث عن صوت عربي
  selectedVoice = voices.find(v => v.lang.includes('ar'));
  if (!selectedVoice) {
    console.log('🔴 لم يتم العثور على صوت عربي. سيتم استخدام الصوت الافتراضي.');
  } else {
    console.log('✅ تم العثور على صوت:', selectedVoice.name);
  }
}

initVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = initVoices;
}

function speak(text) {
  responsiveVoice.speak(text, "Arabic Female");
}

function playLetter(letter) { speak(letter); }
function playWord(word) { speak(word); }
function playSentence(sentence) { speak(sentence); }

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
  document.getElementById('certificate').classList.remove('d-none');
}

function showFinalCertificate() {
  const name = document.getElementById('childName').value.trim();
  if (name) {
    document.getElementById('finalCert').innerHTML =
      '<h4>🌟 شهادة إتمام 🌟</h4><p>مبروك للطالب:</p><strong>' + name + '</strong>';
  }
}
