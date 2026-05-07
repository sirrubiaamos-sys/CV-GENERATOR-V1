// PDF/DOCX Download Functions (A4 Format)

// Download as PDF - clones preview and renders to A4
function downloadPDF() {
    const preview = document.getElementById('cvPreview');
    const clone = preview.cloneNode(true);
    const container = document.createElement('div');
    container.style.width = '210mm';
    container.style.minHeight = '297mm';
    container.style.boxSizing = 'border-box';
    container.style.padding = '12mm';
    container.style.background = 'white';
    container.style.margin = '0 auto';
    container.appendChild(clone);
    document.body.appendChild(container);
    const fileName = `${cvData.personal.fullName || 'CV'}.pdf`;
    const opt = {
        margin: [10, 10, 10, 10],
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(container).save().then(() => {
        document.body.removeChild(container);
    }).catch(err => {
        console.error('PDF error:', err);
        document.body.removeChild(container);
    });
}

// Download as DOCX - includes profile image and hobbies
async function downloadDOCX() {
    const fileName = `${cvData.personal.fullName || 'CV'}.docx`;
    try {
        const doc = new docx.Document();
        const children = [];
        if (cvData.personal.profileImage) {
            try {
                const res = await fetch(cvData.personal.profileImage);
                const blob = await res.blob();
                const arrayBuffer = await blob.arrayBuffer();
                const image = docx.Media.addImage(doc, arrayBuffer);
                children.push(new docx.Paragraph({ children: [image], alignment: docx.AlignmentType.CENTER }));
            } catch (err) {
                console.warn('Profile image not embedded:', err);
            }
        }
        if (cvData.personal.fullName) {
            children.push(new docx.Paragraph({ text: cvData.personal.fullName, heading: docx.HeadingLevel.HEADING_1, alignment: docx.AlignmentType.CENTER }));
        }
        if (cvData.personal.summary) {
            children.push(new docx.Paragraph({ text: cvData.personal.summary, italics: true, alignment: docx.AlignmentType.CENTER }));
        }
        if (cvData.education.some(e => e.school || e.degree)) {
            children.push(new docx.Paragraph({ text: 'EDUCATION', heading: docx.HeadingLevel.HEADING_2 }));
            cvData.education.forEach(edu => {
                children.push(new docx.Paragraph({ text: edu.degree || '', bold: true }));
                children.push(new docx.Paragraph({ text: `${edu.school || ''}${edu.field ? ' • ' + edu.field : ''}${edu.startYear || edu.endYear ? ' (' + (edu.startYear || '') + (edu.startYear && edu.endYear ? ' - ' : '') + (edu.endYear || '') + ')' : ''}` }));
                if (edu.description) children.push(new docx.Paragraph({ text: edu.description }));
            });
        }
        if (cvData.experience.some(e => e.company || e.position)) {
            children.push(new docx.Paragraph({ text: 'WORK EXPERIENCE', heading: docx.HeadingLevel.HEADING_2 }));
            cvData.experience.forEach(exp => {
                children.push(new docx.Paragraph({ text: exp.position || '', bold: true }));
                const dates = `${formatDate(exp.startDate)}${exp.currentlyWorking ? ' - Present' : (exp.endDate ? ' - ' + formatDate(exp.endDate) : '')}`;
                children.push(new docx.Paragraph({ text: `${exp.company || ''}${dates ? ' • ' + dates : ''}`, italics: true }));
                if (exp.description) children.push(new docx.Paragraph({ text: exp.description }));
            });
        }
        if (cvData.hobbies && cvData.hobbies.length > 0) {
            children.push(new docx.Paragraph({ text: 'HOBBIES & INTERESTS', heading: docx.HeadingLevel.HEADING_2 }));
            children.push(new docx.Paragraph({ text: cvData.hobbies.join(', ') }));
        }
        if (cvData.skills && cvData.skills.length > 0) {
            children.push(new docx.Paragraph({ text: 'SKILLS', heading: docx.HeadingLevel.HEADING_2 }));
            children.push(new docx.Paragraph({ text: cvData.skills.join(', ') }));
        }
        doc.addSection({ children });
        const blob = await docx.Packer.toBlob(doc);
        saveBlob(blob, fileName);
    } catch (err) {
        console.error('DOCX error:', err);
        alert('Error generating DOCX.');
    }
}

// Save blob to file
function saveBlob(blob, fileName) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

        
        if (contactInfo.length > 0) {
            sections.push(
                new docx.Paragraph({
                    text: contactInfo.join(' • '),
                    size: 20,
                    alignment: docx.AlignmentType.CENTER,
                    spacing: { after: 200 }
                })
            );
        }
        
        // Summary
        if (cvData.personal.summary) {
            sections.push(
                new docx.Paragraph({
                    text: cvData.personal.summary,
                    italics: true,
                    size: 20,
                    spacing: { after: 200 }
                })
            );
        }
        
        // Work Experience
        if (cvData.experience.some(exp => exp.company || exp.position)) {
            sections.push(
                new docx.Paragraph({
                    text: 'WORK EXPERIENCE',
                    bold: true,
                    size: 24,
                    spacing: { before: 200, after: 100 },
                    border: {
                        bottom: {
                            color: '000000',
                            space: 1,
                            style: docx.BorderStyle.SINGLE,
                            size: 6,
                        }
                    }
                })
            );
            
            cvData.experience.forEach(exp => {
                if (exp.company || exp.position) {
                    const startDate = formatDate(exp.startDate);
                    const endDate = exp.currentlyWorking ? 'Present' : formatDate(exp.endDate);
                    
                    sections.push(
                        new docx.Paragraph({
                            text: exp.position || 'Position',
                            bold: true,
                            size: 22,
                            spacing: { after: 50 }
                        })
                    );
                    
                    sections.push(
                        new docx.Paragraph({
                            text: `${exp.company || 'Company'} • ${startDate} - ${endDate}`,
                            italics: true,
                            size: 20,
                            spacing: { after: 100 }
                        })
                    );
                    
                    if (exp.description) {
                        sections.push(
                            new docx.Paragraph({
                                text: exp.description,
                                size: 20,
                                spacing: { after: 150 }
                            })
                        );
                    }
                }
            });
        }
        
        // Education
        if (cvData.education.some(edu => edu.school || edu.degree)) {
            sections.push(
                new docx.Paragraph({
                    text: 'EDUCATION',
                    bold: true,
                    size: 24,
                    spacing: { before: 200, after: 100 },
                    border: {
                        bottom: {
                            color: '000000',
                            space: 1,
                            style: docx.BorderStyle.SINGLE,
                            size: 6,
                        }
                    }
                })
            );
            
            cvData.education.forEach(edu => {
                if (edu.school || edu.degree) {
                    const years = edu.startYear || edu.endYear 
                        ? `${edu.startYear || ''}${edu.startYear && edu.endYear ? ' - ' : ''}${edu.endYear || ''}`
                        : '';
                    
                    sections.push(
                        new docx.Paragraph({
                            text: edu.degree || 'Degree',
                            bold: true,
                            size: 22,
                            spacing: { after: 50 }
                        })
                    );
                    
                    sections.push(
                        new docx.Paragraph({
                            text: `${edu.school || 'School'}${edu.field ? ' • ' + edu.field : ''}${years ? ' (' + years + ')' : ''}`,
                            italics: true,
                            size: 20,
                            spacing: { after: 100 }
                        })
                    );
                    
                    if (edu.gpa) {
                        sections.push(
                            new docx.Paragraph({
                                text: `GPA: ${edu.gpa}`,
                                size: 20,
                                spacing: { after: 50 }
                            })
                        );
                    }
                    
                    if (edu.description) {
                        sections.push(
                            new docx.Paragraph({
                                text: edu.description,
                                size: 20,
                                spacing: { after: 150 }
                            })
                        );
                    }
                }
            });
        }
        
        // Skills
        if (cvData.skills.length > 0) {
            sections.push(
                new docx.Paragraph({
                    text: 'SKILLS',
                    bold: true,
                    size: 24,
                    spacing: { before: 200, after: 100 },
                    border: {
                        bottom: {
                            color: '000000',
                            space: 1,
                            style: docx.BorderStyle.SINGLE,
                            size: 6,
                        }
                    }
                })
            );
            
            const skillsText = cvData.skills.filter(skill => skill).join(', ');
            sections.push(
                new docx.Paragraph({
                    text: skillsText,
                    size: 20,
                    spacing: { after: 150 }
                })
            );
        }
        
        // Certifications
        if (cvData.certifications.some(cert => cert.certName || cert.issuer)) {
            sections.push(
                new docx.Paragraph({
                    text: 'CERTIFICATIONS',
                    bold: true,
                    size: 24,
                    spacing: { before: 200, after: 100 },
                    border: {
                        bottom: {
                            color: '000000',
                            space: 1,
                            style: docx.BorderStyle.SINGLE,
                            size: 6,
                        }
                    }
                })
            );
            
            cvData.certifications.forEach(cert => {
                if (cert.certName || cert.issuer) {
                    const issueDate = formatDate(cert.issueDate);
                    const expiryDate = cert.expiryDate ? formatDate(cert.expiryDate) : '';
                    
                    sections.push(
                        new docx.Paragraph({
                            text: cert.certName || 'Certification',
                            bold: true,
                            size: 22,
                            spacing: { after: 50 }
                        })
                    );
                    
                    sections.push(
                        new docx.Paragraph({
                            text: `${cert.issuer || 'Issuer'}${issueDate ? ' • ' + issueDate : ''}${expiryDate ? ' - ' + expiryDate : ''}`,
                            italics: true,
                            size: 20,
                            spacing: { after: 150 }
                        })
                    );
                }
            });
        }
        
        // Create and save document
        const doc = new docx.Document({
            sections: [{
                properties: {},
                children: sections
            }]
        });
        
        docx.Packer.toBlob(doc).then(blob => {
            saveBlob(blob, fileName);
        });
        
    } catch (error) {
        console.error('Error generating DOCX:', error);
        alert('Error generating DOCX file. Please try again.');
    }
}

// Save blob as file
function saveBlob(blob, fileName) {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

// Alternative: Download as .docs file (actually DOCX with different extension)
// This is mainly for compatibility with some systems that expect .docs
function downloadDOCS() {
    // Create a text version (since .docs is not a standard format)
    // We'll treat it the same as DOCX but with different extension
    const fileName = `${cvData.personal.fullName || 'CV'}.docs`;
    
    // For now, just download as DOCX since .docs is not standard
    downloadDOCX();
}
