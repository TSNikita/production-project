import { useState } from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    return (
        <div className={classes.btn}>
            <button  onClick={increment}>Кнопка</button>
            <h1>{count}</h1>
            УРАААА
        </div>
    );
};

export default Counter