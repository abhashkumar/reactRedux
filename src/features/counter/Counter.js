import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

/*
We can read data from the store with useSelector, and dispatch actions using useDispatch.


Now, any time you click the "Increment" and "Decrement" buttons:

The corresponding Redux action will be dispatched to the store
The counter slice reducer will see the actions and update its state
The <Counter> component will see the new state value from the store and re-render itself with the new data


*/

function Counter()
{
    const count = useSelector((state) => state.counter.count)
    const color = useSelector((state) => state.theme.color)
    const dispatch = useDispatch()
    return (
    <>
    
    <h1>Hello world</h1>
      <button onClick ={() => dispatch(increment())} aria-label="Increment value"> + </button>
      <span style = {{color:color}}>Count: {count}</span>
      <button onClick ={() => dispatch(decrement())} aria-label="Decrement value"> - </button>
      <button onClick ={() => dispatch(incrementByAmount(10))} aria-label="increment value by 10"> increment by 10</button>
    </>
    )
}

export default Counter