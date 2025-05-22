
/**
 * Utility functions to improve SEO and page performance
 */

/**
 * Extracts YouTube video ID from various YouTube URL formats
 * @param url YouTube URL
 * @returns video ID or null if not a valid YouTube URL
 */
export const extractYouTubeVideoId = (url: string): string | null => {
  if (!url) return null;
  
  // Match patterns like:
  // - https://www.youtube.com/watch?v=VIDEO_ID
  // - https://youtu.be/VIDEO_ID
  // - https://www.youtube.com/embed/VIDEO_ID
  // - https://www.youtube-nocookie.com/embed/VIDEO_ID
  
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/i,
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/i,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/i,
    /(?:https?:\/\/)?(?:www\.)?youtube-nocookie\.com\/embed\/([^?]+)/i
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
};

/**
 * Generates structured data for video content
 * @param videoId YouTube video ID
 * @param title Video title
 * @param description Video description
 * @param thumbnailUrl Optional custom thumbnail URL
 * @returns Structured data object
 */
export const generateVideoStructuredData = (
  videoId: string,
  title: string,
  description: string,
  thumbnailUrl?: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    "uploadDate": new Date().toISOString(),
    "embedUrl": `https://www.youtube.com/embed/${videoId}`,
    "potentialAction": {
      "@type": "SeekToAction",
      "target": `https://www.youtube.com/watch?v=${videoId}&t={seek_to_second_number}`,
      "startOffset-input": "required name=seek_to_second_number"
    }
  };
};
