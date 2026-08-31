function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">
            Salesforce Admin + Developer
          </span>

          <h1>
            Salesforce WhatsApp
            <span>Automation</span>
          </h1>

          <p>
            A production-oriented Salesforce solution for managing customer
            complaints, WhatsApp communication, automated acknowledgements,
            SLA tracking, and support workflows.
          </p>

          <div className="hero-actions">
            <a href="#project" className="primary-button">
              Explore Project
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>Salesforce</strong>
              <span>CRM Platform</span>
            </div>

            <div>
              <strong>WhatsApp</strong>
              <span>Communication</span>
            </div>

            <div>
              <strong>Automation</strong>
              <span>Workflow Engine</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="system-card">
            <div className="card-header">
              <span className="status-dot"></span>
              Automation System
            </div>

            <div className="flow-item">
              <span>01</span>
              Customer Complaint
            </div>

            <div className="flow-line"></div>

            <div className="flow-item">
              <span>02</span>
              Salesforce Flow
            </div>

            <div className="flow-line"></div>

            <div className="flow-item">
              <span>03</span>
              WhatsApp Automation
            </div>

            <div className="flow-line"></div>

            <div className="flow-item">
              <span>04</span>
              Support Response
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;