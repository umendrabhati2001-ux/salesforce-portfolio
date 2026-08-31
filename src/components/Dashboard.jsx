function Dashboard() {
  const metrics = [
    { value: "248", label: "Total Complaints" },
    { value: "42", label: "Open Complaints" },
    { value: "186", label: "Resolved" },
    { value: "12", label: "SLA Breaches" },
  ];

  const statusData = [
    { label: "New", value: "18%" },
    { label: "In Progress", value: "24%" },
    { label: "Pending", value: "12%" },
    { label: "Resolved", value: "46%" },
  ];

  const priorityData = [
    { label: "Critical", value: "8%" },
    { label: "High", value: "27%" },
    { label: "Medium", value: "41%" },
    { label: "Low", value: "24%" },
  ];

  return (
    <section className="section dashboard-section" id="dashboard">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">REPORTING & ANALYTICS</span>

          <h2>Support operations at a glance</h2>

          <p>
            A Salesforce-style dashboard provides visibility into complaint
            volume, resolution progress, SLA performance and WhatsApp
            communication.
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric) => (
            <div className="metric-card" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>

        <div className="dashboard-panel">
          <div className="dashboard-panel-header">
            <div>
              <span className="mini-label">SUPPORT OVERVIEW</span>
              <h3>Customer Complaint Dashboard</h3>
            </div>

            <span className="dashboard-live">
              ● LIVE VIEW
            </span>
          </div>

          <div className="dashboard-content">
            <div className="chart-card">
              <div className="chart-title">
                <h4>Complaint Status</h4>
                <span>Distribution</span>
              </div>

              <div className="bar-chart">
                {statusData.map((item) => (
                  <div className="bar-row" key={item.label}>
                    <div className="bar-label">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>

                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{ width: item.value }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="chart-card">
              <div className="chart-title">
                <h4>Priority Distribution</h4>
                <span>Current workload</span>
              </div>

              <div className="priority-list">
                {priorityData.map((item) => (
                  <div className="priority-row" key={item.label}>
                    <span>{item.label}</span>

                    <div className="priority-track">
                      <div
                        className="priority-fill"
                        style={{ width: item.value }}
                      ></div>
                    </div>

                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="dashboard-bottom">
            <div>
              <span>WHATSAPP MESSAGES</span>
              <strong>324</strong>
              <small>Tracked communications</small>
            </div>

            <div>
              <span>PENDING RESPONSES</span>
              <strong>16</strong>
              <small>Requires support attention</small>
            </div>

            <div>
              <span>SLA PERFORMANCE</span>
              <strong>94.8%</strong>
              <small>Within target</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;