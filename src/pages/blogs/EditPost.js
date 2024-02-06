import React from "react";
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigation,
  useRouteLoaderData,
} from "react-router-dom";
import config from "../../components/util/config";
import { getAuthToken } from "../../components/util/auth";
import Loader from "../../components/Layout/Loader";

function EditPost() {
  const { blogDetail } = useRouteLoaderData("blog-detail");

  const blog = blogDetail.data;

  const data = useActionData();

  const { state } = useNavigation();

  if (state === "loading") {
    return <Loader />;
  }

  return (
    <>
      <main className="container pt-30">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="add-post-form padding_eight_all mt-30">
              <div className="heading_s1 text-center">
                <h3 className="mb-30 font-weight-900">Edit Post</h3>
              </div>
              {data && data.message && (
                <div className="alert alert-danger border-radius-10">
                  {data.message}
                </div>
              )}
              <Form method="PATCH">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Edit Post Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Enter the title of your post"
                    defaultValue={blog ? blog.title : ""}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Edit Post Image
                  </label>
                  <input
                    className="form-control"
                    id="image"
                    type="url"
                    name="image"
                    placeholder="Enter image url of your post"
                    defaultValue={blog ? blog.main_image : ""}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Edit Post Tags
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    placeholder="Enter tag of your post"
                    defaultValue={blog ? blog.tags : ""}
                  />
                </div>
                <div className="row">
                  <label htmlFor="summary" className="form-label">
                    Edit Summary
                  </label>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="summary"
                        id="summary"
                        cols="30"
                        rows="5"
                        placeholder="Write your post summary here..."
                        defaultValue={blog ? blog.summary : ""}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <label htmlFor="description" className="form-label">
                    Edit Post Description
                  </label>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="description"
                        id="description"
                        cols="30"
                        rows="9"
                        placeholder="Write your post content here..."
                        defaultValue={blog ? blog.description : ""}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn button button-contactForm">
                    {state === "submitting"
                      ? "Updating Post..."
                      : "Update Post"}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default EditPost;

export async function action({ request, params }) {
  const token = getAuthToken();
  const method = request.method;
  const { blogId } = params;
  const data = await request.formData();

  let message = "";

  const title = data.get("title");
  const image = data.get("image");
  const tags = data.get("tag");
  const summary = data.get("summary");
  const description = data.get("description");

  function checkLength(value) {
    return value.length !== 0;
  }

  if (
    checkLength(image) &&
    checkLength(title) &&
    checkLength(tags) &&
    checkLength(summary) &&
    checkLength(description)
  ) {
    const updatedData = {
      title: title,
      main_image: image,
      tags: tags,
      summary: summary,
      description: description,
    };
    try {
      const response = await fetch(
        `http://${config.backend_url}/api/blog/${blogId}/`,
        {
          method: method,
          body: JSON.stringify(updatedData),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 400) {
        return response;
      }

      if (!response.ok) {
        throw json({ message: "could not authenticate user" });
      }
      const resData = await response.json();

      return redirect(`/your-profile`);
    } catch (err) {
      message = "Error connecting to the server. Please try again later.";
    }
  } else {
    message = "Invalid form data. Please check your inputs.";
  }
  return { message };
}
