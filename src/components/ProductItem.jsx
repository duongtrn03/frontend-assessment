export default function ProductItem({ product }) {
  /**
   * Format product price
   * @param {number} price
   * @returns {string}
   */
  const formatPrice = (price) => {
    const n = Number(price);
    if (Number.isNaN(n)) return price ?? "";
    return `$${n.toFixed(2)}`;
  };

  return (
    <div className="product shadow-drop-mobile transition-all duration-200 ease-out hover:shadow-drop-hover lg:shadow-drop lg:hover:-translate-y-[10px]">
      <a href={product.product_url} aria-label={product.heading}>
        <picture className="block w-full">
          <source media="(max-width: 1023px)" srcSet={product.image_mb_url} />
          <source media="(min-width: 1024px)" srcSet={product.image_url} />
          <img
            className="product__img aspect-[173.5/276] h-full w-full object-cover object-center lg:aspect-[456/710]"
            src={product.image_url}
            alt={product.heading}
            width={456}
            height={710}
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className="product__information bg-green-light px-2 py-2 text-left lg:px-3">
          <p className="product__brand-name mb-1 font-poppins text-[10px]/[15px] font-medium text-white-muted lg:font-arial lg:text-xs/[14px] lg:font-normal">
            {product.brand_name}
          </p>
          <div className="flex w-full flex-col items-start justify-between gap-y-1 lg:flex-row">
            <p className="product__heading font-poppins text-[10px]/[15px] font-normal text-white-muted lg:font-arial lg:text-xs/[14px]">
              {product.heading}
            </p>
            <div className="flex flex-row gap-2 self-start">
              <span className="product__sale-price font-poppins text-[10px]/[15px] font-normal text-white-muted lg:font-arial lg:text-xs/[14px]">
                {formatPrice(product.sale_price)}
              </span>
              <span className="product__original-price font-poppins text-[10px]/[15px] font-normal text-gray-light line-through lg:font-arial lg:text-xs/[14px]">
                {formatPrice(product.original_price)}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
