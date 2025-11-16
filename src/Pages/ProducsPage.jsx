import { useProducts } from "../Context/ProductsContext";
import Card from "./Card";

import styles from "./ProductsPage.module.css"
function ProducsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>Loading ...</p>}
        {products.map((p) => (
         <Card key={p.id} data={p}/>
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProducsPage;
