import Image from "next/image";

interface CardFiturProps {
  url: string;
  title: string;
  description: string;
  tags?: string[];
  type: "website" | "mobile" | "iot";
  UrlApps?: string;
}

export default function CardFitur({
  url,
  title,
  type,
  description,
  UrlApps,
  tags = [],
}: CardFiturProps) {
  // const getImageUrl = (inputUrl: string): string => {
  //     const match = inputUrl.match(/https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\//);
  //     if (match && match[1]) {
  //         const fileId = match[1];
  //         return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
  //     }
  //     return inputUrl;
  // };

  //   const imageUrl = getImageUrl(url);

  //   const isImageUrl =
  //     typeof imageUrl === "string" &&
  //     (imageUrl.startsWith("http://") || imageUrl.startsWith("https://"));

  return (
    <div className="project-card fade-in">
      <div className="project-image">
        {/* {isImageUrl && (
        <img
        src={url}
        alt={title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )} */}
        <Image
          src={url}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="skill-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {UrlApps && (
          <a
            href={UrlApps}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit App
          </a>
        )}
      </div>
    </div>
  );
}
