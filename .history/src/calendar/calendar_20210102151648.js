// import React, { useState } from 'react';
// import DatePicker from 'react-date-picker';
 
// function MyApp() {
//   const [value, onChange] = useState(new Date());
 
//   return (
//     <div>
//       <DatePicker
//         onChange={onChange}
//         value={value}
//         isOpen={true}
//         disabled={true}
//       />
//     </div>
//   );
// }
// export default MyApp;
import React, { useState } from 'react';
import Calendar from 'react-calendar';
 
function MyApp() {
  const [value, onChange] = useState(new Date());
 
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default MyApp;