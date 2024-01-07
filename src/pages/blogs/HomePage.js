import React, { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";

import FeatureContainer from "../../components/Section/Feature";
import LatestPosts from "../../components/Section/LatestPosts";

function HomePage() {
  const { feature, latest } = useLoaderData();
  return (
    <>
      <main className="bg-grey pb-30">
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
          <Await resolve={feature}>
            {(loadedFeatures) => (
              <FeatureContainer featurePosts={loadedFeatures} />
            )}
          </Await>
        </Suspense>
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
          <Await resolve={latest}>
            {(loadedLatest) => <LatestPosts latest={loadedLatest} />}
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
  const latestPosts = [
    {
      id: "mastering-machine-learning",
      image: "url(/assets/imgs/tech/tech-post-1.jpg)",
      title: "Mastering Machine Learning: A Comprehensive Guide",
      post_link: "/",
      tag_link: "/",
      tag: "Technology",
      date: "15 January",
      votes: 28,
    },
    {
      id: "future-of-artificial",
      image: "url(/assets/imgs/tech/tech-post-2.jpg)",
      title: "The Future of Artificial Intelligence: Trends and Developments",
      post_link: "/",
      tag_link: "/",
      tag: "Technology",
      date: "15 October",
      votes: 15,
    },
    {
      id: "latest-inno-mobile",
      image: "url(/assets/imgs/tech/tech-post-3.png)",
      title: "Exploring the Latest Innovations in Mobile Technology",
      post_link: "/",
      tag_link: "/",
      tag: "Technology",
      date: "12 November",
      votes: 20,
    },
    {
      id: "future-of-quantum-computing",
      image: "url(/assets/imgs/tech/tech-post-4.jpg)",
      title: "The Future of Quantum Computing: Exploring Its Possibilities",
      post_link: "/",
      tag_link: "/",
      tag: "Technology",
      date: "5 October",
      votes: 15,
    },
  ];

  return latestPosts;
}

export async function loader() {
  return defer({
    feature: await loadFeatureBlogs(),
    latest: await loadLatestBlogs(),
  });
}
