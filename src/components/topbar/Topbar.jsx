import React from 'react';
import './Topbar.css';
import { NotificationsNone,Language,Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
          <div className="topbarWrapper">
              <div className="topLeft">
                 <span className="logo">Admin</span> 
              </div>
              <div className="topRight">
                <div className="topbarIconContainer">
                   <NotificationsNone /> 
                   <span className="topIconBadge">4</span>
                </div>
                <div className="topbarIconContainer">
                   <Language /> 
                   <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                   <Settings /> 
                </div>
                <img src="https://i1.wp.com/st.depositphotos.com/2101611/4338/v/450/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg" className="topAvatar"></img>
              </div>
          </div>  
        </div>
    )
}
