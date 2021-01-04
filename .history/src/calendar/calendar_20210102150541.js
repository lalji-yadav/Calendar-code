import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
 
function MyApp() {
  const [value, onChange] = useState(new Date());
 
  return (
    <div>
      <DatePicker
        onChange={onChange}
       
        isOpen={true}
      />
    </div>
  );
}
export default MyApp;