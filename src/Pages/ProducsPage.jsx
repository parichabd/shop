import { useProducts } from "../Context/ProductsContext";
import Card from "../Components/Card";
import Loader from "../Components/Loader"
import styles from "./ProductsPage.module.css"

function ProducsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader/>}
        {products.map((p) => (
         <Card key={p.id} data={p}/>
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProducsPage;
