export default function Hero3() {
  const skills = [
    {
      title: "Artificial Intelligence & Machine Learning",
      desc: "Deep Learning, Neural Networks, NLP, Computer Vision, TensorFlow, PyTorch, Scikit-learn.",
    },
    {
      title: "MERN Stack Development",
      desc: "MongoDB, Express.js, React.js, Node.js — full-stack web application development.",
    },
    {
      title: "Programming Languages",
      desc: "Python, JavaScript, TypeScript, Java, C, C++.",
    },
    {
      title: "Cloud & DevOps",
      desc: "AWS, Google Cloud, Docker, Git, GitHub, CI/CD pipelines.",
    },
    {
      title: "Data Science & Analytics",
      desc: "Pandas, NumPy, Matplotlib, Power BI, SQL, Data Visualization.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#e8e8e8",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap');

        .hero3 * { font-family: 'Montserrat', 'Arial Black', sans-serif; }

        .h3-section-title {
          font-weight: 900;
          font-size: clamp(36px, 5vw, 68px);
          line-height: 0.95;
          letter-spacing: -0.02em;
          color: #111;
          font-style: italic;
        }

        .h3-edu-label {
          font-weight: 700;
          font-size: clamp(10px, 0.9vw, 12px);
          color: #e02020;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 4px;
        }

        .h3-edu-title {
          font-weight: 900;
          font-size: clamp(13px, 1.3vw, 17px);
          color: #111;
          line-height: 1.2;
        }

        .h3-edu-sub {
          font-weight: 500;
          font-size: clamp(11px, 1vw, 13px);
          color: #555;
          margin-top: 2px;
        }

        .h3-edu-year {
          font-weight: 700;
          font-size: clamp(11px, 1vw, 13px);
          color: #e02020;
          margin-top: 4px;
        }

        .h3-skill-title {
          font-weight: 700;
          font-size: clamp(11px, 1.05vw, 13.5px);
          color: #111;
        }

        .h3-skill-desc {
          font-size: clamp(10px, 0.9vw, 12px);
          line-height: 1.55;
          color: #444;
          font-weight: 400;
        }

        .h3-nav-text {
          font-weight: 700;
          font-size: 13px;
          color: #111;
        }

        .h3-nav-link {
          font-weight: 600;
          font-size: 13px;
          color: #111;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }

        .h3-nav-link:hover { color: #e02020; }

        .h3-proverb {
          font-weight: 400;
          font-size: 11px;
          color: #555;
          font-style: italic;
          letter-spacing: 0.03em;
        }

        .h3-footer {
          font-weight: 500;
          font-size: 12px;
          color: #111;
          text-decoration: none;
        }

        .edu-card {
          background: #fff;
          border-left: 4px solid #e02020;
          border-radius: 4px;
          padding: 12px 18px;
          margin-bottom: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
      `}</style>

      <div className="hero3" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

        {/* Top Nav */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 32px 10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span className="h3-nav-text">Jyothi Reddy</span>
            <span className="h3-proverb">"AI is the new electricity." — Andrew Ng</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a href="#home" className="h3-nav-link">Home</a>
            <a href="#about" className="h3-nav-link">About</a>
            <a href="#skills" className="h3-nav-link" style={{ color: '#e02020' }}>Skills</a>
            <a href="#certifications" className="h3-nav-link">Certifications</a>
            <a href="#projects" className="h3-nav-link">Projects</a>
          </div>
        </div>

        {/* Main Content — full width */}
          <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <div style={{ width: '100%', padding: '12px 64px 12px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px' }}>

            {/* Title */}
            <div className="h3-section-title">personal<br />skills</div>

            {/* Education Card */}
            <div className="edu-card">
              <div className="h3-edu-label">Education</div>
              <div className="h3-edu-title">B.Tech — Computer Science & Technology</div>
              <div className="h3-edu-sub">Vellore Institute of Technology (VIT)</div>
              <div className="h3-edu-year">2021 – 2025</div>
            </div>

            {/* Skills — 2 column grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 40px' }}>
              {skills.map((skill) => (
                <div key={skill.title} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#e02020', fontWeight: 900, fontSize: '14px', marginTop: '1px', flexShrink: 0 }}>•</span>
                  <div>
                    <div className="h3-skill-title">{skill.title}</div>
                    <div className="h3-skill-desc">{skill.desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 32px 16px' }}>
          <span className="h3-footer">Tirupati, Andhra Pradesh, India</span>
          <a href="mailto:jothireddy939@gmail.com" className="h3-footer">jothireddy939@gmail.com</a>
          <a href="https://www.linkedin.com/in/jyothi-reddy" target="_blank" rel="noreferrer" className="h3-footer">LinkedIn: Jyothi Reddy</a>
        </div>

      </div>
    </div>
  );
}