import { Link, defer, json, useLoaderData } from "react-router-dom";
import { getAuthToken } from "../../components/util/auth";

export default function AuthorPage() {
  const { author } = useLoaderData();

  return (
    <main className="bg-grey pt-50 pb-50">
      {author.status === 404 && (
        <div className="container single-content">
          <div className="entry-header pt-80 pb-30 mb-20">
            <div className="row">
              <h1 className="entry-title mb-30 font-weight-900 text-center">
                {author.message}
              </h1>
            </div>
          </div>
        </div>
      )}
      {author.status !== 404 && (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="author-bio mb-50 bg-white p-30 border-radius-10">
                <div className="author-image mb-30">
                  <Link to={`/author/${author.username}`}>
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
                          title={`Posts by ${author.username}`}
                          rel="author"
                        >
                          {author.username.toUpperCase()}
                        </Link>
                      </span>
                    </span>
                  </h3>
                  {/* <h5 className="text-muted">About author</h5>
                <div className="author-description text-muted">
                  You should write because you love the shape of stories and
                  sentences and the creation of different words on a page.
                  Graduating from a top accelerator or incubator can be as
                  career-defining for a startup founder as an elite university
                  diploma.
                </div> */}
                  <strong className="text-muted">Follow: </strong>
                  <ul className="header-social-network d-inline-block list-inline color-white mb-20 ml-5">
                    <li className="list-inline-item">
                      <a className="gh" href="/" target="_blank" title="GitHub">
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
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="post-module-2">
                <div className="widget-header-2 position-relative mb-30  wow fadeInUp animated">
                  <h5 className="mt-5 mb-30">Posted by {author.username}</h5>
                </div>
                <div className="loop-list loop-list-style-1">
                  <div className="row">
                    {author.data.map((post) => (
                      <article
                        className="col-md-6 mb-40 wow fadeInUp  animated"
                        key={post.id}
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
                              <Link
                                to={`/blogs/tags/${post.tag.toLowerCase()}`}
                              >
                                <span className="post-cat text-success">
                                  {post.tag}
                                </span>
                              </Link>
                            </div>
                            <div className="d-flex post-card-content">
                              <h5 className="post-title mb-20 font-weight-900">
                                <Link to={`/blogs/${post.id}`}>
                                  {post.title}
                                </Link>
                              </h5>
                              <div className="post-excerpt mb-25 font-small text-muted">
                                <p>{post.blog_text}</p>
                              </div>
                              <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                                <span className="post-on">
                                  {post.created_at}
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

async function authorLoader(name) {
  const token = getAuthToken();

  try {
    const response = await fetch(
      `http://${process.env.REACT_APP_API_URL}/api/blog/${name}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 404) {
      return {
        message: `Embrace the journey: User not discovered in the digital realm!`,
        status: 404,
      };
    }

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

export async function loader({ params }) {
  const { author_name } = params;
  return defer({
    author: await authorLoader(author_name),
  });
}
