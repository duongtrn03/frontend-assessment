import PRODUCTS_DATA from "../data/product-data.json";
import ProductItem from "./ProductItem";
export default function ProductCollection() {
  return (
    <section className="product-collection px-3 py-8 text-center lg:px-6 lg:py-[64px]">
      <h2 className="product-collection__title mb-6 w-full font-roboto text-[32px]/[38px] tracking-normal lg:mb-[48px] lg:font-arial lg:text-5xl/[55px]">
        Heading
      </h2>
      <div className="grid grid-cols-2 gap-x-1 gap-y-2 lg:grid-cols-4 lg:gap-4">
        {Array.isArray(PRODUCTS_DATA) &&
          PRODUCTS_DATA.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
      </div>
    </section>
  );
}
