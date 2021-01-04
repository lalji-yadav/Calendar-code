import React from 'react';
import "./Home.css";
import MyApp from "./calendar";
 
function Home() {
  
  return (
    <div className="main">
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 calendar">
             <MyApp />
          </div>
          <div className="col-sm-6">

          </div>
        </div>

      </div>
     
    </div>
  );
}
export default Home;
