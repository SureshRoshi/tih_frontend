import React from "react";
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import config from "../../components/util/config";
import { getAuthToken } from "../../components/util/auth";
import Loader from "../../components/Layout/Loader";
import ImagePicker from "../../components/Section/ImagePicker";

function AddPost() {
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
                <h3 className="mb-30 font-weight-900">Add New Post</h3>
              </div>
              {data && data.message && (
                <div className="alert alert-danger border-radius-10">
                  {data.message}
                </div>
              )}
              <Form method="POST">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Post Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Enter the title of your post... Let your creativity shine!"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Post Image
                  </label>
                  <input
                    className="form-control"
                    id="image"
                    type="url"
                    name="image"
                    placeholder="Enter the image URL for your post... because every post needs a bit of visual flair!"
                    required
                  />
                  {/* <ImagePicker label={"Post Image"} name={"image"} /> */}
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
                    placeholder="One epic tag to rule them all... Enter here!"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="summary" className="form-label">
                    Summary
                  </label>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="summary"
                        id="summary"
                        cols="30"
                        rows="5"
                        placeholder="<p>Write your 'brilliant' blog summary here using HTML tags... because we know you're just dying to unleash your inner HTML wizardry. Don't forget to sprinkle in some <em>emphasis</em> and <strong>bold statements</strong> for good measure!</p>"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <label htmlFor="description" className="form-label">
                    Post Description
                  </label>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="description"
                        id="description"
                        cols="30"
                        rows="9"
                        placeholder="<p>Here's your canvas! Use HTML to craft your epic post description. Feel the power as you unleash your creativity. Add <strong>bold statements</strong> and <em>captivating phrases</em>. Ready, set, dazzle the world!</p>"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn button button-contactForm">
                    {state === "submitting"
                      ? "Submitting Post..."
                      : "Submit Post"}
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
  const token = getAuthToken();
  const method = request.method;
  const data = await request.formData();

  let message = "";

  const title = data.get("title");
  const image = data.get("image");
  const tags = data.get("tag");
  const summary = data.get("summary");
  const description = data.get("description");

  if (image && title && tags && summary && description) {
    const newPostData = {
      title: title,
      main_image: image,
      tags: tags,
      summary: summary,
      description: description,
    };
    try {
      const response = await fetch(`http://${config.backend_url}/api/blog/`, {
        method: method,
        body: JSON.stringify(newPostData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 400) {
        return response;
      }

      if (!response.ok) {
        throw json({ message: "could not authenticate user" });
      }

      return redirect("/blogs");
    } catch (err) {
      message = "Error connecting to the server. Please try again later.";
    }
  } else {
    message = "Invalid form data. Please check your inputs.";
  }
  return { message };
}

// export async function action({ request, params }) {
//   const token = getAuthToken();
//   const method = request.method;
//   const data = await request.formData();

//   let message = "";

//   const title = data.get("title");
//   const image = data.get("image");
//   const tags = data.get("tag");
//   const summary = data.get("summary");
//   const description = data.get("description");

//   if (image && title && tags && summary && description) {
//     const formData = new FormData();

//     formData.append("title", title);
//     formData.append("upload_image", image);
//     formData.append("tags", tags);
//     formData.append("summary", summary);
//     formData.append("description", description);

//     try {
//       const response = await fetch(`http://${config.backend_url}/api/blog/`, {
//         method: method,
//         body: formData,
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 400) {
//         return response;
//       }

//       if (!response.ok) {
//         throw json({ message: "could not authenticate user" });
//       }
//       const resData = await response.json();
//       console.log(resData);
//       return redirect("/blogs");
//     } catch (err) {
//       message = "Error connecting to the server. Please try again later.";
//     }
//   } else {
//     message = "Invalid form data. Please check your inputs.";
//   }
//   return { message };
// }
