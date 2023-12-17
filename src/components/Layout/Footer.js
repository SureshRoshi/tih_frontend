import React from "react";

function Footer() {
  return (
    <>
      <footer className="pt-50 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
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
            <div className="col-lg-4 col-md-6">
              <div
                className="sidebar-widget widget_categories wow fadeInUp animated mb-30"
                data-wow-delay="0.1s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Useful Links</h5>
                </div>
                <ul className="font-small">
                  <li className="cat-item cat-item-4">
                    <a href="/help">Help & Support</a>
                  </li>
                  <li className="cat-item cat-item-5">
                    <a href="/licensing">Licensing Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30"
                data-wow-delay="0.2s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Tag cloud</h5>
                </div>
                <div className="tagcloud mt-50">
                  <a className="tag-cloud-link" href="/">
                    Programming
                  </a>
                  <a className="tag-cloud-link" href="/">
                    Development
                  </a>
                  <a className="tag-cloud-link" href="/">
                    Innovation
                  </a>
                  <a className="tag-cloud-link" href="/">
                    Software
                  </a>
                  <a className="tag-cloud-link" href="/">
                    Coding
                  </a>
                  <a
                    className="tag-cloud-link"
                    href="/category/artificial-intelligence"
                  >
                    Artificial Intelligence
                  </a>
                  <a className="tag-cloud-link" href="/category/tech-events">
                    Tech Events
                  </a>
                </div>
              </div>
            </div>
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
