
import './Home.css';

function MainHome() {
  return (
    <div className="mainhome-bg">
     
      <header className="mainhome-header">
        <div className="mainhome-logo">
          <img src="https://placehold.co/40x40/6c63ff/fff?text=🚀" alt="Logo" />
          <span></span>
        </div>
        <div className="mainhome-nav">
          <a href="/dashboard" className="mainhome-btn mainhome-btn-outline">Dashboard</a>
          <a href="/login" className="mainhome-btn mainhome-btn-primary">Get Started</a>
        </div>
      </header>
    
      <main className="mainhome-hero">
        <h1>
          <span className="mainhome-hero-bold">Manager Your Expense</span><br />
          <span className="mainhome-hero-accent">Control your Money</span>
        </h1>
        <p className="mainhome-hero-desc">
          Start Creating your budget and save ton of money
        </p>
        <a href="/login" className="mainhome-btn mainhome-btn-primary ">
          Get Started
        </a>
      </main>
    </div>
  );
}

export default MainHome;