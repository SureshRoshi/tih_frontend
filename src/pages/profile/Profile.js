import {
  Link,
  defer,
  json,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { getAuthToken } from "../../components/util/auth";
import config from "../../components/util/config";
import { formatDate } from "../../components/util/formatDate";
import Loader from "../../components/Layout/Loader";

export default function ProfilePage() {
  const { profile } = useLoaderData();

  const { state } = useNavigation();

  if (state === "loading") {
    return <Loader />;
  }

  return (
    <main className="bg-grey pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="author-bio mb-50 bg-white p-30 border-radius-10">
              <div className="author-image mb-30">
                <a href="/">
                  <img
                    className="img-circle"
                    src="/assets/imgs/authors/author.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="author-info">
                <h3 className="font-weight-900">
                  <span className="vcard author">
                    <span className="fn">
                      <Link title={`Posts by ${profile.username}`} rel="author">
                        {profile.username.toUpperCase()}
                      </Link>
                    </span>
                  </span>
                </h3>
                <h5 className="text-muted"></h5>
                <div className="author-description text-muted"></div>
                {/* <strong className="text-muted">Follow: </strong>
                <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                  <li className="list-inline-item">
                    <a className="fb" href="#" target="_blank" title="Facebook">
                      <i className="elegant-icon social_facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      className="tw"
                      href="#"
                      target="_blank"
                      title="Tweet now"
                    >
                      <i className="elegant-icon social_twitter"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      className="pt"
                      href="#"
                      target="_blank"
                      title="Pin it"
                    >
                      <i className="elegant-icon social_pinterest"></i>
                    </Link>
                  </li>
                </ul> */}
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
                    <span>Add New Post</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="post-module-2">
              <div className="widget-header-2 position-relative mb-30  wow fadeInUp animated">
                <h5 className="mt-5 mb-30">Posted by {profile.username}</h5>
              </div>
              <div className="loop-list loop-list-style-1">
                <div className="row">
                  {profile.data.map((post) => (
                    <article
                      className="col-md-6 mb-40 wow fadeInUp  animated"
                      key={post.uid}
                    >
                      <div className="post-card-1 border-radius-10 hover-up">
                        <div
                          className="post-thumb thumb-overlay img-hover-slide position-relative"
                          style={{
                            backgroundImage: `url(${post.image})`,
                          }}
                        >
                          <p className="img-link"></p>
                        </div>
                        <div className="post-content p-30">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <Link to={`/blogs/tags/${post.tags.toLowerCase()}`}>
                              <span className="post-cat text-success">
                                {post.tags}
                              </span>
                            </Link>
                          </div>
                          <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                              <Link to={`/blogs/${post.uid}`}>
                                {post.title}
                              </Link>
                            </h5>
                            <div className="post-excerpt mb-25 font-small text-muted">
                              <p>{post.blog_text}</p>
                            </div>
                            <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                              <span className="post-on">
                                {formatDate(post.created_at)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

async function profileLoader() {
  const token = getAuthToken();

  try {
    const response = await fetch(`http://${config.backend_url}/api/MyBlogs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw json({ message: "Could not fetch posts." }, { status: 500 });
    } else {
      const resData = await response.json();
      return resData;
    }
  } catch (error) {
    return {
      message: `Hold up! Our server is on an unscheduled vacation 🏖️. 
        It's taking a break from your requests. Give it a moment to recharge its tropical vibes and try again later!`,
    };
  }
}

export async function loader() {
  return defer({
    profile: await profileLoader(),
  });
}
