import React from "react";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const navigate = useNavigate();

  function handleAddPost(e) {
    e.preventDefault();
    navigate("/blogs");
  }

  return (
    <>
      <main className="container pt-30">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="add-post-form padding_eight_all mt-30">
              <div className="heading_s1 text-center">
                <h3 className="mb-30 font-weight-900">Add New Post</h3>
              </div>
              <form action="/submit-post" method="POST">
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Post Image:
                  </label>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="image"
                      name="image"
                      accept="image/*"
                    />
                  </div>
                  <small className="form-text text-muted">
                    Upload an image for your post.
                  </small>
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
                  <button
                    type="submit"
                    className="btn button button-contactForm"
                    onClick={handleAddPost}
                  >
                    Submit Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AddPost;
