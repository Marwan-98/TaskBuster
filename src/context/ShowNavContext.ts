import { createContext } from 'react';

export type ShowNavContextType = {
  showNav: boolean;
  setShowNav: (showNav: boolean) => void;
};


export const ShowNavContext = createContext<ShowNavContextType | null>(null);
