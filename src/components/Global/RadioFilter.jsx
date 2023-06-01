import React from "react";

const RadioFilter = ({ options, value, setValue, ...props }) => {
  return (
    <>
      <ul className="flex flex-wrap gap-3 my-10 justify-center">
        {options.map((option) => (
          <li key={option}>
            <input
              type="radio"
              id={option}
              name={option}
              value={option}
              checked={value === option}
              onChange={({ target }) => setValue(target.value)}
              {...props}
              className="peer hidden"
            />
            <label
              htmlFor={option}
              className="flex justify-center items-center rounded-md border border-shark-100 bg-white px-3 py-2 text-shark-900 hover:border-shark-200 peer-checked:border-cinnabar-500 peer-checked:bg-cinnabar-500 peer-checked:text-shark-50 cursor-pointer text-sm font-semibold"
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RadioFilter;
