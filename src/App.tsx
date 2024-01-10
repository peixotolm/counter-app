import { useState, useEffect } from 'react';


const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('https://api.publicapis.org/entries');
      const result = await response.json();

      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    };
  }

  useEffect(() => {
    // You can perform additional actions after the data is fetched if needed
    // For example, update state, trigger UI changes, etc.
    if (data) {
      console.log('Data fetched:', data);
    }
  }, [data]);

  

    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={fetchData} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>
        <p>{error && <p style={{ color: 'red' }}>Error: {error.message}</p>}</p>
      </div>
    );
  };

  export default CounterApp;