import React from "react";
import { Form, Link, redirect, useRouteLoaderData } from "react-router-dom";

import Search from "./Search";

function Navbar() {
  const token = useRouteLoaderData("root");

  return (
    <>
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

                {!token && (
                  <Link
                    className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow"
                    to={"/login"}
                  >
                    Login
                  </Link>
                )}
                {token && (
                  <>
                    <Link
                      className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow"
                      to={"/blogs/add-post"}
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
                    <Form method="POST" action="/logout">
                      <button className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow">
                        Logout
                      </button>
                    </Form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="header-sticky">
          <div className="container align-self-center position-relative">
            <div className="mobile_menu d-lg-none d-block"></div>
            <div className="main-nav d-none d-lg-block float-start">
              <nav>
                <ul className="main-menu d-none d-lg-inline font-small">
                  <li>
                    <Link to="/">Technology</Link>
                  </li>
                  <li>
                    <Link to="/">Development</Link>
                  </li>
                  <li>
                    <Link to="/">Programming</Link>
                  </li>
                  <li>
                    <Link to="/">Best Practices</Link>
                  </li>
                  <li>
                    <Link to="/">Reviews</Link>
                  </li>
                  <li>
                    <Link to="/">Innovation </Link>
                  </li>
                  <li>
                    <Link to="/">Professional Growth</Link>
                  </li>
                  <li>
                    <Link to="/">Industry Insights</Link>
                  </li>
                </ul>
                <ul id="mobile-menu" className="d-block d-lg-none text-muted">
                  <li className="menu-item-has-children">
                    <Link to="/">Tech Home</Link>
                    <ul className="sub-menu text-muted font-small">
                      <li>
                        <Link to="/">Tech News</Link>
                      </li>
                      <li>
                        <Link to="/">Development</Link>
                      </li>
                      <li>
                        <Link to="/">Programming</Link>
                      </li>
                      <li>
                        <Link to="/">Innovation</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/">Tech Categories</Link>
                    <ul className="sub-menu font-small">
                      <li>
                        <Link to="/">Tutorials</Link>
                      </li>
                      <li>
                        <Link to="/">Tools & Resources</Link>
                      </li>
                      <li>
                        <Link to="/">Tech Reviews</Link>
                      </li>
                      <li>
                        <Link to="/">Best Practices</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/">Tech Posts</Link>
                    <ul className="sub-menu font-small">
                      <li>
                        <Link to="/">Latest Updates</Link>
                      </li>
                      <li>
                        <Link to="/">Programming Insights</Link>
                      </li>
                      <li>
                        <Link to="/">Tech Innovations</Link>
                      </li>
                      <li>
                        <Link to="/">Developer Spotlight</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="clearfix"></div>
          </div>
        </div> */}
      </header>
      <div className="main-search-form">
        <div className="container">
          <div className="pt-50 pb-50">
            <div className="row mb-20">
              <div className="col-12 align-self-center main-search-form-cover m-auto">
                <p className="text-center">
                  <span className="search-text-bg">Search</span>
                </p>
                {/* search component */}
                <Search />
              </div>
            </div>
            <div className="row mt-80 text-center">
              <div className="col-12 font-small suggested-area">
                <h5 className="suggested font-heading mb-20 text-muted">
                  <strong>Explore Tech Topics:</strong>
                </h5>
                <ul className="list-inline d-inline-block">
                  <li className="list-inline-item">
                    <Link to="/">Artificial Intelligence</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">Software Development</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">Cybersecurity</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">Data Science</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">Tech Trends</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">Gadgets</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">Programming</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">Tech Business</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-80">
              <div className="col-lg-4">
                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                  <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                    <Link to="color-white" href="/">
                      <img src="/assets/imgs/news/thumb-2.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="post-content media-body">
                    <h6>
                      <Link to="/">Latest Tech Insights</Link>
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
                    <Link to="color-white" href="/">
                      <img src="/assets/imgs/news/thumb-4.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="post-content media-body">
                    <h6>
                      <Link to="/">Tech Lifestyle</Link>
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
                    <Link to="color-white" href="/">
                      <img src="/assets/imgs/news/thumb-3.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="post-content media-body">
                    <h6>
                      <Link to="/">Latest Tech Product Review</Link>
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

export async function action({ request, params }) {
  // const method = request.method;
  const data = await request.formData();

  const searchData = data.get("search-text");
  console.log(searchData);

  return redirect("/blogs");
}
