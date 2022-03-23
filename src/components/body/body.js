import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from "../box/box.js";
import "./body.css";

function Body() {
  const [data, setData] = useState([]);
  const [totaldata,setTotalData] = useState([]);
  const [error,setError] = useState("None");
  const [url,setUrl] = useState("https://api.coinstats.app/public/v1/coins?skip=0&limit=100");

  const handleChange = (e,value) => {
    //console.log(value);
    const start = (value-1)*20;
    const end = start + 20;
    setData(totaldata.slice(start,end));
  }
  useEffect(() => {
    axios.get(url).then(
      (response) => {
        setTotalData(response.data.coins);
        setData(response.data.coins.slice(0,20));
      }
    ).catch((error) => {
      console.log(error);
      setError("error");
    });
  }, []);
  if(error==="None"){
    return (
      <div className="body">
        <div>
          {
            data.map((obj) => {
              return (<Box data={obj} key={obj.id}/>);
            })
          }
        </div>
        <br />
        <div className="pagination">
            <Pagination count={5} size="large" color="primary" onChange={handleChange}/>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="ErrState">
        <h2>Some Error Occured !</h2>
        <h2>Please Refresh the Page and Try Again !!</h2>
      </div>
    );
  }
}

export default Body;
