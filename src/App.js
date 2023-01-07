import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import CrudPage from "./Components/CrudPage";
import Search from "./Components/Search";
import allData from "./MOCK_DATA.json";
import Insert from "./Components/Insert";
import Delete from "./Components/Delete";
import Update from "./Components/Update";

function App() {


  useEffect(() => {
    if(allData.length != 0) {
      localStorage.setItem("allData", JSON.stringify(allData));
    }
  }, [])

  return (
    <BrowserRouter>
    <h1 style={{padding: "50px 10%"}}>Welcome, Click below to perform CRUDs</h1>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/crud" element={<CrudPage/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/insert" element={<Insert/>} />
      <Route path="/delete" element={<Delete/>} />
      <Route path="/update" element={<Update/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
