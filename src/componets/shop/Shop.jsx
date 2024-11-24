import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowShop from "./ShowShop";

const Shop = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch("shop.json")
      .then((res) => res.json())
      .then((data) => setShops(data));
  }, []);

  return (
    <div className="w-[1440px] mx-auto">
      <div className="py-10">
        <img src="/src/assets/Rectangle 1.png" alt="" />
        <img className="" src="/src/assets/Group 63.png" alt="" />
      </div>
      <div className=" absolute top-[200px] left-[700px]">
        <h2 className=" font-[500] text-[42px]">Shop</h2>
        <p>
          <span className="font-[500] text-[16px] ">Home </span>
          &gt;
          <span className="font-[300] text-[16px] ">Shop</span>{" "}
        </p>
      </div>

      <div className="w-[1300px] mx-auto  grid grid-cols-4">
        {shops.map((shop) => (
          <ShowShop key={shop.id} shop={shop}></ShowShop>
        ))}
        <Link to="/addToCard">
          <button>Add To Card</button>
        </Link>
      </div>
      <div className="text-center py-8 mb-14 ">
        <button className="mr-4 w-[55px] h-[55px] bg-[#B88E2F] rounded-xl">
          1
        </button>
        <button className="mr-2 w-[55px] h-[55px] bg-[#F9F1E7] rounded-xl">
          2
        </button>
        <button className="ml-2 w-[55px] h-[55px] bg-[#F9F1E7] rounded-xl">
          3
        </button>
        <button className="ml-4 w-[93px] h-[55px] bg-[#F9F1E7] rounded-xl">
          Next
        </button>
      </div>

      <div className="w-[1440px] h-[190px] bg-[#FAF3EA] justify-between flex p-16">
        {/* 1 */}
        <div className="flex gap-3">
          <div>
            <img src="/src/assets/Vector (1).png" alt="" />
          </div>
          <div>
            <h2 className="font-semibold text-2xl">High Quality</h2>
            <p className="font-normal crafted from top materials ">
              crafted from top materials
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex gap-3">
          <div>
            <img src="/src/assets/Vector (2).png" alt="" />
          </div>
          <div>
            <h2 className="font-semibold text-2xl">Warranty Protection</h2>
            <p className="font-normal crafted from top materials ">
              Over 2 years
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex gap-3">
          <div>
            <img src="/src/assets/Vector (3).png" alt="" />
          </div>
          <div>
            <h2 className="font-semibold text-2xl">Free Shipping</h2>
            <p className="font-normal crafted from top materials ">
              Order over 150 $
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className="flex gap-3">
          <div>
            <img src="/src/assets/Vector (4).png" alt="" />
          </div>
          <div>
            <h2 className="font-semibold text-2xl">24 / 7 Support</h2>
            <p className="font-normal crafted from top materials ">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
