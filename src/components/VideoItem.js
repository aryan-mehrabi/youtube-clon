import react from "react";

const VideoItem = ({ video, setSelectedVideo }) => {
    return <div onClick={() => setSelectedVideo(video)}>
        <img src={video.snippet.thumbnails.default.url} />
        <p>{video.snippet.title}</p>
    </div>
}

export default VideoItem