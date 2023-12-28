import React from "react";
import FeatureContainer from "../../components/Section/Feature";
import LatestPosts from "../../components/Section/LatestPosts";

function HomePage() {
  return (
    <>
      <main className="bg-grey pb-30">
        <FeatureContainer />
        <LatestPosts />
      </main>
    </>
  );
}

export default HomePage;
