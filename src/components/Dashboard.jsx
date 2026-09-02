import { useEffect, useRef, useState } from "react";

function Dashboard() {
  const [soundOn, setSoundOn] = useState(true);
  const [isLive, setIsLive] = useState(true);
  const [activeEvent, setActiveEvent] = useState(0);

  const [metrics, setMetrics] = useState([
    { value: 248, label: "Total Complaints" },
    { value: 42, label: "Open Complaints" },
    { value: 186, label: "Resolved" },
    { value: 12, label: "SLA Breaches" },
  ]);

  const [whatsappMessages, setWhatsappMessages] = useState(324);
  const [pendingResponses, setPendingResponses] = useState(16);
  const [slaPerformance, setSlaPerformance] = useState(94.8);

  const audioContextRef = useRef(null);

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

  const events = [
    {
      title: "Flow Triggered",
      description: "Customer complaint automation executed",
      icon: "⚡",
    },
    {
      title: "Apex Processing",
      description: "Custom server-side logic completed",
      icon: "</>",
    },
    {
      title: "WhatsApp Delivered",
      description: "Customer acknowledgement processed",
      icon: "◉",
    },
    {
      title: "SLA Checked",
      description: "Response target successfully monitored",
      icon: "◷",
    },
    {
      title: "Analytics Updated",
      description: "Dashboard metrics refreshed",
      icon: "▥",
    },
  ];

  const playSound = (type = "success") => {
    if (!soundOn) return;

    try {
      const AudioContext =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContext) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }

      const audioContext = audioContextRef.current;

      if (audioContext.state === "suspended") {
        audioContext.resume();
      }

      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();

      const frequency =
        type === "warning"
          ? 300
          : type === "success"
          ? 620
          : 480;

      oscillator.type = "sine";
      oscillator.frequency.value = frequency;

      gain.gain.setValueAtTime(
        0.0001,
        audioContext.currentTime
      );

      gain.gain.exponentialRampToValueAtTime(
        0.035,
        audioContext.currentTime + 0.02
      );

      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + 0.16
      );

      oscillator.connect(gain);
      gain.connect(audioContext.destination);

      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.18);
    } catch (error) {
      console.log("Audio unavailable");
    }
  };

  const triggerDashboard = () => {
    setIsLive(true);
    playSound("success");

    setActiveEvent((previous) => {
      return (previous + 1) % events.length;
    });

    setMetrics((previous) =>
      previous.map((metric, index) => {
        if (index === 0) {
          return {
            ...metric,
            value: metric.value + 1,
          };
        }

        if (index === 1 && Math.random() > 0.55) {
          return {
            ...metric,
            value: Math.max(0, metric.value - 1),
          };
        }

        if (index === 2 && Math.random() > 0.5) {
          return {
            ...metric,
            value: metric.value + 1,
          };
        }

        return metric;
      })
    );

    setWhatsappMessages((previous) => previous + 1);

    setPendingResponses((previous) =>
      Math.random() > 0.6
        ? Math.max(0, previous - 1)
        : previous
    );

    setSlaPerformance((previous) =>
      Math.min(
        99.9,
        Number((previous + 0.1).toFixed(1))
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      triggerDashboard();
    }, 5000);

    return () => clearInterval(interval);
  }, [soundOn]);

  const handleSoundToggle = () => {
    setSoundOn((previous) => {
      const nextValue = !previous;

      if (nextValue) {
        setTimeout(() => {
          playSound("success");
        }, 0);
      }

      return nextValue;
    });
  };

  return (
    <section
      className="section dashboard-section"
      id="dashboard"
    >
      <div className="section-container">

        {/* HEADER */}
        <div className="dashboard-heading-row">

          <div className="section-heading">
            <span className="section-label">
              REPORTING & ANALYTICS
            </span>

            <h2>
              Support operations at a glance
            </h2>

            <p>
              A Salesforce-style dashboard provides visibility
              into complaint volume, resolution progress, SLA
              performance and WhatsApp communication.
            </p>
          </div>

          <div className="dashboard-controls">

            <button
              className={`dashboard-sound ${
                soundOn ? "active" : ""
              }`}
              onClick={handleSoundToggle}
            >
              <span>
                {soundOn ? "🔊" : "🔇"}
              </span>

              Sound {soundOn ? "ON" : "OFF"}
            </button>

            <div
              className={`dashboard-system-status ${
                isLive ? "active" : ""
              }`}
            >
              <span></span>

              SYSTEM {isLive ? "ACTIVE" : "PAUSED"}
            </div>

          </div>
        </div>

        {/* KPI METRICS */}
        <div className="metrics-grid">

          {metrics.map((metric, index) => (
            <div
              className={`metric-card ${
                index === activeEvent % 4
                  ? "metric-active"
                  : ""
              }`}
              key={metric.label}
            >
              <span>{metric.label}</span>

              <strong>{metric.value}</strong>

              <small>
                {index === 0 && "Live records"}
                {index === 1 && "Requires attention"}
                {index === 2 && "Successfully resolved"}
                {index === 3 && "Needs monitoring"}
              </small>
            </div>
          ))}

        </div>

        {/* MAIN DASHBOARD */}
        <div className="dashboard-panel">

          <div className="dashboard-panel-header">

            <div>
              <span className="mini-label">
                SUPPORT OVERVIEW
              </span>

              <h3>
                Customer Complaint Dashboard
              </h3>
            </div>

            <span className="dashboard-live">
              <span></span>
              LIVE VIEW
            </span>

          </div>

          <div className="dashboard-content">

            {/* COMPLAINT STATUS */}
            <div className="chart-card">

              <div className="chart-title">
                <h4>Complaint Status</h4>
                <span>Distribution</span>
              </div>

              <div className="bar-chart">

                {statusData.map((item) => (
                  <div
                    className="bar-row"
                    key={item.label}
                  >
                    <div className="bar-label">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>

                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{
                          width: item.value,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}

              </div>

            </div>

            {/* PRIORITY */}
            <div className="chart-card">

              <div className="chart-title">
                <h4>Priority Distribution</h4>
                <span>Current workload</span>
              </div>

              <div className="priority-list">

                {priorityData.map((item) => (
                  <div
                    className="priority-row"
                    key={item.label}
                  >
                    <span>{item.label}</span>

                    <div className="priority-track">
                      <div
                        className="priority-fill"
                        style={{
                          width: item.value,
                        }}
                      ></div>
                    </div>

                    <strong>{item.value}</strong>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* LIVE AUTOMATION */}
          <div className="dashboard-automation">

            <div className="dashboard-automation-header">

              <div>
                <span className="mini-label">
                  AUTOMATION MONITOR
                </span>

                <h3>
                  Live Salesforce Processing
                </h3>
              </div>

              <button
                className="dashboard-run-button"
                onClick={triggerDashboard}
              >
                Run Automation →
              </button>

            </div>

            <div className="dashboard-event">

              <div className="dashboard-event-icon">
                {events[activeEvent].icon}
              </div>

              <div className="dashboard-event-content">

                <span>
                  CURRENT EVENT
                </span>

                <strong>
                  {events[activeEvent].title}
                </strong>

                <p>
                  {events[activeEvent].description}
                </p>

              </div>

              <div className="dashboard-event-status">
                <span></span>
                PROCESSED
              </div>

            </div>

            <div className="dashboard-event-track">

              {events.map((event, index) => (
                <div
                  className={`dashboard-event-step ${
                    index === activeEvent
                      ? "active"
                      : ""
                  } ${
                    index < activeEvent
                      ? "completed"
                      : ""
                  }`}
                  key={event.title}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <small>
                    {event.title}
                  </small>
                </div>
              ))}

            </div>

          </div>

          {/* BOTTOM METRICS */}
          <div className="dashboard-bottom">

            <div>
              <span>WHATSAPP MESSAGES</span>

              <strong>
                {whatsappMessages}
              </strong>

              <small>
                Tracked communications
              </small>
            </div>

            <div>
              <span>PENDING RESPONSES</span>

              <strong>
                {pendingResponses}
              </strong>

              <small>
                Requires support attention
              </small>
            </div>

            <div>
              <span>SLA PERFORMANCE</span>

              <strong>
                {slaPerformance}%
              </strong>

              <small>
                Within target
              </small>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Dashboard;