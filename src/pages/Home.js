import Person from "../components/person/Person";
import "./Home.css";
import data from "../helper/data";
import { useState } from "react";

const Home = () => {
  const [show, setShow] = useState(true);
  const [btnStyle, setBtnStyle] = useState({
    name: "CLOSE ALL",
    bgColor: "orange",
  });
  const handleClick = () => {
    if (show) {
      setBtnStyle({
        name: "VİEW ALL",
        bgColor: "green",
      });
    } else {
      setBtnStyle({
        name: "CLOSE ALL",
        bgColor: "orange",
      });
    }
    setShow(!show);
  };
  return (
    <div className="home-container">
      <header>
        <h1>
          {show && data.length}
          {!show && "0"} birthdays today
        </h1>
      </header>
      {show && <Person data={data} />}
      {/* <button className="btn" onClick={() => setPersonList([])}> */}
      <button
        className="btn"
        onClick={handleClick}
        style={{ backgroundColor: btnStyle.bgColor }}
      >
        {btnStyle.name}
      </button>
    </div>
  );
};

export default Home;
