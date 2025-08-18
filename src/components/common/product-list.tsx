"use client";

import { productTable, productVariantTable } from "@/db/schema";

import ProductItem from "./product-item";

interface ProductListProps {
  title: string;
  products: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[];
}

const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">{title}</h3>
      <div className="flex w-full gap-4 overflow-x-auto px-5 lg:grid lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
        {products.slice(0, 16).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
