import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateTravelDetails = () => {
    const currentData = useLoaderData()
    const {_id,name,email,spotName,countryName,location,season,averageCost,travelDuration,totalVisitorPerYear,shortDescription,photoURL,vehicle} = currentData;
       

    const handleUpdateTourists = e =>{
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
    
    const updatedData = {name,email,spotName,countryName,location,season,averageCost,travelDuration,totalVisitorPerYear,shortDescription,photoURL,vehicle}
    console.log(updatedData);
      
    
        //send travel data to the server
        fetch(`https://assignment-10-server-woad-theta.vercel.app/traveldata/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your travel data has been updated",
                showConfirmButton: false,
                timer: 2000
              });
            }
        })
      }

    return (
        <div className="text-center md:mt-9 mt-3">
      <h1 className="md:text-4xl text-2xl font-bold">
      Update Travel Data

      </h1>
      <div className="md:mt-4 mt-2 ">
        <form onSubmit={handleUpdateTourists} className="grid grid-cols-1 gap-3 md:grid-cols-2 mx-14 md:mx-64 bg-slate-200 md:p-10 p-4 rounded-xl">
          <input
            type="text"
            name="spotName"
            placeholder="Spot name"
            defaultValue={spotName}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="countryName"
            placeholder="Country Name"
            defaultValue={countryName}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            defaultValue={location}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="season"
            placeholder="Preferred season"
            defaultValue={season}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="averageCost"
            placeholder="Average Cost"
            defaultValue={averageCost}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="travelDuration"
            placeholder="Travel Duration"
            defaultValue={travelDuration}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="totalVisitorPerYear"
            placeholder="Total yearly visitor"
            defaultValue={totalVisitorPerYear}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            placeholder="your mail"
            defaultValue={email}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="name"
            placeholder="your name"
            defaultValue={name}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="shortDescription"
            placeholder="Short Description"
            defaultValue={shortDescription}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="photoURL"
            placeholder="your photo URL"
            defaultValue={photoURL}
            className="input input-bordered w-full max-w-xs"
          />
          <input
           type="text"
           name="vehicle"
            placeholder="flight or train"
            defaultValue={vehicle}
            className=" input input-bordered w-full max-w-xs"
          />
          <input
            type="submit"
            value='Update Travel data'
            className=" md:ml-36 bg-primary text-white input input-bordered w-full max-w-xs"
          />
        </form>
      </div>
    </div>
    );
};

export default UpdateTravelDetails;