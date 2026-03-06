export default function Hero5() {
  const projects = [
    {
      name: "Health Connect",
      tags: ["React Native", "AI/ML", "Node.js"],
      desc: "A comprehensive healthcare app with AI-enabled health diagnosis, appointment booking, virtual care/telehealth, emergency assistance, medication reminders, and AI-powered personalized diet plans.",
      github: null,
    },
    {
      name: "DyslexiaAid",
      tags: ["Flutter", "NLP", "Firebase"],
      desc: "A mobile app for individuals with dyslexia featuring text-to-speech, word recognition games, and personalized learning plans backed by evidence-based strategies to improve reading and language skills.",
      github: null,
    },
    {
      name: "PEP 8 Code Review Agent",
      tags: ["Python", "OpenAI", "Streamlit", "RAG"],
      desc: "An AI-powered tool that reviews Python code against PEP 8 standards and adds inline comments highlighting violations — without modifying original code. Supports batch processing, live streaming, and RAG-powered vector search.",
      github: "https://github.com/Jothireddy/pep8-agent",
    },
    {
      name: "MailShield",
      tags: ["Node.js", "React", "Google Cloud", "ML"],
      desc: "Intelligent email security system for real-time phishing detection in Gmail. Uses SPF, DKIM, DMARC protocols and behavioral pattern recognition to classify emails as PHISHING_RISK, SUSPICIOUS, or OK via a GCP Pub/Sub pipeline.",
      github: "https://github.com/Jothireddy/email-security-app",
    },
    {
      name: "AP Automobile Prognosticator",
      tags: ["Node.js", "MongoDB", "ML", "REST API"],
      desc: "Backend API for the Andhra Pradesh Automobile Prognosticator with real-time vehicle registrations, weather monitoring, pollution tracking, traffic analysis, JWT authentication, and ML-powered predictions updated every 5 minutes.",
      github: "https://github.com/Jothireddy/prognasticator_dashbaord",
    },
    {
      name: "Evolvy",
      tags: ["AI Agents", "n8n", "Python", "APIs"],
      desc: "An AI learning and internship platform that teaches students to build real-world AI automation systems — agents, workflows, content generators — using tools like n8n, Python, and modern AI frameworks.",
      github: null,
    },
    {
      name: "Rigal",
      tags: ["React", "AI", "Node.js"],
      desc: "An all-in-one job preparation platform with resume builder, AI job suggestions, aptitude practice, coding exams, AI mock interviews, and resume analysis — everything a student needs in one place.",
      github: "https://github.com/Jothireddy/rigal",
    },
    {
      name: "Fluent Fox",
      tags: ["AI", "NLP", "Speech", "React"],
      desc: "An AI-powered communication and English speaking practice platform. Users practice daily conversations, job interviews, and group discussions with an AI partner that gives pronunciation feedback, grammar correction, and vocabulary suggestions.",
      github: null,
    },
  ];

  return (
    <div style={{ backgroundColor: "#e8e8e8", width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap');

        .hero5 * { font-family: 'Montserrat', 'Arial Black', sans-serif; }

        .h5-section-title {
          font-weight: 900;
          font-size: clamp(52px, 8vw, 100px);
          line-height: 0.9;
          letter-spacing: -0.03em;
          color: #111;
          font-style: italic;
        }

        .h5-nav-text { font-weight: 700; font-size: 13px; color: #111; }

        .h5-nav-link {
          font-weight: 600;
          font-size: 13px;
          color: #111;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .h5-nav-link:hover { color: #e02020; }

        .h5-proverb {
          font-weight: 400;
          font-size: 11px;
          color: #555;
          font-style: italic;
          letter-spacing: 0.03em;
        }

        .h5-footer { font-weight: 500; font-size: 12px; color: #111; text-decoration: none; }

        .project-card {
          background: #fff;
          border-radius: 8px;
          padding: 22px 24px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.07);
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .project-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        .project-name {
          font-weight: 900;
          font-size: clamp(15px, 1.4vw, 18px);
          color: #111;
          letter-spacing: -0.01em;
        }

        .project-desc {
          font-size: clamp(11px, 0.95vw, 13px);
          line-height: 1.65;
          color: #444;
          font-weight: 400;
        }

        .tag {
          background: #f0f0f0;
          color: #333;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 20px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .github-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          background: #111;
          padding: 6px 14px;
          border-radius: 4px;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: background 0.2s;
          width: fit-content;
        }
        .github-btn:hover { background: #e02020; }

        .github-placeholder {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #888;
          background: #f0f0f0;
          padding: 6px 14px;
          border-radius: 4px;
          letter-spacing: 0.04em;
          width: fit-content;
          cursor: pointer;
          border: 1px dashed #bbb;
        }
      `}</style>

      <div className="hero5" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

        {/* Top Nav — sticky */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 32px 12px', position: 'sticky', top: 0,
          backgroundColor: '#e8e8e8', zIndex: 100,
          borderBottom: '1px solid #d0d0d0'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span className="h5-nav-text">Jyothi Reddy</span>
            <span className="h5-proverb">"AI is the new electricity." — Andrew Ng</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a href="#home" className="h5-nav-link">Home</a>
            <a href="#about" className="h5-nav-link">About</a>
            <a href="#skills" className="h5-nav-link">Skills</a>
            <a href="#certifications" className="h5-nav-link">Certifications</a>
            <a href="#projects" className="h5-nav-link" style={{ color: '#e02020' }}>Projects</a>
          </div>
        </div>

        {/* Page Title */}
        <div style={{ padding: '40px 64px 24px' }}>
          <div className="h5-section-title">projects</div>
        </div>

        {/* Projects Grid */}
        <div style={{ padding: '0 64px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', flex: 1 }}>
          {projects.map((p) => (
            <div className="project-card" key={p.name}>
              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              {/* Name */}
              <div className="project-name">{p.name}</div>
              {/* Desc */}
              <p className="project-desc">{p.desc}</p>
              {/* GitHub */}
              {p.github ? (
                <a href={p.github} target="_blank" rel="noreferrer" className="github-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              ) : (
                <div className="github-placeholder">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Add GitHub Link
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 32px 20px', borderTop: '1px solid #d0d0d0' }}>
          <span className="h5-footer">Tirupati, Andhra Pradesh, India</span>
          <a href="mailto:jothireddy939@gmail.com" className="h5-footer">jothireddy939@gmail.com</a>
          <a href="https://www.linkedin.com/in/jyothi-reddy" target="_blank" rel="noreferrer" className="h5-footer">LinkedIn: Jyothi Reddy</a>
        </div>

      </div>
    </div>
  );
}