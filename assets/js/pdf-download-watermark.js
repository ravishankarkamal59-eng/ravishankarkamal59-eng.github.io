// ===== PDF Download with Logo Watermark on Every Page =====
// pdf-lib library use करके हर PDF के हर page पर logo watermark लगाता है
(function() {
  'use strict';
  
  // pdf-lib library load करें
  function loadPdfLib() {
    return new Promise(function(resolve, reject) {
      if (window.PDFLib) { resolve(window.PDFLib); return; }
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js';
      script.onload = function() { resolve(window.PDFLib); };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
  // Logo को base64 में load करें
  async function loadLogoBytes() {
    try {
      var res = await fetch('assets/images/logo.svg');
      var svgText = await res.text();
      
      // SVG को PNG में convert करें
      return new Promise(function(resolve, reject) {
        var img = new Image();
        var svgBlob = new Blob([svgText], { type: 'image/svg+xml' });
        var url = URL.createObjectURL(svgBlob);
        img.onload = function() {
          var canvas = document.createElement('canvas');
          canvas.width = 400;
          canvas.height = 400;
          var ctx = canvas.getContext('2d');
          // Background transparent
          ctx.clearRect(0, 0, 400, 400);
          ctx.drawImage(img, 0, 0, 400, 400);
          canvas.toBlob(function(blob) {
            var reader = new FileReader();
            reader.onload = function() {
              var arr = new Uint8Array(reader.result);
              URL.revokeObjectURL(url);
              resolve(arr);
            };
            reader.readAsArrayBuffer(blob);
          }, 'image/png');
        };
        img.onerror = reject;
        img.src = url;
      });
    } catch(e) {
      console.log('Logo load failed:', e);
      return null;
    }
  }
  
  // PDF में watermark जोड़ें
  async function addWatermarkToPdf(pdfUrl) {
    try {
      var PDFLib = await loadPdfLib();
      var { PDFDocument, rgb, degrees, StandardFonts } = PDFLib;
      
      // PDF fetch करें
      var response = await fetch(pdfUrl, { mode: 'cors' });
      if (!response.ok) throw new Error('PDF fetch failed');
      var pdfBytes = await response.arrayBuffer();
      
      // PDF document load करें
      var pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
      var pages = pdfDoc.getPages();
      
      // Logo image load करें
      var logoBytes = await loadLogoBytes();
      var logoImage = null;
      if (logoBytes) {
        try {
          logoImage = await pdfDoc.embedPng(logoBytes);
        } catch(e) {
          console.log('Logo embed failed:', e);
        }
      }
      
      // Font load करें
      var font = null;
      try {
        font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      } catch(e) {}
      
      // हर page पर watermark लगाएँ
      for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var { width, height } = page.getSize();
        
        // Diagonal watermark text
        if (font) {
          page.drawText('The Ravishankar Insights', {
            x: width / 2 - 140,
            y: height / 2,
            size: 22,
            font: font,
            color: rgb(0.7, 0.7, 0.7),
            opacity: 0.15,
            rotate: degrees(45)
          });
          
          page.drawText('ravishankarkamal59-eng.github.io', {
            x: width / 2 - 110,
            y: height / 2 - 30,
            size: 11,
            font: font,
            color: rgb(0.7, 0.7, 0.7),
            opacity: 0.15,
            rotate: degrees(45)
          });
        }
        
        // Bottom-right corner में logo
        if (logoImage) {
          var logoWidth = 50;
          var logoHeight = (logoImage.height / logoImage.width) * logoWidth;
          page.drawImage(logoImage, {
            x: width - logoWidth - 20,
            y: 15,
            width: logoWidth,
            height: logoHeight,
            opacity: 0.7
          });
          
          // Logo के साथ text
          if (font) {
            page.drawText('The Ravishankar Insights', {
              x: 20,
              y: 15,
              size: 8,
              font: font,
              color: rgb(0.4, 0.4, 0.6),
              opacity: 0.8
            });
          }
        }
        
        // Bottom-left corner में page number
        if (font) {
          page.drawText('Page ' + (i + 1) + ' of ' + pages.length, {
            x: 20,
            y: 5,
            size: 7,
            font: font,
            color: rgb(0.5, 0.5, 0.5),
            opacity: 0.7
          });
        }
      }
      
      // PDF save करें
      var modifiedBytes = await pdfDoc.save();
      return modifiedBytes;
    } catch(e) {
      console.error('Watermark error:', e);
      return null;
    }
  }
  
  // Download handler
  window.downloadPdfWithWatermark = async function(pdfUrl, filename) {
    // Toast notification
    var toast = document.createElement('div');
    toast.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#0f3460,#e94560);color:#fff;padding:1rem 1.5rem;border-radius:12px;z-index:99999;font-weight:600;box-shadow:0 4px 20px rgba(0,0,0,0.4);font-size:0.9rem;max-width:90%;text-align:center';
    toast.innerHTML = '⏳ PDF तैयार हो रही है... कृपया प्रतीक्षा करें';
    document.body.appendChild(toast);
    
    try {
      // PDF download करें
      var filenameBase = filename || pdfUrl.split('/').pop().split('?')[0] || 'notes.pdf';
      if (!filenameBase.endsWith('.pdf')) filenameBase += '.pdf';
      
      // पहले try करें watermark के साथ
      var modifiedBytes = await addWatermarkToPdf(pdfUrl);
      
      if (modifiedBytes) {
        var blob = new Blob([modifiedBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'Ravishankar-Insights-' + filenameBase;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function() { URL.revokeObjectURL(url); }, 5000);
        
        toast.style.background = 'linear-gradient(135deg,#27ae60,#16a085)';
        toast.innerHTML = '✅ PDF Download हो रही है (logo watermark के साथ)';
      } else {
        throw new Error('Watermark failed');
      }
    } catch(e) {
      console.error('Download error:', e);
      // Fallback: सीधा download
      toast.style.background = 'linear-gradient(135deg,#f39c12,#e67e22)';
      toast.innerHTML = '⚠️ Watermark नहीं लग पाया। सीधे download हो रहा है...';
      
      // सीधा link से download
      var a = document.createElement('a');
      a.href = pdfUrl;
      a.download = filename || 'notes.pdf';
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    
    setTimeout(function() {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.5s';
      setTimeout(function() { toast.remove(); }, 500);
    }, 3500);
  };
  
  console.log('✅ PDF Watermark Download system loaded');
})();
