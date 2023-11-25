import Card from "../Card/Card";
import "./Jobs.css";

const Jobs = ({ data }) => {
  return (
    <section className="job__bg">
      <div className="container jobs__container">
        <div className="left__job">left</div>

        <div className="middle__job">
          {data.map((curElem, i) => {
            return <Card cardData={curElem} key={i} />;
          })}
        </div>

        <div className="right__jobs">right</div>
      </div>
    </section>
  );
};

export default Jobs;
