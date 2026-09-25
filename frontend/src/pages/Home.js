import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />

      <HorizontalCardProduct
        category={"Mens Perfumes"}
        heading={"Mens Perfumes"}
      />
      <HorizontalCardProduct
        category={"watches"}
        heading={"Popular's Watches"}
      />

      <VerticalCardProduct
        category={"unisex perfumes"}
        heading={"unisex perfumes"}
      />
      <VerticalCardProduct
        category={"women's fragrances"}
        heading={"Women's fragrances"}
      />
      <VerticalCardProduct
        category={"body sprays & mists"}
        heading={"Body Sprays & Mists"}
      />
      <VerticalCardProduct
        category={"perfume gift sets"}
        heading={"Perfume Gift Sets"}
      />
      <VerticalCardProduct
        category={"personalized & custom gifts"}
        heading={"Personalized & Custom Gifts"}
      />
      <VerticalCardProduct
        category={"for him valentine gift"}
        heading={"For Him Valentine gift"}
      />
      <VerticalCardProduct
        category={"for her valentine gift"}
        heading={"For Her Valentine gift"}
      />
      <VerticalCardProduct category={"gift boxes"} heading={"Gift boxes"} />
      <VerticalCardProduct
        category={"love notes & giftcards"}
        heading={"Love notes & Giftcards"}
      />
    </div>
  );
};

export default Home;
