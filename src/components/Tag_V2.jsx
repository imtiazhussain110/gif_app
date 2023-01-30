import React, { useState } from "react";
import useGif from "../custom_hooks/useGif";

function Tag() {
  const [tag, setTag] = useState("cat");
  const [gif, fetchGif] = useGif(tag);
  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img src={gif} alt="Random Gif" width="300" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>Click For New</button>
    </div>
  );
}

export default Tag;
