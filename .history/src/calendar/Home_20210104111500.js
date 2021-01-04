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

            <div style={{float:"right", paddingTop:"1%"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
             <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
             <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
            </svg>
            </div>

            <div className="row" style={{paddingTop:"4%"}}>
               <div className="col-sm-5" style={{border:"1px solid red"}}>
                 <div className="row">
                 <h1 style={{color:"white", fontSize:"2vw"}}>Local Events </h1>
               <svg  style={{margin:"5% 0% 0% 3%"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-search" viewBox="0 0 16 16">
               <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
               </svg>
                 </div>
               </div>
               <div className="col-sm-7" style={{border:"1px solid red", paddingTop:"3%"}}>
               <hr style={{marginTop:"10px"}} />

               </div>
              
            </div>

            <div className="row">
          <div className="col-sm-5 row" style={{color:"white", fontSize:"0.9vw"}}>
            <div className="col-sm-4">
             <p>Upcoming</p>
            </div>
            <div className="col-sm-4">
              <p>Papular</p>
            </div>
            <div className="col-sm-4">
              <p>Newest</p>
            </div>

             {/* Carosal design  */}
          </div>

          <div className="tablebox">

            <p> 1 November </p>
                <table  style={{width:"100%", fontSize:"1vw", border:"1px solid red"}}>
      
                    <tbody>
                      <tr style={{padding:"20px", border:"1px solid green"}}>
                        <td style={{padding:"5px"}}>05.00 |</td>
                        <td>Outdoor</td>
                        <td>form</td>
                        <td>free</td>
                        <td>Nov-dec ...</td>
                      </tr>
                      <tr>
                        <td>05.00 |</td>
                        <td>Outdoor</td>
                        <td>form</td>
                        <td>$10</td>
                        <td>Nov-dec ...</td>
                      </tr>
                      <tr>
                        <td>05.00 |</td>
                        <td>Outdoor</td>
                        <td>form</td>
                        <td>$15</td>
                        <td>Nov-dec ...</td>
                      </tr>
                    </tbody>
                  </table>

                  <p> 2 November </p>
                  <table  style={{width:"100%", fontSize:"1vw", border:"1px solid red"}}>
      
                    <tbody>
                      <tr>
                        <td>05.00 |</td>
                        <td>Outdoor</td>
                        <td>form</td>
                        <td>free</td>
                        <td>Nov-dec ...</td>
                      </tr>
                      <tr>
                        <td>05.00 |</td>
                        <td>Outdoor</td>
                        <td>form</td>
                        <td>$10</td>
                        <td>Nov-dec ...</td>
                      </tr>
                      <tr>
                        <td>05.00 |</td>
                        <td>Outdoor</td>
                        <td>form</td>
                        <td>$15</td>
                        <td>Nov-dec ...</td>
                      </tr>
                    </tbody>
                  </table>
             </div>

        </div>

          </div>
          
        </div>

      </div>
     
    </div>
  );
}
export default Home;
