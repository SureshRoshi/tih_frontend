import React from "react";
import { Link } from "react-router-dom";
import { getAuthToken } from "../util/auth";

function Footer() {
  const token = getAuthToken();

  return (
    <>
      <footer className="pt-50 pb-20">
        <div className="container">
          <div className="row">
            <div className={token ? "col-lg-4 col-md-6" : "col-lg-6 col-md-6"}>
              <div className="sidebar-widget wow fadeInUp animated mb-30">
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">
                    Torry Harris Business Solutions
                  </h5>
                </div>
                <div className="textwidget">
                  <p className="text-justify">
                    Welcome to the Torry Insight Hub! Start writing and sharing
                    your insights with the tech community. The knowledge flow
                    begins when we share our experiences and ideas.
                  </p>
                  <p>
                    <strong className="color-black">Headquarters</strong>
                    <br />
                    Torry Harris Business Solutions,
                    <br />
                    Perth Amboy, New Jersey, United States.
                  </p>
                </div>
              </div>
            </div>
            <div className={token ? "col-lg-4 col-md-6" : "col-lg-6 col-md-6"}>
              <div
                className="sidebar-widget widget_categories wow fadeInUp animated mb-30"
                data-wow-delay="0.1s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Useful Links</h5>
                </div>
                <ul className="font-small">
                  <li
                    className={
                      token
                        ? "cat-item cat-item-4 text-center"
                        : "cat-item cat-item-4"
                    }
                  >
                    <Link to="/help">Help & Support</Link>
                  </li>
                  <li
                    className={
                      token
                        ? "cat-item cat-item-4 text-center"
                        : "cat-item cat-item-4"
                    }
                  >
                    <Link to="/licensing">Licensing Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            {token && (
              <div className="col-lg-4 col-md-6">
                <div
                  className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30"
                  data-wow-delay="0.2s"
                >
                  <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Tag cloud</h5>
                  </div>
                  <div className="tagcloud mt-50">
                    <Link
                      className="tag-cloud-link"
                      to="/blogs/tags/programming"
                    >
                      Programming
                    </Link>
                    <Link
                      className="tag-cloud-link"
                      to="/blogs/tags/development"
                    >
                      Development
                    </Link>
                    <Link
                      className="tag-cloud-link"
                      to="/blogs/tags/innovation"
                    >
                      Innovation
                    </Link>
                    <Link className="tag-cloud-link" to="/blogs/tags/software">
                      Software
                    </Link>
                    <Link className="tag-cloud-link" to="/blogs/tags/coding">
                      Coding
                    </Link>
                    <Link
                      className="tag-cloud-link"
                      to="/blogs/tags/artificial-intelligence"
                    >
                      Artificial Intelligence
                    </Link>
                    <Link
                      className="tag-cloud-link"
                      to="/blogs/tags/tech-events"
                    >
                      Tech Events
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
            <p className="float-md-start font-small text-muted">
              © 2023, Torry Harris Business Solutions
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
