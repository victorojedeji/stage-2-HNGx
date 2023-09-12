import React from "react";

export default function MovieCard({ movieData }) {
  return (
    <div className="h-[490px] w-[250px] border-2 border-black">
      <div
        className="h-[370px]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieData.poster_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

