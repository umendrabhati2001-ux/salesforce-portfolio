function Automation() {
  const steps = [
    {
      number: "01",
      title: "Complaint Created",
      description:
        "A new Customer Complaint record starts the automated support workflow.",
    },
    {
      number: "02",
      title: "Validate & Prioritize",
      description:
        "Validation rules and business logic ensure required data and priority are correctly handled.",
    },
    {
      number: "03",
      title: "Calculate SLA",
      description:
        "The workflow determines the response target and tracks the SLA deadline.",
    },
    {
      number: "04",
      title: "WhatsApp Acknowledgement",
      description:
        "Apex sends an automated acknowledgement through the WhatsApp integration.",
    },
    {
      number: "05",
      title: "Track Message",
      description:
        "A WhatsApp Message record stores delivery, processing and communication details.",
    },
    {
      number: "06",
      title: "Escalate if Required",
      description:
        "SLA or processing failures can trigger human follow-up and escalation.",
    },
  ];

  return (
    <section className="section automation-section" id="automation">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">AUTOMATION ENGINE</span>

          <h2>From record creation to automated support</h2>

          <p>
            Salesforce Flow and Apex work together to automate repetitive
            customer-support operations while keeping communication and
            processing status traceable.
          </p>
        </div>

        <div className="automation-timeline">
          {steps.map((step, index) => (
            <div className="automation-step" key={step.number}>
              <div className="automation-number">
                {step.number}
              </div>

              <div className="automation-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="automation-line"></div>
              )}
            </div>
          ))}
        </div>

        <div className="automation-roles">
          <div className="automation-role">
            <span>FLOW</span>
            <h3>Salesforce Flow</h3>
            <p>
              Handles record-triggered automation, decision logic,
              record updates and workflow orchestration.
            </p>
          </div>

          <div className="automation-role">
            <span>APEX</span>
            <h3>WhatsAppAutoAcknowledgement</h3>
            <p>
              Performs custom server-side processing required to
              communicate with the external WhatsApp service.
            </p>
          </div>

          <div className="automation-role">
            <span>TRACKING</span>
            <h3>WhatsApp Message</h3>
            <p>
              Maintains message status, processing status, errors,
              retry information and human follow-up requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Automation;