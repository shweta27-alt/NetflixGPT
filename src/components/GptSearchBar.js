import React from "react";
import lang from "../utils/language"
import { useSelector } from "react-redux";

function GptSearchBar() {
  const langKey = useSelector((store)=> store.config.lang)
  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
        placeholder={lang[langKey].gptPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
