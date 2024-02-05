import {
  Link,
  defer,
  json,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { getAuthToken } from "../../components/util/auth";
import config from "../../components/util/config";
import { formatDate } from "../../components/util/formatDate";
import Loader from "../../components/Layout/Loader";

export default function ProfilePage() {
  const { profile } = useLoaderData();

  const submit = useSubmit();

  const { state } = useNavigation();

  const navigate = useNavigate();

  function deleteHandler(id) {
    const proceed = window.confirm("Are you sure to delete the post ?");
    if (proceed) {
      submit({ blogId: id }, { method: "DELETE" });
    }
  }

  function editHandler(id) {
    navigate(`/blogs/${id}/edit-post`);
  }

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
                                <div className="mt-15">
                                  <button
                                    className="btn btn-radius bg-primary text-white font-small box-shadow"
                                    onClick={() => editHandler(post.uid)}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-pen"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                                    </svg>
                                  </button>
                                  <button
                                    className="btn btn-radius bg-primary text-white font-small box-shadow ml-20"
                                    onClick={() => deleteHandler(post.uid)}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-trash3"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                  </button>
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

export async function action({ request }) {
  const token = getAuthToken();

  const method = request.method;
  const blogId = await request.formData();
  const id = blogId.get("blogId");

  const response = await fetch(`http://${config.backend_url}/api/blog/${id}`, {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw json({ message: "Could not delete blog" }, { status: 500 });
  }
  return {};
}
