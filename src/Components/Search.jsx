
import React, {useState} from 'react';
import { Link } from 'react-router-dom';



const Search = () => {
    const [searchResult, updateSearchResult] = useState({});
    const [index, updateIndex] = useState(-1);
    
    const search = () => {
        const data = JSON.parse(localStorage.getItem("allData"));
        if(data && data.length != 0 && data.length > index) {
            updateSearchResult(data[index])
        }
    } 


  return (
      <div style={{padding: "10%"}}>
          <h1>Search By Index</h1>
          <label htmlFor="">Enter the Index you want to check</label>  <br />
          <input type="number" onChange={(e) => {updateIndex(parseInt(e.target.value))}}/>
          <button onClick={search}>Check</button>
          <br /><br />
          <Link to="/crud">back</Link>

        

          <p>{JSON.stringify(searchResult)}</p>
      </div>
    
  )
}

export default Search;