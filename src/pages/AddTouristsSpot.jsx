

const AddTouristsSpot = () => {
  const handleAddTourists = e =>{
    e.preventDefault();
    console.log('this button got connected')
    const form = e.target;
    const spotName = form.spotName.value
    const countryName = form.countryName.value;
    const location = form.location.value;
    const season = form.season.value;
    const averageCost = form.averageCost.value;
    const travelDuration = form.travelDuration.value;
    const totalVisitorPerYear = form.totalVisitorPerYear.value;
    const email = form.email.value;
    const name = form.name.value;
    const shortDescription = form.shortDescription.value;
    const photoURL = form.photoURL.value;
    const vehicle = form.vehicle.value;



    const userTravelData = {name,email,spotName,countryName,location,season,averageCost,travelDuration,totalVisitorPerYear,shortDescription,photoURL,vehicle}
    console.log(userTravelData);

    //send travel data to the server
    fetch('http://localhost:5000/traveldata',{
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(userTravelData)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
  }

  return (
    <div className="text-center md:mt-9 mt-3">
      <h1 className="md:text-4xl text-2xl font-bold">
        Add your preferred tourists spot
      </h1>
      <div className="md:mt-4 mt-2 ">
        <form onSubmit={handleAddTourists} className="grid grid-cols-1 gap-3 md:grid-cols-2 mx-14 md:mx-64 bg-slate-200 md:p-10 p-4 rounded-xl">
          <input
            type="text"
            name="spotName"
            placeholder="Spot name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="countryName"
            placeholder="Country Name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="season"
            placeholder="Preferred season"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="averageCost"
            placeholder="Average Cost"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="travelDuration"
            placeholder="Travel Duration"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="totalVisitorPerYear"
            placeholder="Total yearly visitor"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            placeholder="your mail"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="name"
            placeholder="your name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="shortDescription"
            placeholder="Short Description"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="photoURL"
            placeholder="your photo URL"
            className="input input-bordered w-full max-w-xs"
          />
          <input
           type="text"
           name="vehicle"
            placeholder="flight or train"
            className=" input input-bordered w-full max-w-xs"
          />
          <input
            type="submit"
           value='Add'
            className=" md:ml-36 bg-primary text-white input input-bordered w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
