import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import data from "../order.json";

const ByLine = () => (
  <div className="text-sm pt-6">
    <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate">Sort By</h3>
  </div>
);


export const SidebarOrder = () => {
    const [dtOrder, setDtOrder] = React.useState(false);
    const [starOrder, setStarOrder] = React.useState(false);

    const changeDtOrder =()=>{
        if (dtOrder === true){
          setDtOrder(false) ;
          data.date = false;
    
        }else{
          setDtOrder(true) ;
          setStarOrder(false);
          data.date = true;
          data.star = false;
        }
      }
    
      const changeStarOrder =()=>{
        if (starOrder === true){
          setStarOrder(false) ;
          data.star = false;
    
        }else{
          setStarOrder(true) ;
          setDtOrder(false);
          data.star = true;
          data.date = false;
        }
      }
    
  return (
    <div>
        <ByLine />
        <div >
          {data.date === true && (
            <button  style={{ border: '1px solid #555'}} className="true" onClick={changeDtOrder}  > Order Date</button>
          )}
           {data.date === false && (
            <button className="false" onClick={changeDtOrder}  > Order Date</button>
          )}          
        </div>
        <br />
        <div>
          {data.star === true &&(
            <button style={{ border: '1px solid #555'}} className="true" onClick={changeStarOrder} > Order Star </button>
          )}
          {data.star === false &&(
            <button className="false" onClick={changeStarOrder} > Order Star </button>
          )}
        </div>
      
    </div>
  );
};