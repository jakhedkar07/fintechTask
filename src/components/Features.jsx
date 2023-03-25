import React from "react";
import "./features.css";
import one from "../picture/one.png";
import two from "../picture/two.png";
import third from "../picture/third.png";

const Features = () => {
  return (
    <div className="parent">
      <h2 className="heading">Here's how Estockpark helps you</h2>
      <p className="headings">
        Estockpark is a revolutionary equity research tool that provides you
        with the three-way assisstance for Intelligent stock picking
      </p>
      <center>
        <hr
          className="mt-5"
          style={{ color: "aliceblue", width: "200px", textAlign: "center" }}
        />
      </center>
      <div className="row " style={{ width: "100%" }}>
        <div className="col-6 one-i ps-5">
          <h5>1.Stock Analysis</h5>
          <h3>Get every information you need.Right Away!</h3> <br />
          <p>
            Analyzing stocks is a serious affair and with Ticker you get
            one-stop destination for cutting-edge stock research. Our stock
            analysis platform provides a sophisticated yet simple interface that
            you would be impressed with while carrying out your stock analysis.
            <br />
            <br />
            • Comprehensive Data and Research <br />
            • Flexible and Customizable to Suit Your Needs <br />• Simple
            Interface That's Very Easy to Use
          </p>
        </div>
        <div className="col-6 one-ii">
          <img className=" pt-5" src={one} alt="" srcset="" />
        </div>
      </div>
      <div className="row pt-5" style={{ width: "100%" }}>
        <div className="col-6 two-i">
          <img className=" pt-5" src={two} alt="" srcset="" />
        </div>
        <div className="col-6 two-ii pt-5">
          <h5>2.Peer Comparison</h5>
          <h3>Refine your Industry love and Pick the best Performing peer.</h3>
          <br />
          <p>
            Compare the companies operating in the same industry and choose the
            best amongst the lot with Peer Comparison. A detailed comparison of
            similar companies will help you make a better decision Ticker gives
            you an edge when it comes to peer comparison. <br />
            <br />
            • Intricately Detailed Data <br />
            • Compare Three Companies at a Time <br />• Industry-Wise Suggested
            Parameters
          </p>
        </div>
      </div>
      <div className="row " style={{ width: "100%" }}>
        <div className="col-6 one-i ps-5">
          <h5>3.Bundles</h5>
          <h3>Some Strategies to Help you Get started!</h3> <br />
          <p>
These are baskets of stocks shortlisted using proven investment strategies. These assortments of
companies are based on predefined criteria that help you choose stocks based on your own investment
strategy. And, if you already haven't thought about a strategy, don't worry. Bundles will help you select
one. <br /> <br />
• Options to Suit Different Investing Styles <br />
• Daily Updates Based on Market Behavior <br />
• Robust Parameters Crafted by Experts
          </p>
        </div>
        <div className="col-6 one-ii">
          <img className=" pt-5" src={third} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
