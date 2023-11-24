import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="title">React Table</div>
      <div className="cards">
        <div className="para1">
          In first page the table is in many slides and we can scroll to next
          pages using buttons in the page
          <Link to={"/pages/1"} className="linksToPage">
            page 1
          </Link>
        </div>
        <div className="para2">
          In first page the table is in a single slide, all the information is
          shown in a slingle page
          <Link to={"/pages/2"} className="linksToPage">
            Page 2
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
