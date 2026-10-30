import React from "react";
import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[12%] px-16 text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-semibold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-3 px-12 text-l rounded-lg flex h-12 w-26 hover:bg-opacity-80">
          <FaPlay className="mt-1.5 mr-4" /> Play
        </button>
        <button className="mx-2 bg-gray-600 text-white bg-opacity-30 p-3 px-16 text-l rounded-lg flex h-12 w-30 hover:bg-opacity-80">
          <ImInfo className="mt-1.5 mr-4"/> More Info.
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
