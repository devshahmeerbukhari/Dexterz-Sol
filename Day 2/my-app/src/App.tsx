import { useState, useEffect } from 'react';
import './App.css';

// Example Observable (Simulating data updates)
const createCounterObservable = () => {
  let count = 0;
  const listeners: any = [];

  const subscribe = (callback:any) => {
    listeners.push(callback);
  };

  const emit = () => {
    count++;
    listeners.forEach((callback: any) => callback(count));
  };

  setInterval(emit, 1000); // Update every second
  return { subscribe };
};

const counterObservable = createCounterObservable();
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = (newCount: any) => setCount(newCount);
    counterObservable.subscribe(updateCount);
  }, []);

  return <div>Counter: {count}</div>;
}

export default App;
