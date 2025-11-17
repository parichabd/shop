const shortText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
);
    return searchedProducts
};


const filterCategories = (products,category)=>{
    if (!category) return products
    const filteredCategories = products.filter((p)=>p.category === category);
    return filteredCategories
}   

const createQueryObject = (currentQuery , newQuery) => {
  if(newQuery.category === "all") {
    const {category , ...rest} = currentQuery
    return rest
  }
  if(newQuery === ""){
    const {search , ...rest} = currentQuery
    return rest
  }
  return{
    ...currentQuery,
    ...newQuery
  }
}
export { shortText , searchProducts,filterCategories,createQueryObject};
