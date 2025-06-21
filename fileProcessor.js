const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) return console.error("Error reading file:", err);

  const modifiedData = data.toUpperCase();

  fs.writeFile('output.txt', modifiedData, (err) => {
    if (err) return console.error("Error writing file:", err);
    console.log("✅ File processed and written to output.txt");
  });
});
