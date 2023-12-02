import { viewOptionsType } from "./localStorage.config";

export const setLocalViewOptions = (value: Record<string, viewOptionsType>) => {
    const newViewOptions = {
        ...value
    }

    localStorage.setItem('viewOptions',JSON.stringify(newViewOptions));
    return newViewOptions;
}


export const getLocalViewOptions = (activeView: string) => {
    const savedViewOptions = localStorage.getItem('viewOptions');

    if(savedViewOptions && !activeView) {
        const parsedViewOptions = JSON.parse(savedViewOptions);
        return parsedViewOptions;
    }

    if (savedViewOptions && JSON.parse(savedViewOptions)[activeView]) {
        const parsedViewOptions = JSON.parse(savedViewOptions);
        return parsedViewOptions;
    }

    return false;
}