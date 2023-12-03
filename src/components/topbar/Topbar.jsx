import React from "react";
import "./topbar.css";
import { Add, DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Dashboard</span>
        </div>

        <div className="topRight">

          <Link to="/newUser" className="link">
                <div className="topbarIconContainer">
                  <Add />
                </div>
          </Link>
          
          
        </div>
      </div>
      
    </div>
    
    
  );
}
