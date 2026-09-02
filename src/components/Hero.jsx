function Hero() {
  const flowSteps = [
    {
      number: "01",
      title: "Customer Complaint",
    },
    {
      number: "02",
      title: "Salesforce Flow",
    },
    {
      number: "03",
      title: "WhatsApp Automation",
    },
    {
      number: "04",
      title: "Support Response",
    },
  ];

  return (
    <section className="hero" id="home">
      {/* Animated background effects */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>
      <div className="hero-grid"></div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <span className="hero-badge">
            <span className="badge-dot"></span>
            Salesforce Admin + Developer
          </span>

          <h1 className="hero-title">
            Salesforce
            <br />
            WhatsApp
            <span>Automation</span>
          </h1>

          <p className="hero-description">
            A production-oriented Salesforce solution for managing customer
            complaints, WhatsApp communication, automated acknowledgements,
            SLA tracking, and support workflows.
          </p>

          <div className="hero-actions">
            <a href="#project" className="primary-button">
              Explore Project
              <span className="button-arrow">→</span>
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          {/* Technology cards */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-icon">S</span>

              <div>
                <strong>Salesforce</strong>
                <span>CRM Platform</span>
              </div>
            </div>

            <div className="hero-stat">
              <span className="stat-icon">W</span>

              <div>
                <strong>WhatsApp</strong>
                <span>Communication</span>
              </div>
            </div>

            <div className="hero-stat">
              <span className="stat-icon">A</span>

              <div>
                <strong>Automation</strong>
                <span>Workflow Engine</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>

          <div className="system-card">
            {/* Card header */}
            <div className="card-header">
              <div className="system-status">
                <span className="status-dot"></span>
                <span>Automation System</span>
              </div>

              <span className="live-indicator">LIVE</span>
            </div>
              {/* Flow */}
              <div className="flow-container">
                {flowSteps.map((step, index) => (
                  <div className="flow-step-wrapper" key={step.number}>
                    <div className="flow-item">
                      <span className="flow-number">{step.number}</span>

                      <div className="flow-content">
                        <strong>{step.title}</strong>

                        {index === 0 && (
                          <span>Complaint received</span>
                        )}

                        {index === 1 && (
                          <span>Workflow triggered</span>
                        )}

                        {index === 2 && (
                          <span>Message processed</span>
                        )}

                        {index === 3 && (
                          <span>Support action completed</span>
                        )}
                      </div>

                      <span className="flow-check">✓</span>
                    </div>

                    {index < flowSteps.length - 1 && (
                      <div className="flow-line">
                        <span className="flow-line-dot"></span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Card footer */}
              <div className="system-footer">
                <span className="footer-pulse"></span>
                <span>Workflow operating normally</span>
              </div>
            </div>

            {/* Floating tech labels */}
            <div className="floating-card floating-card-one">
              <span className="floating-icon" style={{ color: "#f59e0b" }}>⚡</span>
              <div>
                <strong>Flow</strong>
                <span style={{ color: "#f59e0b" }}>Automated</span>
              </div>
            </div>

            <div className="floating-card floating-card-two">
              <span className="floating-icon" style={{ color: "#10b981" }}>✓</span>
              <div>
                <strong>SLA</strong>
                <span style={{ color: "#10b981" }}>Tracked</span>
              </div>
            </div>
          </div>
        </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll">
        <span>Scroll to explore</span>
        <span className="scroll-line"></span>
      </a>
    </section>
  );
}

export default Hero;