import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import axios from "axios";

const App = () => {
  const [response, setResponse] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const apiRequest = async term => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: term,
          key: "AIzaSyAnaURZ2sKg6-raa9XGrAmndnMd4rqlR7c",
        },
      }
    );
    setResponse(response.data.items);
  };

  return (
    <div>
      <SearchBar request={apiRequest} />
      <VideoPlayer selectedVideo={selectedVideo} />
      <VideoList setSelectedVideo={setSelectedVideo} videos={response} />
    </div>
  );
};

export default App;
