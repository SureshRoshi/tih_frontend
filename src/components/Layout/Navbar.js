import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <div className="scroll-progress primary-bg" />
      <aside
        id="sidebar-wrapper"
        className="custom-scrollbar offcanvas-sidebar"
      >
        <button className="off-canvas-close">
          <i className="elegant-icon icon_close"></i>
        </button>
        <div className="sidebar-inner">
          <div className="sidebar-widget widget_categories mb-50 mt-30">
            <div className="widget-header-2 position-relative">
              <h5 className="mt-5 mb-15">Tech Trends</h5>
            </div>
            <div className="widget_nav_menu">
              <ul>
                <li className="cat-item cat-item-2">
                  <a href="/">Latest Gadgets</a>
                  <span className="post-count">30</span>
                </li>
                <li className="cat-item cat-item-3">
                  <a href="/">Software Development</a>
                  <span className="post-count">25</span>
                </li>
                <li className="cat-item cat-item-4">
                  <a href="/">Tech Reviews</a>
                  <span className="post-count">16</span>
                </li>
                <li className="cat-item cat-item-5">
                  <a href="/">Innovative Tech</a>
                  <span className="post-count">22</span>
                </li>
                <li className="cat-item cat-item-6">
                  <a href="/">Tech Lifestyle</a>
                  <span className="post-count">25</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="sidebar-widget widget-latest-posts mb-50">
            <div className="widget-header-2 position-relative mb-30">
              <h5 className="mt-5 mb-30">Don't miss</h5>
            </div>
            <div className="post-block-list post-module-1 post-module-5">
              <ul className="list-post">
                <li className="mb-30">
                  <div className="d-flex hover-up-2 transition-normal">
                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                      <a className="color-white" href="/">
                        <img src="/assets/imgs/tech/thumb-1.jpg" alt="Tech 1" />
                      </a>
                    </div>
                    <div className="post-content media-body">
                      <h6 className="post-title mb-15 text-limit-2-row font-medium">
                        <a href="/">
                          Exploring the Latest Innovations in Artificial
                          Intelligence
                        </a>
                      </h6>
                      <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                        <span className="post-on">15 September</span>
                        <span className="post-by has-dot">500 views</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-30">
                  <div className="d-flex hover-up-2 transition-normal">
                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                      <a className="color-white" href="/">
                        <img src="/assets/imgs/tech/thumb-2.jpg" alt="Tech 2" />
                      </a>
                    </div>
                    <div className="post-content media-body">
                      <h6 className="post-title mb-15 text-limit-2-row font-medium">
                        <a href="/">
                          The Future of Quantum Computing: A Deep Dive
                        </a>
                      </h6>
                      <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                        <span className="post-on">20 September</span>
                        <span className="post-by has-dot">700 views</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-30">
                  <div className="d-flex hover-up-2 transition-normal">
                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                      <a className="color-white" href="/">
                        <img src="/assets/imgs/tech/thumb-3.jpg" alt="Tech 3" />
                      </a>
                    </div>
                    <div className="post-content media-body">
                      <h6 className="post-title mb-15 text-limit-2-row font-medium">
                        <a href="/">
                          Advancements in Machine Learning: A Comprehensive
                          Overview
                        </a>
                      </h6>
                      <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                        <span className="post-on">25 September</span>
                        <span className="post-by has-dot">800 views</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <header className="main-header header-style-1 font-heading">
        <div className="header-top">
          <div className="container">
            <div className="row pt-20 pb-20">
              <div className="col-md-3 col-xs-6">
                <a href="/">
                  <img
                    className="logo"
                    src="/assets/imgs/theme/this_logo_innerpages.svg"
                    alt="logo"
                    height={"50px"}
                  />
                </a>
              </div>
              <div className="col-md-9 col-xs-6 text-end header-top-right">
                <button className="search-icon d-none d-md-inline">
                  <span className="mr-15 text-muted font-small">
                    <i className="elegant-icon icon_search mr-5"></i>Search
                  </span>
                </button>
                <div className="dark-light-mode-cover">
                  <a className="dark-light-mode" href="javascript:void(0)">
                    <span />
                  </a>
                </div>
                {loggedIn ? (
                  // token login, if token no anchor tag, else anchor tag
                  <Link
                    className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow"
                    to={"/login"}
                  >
                    Login
                  </Link>
                ) : (
                  <Link
                    className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow"
                    to={"/add-post"}
                  >
                    <span className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-plus-lg me-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>{" "}
                      <span>Post</span>
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="header-sticky">
          <div className="container align-self-center position-relative">
            <div className="mobile_menu d-lg-none d-block"></div>
            <div className="main-nav d-none d-lg-block float-start">
              <nav>
                <ul className="main-menu d-none d-lg-inline font-small">
                  <li>
                    <a href="/">Technology</a>
                  </li>
                  <li>
                    <a href="/">Development</a>
                  </li>
                  <li>
                    <a href="/">Programming</a>
                  </li>
                  <li>
                    <a href="/">Best Practices</a>
                  </li>
                  <li>
                    <a href="/">Reviews</a>
                  </li>
                  <li>
                    <a href="/">Innovation </a>
                  </li>
                  <li>
                    <a href="/">Professional Growth</a>
                  </li>
                  <li>
                    <a href="/">Industry Insights</a>
                  </li>
                </ul>
                <ul id="mobile-menu" className="d-block d-lg-none text-muted">
                  <li className="menu-item-has-children">
                    <a href="/">Tech Home</a>
                    <ul className="sub-menu text-muted font-small">
                      <li>
                        <a href="/">Tech News</a>
                      </li>
                      <li>
                        <a href="/">Development</a>
                      </li>
                      <li>
                        <a href="/">Programming</a>
                      </li>
                      <li>
                        <a href="/">Innovation</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/">Tech Categories</a>
                    <ul className="sub-menu font-small">
                      <li>
                        <a href="/">Tutorials</a>
                      </li>
                      <li>
                        <a href="/">Tools & Resources</a>
                      </li>
                      <li>
                        <a href="/">Tech Reviews</a>
                      </li>
                      <li>
                        <a href="/">Best Practices</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/">Tech Posts</a>
                    <ul className="sub-menu font-small">
                      <li>
                        <a href="/">Latest Updates</a>
                      </li>
                      <li>
                        <a href="/">Programming Insights</a>
                      </li>
                      <li>
                        <a href="/">Tech Innovations</a>
                      </li>
                      <li>
                        <a href="/">Developer Spotlight</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="float-end header-tools text-muted font-small">
              <div className="off-canvas-toggle-cover d-inline-block">
                <div
                  className="off-canvas-toggle hidden d-inline-block"
                  id="off-canvas-toggle"
                >
                  <span></span>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </header>
      <div className="main-search-form">
        <div className="container">
          <div className="pt-50 pb-50">
            <div className="row mb-20">
              <div className="col-12 align-self-center main-search-form-cover m-auto">
                <p className="text-center">
                  <span className="search-text-bg">Search</span>
                </p>
                <form action="#" className="search-header">
                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Tech Insights, Topics, and Contributors"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-search bg-white" type="submit">
                        <i className="elegant-icon icon_search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-80 text-center">
              <div className="col-12 font-small suggested-area">
                <h5 className="suggested font-heading mb-20 text-muted">
                  <strong>Explore Tech Topics:</strong>
                </h5>
                <ul className="list-inline d-inline-block">
                  <li className="list-inline-item">
                    <a href="/">Artificial Intelligence</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/">Software Development</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/">Cybersecurity</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/">Data Science</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/">Tech Trends</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/">Gadgets</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/">Programming</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/">Tech Business</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-80">
              <div className="col-lg-4">
                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                  <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                    <a className="color-white" href="/">
                      <img src="/assets/imgs/news/thumb-2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <h6>
                      <a href="/">Latest Tech Insights</a>
                    </h6>
                    <p className="text-muted font-small">
                      Explore the latest trends and innovations in the tech
                      industry. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                  <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                    <a className="color-white" href="/">
                      <img src="/assets/imgs/news/thumb-4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <h6>
                      <a href="/">Tech Lifestyle</a>
                    </h6>
                    <p className="text-muted font-small">
                      Discover how technology is influencing and shaping our
                      lifestyles. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                  <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                    <a className="color-white" href="/">
                      <img src="/assets/imgs/news/thumb-3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <h6>
                      <a href="/">Latest Tech Product Review</a>
                    </h6>
                    <p className="text-muted font-small">
                      Dive into our detailed review of the latest and most
                      innovative tech products. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
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

export default Navbar;
