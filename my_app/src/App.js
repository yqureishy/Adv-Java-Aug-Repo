import { useState } from 'react';
import './App.css';
import CoffeeOrder from './components/CoffeeOrder';
import MovieList from './components/MovieList'

function App() {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h4>{count}</h4>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <MovieList></MovieList>
      <CoffeeOrder></CoffeeOrder>
      <h5>Footer</h5>
    </div>
  );
}

export default App;
