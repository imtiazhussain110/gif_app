import React from "react";
import useGif from "../custom_hooks/useGif";

function Random() {
  const [gif, fetchGif] = useGif();
  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} alt="Random Gif" width="300" />
      <button onClick={fetchGif}>Click For New</button>
    </div>
  );
}

export default Random;
