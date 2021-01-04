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
            <div className="row">
              <h1>Local Events </h1>
              <i class="bi bi-person-circle"></i>

            </div>

          </div>
        </div>

      </div>
     
    </div>
  );
}
export default Home;
