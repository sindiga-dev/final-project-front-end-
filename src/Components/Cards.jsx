import React, { useState, useEffect } from "react";
import AvailableNannies from "./AvailableNannys";
import Search from "./Search";
import DropDownBar from "./DropDownBar";

export default function Cards() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetch("https://bbcare.onrender.com/caregivers")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data)
        setSearchData(data)
      });
  }, [])

  // console.log(searchData);
  // console.log(data);

  const change = (event) => {
    setData(searchData.filter(data => data
      .username.toLowerCase()
      .includes(event.target.value.toLowerCase())));
    }
      
  //   const filterToData = data.filter(data =>
  //     data.username.toLowerCase()
  //     .includes(searchData.toLowerCase()))
  // console.log(data)

  
  return (
    <>
      <Search change={change} />
      <DropDownBar />
      <h1 className="text-center text-gray-800 text-3xl">
        Our Available Caregivers
      </h1>
      <div className="relative mx-auto mt-4 md:w-4/5 lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 grid-rows-auto gap-x-10 row-gap-4.5 md:px-0 lg:px-0 md:gap-y-10">
        {/* {data.filter((data) =>data.first_name.toLowercase().includes(searchData.toLowerCase())) */}
           {data.map((data)=>{
           return(<AvailableNannies key={data.id} data={data} />)})
        }
      </div>
    </>
  );
}
