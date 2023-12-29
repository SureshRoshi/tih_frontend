import React from "react";

function LatestPosts() {
  return (
    <>
      <div className="bg-grey pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="post-module-3">
                <div className="widget-header-1 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Latest posts</h5>
                </div>
                <div className="loop-list loop-list-style-1">
                  <article className="hover-up-2 transition-normal wow fadeInUp animated">
                    <div className="row mb-40 list-style-2">
                      <div className="col-md-4">
                        <div className="post-thumb position-relative border-radius-5">
                          <div
                            className="img-hover-slide border-radius-5 position-relative"
                            style={{
                              backgroundImage:
                                "url(assets/imgs/tech/tech-post-1.jpg)",
                            }}
                          >
                            <a className="img-link" href="/"></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 align-self-center">
                        <div className="post-content">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <a href="#">
                              <span className="post-cat text-primary">
                                Technology
                              </span>
                            </a>
                          </div>
                          <h5 className="post-title font-weight-900 mb-20">
                            <a href="/">
                              Mastering Machine Learning: A Comprehensive Guide
                            </a>
                          </h5>
                          <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                            <span className="post-on">15 January</span>
                            <div className="voting-icons mt-20">
                              <button className="upvote-btn">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-caret-up-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                                </svg>
                              </button>
                              <span className="votes-count">28</span>
                              <button className="downvote-btn">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-caret-down-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z" />
                                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="hover-up-2 transition-normal wow fadeInUp animated">
                    <div className="row mb-40 list-style-2">
                      <div className="col-md-4">
                        <div className="post-thumb position-relative border-radius-5">
                          <div
                            className="img-hover-slide border-radius-5 position-relative"
                            style={{
                              backgroundImage:
                                "url(assets/imgs/tech/tech-post-2.jpg)",
                            }}
                          >
                            <a className="img-link" href="/"></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 align-self-center">
                        <div className="post-content">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <a href="/">
                              <span className="post-cat text-primary">
                                Technology
                              </span>
                            </a>
                          </div>
                          <h5 className="post-title font-weight-900 mb-20">
                            <a href="/">
                              The Future of Artificial Intelligence: Trends and
                              Developments
                            </a>
                          </h5>
                          <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                            <span className="post-on">15 October</span>
                            <div className="voting-icons mt-20">
                              <button className="upvote-btn">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-caret-up-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                                </svg>
                              </button>
                              <span className="votes-count">15</span>
                              <button className="downvote-btn">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-caret-down-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z" />
                                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="hover-up-2 transition-normal wow fadeInUp animated">
                    <div className="row mb-40 list-style-2">
                      <div className="col-md-4">
                        <div className="post-thumb position-relative border-radius-5">
                          <div
                            className="img-hover-slide border-radius-5 position-relative"
                            style={{
                              backgroundImage:
                                "url(assets/imgs/tech/tech-post-3.png)",
                            }}
                          >
                            <a className="img-link" href="/"></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 align-self-center">
                        <div className="post-content">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <a href="/">
                              <span className="post-cat text-primary">
                                Technology
                              </span>
                            </a>
                          </div>
                          <h5 className="post-title font-weight-900 mb-20">
                            <a href="/">
                              Exploring the Latest Innovations in Mobile
                              Technology
                            </a>
                          </h5>
                          <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                            <span className="post-on">12 November</span>
                            <div className="voting-icons mt-20">
                              <button className="upvote-btn">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-caret-up-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                                </svg>
                              </button>
                              <span className="votes-count">20</span>
                              <button className="downvote-btn">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-caret-down-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z" />
                                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="hover-up-2 transition-normal wow fadeInUp animated">
                    <div className="row mb-40 list-style-2">
                      <div className="col-md-4">
                        <div className="post-thumb position-relative border-radius-5">
                          <div
                            className="img-hover-slide border-radius-5 position-relative"
                            style={{
                              backgroundImage:
                                "url(assets/imgs/tech/tech-post-4.jpg)",
                            }}
                          >
                            <a className="img-link" href="/"></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 align-self-center">
                        <div className="post-content">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <a href="/">
                              <span className="post-cat text-primary">
                                Technology
                              </span>
                            </a>
                          </div>
                          <h5 className="post-title font-weight-900 mb-20">
                            <a href="/">
                              The Future of Quantum Computing: Exploring Its
                              Possibilities
                            </a>
                          </h5>
                          <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                            <span className="post-on">5 October</span>
                            <div className="voting-icons mt-20">
                              <button className="upvote-btn">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-caret-up-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                                </svg>
                              </button>
                              <span className="votes-count">15</span>
                              <button className="downvote-btn">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-caret-down-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z" />
                                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="pagination-area mb-30 wow fadeInUp animated">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="elegant-icon arrow_left"></i>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        04
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="elegant-icon arrow_right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-4">
              <div className="widget-area">
                <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                  <div className="widget-header-1 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Most popular</h5>
                  </div>
                  <div className="post-block-list post-module-1">
                    <ul className="list-post">
                      <li className="mb-30 wow fadeInUp animated">
                        <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="/">
                                Leveraging the Power of JavaScript: A
                                Developer's Guide
                              </a>
                            </h6>
                            <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                              <span className="post-on">15 October</span>
                            </div>
                          </div>
                          <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="/">
                              <img
                                src="assets/imgs/tech/dev-thumb-1.jpg"
                                alt="Tech Thumbnail"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="mb-30 wow fadeInUp animated">
                        <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="/">
                                Exploring the Latest Trends in Web Development:
                                A Developer's Perspective
                              </a>
                            </h6>
                            <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                              <span className="post-on">25 September</span>
                            </div>
                          </div>
                          <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="/">
                              <img
                                src="assets/imgs/tech/dev-thumb-2.jpg"
                                alt="Tech Thumbnail"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="mb-30 wow fadeInUp animated">
                        <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="/">
                                Mastering Productivity: A Tech Enthusiast's
                                Guide to Efficient Work
                              </a>
                            </h6>
                            <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                              <span className="post-on">18 September</span>
                            </div>
                          </div>
                          <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="/">
                              <img
                                src="assets/imgs/tech/dev-thumb-3.jpg"
                                alt="Tech Thumbnail"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="wow fadeInUp animated">
                        <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="/">
                                Tech Leaders Navigate the Challenges of Emerging
                                Viral Threats
                              </a>
                            </h6>
                            <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                              <span className="post-on">21 September</span>
                            </div>
                          </div>
                          <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="/">
                              <img
                                src="assets/imgs/tech/dev-thumb-4.jpg"
                                alt="Tech Thumbnail"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestPosts;
