import './Student.css';

import MyComponent from './MyComponent';
import  AttendanceTable from  './AttendanceTable';



const Students= () => {
  function add(name){
        alert("ATTENDANCE SUMBITED SUCCESFULLY")
  }
      
    
  return (
    <div>
      <h1 class="a">Kumaraguru collage of technology</h1>
      <br/>
      < MyComponent />
      < AttendanceTable />
      <br />
      <button  onClick={() =>add('name')} class="m" type="submit">SUMBIT</button>
      
      
  


    </div>
  
  
        );

}


  export default Students;