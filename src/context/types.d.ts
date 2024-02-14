// ConsentCookieContext.d.ts

export interface StateType {
  [key: string]: string | boolean; // Erweitert um boolesche Werte zu unterstützen
  showBanner?: boolean; // Optional, falls nicht für jeden Zustand relevant
}

export interface ContextType {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}

export interface ConsentCookieProviderProps {
  children: React.ReactNode;
}

export type ActionType =
  | {
      type: "SET_COOKIE";
      payload: {
        name: string;
        value: string;
      };
    }
  | {
      type: "SHOW_BANNER";
    }
  | {
      type: "HIDE_BANNER";
    };
