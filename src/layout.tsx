import PrimeApiGpt from "./components/primeapigpt"
import LLMSelector from "./components/llmsettings"
import LogStream from "./components/logstream"

import { useState } from "react";

export default function Layout() {
  
  const [model, setModel] = useState("llama3");
  const [codeSample, setCodeSample] = useState(true);
  const [language, setLanguage] = useState("JavaScript");
  const [showDebug, setShowDebug] = useState(false);
  

  return (
    
    <>
      <table style={{width: '100%', height:'20%'}}>
        <tr>
        <LLMSelector 
        model={model} setModel={setModel}
        codeSample={codeSample} setCodeSample={setCodeSample}
        language={language} setLanguage={setLanguage}
        showDebug={showDebug} setShowDebug={setShowDebug}
        ></LLMSelector>
        
        </tr>
      </table>

      <table style={{width: '100%'}}>
        <tr>
        <td style={{width: '60%', overflowY: 'auto'}}>
          <PrimeApiGpt  llm_model={model} codeSample={codeSample} language={language}/>
        </td>

        {showDebug &&  <td style={{width: '40%', overflowY: 'auto'}}>
          <LogStream isVisible={showDebug}></LogStream>
        </td>}

      </tr>
      {/* <tr>
      <td style={{width: '50%', overflowY: 'auto'}}>
        <PrimeApiGpt llm_model="deepseek-r1:32b"/>
        </td>
      </tr> */}
    </table>
    </>
  )
}
