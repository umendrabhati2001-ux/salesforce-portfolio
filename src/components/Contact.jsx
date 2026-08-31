function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-container">
        <div className="contact-card">
          <div className="contact-content">
            <span className="section-label">GET IN TOUCH</span>

            <h2>
              Let's build smarter
              <span> Salesforce solutions.</span>
            </h2>

            <p>
              I am a Salesforce Admin + Developer focused on CRM automation,
              customer support workflows, Apex, Flow and integration-based
              solutions.
            </p>

            <div className="contact-actions">
              <a
                href="mailto:your-email@example.com"
                className="primary-button"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="contact-profile">
            <div className="profile-avatar">UB</div>

            <h3>Umendra Bhati</h3>

            <p>Salesforce Admin + Developer</p>

            <div className="profile-status">
              <span></span>
              Available for opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;