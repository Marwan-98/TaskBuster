import { createContext } from 'react';

interface IShowNav {
    showNav: boolean;
    setShowNav: (task: boolean) => void;
}

export const ShowNavContext = createContext<IShowNav | null>(null);
