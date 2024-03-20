// import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import RandomDataTable from "./RandomDataTable";

const Home = () => {
  const navigate = useNavigate();
  return (

    <>
    {
      localStorage.getItem('login1')?.length > 0 ?
        <div style={{backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
          <RandomDataTable numRows={8}/>
          <button type="button" className="btn btn-secondary" onClick={() => { localStorage.removeItem('login1'); navigate('/login'); }}>Logout</button>
        </div>
        : null
    }
  </>
  
  )
}

export default Home