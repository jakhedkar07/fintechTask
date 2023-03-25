import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className=" main">
      <footer className='main'>
        <div className="container pt-5 mt-5 main">
          <div className="row main">

            <div className="col-3 f main">
              <ul className="footer-links main">
                <li className='main'>
                  <a href="/" className='main' style={{textDecoration:"none", fontWeight:"bold", fontSize:"18px"}}>Home</a>
                </li>
                <li className='main'>
                  <a href="/contact" className='main' style={{textDecoration:"none"}}>Contact Us</a>
                </li>
                <li className='main'>
                  <a href="/privacy-policy" className='main' style={{textDecoration:"none"}}>Privacy Policy</a>
                </li>
              </ul>
              </div>
              <div className="col-3 f main">
              <ul className="footer-links main">
                <li className='main'>
                  <a href="/" className='main' style={{textDecoration:"none", fontWeight:"bold", fontSize:"18px"}}>Company</a>
                </li>
                <li className='main'>
                  <a href="/contact" className='main' style={{textDecoration:"none"}}>About us</a>
                </li>
                <li className='main'>
                  <a href="/privacy-policy" className='main' style={{textDecoration:"none"}}>Privacy </a>
                </li>
                <li className='main'>
                  <a href="/privacy-policy" className='main' style={{textDecoration:"none"}}>Contact us </a>
                </li>
                <li className='main'>
                  <a href="/privacy-policy" className='main' style={{textDecoration:"none"}}>Careers </a>
                </li>
              </ul>
            </div>
            <div className="col-3 f main">
              <ul className="footer-links main">
                <li className='main'>
                  <a href="/" className='main' style={{textDecoration:"none",fontWeight:"bold", fontSize:"18px"}}>Stock Market</a>
                </li>
                <li className='main'>
                  <a href="/contact" className='main' style={{textDecoration:"none"}}>Markets</a>
                </li>
                <li className='main'>
                  <a href="/privacy-policy" className='main' style={{textDecoration:"none"}}>IPO</a>
                </li>
                <li className='main'>
                  <a href="/privacy-policy" className='main' style={{textDecoration:"none"}}>Stocks Directory</a>
                </li>
              </ul>
            </div>
            <div className="col-3 f main">
              <ul className="footer-links main">
                <li className='main'>
                  <a href="/" className='main' style={{textDecoration:"none",fontWeight:"bold", fontSize:"18px"}}>Help</a>
                </li>
                <li className='main'>
                  <a href="/contact" className='main' style={{textDecoration:"none"}}>Feedback</a>
                </li>
                <li className='main'>
                  <a href="/privacy-policy" className='main' style={{textDecoration:"none"}}>Support</a>
                </li>
                <li className='main'>
                  <a href="/privacy-policy" className='main' style={{textDecoration:"none"}}>FAQ</a>
                </li>
              </ul>
            </div>
            <center className='main'><p>Copyright &copy; 2020 Fintech Company. All Rights Reserved.</p></center>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;