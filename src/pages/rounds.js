import React, { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import 'bootstrap/dist/css/bootstrap.min.css';

const Rounds = () => {
  const course = [
    { label: "Delapre" , value: 1 },
    { label: "Abbey Hill" , value: 2 },
    { label: "Overstone " , value: 3 },
  ];

useEffect(() => {
  fetch('http://192.168.0.5:3000/api/data/')
    .then((response) => {
      if (response.ok) {
      return response.json();
    }
    throw response; 
})
}, []);

  return (
    <div>
      <h1>
        Golf rounds.
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Select options={ course } />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};
  
export default Rounds;