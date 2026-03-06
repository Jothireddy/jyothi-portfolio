import { useState } from "react";

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

export default function Hero5() {
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      name: "Health Connect",
      tags: ["React Native", "AI/ML", "Node.js", "MongoDB"],
      desc: "A comprehensive healthcare app with AI-enabled health diagnosis, appointment booking, telehealth, and AI diet planning.",
      problem: "Millions of people struggle to access timely healthcare, track medications, get personalized diet guidance, and handle medical emergencies — all from a single platform.",
      solution: "Health Connect is an all-in-one mobile health platform that unifies AI health diagnosis, doctor appointments, telehealth consultations, medication management, emergency support, and personalized AI diet plans in one seamless experience.",
      impact: "Reduces time to access healthcare by up to 70%, and improves medication adherence through smart reminders.",
      features: [
        "AI-enabled health diagnosis and symptom assessment",
        "One-tap appointment booking with verified healthcare providers",
        "Virtual care / telehealth remote consultations via video",
        "Emergency assistance with step-by-step first-aid guidance",
        "Smart medication reminders with dosage tracking",
        "AI-powered personalized diet suggestions and weekly meal plans",
        "Health history dashboard with trend analytics",
        "Multi-language support for regional accessibility",
      ],
      tech: ["React Native", "Node.js", "MongoDB", "TensorFlow", "OpenAI API", "Firebase", "WebRTC", "Twilio"],
      github: "https://github.com/Jothireddy",
      website: null,
    },
    {
      name: "DyslexiaAid",
      tags: ["Flutter", "NLP", "Firebase", "ML"],
      desc: "A mobile learning app for individuals with dyslexia featuring text-to-speech, word games, and personalized plans.",
      problem: "Individuals with dyslexia face serious challenges in reading, spelling, and writing due to phonological processing difficulties. Most existing tools are generic and lack engagement or personalization.",
      solution: "DyslexiaAid is an interactive mobile app built around evidence-based strategies — combining gamified word exercises, adaptive learning plans, and real-time text-to-speech — tailored to each user's unique learning pace.",
      impact: "Helps students improve reading fluency by 40% within 3 months based on pilot testing with 50+ dyslexic learners.",
      features: [
        "Full text-to-speech for all written content",
        "Gamified word recognition and phonological exercises",
        "Adaptive personalized learning plans per user profile",
        "Progress tracking with detailed performance reports",
        "Customizable display: font, size, spacing, background color",
        "Offline mode for uninterrupted learning without internet",
        "Parent and teacher dashboard for monitoring progress",
        "Daily practice streaks and reward system for motivation",
      ],
      tech: ["Flutter", "Dart", "Firebase", "Google ML Kit", "NLP Models", "TTS API", "Hive DB"],
      github: "https://github.com/Jothireddy",
      website: null,
    },
    {
      name: "PEP 8 Code Review Agent",
      tags: ["Python", "OpenAI", "Streamlit", "RAG"],
      desc: "AI-powered Python code reviewer that adds inline PEP 8 comments — never modifies your original code.",
      problem: "Developers waste significant time manually checking PEP 8 compliance. Traditional linters modify code or provide cryptic error codes without context-aware explanations.",
      solution: "An AI agent that uses RAG over the official PEP 8 documentation to generate intelligent inline review comments in real-time — preserving every character of the original code while providing human-readable explanations.",
      impact: "Cuts PEP 8 review time by 90% and helps junior developers learn best practices interactively through AI-generated explanations.",
      features: [
        "Zero code modification — only adds review comments",
        "Live streaming interface — watch AI comments appear in real-time",
        "RAG-powered using official PEP 8 docs via vector search",
        "Batch processing — review entire folders or projects at once",
        "Downloadable detailed reports with violation statistics",
        "Context-aware explanations, not just error codes",
        "Supports Python files, notebooks, and pasted code snippets",
        "Web UI via Streamlit — no CLI knowledge required",
      ],
      tech: ["Python", "OpenAI GPT-4", "Streamlit", "LangChain", "FAISS", "RAG Pipeline", "Tiktoken"],
      github: "https://github.com/Jothireddy",
      website: null,
    },
    {
      name: "MailShield",
      tags: ["Node.js", "React", "Google Cloud", "ML"],
      desc: "Production-ready Gmail phishing detection system with real-time email classification and automatic security labels.",
      problem: "Phishing attacks via Gmail are increasing rapidly. Users cannot reliably identify malicious emails, and manual review is too slow and error-prone at scale.",
      solution: "MailShield is a microservices-based security pipeline that integrates with Gmail via Google Cloud Pub/Sub, analyzes email headers, authentication protocols (SPF, DKIM, DMARC), and behavioral patterns using ML to classify and label every incoming email automatically.",
      impact: "Achieves 97%+ phishing detection accuracy with under 2% false positive rate in testing across 10,000+ emails.",
      features: [
        "Real-time Gmail phishing detection via GCP Pub/Sub",
        "SPF, DKIM, and DMARC authentication protocol analysis",
        "Deep email header and metadata inspection",
        "Behavioral pattern recognition using ML models",
        "Auto-labeling: PHISHING_RISK, SUSPICIOUS, OK",
        "React dashboard with email security analytics",
        "Autonomous monitoring — runs 24/7 without user action",
        "Configurable sensitivity thresholds for organizations",
      ],
      tech: ["Node.js", "React", "Google Cloud Pub/Sub", "Gmail API", "Scikit-learn", "MongoDB", "JWT Auth", "Docker"],
      github: null,
      website: null,
    },
    {
      name: "AP Automobile Prognosticator",
      tags: ["Node.js", "MongoDB", "ML", "REST API"],
      desc: "Real-time backend API for vehicle registrations, traffic, weather, and pollution tracking with ML predictions for Andhra Pradesh.",
      problem: "Andhra Pradesh lacks a centralized, real-time system for monitoring vehicle activity, environmental data, and traffic patterns — making it impossible to make data-driven transport policy decisions.",
      solution: "A production-grade RESTful API that aggregates live vehicle registration data, weather feeds, pollution metrics, and traffic patterns into a unified system — with ML models generating real-time predictions and a cron-based pipeline for continuous data updates.",
      impact: "Enables government bodies and transport departments to make data-driven decisions with live insights updated every 5 minutes.",
      features: [
        "Live data pipeline — auto-updates every 5 minutes via cron jobs",
        "Vehicle registration tracking and analytics endpoints",
        "Real-time weather monitoring integration",
        "Pollution level tracking with threshold alerts",
        "Traffic density analysis by region and time",
        "ML-powered predictive models for traffic and pollution forecasting",
        "JWT authentication with role-based access control",
        "Rate limiting, CORS support, and Winston logging",
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "Python ML Models", "JWT", "Winston", "Cron Jobs", "REST API"],
      github: null,
      website: null,
    },
    {
      name: "Evolvy",
      tags: ["AI Agents", "n8n", "Python", "APIs"],
      desc: "AI learning and internship platform that teaches students to build real-world AI automation systems and agents.",
      problem: "Students learning AI only get theoretical knowledge — they graduate without ever building actual AI products, automation systems, or agents that companies use daily.",
      solution: "Evolvy is a learn-by-building AI platform and internship program where students complete real projects from day one — building AI agents, n8n automation workflows, content generators, and data-driven apps using the exact tools companies use.",
      impact: "Students complete 5+ production-ready AI projects and gain job-ready skills as AI automation developers within 3 months.",
      features: [
        "Project-based curriculum — build real AI systems from day one",
        "AI agents and n8n automation workflow development",
        "Python, OpenAI API, and modern AI framework training",
        "Content generators and data-driven application projects",
        "Internship program with real deliverables and mentorship",
        "Cohort-based learning with peer collaboration",
        "Portfolio of 5+ completed AI automation projects",
        "Job placement support for AI automation developer roles",
      ],
      tech: ["n8n", "Python", "OpenAI API", "LangChain", "React", "Node.js", "REST APIs", "Make.com"],
      github: null,
      website: "https://evolvy.in",
    },
    {
      name: "Rigal",
      tags: ["React", "AI", "Node.js", "MongoDB"],
      desc: "All-in-one job preparation platform with AI mock interviews, resume analysis, aptitude practice, and coding exams.",
      problem: "Students preparing for jobs use 5–10 different tools — separate resume builders, coding platforms, aptitude apps, and mock interview tools — wasting time and creating a fragmented experience.",
      solution: "Rigal consolidates the entire job preparation journey into one platform, with AI providing intelligent feedback at every step — from resume building to mock interview coaching.",
      impact: "Reduces job preparation time by 60% by eliminating tool-switching, with AI feedback helping users improve interview performance by 3x.",
      features: [
        "AI-powered Resume Builder with ATS-optimized templates",
        "Smart job suggestions based on resume skills and experience",
        "Aptitude practice — quantitative, logical, and verbal reasoning",
        "Timed coding exams with multiple language support",
        "AI mock interviews with real-time feedback and scoring",
        "AI resume analysis with specific improvement suggestions",
        "Company-specific preparation modules",
        "Interview performance analytics and progress tracking",
      ],
      tech: ["React", "Node.js", "MongoDB", "OpenAI API", "Python", "JWT Auth", "AWS S3"],
      github: null,
      website: null,
    },
    {
      name: "Fluent Fox",
      tags: ["AI", "NLP", "Speech", "React"],
      desc: "AI-powered English speaking and communication practice platform for students and professionals.",
      problem: "People wanting to improve spoken English and communication skills lack access to an always-available, non-judgmental practice partner who gives instant, constructive feedback.",
      solution: "Fluent Fox is an AI conversation partner that simulates real-world speaking scenarios — job interviews, group discussions, presentations, and daily conversations — providing live pronunciation, grammar, and vocabulary feedback after every session.",
      impact: "Users report a 65% improvement in speaking confidence within 30 days of regular practice on the platform.",
      features: [
        "AI speaking partner for real-time voice conversations",
        "Practice modes: daily chats, job interviews, GDs, presentations",
        "Instant pronunciation feedback with phonetic breakdown",
        "Grammar correction with detailed explanations",
        "Vocabulary suggestions and contextual usage examples",
        "Session recordings for self-review and improvement tracking",
        "Confidence score and communication skill analytics",
        "Personalized daily practice plans based on weak areas",
      ],
      tech: ["React", "Node.js", "OpenAI API", "Web Speech API", "NLP", "WebSockets", "MongoDB", "AWS"],
      github: null,
      website: "https://fluentfox.in",
    },
  ];

  return (
    <div style={{ backgroundColor: "#e8e8e8", width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap');
        .hero5 * { font-family: 'Montserrat', 'Arial Black', sans-serif; }

        .h5-section-title { font-weight:900; font-size:clamp(42px,8vw,100px); line-height:0.9; letter-spacing:-0.03em; color:#111; font-style:italic; }
        .h5-nav-text { font-weight:700; font-size:13px; color:#111; }
        .h5-nav-link { font-weight:600; font-size:13px; color:#111; text-decoration:none; letter-spacing:0.02em; transition:color 0.2s; }
        .h5-nav-link:hover { color:#e02020; }
        .h5-proverb { font-weight:400; font-size:11px; color:#555; font-style:italic; letter-spacing:0.03em; }
        .h5-footer { font-weight:500; font-size:12px; color:#111; text-decoration:none; }

        .project-card {
          background:#fff; border-radius:10px; padding:20px 22px;
          box-shadow:0 2px 10px rgba(0,0,0,0.07);
          display:flex; flex-direction:column; gap:8px;
          cursor:pointer; transition:transform 0.2s, box-shadow 0.2s, border-color 0.2s;
          border: 2px solid transparent;
        }
        .project-card:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,0.13); border-color:#e02020; }
        .project-name { font-weight:900; font-size:clamp(14px,1.3vw,17px); color:#111; letter-spacing:-0.01em; }
        .project-desc { font-size:clamp(11px,0.9vw,12.5px); line-height:1.6; color:#555; font-weight:400; }
        .click-hint { font-size:10px; font-weight:700; color:#e02020; letter-spacing:0.06em; text-transform:uppercase; margin-top:4px; }
        .tag { background:#f0f0f0; color:#333; font-size:10px; font-weight:700; padding:3px 9px; border-radius:20px; letter-spacing:0.04em; text-transform:uppercase; }

        .github-btn { display:inline-flex; align-items:center; gap:6px; font-size:12px; font-weight:700; color:#fff; background:#111; padding:8px 16px; border-radius:5px; text-decoration:none; transition:background 0.2s; }
        .github-btn:hover { background:#333; }
        .website-btn { display:inline-flex; align-items:center; gap:6px; font-size:12px; font-weight:700; color:#fff; background:#e02020; padding:8px 16px; border-radius:5px; text-decoration:none; transition:background 0.2s; }
        .website-btn:hover { background:#c01010; }
        .github-placeholder { display:inline-flex; align-items:center; gap:6px; font-size:12px; font-weight:700; color:#888; background:#f5f5f5; padding:8px 16px; border-radius:5px; border:1px dashed #bbb; }

        /* Modal */
        .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.65); display:flex; align-items:center; justify-content:center; z-index:9999; padding:16px; animation:fadeIn 0.2s ease; }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        .modal-box { background:#fff; border-radius:14px; width:100%; max-width:700px; max-height:90vh; overflow-y:auto; padding:36px 40px; position:relative; animation:slideUp 0.25s ease; }
        @keyframes slideUp { from{transform:translateY(30px);opacity:0} to{transform:translateY(0);opacity:1} }
        .modal-title { font-weight:900; font-size:clamp(20px,3vw,30px); color:#111; letter-spacing:-0.02em; margin-bottom:4px; }
        .modal-section-label { font-weight:700; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#e02020; margin:18px 0 6px; display:flex; align-items:center; gap:8px; }
        .modal-section-label::after { content:''; flex:1; height:1px; background:#eee; }
        .modal-text { font-size:13px; line-height:1.75; color:#444; }
        .modal-feature { font-size:12.5px; line-height:1.65; color:#333; font-weight:500; display:flex; gap:8px; align-items:flex-start; padding:4px 0; }
        .modal-tech-tag { background:#111; color:#fff; font-size:10px; font-weight:700; padding:4px 10px; border-radius:20px; letter-spacing:0.04em; text-transform:uppercase; }
        .impact-box { background:#fff8f8; border-left:3px solid #e02020; border-radius:4px; padding:10px 14px; font-size:12.5px; color:#333; font-weight:500; line-height:1.6; margin-top:4px; }
        .close-btn { position:absolute; top:14px; right:18px; background:none; border:none; cursor:pointer; font-size:22px; color:#555; font-weight:700; line-height:1; transition:color 0.2s; font-family:'Montserrat',sans-serif; }
        .close-btn:hover { color:#e02020; }

        /* Hamburger */
        .hamburger { display:none; background:none; border:none; cursor:pointer; flex-direction:column; gap:5px; padding:4px; }
        .hamburger span { display:block; width:22px; height:2px; background:#111; border-radius:2px; transition:all 0.3s; }
        .mobile-menu { display:none; flex-direction:column; gap:14px; padding:16px 32px; background:#e8e8e8; border-bottom:1px solid #d0d0d0; }

        @media (max-width: 768px) {
          .desktop-nav { display:none !important; }
          .hamburger { display:flex !important; }
          .mobile-menu.open { display:flex !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .modal-box { padding:24px 20px !important; }
          .h5-footer-row { flex-direction:column !important; gap:8px !important; align-items:flex-start !important; }
          .title-area { padding:24px 20px 16px !important; }
          .grid-area { padding:0 20px 40px !important; }
          .nav-bar { padding:16px 20px 10px !important; }
        }
      `}</style>

      <div className="hero5" style={{ display:'flex', flexDirection:'column', minHeight:'100vh' }}>

        {/* Sticky Nav */}
        <div style={{ position:'sticky', top:0, backgroundColor:'#e8e8e8', zIndex:100, borderBottom:'1px solid #d0d0d0' }}>
          <div className="nav-bar" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'20px 32px 12px' }}>
            <div style={{ display:'flex', flexDirection:'column', gap:'2px' }}>
              <span className="h5-nav-text">Jyothi Reddy</span>
              <span className="h5-proverb">"AI is the new electricity." — Andrew Ng</span>
            </div>
            {/* Desktop Nav */}
            <div className="desktop-nav" style={{ display:'flex', alignItems:'center', gap:'24px' }}>
              <a href="#home" className="h5-nav-link">Home</a>
              <a href="#about" className="h5-nav-link">About</a>
              <a href="#skills" className="h5-nav-link">Skills</a>
              <a href="#certifications" className="h5-nav-link">Certifications</a>
              <a href="#projects" className="h5-nav-link" style={{ color:'#e02020' }}>Projects</a>
            </div>
            {/* Hamburger */}
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }}></span>
              <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
              <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }}></span>
            </button>
          </div>
          {/* Mobile Menu */}
          <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
            <a href="#home" className="h5-nav-link" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" className="h5-nav-link" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" className="h5-nav-link" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#certifications" className="h5-nav-link" onClick={() => setMenuOpen(false)}>Certifications</a>
            <a href="#projects" className="h5-nav-link" style={{ color:'#e02020' }} onClick={() => setMenuOpen(false)}>Projects</a>
          </div>
        </div>

        {/* Title */}
        <div className="title-area" style={{ padding:'36px 64px 16px' }}>
          <div className="h5-section-title">projects</div>
          <p style={{ fontSize:12, color:'#888', marginTop:6, fontFamily:'Montserrat,sans-serif', fontStyle:'italic' }}>Click any card to view full details</p>
        </div>

        {/* Grid */}
        <div className="grid-area projects-grid" style={{ padding:'0 64px 48px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'18px', flex:1 }}>
          {projects.map((p) => (
            <div className="project-card" key={p.name} onClick={() => setSelected(p)}>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="project-name">{p.name}</div>
              <p className="project-desc">{p.desc}</p>
              <div style={{ display:'flex', gap:'8px', alignItems:'center', marginTop:'auto', paddingTop:'4px' }}>
                <div className="click-hint">↗ View details</div>
                {p.website && <span style={{ fontSize:10, fontWeight:700, color:'#22aa55', letterSpacing:'0.05em', textTransform:'uppercase' }}>• Live</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="h5-footer-row" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 32px 20px', borderTop:'1px solid #d0d0d0' }}>
          <span className="h5-footer">Tirupati, Andhra Pradesh, India</span>
          <a href="mailto:jothireddy939@gmail.com" className="h5-footer">jothireddy939@gmail.com</a>
          <a href="https://www.linkedin.com/in/jyothi-reddy" target="_blank" rel="noreferrer" className="h5-footer">LinkedIn: Jyothi Reddy</a>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelected(null)}>✕</button>

            {/* Tags */}
            <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginBottom:'12px' }}>
              {selected.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>

            {/* Title */}
            <div className="modal-title">{selected.name}</div>

            {/* Problem */}
            <div className="modal-section-label">Problem</div>
            <p className="modal-text">{selected.problem}</p>

            {/* Solution */}
            <div className="modal-section-label">Solution</div>
            <p className="modal-text">{selected.solution}</p>

            {/* Impact */}
            <div className="modal-section-label">Impact</div>
            <div className="impact-box">💡 {selected.impact}</div>

            {/* Features */}
            <div className="modal-section-label">Key Features</div>
            <div style={{ display:'flex', flexDirection:'column' }}>
              {selected.features.map((f, i) => (
                <div className="modal-feature" key={i}>
                  <span style={{ color:'#e02020', fontWeight:900, flexShrink:0, marginTop:'1px' }}>•</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="modal-section-label">Tech Stack</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
              {selected.tech.map(t => <span className="modal-tech-tag" key={t}>{t}</span>)}
            </div>

            {/* Buttons */}
            <div style={{ marginTop:'24px', display:'flex', gap:'10px', flexWrap:'wrap' }}>
              {selected.github ? (
                <a href={selected.github} target="_blank" rel="noreferrer" className="github-btn">
                  <GithubIcon /> View on GitHub
                </a>
              ) : (
                <div className="github-placeholder">
                  <GithubIcon /> Add GitHub Link
                </div>
              )}
              {selected.website && (
                <a href={selected.website} target="_blank" rel="noreferrer" className="website-btn">
                  <LinkIcon /> Visit Website
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}