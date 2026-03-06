import { useState } from "react";

export default function Hero1() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ backgroundColor: "#e8e8e8", fontFamily: "'Arial Black', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Montserrat:wght@400;600;700;900&display=swap');

        .portfolio-text {
          font-family: 'Montserrat', 'Arial Black', sans-serif;
          font-weight: 900;
          font-size: clamp(52px, 18vw, 220px);
          line-height: 0.85;
          letter-spacing: -0.03em;
          color: #111111;
          text-transform: lowercase;
          user-select: none;
        }

        .signature-text {
          font-family: 'Dancing Script', cursive;
          font-weight: 700;
          font-size: clamp(22px, 5.5vw, 80px);
          color: #e02020;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          pointer-events: none;
          z-index: 10;
        }

        .nav-text {
          font-family: 'Montserrat', Arial, sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.01em;
          color: #111111;
        }

        .nav-link {
          font-family: 'Montserrat', Arial, sans-serif;
          font-weight: 600;
          font-size: 13px;
          color: #111111;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #e02020; }

        .footer-text {
          font-family: 'Montserrat', Arial, sans-serif;
          font-weight: 500;
          font-size: 12px;
          color: #111111;
          letter-spacing: 0.01em;
          text-decoration: none;
        }

        .proverb-text {
          font-family: 'Montserrat', Arial, sans-serif;
          font-weight: 400;
          font-size: 11px;
          color: #555;
          font-style: italic;
          letter-spacing: 0.03em;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 200;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #111;
          border-radius: 2px;
          transition: all 0.3s;
        }

        /* Mobile dropdown */
        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 18px;
          padding: 20px 24px;
          background: #e8e8e8;
          border-bottom: 1px solid #d0d0d0;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          z-index: 150;
        }
        .mobile-menu.open { display: flex; }

        /* Mobile footer stacks */
        .footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px 24px;
        }

        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .footer-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            padding: 0 20px 20px;
          }
          .footer-text { font-size: 11px; }
          .proverb-text { display: none; }
        }
      `}</style>

      {/* Top Nav — relative so mobile-menu can absolute-position below it */}
      <div style={{ position: 'relative' }}>
        <div className="flex items-center justify-between px-8 pt-6 pb-2">
          {/* Left */}
          <div className="flex flex-col gap-0.5">
            <span className="nav-text">Jyothi Reddy</span>
            <span className="proverb-text">"AI is the new electricity." — Andrew Ng</span>
          </div>

          {/* Desktop Nav */}
          <div className="desktop-nav flex items-center gap-6">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#certifications" className="nav-link">Certifications</a>
            <a href="#projects" className="nav-link">Projects</a>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#certifications" className="nav-link" onClick={() => setMenuOpen(false)}>Certifications</a>
          <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
        </div>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="relative w-full flex items-center justify-center">
          <div
            className="portfolio-text select-none"
            style={{ position: "relative", zIndex: 1, width: "100%", textAlign: "center", lineHeight: "0.88" }}
          >
            portfolio
          </div>
          <div className="signature-text" style={{ zIndex: 10 }}>
            Jyothi Reddy
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-row">
        <span className="footer-text">Tirupati, Andhra Pradesh, India</span>
        <a href="mailto:jothireddy939@gmail.com" className="footer-text">
          jothireddy939@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/jyothi-reddy" target="_blank" rel="noreferrer" className="footer-text">
          LinkedIn: Jyothi Reddy
        </a>
      </div>
    </div>
  );
}