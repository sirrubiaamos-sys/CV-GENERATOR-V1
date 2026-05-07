// Update CV Preview
function updatePreview() {
    const preview = document.getElementById('cvPreview');
    let html = '';
    
    // Create two-column layout with profile on left
    html += `<div class="cv-container">`;
    
    // Left column - Profile and basic info
    html += `<div class="cv-left-column">`;
    
    // Profile Image
    if (cvData.personal.profileImage) {
        html += `<div class="cv-profile-image">
            <img src="${cvData.personal.profileImage}" alt="Profile Picture">
        </div>`;
    }
    
    // Personal Info in sidebar
    html += `<div class="cv-section-sidebar">
        <div class="cv-section-title-sidebar">CONTACT</div>
        ${cvData.personal.email ? `<div class="cv-sidebar-item"><strong>Email:</strong><br>${escapeHtml(cvData.personal.email)}</div>` : ''}
        ${cvData.personal.phone ? `<div class="cv-sidebar-item"><strong>Phone:</strong><br>${escapeHtml(cvData.personal.phone)}</div>` : ''}
        ${cvData.personal.location ? `<div class="cv-sidebar-item"><strong>Location:</strong><br>${escapeHtml(cvData.personal.location)}</div>` : ''}
    </div>`;
    
    // Languages
    if (cvData.languages.some(lang => lang.language)) {
        html += `<div class="cv-section-sidebar">
            <div class="cv-section-title-sidebar">LANGUAGES</div>`;
        cvData.languages.forEach(lang => {
            if (lang.language) {
                html += `<div class="cv-sidebar-item">${escapeHtml(lang.language)}</div>`;
            }
        });
        html += `</div>`;
    }
    
    // Nationality
    if (cvData.nationality) {
        html += `<div class="cv-section-sidebar">
            <div class="cv-section-title-sidebar">NATIONALITY</div>
            <div class="cv-sidebar-item">${escapeHtml(cvData.nationality)}</div>
        </div>`;
    }
    
    // Referees
    if (cvData.referees.some(ref => ref.name || ref.email || ref.phone)) {
        html += `<div class="cv-section-sidebar">
            <div class="cv-section-title-sidebar">REFEREES</div>`;
        cvData.referees.forEach(ref => {
            if (ref.name || ref.email || ref.phone) {
                html += `<div class="cv-referee-block">`;
                if (ref.name) html += `<div class="cv-referee-name">${escapeHtml(ref.name)}</div>`;
                if (ref.workplace) html += `<div class="cv-referee-workplace">${escapeHtml(ref.workplace)}</div>`;
                if (ref.phone) html += `<div class="cv-referee-contact">📞 ${escapeHtml(ref.phone)}</div>`;
                if (ref.email) html += `<div class="cv-referee-contact">✉️ ${escapeHtml(ref.email)}</div>`;
                html += `</div>`;
            }
        });
        html += `</div>`;
    }
    
    html += `</div>`; // Close left column
    
    // Right column - Main content
    html += `<div class="cv-right-column">`;
    
    // Header with LARGE NAME
    html += `
        <div class="cv-header">
            <div class="cv-name">${cvData.personal.fullName || 'Your Name'}</div>
    `;
    
    // Short description of self (Professional Summary)
    if (cvData.personal.summary) {
        html += `<div class="cv-summary">${escapeHtml(cvData.personal.summary)}</div>`;
    }
    
    html += `</div>`;
    
    // Education Section (FIRST in right column)
    if (cvData.education.some(edu => edu.school || edu.degree)) {
        html += `<div class="cv-section">
            <div class="cv-section-title">EDUCATION</div>`;
        
        cvData.education.forEach((edu, index) => {
            if (edu.school || edu.degree) {
                const years = edu.startYear || edu.endYear 
                    ? `${edu.startYear || ''}${edu.startYear && edu.endYear ? ' - ' : ''}${edu.endYear || ''}`
                    : '';
                
                html += `
                    <div class="cv-entry">
                        <div class="cv-entry-title">${escapeHtml(edu.degree || 'Degree')}</div>
                        <div class="cv-entry-subtitle">${escapeHtml(edu.school || 'School')}${edu.field ? ' • ' + escapeHtml(edu.field) : ''}${years ? ' (' + years + ')' : ''}</div>
                        ${edu.gpa ? `<div class="cv-entry-description">GPA: ${escapeHtml(edu.gpa)}</div>` : ''}
                        ${edu.description ? `<div class="cv-entry-description">${escapeHtml(edu.description)}</div>` : ''}
                    </div>
                `;
            }
        });
        
        html += `</div>`;
    }
    
    // Experience Section (SECOND in right column)
    if (cvData.experience.some(exp => exp.company || exp.position)) {
        html += `<div class="cv-section">
            <div class="cv-section-title">WORK EXPERIENCE</div>`;
        
        cvData.experience.forEach((exp, index) => {
            if (exp.company || exp.position) {
                const startDate = formatDate(exp.startDate);
                const endDate = exp.currentlyWorking ? 'Present' : formatDate(exp.endDate);
                
                html += `
                    <div class="cv-entry">
                        <div class="cv-entry-title">${escapeHtml(exp.position || 'Position')}</div>
                        <div class="cv-entry-subtitle">${escapeHtml(exp.company || 'Company')} • ${startDate} - ${endDate}</div>
                        ${exp.description ? `<div class="cv-entry-description">${escapeHtml(exp.description)}</div>` : ''}
                    </div>
                `;
            }
        });
        
        html += `</div>`;
    }
    
    // Hobbies Section (THIRD in right column - after experience)
    if (cvData.hobbies && cvData.hobbies.length > 0) {
        html += `<div class="cv-section">
            <div class="cv-section-title">HOBBIES & INTERESTS</div>
            <div class="hobbies-list">`;
        
        cvData.hobbies.forEach(hobby => {
            if (hobby) {
                html += `<span class="hobby-tag">${escapeHtml(hobby)}</span>`;
            }
        });
        
        html += `</div></div>`;
    }
    
    html += `</div>`; // Close right column
    html += `</div>`; // Close container
    
    preview.innerHTML = html || '<p style="text-align: center; color: #999;">Start filling in your information to see the preview</p>';
}

// Format date from YYYY-MM to readable format
function formatDate(dateString) {
    if (!dateString) return '';
    
    // If it's just a year
    if (/^\d{4}$/.test(dateString)) {
        return dateString;
    }
    
    // If it's a month-year format
    if (/^\d{4}-\d{2}$/.test(dateString)) {
        const [year, month] = dateString.split('-');
        const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[parseInt(month)]} ${year}`;
    }
    
    return dateString;
}

// Escape HTML special characters
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
