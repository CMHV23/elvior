import products from "../data/products";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  return (
    <section
      id="productos"
      className="py-24 bg-[#F8F6F2]"
    >

      <div className="max-w-7xl mx-auto px-8">

        <h2
          className="text-5xl text-center mb-16"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Productos Destacados
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;