function Security() {
  const securityItems = [
    {
      title: "Permission Sets",
      description:
        "Dedicated permissions provide users with only the Salesforce access required for the support automation workflow.",
    },
    {
      title: "Object Security",
      description:
        "Customer, Customer Complaint and WhatsApp Message access is controlled according to the user's responsibilities.",
    },
    {
      title: "Field-Level Security",
      description:
        "Sensitive customer and communication fields can be restricted from unauthorized users.",
    },
    {
      title: "Least Privilege",
      description:
        "Unnecessary elevated permissions such as Modify All or View All are avoided wherever they are not required.",
    },
    {
      title: "Apex Security",
      description:
        "Custom Apex integration logic is designed to work within Salesforce security and governor-limit considerations.",
    },
    {
      title: "WhatsApp Opt-In",
      description:
        "WhatsApp communication is triggered only when the customer has provided the required opt-in and phone information.",
    },
  ];

  return (
    <section className="section security-section" id="security">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">SECURITY & ACCESS</span>

          <h2>Designed with controlled access in mind</h2>

          <p>
            The solution follows a least-privilege approach so that customer
            data, complaint records and automation capabilities are accessed
            according to business requirements.
          </p>
        </div>

        <div className="security-grid">
          {securityItems.map((item, index) => (
            <div className="security-card" key={item.title}>
              <div className="security-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="security-banner">
          <div>
            <span className="mini-label">SECURITY PRINCIPLE</span>
            <h3>Protect the data. Control the access.</h3>
          </div>

          <p>
            Salesforce permissions, controlled automation and customer
            WhatsApp opt-in work together to create a safer support workflow.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Security;