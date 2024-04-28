import { Link, useLoaderData } from "react-router-dom";

const AllTouristSpot = () => {
  const travelsData = useLoaderData();
  

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 ">
         {
            travelsData.map(travelData=> <div key={travelData._id} className="hero p-10 min-h-screen bg-base-200">
            <div className=" flex-col lg:flex-row">
              <div className="flex-1">
                <img
                  src={travelData.photoURL}
                  className="w-[500px] h-[400px] rounded-lg shadow-2xl"
                />
              </div>
              <div className="flex-1 space-y-5">
                <h1 className="text-3xl font-bold">
                 Spot Name : {travelData.spotName}
                </h1>
                <p className="text-2xl font-bold text-slate-400">
                  Average Cost : {travelData.averageCost}
                </p>
                <p className="text-2xl font-bold text-slate-400">
                  Total visitors per year :{travelData.totalVisitorPerYear}
                </p>
  
                <p className="text-2xl font-bold text-slate-400">
                  Travel Time :{travelData.travelDuration}
                </p>
  
                <p className="text-2xl font-bold text-slate-400">
                  Seasonality :{travelData.season}
                </p>
  
               <Link to={`/travelDetails/${travelData._id}`}>
                   <button className="btn btn-primary w-full">View details</button>
               </Link>
              </div>
            </div>
          </div>)
         }
      </div>
    </>
  );
};

export default AllTouristSpot;
