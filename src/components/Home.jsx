import React from "react";
import Social from "./Social";
import NavBar from "./NavBar"

const Home = () => {
  return (
    <>
      <div className="leftpart">
        <NavBar />
      </div>

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_home">
                <div className="home_content">
                  <div className="avatar">
                    <div
                      className="image avatar_img"
                      style={{
                        backgroundImage: "url(assets/img/slider/5.jpg)",
                      }}
                    ></div>
                    {/* END AVATAR IMAGE */}
                  </div>
                  {/* END AVATAR */}
                  <div className="details">
                    <h3 className="name">Ng, Weihan Angela</h3>
                    <p className="job">
                      Computing Science and Music (as separate majors)<br/>
                      Senior Hons: University of Glasgow <br/>
                      Junior Hons: Seoul National University
                    </p>
                    {/* END JOB */}
                    <Social />
                  </div>
                  {/* END DETAILS */}
                </div>
                {/* END HOME CONTENT */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
