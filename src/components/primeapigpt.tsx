import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react";
import GPTResponse from './gptresponse';

//here I want component to take the model as a prop

interface ModelProps {
    llm_model: string;
    codeSample: boolean;
    language: string;
}

const PrimeApiGpt: React.FC<ModelProps> = ({llm_model, codeSample, language}) => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('Your response will appear here...');
    const [loading, setLoading] = useState(false);

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleNewChat = () => {
        setQuery('');
        setResponse('');

        fetch('http://localhost:3000/clearMemory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(() => setLoading(false))
            .catch(error => {
                console.error('Error:', error);
                setResponse('An error occurred while fetching the response');
                setLoading(false);
            });
    }

    const handleQuerySubmit = () => {
        // Simulate an API call

        //const llm_model = "llama3"
        //const llm_model = "deepseek-r1:32b"

        setLoading(true);

        fetch('http://localhost:3000/qa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                question: query,
                model: llm_model,
                pipeline: "standard:memory",
                codeSample: codeSample,
                language: language,
                conversationalMemOn: true
            }),
        })
            .then(response => response.json())
            .then(data => {
                setResponse(data.answer || 'No response from API');
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setResponse('An error occurred while fetching the response');
                setLoading(false);
            });
    };

    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '90vh', padding: '20px' }}>
            

            {/* <div style={{ flex: 1, border: '1px solid #ccc', padding: '10px', marginBottom: '10px', overflowY: 'auto' }}>
                <p>{response}</p>
            </div> */}
            {/* <h2 style={{fontSize: 'x-large', color: 'rgb(165 36 19)'}}>{llm_model}</h2> */}
            
            <GPTResponse response={loading? "" : response} loading={loading} llama3={llm_model == "llama3"}/>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="text"
                    value={query}
                    onChange={handleQueryChange}
                    placeholder="Type your query here..."
                    style={{ flex: 1, padding: '10px', marginRight: '10px', border: '1px solid #ccc' }}
                />
                
                <Button onClick={handleQuerySubmit} variant="outline" className="flex items-center justify-center gap-2 rounded-full p-4 hover:bg-gray-100">
      {loading ? (
        <span className="text-sm font-semibold">Sending...</span>
      ) : (
        <>
          Submit
          <Send className="h-4 w-4 ml-2 animate-bounce" />
        </>

        
      )}
    </Button>


    <Button onClick={handleNewChat} variant="outline" className="ml-2 flex items-center justify-center gap-2 rounded-full p-4 hover:bg-gray-100">
        New Chat
    </Button>
                
    </div>
    </div>
                
    );
};

export default PrimeApiGpt;