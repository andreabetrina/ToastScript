import "./../styles/Hero.css";

function Hero({ navigateTo }) {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Toast<span>Script</span></h1>
        <p className="hero-tagline">
          Elevate Your Toastmasters Meetings
        </p>
        <p className="hero-description">
          Access, customize, and read official role scripts in real-time. Built with integrated timers, word trackers, and tally counters that work fully offline.
        </p>
        <button className="hero-button" onClick={() => navigateTo("scripts")}>
          Get Scripts <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
