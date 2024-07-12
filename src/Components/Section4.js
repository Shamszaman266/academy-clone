import React from "react";

function Section4() {
  return (
    <div>
      <div class="final_reward_container">
        <div class="reward_won_wrapper"></div>
        <div class="timer_container_x6">
          <div class="timer_container_1x">
            <div class="timer_container_1xur">
              <div class="timer_container_1xur01">
                <i class="bi bi-clock-history">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg>
                </i>
              </div>
              "Rewards unlocks in"
            </div>
            <hr />
            <div class="timer_container_1xur01nthlast">
              <img
                src="/assets/dotBg.png"
                class="timer_container_child_img"
                alt="dot background"
              />
              <div class="timer_container_last_child">
                <h3>00</h3>
                <p>Days</p>
              </div>
              <div class="timer_container_last_child">
                <h3>02</h3>
                <p>Hrs</p>
              </div>
              <div class="timer_container_last_child">
                <h3>28</h3>
                <p>Mins</p>
              </div>
              <div class="timer_container_last_child">
                <h3>55</h3>
                <p>Sec</p>
              </div>
            </div>
          </div>
          <div class="final_reward_x6x4">
            <img src="/assets/finalreward.png" class="final_award_image" />
            <div class="final_reward_type">Lucky Draw</div>
            <div class="final_reward_info"  >
              <div>Exclusive Community</div>
              <span style={{display:"flex", marginTop:"-12px", gap:"8px"
              }}> 
                <img src="/assets/discord.SVG" />
                <p>Earndrop</p>
              </span>
            </div>
            <hr class="custom_hr_1"></hr>
            <div class="final_reward_steps">
              <div style={{display:"flex", justifyContent:"space-between", marginBottom:"10px"}}>
              <div>Complete all Essential quests </div>
              <div class="quest_complete_tick">
                <i class="bi bi-check2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
</svg>
                </i>
                </div>
              </div>
              <div style={{display:"flex" ,justifyContent:"space-between"}}> 
              <div>Complete atleast 1 Alpha Hub quest today</div>
              <div class="quest_complete_tick">
                <i class="bi bi-check2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
</svg>
                </i>
                </div>
              </div>
            </div>

           
             
            

            <div class="final_reward_claim_button">
              <div>Claim Now</div>
              <img src="/assets/arrow-right.SVG" style={{ opacity: ".6" }} />
            </div>

            <img src="reward-info-path.SVG" class="final_reward_info_path" />

            <div class="reward_details_container">
              <div class="reward_details_header">
                "Reward info"
                <i class="bi bi-info-circle ml-1"></i>
              </div>
              <div class="reward_details_body">
                <p>
                  <span>
                    Free access to paid KOL(crypto earning) communities!
                  </span>
                </p>
                <br />
                <p>
                  "Win access to exclusive earning communities of some of the
                  the greatest earners in crypto for a month, every 24 hours.
                  Get access to unmatched insights, a close-knit community of
                  the best airdrop earners, and more."
                </p>
                <br />
                <p>
                  "To win: make sure you've connected your Twitter and Discord
                  accounts - and follow our criteria!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Section4;
