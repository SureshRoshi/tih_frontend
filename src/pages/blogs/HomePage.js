import React, { Suspense, useEffect } from "react";
import { Await, defer, json, redirect, useLoaderData } from "react-router-dom";

import FeatureContainer from "../../components/Section/Feature";
import LatestPosts from "../../components/Section/LatestPosts";
import Loader from "../../components/Layout/Loader";

import { getAuthToken } from "../../components/util/auth";
import config from "../../components/util/config";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { feature, latest, popular } = useLoaderData();

  const token = localStorage.getItem("token");

  if (!token) {
    redirect("/login");
  }

  return (
    <>
      <main className="bg-grey pb-30">
        <Suspense fallback={<Loader />}>
          <Await resolve={feature}>
            {(loadedFeatures) => (
              <FeatureContainer featurePosts={loadedFeatures} />
            )}
          </Await>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Await resolve={Promise.all([latest, popular])} fallback={<Loader />}>
            {(loadedData) => (
              <LatestPosts latest={loadedData[0]} mostPopular={loadedData[1]} />
            )}
          </Await>
        </Suspense>
      </main>
    </>
  );
}

export default HomePage;

async function loadFeatureBlogs() {
  const featurePosts = [
    {
      id: "mastering-git",
      image:
        "url(/assets/imgs/hero-tech/hero-tech-3.png) center/cover no-repeat",
      title: "Mastering Git: Best Practices for Software Development",
      tag: "Tech Tips",
      date: "15 September 2023",
    },
    {
      id: "enhancing-code-quality",
      image:
        "url(/assets/imgs/hero-tech/hero-tech-1.png) center/cover no-repeat",
      title: "Enhancing Code Quality: Best Practices for Developers",
      tag: "Development Tips",
      date: "26 August 2023",
    },
    {
      id: "impact-of-ai",
      image:
        "url(/assets/imgs/hero-tech/hero-tech-2.jpg) center/cover no-repeat",
      title: "The Impact of Artificial Intelligence on Future Technologies",
      tag: "Tech Exploration",
      date: "15 September 2023",
    },
    {
      id: "impact-of-healthy-env",
      image:
        "url(/assets/imgs/hero-tech/hero-tech-4.jpg) center right/cover no-repeat",
      title:
        "The Impact of a Healthy Work Environment on Developer Productivity",
      tag: "Health in Tech",
      date: "22 September 2023",
    },
  ];

  return featurePosts;
}

async function loadLatestBlogs() {
  const token = getAuthToken();

  try {
    const response = await fetch(
      `http://${config.backend_url}:8000/api/blog/`,
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
      console.log(resData);
      return resData.data;
    }
  } catch (error) {
    return {
      message: `Hold up! Our server is on an unscheduled vacation 🏖️. 
        It's taking a break from your requests. Give it a moment to recharge its tropical vibes and try again later!`,
    };
  }
}

async function mostPopularBlogs() {
  const mostPopular = [
    {
      id: "power-of-js",
      image: "/assets/imgs/tech/dev-thumb-1.jpg",
      title: "Leveraging the Power of JavaScript: A Developer's Guide",
      post_link: "power-of-js",
      date: "15 October",
    },
    {
      id: "trends-in-web",
      image: "/assets/imgs/tech/dev-thumb-2.jpg",
      title:
        "Exploring the Latest Trends in Web Development: A Developer's Perspective",
      post_link: "trends-in-web",
      date: "25 September",
    },
    {
      id: "mastering-productivity",
      image: "/assets/imgs/tech/dev-thumb-3.jpg",
      title:
        "Mastering Productivity: A Tech Enthusiast's Guide to Efficient Work",
      post_link: "mastering-productivity",
      date: "18 September",
    },
    {
      id: "challenges-of-emerging-threats",
      image: "/assets/imgs/tech/dev-thumb-4.jpg",
      title: "Tech Leaders Navigate the Challenges of Emerging Viral Threats",
      post_link: "challenges-of-emerging-threats",
      date: "21 September",
    },
  ];

  return mostPopular;
}

export async function loader() {
  return defer({
    feature: await loadFeatureBlogs(),
    latest: await loadLatestBlogs(),
    popular: await mostPopularBlogs(),
  });
}
