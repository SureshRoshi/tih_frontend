import { Link, useNavigation } from "react-router-dom";
import Loader from "../../components/Layout/Loader";

export default function Home() {
  const { state } = useNavigation();

  const token = localStorage.getItem("token");

  if (state === "loading") {
    return <Loader />;
  }

  return (
    <>
      <div className="text-center fw-bold pt-50 mt-50 pb-50 mb-50 display-5">
        <div className="text-center fw-bold pt-20 mt-20 pb-20 mb-20 display-5">
          Explore the World of <br />
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
