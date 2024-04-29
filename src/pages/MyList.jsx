import { useContext, useEffect, useState } from "react";
import { TravelContext } from "../Provider/TravelProvider";
import Swal from "sweetalert2";

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

  const handleDelete = id=>{
    
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://assignment-10-server-woad-theta.vercel.app/traveldata/${id}`,{
                method: 'DELETE'
               })
               .then(res=>res.json())
               .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your travel data has been deleted.",
                        icon: "success"
                      });
                }
               })
         
        }
      });
  }

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
               <button className="btn bg-green-500">Update</button>
               </td>
               <td>
               <button onClick={()=>handleDelete(data._id)} className="btn bg-red-600 text-white">X</button>
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
