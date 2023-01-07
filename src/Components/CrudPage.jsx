import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CrudPage = () => {
    const navigate = useNavigate();
  return (
    <div style={{padding: "10%"}}>
        <h1>Choose One</h1>
       
            <button onClick={() => {navigate("/search")}}>Search By Index</button> <br /> <br />
            <button onClick={() => {navigate("/insert")}}>Insert New Document</button> <br /><br />
            <button onClick={() => {navigate("/update")}}>Update By Index</button> <br /> <br />
            <button onClick={() => {navigate("/delete")}}>Delete By Index</button> <br /> <br />

            <Link to="/">back</Link>
            
       
    </div>
  )
}

export default CrudPage