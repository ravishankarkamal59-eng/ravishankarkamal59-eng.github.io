
cat > setup.sh << 'EOF'
#!/bin/bash
set -e

# 1. बैकअप बनाएँ
backup_dir="backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$backup_dir"
for f in index.html about.html contact.html privacy.html sitemap.xml robots.txt; do
  [ -f "$f" ] && cp "$f" "$backup_dir/"
done
[ -d assets ] && cp -r assets "$backup_dir/"
echo "✅ बैकअप बन गया: $backup_dir"

# 2. डायरेक्टरी बनाएँ
mkdir -p assets/css assets/js

# 3. index.html
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>भारत घूमो - टूरिज्म और ट्रैवल गाइड</title>
  <meta name="description" content="भारत के सबसे खूबसूरत पर्यटन स्थल, ट्रैवल टिप्स, होटल और टूर पैकेज। घूमने की जानकारी हिंदी में।">
  <meta name="keywords" content="भारत टूरिज्म, ट्रैवल गाइड, पर्यटन स्थल, घूमने की जगह, टूर पैकेज">
  <meta name="author" content="भारत घूमो">
  <link rel="canonical" href="https://ravishankarkamal59-eng.github.io/">
  <meta property="og:title" content="भारत घूमो - टूरिज्म और ट्रैवल गाइड">
  <meta property="og:description" content="भारत के सबसे खूबसूरत पर्यटन स्थल, ट्रैवल टिप्स, होटल और टूर पैकेज।">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://ravishankarkamal59-eng.github.io/">
  <meta property="og:image" content="https://ravishankarkamal59-eng.github.io/assets/images/og-image.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="भारत घूमो - टूरिज्म और ट्रैवल गाइड">
  <meta name="twitter:description" content="भारत के सबसे खूबसूरत पर्यटन स्थल, ट्रैवल टिप्स, होटल और टूर पैकेज।">
  <meta name="twitter:image" content="https://ravishankarkamal59-eng.github.io/assets/images/og-image.jpg">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌏</text></svg>">
</head>
<body>
  <a href="#main" class="skip-link">मुख्य सामग्री पर जाएँ</a>
  <header>
    <nav aria-label="मुख्य नेविगेशन">
      <div class="logo">भारत घूमो</div>
      <button class="menu-toggle" aria-label="मेनू खोलें" aria-expanded="false">☰</button>
      <ul class="nav-links">
        <li><a href="index.html">होम</a></li>
        <li><a href="about.html">हमारे बारे में</a></li>
        <li><a href="contact.html">संपर्क</a></li>
        <li><a href="privacy.html">प्राइवेसी</a></li>
      </ul>
    </nav>
  </header>
  <main id="main">
    <section class="hero">
      <h1>भारत की खूबसूरती को करें एक्सप्लोर</h1>
      <p>ट्रैवल गाइड, टिप्स, होटल और टूर पैकेज – सब कुछ एक जगह।</p>
      <a href="#destinations" class="btn">डेस्टिनेशन देखें</a>
    </section>
    <section id="destinations" class="destinations">
      <h2>लोकप्रिय पर्यटन स्थल</h2>
      <div class="grid">
        <article class="card">
          <img src="https://picsum.photos/seed/taj/400/250" alt="ताज महल, आगरा">
          <h3>ताज महल, आगरा</h3>
          <p>दुनिया के सात अजूबों में से एक, प्यार का प्रतीक।</p>
        </article>
        <article class="card">
          <img src="https://picsum.photos/seed/kerala/400/250" alt="केरल के बैकवाटर्स">
          <h3>केरल बैकवाटर्स</h3>
          <p>हाउसबोट, नारियल के पेड़ और शांत पानी।</p>
        </article>
        <article class="card">
          <img src="https://picsum.photos/seed/rajasthan/400/250" alt="राजस्थान का महल">
          <h3>राजस्थान</h3>
          <p>महल, किले और रेगिस्तान की सैर।</p>
        </article>
      </div>
    </section>
    <section class="cta">
      <h2>अपनी यात्रा की योजना बनाएँ</h2>
      <p>हमसे संपर्क करें और बेस्ट टूर पैकेज पाएँ।</p>
      <a href="contact.html" class="btn">संपर्क करें</a>
    </section>
  </main>
  <footer>
    <p>© 2026 भारत घूमो. सर्वाधिकार सुरक्षित।</p>
    <nav aria-label="फुटर नेविगेशन">
      <a href="about.html">About</a> |
      <a href="contact.html">Contact</a> |
      <a href="privacy.html">Privacy</a>
    </nav>
  </footer>
  <script src="assets/js/main.js"></script>
</body>
</html>
