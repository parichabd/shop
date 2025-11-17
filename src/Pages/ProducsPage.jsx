import { useEffect, useState } from "react";
import { useProducts } from "../Context/ProductsContext";
import { ImSearch } from "react-icons/im";
import Card from "../Components/Card";
import Loader from "../Components/Loader";

import styles from "./ProductsPage.module.css";
import { FaListUl } from "react-icons/fa";

function ProducsPage() {
  const products = useProducts();


  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);

  useEffect(()=>{
    setDisplayed(products)
  },[products])
  const searchHandler = () => {
    console.log("search!");
  }
  const sideHadler = (e) =>{
    const {tagName} = e.target
    const category = e.target.innerText.toLowerCase()
    if (tagName !== "LI") return
    console.log(category);
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
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl/>
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
