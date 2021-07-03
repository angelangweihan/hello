import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>News</span>
              <h3>Latest News</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/1.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Ng, Weihan Angela</a>
                    <span>03 July 2021</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Hello World!
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/1.jpg)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                        <p className="date">
                            By <a href="#">Ng, Weihan Angela</a>
                            <span>03 July 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Hello World!
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Hello world! I am Weihan, a computing science and music
                            students. Welcome to my website and thank you for reading
                            my first blog post :)
                          </p>
                          <p>
                            I'm testing my paragraph function!
                          </p>
                          <p>
                            Looks like it works well :)
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              I'm testing my quote function :)
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>
                            Looks like it all works fine :)
                          </p>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

          
        </ul>
      </div>
    </>
  );
};

export default News;
