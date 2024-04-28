const AllTouristSpot = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex-1">
          <img
            src="https://i.ibb.co/nLFKmWB/jonas-kool-EJGVd-CGHof8-unsplash.jpg
          "
            className="max-w-[500px] rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1 space-y-5">
          <h1 className="text-5xl font-bold">Paris saint german</h1>
          <p className="text-2xl font-bold text-slate-400">Average Cost : 200$</p>
          <p className="text-2xl font-bold text-slate-400">Total visitors per year : 20000</p>

          <p className="text-2xl font-bold text-slate-400">Travel Time : 7 days</p>

          <p className="text-2xl font-bold text-slate-400">Seasonality : Summer</p>

          <button className="btn btn-primary">View details</button>
        </div>
      </div>
    </div>
  );
};

export default AllTouristSpot;
