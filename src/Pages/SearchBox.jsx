import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../Helper/helper";

function SearchBox({search, setSearch,setQuery}) {
    const searchHandler = () => {
    setQuery((prev) => createQueryObject(prev, { search }));
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
