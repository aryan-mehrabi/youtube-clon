import react from "react";
import VideoItem from "./VideoItem"

const VideoList = ( {videos, setSelectedVideo} ) => {
    const renderedList = videos.map(video => {
        return <VideoItem setSelectedVideo={setSelectedVideo} video={ video }/>
    })
    return <div>{renderedList}</div>
}

export default VideoList;