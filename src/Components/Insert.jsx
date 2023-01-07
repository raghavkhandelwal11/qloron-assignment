
import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';



const Insert = () => {
    const itemNumber = useRef();
    const heading= useRef();
    const content = useRef();
    const category = useRef();
    const date = useRef();
    
    const insert = () => {
        let data = JSON.parse(localStorage.getItem("allData"));

        let f1 = itemNumber.current.value;
        let f2 = heading.current.value;
        let f3 = content.current.value;
        let f4 = category.current.value;
        let f5 = date.current.value;

        if(f1 == "" || f2 == "" || f3 == "" || f4 == "" || f5 == "") {
            alert("all fields are required");
            return;
        }

        const newData = {
            ItemNumber: f1,
            Heading: f2,
            content: f3,
            category: f4,
            date: f5
        }

        data.push(newData);

        localStorage.setItem("allData", JSON.stringify(data));
        alert("data added");
        return;
    } 


  return (
      <div style={{padding: "10%"}}>
          <h1>Insert A New Document</h1>
          <label htmlFor="">Enter the Item Number you want</label>  <br />
          <input type="text" ref={itemNumber}/> <br /><br />
          

          <label htmlFor="">Heading</label>  <br />
          <input type="text" ref={heading}/> <br /><br />
          

          <label htmlFor="">Content</label>  <br />
          <input type="text" ref={content}/> <br /><br />
          

          <label htmlFor="">Category</label>  <br />
          <input type="text" ref={category}/> <br /><br />
          

          <label htmlFor="">Date</label>  <br />
          <input type="date" ref={date}/> <br /><br />

          <button onClick={insert}>Add</button> <br /><br />
          <Link to="/crud">back</Link>
          

      </div>
    
  )
}

export default Insert;