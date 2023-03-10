import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

function Random() {
  const [gif, setGif] = useState("");

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imgSrc = data.data.images.downsized_large.url;
    setGif(imgSrc);
  };

  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} alt="Random Gif" width="300" />
      <button onClick={handleClick}>Click For New</button>
    </div>
  );
}

export default Random;
