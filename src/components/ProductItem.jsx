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
          <p className="product__brand-name typo-body-medium mb-1 text-white-muted">
            {product.brand_name}
          </p>
          <div className="flex w-full flex-col items-start justify-between gap-y-1 lg:flex-row">
            <h3 className="product__heading typo-body text-white-muted">
              {product.heading}
            </h3>
            <div className="flex flex-row gap-2 self-start">
              <span className="product__sale-price typo-body text-white-muted">
                {formatPrice(product.sale_price)}
              </span>
              <span className="product__original-price typo-body text-gray-light line-through">
                {formatPrice(product.original_price)}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
