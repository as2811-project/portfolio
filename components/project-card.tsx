import { useRef, useEffect, useState } from "react";
import Link from "next/link";

interface ProjectCardProps {
  videoSrc: string;
  projectTitle: string;
  githubUrl?: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  videoSrc,
  projectTitle,
  githubUrl,
  description,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (isVisible && video.paused) {
        video.play().catch((error) => {
          console.warn("Video play error:", error);
        });
      } else if (!isVisible && !video.paused) {
        video.pause();
      }
    }
  }, [isVisible]);

  return (
    <div className="mt-4 p-4">
      <video ref={videoRef} controls preload="none" muted loop>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div>
        {githubUrl && (
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <h2 className="mt-4 hover:text-blue-500">{projectTitle}</h2>
          </Link>
        )}
        {!githubUrl && <h2 className="mt-4">{projectTitle}</h2>}
        <p className="mt-2 opacity-70">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
