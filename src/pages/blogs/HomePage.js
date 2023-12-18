import React from "react";

function HomePage() {
  return (
    <>
      {/* <div className="text-center fw-bold p-5 m-5 display-5">
        Explore the World of <br />{" "}
        <span style={{ color: "#5869DA" }}>Torry Insight Hub </span>
      </div> */}
      <main className="bg-grey pb-30">
        <div className="container pt-30">
          <div className="featured-slider-3 position-relative">
            <div className="slider-3-arrow-cover"></div>
            <div className="featured-slider-3-items">
              <div className="slider-single overflow-hidden border-radius-10">
                <div className="post-thumb position-relative">
                  {/*  */}
                  <div
                    className="thumb-overlay position-relative"
                    style={{
                      background:
                        "url(assets/imgs/hero-tech/hero-tech-1.png) center/cover no-repeat",
                    }}
                  >
                    <div className="post-content-overlay">
                      <div className="container">
                        <div className="entry-meta meta-0 font-small mb-20">
                          <a href="/" tabIndex="0">
                            <span className="post-cat text-info text-uppercase">
                              Technology
                            </span>
                          </a>
                          <a href="/" tabIndex="0">
                            <span className="post-cat text-warning text-uppercase">
                              Development Tips
                            </span>
                          </a>
                        </div>
                        <h1 className="post-title mb-20 font-weight-900 text-white">
                          <a className="text-white" href="/" tabIndex="0">
                            Enhancing Code Quality: Best Practices for
                            Developers
                          </a>
                        </h1>
                        <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                          <span className="post-on">26 August 2023</span>
                          <span className="hit-count has-dot">2k Views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="slider-single overflow-hidden border-radius-10">
                <div className="post-thumb position-relative">
                  <div
                    className="thumb-overlay position-relative"
                    style={{
                      background:
                        "url(assets/imgs/hero-tech/hero-tech-2.jpg) center/cover no-repeat",
                    }}
                  >
                    <div className="post-content-overlay">
                      <div className="container">
                        <div className="entry-meta meta-0 font-small mb-20">
                          <a href="/" tabIndex="0">
                            <span className="post-cat text-info text-uppercase">
                              Technology
                            </span>
                          </a>
                          <a href="/" tabIndex="0">
                            <span className="post-cat text-warning text-uppercase">
                              Tech Exploration
                            </span>
                          </a>
                        </div>
                        <h1 className="post-title mb-20 font-weight-900 text-white">
                          <a className="text-white" href="/" tabIndex="0">
                            The Impact of Artificial Intelligence on Future
                            Technologies
                          </a>
                        </h1>
                        <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                          <span className="post-on">15 September 2023</span>
                          <span className="hit-count has-dot">2.3k Views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="slider-single overflow-hidden border-radius-10">
                <div className="post-thumb position-relative">
                  <div
                    className="thumb-overlay position-relative"
                    style={{
                      background:
                        "url(assets/imgs/hero-tech/hero-tech-3.png) center/cover no-repeat",
                    }}
                  >
                    <div className="post-content-overlay">
                      <div className="container">
                        <div className="entry-meta meta-0 font-small mb-20">
                          <a href="/" tabIndex="0">
                            <span className="post-cat text-warning text-uppercase">
                              Tech Tips
                            </span>
                          </a>
                        </div>
                        <h1 className="post-title mb-20 font-weight-900 text-white">
                          <a className="text-white" href="/" tabIndex="0">
                            Mastering Git: Best Practices for Software
                            Development
                          </a>
                        </h1>
                        <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                          <span className="post-on">15 September 2023</span>
                          <span className="hit-count has-dot">1.7k Views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="slider-single overflow-hidden border-radius-10">
                <div className="post-thumb position-relative">
                  <div
                    className="thumb-overlay position-relative"
                    style={{
                      background:
                        "url(assets/imgs/hero-tech/hero-tech-4.jpg) center right/cover no-repeat",
                    }}
                  >
                    <div className="post-content-overlay">
                      <div className="container">
                        <div className="entry-meta meta-0 font-small mb-20">
                          <a href="/" tabIndex="0">
                            <span className="post-cat text-info text-uppercase">
                              Technology
                            </span>
                          </a>
                          <a href="/" tabIndex="0">
                            <span className="post-cat text-warning text-uppercase">
                              Health in Tech
                            </span>
                          </a>
                        </div>
                        <h1 className="post-title mb-20 font-weight-900 text-white">
                          <a className="text-white" href="/" tabIndex="0">
                            The Impact of a Healthy Work Environment on
                            Developer Productivity
                          </a>
                        </h1>
                        <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                          <span className="post-on">22 September 2023</span>
                          <span className="hit-count has-dot">1.6k Views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
