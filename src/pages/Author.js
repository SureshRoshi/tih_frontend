export default function AuthorPage() {
  return (
    <main className="bg-grey pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="author-bio mb-50 bg-white p-30 border-radius-10">
              <div className="author-image mb-30">
                <a href="author.html">
                  <img
                    src="assets/imgs/authors/author.jpg"
                    alt=""
                    className="avatar"
                  />
                </a>
              </div>
              <div className="author-info">
                <h3 className="font-weight-900">
                  <span className="vcard author">
                    <span className="fn">
                      <a
                        href="author.html"
                        title="Posts by Steven"
                        rel="author"
                      >
                        Steven
                      </a>
                    </span>
                  </span>
                </h3>
                <h5 className="text-muted">About author</h5>
                <div className="author-description text-muted">
                  You should write because you love the shape of stories and
                  sentences and the creation of different words on a page.
                  Graduating from a top accelerator or incubator can be as
                  career-defining for a startup founder as an elite university
                  diploma.
                </div>
                <strong className="text-muted">Follow: </strong>
                <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                  <li className="list-inline-item">
                    <a className="fb" href="#" target="_blank" title="Facebook">
                      <i className="elegant-icon social_facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="tw"
                      href="#"
                      target="_blank"
                      title="Tweet now"
                    >
                      <i className="elegant-icon social_twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="pt" href="#" target="_blank" title="Pin it">
                      <i className="elegant-icon social_pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="post-module-2">
              <div className="widget-header-2 position-relative mb-30  wow fadeInUp animated">
                <h5 className="mt-5 mb-30">Posted by Steven</h5>
              </div>
              <div className="loop-list loop-list-style-1">
                <div className="row">
                  <article className="col-md-6 mb-40 wow fadeInUp  animated">
                    <div className="post-card-1 border-radius-10 hover-up">
                      <div
                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                        style={{
                          backgroundImage: "url(assets/imgs/news/news-6.jpg)",
                        }}
                      >
                        <a className="img-link" href="single.html"></a>
                      </div>
                      <div className="post-content p-30">
                        <div className="entry-meta meta-0 font-small mb-10">
                          <a href="category.html">
                            <span className="post-cat text-info">Artists</span>
                          </a>
                          <a href="category.html">
                            <span className="post-cat text-success">Film</span>
                          </a>
                        </div>
                        <div className="d-flex post-card-content">
                          <h5 className="post-title mb-20 font-weight-900">
                            <a href="single.html">
                              Easy Ways to Use Alternatives to Plastic
                            </a>
                          </h5>
                          <div className="post-excerpt mb-25 font-small text-muted">
                            <p>
                              Graduating from a top accelerator or incubator can
                              be as career-defining for a&nbsp;startup
                              founder&nbsp;as an elite university diploma. The
                              intensive programmes, which…
                            </p>
                          </div>
                          <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                            <span className="post-on">27 August</span>
                            <span className="time-reading has-dot">
                              12 mins read
                            </span>
                            <span className="post-by has-dot">23k views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
