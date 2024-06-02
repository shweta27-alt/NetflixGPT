import React, { useRef } from "react";
import lang from "../utils/language";
import { useSelector } from "react-redux";
import openai from '../utils/openai'; 

function GptSearchBar() {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleGptSearchClick = async() => {
    console.log(searchText.current.value);
    //make an API call to gpt and get result

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + "only give me name of 5 movies, comma separted like the example given ahead.Example Gadar, Don, Razzi, Gangubai, Fall guy";
     const gptResult = await openai.chat.completions.create({
      messages : [{ role:'user', content:gptQuery}],
      model: 'gpt-3.5-turbo'
     })

     console.log(gptResult.choices)
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
