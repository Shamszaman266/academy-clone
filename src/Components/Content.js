import React from "react";

function Content() {
  return (
    <div>
        <div class="wrapper" style={{position:"relative"}}>
          <img class="header-img" src="/assets/bgimg.png" alt="intact-academy-bg"/>

          <div class="ia_hero" style={{ top: "42%" }}>
            <div class="ia_logoContainer">
              <img
                class="ia_header_logo"
                src="/assets/mainLogo.gif"
                alt="intract-academy-logo"
              />
             
            </div>

            <div class="ia_hero_text">
                <p>
                  <span>Inrtact users</span>
                  "have together made more than"
                  <span>$100 million</span>
                  "in web3"
                  <br />
                  "Join them and"
                  <span>learn how to earn crypto!</span>
                </p>
                <div class="mt-5">
                  <div class="primary-button-container">
                    <div class="fill-effect"></div>
                    <div class="primary-button">
                      <span>Get Started</span>
                      <img src="/assets/arrow-right.SVG" style={{maxWidth:"100%"}}/>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      
    </div>
  );
}

export default Content;
