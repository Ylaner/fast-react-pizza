import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);

  function handleSubmit(e) {
    e.preventDefault();

    navigate(`/order/${query}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`w-28  rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all
        duration-300 placeholder:text-stone-400 focus:outline-none  focus:ring focus:ring-yellow-500 sm:w-56  md:focus:w-72 ${
          username ? "md:mr-44" : ""
        }`}
      />
    </form>
  );
}

export default SearchOrder;
