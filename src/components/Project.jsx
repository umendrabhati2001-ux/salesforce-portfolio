function Project() {
  const objects = [
    {
      name: "Customer",
      description:
        "Stores customer identity, contact details, WhatsApp number and support history.",
    },
    {
      name: "Customer Complaint",
      description:
        "Tracks complaint details, priority, status, SLA and resolution information.",
    },
    {
      name: "WhatsApp Message",
      description:
        "Tracks inbound and outbound WhatsApp communication connected with complaints.",
    },
  ];

  const features = [
    "Automated complaint acknowledgement",
    "WhatsApp message tracking",
    "Priority and SLA management",
    "Human follow-up handling",
    "Retry and processing status",
    "Complaint escalation workflow",
  ];

  return (
    <section className="section project-section" id="project">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">THE PROJECT</span>
          <h2>Customer Complaint & Support Management</h2>
          <p>
            A Salesforce-based support system designed to connect customer
            complaints with automated WhatsApp communication and structured
            service workflows.
          </p>
        </div>

        <div className="project-overview">
          <div className="project-intro">
            <span className="project-tag">SALESFORCE + WHATSAPP</span>

            <h3>One platform for complaint management and communication</h3>

            <p>
              The solution creates a centralized support process where
              customer complaints, WhatsApp messages, SLA information and
              support actions can be tracked inside Salesforce.
            </p>

            <div className="feature-list">
              {features.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <span className="feature-check">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="objects-card">
            <div className="objects-card-header">
              <span>DATA MODEL</span>
              <span className="live-indicator">● LIVE DESIGN</span>
            </div>

            <div className="object-list">
              {objects.map((object, index) => (
                <div className="object-card" key={index}>
                  <div className="object-icon">
                    {index === 0 ? "C" : index === 1 ? "!" : "W"}
                  </div>

                  <div>
                    <h4>{object.name}</h4>
                    <p>{object.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="project-fields">
          <div className="field-column">
            <h3>Customer Complaint</h3>

            <div className="field-tags">
              <span>Complaint Number</span>
              <span>Customer</span>
              <span>Priority</span>
              <span>Status</span>
              <span>SLA Due At</span>
              <span>First Response At</span>
              <span>Resolved At</span>
              <span>WhatsApp Opt In</span>
            </div>
          </div>

          <div className="field-column">
            <h3>WhatsApp Message</h3>

            <div className="field-tags">
              <span>Message Number</span>
              <span>Direction</span>
              <span>Message Body</span>
              <span>Message Status</span>
              <span>Received At</span>
              <span>Retry Count</span>
              <span>Twilio Message SID</span>
              <span>Webhook Processed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;