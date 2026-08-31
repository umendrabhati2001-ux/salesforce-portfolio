function Architecture() {
  const outboundFlow = [
    "Customer",
    "Customer Complaint",
    "Salesforce Flow",
    "Apex",
    "Twilio WhatsApp",
    "Customer",
  ];

  const inboundFlow = [
    "WhatsApp",
    "Twilio",
    "Salesforce Webhook",
    "WhatsApp Message",
    "Customer Complaint",
    "Support Agent",
  ];

  return (
    <section className="section architecture-section" id="architecture">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">SYSTEM ARCHITECTURE</span>

          <h2>From complaint to conversation</h2>

          <p>
            The architecture connects Salesforce CRM data, automation logic
            and WhatsApp communication into a structured support workflow.
          </p>
        </div>

        <div className="architecture-card">
          <div className="architecture-header">
            <div>
              <span>OUTBOUND COMMUNICATION</span>
              <h3>Automated acknowledgement flow</h3>
            </div>

            <span className="architecture-status">AUTOMATED</span>
          </div>

          <div className="architecture-flow">
            {outboundFlow.map((step, index) => (
              <div className="architecture-node-wrapper" key={index}>
                <div className="architecture-node">
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                </div>

                {index < outboundFlow.length - 1 && (
                  <div className="architecture-connector">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="architecture-card">
          <div className="architecture-header">
            <div>
              <span>INBOUND COMMUNICATION</span>
              <h3>Customer response processing</h3>
            </div>

            <span className="architecture-status inbound">
              WEBHOOK
            </span>
          </div>

          <div className="architecture-flow">
            {inboundFlow.map((step, index) => (
              <div className="architecture-node-wrapper" key={index}>
                <div className="architecture-node">
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                </div>

                {index < inboundFlow.length - 1 && (
                  <div className="architecture-connector">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="architecture-bottom">
          <div>
            <span className="mini-label">CRM</span>
            <h3>Salesforce</h3>
            <p>
              Central source of truth for customers, complaints,
              communication history and support operations.
            </p>
          </div>

          <div>
            <span className="mini-label">INTEGRATION</span>
            <h3>Twilio WhatsApp</h3>
            <p>
              External communication layer responsible for sending and
              receiving WhatsApp messages.
            </p>
          </div>

          <div>
            <span className="mini-label">LOGIC</span>
            <h3>Flow + Apex</h3>
            <p>
              Automation and custom server-side logic handle message
              processing, acknowledgements and business rules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;