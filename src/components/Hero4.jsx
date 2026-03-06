import { useState } from "react";

export default function Hero4() {
  const [menuOpen, setMenuOpen] = useState(false);

  const certs = [
    {
      issuer: "Amazon Web Services (AWS)",
      name: "AWS Certified Cloud Practitioner",
      color: "#FF9900",
      abbr: "CLF",
    },
    {
      issuer: "Amazon Web Services (AWS)",
      name: "AWS Certified Solutions Architect – Associate",
      color: "#FF9900",
      abbr: "SAA",
    },
    {
      issuer: "Amazon Web Services (AWS)",
      name: "AWS Certified Solutions Architect – Professional",
      color: "#FF9900",
      abbr: "SAP",
    },
    {
      issuer: "Finlatics",
      name: "Business Analyst",
      color: "#e02020",
      abbr: "BA",
    },
  ];

  return (
    <div style={{ backgroundColor: "#e8e8e8", width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap');

        .hero4 * { font-family: 'Montserrat', 'Arial Black', sans-serif; }

        .h4-section-title {
          font-weight: 900;
          font-size: clamp(40px, 7vw, 92px);
          line-height: 0.92;
          letter-spacing: -0.03em;
          color: #111;
          font-style: italic;
        }

        .h4-nav-text { font-weight: 700; font-size: 13px; color: #111; }

        .h4-nav-link {
          font-weight: 600;
          font-size: 13px;
          color: #111;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .h4-nav-link:hover { color: #e02020; }

        .h4-proverb {
          font-weight: 400;
          font-size: 11px;
          color: #555;
          font-style: italic;
          letter-spacing: 0.03em;
        }

        .h4-footer { font-weight: 500; font-size: 12px; color: #111; text-decoration: none; }

        .cert-card {
          background: #fff;
          border-radius: 8px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cert-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.12); }

        .cert-badge {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 12px;
          color: #fff;
          flex-shrink: 0;
          letter-spacing: 0.04em;
        }

        .cert-issuer {
          font-weight: 700;
          font-size: clamp(9px, 0.85vw, 11px);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 3px;
        }

        .cert-name {
          font-weight: 800;
          font-size: clamp(12px, 1.2vw, 15px);
          color: #111;
          line-height: 1.25;
        }

        .cert-verified {
          margin-left: auto;
          font-size: 11px;
          font-weight: 600;
          color: #22aa55;
          background: #e8f8ee;
          padding: 4px 10px;
          border-radius: 20px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .certs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #111;
          border-radius: 2px;
          transition: all 0.3s;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 18px;
          padding: 20px 24px;
          background: #e8e8e8;
          border-bottom: 1px solid #d0d0d0;
        }
        .mobile-menu.open { display: flex; }

        .h4-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 32px 18px;
        }

        .main-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 64px;
          gap: 28px;
        }

        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .h4-proverb { display: none; }
          .certs-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .cert-card { padding: 14px 16px !important; gap: 12px !important; }
          .cert-verified { display: none; }
          .main-area { padding: 24px 20px !important; gap: 20px !important; }
          .h4-footer-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            padding: 10px 20px 20px;
          }
          .h4-footer { font-size: 11px; }
        }
      `}</style>

      <div className="hero4" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

        {/* Top Nav */}
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 32px 10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span className="h4-nav-text">Jyothi Reddy</span>
              <span className="h4-proverb">"AI is the new electricity." — Andrew Ng</span>
            </div>

            {/* Desktop Nav */}
            <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <a href="#home" className="h4-nav-link">Home</a>
              <a href="#about" className="h4-nav-link">About</a>
              <a href="#skills" className="h4-nav-link">Skills</a>
              <a href="#certifications" className="h4-nav-link" style={{ color: '#e02020' }}>Certifications</a>
              <a href="#projects" className="h4-nav-link">Projects</a>
            </div>

            {/* Hamburger */}
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
              <span style={{ opacity: menuOpen ? 0 : 1 }} />
              <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
            </button>
          </div>

          {/* Mobile Dropdown */}
          <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
            <a href="#home" className="h4-nav-link" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" className="h4-nav-link" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" className="h4-nav-link" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#certifications" className="h4-nav-link" style={{ color: '#e02020' }} onClick={() => setMenuOpen(false)}>Certifications</a>
            <a href="#projects" className="h4-nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-area">

          {/* Title */}
          <div className="h4-section-title">certifi-<br />cations</div>

          {/* Cert Cards */}
          <div className="certs-grid">
            {certs.map((cert) => (
              <div className="cert-card" key={cert.name}>
                <div className="cert-badge" style={{ background: cert.color }}>
                  {cert.abbr}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="cert-issuer" style={{ color: cert.color }}>{cert.issuer}</div>
                  <div className="cert-name">{cert.name}</div>
                </div>
                <div className="cert-verified">✓ Certified</div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="h4-footer-row">
          <span className="h4-footer">Tirupati, Andhra Pradesh, India</span>
          <a href="mailto:jothireddy939@gmail.com" className="h4-footer">jothireddy939@gmail.com</a>
          <a href="https://www.linkedin.com/in/jyothi-reddy" target="_blank" rel="noreferrer" className="h4-footer">LinkedIn: Jyothi Reddy</a>
        </div>

      </div>
    </div>
  );
}