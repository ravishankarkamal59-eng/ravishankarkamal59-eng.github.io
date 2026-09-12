// ===== PDF Watermark & Print Protection =====
// जब users PDF download करें या print करें, logo watermark दिखे
(function() {
  'use strict';
  
  // Print के लिए watermark
  function addPrintWatermark() {
    var existing = document.getElementById('printWatermark');
    if (existing) return;
    
    var watermark = document.createElement('div');
    watermark.id = 'printWatermark';
    watermark.innerHTML = '<img src="assets/images/logo.svg" alt="The Ravishankar Insights"><div>The Ravishankar Insights</div><div style="font-size:12px;opacity:0.8">Education • Knowledge • Success</div><div style="font-size:11px;margin-top:5px">ravishankarkamal59-eng.github.io</div>';
    watermark.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-30deg);opacity:0.08;z-index:99999;display:none;text-align:center;pointer-events:none;color:#000;font-family:Arial,sans-serif';
    document.body.appendChild(watermark);
  }
  
  // Print events
  window.addEventListener('beforeprint', function() {
    var w = document.getElementById('printWatermark');
    if (w) {
      w.style.display = 'block';
    } else {
      addPrintWatermark();
      document.getElementById('printWatermark').style.display = 'block';
    }
  });
  
  window.addEventListener('afterprint', function() {
    var w = document.getElementById('printWatermark');
    if (w) w.style.display = 'none';
  });
  
  // Print CSS
  var printStyle = document.createElement('style');
  printStyle.textContent = `
    @media print {
      #printWatermark {
        display: block !important;
        position: fixed !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%,-50%) rotate(-30deg) !important;
        opacity: 0.12 !important;
        z-index: 99999 !important;
        text-align: center !important;
        pointer-events: none !important;
        font-size: 40px !important;
      }
      #printWatermark img {
        height: 200px !important;
        width: auto !important;
        filter: grayscale(1) !important;
        opacity: 0.7 !important;
      }
      header, footer, .whatsapp-float, .top-btn, .dark-toggle,
      #searchBtn, #bookmarkBtn, #menuCloseBtn, #cookieBanner,
      #shareBox, .ad-slot, .suggestions, .chat-input-area,
      #installBtn, .pv-btns, #pdfFrame, .bnav { 
        display: none !important; 
      }
      body { background: #fff !important; }
      .content { box-shadow: none !important; }
      /* Print header with logo */
      body::before {
        content: '';
        display: block;
        height: 80px;
        background-image: url('assets/images/logo.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        margin-bottom: 20px;
      }
    }
  `;
  document.head.appendChild(printStyle);
  
  // Add watermark on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addPrintWatermark);
  } else {
    addPrintWatermark();
  }
  
  // Watermark on PDF viewer iframe content
  setTimeout(function() {
    var iframe = document.getElementById('pdfFrame');
    if (iframe) {
      iframe.addEventListener('load', function() {
        try {
          var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          if (iframeDoc && !iframeDoc.getElementById('iframeWatermark')) {
            var wm = iframeDoc.createElement('div');
            wm.id = 'iframeWatermark';
            wm.style.cssText = 'position:fixed;bottom:10px;right:10px;background:linear-gradient(135deg,#0f3460,#e94560);color:#fff;padding:6px 12px;border-radius:20px;font-size:11px;z-index:9999;font-family:Arial,sans-serif;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;gap:6px';
            wm.innerHTML = '<img src="assets/images/logo.svg" style="height:20px;width:auto"> The Ravishankar Insights';
            iframeDoc.body.appendChild(wm);
          }
        } catch(e) {
          // Cross-origin - can't add
        }
      });
    }
  }, 1000);
})();
