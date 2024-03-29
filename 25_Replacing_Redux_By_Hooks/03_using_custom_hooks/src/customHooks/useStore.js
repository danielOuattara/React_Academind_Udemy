import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export function useStore(isShouldListen = true) {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (isShouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (isShouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, isShouldListen]);

  return [globalState, dispatch];
}

export function initStore(userAction, initialState) {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userAction };
}
