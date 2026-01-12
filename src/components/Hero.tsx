import React from 'react'
import TrustBar from './TrustBar'
import ProductGrid from './ProductGrid'

export default function () {
  return (
    <>
      <main>
        {/* 2. HERO SECTION */}
        <section className="hero" id="home">
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

        {/* 3. TRUST BAR */}
        <TrustBar />


        {/* 4. FEATURED COLLECTION */}
        {/* 4. FEATURED COLLECTION */}
        <ProductGrid />

      </main>
    </>
  )
}
