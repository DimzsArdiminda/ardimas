import React from 'react'
import CardTimeline from './ui/CardTimeline'

export default function Experience() {
  return (
    <section className="section experience-section">
      <h2 className="section-title fade-in">[ Experience & Journey ]</h2>
      <div className="timeline">
        <CardTimeline
          year="2025"
          title="Internship as Mobile Developer at PT. Adama Digital Solutions"
          description="Bergabung dalam program magang di PT. Adama Digital Solutions sebagai Mobile Developer. Berkontribusi dalam pengembangan aplikasi mobile, serta mempelajari praktik terbaik dalam pengembangan perangkat lunak."
          tags={["Internship", "Mobile Dev", "Flutter", "Consume API", "Design Implementation"]}
        />

        <CardTimeline
          year="2022 - Present"
          title="Fullstack Web and Mobile Developer Freelancer"
          description="Membangun berbagai proyek berbasis website dan mobile apps. Fokus pada pembuatan UI/UX yang menarik, logika sistem yang kompeten serta dukungan database yang mempuni."
          tags={["Frontend", "UI/UX", "Security"]}
        />

        <CardTimeline
          year="2023 - 2024"
          title="Mobile & Backend Developer"
          description="Mengembangkan aplikasi mobile cross-platform dengan Flutter dan React Native. Membangun REST API dan GraphQL backend. Mengoptimasi performa aplikasi dan implementasi best practices."
          tags={["Mobile Dev", "Backend", "API"]}
        />

        <CardTimeline
          year="2022 - 2023"
          title="Journey Begins"
          description="Memulai perjalanan dengan Python. Belajar fundamental programming, networking, dan database. Mengembangkan proyek-proyek sederhana dengan ilmu yang sudah ada. Mempelajari mengenai cybersecurity dan keamanan jaringan dari sumber terbuka."
          tags={["Python", "Vscode", "Linux", "SQL Injection", "DDoS", "Learning"]}
        />
      </div>
    </section>
  );
}
