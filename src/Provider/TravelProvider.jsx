import { createContext } from "react";


export const TravelContext = createContext(null);

const TravelProvider = ({children}) => {

    // Create User


    const TravelInfo = {
        name: 'shawn',
        home : 'Comilla'
    }
    return (
        <TravelContext.Provider value={TravelInfo}>
            {children}
        </TravelContext.Provider>
    );
};

export default TravelProvider;