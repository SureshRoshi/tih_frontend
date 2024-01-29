import { Link } from "react-router-dom";

export default function Home() {
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="text-center fw-bold pt-5 mt-5 mb-3 pb-3 display-5">
        <div className="text-center fw-bold pt-5 mt-5 mb-3 pb-3 display-5">
          Explore the World of <br />{" "}
          <span style={{ color: "#5869DA" }}>
            {token ? (
              <Link to={"/blogs"}> Torry Insight Hub</Link>
            ) : (
              "Torry Insight Hub"
            )}
          </span>
        </div>
      </div>
    </>
  );
}
