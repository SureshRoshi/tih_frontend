import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FeatureContainer() {
  const [featurePosts, setFeaturePosts] = useState([
    {
      id: "mastering-git",
      image:
        "url(/assets/imgs/hero-tech/hero-tech-3.png) center/cover no-repeat",
      title: "Mastering Git: Best Practices for Software Development",
      tag: "Tech Tips",
      date: "15 September 2023",
    },
    {
      id: "enhancing-code-quality",
      image:
        "url(/assets/imgs/hero-tech/hero-tech-1.png) center/cover no-repeat",
      title: "Enhancing Code Quality: Best Practices for Developers",
      tag: "Development Tips",
      date: "26 August 2023",
    },
    {
      id: "impact-of-ai",
      image:
        "url(/assets/imgs/hero-tech/hero-tech-2.jpg) center/cover no-repeat",
      title: "The Impact of Artificial Intelligence on Future Technologies",
      tag: "Tech Exploration",
      date: "15 September 2023",
    },
    {
      id: "impact-of-healthy-env",
      image:
        "url(/assets/imgs/hero-tech/hero-tech-4.jpg) center right/cover no-repeat",
      title:
        "The Impact of a Healthy Work Environment on Developer Productivity",
      tag: "Health in Tech",
      date: "22 September 2023",
    },
  ]);

  useEffect(() => {
    const $ = window.$;

    if ($.fn.slick) {
      $(document).ready(() => {
        const $slider = $(".featured-slider-3-items");

        $slider.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          fade: true,
          prevArrow:
            '<button type="button" class="slick-prev"><i class="elegant-icon arrow_left"></i></button>',
          nextArrow:
            '<button type="button" class="slick-next"><i class="elegant-icon arrow_right"></i></button>',
          appendArrows: ".slider-3-arrow-cover",
        });

        return () => {
          $slider.slick("unslick");
        };
      });
    }
  }, []);

  return (
    <>
      <div className="container pt-30">
        <div className="featured-slider-3 position-relative">
          <div className="slider-3-arrow-cover" />
          <div className="featured-slider-3-items">
            {/*  */}
            {featurePosts.map((post) => {
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
