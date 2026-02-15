import React from "react";
import CardTimeline from "./ui/CardTimeline";

export default function Experience() {
  return (
    <section className="section experience-section">
      <h2 className="section-title fade-in">[ Experience & Journey ]</h2>

      <div className="timeline">
        <CardTimeline
          year="2022 - Present"
          title="Fullstack Web & Mobile Developer (Freelance)"
          description="Developing various web and mobile applications for clients and personal projects. Focused on building scalable systems, modern UI/UX, secure backend services, and efficient database architecture."
          tags={[
            "Fullstack",
            "React / Next.js",
            "Mobile Dev",
            "API Development",
            "Database Design",
            "UI/UX",
          ]}
        />

        <CardTimeline
          year="2025"
          title="Mobile Developer Intern — PT. Adama Digital Solutions"
          description="Contributed to mobile application development within a professional software team environment. Gained experience in real-world project workflows, code collaboration, and mobile architecture best practices."
          tags={[
            "Internship",
            "Flutter",
            "Mobile Development",
            "API Integration",
            "Team Collaboration",
          ]}
        />

        <CardTimeline
          year="2023 - 2024"
          title="Mobile & Backend Developer"
          description="Built cross-platform mobile applications and backend services using REST and GraphQL APIs. Focused on performance optimization, scalable backend logic, and maintainable application structure."
          tags={[
            "Flutter",
            "React Native",
            "Backend",
            "REST API",
            "GraphQL",
            "Performance Optimization",
          ]}
        />

        <CardTimeline
          year="2022 - 2023"
          title="Programming Journey Begins"
          description="Started learning programming fundamentals using Python, exploring networking concepts, databases, and system security. Built early projects while developing strong problem-solving foundations."
          tags={[
            "Python",
            "Linux",
            "Networking",
            "Database",
            "Cybersecurity Basics",
            "Learning Phase",
          ]}
        />
      </div>
    </section>
  );
}
