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
              <h1 style={{color:"white"}}>Local Events </h1>
              <i class="bi bi-person-circle"></i>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
  <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
</svg>

            </div>

          </div>
        </div>

      </div>
     
    </div>
  );
}
export default Home;
