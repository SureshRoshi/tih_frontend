import { Link, defer, json, useLoaderData } from "react-router-dom";
import { getAuthToken } from "../../components/util/auth";
import config from "../../components/util/config";

export default function AuthorPage() {
  const { author } = useLoaderData();

  return (
    <main className="bg-grey pt-50 pb-50">
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
                      <Link title={`Posts by ${author.username}`} rel="author">
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
                            <Link to={`/blogs/tags/${post.tag.toLowerCase()}`}>
                              <span className="post-cat text-success">
                                {post.tag}
                              </span>
                            </Link>
                          </div>
                          <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                              <Link to={`/blogs/${post.id}`}>{post.title}</Link>
                            </h5>
                            <div className="post-excerpt mb-25 font-small text-muted">
                              <p>{post.blog_text}</p>
                            </div>
                            <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                              <span className="post-on">{post.created_at}</span>
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

async function authorLoader(name) {
  const token = getAuthToken();

  try {
    const response = await fetch(
      `http://${config.backend_url}/api/blog/${name}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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

export async function loader({ params }) {
  const { author_name } = params;
  return defer({
    author: await authorLoader(author_name),
  });
}
