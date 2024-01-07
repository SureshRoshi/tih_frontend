import React from "react";
import { Form, redirect } from "react-router-dom";

function AddPost() {
  return (
    <>
      <main className="container pt-30">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="add-post-form padding_eight_all mt-30">
              <div className="heading_s1 text-center">
                <h3 className="mb-30 font-weight-900">Add New Post</h3>
              </div>
              <Form method="POST">
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Post Image:
                  </label>
                  <input
                    className="form-control"
                    id="image"
                    type="url"
                    name="image"
                    placeholder="Enter image url of your post"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Post Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Enter the title of your post"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Post Tags
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    placeholder="Enter tags separated by commas"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="description" className="form-label">
                    Post Description
                  </label>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="comment"
                        id="comment"
                        cols="30"
                        rows="9"
                        placeholder="Write your post content here..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn button button-contactForm">
                    Submit Post
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

export default AddPost;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const newPostData = {
    image: data.get("image"),
    title: data.get("title"),
    tags: data.get("tag"),
    description: data.get("comment"),
  };

  console.log(newPostData);

  return redirect("/blogs");
}
