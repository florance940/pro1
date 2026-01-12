import './App.css';
import Navbar, { Logo } from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="container">

      <Navbar />
      <Hero />

      {/* 5. FOOTER */}
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