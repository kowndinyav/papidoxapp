import React from 'react';
import llamaGif from "./llama.gif"; // Adjust path if needed

const LlamaLoader: React.FC = () => {
  return (

    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img src={llamaGif} alt="Loading..." width="80" height="80" />
      <p>...</p>
    </div>

    
  );
};

export default LlamaLoader;