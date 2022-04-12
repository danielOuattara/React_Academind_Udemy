import {useState, useEffect} from 'react';
import Card from '../components/Card';

function useCounter(value) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + value);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [value]);
  
    return <Card>{counter}</Card>;
}

export default useCounter;