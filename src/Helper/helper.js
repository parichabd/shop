const shortText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  return products.filter((p) => p.title.toLowerCase().includes(search));
};

const filterCategories = (products, category) => {
  if (!category) return products;
  return products.filter((p) => p.category === category);
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }

  if ("search" in newQuery && newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }

  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  if (category) query.category = category;
  if (search) query.search = search;

  return query;
};

const mapToApiCategory = (uiCategory) => {
  const map = {
    All: "all",
    Electronics: "electronics",
    Jewelery: "jewelery",
    "Men's Clothing": "men's clothing",
    "Women's Clothing": "women's clothing",
  };

  return map[uiCategory] || null;
};

const sumProducts = (products) => {
  const itemsCounter = products.reduce((acc, cur) => acc + cur.quantity, 0);
  const total = products.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  ).toFixed(2);
  return {itemsCounter , total}
};

export {
  shortText,
  searchProducts,
  filterCategories,
  createQueryObject,
  getInitialQuery,
  mapToApiCategory,
  sumProducts,
};
