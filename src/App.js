/*
Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

Redux is more useful when:

You have large amounts of application state that are needed in many places in the app
The app state is updated frequently over time
The logic to update that state may be complex
The app has a medium or large-sized codebase, and might be worked on by many people


 React-Redux is our official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.

 The center of every Redux application is the store. A "store" is a container that holds your application's global state.

A store is a JavaScript object with a few special functions and abilities that make it different than a plain global object:

You must never directly modify or change the state that is kept inside the Redux store
Instead, the only way to cause an update to the state is to create a plain action object that describes "something that happened in the application", and then dispatch the action to the store to tell it what happened.
When an action is dispatched, the store runs the root reducer function, and lets it calculate the new state based on the old state and the action
Finally, the store notifies subscribers that the state has been updated so the UI can be updated with the new data.

We start by defining an initial state value to describe the application:

// Define an initial state value for the app
const initialState = {
  value: 0
}

Then, we define a reducer function. The reducer receives two arguments, the current state and an action object describing what happened. When the Redux app starts up, we don't have any state yet, so we provide the initialState as the default value for this reducer

// Create a "reducer" function that determines what the new state
// should be when something happens in the app
function counterReducer(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case 'counter/incremented':
      return { ...state, value: state.value + 1 }
    case 'counter/decremented':
      return { ...state, value: state.value - 1 }
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state
  }
}

Action objects always have a type field, which is a string you provide that acts as a unique name for the action.

Store
Now that we have a reducer function, we can create a store instance by calling the Redux library createStore API.

// Create a new Redux store with the `createStore` function,
// and use the `counterReducer` for the update logic
const store = Redux.createStore(counterReducer)

We pass the reducer function to createStore, which uses the reducer function to generate the initial state, and to calculate any future updates.


actions are dispatched in response to a user interaction like a click
the store runs the reducer function to calculate a new state
the UI reads the new state to display the new values

Redux expects that all state updates are done immutably. 

An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.

The type field should be a string that gives this action a descriptive name, like "todos/todoAdded". We usually write that type string like "domain/eventName", where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.

An action object can have other fields with additional information about what happened. By convention, we put that information in a field called payload.

A typical action object might look like this:

const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}

A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

Reducers must always follow some specific rules:

They should only calculate the new state value based on the state and action arguments
They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
They must not do any asynchronous logic, calculate random values, or cause other "side effects"

The current Redux application state lives in an object called the store .

The store is created by passing in a reducer, and has a method called getState that returns the current state value:

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}

Dispatch
The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value:

store.dispatch({ type: 'counter/incremented' })

console.log(store.getState())
// {value: 1}

Single Source of Truth

State is Read-Only

Changes are Made with Pure Reducer Functions

In order to be pure a function must follow these rules:

A pure function must always return the same value when given the same inputs.
A pure function must not have any side effects.

If you haven’t seen Object.assign, what it does is assign properties from one object to another. You can pass it a series of objects, and it will merge them all together, left to right, while overwriting any duplicate properties. (And by “left to right”, I mean that executing Object.assign(result, a, b, c) will copy a into result, then b, then c).


If you haven’t seen Object.assign, what it does is assign properties from one object to another. You can pass it a series of objects, and it will merge them all together, left to right, while overwriting any duplicate properties. (And by “left to right”, I mean that executing Object.assign(result, a, b, c) will copy a into result, then b, then c).

Object.assign
Instead of manually creating an object with the new property, you can use Object.assign to avoid defining the unmodified properties:


Spread operator
You can use the spread operator with the same effect; the difference is that Object.assign() uses setter methods to assign new values, while the spread operator doesn’t:


*/

import './App.css';
import Counter from './features/counter/Counter';
import Coin from './features/coin/Coin'
import Theme from './features/theme/Theme';

function App() {
  return (
    <div className="App">
      <Counter />
      <Coin />
      <Theme />
    </div>
  );
}

export default App;
