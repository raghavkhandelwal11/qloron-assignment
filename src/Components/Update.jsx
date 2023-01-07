
import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';



const Insert = () => {
    const itemNumber = useRef();
    const heading= useRef();
    const content = useRef();
    const category = useRef();
    const date = useRef();
    
    const update = () => {
        let data = JSON.parse(localStorage.getItem("allData"));

        let f1 = parseInt(itemNumber.current.value);
        let f2 = heading.current.value;
        let f3 = content.current.value;
        let f4 = category.current.value;
        let f5 = date.current.value;

        if(f2 == "" || f3 == "" || f4 == "" || f5 == "") {
            alert("all fields are required");
            return;
        }

        for(let i=0; i<data.length; i++) {
            if(f1 == data[i].ItemNumber) {
                data[i].Heading = f2;
                data[i].content = f3;
                data[i].category = f4;
                data[i].date = f5;
            }

            localStorage.setItem("allData", JSON.stringify(data));
            break;
        }


       
        alert("data added");
        return;
       
    } 


  return (
      <div style={{padding: "10%"}}>
          <h1>Insert A New Document</h1>
          <label htmlFor="">Enter the Item Number you want to edit</label>  <br />
          <input type="number" ref={itemNumber} required/> <br /><br />
          

          <label htmlFor="">Heading</label>  <br />
          <input type="text" ref={heading}/> <br /><br />
          

          <label htmlFor="">Content</label>  <br />
          <input type="text" ref={content}/> <br /><br />
          

          <label htmlFor="">Category</label>  <br />
          <input type="text" ref={category}/> <br /><br />
          

          <label htmlFor="">Date</label>  <br />
          <input type="date" ref={date}/> <br /><br />

          <button onClick={update}>Update</button> <br /><br />

          <Link to="/crud">back</Link>
          

      </div>
    
  )
}

export default Insert;