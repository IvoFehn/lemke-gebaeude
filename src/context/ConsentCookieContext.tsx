import React, { createContext, useContext, useReducer } from "react";
import {
  StateType,
  ContextType,
  ConsentCookieProviderProps,
  ActionType,
} from "./types.d";

const initialState: StateType = {
  showBanner: false, // Standardmäßig zeigen wir das Banner
};

const ConsentCookieContext = createContext<ContextType | undefined>(undefined);

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "SET_COOKIE":
      // Logik zum Setzen des Cookies bleibt gleich
      return { ...state, [action.payload.name]: action.payload.value };
    case "HIDE_BANNER":
      // Verberge das Banner
      // Der Zustand für showBanner muss korrekt initialisiert werden
      return { ...state, showBanner: false };
    case "SHOW_BANNER":
      // Verberge das Banner
      // Der Zustand für showBanner muss korrekt initialisiert werden
      return { ...state, showBanner: true };
    default:
      return state;
  }
};

export const ConsentCookieProvider: React.FC<ConsentCookieProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ConsentCookieContext.Provider value={{ state, dispatch }}>
      {children}
    </ConsentCookieContext.Provider>
  );
};

export const useConsentCookie = (): ContextType => {
  const context = useContext(ConsentCookieContext);
  if (!context) {
    throw new Error(
      "useConsentCookie must be used within a ConsentCookieProvider"
    );
  }
  return context;
};
