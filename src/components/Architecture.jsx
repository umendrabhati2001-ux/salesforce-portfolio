import { useEffect, useState } from "react";

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

  const [activeOutbound, setActiveOutbound] = useState(0);
  const [activeInbound, setActiveInbound] = useState(0);

  useEffect(() => {
    const outboundTimer = setInterval(() => {
      setActiveOutbound((prev) => (prev + 1) % outboundFlow.length);
    }, 1200);

    const inboundTimer = setInterval(() => {
      setActiveInbound((prev) => (prev + 1) % inboundFlow.length);
    }, 1400);

    return () => {
      clearInterval(outboundTimer);
      clearInterval(inboundTimer);
    };
  }, []);

  const renderFlow = (flow, activeIndex, direction) => (
    <div className={`architecture-flow ${direction}`}>
      {flow.map((step, index) => (
        <div className="architecture-node-wrapper" key={`${direction}-${index}`}>
          <div
            className={`architecture-node ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <span className="architecture-node-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="architecture-node-content">
              <strong>{step}</strong>

              {activeIndex === index && (
                <small>
                  {direction === "outbound"
                    ? "Processing..."
                    : "Receiving..."}
                </small>
              )}
            </div>

            {activeIndex === index && (
              <span className="architecture-node-pulse"></span>
            )}
          </div>

          {index < flow.length - 1 && (
            <div className="architecture-connector">
              <span className="connector-line"></span>
              <span className="connector-packet">●</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section className="section architecture-section" id="architecture">
      <div className="section-container">

        {/* Heading */}
        <div className="section-heading">
          <span className="section-label">SYSTEM ARCHITECTURE</span>

          <h2>From complaint to conversation</h2>

          <p>
            The architecture connects Salesforce CRM data, automation logic
            and WhatsApp communication into a structured support workflow.
          </p>
        </div>

        {/* System Status */}
        <div className="architecture-system-status">
          <div className="architecture-system-left">
            <span className="architecture-live-dot"></span>
            <span>SYSTEM ARCHITECTURE</span>
          </div>

          <div className="architecture-status-items">
            <span>Salesforce</span>
            <span>Flow</span>
            <span>Apex</span>
            <span>WhatsApp</span>
          </div>

          <span className="architecture-system-active">
            SYSTEM ACTIVE
          </span>
        </div>

        {/* Outbound */}
        <div className="architecture-card architecture-card-tech">

          <div className="architecture-header">
            <div>
              <span>OUTBOUND COMMUNICATION</span>
              <h3>Automated acknowledgement flow</h3>
            </div>

            <span className="architecture-status">
              AUTOMATED
            </span>
          </div>

          <div className="architecture-flow-label">
            <span>EVENT PIPELINE</span>
            <span>REAL-TIME PROCESSING</span>
          </div>

          {renderFlow(outboundFlow, activeOutbound, "outbound")}
        </div>

        {/* Inbound */}
        <div className="architecture-card architecture-card-tech">

          <div className="architecture-header">
            <div>
              <span>INBOUND COMMUNICATION</span>
              <h3>Customer response processing</h3>
            </div>

            <span className="architecture-status inbound">
              WEBHOOK
            </span>
          </div>

          <div className="architecture-flow-label">
            <span>MESSAGE PIPELINE</span>
            <span>REAL-TIME PROCESSING</span>
          </div>

          {renderFlow(inboundFlow, activeInbound, "inbound")}
        </div>

        {/* Technology Stack */}
        <div className="architecture-bottom">

          <div className="architecture-tech-box">
            <span className="mini-label">CRM</span>

            <div className="architecture-tech-title">
              <span className="tech-symbol">S</span>
              <h3>Salesforce</h3>
            </div>

            <p>
              Central source of truth for customers, complaints,
              communication history and support operations.
            </p>

            <span className="tech-status">
              ● CONNECTED
            </span>
          </div>

          <div className="architecture-tech-box">
            <span className="mini-label">INTEGRATION</span>

            <div className="architecture-tech-title">
              <span className="tech-symbol">W</span>
              <h3>Twilio WhatsApp</h3>
            </div>

            <p>
              External communication layer responsible for sending
              and receiving WhatsApp messages.
            </p>

            <span className="tech-status">
              ● CONNECTED
            </span>
          </div>

          <div className="architecture-tech-box">
            <span className="mini-label">LOGIC</span>

            <div className="architecture-tech-title">
              <span className="tech-symbol">A</span>
              <h3>Flow + Apex</h3>
            </div>

            <p>
              Automation and custom server-side logic handle message
              processing, acknowledgements and business rules.
            </p>

            <span className="tech-status">
              ● PROCESSING
            </span>
          </div>

        </div>

        {/* Architecture footer */}
        <div className="architecture-footer">
          <div>
            <span className="mini-label">DATA FLOW</span>
            <strong>Bi-directional communication</strong>
          </div>

          <div className="architecture-footer-line"></div>

          <div className="architecture-footer-status">
            <span></span>
            All systems operational
          </div>
        </div>

      </div>
    </section>
  );
}

export default Architecture;