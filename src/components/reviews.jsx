import React from "react";

function Reviews({ reviews }) {
  return (
    <div>
      {reviews.map((items, index) => {
        return (
          <div className="flex flex-col mt-3" key={index}>
            <p className="">{items.username}</p>
            <div className="-mt-2 py-2 italic">
              <p>"{items.description}"</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;