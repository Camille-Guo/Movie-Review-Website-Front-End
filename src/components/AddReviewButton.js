import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { User } from "../helpers/LocalStorage";


function AddReviewButton() {
  const {movie_id} = useParams();
  const userInfo = User.getUser();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    userInfo
      ? navigate("/addreview/"+ movie_id, { replace: true })
      : navigate("/identity#login", { replace: true });
    // try {
    //   navigate("/addreview", { replace: true });
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div>
      {/* <div style={{ flexDirection: "row", direction: "rtl" }}></div> */}
      {/* <button onClick={handleSubmit}>Home</button> */}
      {/* <Button variant="primary" onClick={handleSubmit}> */}
      <Button variant="info" onClick={handleSubmit}>
        Add Review
      </Button>
    </div>
  );
}
export default AddReviewButton;
