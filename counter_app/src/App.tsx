import { useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Counter App</h1>
      <p data-testid="count-value">Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
