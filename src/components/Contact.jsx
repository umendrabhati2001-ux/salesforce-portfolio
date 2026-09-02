import React from 'react';

const Contact = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        /* ================= PERMANENT SOLID DARK SECTION (BOTH LIGHT & DARK MODE) ================= */
        .salesforce-contact-wrapper {
          width: 100%;
          min-height: 100vh;
          background: radial-gradient(circle at 80% 15%, rgba(14, 42, 100, 0.45) 0%, transparent 55%),
                      radial-gradient(circle at 10% 85%, rgba(10, 30, 75, 0.45) 0%, transparent 55%),
                      #050b16 !important;
          color: #ffffff !important;
          padding: 80px 20px 40px 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
          filter: none !important;
        }

        .sf-container {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* HEADER */
        .sf-header {
          margin-bottom: 30px;
        }

        .sf-badge-title {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          color: #38bdf8 !important;
          text-transform: uppercase;
          display: block;
          margin-bottom: 12px;
        }

        .sf-main-heading {
          font-size: clamp(34px, 4.5vw, 52px);
          font-weight: 800;
          color: #ffffff !important;
          letter-spacing: -1.2px;
          line-height: 1.15;
          margin: 0 0 16px;
        }

        .sf-highlight {
          color: #3b82f6;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sf-subtitle-text {
          font-size: 1.02rem;
          color: #94a3b8 !important;
          line-height: 1.65;
          max-width: 760px;
          margin: 0 0 28px;
        }

        /* 3 BUTTONS ROW */
        .sf-buttons-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 16px;
        }

        .sf-btn-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-sizing: border-box;
        }

        .sf-btn-primary {
          background: #1d4ed8 !important;
          border: 1px solid #3b82f6 !important;
          color: #ffffff !important;
          box-shadow: 0 6px 20px rgba(29, 78, 216, 0.4);
        }

        .sf-btn-primary:hover {
          background: #2563eb !important;
          transform: translateY(-2px);
        }

        .sf-btn-glass {
          background: rgba(13, 26, 50, 0.75) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: #ffffff !important;
          backdrop-filter: blur(12px);
        }

        .sf-btn-glass:hover {
          background: rgba(20, 40, 78, 0.9) !important;
          border-color: rgba(59, 130, 246, 0.4) !important;
          transform: translateY(-2px);
        }

        .sf-icon-center { display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .sf-linkedin-blue { color: #0a66c2; }
        .sf-btn-content { display: flex; flex-direction: column; flex: 1; min-width: 0; }
        .sf-btn-title { font-size: 0.95rem; font-weight: 700; color: #ffffff !important; }
        .sf-btn-desc { font-size: 0.75rem; color: rgba(255, 255, 255, 0.6) !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .sf-arrow { font-size: 1.1rem; color: rgba(255, 255, 255, 0.45) !important; }

        /* MAIN GLOWING PROFILE CARD */
        .sf-main-card {
          margin-top: 32px;
          background: linear-gradient(180deg, rgba(12, 23, 46, 0.85) 0%, rgba(6, 14, 28, 0.96) 100%) !important;
          border: 1px solid rgba(59, 130, 246, 0.25) !important;
          border-radius: 24px;
          padding: 38px 36px 28px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          position: relative;
          box-sizing: border-box;
        }

        .sf-card-body { display: flex; gap: 42px; margin-bottom: 32px; }
        .sf-left-col { flex: 0 0 220px; display: flex; flex-direction: column; align-items: center; }
        .sf-avatar-wrap { margin-bottom: 18px; }

.sf-avatar-circle img,
.salesforce-contact-wrapper img,
html.dark .sf-avatar-circle img,
html.dark-smart-mode .sf-avatar-circle img {
  filter: none !important;
  -webkit-filter: none !important;
}

        .sf-avatar-circle img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; display: block; }
        .sf-online-dot { position: absolute; bottom: 8px; right: 12px; width: 18px; height: 18px; background-color: #22c55e !important; border: 3.5px solid #081122 !important; border-radius: 50%; }

        .sf-quote-box {
          background: rgba(15, 30, 58, 0.65) !important;
          border: 1px solid rgba(59, 130, 246, 0.2) !important;
          border-radius: 14px;
          padding: 12px 14px;
          width: 100%;
          box-sizing: border-box;
        }

        .sf-quote-icon { color: #38bdf8 !important; font-size: 1.5rem; font-weight: 800; line-height: 1; display: block; margin-bottom: 4px; }
        .sf-quote-box p { font-size: 0.8rem; color: #cbd5e1 !important; line-height: 1.4; margin: 0; }

        .sf-right-col { flex: 1; min-width: 0; }
        .sf-hello-tag { display: inline-flex; align-items: center; gap: 7px; color: #38bdf8 !important; font-size: 0.75rem; font-weight: 700; letter-spacing: 1.5px; margin-bottom: 6px; }
        .sf-user-name { font-size: 2.2rem; font-weight: 800; color: #ffffff !important; margin: 0 0 4px; }
        .sf-user-role { font-size: 1.05rem; font-weight: 600; color: #3b82f6 !important; margin: 0 0 14px; }
        .sf-user-bio { font-size: 0.92rem; color: #94a3b8 !important; line-height: 1.6; margin: 0 0 22px; }

        .sf-features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 22px; }
        .sf-feature-item { display: flex; align-items: center; gap: 10px; }
        .sf-feat-icon { font-size: 1.25rem; }
        .sf-feat-title { display: block; font-size: 0.76rem; color: #64748b !important; font-weight: 600; }
        .sf-feat-desc { display: block; font-size: 0.88rem; color: #f1f5f9 !important; font-weight: 700; }

        .sf-status-row { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
        .sf-avail-pill { display: inline-flex; align-items: center; gap: 8px; background: rgba(34, 197, 94, 0.12) !important; border: 1px solid rgba(34, 197, 94, 0.3) !important; padding: 6px 14px; border-radius: 999px; font-size: 0.82rem; font-weight: 600; color: #4ade80 !important; }
        .sf-green-pulse { width: 7px; height: 7px; background-color: #22c55e !important; border-radius: 50%; box-shadow: 0 0 8px #22c55e; }
        .sf-loc-pill { display: inline-flex; align-items: center; gap: 6px; color: #64748b !important; font-size: 0.85rem; }

        /* 4-COLUMN STATS BAR */
        .sf-stats-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          border: 1px solid rgba(59, 130, 246, 0.2) !important;
          border-radius: 16px;
          padding: 16px 20px;
          background: rgba(9, 20, 42, 0.65) !important;
        }

        .sf-stat-box { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .sf-stat-icon { margin-bottom: 4px; }
        .sf-stat-icon.cyan { color: #38bdf8 !important; }
        .sf-stat-icon.green { color: #4ade80 !important; }
        .sf-stat-icon.purple { color: #c084fc !important; }
        .sf-stat-icon.yellow { color: #facc15 !important; }

        .sf-stat-cat { font-size: 0.72rem; color: #64748b !important; margin-bottom: 2px; }
        .sf-stat-val { font-size: 1.55rem; font-weight: 800; color: #ffffff !important; line-height: 1.2; }
        .sf-stat-sub { font-size: 0.72rem; color: #94a3b8 !important; }

        .sf-footer-credit { margin-top: 45px; text-align: center; font-size: 0.8rem; color: #475569 !important; }

        @media (max-width: 900px) {
          .sf-buttons-row { grid-template-columns: 1fr; }
          .sf-card-body { flex-direction: column; align-items: center; text-align: center; }
          .sf-left-col { flex: auto; width: 100%; max-width: 250px; }
          .sf-features-grid { grid-template-columns: repeat(2, 1fr); }
          .sf-status-row { justify-content: center; }
          .sf-stats-bar { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }

        @media (max-width: 550px) {
          .sf-main-card { padding: 24px 18px; }
          .sf-stats-bar { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* ================= COMPONENT HTML ================= */}
      <section className="salesforce-contact-wrapper" id="contact" data-no-invert="true">
        <div className="sf-container">
          
          {/* HEADER */}
          <div className="sf-header">
            <span className="sf-badge-title">GET IN TOUCH</span>
            <h2 className="sf-main-heading">
              Let's build smarter <span className="sf-highlight">Salesforce solutions.</span>
            </h2>
            <p className="sf-subtitle-text">
              I am a Salesforce Admin + Developer focused on CRM automation, customer support workflows, Apex, Flow and integration-based solutions.
            </p>

            {/* 3 BUTTONS */}
            <div className="sf-buttons-row">
              <a href="mailto:umendrabhati2001@gmail.com" className="sf-btn-card sf-btn-primary">
                <div className="sf-icon-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div className="sf-btn-content">
                  <span className="sf-btn-title">Email Me</span>
                  <span className="sf-btn-desc">umendrabhati2001@gmail.com</span>
                </div>
                <span className="sf-arrow">→</span>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="sf-btn-card sf-btn-glass">
                <div className="sf-icon-center sf-linkedin-blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>
                </div>
                <div className="sf-btn-content">
                  <span className="sf-btn-title">LinkedIn</span>
                  <span className="sf-btn-desc">Connect with me</span>
                </div>
                <span className="sf-arrow">→</span>
              </a>

              <a href="https://github.com" target="_blank" rel="noreferrer" className="sf-btn-card sf-btn-glass">
                <div className="sf-icon-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                </div>
                <div className="sf-btn-content">
                  <span className="sf-btn-title">GitHub</span>
                  <span className="sf-btn-desc">View my projects</span>
                </div>
                <span className="sf-arrow">→</span>
              </a>
            </div>
          </div>

          {/* MAIN PROFILE CARD */}
          <div className="sf-main-card">
            <div className="sf-card-body">
              
              {/* Left Column: Photo & Quote */}
              <div className="sf-left-col">
                <div className="sf-avatar-wrap">
                  <div className="sf-avatar-circle">
                    <img src="/img.jpeg" alt="Umendra Bhati" onError={(e) => { e.target.src = "/img.jpeg"; }} />
                    <span className="sf-online-dot"></span>
                  </div>
                </div>

                <div className="sf-quote-box">
                  <span className="sf-quote-icon">“</span>
                  <p>Passionate about building automation that creates better customer experiences.</p>
                </div>
              </div>

              {/* Right Column: Info & Badges */}
              <div className="sf-right-col">
                <div className="sf-hello-tag">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <span>HELLO, I'M</span>
                </div>

                <h3 className="sf-user-name">Umendra Bhati</h3>
                <p className="sf-user-role">Salesforce Admin + Developer</p>
                <p className="sf-user-bio">
                  I help businesses streamline support operations, automate workflows and integrate channels like WhatsApp to deliver faster and smarter customer service experiences.
                </p>

                {/* 4 Badges */}
                <div className="sf-features-grid">
                  <div className="sf-feature-item">
                    <span className="sf-feat-icon">☁️</span>
                    <div>
                      <strong className="sf-feat-title">Salesforce</strong>
                      <span className="sf-feat-desc">Expert</span>
                    </div>
                  </div>
                  <div className="sf-feature-item">
                    <span className="sf-feat-icon">⚡</span>
                    <div>
                      <strong className="sf-feat-title">Automation</strong>
                      <span className="sf-feat-desc">Enthusiast</span>
                    </div>
                  </div>
                  <div className="sf-feature-item">
                    <span className="sf-feat-icon">🧩</span>
                    <div>
                      <strong className="sf-feat-title">Problem</strong>
                      <span className="sf-feat-desc">Solver</span>
                    </div>
                  </div>
                  <div className="sf-feature-item">
                    <span className="sf-feat-icon">📖</span>
                    <div>
                      <strong className="sf-feat-title">Always</strong>
                      <span className="sf-feat-desc">Learning</span>
                    </div>
                  </div>
                </div>

                {/* Status & Location */}
                <div className="sf-status-row">
                  <div className="sf-avail-pill">
                    <span className="sf-green-pulse"></span>
                    <span>Available for opportunities</span>
                  </div>
                  <div className="sf-loc-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>Jaipur, Rajasthan, India</span>
                  </div>
                </div>

              </div>
            </div>

            {/* 4-Column Stats */}
            <div className="sf-stats-bar">
              <div className="sf-stat-box">
                <div className="sf-stat-icon cyan">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <span className="sf-stat-cat">Projects</span>
                <strong className="sf-stat-val">8+</strong>
                <span className="sf-stat-sub">Completed</span>
              </div>

              <div className="sf-stat-box">
                <div className="sf-stat-icon green">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <span className="sf-stat-cat">Automation</span>
                <strong className="sf-stat-val">20+</strong>
                <span className="sf-stat-sub">Flows & Processes</span>
              </div>

              <div className="sf-stat-box">
                <div className="sf-stat-icon purple">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <span className="sf-stat-cat">Apex Classes</span>
                <strong className="sf-stat-val">15+</strong>
                <span className="sf-stat-sub">Built</span>
              </div>

              <div className="sf-stat-box">
                <div className="sf-stat-icon yellow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <span className="sf-stat-cat">Commitment</span>
                <strong className="sf-stat-val">100%</strong>
                <span className="sf-stat-sub">Quality Focus</span>
              </div>
            </div>

          </div>

          <div className="sf-footer-credit">© 2026 Umendra Bhati. Salesforce WhatsApp Automation.</div>
        </div>
      </section>
    </>
  );
};

export default Contact;