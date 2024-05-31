import React, { createContext, useReducer, useContext } from 'react';

const EventContext = createContext();

const initialState = {
  events: [],
};

const eventReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case 'JOIN_EVENT':
      return {
        ...state,
        events: state.events.map((event, index) =>
          index === action.payload ? { ...event, currentQuota: event.currentQuota + 1 } : event
        ),
      };
    default:
      return state;
  }
};

export const EventProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventReducer, initialState);

  return (
    <EventContext.Provider value={{ state, dispatch }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => useContext(EventContext);
