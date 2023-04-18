import React from "react";

const Card = ({ description, title, Icon }) => {
  return (
    <div className="relative col-span-6 bg-secondary rounded-lg shadow-md p-4">
      <div className="flex  justify-between items-center">
        <h2 className=" text-xl font-bold mb-4">{title}</h2>
        <div>
          <Icon />
        </div>
      </div>
      <p className="text-primary  leading-6 mb-4">{description}</p>
      <button className="bg-white text-primary font-bold px-4 py-2 rounded-full hover:bg-primary hover:text-secondary transition-colors duration-300 ease-in-out">
        Learn More
      </button>
    </div>
  );
};

export default Card;
