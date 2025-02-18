import { useEffect, useState } from "react";


const LogStream: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        if (isVisible) {
            console.log("logstream isVisible=true")
            const source = new EventSource("http://localhost:3000/logs");
            source.onmessage = (event) => {
                setLogs((prevLogs) => [...prevLogs, event.data]);
            };
            return () => source.close();
        }
    }, [isVisible]);

    return (
        <div>
            <div style={{ height: "800px", backgroundColor:"#000", color:"#43a843", fontSize:"small", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
                {logs.map((log, index) => (
                    <div key={index}>{log}</div>
                ))}
            </div>
        </div>
    );
};

export default LogStream;
