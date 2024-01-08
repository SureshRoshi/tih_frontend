import React, { useState } from "react";
import { Link } from "react-router-dom";

function LatestPosts({ latest, mostPopular }) {
  const [latestPosts, setLatestPosts] = useState(latest);

  // Initial number of posts to display
  const [visiblePosts, setVisiblePosts] = useState(2);
  // Number of posts to load on each "Load More" click
  const postsToLoad = 1;

  // posts rendered based on slicing
  const currentPosts = latestPosts.slice(0, visiblePosts);

  // load more handler
  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + postsToLoad);
  };

  const handleUpvote = (postId) => {
    setLatestPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, votes: post.votes + 1 } : post
      )
    );
  };

  const handleDownvote = (postId) => {
    setLatestPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, votes: post.votes - 1 } : post
      )
    );
  };

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
                  {currentPosts.map((post) => (
                    <article
                      className="hover-up-2 transition-normal wow animated"
                      key={post.id}
                    >
                      <div className="row mb-40 list-style-2">
                        <div className="col-md-4">
                          <div className="post-thumb position-relative border-radius-5">
                            <div
                              className="img-hover-slide border-radius-5 position-relative"
                              style={{
                                backgroundImage: post.image,
                              }}
                            >
                              <Link
                                className="img-link"
                                to={post.post_link}
                              ></Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8 align-self-center">
                          <div className="post-content">
                            <div className="entry-meta meta-0 font-small mb-10">
                              <Link to={post.tag_link}>
                                <span className="post-cat text-primary">
                                  {post.tag}
                                </span>
                              </Link>
                            </div>
                            <h5 className="post-title font-weight-900 mb-20">
                              <Link to={post.post_link}>{post.title}</Link>
                            </h5>
                            <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                              <span className="post-on">{post.date}</span>
                              <div className="voting-icons mt-20">
                                <button
                                  className="upvote-btn"
                                  onClick={() => handleUpvote(post.id)}
                                >
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
                                <span className="votes-count">
                                  {post.votes}
                                </span>
                                <button
                                  className="downvote-btn"
                                  onClick={() => handleDownvote(post.id)}
                                >
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
                  ))}
                </div>
              </div>
              {/* load more starts */}
              {visiblePosts < latestPosts.length && (
                <div className="mb-30 wow fadeInUp animated text-center">
                  <button
                    className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow"
                    onClick={handleLoadMore}
                  >
                    Load More
                  </button>
                </div>
              )}
              {/* load more ends */}
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
                      {mostPopular.map((item) => (
                        <li
                          className="mb-30 wow fadeInUp animated"
                          key={item.id}
                        >
                          <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                            <div className="post-content media-body">
                              <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                <Link to={item.post_link}>{item.title}</Link>
                              </h6>
                              <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                                <span className="post-on">{item.date}</span>
                              </div>
                            </div>
                            <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                              <Link className="color-white" to={item.post_link}>
                                <img src={item.image} alt="Tech Thumbnail" />
                              </Link>
                            </div>
                          </div>
                        </li>
                      ))}
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
