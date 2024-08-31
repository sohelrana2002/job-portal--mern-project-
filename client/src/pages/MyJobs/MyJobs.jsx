import "./myJobs.css";
import { useMyPostContext } from "../../context/MyJobContext";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../../shared/Loading/Loading";

const MyJobs = () => {
  const {
    getDataByEmail,
    jobs,
    isLoading,
    dispatch,
    searchQuery,
    handleSearchQuery,
    searchJobData,
    handleDeleteJob,
  } = useMyPostContext();

  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const getEmail = localStorage.getItem("email");

  useEffect(() => {
    getDataByEmail(`http://localhost:8000/api/jobs-by-email/${getEmail}`);
  }, []);

  const resSearchData = searchJobData(jobs, searchQuery);
  // console.log(resSearchData);

  const handleDeleteBtn = (id) => {
    console.log(id);
    setShowDeletePopup(true);

    setDeleteId(id);
  };

  const handleDeleteFromServer = () => {
    handleDeleteJob(deleteId);
    setShowDeletePopup(false);
  };

  // ----------loading------------
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container myJob__container">
      {jobs?.length <= 0 ? (
        <h1 className="post_nothing">You can't post any job</h1>
      ) : (
        // ----------container box-------
        <div className="myJon__container-box">
          <h1 className="job__title">All My Jobs</h1>

          <form className="search__box">
            <input
              type="text"
              onChange={handleSearchQuery}
              placeholder="Search job...."
              value={searchQuery}
            />
          </form>

          {/* ---------table----------- */}
          <section className="py-1">
            <div className="w-full xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
              <div className="p-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-5 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-blueGray-700 text-5xl">
                        All Jobs
                      </h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <NavLink
                        to={"/post-job"}
                        className="bg-indigo-500 text-white active:bg-indigo-600 text-md font-bold uppercase px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Post A New Job
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="block w-full overflow-x-auto">
                  <table className="items-center bg-transparent w-full border-collapse ">
                    <thead>
                      <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-2xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          No.
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-2xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Title
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-2xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Company Name
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-2xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Salary
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-2xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Edit
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-2xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left rounded">
                          Delete
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {resSearchData &&
                        resSearchData?.map((curElem, index) => {
                          return (
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-2xl whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                {index + 1}
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-2xl capitalize  whitespace-nowrap p-4">
                                {curElem.jobTitle}
                              </td>
                              <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-2xl whitespace-nowrap p-4">
                                {curElem.companyName}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-2xl whitespace-nowrap p-4">
                                ${curElem.minPrice} - ${curElem.maxPrice}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                46,53%
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                                <button
                                  onClick={() => handleDeleteBtn(curElem._id)}
                                  className="rounded-sm bg-red-700 py-2 px-2 text-white"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                    {/* ----------delete popup message------------ */}
                    <div
                      className={`delete__popup ${showDeletePopup && "active"}`}
                    >
                      <p className="filter__title">
                        Are you sure to delete your job?
                      </p>

                      <div className="delete__popup__btn">
                        <button
                          className="btn"
                          onClick={() => setShowDeletePopup(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn"
                          onClick={handleDeleteFromServer}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default MyJobs;
