import { useState } from 'react';
import { Button } from './ui/button';

interface CounterProps {
    initialValue: number;
    step: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue, step }) => {
    const [count, setCount] = useState<number>(initialValue);
    
    return (
        <div>
            <p>Count: {count}</p>
            <Button variant="outline" onClick={() => setCount(count + step)}>
                Increment
            </Button>

            <Button variant="outline" onClick={() => setCount(count - step)}>
                Decrement
            </Button>

        </div>
    );
};

export default Counter;