import React from 'react'

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title fade-in">[ About Me ]</h2>
      <div className="about-content fade-in">
        <div className="about-text">
          <p>
            Saya adalah seorang programmer yang passionate dalam mengeksplorasi
            berbagai domain teknologi. Dari mengembangkan pengoprasian sistem server, 
            hingga membangun aplikasi mobile yang bisa digunakan oleh banyak orang , saya selalu
            tertantang untuk menciptakan solusi inovatif.
          </p>

          <p>
            Perjalanan saya di dunia programming dimulai dari rasa ingin tahu
            yang tinggi tentang bagaimana teknologi bekerja. Kini, saya telah
            menguasai berbagai skill mulai dari hardware programming dengan
            Arduino dan ESP32, mobile development dengan Flutter
            Native, hingga membangun sistem fullstack yang kompleks.
          </p>

          <p>
            Di bidang cybersecurity, saya fokus pada penetration testing dan
            mengamankan aplikasi web dari berbagai ancaman. Saya juga aktif
            dalam mengelola server, melakukan deployment, dan
            mengimplementasikan CI/CD pipeline untuk memastikan aplikasi
            berjalan dengan optimal.
          </p>

          <p>
            &quot;Write code that humans can read,
            and machines can execute efficiently.&quot; Saya percaya bahwa kode yang
            baik bukan hanya yang berfungsi, tetapi juga mudah dimaintain dan
            di-scale untuk masa depan.
          </p>
        </div>

        <div className="tech-stack">
          <h3 className="tech-stack-title">Tech Stack</h3>
          <div className="tech-categories">
            <div className="tech-category">
              <h4>Languages</h4>
              <div className="tech-items">
                <span className="tech-item">JavaScript</span>
                <span className="tech-item">TypeScript</span>
                <span className="tech-item">Python</span>
                <span className="tech-item">C++</span>
                <span className="tech-item">Java</span>
                <span className="tech-item">Dart</span>
              </div>
            </div>

            <div className="tech-category">
              <h4>Frameworks & Libraries</h4>
              <div className="tech-items">
                <span className="tech-item">React</span>
                <span className="tech-item">Vue.js</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Express</span>
                <span className="tech-item">Flutter</span>
                <span className="tech-item">Django</span>
              </div>
            </div>

            <div className="tech-category">
              <h4>Databases</h4>
              <div className="tech-items">
                <span className="tech-item">PostgreSQL</span>
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">Firebase</span>
                <span className="tech-item">MySQL</span>
              </div>
            </div>

            <div className="tech-category">
              <h4>DevOps & Tools</h4>
              <div className="tech-items">
                <span className="tech-item">Docker</span>
                <span className="tech-item">Kubernetes</span>
                <span className="tech-item">GitHub Actions</span>
                <span className="tech-item">Nginx</span>
                <span className="tech-item">Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
