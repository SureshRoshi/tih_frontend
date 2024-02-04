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
      {profile.status === 500 && (
        <div className="container single-content">
          <div className="entry-header pt-80 pb-30 mb-20">
            <div className="row">
              <h1 className="entry-title mb-30 font-weight-900">
                {profile.message}
              </h1>
            </div>
          </div>
        </div>
      )}
      {profile.status !== 500 && (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="author-bio mb-50 bg-white p-30 border-radius-10">
                <div className="author-image mb-30">
                  <Link to={`/author/${profile.username}`}>
                    <img
                      className="img-circle"
                      src="/assets/imgs/authors/author.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="author-info">
                  <h3 className="font-weight-900">
                    <span className="vcard author">
                      <span className="fn">
                        <Link
                          title={`Posts by ${profile.username}`}
                          rel="author"
                        >
                          {profile.username.toUpperCase()}
                        </Link>
                      </span>
                    </span>
                  </h3>
                  <p className="text-muted" />
                  <div className="author-description text-muted"></div>
                  <strong className="text-muted">Follow: </strong>
                  <ul className="header-social-network d-inline-block list-inline color-white mb-20 ml-5">
                    <li className="list-inline-item">
                      <a className="gh" href="" target="_blank" title="GitHub">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <br />
                  <Link
                    className="btn btn-radius bg-primary text-white font-small box-shadow"
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
            <div className="col-lg-12">
              <div className="post-module-2">
                <div className="widget-header-2 position-relative mb-30  wow fadeInUp animated">
                  <h5 className="mt-5 mb-30">Posted by {profile.username}</h5>
                </div>
                <div className="loop-list loop-list-style-1">
                  <div className="row">
                    {profile.data.length === 0 && (
                      <h5 className="post-title font-weight-900 mb-20">
                        No Posts yet
                      </h5>
                    )}
                    {profile.data.length > 0 &&
                      profile.data.map((post) => (
                        <article
                          className="col-md-6 mb-40 wow fadeInUp  animated"
                          key={post.uid}
                        >
                          <div className="post-card-1 border-radius-10 hover-up">
                            <div
                              className="post-thumb thumb-overlay img-hover-slide position-relative"
                              style={{
                                backgroundImage: `url(${post.main_image})`,
                              }}
                            >
                              <p className="img-link"></p>
                            </div>
                            <div className="post-content p-30">
                              <div className="entry-meta meta-0 font-small mb-10">
                                <Link
                                  to={`/blogs/tags/${post.tags.toLowerCase()}`}
                                >
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
      )}
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
      status: 500,
    };
  }
}

export async function loader() {
  return defer({
    profile: await profileLoader(),
  });
}
