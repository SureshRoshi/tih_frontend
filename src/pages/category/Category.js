import { Link, defer, useLoaderData } from "react-router-dom";

export default function CategoryPage() {
  const { tag } = useLoaderData();
  return (
    <main>
      <div className="archive-header pt-50">
        <div className="container">
          <h2 className="font-weight-900">{tag.toUpperCase()}</h2>
          <div className="breadcrumb">
            <Link to="/blogs" rel="nofollow">
              Home
            </Link>
            <span></span> {tag}
          </div>
          <div className="bt-1 border-color-1 mt-30 mb-50"></div>
        </div>
      </div>
    </main>
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
