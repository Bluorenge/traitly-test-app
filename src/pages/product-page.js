import React from "react";

import BestSelling from "../components/best-selling";
import Product from '../components/product';

function ProductPage() {
  return (
    <div>
      <Product />
			<BestSelling />
    </div>
  );
}

export default ProductPage;
