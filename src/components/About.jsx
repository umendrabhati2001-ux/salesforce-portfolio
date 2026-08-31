function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">ABOUT THE SOLUTION</span>
          <h2>Built around Salesforce automation</h2>
          <p>
            This project demonstrates how Salesforce can be used to manage
            customer complaints and automate WhatsApp-based support
            communication.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <h3>Salesforce Admin + Developer Implementation</h3>

            <p>
              The system combines Salesforce configuration, automation and
              development to create a structured customer support workflow.
            </p>

            <p>
              Customer complaints can be captured, prioritized, tracked and
              connected with WhatsApp communication while automated processes
              handle acknowledgements, SLA tracking and escalation.
            </p>
          </div>

          <div className="skills-card">
            <h3>Core Salesforce Skills</h3>

            <div className="skills-grid">
              <span>Salesforce Admin</span>
              <span>Record-Triggered Flows</span>
              <span>Validation Rules</span>
              <span>Permission Sets</span>
              <span>Reports & Dashboards</span>
              <span>Apex</span>
              <span>SOQL</span>
              <span>REST API</span>
              <span>WhatsApp Integration</span>
              <span>Data Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;