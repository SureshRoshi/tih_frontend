import { defer, useLoaderData } from "react-router-dom";

export default function CategoryPage() {
  const { tag } = useLoaderData();
  return (
    <div className="text-center fw-bold pt-50 mt-50 pb-50 mb-50 display-5">
      <div className="text-center fw-bold pt-20 mt-20 pb-20 mb-20 display-5">
        Explore <span style={{ color: "#5869DA" }}>{tag}</span>
      </div>
    </div>
  );
}

async function tagLoader(id) {
  return id;
}

export async function loader({ params }) {
  const { tagId } = params;
  return defer({
    tag: await tagLoader(tagId),
  });
}
