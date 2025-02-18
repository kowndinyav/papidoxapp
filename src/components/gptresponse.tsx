"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Supports bold, lists, and tables
import rehypeHighlight from "rehype-highlight"; // For code highlighting
import "highlight.js/styles/github-dark.css"; // Highlight.js theme
// import LoaderAlm from "./loader/loader_alm";
// import LoaderAlm1 from "./loader/loader_alm1";
import LlamaLoader from "./loader/llamaloader";
import DeepseekLoader from "./loader/deepseekloader";

// import SpinLoader1 from "./loader/spinloader1";

interface GPTResponseProps {
  response: string;
  loading: boolean;
  llama3: boolean;
}

const GPTResponse: React.FC<GPTResponseProps> = ({response, loading, llama3}) => {

    return (

        // style={{ flex: 1, border: '1px solid #ccc', padding: '10px', marginBottom: '10px', overflowY: 'auto' }}

        <div className="bg-gray-50 p-4 rounded-lg shadow-sm" style={{flex:1, overflowY: 'auto'}}>

        
          {loading ? (
            <div className="flex items-center justify-center h-full">
              {llama3 ? <LlamaLoader /> : <DeepseekLoader />}
            </div>
          ): (
            <ReactMarkdown
            children={response}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            className="prose prose-gray max-w-none"
          />)}

          
        </div>
      );
}

export default GPTResponse;