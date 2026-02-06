import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="glitch">Fullstack Developer</h1>
          <p className="hero-subtitle">
            Bridging Hardware & Software | Building The Future
          </p>
          <div className="typing-text">
            IoT • Mobile • Fullstack • Cybersecurity • DevOps
          </div>
          <br />
          <a href="#contact" className="cta-button">
            Connect With Me
          </a>
        </div>
        <div className="hero-profile">
          <div className="profile-image">
            <div className="profile-placeholder">
              <Image
                src={`/foto/me.JPG`}
                alt="Profile"
                width={200}
                height={200}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
          <div className="social-buttons">
            <a
              href="https://github.com/DimzsArdiminda"
              className="social-btn"
              target="_blank"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dimas-ardiminda-edia-putra/"
              className="social-btn"
              target="_blank"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/divoidsam"
              className="social-btn"
              target="_blank"
            >
              <span>Instagram</span>
            </a>
            <a href="mailto:dimasardiminda@email.com" className="social-btn">
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
