import React from "react";

const Job = ({ job }) => {
  const { role, location, type } = job;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {role}
          <div className="badge badge-secondary">new</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{type}</div>
          <div className="badge badge-outline">{location}</div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn  btn-outline inline-block mb-5">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Job;
