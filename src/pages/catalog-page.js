import React from "react";

import SearchPanel from "../components/search-panel";
import Trends from "../components/trends";
import BestSelling from "../components/best-selling";
import TopCategory from "../components/top-category";

function CatalogPage() {
  return (
    <div>
      <SearchPanel />
      <Trends />
      <BestSelling />
      <TopCategory />
    </div>
  );
}

export default CatalogPage;
