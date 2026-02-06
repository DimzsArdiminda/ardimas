import React from 'react'

export default function Stats() {
  return (
    <div>
      <section className="section stats-section">
        <div className="stats-grid">
          <div className="stat-item fade-in">
            <div className="stat-number">20+</div>
            <div className="stat-label">Tech Domains</div>
          </div>
          <div className="stat-item fade-in">
            <div className="stat-number">∞</div>
            <div className="stat-label">Lines of Code</div>
          </div>
          <div className="stat-item fade-in">
            <div className="stat-number">24 / 7</div>
            <div className="stat-label">Problem Solving</div>
          </div>
          <div className="stat-item fade-in">
            <div className="stat-number">100%</div>
            <div className="stat-label">Passion Driven</div>
          </div>
        </div>
      </section>
    </div>
  );
}
