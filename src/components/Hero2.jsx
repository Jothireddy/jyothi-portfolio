import jyothiImg from "../assets/jyothi.jpg";

export default function Hero2() {
  return (
    <div
      style={{ backgroundColor: "#e8e8e8", width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap');

        .hero2-page * {
          font-family: 'Montserrat', 'Arial Black', sans-serif;
        }

        .intro-title {
          font-weight: 900;
          font-size: clamp(48px, 7vw, 88px);
          line-height: 1;
          letter-spacing: -0.02em;
          color: #111111;
          font-style: italic;
        }

        .intro-name {
          font-weight: 900;
          font-size: clamp(24px, 3.2vw, 42px);
          line-height: 1.08;
          color: #111111;
          letter-spacing: -0.01em;
        }

        .intro-role {
          font-weight: 600;
          font-size: clamp(12px, 1.2vw, 15px);
          color: #e02020;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-top: 6px;
          margin-bottom: 18px;
        }

        .intro-body {
          font-weight: 400;
          font-size: clamp(11px, 1.1vw, 13.5px);
          line-height: 1.75;
          color: #333;
          text-align: justify;
        }

        .nav-text {
          font-weight: 700;
          font-size: 13px;
          color: #111111;
          font-family: 'Montserrat', Arial, sans-serif;
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
      `}</style>

      <div className="hero2-page flex flex-col" style={{ height: '100%' }}>

        {/* Top Nav */}
        <div className="flex items-center justify-between px-8 pt-6">
          <div className="flex flex-col gap-0.5">
            <span className="nav-text">Jyothi Reddy</span>
            <span className="proverb-text">"AI is the new electricity." — Andrew Ng</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link" style={{ color: '#e02020' }}>About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#certifications" className="nav-link">Certifications</a>
            <a href="#projects" className="nav-link">Projects</a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1" style={{ marginTop: '8px' }}>

          {/* Left Column */}
          <div className="flex flex-col justify-center px-8 pt-2" style={{ width: '48%' }}>

            {/* Introduction title */}
            <div className="intro-title" style={{ marginBottom: '20px' }}>
              introduction
            </div>

            {/* Name block */}
            <div className="intro-name" style={{ lineHeight: '1.08' }}>
              Hello, I'm<br />
              Jyothi Reddy
            </div>

            {/* Role */}
            <div className="intro-role">
              AI Professional &amp; Enthusiast
            </div>

            {/* Body text */}
            <div style={{ maxWidth: '300px' }}>
              <p className="intro-body">
                I am a passionate AI professional dedicated to exploring the frontiers of
                artificial intelligence and machine learning. With a deep enthusiasm for
                building intelligent systems, I strive to create meaningful solutions
                that bridge technology and human potential. Always learning, always growing.
              </p>
            </div>
          </div>

          {/* Right Column — single full-height image */}
          <div style={{ width: '52%', overflow: 'hidden' }}>
            <img
              src={jyothiImg}
              alt="Jyothi Reddy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex items-center justify-between px-8 pb-6 pt-4">
          <span className="footer-text">Tirupati, Andhra Pradesh, India</span>
          <a href="mailto:jothireddy939@gmail.com" className="footer-text">
            jothireddy939@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/jyothi-reddy"
            target="_blank"
            rel="noreferrer"
            className="footer-text"
          >
            LinkedIn: Jyothi Reddy
          </a>
        </div>

      </div>
    </div>
  );
}