
import React, {useState} from 'react';
import { Link } from 'react-router-dom';



const Delete = () => {
    const [searchResult, updateSearchResult] = useState({});
    const [index, updateIndex] = useState(-1);
    
    const search = () => {
        const data = JSON.parse(localStorage.getItem("allData"));
        if(data && data.length != 0 && data.length > index) {
            data.splice(index, 1);
            localStorage.setItem("allData", data);
            alert("item deleted");
            return;
        } else {
            alert("some alert occured");
            return;
        }
    } 


  return (
      <div style={{padding: "10%"}}>
          <h1>Delete By Index</h1>
          <label htmlFor="">Enter the Index you want to Delete</label>  <br />
          <input type="number" onChange={(e) => {updateIndex(parseInt(e.target.value))}}/>
          <button onClick={search}>Delete</button> <br /><br />
          <Link to="/crud">back</Link>

      </div>
    
  )
}

export default Delete;