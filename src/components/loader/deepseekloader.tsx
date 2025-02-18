import React from 'react';
import deepseekGif from "./deepseek.gif"; // Adjust path if needed

const DeepSeekLoader: React.FC = () => {
  return (

    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img src={deepseekGif} alt="Loading..." width="70" height="70" />
      <p>...</p>
    </div>

    
  );
};

export default DeepSeekLoader;