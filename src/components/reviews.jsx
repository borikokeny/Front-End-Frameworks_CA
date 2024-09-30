import React from "react";

function Reviews({ reviews }) {
  return (
    <div>
      {reviews.map((items, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <p className="font-bold">{items.username}</p>

            <div className="py-2">
              <p>{items.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;