#!/bin/bash
# Daily करंट अफेयर्स डालने का आसान तरीका
echo ""
echo "=========================================="
echo "  📰 नई करंट अफेयर्स डालें"
echo "=========================================="
echo ""
read -p "खबर की तारीख (जैसे: 11 सितंबर 2026): " DATE
read -p "शीर्षक (Headline): " TITLE
read -p "छोटा विवरण (2-3 लाइन): " DESC

HTML="    <div class=\"news-item\">\n      <span class=\"date\">📅 $DATE</span>\n      <h3>$TITLE</h3>\n      <p>$DESC</p>\n    </div>"

# current-affairs.html में जोड़ें — पहली news-item के ऊपर
sed -i "0,/<div class=\"news-item\">/s||$HTML\n    <div class=\"news-item\">|" current-affairs.html

echo ""
echo "✅ खबर जोड़ दी गई!"
echo ""
echo "अब ये चलाएँ: git add . && git commit -m 'New current affairs' && git push origin main"
