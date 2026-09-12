// ===== Main JS (clean version - no menu toggle conflict) =====
document.addEventListener('DOMContentLoaded', function() {

  // ===== Top button =====
  const topBtn = document.getElementById('topBtn');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.classList.toggle('show', window.scrollY > 300);
    });
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ===== Search exams =====
  const searchInput = document.getElementById('examSearch');
  if (searchInput) {
    const cards = document.querySelectorAll('.exam-card');
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      cards.forEach(c => {
        c.style.display = c.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }
  
  // Note: Menu toggle अब सिर्फ menu-toggle.js handle करेगा
});

// ===== Quiz Functionality (legacy) =====
function initQuiz(questions) {
  const container = document.getElementById('quizContainer');
  if (!container) return;
  let score = 0, answered = 0;
  questions.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-question';
    div.innerHTML = '<h3>Q' + (i+1) + '. ' + q.q + '</h3>';
    q.options.forEach((opt, j) => {
      const btn = document.createElement('div');
      btn.className = 'quiz-option';
      btn.textContent = opt;
      btn.onclick = () => {
        if (div.dataset.done) return;
        div.dataset.done = '1';
        if (j === q.ans) { btn.classList.add('correct'); score++; }
        else { btn.classList.add('wrong'); div.querySelectorAll('.quiz-option')[q.ans].classList.add('correct'); }
        answered++;
        if (answered === questions.length) {
          document.getElementById('quizScore').textContent = 'आपका स्कोर: ' + score + '/' + questions.length;
        }
      };
      div.appendChild(btn);
    });
    container.appendChild(div);
  });
}
