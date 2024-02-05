import React, { useEffect } from "react";
import {
  Form,
  Link,
  defer,
  json,
  useLoaderData,
  useNavigation,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import config from "../../components/util/config";
import { getAuthToken } from "../../components/util/auth";
import Loader from "../../components/Layout/Loader";
import { formatDate } from "../../components/util/formatDate";

function BlogDetailPage() {
  const { blog } = useRouteLoaderData("blog-detail");

  const { blogId } = useParams();

  const { state } = useNavigation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (state === "loading") {
    return <Loader />;
  }

  async function voteHandler() {
    const token = getAuthToken();
    let message = "";
    try {
      const response = await fetch(
        `http://${config.backend_url}/api/blog/upvote/${blogId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw json({ message: "could not authenticate you" });
      }
      const resData = await response.json();
      console.log(resData);
    } catch (err) {
      message = "Error connecting to the server. Please try again later.";
    }
  }

  blog.description = blog.description.replace(/\n/g, "<br/>");
  blog.summary = blog.summary.replace(/\n/g, "<br/>");

  return (
    <main className="bg-grey pb-30">
      {blog.message && (
        <div className="container single-content">
          <div className="entry-header pt-80 pb-30 mb-20">
            <div className="row">
              <h1 className="entry-title mb-30 font-weight-900">
                {blog.message}
              </h1>
            </div>
          </div>
        </div>
      )}
      {!blog.message && (
        <div className="container single-content">
          <div className="entry-header pt-80 pb-30 mb-20">
            <div className="row">
              <div className="col-md-6 mb-md-0 mb-sm-3">
                <figure className="mb-0 mt-lg-0 mt-3 border-radius-5">
                  <img
                    className="border-radius-5"
                    src={blog.main_image}
                    alt={blog.title}
                  />
                </figure>
              </div>
              <div className="col-md-6 align-self-center">
                <div className="post-content">
                  <div className="entry-meta meta-0 mb-15 font-small">
                    <Link to={`/blogs/tags/${blog.tags.toLowerCase()}`}>
                      <span className="post-cat position-relative text-info">
                        {blog.tags}
                      </span>
                    </Link>
                  </div>
                  <h1 className="entry-title mb-30 font-weight-900">
                    {blog.title}
                  </h1>
                  <p
                    className="excerpt mb-30"
                    dangerouslySetInnerHTML={{
                      __html: blog.summary,
                    }}
                  ></p>
                  <div className="entry-meta align-items-center meta-2 font-small color-muted">
                    <p className="mb-5">
                      <Link className="author-avatar" to="/author">
                        <img
                          className="img-circle"
                          src="/assets/imgs/authors/author.jpg"
                          alt=""
                        />
                      </Link>
                      By{" "}
                      <Link to={`/author/${blog.user_username}`}>
                        <span className="author-name font-weight-bold">
                          {blog.user_username}
                        </span>
                      </Link>
                    </p>
                    <span className="mr-10">{formatDate(blog.created_at)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article className="entry-wraper mb-50">
            <div className="excerpt mb-30">
              <p
                dangerouslySetInnerHTML={{
                  __html: blog.description,
                }}
              ></p>
            </div>

            <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
              <div className="tags">
                <span>Tags: </span>
                <Link to={`/blogs/tags/${blog.tags}`} rel="tag">
                  {blog.tags}
                </Link>
              </div>
            </div>

            <div className="single-social-share clearfix wow fadeIn animated">
              <div className="entry-meta meta-1 font-small color-grey float-start mt-10">
                <span className="hit-count mr-15">
                  <button className="btn" onClick={voteHandler}>
                    <i className="elegant-icon icon_like"></i>
                  </button>
                  {blog.upvotes} Upvotes
                </span>
                <span className="hit-count mr-15">
                  <button className="btn">
                    <i className="elegant-icon icon_comment_alt"></i>
                  </button>
                  {blog.comments.length} comments
                </span>
              </div>
            </div>

            <div className="related-posts pt-30">
              <div className="post-module-3">
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Related posts</h5>
                </div>
                <div className="loop-list loop-list-style-1">
                  <article className="hover-up-2 transition-normal wow fadeInUp animated">
                    <div className="row mb-40 list-style-2">
                      <div className="col-md-4">
                        <div className="post-thumb position-relative border-radius-5">
                          <div
                            className="img-hover-slide border-radius-5 position-relative"
                            style={{
                              backgroundImage:
                                "url(/assets/imgs/tech/tech-featured-image.jpg)",
                            }}
                          >
                            <p className="img-link" href="/"></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 align-self-center">
                        <div className="post-content">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <Link to={`/blogs/tags/tech`}>
                              <span className="post-cat text-primary">
                                Tech
                              </span>
                            </Link>
                          </div>
                          <h5 className="post-title font-weight-900 mb-20">
                            <Link href="/">
                              Exploring Innovative Uses of Raspberry Pi in
                              Modern Technology
                            </Link>
                          </h5>
                          <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                            <span className="post-on">15 October 2023</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div className="comments-area" id="comments-area">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">Comments</h5>
              </div>
              {blog.comments.length === 0 && (
                <p className="comment text-center">No Comments yet</p>
              )}
              {blog.comments.length > 0 &&
                blog.comments.map((comment) => (
                  <div
                    className="comment-list wow fadeIn animated"
                    key={comment.uid}
                  >
                    <div className="single-comment justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img
                            src="/assets/imgs/authors/author.jpg"
                            alt="author"
                          />
                        </div>
                        <div className="desc mt-5">
                          <p className="comment">{comment.add_comment}</p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h5>
                                <Link to={`/author/${comment.comment_user}`}>
                                  {comment.comment_user}
                                </Link>
                              </h5>
                              <p className="date">
                                {formatDate(comment.created_at)}
                              </p>
                            </div>
                          </div>
                          {/* <div className="reply-btn mt-3">
                          <form className="reply-form d-flex">
                            <textarea
                              name="reply"
                              className="reply-textarea form-control me-2"
                              placeholder="Enter your reply..."
                            ></textarea>
                            <button
                              type="submit"
                              className="btn btn-primary btn-sm align-self-end"
                            >
                              Reply
                            </button>
                          </form>
                        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="comment-form wow fadeIn animated">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">Leave a Reply</h5>
              </div>
              <Form
                className="form-contact comment_form"
                id="commentForm"
                method="POST"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="comment"
                        id="comment"
                        cols="30"
                        rows="9"
                        placeholder="Write Comment"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn button button-contactForm"
                  >
                    {state === "submitting"
                      ? "Posting Comment..."
                      : "Post Comment"}
                  </button>
                </div>
              </Form>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}

export default BlogDetailPage;

async function blogLoader(id) {
  const token = getAuthToken();

  try {
    const response = await fetch(
      `http://${config.backend_url}/api/blog/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw json({ message: "Could not fetch blog by id." }, { status: 500 });
    } else {
      const resData = await response.json();
      return resData.data;
    }
  } catch (error) {
    return {
      message: `Hold up! Our server is on an unscheduled vacation 🏖️. 
        It's taking a break from your requests. Give it a moment to recharge its tropical vibes and try again later!`,
    };
  }
}

export async function loader({ params }) {
  const { blogId } = params;
  return defer({
    blog: await blogLoader(blogId),
  });
}

export async function action({ request, params }) {
  const token = getAuthToken();
  const method = request.method;
  const { blogId } = params;
  const data = await request.formData();

  let message = "";

  const comment = data.get("comment");

  if (comment) {
    const newCommentData = {
      add_comment: comment,
    };

    try {
      const response = await fetch(
        `http://${config.backend_url}/api/blog/${blogId}/`,
        {
          method: method,
          body: JSON.stringify(newCommentData),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw json({ message: "could not authenticate you" });
      }
      return {};
    } catch (err) {
      message = "Error connecting to the server. Please try again later.";
    }
  } else {
    message = "Invalid form data. Please check your inputs.";
  }
  return { message };
}
