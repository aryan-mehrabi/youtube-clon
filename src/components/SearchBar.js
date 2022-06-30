import react, { useState } from "react";

const SearchBar = ({ request }) => {
    const [term, setTerm] = useState("");
    const onSubmitSearch = (event) => {
        event.preventDefault();
        request(term);
    }
  return (
    <form onSubmit={onSubmitSearch} className="ui form">
      <div className="field">
        <label className="label">search your video</label>
        <input onChange={(e) => setTerm(e.target.value)} value={term} className="input" />
      </div>
    </form>
  );
};

export default SearchBar;
