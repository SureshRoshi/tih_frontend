import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function FeatureContainer({ featurePosts }) {
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
      {featurePosts.length > 0 && (
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
      )}
    </>
  );
}

export default FeatureContainer;
