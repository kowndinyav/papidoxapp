// import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Dispatch, SetStateAction } from "react";

interface LLMSelectorProps {
  model: string;
  setModel: Dispatch<SetStateAction<string>>;
  codeSample: boolean;
  setCodeSample: Dispatch<SetStateAction<boolean>>;
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  showDebug: boolean;
  setShowDebug: Dispatch<SetStateAction<boolean>>;
  conversationalMemOn: boolean;
  setConversationalMemOn: Dispatch<SetStateAction<boolean>>;
}

const LLMSelector: React.FC<LLMSelectorProps> = ({ model, setModel, codeSample, setCodeSample, language, setLanguage, showDebug, setShowDebug, conversationalMemOn, setConversationalMemOn }) => {
//   const [model, setModel] = useState("llama3");
//   const [codeSample, setCodeSample] = useState(false);
//   const [language, setLanguage] = useState("python");
//   const [showDebug, setShowDebug] = useState(false);

  return (
    <div className="flex items-center justify-between p-3 bg-white shadow-lg rounded-lg w-full space-x-4 border border-gray-300">
      {/* Model Selection */}
      <div className="flex flex-col">
        <label className="text-sm font-medium">Model</label>
        <Select value={model} onValueChange={setModel}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Select a model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="llama3">Llama3</SelectItem>
            <SelectItem value="deepseek-r1:32b">Deepseek-R1:32b</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Code Sample Checkbox */}
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="code-sample" 
          checked={codeSample} 
          onCheckedChange={(checked) => setCodeSample(checked as boolean)} 
        />
        <label htmlFor="code-sample" className="text-sm">Code Sample</label>
      </div>

      {/* Programming Language Selection */}
      <div className="flex flex-col">
        <label className="text-sm font-medium">Language</label>
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="JavaScript">JavaScript</SelectItem>
            <SelectItem value="Python">Python</SelectItem>
            <SelectItem value="Java">Java</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="conversational-mem-on" 
          checked={conversationalMemOn} 
          onCheckedChange={(checked) => setConversationalMemOn(checked as boolean)} 
        />
        <label htmlFor="converational-mem-on" className="text-sm">Conversational Memory</label>
      </div>

      {/* Debug Log Toggle */}
      <div className="flex items-center space-x-2">
        <span className="text-sm">Debug Log</span>
        <Switch checked={showDebug} onCheckedChange={setShowDebug} />
      </div>
    </div>
  );
}

export default LLMSelector;