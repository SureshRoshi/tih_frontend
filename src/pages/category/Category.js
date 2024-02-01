import { useEffect } from "react";
import { Link, defer, json, useLoaderData } from "react-router-dom";
import { getAuthToken } from "../../components/util/auth";
import config from "../../components/util/config";

export default function CategoryPage() {
  const { tag } = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="archive-header pt-50">
        <div className="container">
          <h2 className="font-weight-900">{tag.tag.toUpperCase()}</h2>
          <div className="breadcrumb">
            <Link to="/blogs" rel="nofollow">
              Home
            </Link>
            <span></span> {tag.tag}
          </div>
          <div className="bt-1 border-color-1 mt-30 mb-50"></div>
        </div>
      </div>
      <div className="pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="post-module-3">
                <div className="loop-list loop-list-style-1">
                  {tag.data.map((post) => (
                    <article
                      className="hover-up-2 transition-normal wow fadeInUp animated"
                      key={post.id}
                    >
                      <div className="row mb-40 list-style-2">
                        <div className="col-md-4">
                          <div className="post-thumb position-relative border-radius-5">
                            <div
                              className="img-hover-slide border-radius-5 position-relative"
                              style={{
                                backgroundImage: `url(${post.image})`,
                              }}
                            >
                              <p className="img-link"></p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8 align-self-center">
                          <div className="post-content">
                            <div className="entry-meta meta-0 font-small mb-10">
                              <Link to={`/blogs/tags/${tag.tag}`}>
                                <span className="post-cat text-primary">
                                  {post.tags}
                                </span>
                              </Link>
                            </div>
                            <h5 className="post-title font-weight-900 mb-20">
                              <Link to={`/blogs/${post.uid}`}>
                                {post.title}
                              </Link>
                            </h5>
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

async function tagLoader(id) {
  const token = getAuthToken();

  try {
    const response = await fetch(
      `http://${config.backend_url}/api/blog/tag/${id}`,
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
      return { data: resData.data, tag: id };
    }
  } catch (error) {
    return {
      message: `Hold up! Our server is on an unscheduled vacation 🏖️. 
        It's taking a break from your requests. Give it a moment to recharge its tropical vibes and try again later!`,
    };
  }
}

export async function loader({ params }) {
  const { tagId } = params;
  return defer({
    tag: await tagLoader(tagId),
  });
}
