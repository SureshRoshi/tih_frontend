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
                      to={"/your-profile"}
                      className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow"
                    >
                      <span className="d-flex align-items-center">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-person-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path
                              fillRule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                            />
                          </svg>
                        </span>
                        <span className="ms-1">Profile</span>
                      </span>
                    </Link>
                    <Form method="POST" action="/logout">
                      <button className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow">
                        <span className="d-flex align-items-center">
                          <span className="me-1">Logout</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-box-arrow-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                            />
                          </svg>
                        </span>
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
