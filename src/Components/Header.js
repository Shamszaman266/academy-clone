import React from "react";

const Header = () => {
  return (
    <div>
      <header class="Header" style={{ zIndex: 1000 }}>

      <section class = "section1" style={{ maxWidth: '1284px' }}>

        <div class="navbarContent">

          <a aria-current="page">
            <img src="/assets/logo.SVG"/>
          </a>
           
        <div class="nav-1"> <a href="" class="nav-1">Compass</a></div>
         <div class ="nav-1"> <a href="" className="nav-1">Explore</a></div>
         <div class ="nav-1"> <a href="" class="nav-1">Academy</a></div>
         <div class ="nav-1"> <a href="" class="nav-1">NFts</a></div>
         <div class ="nav-1"><a href="" class="nav-1">For Projects</a></div> 

        <div class = "searchbar">
         <div class="searchbarContent">
         <input type="text" placeholder="Search for ecosystems, trending quest etc." class="searchbar-input"/>
         </div>
        
         </div>
         <img src="/assets/broadcast.SVG"/>
        <div class="" style={{backgroundColor:"white" }}><span class="button-btn">Sign  In</span></div>
        </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
