import { useState } from "react";

function Automation() {
  const [activeStep, setActiveStep] = useState(0);
  const [soundOn, setSoundOn] = useState(true);

  const steps = [
    {
      number: "01",
      title: "Salesforce",
      short: "CRM Data Received",
      icon: "☁",
      description:
        "A new Customer Complaint record starts the automated support workflow.",
      tech: ["Salesforce Objects", "Validation Rules", "Web-to-Case", "Lightning Pages"],
      next: "Record-triggered Flow starts automatically.",
      effect: "salesforce",
    },
    {
      number: "02",
      title: "Flow",
      short: "Automation Triggered",
      icon: "⚡",
      description:
        "Salesforce Flow validates the complaint, evaluates business rules and orchestrates the next actions.",
      tech: ["Record-Triggered Flow", "Decision Logic", "Record Updates", "Assignment"],
      next: "Validated data moves into custom processing.",
      effect: "flow",
    },
    {
      number: "03",
      title: "Apex",
      short: "Custom Logic Execution",
      icon: "</>",
      description:
        "Apex performs the custom server-side processing required by the support automation.",
      tech: ["Apex Class", "SOQL", "DML", "Exception Handling"],
      next: "Custom processing prepares the WhatsApp acknowledgement.",
      effect: "apex",
    },
    {
      number: "04",
      title: "WhatsApp",
      short: "Message Delivered",
      icon: "◉",
      description:
        "The automation sends an acknowledgement through the WhatsApp integration.",
      tech: ["WhatsApp API", "HTTP Callout", "JSON", "Integration"],
      next: "Message information is captured for tracking.",
      effect: "whatsapp",
    },
    {
      number: "05",
      title: "API",
      short: "External Integration",
      icon: "↔",
      description:
        "External API communication connects Salesforce with the messaging service.",
      tech: ["REST API", "HTTP Request", "JSON Payload", "Response Handling"],
      next: "Delivery and processing status are recorded.",
      effect: "api",
    },
    {
      number: "06",
      title: "SLA Tracking",
      short: "Deadline Monitored",
      icon: "◷",
      description:
        "The workflow tracks the response target and identifies SLA-related conditions.",
      tech: ["SLA Fields", "Date/Time Logic", "Scheduled Flow", "Alerts"],
      next: "Exceptions can trigger escalation.",
      effect: "sla",
    },
    {
      number: "07",
      title: "Support",
      short: "Resolution Completed",
      icon: "✓",
      description:
        "Support teams can follow up when automation requires human intervention or escalation.",
      tech: ["Case Management", "Escalation", "Notifications", "Follow-up"],
      next: "Completed interactions remain traceable.",
      effect: "support",
    },
    {
      number: "08",
      title: "Analytics",
      short: "Insights Available",
      icon: "▥",
      description:
        "Reports and dashboards provide visibility into complaints, automation and communication status.",
      tech: ["Reports", "Dashboards", "KPIs", "Data Analysis"],
      next: "Business teams can monitor the complete workflow.",
      effect: "analytics",
    },
  ];

  const playSound = (index) => {
    if (!soundOn) return;

    try {
      const AudioContext =
        window.AudioContext || window.webkitAudioContext;

      const audioContext = new AudioContext();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();

      const frequencies = [
        420, 520, 620, 720, 820, 560, 680, 900,
      ];

      oscillator.frequency.value = frequencies[index];
      oscillator.type = "sine";

      gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        0.045,
        audioContext.currentTime + 0.02
      );
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + 0.18
      );

      oscillator.connect(gain);
      gain.connect(audioContext.destination);

      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
      console.log("Audio unavailable");
    }
  };

  const selectStep = (index) => {
    setActiveStep(index);
    playSound(index);
  };

  const active = steps[activeStep];

  return (
    <section className="section automation-section" id="automation">
      <div className="section-container">

        {/* HEADER */}
        <div className="automation-header">
          <div className="section-heading">
            <span className="section-label">
              ✨ INTERACTIVE AUTOMATION LAB
            </span>

            <h2>
              Automation{" "}
              <span className="automation-gradient">
                Transformation
              </span>
            </h2>

            <p>
              Experience the complete journey from Salesforce record
              creation to automated customer support, communication,
              SLA tracking and analytics.
            </p>
          </div>

          <div className="automation-controls">
            <button
              className={`sound-toggle ${soundOn ? "active" : ""}`}
              onClick={() => setSoundOn(!soundOn)}
            >
              <span>{soundOn ? "🔊" : "🔇"}</span>
              Sound {soundOn ? "ON" : "OFF"}
            </button>

            <div className="automation-status">
              <span></span>
              SYSTEM ACTIVE
            </div>
          </div>
        </div>

        {/* TRANSFORMATION FLOW */}
        <div className="automation-flow">
          {steps.map((step, index) => (
            <div
              className={`automation-node ${step.effect} ${
                activeStep === index ? "active" : ""
              }`}
              key={step.number}
              onClick={() => selectStep(index)}
            >
              <div className="automation-node-number">
                {step.number}
              </div>

              <div className="automation-node-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.short}</p>

              {index < steps.length - 1 && (
                <div
                  className={`automation-connector ${
                    activeStep >= index ? "connected" : ""
                  }`}
                >
                  <span></span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ACTIVE TRANSFORMATION PANEL */}
        <div className={`automation-detail ${active.effect}`}>

          <div className="automation-detail-visual">
            <div className="detail-orbit orbit-one"></div>
            <div className="detail-orbit orbit-two"></div>

            <div className="detail-icon">
              {active.icon}
            </div>

            <div className="detail-pulse"></div>
          </div>

          <div className="automation-detail-content">
            <span className="detail-step">
              STEP {active.number}
            </span>

            <h3>{active.title}</h3>

            <h4>{active.short}</h4>

            <p>{active.description}</p>

            <div className="tech-title">TECH USED</div>

            <div className="tech-list">
              {active.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="automation-next">
            <span>WHAT HAPPENS NEXT?</span>

            <p>{active.next}</p>

            <button
              onClick={() =>
                selectStep((activeStep + 1) % steps.length)
              }
            >
              Next Step →
            </button>
          </div>
        </div>

        {/* PROGRESS */}
        <div className="automation-progress">
          <div className="progress-top">
            <span>Automation Journey</span>
            <strong>
              {String(activeStep + 1).padStart(2, "0")} /{" "}
              {String(steps.length).padStart(2, "0")}
            </strong>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Automation;