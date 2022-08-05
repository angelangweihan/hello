import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import NavBar from "./NavBar"

const Portfolio = () => {
  return (
    <>
      <div className="leftpart">
        <NavBar />
      </div>

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div className="container">
              <SimpleReactLightbox>
                <div className="tokyo_tm_portfolio">
                  <div className="tokyo_tm_title">
                    <div className="title_flex">
                      <div className="left">
                        <span>Music Portfolio</span>
                        <h3>Music Compositions</h3>
                      </div>
                    </div>
                  </div>
                  {/* END TOKYO_TM_TITLE */}
                  <div className="portfolio_filter">
                    <Tabs>
                      <TabList>
                        <Tab>All</Tab>
                        <Tab>Ensemble</Tab>
                        <Tab>Solo</Tab>
                        <Tab>Multimedia</Tab>
                        <Tab>Pop</Tab>
                      </TabList>
                      {/* END TABLIST */}
                      <div className="list_wrapper">
                        <SRLWrapper>
                          <TabPanel>
                            <ul className="portfolio_list">
                              <li>
                                <p> <b>2021, Can You Hear My Voice</b> <br/>
                                  <br/>
                                  A piece written in support of cancer patients in Singapore
                                  All royalty and profites generated from streams will be donated
                                  to the Singapore Cancer Society. <br/> 
                                  <br/>
                                  Can You Hear My Voice is written as a pop piece, but eventually
                                  presented as an instrumental DAW track due to the ongoing Covid-19
                                  pandemic which does not allow for singing in public.<br/>
                                  <br/>
                                  <iframe src="https://open.spotify.com/embed/track/36AJj2qZg4FBIlrwseBhRR" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                  <br/>

                                </p> 
                              </li>
                              {/* END */}
                              <li>
                                <p> <b>2021, 생활</b> <br/>
                                  <br/>
                                  생활 means “to subsist”. As a composer who is also a videographer, 
                                  I wanted to create a work that integrates sound with visuals, and 
                                  to turn what is seen to what is heard and vice-versa.  This work 
                                  explores how everyday sounds and happenings can be brought into the 
                                  soundscape, in unique and surprising ways. At the same time, the 
                                  work endeavours to portray the idea behind the piece through 
                                  symbolistic development of visual and audio motifs.<br/>
                                  <br/>
                                  <iframe width="560" height="80" src="https://www.youtube.com/embed/xF_EpFz8SAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                  <br/>
                                </p>
                              </li>
                              {/* END */}
                              <li>
                                <p> <b>2020, 「美」</b> <br/>
                                  <br/>
                                  The music explores the use of polyphonic 
                                  stratification (a structure common to Gamelan music) in Western contemporary 
                                  classical music. The entirety of the piece is built on the core melody that 
                                  is first introduced in the 2nd bar, spanning across 16 crotchet beats. The 
                                  title “美”, meaning beautiful, hopes to bring listeners through different 
                                  moods and feelings of beauty in the unfolding of the piece. Besides the 
                                  rhythmic influences of Gamelan music, the piece is also influenced by the 
                                  oriental pentatonic scale. The use of extended instrumental techniques 
                                  can also be seen in certain parts of the piece, to add colours to the sound.<br/>
                                  <br/>
                                  <iframe width="560" height="80" src="https://www.youtube.com/embed/3b81t04c434" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                  <br/>
                                </p>
                              </li>
                              {/* END */}
                              <li>
                                <p> <b>2020, The Words I Tried To Say</b> <br/>
                                  <br/>
                                  A piece about grief and self-destruction. The Words I Tried to Say is the lament 
                                  of a stoic person, refusing to admit that there was something wrong with her heart.
                                  Upon receiving atrocious results to an examination she gave her all to, she could 
                                  no longer live normally. The piece is a recount of seven moments and/or events 
                                  between 22 February 2019 and 22 February 2020 that are etched in her. From indulging 
                                  in melancholy to finding solace through prayers and contemplating on the meaning 
                                  of life, the piece is but an authentic collection of thoughts and feelings unspoken.
                                  </p><br/>
                                  <br/>
                                  <iframe width="560" height="80" src="https://www.youtube.com/embed/xF_EpFz8SAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                  <br/>
                              </li>
                              {/* END */}
                              <li>
                                <p> <b>2019, Metamorphosis</b> <br/>
                                  <br/>
                                  A piece about my music-making journey: the struggles, the joys and the fulfilment. <br/>
                                  <br/>
                                  The piece was written as part of the Young Siew Toh Conservatory of Music's Young
                                  Composers Academy, under the guidance of the YSTCM faculty. <br/>
                                  <br/>
                                  Recording by the Wu Xian Ensemble.<br/>
                                  <br/>
                                  <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/677528961&color=474747"></iframe>
                                  <br/>
                                </p>
                              </li>
                              {/* END */}
                            </ul>
                            {/* END PORTFOLIO LIST */}
                          </TabPanel>
                          {/* END ALL GALLERY */}

                          <TabPanel>
                            <ul className="portfolio_list">
                              <li>
                                <div className="inner">
                                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                                    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/677528961&color=474747"></iframe>
                                  </div>
                                </div>
                              </li>
                              {/* END SOUNDCLOUD */}
                            </ul>
                            {/* END PORTFOLIO LIST */}
                          </TabPanel>
                          {/* END ENSEMBLE GALLERY */}

                          <TabPanel>
                            <ul className="portfolio_list">
                              <li>
                                <div className="inner">
                                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                                    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/807587560&color=%233b3b3b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                                  </div>
                                </div>
                              </li>
                              {/* END SOUNDCLOUD */}
                            </ul>
                            {/* END PORTFOLIO LIST */}
                          </TabPanel>
                          {/* END SOLO GALLERY */}

                          <TabPanel>
                            <ul className="portfolio_list">
                              <li>
                                <div className="inner">
                                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0GNoe0WapQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                  </div>
                                </div>
                              </li>
                              {/* END YOUTUBE */}
                              <li>
                                <div className="inner">
                                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xF_EpFz8SAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                  </div>
                                </div>
                              </li>
                              {/* END YOUTUBE */}
                            </ul>
                            {/* END PORTFOLIO LIST */}
                          </TabPanel>
                          {/* END MULTIMEDIA GALLERY */}

                          <TabPanel>
                            <ul className="portfolio_list">
                              <li>
                                <div className="inner">
                                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                                    <iframe src="https://open.spotify.com/embed/track/36AJj2qZg4FBIlrwseBhRR" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                  </div>
                                </div>
                              </li>
                              {/* END SPOTIFY */}
                            </ul>
                            {/* END PORTFOLIO LIST */}
                          </TabPanel>
                          {/* END POP GALLERY */}
                        </SRLWrapper>
                        {/* END TABPANEL */}
                      </div>
                      {/* END LIST WRAPPER */}
                    </Tabs>
                  </div>
                </div>
              </SimpleReactLightbox>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
