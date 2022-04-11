import React from "react";
const names = ['Alex', 'John', 'Arun', 'Aravind', 'Hemanth'];
const users=[{id:"1",name:"alex",age:"24",role:'developer'},{id:"2",name:"max",age:"25",role:'developer'}]
const Demo = () => {
  return (
   <>
   <div style={{textAlign:'center'}}>
     <h1 >TASK TWO</h1>
     <h3 >Array Filter Method</h3>
     <h3 >Array data ['Alex', 'John', 'Arun', 'Aravind', 'Hemanth']</h3>
   <div>
   <h4>ArrayFilter</h4>
      {names.filter(name => name.includes('A')).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))}
    </div>
    <h3>Maping Array of data</h3>
    <div>
      {users.map((item)=>(
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </div>
   </div>
   
   </>
   
  );
};

export default Demo;
