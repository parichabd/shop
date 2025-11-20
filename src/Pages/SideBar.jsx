import { FaListUl } from "react-icons/fa";
import { createQueryObject, mapToApiCategory } from "../Helper/helper";

import styles from "./SideBar.module.css";

const categories = [
  { id: 1, type: "All" },
  { id: 2, type: "Electronics" },
  { id: 3, type: "Jewelery" },
  { id: 4, type: "Men's Clothing" },
  { id: 5, type: "Women's Clothing" },
];

function SideBar({ setQuery, query }) {
  const sideHadler = (e) => {
    const uiCategory = e.target.innerText;
    const category = mapToApiCategory(uiCategory);
    if (e.target.tagName !== "LI") return;

    setQuery((prev) => createQueryObject(prev, { category }));
  };
  return (
    <div className={styles.sideBar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>

      <ul onClick={sideHadler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
