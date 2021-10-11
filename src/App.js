import { useState, useEffect, useReducer } from "react";
import Basket from "./Basket";
import Books from "./Books";
import Navigation from "./Navigation";

const INITIAL_STATE = { opened: false };

function reducer(state, action) {

  switch(action.type) {

    case "TOGGLE":
      return { ...state, opened: !state.opened};
    
    default:
      return state;

  }

}

function App() {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  console.log("state", state);
  
  return (
    <div className='App'>
      <Navigation dispatch={dispatch} state={state} />
      <Books />
      <Basket dispatch={dispatch} state={state}/>
    </div>
  );
}

export default App;
