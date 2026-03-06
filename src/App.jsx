import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Hero5 from "./components/Hero5";
import Hero6 from "./components/Hero6";

export default function App() {
  return (
    <div style={{ overflowY: 'scroll', scrollSnapType: 'y mandatory', height: '100vh' }}>
      <section id="home" style={{ scrollSnapAlign: 'start', height: '100vh' }}>
        <Hero1 />
      </section>
      <section id="about" style={{ scrollSnapAlign: 'start', height: '100vh' }}>
        <Hero2 />
      </section>
      <section id="skills" style={{ scrollSnapAlign: 'start', height: '100vh' }}>
        <Hero3 />
      </section>
      <section id="certifications" style={{ scrollSnapAlign: 'start', height: '100vh' }}>
        <Hero4 />
      </section>
      <section id="projects" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
        <Hero5 />
      </section>
      <section id="thankyou" style={{ scrollSnapAlign: 'start', height: '100vh' }}>
        <Hero6 />
      </section>
    </div>
  );
}