import { useEffect, useState } from "react";
import { useProducts } from "../Context/ProductsContext";
import { useSearchParams } from "react-router-dom";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import styles from "./ProductsPage.module.css";
import {
  filterCategories,
  getInitialQuery,
  searchProducts,
} from "../Helper/helper";
import SearchBox from "./SearchBox";
import SideBar from "./SideBar";

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

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <SideBar setQuery={setQuery} query={query} />
      </div>
    </>
  );
}

export default ProducsPage;
