import React, { useReducer } from "react";

// a reusable function to setup Contexts & Providers for different resources
export default (reducer, actions, iniitialState) => {
  const Context = React.createContext();
  // takes a component as an argument (children)
  // We are just nesting the component in the Provider
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, iniitialState);

    // actions === {addBlogPost: (dispatch) => {return () => {}}}
    // all actions will be dynamically stored in boundActions
    const boundActions = {};
    for (let key in actions) {
      // key === 'addBlogPost' (video 132 More Automattic Context Creation)
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return {
    Context,
    Provider,
  };
};
