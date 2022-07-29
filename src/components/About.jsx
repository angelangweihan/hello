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
        {/* END ABOUT IMAGE */}
        <section class="section-education" id="education">
                <h3>Education & Achivements</h3>
                <br />
                <h4>University of Glasgow, Seoul National University</h4>
                <br/>
                <p>
                  <ul>
                    <li>MA Computing Science and Music</li>
                    <li>Achieved 4A+, 3A & 3A- in the 3rd academic year (Percentage score: 91.30/100)</li>
                  </ul>
                  <br/>
                  <b>Leadership Experiences</b>
                  <ul>
                    <li>2022-23 United Kingdom Singapore STEM Society Founder and President</li>
                    <li>2019-22 Glasgow University Tech Society Advisory, Former President, Vice-President, Committee Member</li>
                    <li>2020-22 United Kingdom Singapore Student Council Advisory, Former General Treasurer and Sponsorship Director</li>
                    <li>2019-20 First Year Representative of the University of Glasgow Student Representative Council</li>
                    <li>2019-20 Secretary of the Glasgow University Singapore Society</li>
                  </ul> 
                  <br/>
                  <b>Awards and Prizes</b>
                  <ul>
                    <li>2022 POLARIS Semiconductor Innovation Festival Seoul Nat'l Univ. represent, 장려상 Prize Winner</li>
                    <li>2021-22 Mitchell Family Travel Scholarship</li>
                    <li>2021-22 United Kingdom Government Turing Grant</li>
                    <li>2021-22 Singapore National Arts Council SEP Grant (Research)</li>
                    <li>2020-21 Prize of Best Individual Assessed Work</li>
                    <li>2019-20 Recipient of the Scottish Government Saltire Award for volunteering</li>
                    <li>2019-20 Recipient of the University of Glasgow GoAbroad Scholarship</li>
                    <li>2019-20 Recipient of the Singapore Global Network Certificate of Appreciation for the dedication and support to the Singaporean community during Covid-19</li>
                  </ul>
                </p>
              </section>
              <br/>
              <hr />
              <br/>
              <section class="section-research" id="research">
                <h3>Research & Publications</h3>
                <br/>
                <div>
                  <p>
                    Improving Deep-Learning-based Optical Music Recognition for Camera-based Inputs (2022)
                    <ul>
                      <li><i>(co-authored with Professor Xuan Truong Nguyen)</i></li>
                      <li>IEEE International Conference in Artificial Intelligence Circuits and Systems</li>
                      <li><a href="https://aicas2022.org/?page_id=188">Conference Website</a> | <a href="https://www.youtube.com/watch?v=714a6KSpiTg">Recorded Video</a></li>
                    </ul>
                    <br/>
                    Explainable Artificial Intelligence for Music (2022)
                    <ul>
                      <li><i>(worked slongside Prof. Wen-Syan Li, Prof. Jong hwa Park, Jisoo Park, Bjørn Are Therkelsen, Axel Rooth</i></li>
                      <li><a href="https://aml.gsds.snu.ac.kr/projectssubpages/xai-for-music">Project Website</a></li>
                    </ul>
                    <br/>
                    Composing Monumentality - An Analysis of the Concerto of Professor Bernard Tan (2022)
                    <ul>
                      <li><i>(Research Supervisor: Jun Kai Pow, funded by the Singapore National Arts Council)</i></li>
                      <li><a href="https://www.cssingapore.org/composing-monumentality/#:~:text=The%20Musical%20Compositions%20of%20Singapore's,a%20canon%20or%20standard%20repertory.">Project Website</a></li>
                    </ul>
                    <br/>
                    Healthycation [Application for Patent] (2021)
                    <ul>
                      <li><i>(co-invented with Professor Hwang Junseok, Jungwon Kong and Samnieng Tan)</i></li>
                    </ul>
                    <br/>
                    Literature Review on Music as Medicine: A literature review on the effectiveness of Mozart’s music on epilepsy (2020)
                    <ul>
                      <li><i>(co-authored with Sarah Yew Yen Yee)</i></li>
                      <li><a href="https://ojs.stanford.edu/ojs/index.php/intersect/article/view/1794">Publication Website</a></li>
                    </ul>
                    <br/>
                    Music Compositions A Prayer in Distress, Metamorphosis of Tuesday 17:00s at Mt. Sinai and The Rain published in the University of California (Los Angeles) Music Library (2020)
                    <ul>
                      <li><a href="https://escholarship.org/search/?q=author%3ANg%2C%20Weihan">Publication Website</a></li>
                    </ul>
                  </p>
                </div>
              </section>
              <br/>
              <hr />
              <br/>
              <section class="section-experiences" id="experiences">
                <h3>Experiences</h3>
                <br/>
                <h4>Infocomm Media Development Authority</h4>
                <br/>
                Digital Project Consultancy Intern <br />
                <div class="year">
                  <p>2022.06 - PRESENT</p>
                </div>
                <p>
                  <ul>
                    <li>Opportunities and trends: How can businesses leverage emerging technologies to thrive in the new normal</li>
                  </ul>
                </p>
                <br/>
                <h4>Seoul National University</h4>
                <br/>
                Undergraduate Research Assistant | Human Factors Psychology Lab <br />
                <div class="year">
                  <p>2022.01 - PRESENT</p>
                </div>
                <p>
                  <ul>
                    <li>Laboratory of Professor Sowon Hahn</li>
                    <li>Areas of research: Human-Robot Interaction, Smart Aging, Human-Vehicle Interaction, Affective Modeling</li>
                  </ul>
                </p>
                <br/>
                Winter Research Intern | POLARIS LOC <br />
                <div class="year">
                  <p>2021.12 - 2022.02</p>
                </div>
                <p>
                  <ul>
                    <li>Research in Optical Character Recognition in the Laboratory of Professor Xuan-Truong Nguyen</li>
                    <li>Specializing in Optical Music Recognition</li>
                  </ul>
                </p>
                <br/>
                Intern | International Student Association <br />
                <div class="year">
                  <p>2021.09 - 2021.12</p>
                </div>
                <p>
                  <ul>
                    <li>Assist in organizing university-wide events for international students, involving 30-50 students per event</li>
                    <li>Worked on marketing and designing online collaterals</li>
                  </ul>
                </p>
                <br/>
                <h4>YouthHarmony</h4>
                <br/>
                Chief Community Officer <br />
                <div class="year">
                  <p>2022.01 TO 2022.04</p>
                </div>
                <p>
                  <ul>
                    <li>No remuneration is provided for this undertaking</li>
                    <li>Planned, developed and headed events of YouthHarmony</li>
                    <li>Oversee the Music and External Projects Departments of close to 20 volunteers</li>
                  </ul>
                </p>
                <br/>
                Deputy Chief Executive Officer <br />
                <div class="year">
                  <p>2021.07 - 2021.12</p>
                </div>
                <p>
                  <ul>
                    <li>No remuneration is provided for this undertaking</li>
                    <li>Initiated and developed an outreach framework to extend YouthHarmony's reach to schools and the community</li>
                    <li>Handled discussions, negotiations and relations with about 10-20 important partners and sponsors</li>
                  </ul>
                </p>
                <br/>
                <h4>Other Experiences</h4>
                <br/>
                <p>
                  <ul>
                    <li>2021: Spring Technology Intern | Morgan Stanley (EMEA)</li>
                    <li>2020: Business Development Intern (Part-Time) | Praxium (Singapore)</li>
                    <li>2019: English-Mandarin Translator | BBC Scotland (Glasgow, United Kingdom)</li>
                    <li>Research Intern | DSO National Laboratories (Singapore)</li>
                  </ul>
                </p>
              </section>
              <br/>
              <hr />
              <br/>
              <section class="section-others" id="others">
                <h3>Other Involvements</h3>
                <br />
                <h4>Volunteering & Societies</h4>
                <br/>
                <p>
                  <ul>
                    <li>Global Village for Hope | Operations Director</li>
                    <li>Singapore Criminal Case Summary Repository | Web  Design Team Lead</li>
                    <li>Composers’ Society of Singapore | EXCO Member</li>
                    <li>Crescent Girls’ School Alumni Band</li>
                  </ul>
                </p>
              </section>

      </div>


      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
