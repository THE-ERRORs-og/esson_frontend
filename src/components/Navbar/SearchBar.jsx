import { queryProducts, getUniqueValues } from "@/data/queryProduct";
import React, { useState, useEffect, useRef } from "react"; // Import useRef
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState(["all"]); // Start with "All Categories"
  const [isFocused, setIsFocused] = useState(false); // Track input focus
  const navigate = useNavigate(); // Use navigate to programmatically redirect
  const searchBarRef = useRef(null); // Create a ref for the search bar container

  // Fetch unique categories on component mount
  useEffect(() => {
    const uniqueCategories = ["all", ...getUniqueValues("category")];
    setCategories(uniqueCategories);
  }, []);

  // Update filtered products when search term or category changes
  useEffect(() => {
    const query = {
      name: searchTerm,
      category: category !== "all" ? category : null,
    };
    const results = queryProducts(query);
    setFilteredProducts(results);
  }, [searchTerm, category]);

  // Function to handle search and navigate to search results
  const handleSearch = () => {
    if (searchTerm.trim()) {
      setSearchTerm(""); // Clear search input
      navigate(`/search?category=${category}&query=${searchTerm}`);
    }
  };

  // Handle Enter key press in the input field
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Function to handle when clicking on a suggested product
  const handleProductClick = (product) => {
    setSearchTerm(""); // Clear search input
    navigate(`/product-page/${product.id}`);
  };

  // Close popup when clicking outside the search bar
  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative flex items-center h-[70%] w-full justify-center max-w-full"
      ref={searchBarRef}
    >
      {/* Search input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)} // Show popup when input is focused
        onKeyPress={handleKeyPress} // Trigger search on Enter key press
        placeholder="Search"
        className="border text-sm border-gray-300 h-full px-4 py-2 w-full md:flex-1 min-h-5 rounded-l-md focus:outline-none"
      />

      {/* Category filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="hidden md:flex border text-sm border-gray-300 h-full px-4 py-2 bg-white focus:outline-none"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === "all"
              ? "All Categories"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      {/* Search button */}
      <button
        onClick={handleSearch} // Trigger search on button click
        className="bg-gray-800 text-white h-full px-4 text-center flex items-center justify-center rounded-r-md"
      >
        <i className="text-2xl material-icons">search</i>
      </button>

      {/* Filtered products popup */}
      {isFocused && searchTerm && filteredProducts.length > 0 && (
        <div className="absolute top-[100%] left-0 right-0 bg-white border border-gray-200 shadow-lg z-50 max-h-80 overflow-y-auto">
          <ul className="p-4">
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <Link
                  to={`/product-page/${product.id}`}
                  className="block p-2 hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out border-b border-gray-200"
                  onClick={() => handleProductClick(product)} // Call the new handler
                >
                  <p className="text-sm font-semibold">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.category}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Show message if no products are found */}
      {isFocused && searchTerm.trim() && filteredProducts.length === 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 shadow-lg z-50 p-4">
          <p className="text-sm text-gray-500">No products found</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
