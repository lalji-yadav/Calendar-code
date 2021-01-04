import React from 'react';
import "./Home.css";
import MyApp from "./calendar";
 
function Home() {
  
  return (
    <div className="main">
      <div className='container'>
        <div className="row">
          <div className="col-sm-5 calendar">
             <MyApp />
          </div>
          <div className="col-sm-7">

          </div>
        </div>

      </div>
     
    </div>
  );
}
export default Home;
