import React from "react";
import ProductCart from "./ProductCart";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-[1300px] mx-auto">
      <h2
        className="text-[40px] font-[700px] text-[#3A3A3A] text-center
          items-center py-5"
      >
        Our Products{" "}
      </h2>

      <div className=" w-[1300px] mx-auto  grid grid-cols-4">
        {products.map((product) => (
          <ProductCart key={product.id} product={product}></ProductCart>
        ))}
      </div>

      <div className="text-center py-5">
        <button>
          <NavLink
            to="/shop"
            className="w-[245px] h-[48px] bg-[#FFFFFF] border border-[#B88E2F] flex items-center justify-center rounded text-center "
          >
            Show All
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default OurProduct;
