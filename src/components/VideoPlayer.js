import react from "react";

const VideoPlayer = ({ selectedVideo }) => {
    if (selectedVideo === null) {
        return null
    }

  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${ selectedVideo.id.videoId }`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
