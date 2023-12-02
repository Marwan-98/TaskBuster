import { Location } from "react-router-dom";

export const getCurrentDirectory = (location: Location) => {
    const { pathname } = location;
    const lastSlashIndex = pathname.lastIndexOf('/');

    return pathname.substring(lastSlashIndex + 1);
}
