import { useState } from "react";
import jyothiImg from "../assets/jyothi.jpg";

export default function Hero2() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ backgroundColor: "#e8e8e8", width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap');

        .hero2-page * { font-family: 'Montserrat', 'Arial Black', sans-serif; }

        .intro-title {
          font-weight: 900;
          font-size: clamp(36px, 7vw, 88px);
          line-height: 1;
          letter-spacing: -0.02em;
          color: #111111;
          font-style: italic;
        }

        .intro-name {
          font-weight: 900;
          font-size: clamp(20px, 3.2vw, 42px);
          line-height: 1.08;
          color: #111111;
          letter-spacing: -0.01em;
        }

        .intro-role {
          font-weight: 600;
          font-size: clamp(11px, 1.2vw, 15px);
          color: #e02020;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-top: 6px;
          margin-bottom: 16px;
        }

        .intro-body {
          font-weight: 400;
          font-size: clamp(11px, 1.1vw, 13.5px);
          line-height: 1.75;
          color: #333;
          text-align: justify;
        }

        .nav-text { font-weight: 700; font-size: 13px; color: #111111; }

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
          font-weight: 500;
          font-size: 12px;
          color: #111111;
          font-family: 'Montserrat', Arial, sans-serif;
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

        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 18px;
          padding: 20px 24px;
          background: #e8e8e8;
          border-bottom: 1px solid #d0d0d0;
        }
        .mobile-menu.open { display: flex; }

        /* Desktop: side by side, fixed height */
        .hero2-main {
          display: flex;
          flex: 1;
          margin-top: 8px;
        }
        .hero2-left {
          width: 48%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 8px 32px 8px 32px;
        }
        .hero2-right {
          width: 52%;
          overflow: hidden;
        }
        .hero2-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        .hero2-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 32px 20px;
        }

        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .proverb-text { display: none; }

          .hero2-main {
            flex-direction: column;
            margin-top: 0;
          }
          .hero2-left {
            width: 100%;
            padding: 24px 20px 16px;
            order: 2;
          }
          .hero2-right {
            width: 100%;
            height: 280px;
            order: 1;
          }
          .hero2-right img {
            height: 280px;
            object-position: center 20%;
          }
          .intro-title { margin-bottom: 12px !important; }
          .hero2-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            padding: 12px 20px 20px;
          }
          .footer-text { font-size: 11px; }
        }
      `}</style>

      <div className="hero2-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

        {/* Top Nav */}
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 32px 10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span className="nav-text">Jyothi Reddy</span>
              <span className="proverb-text">"AI is the new electricity." — Andrew Ng</span>
            </div>

            {/* Desktop Nav */}
            <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link" style={{ color: '#e02020' }}>About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#certifications" className="nav-link">Certifications</a>
              <a href="#projects" className="nav-link">Projects</a>
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
            <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" className="nav-link" style={{ color: '#e02020' }} onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#certifications" className="nav-link" onClick={() => setMenuOpen(false)}>Certifications</a>
            <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
          </div>
        </div>

        {/* Main Content */}
        <div className="hero2-main" style={{ flex: 1 }}>

          {/* Left — text */}
          <div className="hero2-left">
            <div className="intro-title" style={{ marginBottom: '20px' }}>introduction</div>
            <div className="intro-name">Hello, I'm<br />Jyothi Reddy</div>
            <div className="intro-role">AI Professional &amp; Enthusiast</div>
            <div style={{ maxWidth: '300px' }}>
              <p className="intro-body">
                I am a passionate AI professional dedicated to exploring the frontiers of
                artificial intelligence and machine learning. With a deep enthusiasm for
                building intelligent systems, I strive to create meaningful solutions
                that bridge technology and human potential. Always learning, always growing.
              </p>
            </div>
          </div>

          {/* Right — image */}
          <div className="hero2-right">
            <img src={jyothiImg} alt="Jyothi Reddy" />
          </div>
        </div>

        {/* Footer */}
        <div className="hero2-footer">
          <span className="footer-text">Tirupati, Andhra Pradesh, India</span>
          <a href="mailto:jothireddy939@gmail.com" className="footer-text">jothireddy939@gmail.com</a>
          <a href="https://www.linkedin.com/in/jyothi-reddy" target="_blank" rel="noreferrer" className="footer-text">LinkedIn: Jyothi Reddy</a>
        </div>

      </div>
    </div>
  );
}