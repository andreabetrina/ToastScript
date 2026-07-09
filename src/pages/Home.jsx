import Hero from "../components/Hero";
import "../styles/Home.css";

function Home({ navigateTo }) {
  return (
    <div className="home-page animate-fade-in">
      <Hero navigateTo={navigateTo} />
      
      <section className="features-section">
        <div className="section-container">
          <h3 className="section-title">Professional Tools for Meeting Success</h3>
          <p className="section-subtitle">Empowering speakers and roleplayers with interactive, offline-ready resources.</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h4>Interactive Templates</h4>
              <p>Fill in names, themes, and agendas directly. See changes compile in real-time into ready-to-read scripts.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h4>Integrated Role Widgets</h4>
              <p>Access custom helper tools including a speech stopwatch with color signals and a quick tally counter.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔌</div>
              <h4>100% Offline Reliable</h4>
              <p>Designed as a Progressive Web App (PWA) to load and run instantly in low-signal meeting rooms.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
