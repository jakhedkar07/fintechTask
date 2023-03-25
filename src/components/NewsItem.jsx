import React, { useEffect } from "react";
import "./news.css";
import News from "./News";

export default function NewsItem() {
  return (
    <div className="pt-5">
      <center>
        <h2 className="heading">Curated News</h2>
        <p className="headings">
          Get all the latest share market and India stock market news and
          updates.
        </p>
      </center>
      <center>
        <div
          className="row mt-5"
          style={{
            backgroundColor: "#14213d",
            width: "100%",
            justifyContent: "center",
            borderRadius: "10px",
            backgroundColor: "aliceblue",
            textAlign: "center",
          }}
        >
          <div className="col-lg-5 col-md-12 col-sm-12 section m-3">
            <h3>Economy News</h3>
            <News />
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 section m-3">
            <h3>Corporate News</h3>
          </div>
        </div>
      </center>
    </div>
  );
}
