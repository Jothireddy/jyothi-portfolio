export default function Hero1() {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ backgroundColor: "#e8e8e8", fontFamily: "'Arial Black', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Montserrat:wght@400;700;900&display=swap');

        .portfolio-text {
          font-family: 'Montserrat', 'Arial Black', sans-serif;
          font-weight: 900;
          font-size: clamp(100px, 18vw, 220px);
          line-height: 0.85;
          letter-spacing: -0.03em;
          color: #111111;
          text-transform: lowercase;
          user-select: none;
        }

        .signature-text {
          font-family: 'Dancing Script', cursive;
          font-weight: 700;
          font-size: clamp(36px, 5.5vw, 80px);
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

        .nav-link:hover {
          color: #e02020;
        }

        .footer-text {
          font-family: 'Montserrat', Arial, sans-serif;
          font-weight: 500;
          font-size: 12px;
          color: #111111;
          letter-spacing: 0.01em;
        }

        .proverb-text {
          font-family: 'Montserrat', Arial, sans-serif;
          font-weight: 400;
          font-size: 11px;
          color: #555;
          font-style: italic;
          letter-spacing: 0.03em;
        }
      `}</style>

      {/* Top Nav */}
      <div className="flex items-center justify-between px-8 pt-6">
        {/* Left: AI proverb */}
        <div className="flex flex-col gap-0.5">
          <span className="nav-text">Jyothi Reddy</span>
          <span className="proverb-text">"AI is the new electricity." — Andrew Ng</span>
        </div>

        {/* Right: Navigation links */}
        <div className="flex items-center gap-6">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#certifications" className="nav-link">Certifications</a>
          <a href="#projects" className="nav-link">Projects</a>
        </div>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="relative w-full flex items-center justify-center">
          {/* Big PORTFOLIO text */}
          <div
            className="portfolio-text select-none"
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              textAlign: "center",
              lineHeight: "0.88",
            }}
          >
            portfolio
          </div>

          {/* Signature overlay */}
          <div className="signature-text" style={{ zIndex: 10 }}>
            Jyothi Reddy
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between px-8 pb-6">
        <span className="footer-text">Tirupati, Andhra Pradesh, India</span>
        <a href="mailto:jothireddy939@gmail.com" className="footer-text" style={{ textDecoration: 'none' }}>
          jothireddy939@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/jyothi-reddy"
          target="_blank"
          rel="noreferrer"
          className="footer-text"
          style={{ textDecoration: 'none' }}
        >
          LinkedIn: Jyothi Reddy
        </a>
      </div>
    </div>
  );
}