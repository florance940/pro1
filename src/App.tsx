import React from 'react';
import './App.css';

function App() {
  // We define the Logo component to keep the code clean and reusable
  const Logo = () => (
    <div className="logo-container">
      <svg 
        className="logo-icon-svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* Abstract Mirror/Reflection Icon */}
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 18L12 6" strokeOpacity="0.3" />
        <path d="M8 12L16 12" strokeOpacity="0.3" />
        <path d="M15 9L9 15" />
      </svg>
      <span className="logo-text">Clear<span>Reflection</span></span>
    </div>
  );

  return (
    <div className="container">
      <header className="navbar">
        <Logo />

        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Collection</a></li>
            <li><a href="#bespoke">Bespoke</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <button className="btn-secondary">Log In</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="announcement">
              <span className="pulse"></span> Free Shipping on Orders Over $200
            </div>
            <h1>The Art of <br /><span className="highlight">Pure Reflection</span></h1>
            <p>
              Elevate your sanctuary with our artisan-crafted mirrors. 
              Designed to catch the light and transform your space into a 
              modern masterpiece.
            </p>
            
            <div className="hero-actions">
              <button className="btn-primary lg">Explore Shop</button>
              <button className="btn-outline lg">Our Story</button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <strong>12k+</strong>
                <span>Customers</span>
              </div>
              <div className="stat-item">
                <strong>Premium</strong>
                <span>Materials</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="glass-card">
              <p>"Perfect addition to my living room!"</p>
              <span>- cR.FOREVER</span>
            </div>
            <div className="image-bg-glow"></div>
            <img 
              src="/image.png" 
              alt="Premium Mirror Design" 
              className="hero-main-img" 
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Logo />
            <p>Crafting light and space through artisanal mirror design since 2012.</p>
            <div className="social-links">
              <a href="#ig">Instagram</a>
              <a href="#pin">Pinterest</a>
              <a href="#tw">Twitter</a>
            </div>
          </div>

          <div className="footer-nav">
            <div className="footer-col">
              <h4>Shop</h4>
              <ul>
                <li><a href="#all">All Mirrors</a></li>
                <li><a href="#wall">Wall Decor</a></li>
                <li><a href="#custom">Custom Size</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#shipping">Shipping Policy</a></li>
                <li><a href="#returns">Returns</a></li>
                <li><a href="#care">Mirror Care</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Stay Connected</h4>
              <p>Join our list for exclusive gallery openings.</p>
              <div className="newsletter-box">
                <input type="email" placeholder="Email address" />
                <button>→</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Clear Reflection Studio. All rights reserved.</p>
          <div className="legal">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;