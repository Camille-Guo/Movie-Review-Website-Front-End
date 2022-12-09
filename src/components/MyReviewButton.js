import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function MyReviewButton() {
  // const navigate = useNavigate();
  // const handleSubmit = (event) => {
  //   try {
  //     navigate("/myreview", { replace: true });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div>
      {/* <div style={{ flexDirection: "row", direction: "rtl" }}></div> */}
      {/* <button onClick={handleSubmit}>Home</button> */}
      {/* <Button variant="primary" onClick={handleSubmit}> */}
      <Link to='/myreview'>
      <Button variant="primary">
        My Reviews
      </Button>
      </Link>
    </div>
  );
}
export default MyReviewButton;
