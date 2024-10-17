import products from "./product_data";

// This function filters products based on the query object passed
const queryProducts = (query) => {
  return products.filter((product) => {
    return (
      (!query.id || product.id === query.id) &&
      (!query.name ||
        product.name.toLowerCase().includes(query.name.toLowerCase())) &&
      (!query.category ||
        product.category.toLowerCase() === query.category.toLowerCase()) &&
      (!query.description ||
        product.description
          .toLowerCase()
          .includes(query.description.toLowerCase())) &&
      (!query.tags || query.tags.every((tag) => product.tags.includes(tag))) &&
      (!query.size || query.size.every((size) => product.size.includes(size)))
    );
  });
};

// This function queries unique values of a specific field from products
const getUniqueValues = (field) => {
  const uniqueValues = new Set();
  products.forEach((product) => {
    if (Array.isArray(product[field])) {
      product[field].forEach((item) => uniqueValues.add(item));
    } else {
      uniqueValues.add(product[field]);
    }
  });

  return Array.from(uniqueValues); 
};

export { queryProducts, getUniqueValues };
