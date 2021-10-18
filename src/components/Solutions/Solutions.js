import "./Solutions.css";
import Common from "../Common/Common";
import SolutionsData from "./SolutionsData";

const Solutions = () => {
  return (
    <div className="solution_container">
      <Common data={SolutionsData}>
        <ul className="solutions_features">
          <li>
            <span>Tinger eConsult Program</span>
          </li>
          <li>
            <span>Provide More Potential Video</span>
          </li>
          <li>
            <span>Remote Monitoring</span>
          </li>
          <li>
            <span>Mental Health Solutions</span>
          </li>
          <li>
            <span>Surgical Transition Solutions</span>
          </li>
        </ul>
      </Common>
    </div>
  );
};

export default Solutions;
