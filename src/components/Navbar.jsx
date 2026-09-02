import { useState, useEffect } from "react";

// ================= Persistent Audio Engine =================
let globalAudioCtx = null;

const getAudioCtx = () => {
  try {
    if (!globalAudioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) globalAudioCtx = new AudioCtx();
    }
    if (globalAudioCtx && globalAudioCtx.state === "suspended") {
      globalAudioCtx.resume();
    }
    return globalAudioCtx;
  } catch (e) {
    return null;
  }
};

const playOpenSound = () => {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  osc1.type = "sine";
  osc1.frequency.setValueAtTime(523.25, now);
  osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.15);
  gain1.gain.setValueAtTime(0.08, now);
  gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
  osc1.connect(gain1);
  gain1.connect(ctx.destination);
  osc1.start(now);
  osc1.stop(now + 0.28);

  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.type = "triangle";
  osc2.frequency.setValueAtTime(659.25, now + 0.05);
  osc2.frequency.exponentialRampToValueAtTime(1046.5, now + 0.22);
  gain2.gain.setValueAtTime(0.04, now + 0.05);
  gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
  osc2.connect(gain2);
  gain2.connect(ctx.destination);
  osc2.start(now + 0.05);
  osc2.stop(now + 0.35);
};

const playCloseSound = () => {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(587.33, now);
  osc.frequency.exponentialRampToValueAtTime(293.66, now + 0.12);
  gain.gain.setValueAtTime(0.06, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.14);
};

const playHoverSound = () => {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(1200, now);
  gain.gain.setValueAtTime(0.02, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.04);
};

const playClickSound = () => {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(440, now);
  osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
  gain.gain.setValueAtTime(0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.16);
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Initialize Dark Mode from localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_theme");
      if (saved) return saved === "dark";
      return false;
    }
    return false;
  });

  // Smart Global Dark Theme Inverter
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark-smart-mode");
      localStorage.setItem("portfolio_theme", "dark");
    } else {
      root.classList.remove("dark-smart-mode");
      localStorage.setItem("portfolio_theme", "light");
    }
  }, [isDarkMode]);

  // Floating Island Scroll Shadow Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    playClickSound();
    setIsDarkMode((prev) => !prev);
  };

  const toggleProfile = () => {
    setProfileOpen((prev) => {
      const next = !prev;
      if (next) {
        playOpenSound();
        setMenuOpen(false);
      } else {
        playCloseSound();
      }
      return next;
    });
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        playOpenSound();
        setProfileOpen(false);
      } else {
        playCloseSound();
      }
      return next;
    });
  };

  const closeAll = () => {
    playCloseSound();
    setMenuOpen(false);
    setProfileOpen(false);
  };

  const handleNavClick = (e, href, label) => {
    e.preventDefault();
    setActiveTab(label);
    playClickSound();
    closeAll();

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = href;
    }
  };

  const navItems = [
    {
      label: "Home",
      href: "#home",
      color: "#3B82F6",
      icon: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
    },
    {
      label: "About",
      href: "#about",
      color: "#8B5CF6",
      icon: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      label: "Project",
      href: "#project",
      color: "#F59E0B",
      icon: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2" />
          <circle cx="18" cy="18" r="3" />
          <circle cx="18" cy="9" r="2" />
        </svg>
      ),
    },
    {
      label: "Architecture",
      href: "#architecture",
      color: "#06B6D4",
      icon: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <rect width="6" height="6" x="9" y="9" rx="1" />
          <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
        </svg>
      ),
    },
    {
      label: "Automation",
      href: "#automation",
      color: "#10B981",
      icon: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8M4 12H2m20 0h-2m-8 8v-4m-4 0h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2z" />
          <circle cx="9" cy="11" r="1" />
          <circle cx="15" cy="11" r="1" />
        </svg>
      ),
    },
    {
      label: "Dashboard",
      href: "#dashboard",
      color: "#EC4899",
      icon: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      ),
    },
    {
      label: "Security",
      href: "#security",
      color: "#EF4444",
      icon: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      label: "Contact",
      href: "#contact",
      color: "#0284C7",
      icon: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Smart Non-Destructive Dark Mode Engine */}
      <style>{`
        /* Smart Theme Engine */
        html {
          transition: filter 0.3s ease;
        }

        html.dark-smart-mode {
          filter: invert(0.93) hue-rotate(180deg) brightness(0.96) contrast(0.96) !important;
          background-color: #ffffff !important;
        }

        /* Keep Photos and Avatars 100% Original and Natural */
        html.dark-smart-mode img,
        html.dark-smart-mode video,
        html.dark-smart-mode .avatar-img,
        html.dark-smart-mode [data-no-invert="true"] {
          filter: invert(1) hue-rotate(180deg) !important;
        }

        /* Floating Island Wrapper */
        .navbar-floating-container {
          position: sticky;
          top: 12px;
          left: 0;
          right: 0;
          width: calc(100% - 32px);
          max-width: 1240px;
          margin: 12px auto 20px auto;
          z-index: 9999;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .navbar-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #eef2f6;
          box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          position: relative;
        }

        .navbar-card.is-scrolled {
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-color: #e2e8f0;
          box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.08);
        }

        /* Profile Left Button */
        .profile-trigger-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background: transparent;
          border: none;
          padding: 4px 8px;
          border-radius: 16px;
          cursor: pointer;
          transition: background 0.2s ease;
          text-align: left;
        }

        .profile-trigger-btn:hover {
          background: #f8fafc;
        }

        .avatar-ring {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          padding: 2px;
          background: #ffffff;
          border: 2px solid #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .profile-trigger-btn:hover .avatar-ring {
          transform: scale(1.05);
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          background: #e2e8f0;
        }

        .online-dot {
          position: absolute;
          bottom: 1px;
          right: 1px;
          width: 11px;
          height: 11px;
          background-color: #22c55e;
          border: 2px solid #ffffff;
          border-radius: 50%;
        }

        .profile-name {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .profile-badge-small {
          font-size: 10px;
          font-weight: 700;
          color: #0284c7;
          background: #e0f2fe;
          padding: 1px 6px;
          border-radius: 6px;
        }

        .profile-role {
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
          margin-top: 2px;
        }

        /* Desktop Nav Center (Single Row) */
        .desktop-nav-menu {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        @media (max-width: 860px) {
          .desktop-nav-menu {
            display: none !important;
          }
        }

        .desktop-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          border-radius: 12px;
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 600;
          color: #475569;
          transition: all 0.2s ease;
        }

        .desktop-tab:hover {
          color: #0284c7;
          background-color: #f8fafc;
        }

        .desktop-tab.active {
          color: #0284c7;
          background-color: #f0f7ff;
        }

        .tab-indicator {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 22px;
          height: 3px;
          background-color: #0284c7;
          border-radius: 3px 3px 0 0;
        }

        /* Right Controls */
        .right-controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .icon-square-btn {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: 1.5px solid #e2e8f0;
          background: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1e293b;
          transition: all 0.2s ease;
        }

        .icon-square-btn:hover {
          background: #f8fafc;
          border-color: #38bdf8;
          transform: scale(1.04);
        }

        .menu-toggle-btn {
          border-color: #bae6fd;
          background: #f0f9ff;
          color: #0284c7;
        }

        /* Modal Animation */
        @keyframes popupSlideAnim {
          0% {
            opacity: 0;
            transform: translateY(-8px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .pulsing-dot {
          animation: livePulse 1.8s infinite;
        }

        @keyframes livePulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .tech-item-row:hover {
          background-color: #f8fafc;
          transform: translateX(2px);
        }

        .tech-item-row:hover .row-arrow {
          transform: translateX(4px);
          color: #0284c7 !important;
        }
      `}</style>

      {/* Floating Island Container */}
      <div className="navbar-floating-container">
        <nav className={`navbar-card ${isScrolled ? "is-scrolled" : ""}`}>
          
          {/* 1. Left Profile Button (Click to open Bio Popup) */}
          <button
            type="button"
            className="profile-trigger-btn"
            onClick={toggleProfile}
            onMouseEnter={playHoverSound}
            aria-label="View Profile Details"
          >
            <div className="avatar-ring">
              <img
                src="/img.jpeg"
                alt="Umendra Bhati"
                className="avatar-img"
              />
              <span className="online-dot"></span>
            </div>
            <div>
              <div className="profile-name">
                <span>Umendra Bhati</span>
                <span className="profile-badge-small">PRO</span>
              </div>
              <div className="profile-role">Salesforce Admin & Developer</div>
            </div>
          </button>

          {/* 2. Center Navigation Tabs (Desktop Single-Row) */}
          <div className="desktop-nav-menu">
            {navItems.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`desktop-tab ${isActive ? "active" : ""}`}
                  onMouseEnter={playHoverSound}
                  onClick={(e) => handleNavClick(e, item.href, item.label)}
                >
                  <span style={{ color: item.color, display: "flex" }}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>

                  {isActive && <span className="tab-indicator"></span>}
                </a>
              );
            })}
          </div>

          {/* 3. Right Action Controls (Sun / Moon + Menu) */}
          <div className="right-controls">
            {/* Real Working Theme Toggle Button */}
            <button
              type="button"
              className="icon-square-btn"
              onClick={toggleTheme}
              onMouseEnter={playHoverSound}
              aria-label="Toggle Dark/Light Mode"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              style={{
                borderColor: isDarkMode ? "#38bdf8" : "#e2e8f0",
                background: isDarkMode ? "#e0f2fe" : "#ffffff",
              }}
            >
              {isDarkMode ? (
                /* Moon Icon */
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              ) : (
                /* Sun Icon */
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              )}
            </button>

            {/* Menu Drawer Toggle Button */}
            <button
              type="button"
              className="icon-square-btn menu-toggle-btn"
              onClick={toggleMenu}
              aria-label="Toggle Navigation"
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="7" x2="20" y2="7"></line>
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="17" x2="20" y2="17"></line>
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* 🌟 1. PROFILE POPUP MODAL (Left Side Profile Click) */}
        {profileOpen && (
          <>
            <div
              onClick={closeAll}
              style={{ position: "fixed", inset: 0, zIndex: 9998 }}
            />

            <div
              style={{
                position: "absolute",
                top: "calc(100% + 10px)",
                left: "0",
                width: "320px",
                maxWidth: "calc(100vw - 40px)",
                background: "#ffffff",
                borderRadius: "22px",
                padding: "18px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)",
                zIndex: 9999,
                animation: "popupSlideAnim 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              }}
            >
              {/* Status Header & Close */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "3px 8px", borderRadius: "12px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e" }}></span>
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#15803d" }}>AVAILABLE FOR WORK</span>
                </div>
                <button
                  onClick={closeAll}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8", fontSize: "14px", fontWeight: "bold" }}
                >
                  ✕
                </button>
              </div>

              {/* Avatar + Info */}
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "14px" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "50%", padding: "2px", border: "2px solid #0284c7" }}>
                  <img
                    src="/img.jpeg"
                    alt="Umendra Bhati"
                    style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0", fontSize: "16px", fontWeight: "800", color: "#0f172a" }}>Umendra Bhati</h4>
                  <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#0284c7", fontWeight: "600" }}>Salesforce Admin & Dev</p>
                  <p style={{ margin: "2px 0 0 0", fontSize: "11px", color: "#64748b" }}>📍 India (Open to Remote)</p>
                </div>
              </div>

              {/* Skills Chips */}
              <div style={{ marginBottom: "14px" }}>
                <div style={{ fontSize: "11px", fontWeight: "700", color: "#94a3b8", marginBottom: "6px", letterSpacing: "0.5px" }}>EXPERTISE</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {["Salesforce Flows", "Apex & Triggers", "WhatsApp API", "Webhooks", "REST API"].map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: "11px",
                        fontWeight: "600",
                        background: "#f1f5f9",
                        color: "#334155",
                        padding: "3px 8px",
                        borderRadius: "8px",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connect CTA */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact", "Contact")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "10px",
                  background: "linear-gradient(135deg, #0284c7, #0369a1)",
                  color: "#ffffff",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontSize: "13.5px",
                  fontWeight: "700",
                  boxShadow: "0 4px 10px rgba(2, 132, 199, 0.25)",
                }}
              >
                <span>Get In Touch</span>
                <span>→</span>
              </a>
            </div>
          </>
        )}

        {/* 🌟 2. NAVIGATION DRAWER MENU (Right Side Hamburger Click) */}
        {menuOpen && (
          <>
            <div
              onClick={closeAll}
              style={{ position: "fixed", inset: 0, zIndex: 9998 }}
            />

            <div
              style={{
                marginTop: "10px",
                background: "#ffffff",
                borderRadius: "22px",
                padding: "16px 20px 20px 20px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
                animation: "popupSlideAnim 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                position: "relative",
                zIndex: 9999,
              }}
            >
              {/* Header Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "12px",
                  marginBottom: "8px",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    background: "#f8fafc",
                    padding: "4px 10px",
                    borderRadius: "16px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <span
                    className="pulsing-dot"
                    style={{
                      width: "7px",
                      height: "7px",
                      backgroundColor: "#10b981",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      color: "#475569",
                      letterSpacing: "1px",
                    }}
                  >
                    NAVIGATION
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    color: "#94a3b8",
                    letterSpacing: "1px",
                  }}
                >
                  MENU
                </span>
              </div>

              {/* List with 8 Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                {navItems.map((item) => {
                  const isActive = activeTab === item.label;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href, item.label)}
                      onMouseEnter={playHoverSound}
                      className="tech-item-row"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto 1fr",
                        alignItems: "center",
                        padding: "9px 12px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        color: isActive ? "#0284c7" : "#1e293b",
                        background: isActive ? "#f0f7ff" : "transparent",
                        fontWeight: "600",
                        fontSize: "15px",
                        transition: "all 0.18s ease",
                      }}
                    >
                      {/* Left: Label */}
                      <span style={{ textAlign: "left" }}>{item.label}</span>

                      {/* Center: Arrow */}
                      <span
                        className="row-arrow"
                        style={{
                          color: "#94a3b8",
                          fontSize: "15px",
                          padding: "0 8px",
                          transition: "transform 0.2s ease, color 0.2s ease",
                        }}
                      >
                        →
                      </span>

                      {/* Right: Colored Icon */}
                      <span
                        className="row-icon"
                        style={{
                          color: item.color,
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        {item.icon}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Connect Button */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact", "Contact")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "14px",
                  background: "linear-gradient(135deg, #0284c7, #0369a1)",
                  color: "#ffffff",
                  padding: "12px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontSize: "14.5px",
                  fontWeight: "600",
                  boxShadow: "0 4px 14px rgba(2, 132, 199, 0.3)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              OnMouseEnter={(e) => {
                  playHoverSound();
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                OnMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span>Let's Connect</span>
                <span>→</span>
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;