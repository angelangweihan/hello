import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image">
          <img src="assets/img/slider/1.jpg" alt="about" />
        </div>
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Ng, Weihan Angela</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Weihan, otherwise also known as Angela, is a Computing Science and Music student at the 
                University of Glasgow. "Aren't music and computing science really disparate subjects?" 
                she is often asked. Certainly, she finds great joy in interdisciplinary studies. Pursuing 
                her interests in contrasting fields has enabled her to not only see the interconnectedness 
                of various fields our society, but also how the knowledge in each of these fields interweave 
                to form a complete whole.
                <br/>
                <br/>
                Musically, Weihan is most interested in composing music that explores tonality and timbre, 
                as well as algorithmic and stochastic music. She takes pride in being an arts-science student 
                who finds joy in learning the science of music. She also loves to write music based on self-written 
                poems and photographs that she has captured. These works are quiet introspections (though arguably 
                  noisy too!) of her otherwise hectic life. Most lately, three compositions of hers were published 
                in the University of California (Los Angeles) Music Library under the 2020 Kaleidoscope call for 
                scores. She has also had her research in Music as Medicine published in the Stanford Journal of 
                Science, Technology and Society by Stanford University and was also invited to present her research 
                in the Let’s Talk About [X] academic conference by the University of Glasgow.
                <br/>
                <br/>
                Her career in Technology, on the other hand, is defined by her enriching experiences with various 
                agencies. Weihan first delved into robotics through her internship with AIS Cube (Singapore) in JC, 
                where she had the opportunity to teach the basics of robotics to secondary school students. After 
                her Singapore-Cambridge 'A' Levels, she joined DSO National Laboratories as a research intern, and 
                in her 2nd year of university, Morgan Stanley as a Spring Intern. These experiences have shown her 
                the applications of technology in the real-world.
                <br/>
                <br/>
                As described by her university lecturers as being “an articulate, ambitious and self-driven student”, 
                Weihan is also a recipient of multiple Ministry of Education (Singapore) Edusave Awards, the Defence 
                Science and Technology Junior College Scholarship, the Radboud University Scholarship for Summer 
                Exchange and the University of Glasgow GoAbroad Scholarship. She currently holds the positions 
                of President of the Glasgow University Tech Society and Treasurer and Sponsorships Director of the 
                United Kingdom Singapore Students’ Council.
                <br/>
                <br/>
                With an inquisitive mind, Weihan hopes to pursue a career in research.
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Age:</span>20
                  </p>
                </li>
                <li>
                  <p>
                    <span>Lived In:</span>Singapore, Glasgow
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="ng_weihan@outlook.com">ng_weihan@outlook.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>2019/21:</span>University of Glasgow
                  </p>
                </li>
                <li>
                  <p>
                    <span>2021/22:</span>Seoul National University
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div className="description_wrap scrollable">
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Computing Skills</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Discrete Mathematics</span>
                        <span className="number">A1</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{width: 95 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Algorithms & Data Structure</span>
                        <span className="number">A2</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 90 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Human Computer Interaction</span>
                        <span className="number">A1</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 95 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Language Skills</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">English</span>
                        <span className="number">Advanced</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 95 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Chinese</span>
                        <span className="number">Advanced</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 80 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Korean</span>
                        <span className="number">Beginner-Intermediate</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 40 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3>Other Skills</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>Prototyping</h3>
                      <span>Adobe XD, Figma</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>Microsoft</h3>
                      <span>Word, Powerpoint, Excel</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>Analytics</h3>
                      <span>Google Analytics</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
