import React from 'react';
import './style.css';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg p-3 fixed-top">
        <div className="container-fluid sticky-top " style={{backgroundColor:"#09152d"}}>
          <a className="navbar-brand" href="#" style={{fontWeight:"bold", color: "aliceblue",fontSize:"30px",backgroundColor:"#09152d"}}>Estockpark</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={{backgroundColor:"#09152d",color:"aliceblue"}} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#" style={{backgroundColor:"#09152d",color:"aliceblue",paddingLeft:"15px", paddingRight:"20px",fontSize :"20px"}}>Social</a>
              </li>
              <form className="d-flex" role="search" style={{backgroundColor:"#09152d",color:"aliceblue"}}>
              <input className="form-control me-2" type="search" placeholder="Search stocks, indices, mutual funds..." aria-label="Search" style={{borderRadius:"25px", width:"300px"}}></input>
            </form>
            </ul>
            <ul style={{backgroundColor:"#09152d",color:"aliceblue"}}>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle mt-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"#09152d",color:"aliceblue"}} >
                  Login
                </a>
            <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
             </li>
             </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar ;