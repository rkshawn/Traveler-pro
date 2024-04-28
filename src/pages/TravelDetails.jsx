import { useLoaderData } from "react-router-dom";

const TravelDetails = () => {
    const detailsData = useLoaderData()
   const  {spotName,countryName,location,season,averageCost,travelDuration,totalVisitorPerYear,shortDescription,photoURL} = detailsData;
    return (
        <div className="flex md:mx-10 mt-10 bg-slate-300 md:p-14 rounded-lg justify-between items-center gap-5">
             <div className="flex-1">
                  <img className="md:w-[500px] md:h-[500px] rounded-xl" src={photoURL} alt="" />
             </div>
             <div className="space-y-2 flex-1">
                <p className="text-3xl font-bold">Spot Name : {spotName}</p>
                <p className="text-2xl font-bold">Country : {countryName} </p>
                <p className="text-2xl font-bold">Location : {location}</p>
                <p className="text-2xl font-bold">Average Cost : {averageCost}</p>
                <p className="text-2xl font-bold">Season:{season}</p>
                <p className="text-2xl font-bold">Travel Time: {travelDuration} </p>
                <p className="text-2xl font-bold">Total Visitor {totalVisitorPerYear} </p>
                <p className="text-2xl font-bold">Description:{shortDescription} </p>
             </div>
        </div>
    );
};

export default TravelDetails;