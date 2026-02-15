import React from 'react'

export default function Tech() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title fade-in">[ Tech Arsenal ]</h2>
      <div className="skills-grid">
        
        <div className="skill-card fade-in">
          <div className="skill-icon">🌐</div>
          <h3 className="skill-title">Internet of Things</h3>
          <p className="skill-description">
            Connecting the physical world with digital intelligence through
            smart devices and embedded systems.
          </p>
          <div className="skill-tags">
            <span className="tag">Arduino</span>
            <span className="tag">ESP32</span>
            <span className="tag">MQTT</span>
            <span className="tag">Sensors</span>
          </div>
        </div>

        <div className="skill-card fade-in">
          <div className="skill-icon">📱</div>
          <h3 className="skill-title">Mobile Development</h3>
          <p className="skill-description">
            Crafting seamless mobile experiences for both Android and iOS
            platforms.
          </p>
          <div className="skill-tags">
            <span className="tag">Flutter</span>
            <span className="tag">Java</span>
          </div>
        </div>

        <div className="skill-card fade-in">
          <div className="skill-icon">⚙️</div>
          <h3 className="skill-title">Backend Engineering</h3>
          <p className="skill-description">
            Building robust, scalable server-side architectures and APIs that
            power modern applications.
          </p>
          <div className="skill-tags">
            <span className="tag">Node.js</span>
            <span className="tag">Django - Flask</span>
            <span className="tag">SQL</span>
            <span className="tag">NoSQL</span>
          </div>
        </div>

        <div className="skill-card fade-in">
          <div className="skill-icon">🎨</div>
          <h3 className="skill-title">Frontend Development</h3>
          <p className="skill-description">
            Creating beautiful, responsive user interfaces with modern
            frameworks and design principles.
          </p>
          <div className="skill-tags">
            <span className="tag">React</span>
            <span className="tag">Vue</span>
            <span className="tag">TypeScript</span>
            <span className="tag">CSS3</span>
          </div>
        </div>

        <div className="skill-card fade-in">
          <div className="skill-icon">🔒</div>
          <h3 className="skill-title">Cybersecurity</h3>
          <p className="skill-description">
            Securing systems, finding vulnerabilities, and implementing best
            practices for digital safety.
          </p>
          <div className="skill-tags">
            <span className="tag">Pentesting</span>
            <span className="tag">Encryption</span>
            <span className="tag">SSL/TLS</span>
          </div>
        </div>

        <div className="skill-card fade-in">
          <div className="skill-icon">🖥️</div>
          <h3 className="skill-title">Server & DevOps</h3>
          <p className="skill-description">
            Managing infrastructure, deploying applications, and automating
            workflows efficiently.
          </p>
          <div className="skill-tags">
            <span className="tag">Linux</span>
            <span className="tag">Docker</span>
            <span className="tag">CI/CD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
