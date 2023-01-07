import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const toCrudPage = () => {
        navigate('/crud');
    }


  return (
    <div style={{padding: "10%"}}>
        <button onClick={toCrudPage} style={{padding: "5px 20px", border: "none", backgroundColor: "black", color: "white"}}>Perform CRUD operation</button>
    </div>
  )
}

export default Home;