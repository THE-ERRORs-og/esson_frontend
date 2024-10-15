import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { queryProducts } from "@/data/queryProduct"; // Assume this queries the products
import ProductSlider from "@/components/Sliders/Slider1";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const navigate = useNavigate();
  const query = useQuery(); // Get the query parameters from the URL
  const searchQuery = query.get("query") || ""; // Default to empty string if no query
  const category = query.get("category") || "all"; // Default to "all" if no category
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [groupedProducts, setGroupedProducts] = useState({}); // For grouping products by category and isLatest

  useEffect(() => {
    const searchParams = {
      name: searchQuery,
      category: category !== "all" ? category : null,
    };

    const results = queryProducts(searchParams);
    setFilteredProducts(results);
  }, [category, searchQuery]);

  useEffect(() => {
    // Group products by category and isLatest
    const grouped = filteredProducts.reduce((acc, product) => {
      const cat = product.category || "Others"; // Group uncategorized products under 'Others'
      const latestKey = product.isLatest ? "Latest" : "Old"; // Key for latest and old products

      if (!acc[cat]) {
        acc[cat] = { Latest: [], Old: [] }; // Initialize with arrays for Latest and Old
      }
      acc[cat][latestKey].push(product); // Add the product to its respective category and status
      return acc;
    }, {});

    setGroupedProducts(grouped);
  }, [filteredProducts]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg font-bold mb-4">
        Search Results for "{searchQuery}"
        {(category !== "all" && ` in ${category}`) || ""}
      </h2>
      {Object.keys(groupedProducts).length > 0 ? (
        Object.keys(groupedProducts).map((cat) => (
          <div key={cat} className="mb-8">
            <h3 className="text-xl font-semibold mb-2">{cat}</h3>

            {/* Render Latest Products */}
            {groupedProducts[cat].Latest.length > 0 && (
              <ProductSlider products={groupedProducts[cat].Latest} />
            )}

            {/* Render Old Products */}
            {groupedProducts[cat].Old.length > 0 && (
              <div>
                <h4 className="font-bold">Old Products</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedProducts[cat].Old.map((product) => (
                    <li
                      key={product.id}
                      className="border p-4 rounded-lg shadow-lg"
                      onClick={() => navigate(`/product-page/${product.id}`)}
                    >
                      <h5 className="font-semibold">{product.name}</h5>
                      <p className="text-gray-500">{product.category}</p>
                      {/* You can add more product details here */}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
          <i className="material-icons text-6xl text-gray-400 mb-4">
            search_off
          </i>{" "}
          {/* Icon for better UX */}
          <p className="text-lg font-semibold text-gray-600">
            No products found
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Try adjusting your search or filtering by a different category.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
