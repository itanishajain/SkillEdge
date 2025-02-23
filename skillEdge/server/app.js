const express = require('express');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const app = express();

// Serve static assets (frontend)
app.use(express.static('public'));

// Get the list of LaTeX templates available
app.get('/templates', (req, res) => {
  const templatesDir = path.join(__dirname, 'latex_templates');
  fs.readdir(templatesDir, (err, files) => {
    if (err) {
      return res.status(500).send('Error reading templates');
    }
    const templateNames = files.map(file => file.replace('.tex', ''));
    res.json(templateNames);  // Send list of template names (without .tex extension)
  });
});

// Generate PDF from selected LaTeX template
app.get('/generate-pdf/:templateName', (req, res) => {
  const templateName = req.params.templateName;
  const templatePath = path.join(__dirname, 'latex_templates', `${templateName}.tex`);

  // Run pdflatex to compile the LaTeX file
  exec(`pdflatex -output-directory=./latex_templates ${templatePath}`, (err, stdout, stderr) => {
    if (err) {
      return res.status(500).send('Error generating PDF');
    }

    const pdfFilePath = path.join(__dirname, 'latex_templates', `${templateName}.pdf`);
    res.sendFile(pdfFilePath);  // Send the generated PDF file
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
