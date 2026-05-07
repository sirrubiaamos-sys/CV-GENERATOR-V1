// CV Data Storage
const cvData = {
    personal: {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        summary: '',
        profileImage: null
    },
    languages: [],
    nationality: '',
    referees: [],
    education: [],
    experience: [],
    skills: [],
    certifications: []
};

// Languages list
const LANGUAGE_LIST = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese',
    'Russian', 'Japanese', 'Chinese (Mandarin)', 'Chinese (Cantonese)',
    'Korean', 'Arabic', 'Hindi', 'Dutch', 'Swedish', 'Norwegian',
    'Danish', 'Polish', 'Czech', 'Turkish', 'Greek', 'Hebrew',
    'Vietnamese', 'Thai', 'Filipino', 'Indonesian', 'Urdu', 'Farsi'
].sort();

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('CV Generator initialized');
    
    // Add event listeners for real-time preview
    document.getElementById('fullName').addEventListener('change', updateCVData);
    document.getElementById('email').addEventListener('change', updateCVData);
    document.getElementById('phone').addEventListener('change', updateCVData);
    document.getElementById('location').addEventListener('change', updateCVData);
    document.getElementById('summary').addEventListener('change', updateCVData);
    document.getElementById('skillsInput').addEventListener('change', updateCVData);
    document.getElementById('nationality').addEventListener('change', updateCVData);
    
    // Profile upload handler
    document.getElementById('profileUpload').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                cvData.personal.profileImage = event.target.result;
                document.getElementById('profilePreview').src = event.target.result;
                updatePreview();
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Add initial education and experience entries
    addEducation();
    addExperience();
    addCertification();
});

// Update CV Data
function updateCVData() {
    cvData.personal.fullName = document.getElementById('fullName').value;
    cvData.personal.email = document.getElementById('email').value;
    cvData.personal.phone = document.getElementById('phone').value;
    cvData.personal.location = document.getElementById('location').value;
    cvData.personal.summary = document.getElementById('summary').value;
    cvData.nationality = document.getElementById('nationality').value;
    
    // Parse skills
    const skillsInput = document.getElementById('skillsInput').value;
    cvData.skills = skillsInput.split(',').map(skill => skill.trim()).filter(skill => skill);
    
    updatePreview();
}

// Add Language
function addLanguage() {
    const index = cvData.languages.length;
    cvData.languages.push({ language: '', proficiency: 'Intermediate' });
    
    const languagesList = document.getElementById('languagesList');
    const html = `
        <div class="language-item" id="lang-${index}">
            <select class="language-select" onchange="updateLanguage(${index}, 'language', this.value)">
                <option value="">Select Language</option>
                ${LANGUAGE_LIST.map(lang => `<option value="${lang}">${lang}</option>`).join('')}
            </select>
            <button class="btn-remove-language" onclick="removeLanguage(${index})">✕</button>
        </div>
    `;
    languagesList.insertAdjacentHTML('beforeend', html);
}

// Update Language
function updateLanguage(index, field, value) {
    if (cvData.languages[index]) {
        cvData.languages[index][field] = value;
        updatePreview();
    }
}

// Remove Language
function removeLanguage(index) {
    cvData.languages.splice(index, 1);
    document.getElementById(`lang-${index}`).remove();
    updatePreview();
}

// Add Referee
function addReferee() {
    const index = cvData.referees.length;
    cvData.referees.push({
        name: '',
        phone: '',
        email: '',
        workplace: ''
    });
    
    const refereesList = document.getElementById('refereesList');
    const entryId = `referee-${index}`;
    
    const html = `
        <div class="referee-entry" id="${entryId}">
            <div class="referee-entry-row">
                <label>Name</label>
                <input type="text" placeholder="Full Name" onchange="updateReferee(${index}, 'name', this.value)">
            </div>
            <div class="referee-entry-row">
                <label>Phone</label>
                <input type="tel" placeholder="Phone Number" onchange="updateReferee(${index}, 'phone', this.value)">
            </div>
            <div class="referee-entry-row">
                <label>Email</label>
                <input type="email" placeholder="Email Address" onchange="updateReferee(${index}, 'email', this.value)">
            </div>
            <div class="referee-entry-row">
                <label>Place of Work</label>
                <input type="text" placeholder="Organization/Company" onchange="updateReferee(${index}, 'workplace', this.value)">
            </div>
            <button class="btn-remove-referee" onclick="removeReferee(${index})">Remove Referee</button>
        </div>
    `;
    
    refereesList.insertAdjacentHTML('beforeend', html);
}

// Update Referee
function updateReferee(index, field, value) {
    if (cvData.referees[index]) {
        cvData.referees[index][field] = value;
        updatePreview();
    }
}

// Remove Referee
function removeReferee(index) {
    if (confirm('Are you sure you want to remove this referee?')) {
        cvData.referees.splice(index, 1);
        document.getElementById(`referee-${index}`).remove();
        updatePreview();
    }
}

// Add Education Entry
function addEducation() {
    const educationList = document.getElementById('educationList');
    const index = cvData.education.length;
    const entryId = `edu-${index}`;
    
    const entry = {
        school: '',
        degree: '',
        field: '',
        startYear: '',
        endYear: '',
        description: ''
    };
    cvData.education.push(entry);
    
    const html = `
        <div class="entry-block" id="${entryId}">
            <button class="btn-remove" onclick="removeEntry('education', ${index})">Remove</button>
            <div class="input-row">
                <input type="text" placeholder="School/University" class="input-field" onchange="updateEducation(${index}, 'school', this.value)">
                <input type="text" placeholder="Degree" class="input-field" onchange="updateEducation(${index}, 'degree', this.value)">
            </div>
            <div class="input-row">
                <input type="text" placeholder="Field of Study" class="input-field" onchange="updateEducation(${index}, 'field', this.value)">
                <input type="number" placeholder="Start Year" class="input-field small-input" onchange="updateEducation(${index}, 'startYear', this.value)">
            </div>
            <div class="input-row">
                <input type="number" placeholder="End Year" class="input-field small-input" onchange="updateEducation(${index}, 'endYear', this.value)">
                <input type="text" placeholder="Grade/GPA (optional)" class="input-field small-input" onchange="updateEducation(${index}, 'gpa', this.value)">
            </div>
            <textarea placeholder="Additional Details (optional)" class="input-field textarea" onchange="updateEducation(${index}, 'description', this.value)"></textarea>
        </div>
    `;
    
    educationList.insertAdjacentHTML('beforeend', html);
}

// Update Education Entry
function updateEducation(index, field, value) {
    if (cvData.education[index]) {
        cvData.education[index][field] = value;
        updatePreview();
    }
}

// Add Experience Entry
function addExperience() {
    const experienceList = document.getElementById('experienceList');
    const index = cvData.experience.length;
    const entryId = `exp-${index}`;
    
    const entry = {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        currentlyWorking: false,
        description: ''
    };
    cvData.experience.push(entry);
    
    const html = `
        <div class="entry-block" id="${entryId}">
            <button class="btn-remove" onclick="removeEntry('experience', ${index})">Remove</button>
            <div class="input-row">
                <input type="text" placeholder="Company Name" class="input-field" onchange="updateExperience(${index}, 'company', this.value)">
                <input type="text" placeholder="Job Position" class="input-field" onchange="updateExperience(${index}, 'position', this.value)">
            </div>
            <div class="input-row">
                <input type="month" placeholder="Start Date" class="input-field" onchange="updateExperience(${index}, 'startDate', this.value)">
                <input type="month" placeholder="End Date" class="input-field" onchange="updateExperience(${index}, 'endDate', this.value)">
            </div>
            <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
                <input type="checkbox" onchange="updateExperience(${index}, 'currentlyWorking', this.checked)">
                <span>Currently Working Here</span>
            </label>
            <textarea placeholder="Describe your responsibilities and achievements" class="input-field textarea" onchange="updateExperience(${index}, 'description', this.value)"></textarea>
        </div>
    `;
    
    experienceList.insertAdjacentHTML('beforeend', html);
}

// Update Experience Entry
function updateExperience(index, field, value) {
    if (cvData.experience[index]) {
        cvData.experience[index][field] = value;
        updatePreview();
    }
}

// Add Certification Entry
function addCertification() {
    const certificationList = document.getElementById('certificationList');
    const index = cvData.certifications.length;
    const entryId = `cert-${index}`;
    
    const entry = {
        certName: '',
        issuer: '',
        issueDate: '',
        expiryDate: ''
    };
    cvData.certifications.push(entry);
    
    const html = `
        <div class="entry-block" id="${entryId}">
            <button class="btn-remove" onclick="removeEntry('certifications', ${index})">Remove</button>
            <div class="input-row">
                <input type="text" placeholder="Certification Name" class="input-field" onchange="updateCertification(${index}, 'certName', this.value)">
                <input type="text" placeholder="Issuing Organization" class="input-field" onchange="updateCertification(${index}, 'issuer', this.value)">
            </div>
            <div class="input-row">
                <input type="month" placeholder="Issue Date" class="input-field small-input" onchange="updateCertification(${index}, 'issueDate', this.value)">
                <input type="month" placeholder="Expiry Date (optional)" class="input-field small-input" onchange="updateCertification(${index}, 'expiryDate', this.value)">
            </div>
        </div>
    `;
    
    certificationList.insertAdjacentHTML('beforeend', html);
}

// Update Certification Entry
function updateCertification(index, field, value) {
    if (cvData.certifications[index]) {
        cvData.certifications[index][field] = value;
        updatePreview();
    }
}

// Remove Entry
function removeEntry(section, index) {
    if (confirm('Are you sure you want to remove this entry?')) {
        cvData[section].splice(index, 1);
        const entryId = section === 'education' ? `edu-${index}` : section === 'experience' ? `exp-${index}` : `cert-${index}`;
        document.getElementById(entryId).remove();
        updatePreview();
    }
}

// Export CV Data as JSON (for future use)
function exportData() {
    const dataStr = JSON.stringify(cvData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cv-data.json';
    link.click();
}

// Import CV Data from JSON
function importData(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                Object.assign(cvData, importedData);
                populateForm();
                updatePreview();
                alert('CV data imported successfully!');
            } catch (error) {
                alert('Error importing file: ' + error.message);
            }
        };
        reader.readAsText(file);
    }
}

// Populate form with data
function populateForm() {
    document.getElementById('fullName').value = cvData.personal.fullName;
    document.getElementById('email').value = cvData.personal.email;
    document.getElementById('phone').value = cvData.personal.phone;
    document.getElementById('location').value = cvData.personal.location;
    document.getElementById('summary').value = cvData.personal.summary;
    document.getElementById('skillsInput').value = cvData.skills.join(', ');
}
