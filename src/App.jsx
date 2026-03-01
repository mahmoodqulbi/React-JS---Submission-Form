// Filename - App.jsx
import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState(null);
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, contact, gender, selectedOption, subjects, resume, url, about });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({ ...prev, [sub]: !prev[sub] }));
  };

  const handleReset = () => {
    setFirstName(""); setLastName(""); setEmail(""); setContact("");
    setGender("male");
    setSubjects({ english: true, maths: false, physics: false });
    setResume(null); setUrl(""); setSelectedOption(""); setAbout("");
  };

  return (
    <div className="page">
      <div className="card">
        {/* Header */}
        <div className="card-header">
          <div className="header-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <div>
            <h1 className="card-title">Application Form</h1>
            <p className="card-subtitle">Fill in your details below</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} onReset={handleReset}>

          {/* Name Row */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstname">First Name <span className="req">*</span></label>
              <input
                type="text" id="firstname" value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John" required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name <span className="req">*</span></label>
              <input
                type="text" id="lastname" value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe" required
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address <span className="req">*</span></label>
            <div className="input-icon-wrap">
              <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <input
                type="email" id="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com" required className="has-icon"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="form-group">
            <label htmlFor="contact">Contact Number <span className="req">*</span></label>
            <div className="input-icon-wrap">
              <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012 .07h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <input
                type="tel" id="contact" value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="+1 (555) 000-0000" required className="has-icon"
              />
            </div>
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender <span className="req">*</span></label>
            <div className="radio-group">
              {["male", "female", "other"].map((g) => (
                <label key={g} className={`radio-card ${gender === g ? "active" : ""}`}>
                  <input type="radio" name="gender" value={g} checked={gender === g} onChange={(e) => setGender(e.target.value)} />
                  <span className="radio-dot"></span>
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Subjects */}
          <div className="form-group">
            <label>Best Subject</label>
            <div className="checkbox-group">
              {[
                { key: "english", label: "English" },
                { key: "maths", label: "Maths" },
                { key: "physics", label: "Physics" },
              ].map(({ key, label }) => (
                <label key={key} className={`checkbox-card ${subjects[key] ? "active" : ""}`}>
                  <input type="checkbox" checked={subjects[key]} onChange={() => handleSubjectChange(key)} />
                  <span className="check-box">
                    {subjects[key] && (
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5">
                        <polyline points="2,6 5,9 10,3"/>
                      </svg>
                    )}
                  </span>
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Resume Upload */}
          <div className="form-group">
            <label htmlFor="file">Upload Resume <span className="req">*</span></label>
            <label htmlFor="file" className="file-upload-label">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
              <span>{resume ? resume.name : "Click to upload your resume (PDF, DOC)"}</span>
            </label>
            <input
              type="file" id="file" accept=".pdf,.doc,.docx"
              onChange={(e) => setResume(e.target.files[0])}
              required className="file-hidden"
            />
          </div>

          {/* URL */}
          <div className="form-group">
            <label htmlFor="url">Portfolio / LinkedIn URL <span className="req">*</span></label>
            <div className="input-icon-wrap">
              <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
              </svg>
              <input
                type="url" id="url" value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://yourportfolio.com" required className="has-icon"
              />
            </div>
          </div>

          {/* Select */}
          <div className="form-group">
            <label htmlFor="select">Skill Level</label>
            <select id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
              <option value="" disabled>Select your level</option>
              <optgroup label="Beginner">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">JavaScript</option>
              </optgroup>
              <optgroup label="Advanced">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">Express</option>
                <option value="7">MongoDB</option>
              </optgroup>
            </select>
          </div>

          {/* About */}
          <div className="form-group">
            <label htmlFor="about">About Yourself</label>
            <textarea
              id="about" value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Tell us a bit about yourself, your experience, and what you're looking for..."
              required
            />
          </div>

          {/* Buttons */}
          <div className="btn-row">
            <button type="reset" className="btn-reset">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
              </svg>
              Reset
            </button>
            <button type="submit" className={`btn-submit ${submitted ? "success" : ""}`}>
              {submitted ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Submitted!
                </>
              ) : (
                <>
                  Submit Application
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;