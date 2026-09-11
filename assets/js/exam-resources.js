(function() {
  const path = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  const examKey = document.querySelector('[data-exam-key]')?.dataset.examKey || path;
  
  if (!document.querySelector('.exam-resources-container')) return;

  fetch('data/resources.json?v=' + Date.now())
    .then(r => r.json())
    .then(data => {
      const exam = data[examKey];
      if (!exam) return;
      
      const container = document.querySelector('.exam-resources-container');
      const sections = [
        {key: 'notes', icon: '📝', title: 'Notes PDF', color: '#e94560'},
        {key: 'pyq', icon: '📄', title: 'Previous Year Papers (PYQ)', color: '#0f3460'},
        {key: 'syllabus', icon: '📚', title: 'Syllabus PDF', color: '#27ae60'},
        {key: 'videos', icon: '🎥', title: 'Video Lectures', color: '#e74c3c'},
        {key: 'books', icon: '📖', title: 'Recommended Books', color: '#f39c12'}
      ];
      
      let html = '<h2 class="section-title">📥 ' + exam.name + ' - Study Resources</h2>';
      html += '<div class="resource-grid">';
      
      sections.forEach(s => {
        const items = exam[s.key] || [];
        html += '<div class="resource-card">';
        html += '<div class="resource-header" style="border-color:' + s.color + '">';
        html += '<span class="res-icon">' + s.icon + '</span>';
        html += '<h3>' + s.title + '</h3>';
        html += '<span class="res-count">' + items.length + '</span>';
        html += '</div>';
        if (items.length === 0) {
          html += '<p class="empty-msg">जल्द ही अपडेट होंगे...</p>';
        } else {
          html += '<ul class="resource-list">';
          items.forEach(item => {
            html += '<li><a href="' + item.link + '" target="_blank" rel="noopener">';
            html += '<span class="res-badge">' + (item.type || 'PDF') + '</span> ' + item.title;
            html += ' <span class="res-download">↓</span></a></li>';
          });
          html += '</ul>';
        }
        html += '<a href="https://wa.me/918931050393?text=' + encodeURIComponent(exam.name + ' ' + s.title + ' चाहिए') + '" class="res-request" target="_blank">💬 और चाहिए? WhatsApp करें</a>';
        html += '</div>';
      });
      
      html += '</div>';
      container.innerHTML = html;
    })
    .catch(() => {});
})();
