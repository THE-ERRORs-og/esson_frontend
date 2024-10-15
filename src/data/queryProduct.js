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
      // If the field is an array (e.g., tags, size), add each element individually
      product[field].forEach((item) => uniqueValues.add(item));
    } else {
      // If the field is a string (e.g., category), add it directly
      uniqueValues.add(product[field]);
    }
  });

  return Array.from(uniqueValues); // Convert Set back to an array for easier use
};

export { queryProducts, getUniqueValues };
