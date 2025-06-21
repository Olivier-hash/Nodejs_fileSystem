// fileProcessor.js
const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) return console.error("❌ Error reading input.txt:", err);

  const result = data.replace(/Node\.js/gi, 'JavaScript');

  fs.writeFile('output.txt', result, (err) => {
    if (err) return console.error("❌ Error writing output.txt:", err);
    console.log("✅ File successfully modified and saved as output.txt");
  });
});
