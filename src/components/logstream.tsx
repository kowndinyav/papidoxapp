import { useEffect, useState } from "react";


const LogStream: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        const eventSource = new EventSource("http://localhost:3000/logs");

        eventSource.onmessage = (event) => {
            setLogs((prevLogs) => [...prevLogs, event.data]);
        };

        return () => eventSource.close();
    }, []);

    return (
        <div>
            <h2>Debug Logs</h2>
            <div style={{ height: "800px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
                {logs.map((log, index) => (
                    <div key={index}>{log}</div>
                ))}
            </div>
        </div>
    );
};

export default LogStream;
