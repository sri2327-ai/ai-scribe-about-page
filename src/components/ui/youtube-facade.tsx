
import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  thumbnailQuality?: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault' | 'maxresdefault';
  className?: string;
  posterUrl?: string; // Optional custom poster/thumbnail image URL
  playPosition?: 'center' | 'bottom-left' | 'bottom-right';
}

export const YouTubeFacade = ({
  videoId,
  title,
  thumbnailQuality = 'hqdefault',
  className = '',
  posterUrl,
  playPosition = 'center',
}: YouTubeFacadeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Thumbnail: allow custom poster override, fallback to YouTube auto thumbnail
  const thumbnailUrl = posterUrl || `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;
  
  const loadVideo = () => { setIsLoaded(true); };

  const playPositionClass =
    playPosition === 'bottom-left'
      ? 'items-end justify-start p-4'
      : playPosition === 'bottom-right'
      ? 'items-end justify-end p-4'
      : 'items-center justify-center';
  return (
    <div 
      className={`w-full h-full overflow-hidden rounded-lg relative ${className}`}
      style={{ aspectRatio: "16/9" }}
      aria-label={isLoaded ? undefined : `Click to load YouTube video: ${title}`}
    >
      {!isLoaded ? (
        // Facade - lightweight placeholder with thumbnail
        <button
          onClick={loadVideo}
          className="w-full h-full group relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label={`Play video: ${title}`}
        >
          {/* Thumbnail image */}
          <img 
            src={thumbnailUrl} 
            alt={`Thumbnail for ${title}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          
          {/* Play button overlay */}
          <div className={`absolute inset-0 flex ${playPositionClass} transition-all duration-300`}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 backdrop-blur-md shadow-lg ring-1 ring-black/5 flex items-center justify-center group-hover:scale-110 transform transition-all duration-300">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 text-primary ml-0.5" />
            </div>
            <span className="sr-only">Play video</span>
          </div>
          
          {/* Video title overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
            <p className="text-sm sm:text-base font-medium truncate">{title}</p>
          </div>
        </button>
      ) : (
        // Actual YouTube embed - loaded only after user interaction
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default YouTubeFacade;
