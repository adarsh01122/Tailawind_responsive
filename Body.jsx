import React from "react";
const Body = () => {
  return (
    <div className="lg:flex">
      <div className=" flex item-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <img
          src="./src/assets/pngegg.png"
          alt="b2"
          className="absoluts  h-1/4 w-1/4 md:h-72 py-12 lg:h-[400px] lg:w-[200px] "
        />
      </div>{" "}
      <br />
      <br /> 
      
      <div className="lg:flex-1 lg:order-1">
      <h1 className="text-5xl font-bold leading-tight">
        host your websites in 5 min
      </h1>
      <div className="py-3 px-6">
        <p className="h-4 text-red-700  text-center min-h-3">
          Lorem, ipsum dolor sit amet consectetur. Voluptate mollitia at officia
          ipsum illo? Eum labore,!
        </p>
        <br />
        <br />
        <form
          action=""
          className="flex flex-col gap-3 min-h-3 py-3 md:flex-row"
        >
          <input
            type="email"
            className="rounded-md px-4 py-3 placeholder:text-gray-400"
            placeholder="Enter email"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
            join waitlist
          </button>
        </form>
      </div>
      <div className=" flex gap-2">
        <img src="" alt="" />
        <p className="text-gray-400"> no spam ever</p>
      </div>
      </div>
      
    </div>
  );
};
export default Body;
