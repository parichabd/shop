import { useState } from "react";
import { useProducts } from "../Context/ProductsContext";
import { ImSearch } from "react-icons/im";
import Card from "../Components/Card";
import Loader from "../Components/Loader";

import styles from "./ProductsPage.module.css";

function ProducsPage() {
  const [search, setSearch] = useState("");
  const products = useProducts();

  const searchHandler = () => {
    console.log("search!");
  }
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
          {!products.length && <Loader />}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>sidebar</div>
      </div>
    </>
  );
}

export default ProducsPage;
