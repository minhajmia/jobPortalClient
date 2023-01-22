import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  console.log(jobs);
  return (
    <div className="flex">
      <div className="mr-10">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <div>
        <div className=" bg-red-400 p-5 mb-5 rounded-md">
          <h3 className="text-6xl font-bold">{jobs.length}+ Jobs</h3>
          <h4>Find Jobs, Employment & Career Opportunities</h4>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobs.map((job) => (
            <Job job={job}></Job>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
