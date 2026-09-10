#!/bin/bash
clear
echo ""
echo "=========================================="
echo "  📰 नई करंट अफेयर्स डालें"
echo "=========================================="
echo ""
read -p "📅 खबर की तारीख (जैसे: 11 सितंबर 2026): " DATE
read -p "📰 शीर्षक: " TITLE
read -p "📝 विवरण: " DESC

HTML="    <div class=\"news-item\">
      <span class=\"date\">📅 $DATE</span>
      <h3>$TITLE</h3>
      <p>$DESC</p>
    </div>"

# current-affairs.html में पहली news-item के ऊपर जोड़ें
python3 - <<PYEOF
with open('current-affairs.html', 'r', encoding='utf-8') as f:
    content = f.read()
new_news = '''$HTML
'''
# पहली <div class="news-item"> के पहले जोड़ें
idx = content.find('<div class="news-item">')
if idx > 0:
    content = content[:idx] + new_news + content[idx:]
    with open('current-affairs.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("✅ खबर जोड़ दी गई")
else:
    print("❌ news-item नहीं मिला")
PYEOF

echo ""
echo "अब ये चलाएँ:"
echo "  git add . && git commit -m 'New current affairs' && git push origin main"
