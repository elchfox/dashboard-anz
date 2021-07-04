import React from 'react';
import {NavLink} from "react-router-dom";
import {  useObserver } from "mobx-react";

const Topbar = props => {


  
    
    return  useObserver(()=>
    <div className={"row-between top-bar align-center"}>
        <div className={"row align-center"}>
            <img src={"https://static.vecteezy.com/system/resources/previews/001/191/987/original/circle-logo-png.png"} alt={"logo"}/>
            <ul  className={"row align-center"}>
                <li><NavLink activeClassName='is-active' to="/Home">Dashboard</NavLink></li>
                <li><NavLink activeClassName='is-active' to="/Apps">Apps</NavLink></li>
                <li><NavLink activeClassName='is-active' to="/Reports">Reports</NavLink></li>
                <li><NavLink activeClassName='is-active' to="/Manage">Manage</NavLink></li>
            </ul>
        </div>    
        <div  className={"row align-center"}>
            <span>check@gmail.com</span>
            <img src={"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"} alt={"logo"}/>

        </div>
    </div>
    );
};





export default Topbar;