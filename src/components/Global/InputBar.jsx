import React from "react";

const InputBar = ({ onSubmit }) => {
  const [inputText, setInputText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputText);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row justify-center items-center max-sm:flex-col"
      >
        <input
          id="inputText"
          type="text"
          className="form-control block max-w-lg px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-shark-950 bg-white bg-clip-padding border border-solid border-shark-200 rounded transition ease-in-out m-0 focus:text-shark-950 focus:bg-white focus:border-cinnabar-600 focus:outline-none"
          placeholder="GitHub Username"
          value={inputText}
          onChange={({ target }) => setInputText(target.value)}
          required
        />
        <button
          type="submit"
          className="inline-block px-7 py-3 bg-gradient-to-r from-cinnabar-400 to-cinnabar-600 text-shark-50 font-semibold text-sm leading-snug uppercase rounded shadow-md hover:bg-gradient-to-r hover:from-cinnabar-500 hover:to-cinnabar-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gradient-to-r active:from-cinnabar-600 active:to-cinnabar-800 active:shadow-lg disabled:bg-gradient-to-r disabled:from-cinnabar-100 disabled:to-cinnabar-300 disabled:text-cinnabar-700 transition duration-150 ease-in-out"
        >
          Pop!
        </button>
      </form>
    </div>
  );
};

export default InputBar;
