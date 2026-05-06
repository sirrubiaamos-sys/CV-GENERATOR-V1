# CV Generator - Professional Resume Builder

A powerful, vanilla JavaScript CV (Curriculum Vitae) generator that allows you to create, preview, and download your professional CV in multiple formats.

## 🎯 Features

- ✨ **Real-time Preview**: See your CV update as you type
- 📄 **Multiple Export Formats**:
  - PDF Download
  - DOCX Download (Microsoft Word)
  - Print to File
- 👥 **Comprehensive CV Sections**:
  - Personal Information
  - Professional Summary
  - Work Experience
  - Education
  - Skills
  - Certifications
- ⚙️ **Easy to Use**:
  - Add/Remove multiple entries
  - Intuitive form interface
  - Clean, modern design
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Professional Templates**: Pre-formatted sections for a polished look
- 💾 **Data Persistence**: Your data stays in the browser (no server required)

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### Usage

1. **Open the Application**
   - Open `index.html` in your web browser

2. **Fill in Your Information**
   - Enter your personal information at the top
   - Add your professional summary
   - Click "+ Add Education", "+ Add Experience", "+ Add Certification" buttons to add multiple entries
   - Enter your skills (comma-separated)

3. **Review Your CV**
   - The preview updates in real-time on the right side
   - Scroll through to see your complete CV

4. **Download Your CV**
   - Click **PDF** to download as a PDF file
   - Click **DOCX** to download as a Word document
   - Click **Print** to print directly or save as PDF through your browser

## 📁 Project Structure

```
cv-generator/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Styling and layout
├── js/
│   ├── app.js          # Main application logic
│   ├── preview.js      # Preview generation
│   └── download.js     # Export functionality
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling and responsive design
- **Vanilla JavaScript**: No frameworks required
- **html2pdf.js**: PDF generation
- **docx.js**: DOCX file generation

## 📝 CV Sections Explained

### Personal Information
- **Full Name**: Your name (displayed prominently)
- **Email**: Contact email address
- **Phone**: Contact phone number
- **Location**: City, State, or Country
- **Professional Summary**: Brief overview of your career goals and highlights

### Education
- **School/University**: Name of institution
- **Degree**: Type of degree (e.g., Bachelor, Master)
- **Field of Study**: Major or specialization
- **Years**: Start and end years
- **GPA**: Optional grade point average
- **Additional Details**: Extra information about your education

### Work Experience
- **Company Name**: Name of employer
- **Job Position**: Your job title
- **Start Date**: When you started the position
- **End Date**: When you left (or mark "Currently Working Here")
- **Description**: Your responsibilities and achievements

### Skills
- Enter skills separated by commas
- They will appear as tags in your CV preview
- Example: JavaScript, Project Management, Leadership

### Certifications
- **Certification Name**: Name of the certification
- **Issuing Organization**: Organization that issued it
- **Issue Date**: When you received it
- **Expiry Date**: Optional expiration date

## 💡 Tips for Best Results

1. **Be Concise**: Keep descriptions clear and professional
2. **Use Action Verbs**: Start experience descriptions with verbs like "Managed", "Developed", "Led"
3. **Quantify Achievements**: Include numbers and metrics when possible
4. **Keep It Professional**: Maintain consistent formatting and tone
5. **Proofread**: Check for typos and grammatical errors
6. **Customize for Job**: Tailor your summary and skills for each application

## 🎨 Customization

### Styling
To customize colors and fonts:
1. Open `css/style.css`
2. Modify the CSS variables at the top:
   ```css
   :root {
       --primary-color: #2c3e50;
       --secondary-color: #3498db;
       --accent-color: #e74c3c;
       /* ... more variables ... */
   }
   ```

### Adding Sections
To add new sections:
1. Add a new section in `index.html`
2. Create corresponding functions in `js/app.js`
3. Add preview logic in `js/preview.js`

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🔒 Privacy

All data entered in this CV generator stays in your browser. No information is sent to any server or stored externally. Your CV data is only stored locally in your browser's memory.

## ⚠️ Important Notes

- **Data Persistence**: Your CV data is stored in the browser's memory. Refreshing the page will clear it. Consider keeping a backup in PDF or DOCX format.
- **Printing**: The print function will hide the form and download buttons, showing only your CV.
- **PDF Quality**: PDF quality depends on your browser's rendering capabilities.

## 🐛 Troubleshooting

### PDF Download Not Working
- Make sure your browser allows pop-ups
- Check your browser's download settings
- Try using a different browser

### DOCX Download Shows Error
- Ensure JavaScript is enabled in your browser
- Try refreshing the page and try again
- Check your browser console for errors (F12)

### Preview Not Updating
- Make sure you've filled in at least one field
- Check that JavaScript is enabled
- Clear your browser cache and refresh

## 🚀 Future Enhancements

Possible features for future versions:
- Template selection (multiple CV designs)
- Import/Export CV data
- Multiple CV versions
- Spell checker integration
- LinkedIn integration
- Cloud storage
- Collaboration features

## 📄 License

This project is free to use and modify for personal or commercial purposes.

## 🤝 Support

For issues or suggestions:
1. Check the troubleshooting section above
2. Check browser console for error messages
3. Ensure all files are in the correct directories

## 📚 Learn More

- [HTML2PDF Documentation](https://ekoopmans.github.io/html2pdf.js/)
- [DOCX Documentation](https://docx.js.org/)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

**Created with ❤️ for professionals everywhere**
