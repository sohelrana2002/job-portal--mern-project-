import { useJobDataContext } from "../../context/JobDataContext";
import Loading from "../../shared/Loading/Loading";

import SearchBar from "../../helper/SearchBar/SearchBar";
import "./Banner.css";
import Jobs from "../Jobs/Jobs";

const Banner = () => {
  const { isLoading, selectedCategory, jobs, query, filteredJobsData, locationQuery, } =
    useJobDataContext();

  const resultJobData = filteredJobsData(jobs, selectedCategory, query, locationQuery);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <div className="container banner__container">
        <div className="banner-find__job">
          <h3 className="find__job-heading">
            Find you <span>new job</span> today
          </h3>
          <span className="sub__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            repellendus.
          </span>
        </div>
        <SearchBar />
      </div>

      <Jobs data={resultJobData} />
    </section>
  );
};

export default Banner;
