import React from "react";

const Header =  ( {data} ) => {
    return (
        <div className="head">
            <div className="logo bg-c-pink">
                <div className="search-bar flx-wrp bg-c-pink res-cntre">
                    <a className="bg-c-pink" href="#"><img className="bg-c-pink" src={data.fashionFlowIcon} alt="Fashion Flow" /></a>
                    <div className="search">
                        <input type="search" className="search-box bg-c-pink col-outline" />
                        <img className="bg-c-pink" src={data.searchIcon} alt="Search" />
                    </div>
                    <div className="login-mode bg-c-pink">
                        <a className="login bg-c-pink" href="#">
                            {data.log} <img src={data.loginIcon} alt={data.log} />
                        </a>
                        <a className="mode bg-c-pink" href="#">
                            {data.mode} <img className="bg-c-pink" src={data.modeChangeIcon} alt={data.mode} />
                        </a>
                    </div>
                </div>
            </div>
            <ul className="nav-bar flx-gp-32 flx-wrp">
                {
                    data.navBar.map( (el, i) => {
                        return (
                            <li key={i}>
                                <a className={(el === 'home'? "txt-upper pink-col f-wt" : "u-list-item txt-upper")} href="#">{el}</a>
                            </li>
                        );
                    } )
                }
            </ul>
        </div>
    );
  }
  
  export default Header
  