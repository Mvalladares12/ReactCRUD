import {useState} from 'react';

const Counter = () =>{
    const [counter, setCounter] = useState(0);

    const imcrementCounter = () =>{
        setCounter(counter + 1);
    }

    return(
        <div>
            <p>Contador: { counter }</p>
            <button onClick={imcrementCounter}>Incrementar</button>
        </div>
    )
}

export default Counter;