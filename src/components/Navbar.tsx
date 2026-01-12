export const Logo = () => (
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      <path d="M12 18L12 6" strokeOpacity="0.3" />
      <path d="M8 12L16 12" strokeOpacity="0.3" />
      <path d="M15 9L9 15" />
    </svg>
    <span className="logo-text">Clear<span>Reflection</span></span>
  </div>
);

export default function Navbar() {
  return (
    <>
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
    </>
  )
}
