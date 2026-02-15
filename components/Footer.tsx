import React from 'react'

export default function Footer() {
  return (
    <div>
      <section className="section " id="contact">
        <h2 className="section-title fade-in">[ Let&apos;s Connect ]</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
          Ready to collaborate on your next project?
        </p>
        <div className="contact-links">
          <a
            href="https://github.com/DimzsArdiminda"
            className="contact-link"
            target="_blank"
            title="GitHub"
          >
            <span>⚡</span>
          </a>
          <a
            href="https://linkedin.com/in/dimas-ardiminda-edia-putra/"
            className="contact-link"
            target="_blank"
            title="LinkedIn"
          >
            <span>💼</span>
          </a>
          <a
            href="mailto:dimasardiminda@email.com"
            className="contact-link"
            title="Email"
          >
            <span>📧</span>
          </a>
          <a
            href="https://Instagram.com/divoidsam"
            className="contact-link"
            target="_blank"
            title="Instagram"
          >
            <span>📷</span>
          </a>
        </div>
      </section>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} | Ardiminda Project | Coded with passion & tea ☕
        </p>
      </footer>
    </div>
  );
}
