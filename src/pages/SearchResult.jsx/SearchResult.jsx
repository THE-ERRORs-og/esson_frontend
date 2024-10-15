import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { queryProducts } from "@/data/queryProduct"; // Assume this queries the products

const SearchResults = () => {
  const { category, query } = useParams(); // Get category and query from the URL
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const searchParams = {
      name: query || "", // If there's no query, use an empty string
      category: category !== "all" ? category : null, // If the category is "all", treat it as null
    };

    const results = queryProducts(searchParams);
    setFilteredProducts(results);
  }, [category, query]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg font-bold mb-4">Search Results for "{query}"</h2>
      {filteredProducts.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <li key={product.id} className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-500">{product.category}</p>
              {/* You can add more product details here */}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;
