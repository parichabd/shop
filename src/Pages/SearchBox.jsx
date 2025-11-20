import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../Helper/helper";

import styles from "./SearchBar.module.css"

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((prev) => createQueryObject(prev, { search }));
  };
  return (
    <div className={styles.search}>
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
  );
}

export default SearchBox;
