import { useEffect, useState } from "react";
import { useProducts } from "../Context/ProductsContext";
import { ImSearch } from "react-icons/im";
import { useSearchParams } from "react-router-dom";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import styles from "./ProductsPage.module.css";
import { FaListUl } from "react-icons/fa";
import {
  createQueryObject,
  filterCategories,
  getInitialQuery,
  searchProducts,
  mapToApiCategory
} from "../Helper/helper";

function ProducsPage() {
  const products = useProducts();

  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");

    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterCategories(finalProducts, query.category);

    setDisplayed(finalProducts);
  }, [query]);

  const searchHandler = () => {
    setQuery((prev) => createQueryObject(prev, { search }));
  };

  const sideHadler = (e) => {
    if (e.target.tagName !== "LI") return;

    const uiCategory = e.target.innerText;
    const category = mapToApiCategory(uiCategory);

    setQuery((prev) => createQueryObject(prev, { category }));
  };

  return (
    <>
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

      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>

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
      </div>
    </>
  );
}

export default ProducsPage;
