import { useContext } from "react";
import { TravelContext } from "../Provider/TravelProvider";

const AllTouristSpot = () => {
    const {} = useContext(TravelContext);
    return (
        <div>
            <h1>This is all tourists Spot</h1>
           
        </div>
    );
};

export default AllTouristSpot;