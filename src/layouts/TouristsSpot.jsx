import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TouristsSpot = () => {
  const [spotsData, setSpotsData] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-woad-theta.vercel.app/traveldata")
      .then((res) => res.json())
      .then((data) => {
        setSpotsData(data);
      });
  }, []);

  const slicedData = spotsData.slice(0, 6);

  return (
    <>
      <div className="mt-5 mx-8">
        <h1 className="text-center text-4xl mt-4 font-bold mb-4">
          Explore our fancy places
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {slicedData.map((data) => (
            <div
              key={data._id}
              className="hero min-h-screen bg-base-200 rounded-xl"
            >
              <div className="hero-content flex-col lg:flex-row ">
                <div className="flex-1">
                  <img
                    src={data.photoURL}
                    className="w-[500px] h-[400px]  rounded-lg shadow-2xl"
                  />
                </div>
                <div className="flex-1 space-y-5">
                  <h1 className="text-5xl font-bold"> {data.spotName} </h1>
                  <p className="text-2xl font-bold text-slate-400">
                    Average Cost : {data.averageCost}
                  </p>
                  <p className="text-2xl font-bold text-slate-400">
                    Total visitors per year : {data.totalVisitorsPerYear}
                  </p>

                  <p className="text-2xl font-bold text-slate-400">
                    Travel Time :{data.travelDuration}
                  </p>

                  <p className="text-2xl font-bold text-slate-400">
                    Seasonality : {data.season}
                  </p>
                  <Link to={`/travelDetails/${data._id}`}>
                    <button className="btn btn-primary w-full">
                      View details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TouristsSpot;
