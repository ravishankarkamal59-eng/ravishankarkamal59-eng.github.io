// ===== Exam Resources Loader (Updated - shows ALL PDFs with download) =====
(function() {
  var path = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  var examKey = document.querySelector('[data-exam-key]')?.dataset.examKey || path;
  
  if (!document.querySelector('.exam-resources-container')) return;

  fetch('data/resources.json?v=' + Date.now())
    .then(r => r.json())
    .then(data => {
      var exam = data[examKey];
      if (!exam) {
        var container = document.querySelector('.exam-resources-container');
        container.innerHTML = '<h2 class="section-title">📥 Study Resources</h2><p style="text-align:center;color:#999;padding:2rem">जल्द ही resources add किए जाएँगे</p>';
        return;
      }
      
      var container = document.querySelector('.exam-resources-container');
      var sections = [
        {key: 'notes', icon: '📝', title: 'Notes PDF', color: '#e94560'},
        {key: 'pyq', icon: '📄', title: 'Previous Year Papers (PYQ)', color: '#0f3460'},
        {key: 'syllabus', icon: '📚', title: 'Syllabus PDF', color: '#27ae60'},
        {key: 'videos', icon: '🎥', title: 'Video Lectures', color: '#e74c3c'},
        {key: 'books', icon: '📖', title: 'Recommended Books', color: '#f39c12'}
      ];
      
      var html = '<h2 class="section-title">📥 ' + exam.name + ' - Study Resources</h2>';
      html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.2rem;margin:1.5rem 0">';
      
      sections.forEach(function(s) {
        var items = exam[s.key] || [];
        html += '<div style="background:#fff;border-radius:14px;box-shadow:0 3px 12px rgba(0,0,0,0.08);overflow:hidden">';
        html += '<div style="padding:1rem 1.2rem;background:linear-gradient(135deg,' + s.color + ',' + s.color + 'dd);color:#fff;display:flex;align-items:center;gap:0.7rem">';
        html += '<span style="font-size:1.5rem">' + s.icon + '</span>';
        html += '<h3 style="margin:0;font-size:1rem;flex:1;color:#fff">' + s.title + '</h3>';
        html += '<span style="background:rgba(255,255,255,0.3);padding:0.15rem 0.6rem;border-radius:12px;font-size:0.8rem;font-weight:700">' + items.length + '</span>';
        html += '</div>';
        
        if (items.length === 0) {
          html += '<p style="padding:1.5rem 1rem;text-align:center;color:#999;font-size:0.88rem">जल्द ही अपडेट होंगे...</p>';
        } else {
          html += '<ul style="list-style:none;padding:0.5rem 0;margin:0;max-height:400px;overflow-y:auto">';
          items.forEach(function(item, idx) {
            var isPdf = (item.type === 'PDF' || !item.type);
            html += '<li style="padding:0;border-bottom:1px solid #f0f4f8">';
            html += '<div style="display:flex;align-items:center;gap:0.5rem;padding:0.7rem 1rem">';
            html += '<span style="font-size:1rem">' + (isPdf ? '📄' : '🔗') + '</span>';
            html += '<div style="flex:1;min-width:0">';
            html += '<div style="font-size:0.88rem;color:#333;font-weight:500;overflow:hidden;text-overflow:ellipsis">' + (item.title || 'Untitled') + '</div>';
            html += '<div style="font-size:0.72rem;color:#999;margin-top:0.15rem">' + (item.type || 'PDF') + '</div>';
            html += '</div>';
            if (isPdf) {
              html += '<button class="pdf-dl-btn" data-url="' + item.link + '" data-title="' + (item.title || 'notes').replace(/"/g, '&quot;') + '" style="background:#e94560;color:#fff;border:none;padding:0.4rem 0.8rem;border-radius:20px;font-size:0.78rem;font-weight:600;cursor:pointer;flex-shrink:0;white-space:nowrap">⬇️ PDF</button>';
            } else {
              html += '<a href="' + item.link + '" target="_blank" style="background:#0f3460;color:#fff;padding:0.4rem 0.8rem;border-radius:20px;font-size:0.78rem;font-weight:600;text-decoration:none;flex-shrink:0;white-space:nowrap">खोलें →</a>';
            }
            html += '</div>';
            html += '</li>';
          });
          html += '</ul>';
        }
        
        var waText = encodeURIComponent(exam.name + ' ' + s.title + ' चाहिए');
        html += '<a href="https://wa.me/918931050393?text=' + waText + '" target="_blank" style="display:block;padding:0.7rem;text-align:center;background:#f5f7fa;color:#0f3460;text-decoration:none;font-size:0.82rem;font-weight:600;border-top:1px solid #eee">💬 और चाहिए? WhatsApp</a>';
        html += '</div>';
      });
      
      html += '</div>';
      container.innerHTML = html;
      
      // Download buttons attach करें
      container.querySelectorAll('.pdf-dl-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var url = this.dataset.url;
          var title = this.dataset.title;
          if (window.downloadPdfWithWatermark) {
            window.downloadPdfWithWatermark(url, title);
          } else {
            window.open(url, '_blank');
          }
        });
      });
    })
    .catch(function(err) {
      console.error('Error loading resources:', err);
    });
})();
