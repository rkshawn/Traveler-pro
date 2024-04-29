import { useContext, useEffect, useState } from "react";
import { TravelContext } from "../Provider/TravelProvider";

const MyList = () => {
    const [loadedData,setLoadedData] = useState([]);
const {user} = useContext(TravelContext)
console.log(user)
console.log(loadedData)

useEffect(()=>{
    fetch('https://assignment-10-server-woad-theta.vercel.app/traveldata')
    .then(res=>res.json())
    .then(data=>{
        setLoadedData(data)
    })
},[]);

const authorizedData = loadedData.filter(data =>data.email === user.email)
  console.log(authorizedData)



  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
             
              <th>Spot Name</th>
              <th>Country</th>
              <th>Location</th>
             
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            authorizedData.map(data=> <tr key={data._id}>
            
                <td> {data.spotName} </td>
                <td> {data.countryName}  </td>
                <td>{data.location}</td>
               <td>
               <button className="btn">Update</button>
               </td>
               <td>
               <button className="btn bg-red-600 text-white">X</button>
               </td>
              </tr>)
           }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
