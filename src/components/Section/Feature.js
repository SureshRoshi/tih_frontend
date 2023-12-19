import React from "react";
import { Link } from "react-router-dom";

// data will be fetched from backend and rendered dynamically.
const FEATURE_POSTS = [
  {
    id: "mastering-git",
    image: "url(/assets/imgs/hero-tech/hero-tech-3.png) center/cover no-repeat",
    title: "Mastering Git: Best Practices for Software Development",
    tag: "Tech Tips",
    date: "15 September 2023",
    hits: "1.7k Views",
  },
  // {
  //   id: "enhancing-code-quality",
  //   image: "url(/assets/imgs/hero-tech/hero-tech-1.png) center/cover no-repeat",
  //   title: "Enhancing Code Quality: Best Practices for Developers",
  //   tag: "Development Tips",
  //   date: "26 August 2023",
  //   hits: "2k Views",
  // },
  // {
  //   id: "impact-of-ai",
  //   image: "url(/assets/imgs/hero-tech/hero-tech-2.jpg) center/cover no-repeat",
  //   title: "The Impact of Artificial Intelligence on Future Technologies",
  //   tag: "Tech Exploration",
  //   date: "15 September 2023",
  //   hits: "2.3k Views",
  // },
  // {
  //   id: "impact-of-healthy-env",
  //   image:
  //     "url(/assets/imgs/hero-tech/hero-tech-4.jpg) center right/cover no-repeat",
  //   title: "The Impact of a Healthy Work Environment on Developer Productivity",
  //   tag: "Health in Tech",
  //   date: "22 September 2023",
  //   hits: "1.6k Views",
  // },
];

function FeatureContainer() {
  return (
    <>
      <div className="container pt-30">
        <div className="featured-slider-3 position-relative">
          <div className="slider-3-arrow-cover" />
          <div className="featured-slider-3-items">
            {/*  */}
            {FEATURE_POSTS.map((post) => {
              return (
                <div
                  className="slider-single overflow-hidden border-radius-10"
                  key={post.id}
                >
                  <div className="post-thumb position-relative">
                    <div
                      className="thumb-overlay position-relative"
                      style={{
                        background: post.image,
                      }}
                    >
                      <div className="post-content-overlay">
                        <div className="container">
                          <div className="entry-meta meta-0 font-small mb-20">
                            <Link to={post.tag} tabIndex="0">
                              <span className="post-cat text-warning text-uppercase">
                                {post.tag}
                              </span>
                            </Link>
                          </div>
                          <h1 className="post-title mb-20 font-weight-900 text-white">
                            <Link
                              className="text-white"
                              to={post.id}
                              tabIndex="0"
                            >
                              {post.title}
                            </Link>
                          </h1>
                          <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                            <span className="post-on">{post.date}</span>
                            <span className="hit-count has-dot">
                              {post.hits}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureContainer;
