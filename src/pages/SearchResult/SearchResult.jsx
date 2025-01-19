import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { queryProducts } from "@/data/queryProduct"; // Assume this queries the products
import ProductSlider from "@/components/Sliders/Slider1";
import { HeroCard } from "../Food/Components/HeroCard";
import { b1, watch } from "@/assets/images";
import { SlidingCarousel } from "../Food/Components/SlidingCarousel";
import Hero from "../Landing/Hero";
import CategoryTitle from "./CategoryTitle";
import ProductList from "./ProductList";
import { p1, p2, p3 } from "@/assets/images";
import Categories from "../Landing/Categories";


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
  const foodProducts = queryProducts({ category: "Food" });
  const clothProducts = queryProducts({ category: "Cloth" });

  useEffect(() => {
    const searchParams = {
      name: searchQuery,
      category: category !== "all" ? category : null,
    };

    const results = queryProducts(searchParams);
    setFilteredProducts(results);
  }, [category, searchQuery]);

  useEffect(() => {
    // Group products by category
    const grouped = filteredProducts.reduce((acc, product) => {
      const cat = product.category || "Others"; // Group uncategorized products under 'Others'

      if (!acc[cat]) {
        acc[cat] = []; // Initialize with an empty array for the category
      }
      acc[cat].push(product); // Add the product to its respective category
      return acc;
    }, {});

    setGroupedProducts(grouped);
    console.log(grouped);
  }, [filteredProducts]);

  return (
    <main className=" mt-[65px]">
      <section className="container mx-auto px-4 w-[90%]">
        {location.pathname === "/search" && (
          <h2 className="text-lg font-bold mb-4">
            Search Results for "{searchQuery}"
            {(category !== "all" && ` in ${category}`) || ""}
          </h2>
        )}
        {location.pathname !== "/search" && <Hero />}
        {Object.keys(groupedProducts).length > 0 ? (
          Object.keys(groupedProducts).map((cat) => (
            <div key={cat} className="mt-8">
              <CategoryTitle title={cat} />

              {/* Render Filtered Products */}
              {groupedProducts[cat].length > 0 && (
                <ProductList products={groupedProducts[cat]} />
              )}

              {/* Render Latest Products */}
              {/* {groupedProducts[cat].Latest.length > 0 && (
                <ProductSlider products={groupedProducts[cat].Latest} />
              )} */}

              {/* Render Old Products */}
              {/* {groupedProducts[cat].Old.length > 0 && (
                <SlidingCarousel
                  titleText={"Products"}
                  products={groupedProducts[cat].Old}
                />
              )} */}
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

        {category !== "Food" && foodProducts.length > 0 && (
          <Categories imgUrl={p1} category="Food" productData={foodProducts} />
        )}
        {category !== "Cloth" && clothProducts.length > 0 && (
          <Categories
            imgUrl={p3}
            category="Clothes"
            productData={clothProducts}
          />
        )}
      </section>
    </main>
  );
};

export default SearchResults;
