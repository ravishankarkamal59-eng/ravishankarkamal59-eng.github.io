// ===== PWA Install Prompt + SW Update =====
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('installBtn');
  if (btn) btn.style.display = 'inline-block';
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('installBtn');
  if (btn) {
    btn.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      deferredPrompt = null;
      btn.style.display = 'none';
    });
  }

  // Register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('admin-sw.js')
        .then(reg => {
          // Force check for updates on every load
          reg.update();
          
          // Check for updates every 60 seconds
          setInterval(() => reg.update(), 60000);
          
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New version available - reload
                if (confirm('नया version available है। अभी update करें?')) {
                  newWorker.postMessage('skipWaiting');
                  window.location.reload();
                }
              }
            });
          });
        })
        .catch(err => console.log('SW registration failed:', err));
    });
  }

  // Unregister old service workers on first load
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(regs => {
      regs.forEach(reg => {
        // Check if old version
        if (reg.active && reg.active.scriptURL.includes('sw.js') && !reg.active.scriptURL.includes('admin-sw')) {
          reg.unregister();
        }
      });
    });
  }
});
