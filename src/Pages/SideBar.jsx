import { FaListUl } from "react-icons/fa";
import { createQueryObject, mapToApiCategory } from "../Helper/helper";


function SideBar({setQuery}) {
    const sideHadler = (e) => {
    
    const uiCategory = e.target.innerText;
    const category = mapToApiCategory(uiCategory);
    if (e.target.tagName !== "LI") return;

    setQuery((prev) => createQueryObject(prev, { category }));
  };
  return <div>
    <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>

          <ul onClick={sideHadler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
  </div>;
}

export default SideBar;
