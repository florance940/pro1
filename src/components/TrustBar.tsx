

export default function TrustBar() {
  return (
    <>
      <section className="trust-bar">
        <div className="trust-item">
          <span className="trust-icon">✧</span>
          <div className="trust-text">
            <h4>Distortion Free</h4>
            <p>Artisan grade 6mm silver glass</p>
          </div>
        </div>
        <div className="trust-divider"></div>
        <div className="trust-item">
          <span className="trust-icon">◈</span>
          <div className="trust-text">
            <h4>Sustainable Frames</h4>
            <p>FSC Certified hardwoods only</p>
          </div>
        </div>
        <div className="trust-divider"></div>
        <div className="trust-item">
          <span className="trust-icon">⚲</span>
          <div className="trust-text">
            <h4>White Glove Delivery</h4>
            <p>Insured shipping to your door</p>
          </div>
        </div>
      </section>
    </>
  )
}
