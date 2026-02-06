import React from 'react'

interface CardTimelineProps{
    year : string;
    title : string;
    description : string;
    tags?: string[];
}


export default function CardTimeline({year, title, description, tags = []}: CardTimelineProps) {
  return (
    <div className="timeline-item fade-in">
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <div className="timeline-year">{year}</div>
        <h3 className="timeline-title">
            {title}
        </h3>
        <p className="timeline-description">
        {description}
        </p>
        <div className="timeline-tags">
            {tags.map((tag) => (
                <span key={tag} className="tag">
                    {tag}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
}
