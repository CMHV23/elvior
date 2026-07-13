import { FaWhatsapp } from "react-icons/fa";
import store from "../config/store";

function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <p className="text-sm uppercase tracking-[3px] text-[#B89B5E] font-medium">
          {product.brand}
        </p>

        <h3
          className="text-3xl mt-3 min-h-[72px] text-[#2D2D2D]"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          {product.name}
        </h3>

        <span className="inline-block bg-[#F4E8C1] text-[#8A6A2F] text-xs font-medium px-3 py-1 rounded-full mt-2">
          Tipo original
        </span>

        <p className="text-3xl font-semibold text-[#B89B5E] mt-6">
          ${product.price.toLocaleString("es-CO")}
        </p>

        <p className="mt-2 text-sm text-green-600 font-medium">
          🟢 {product.stock}
        </p>

        <hr className="my-6 border-[#ece7df]" />

        <button
          onClick={() => {
            const message = `Hola ELVIOR 👋

Estoy interesado en el siguiente perfume.

📌 Perfume: ${product.name}
🏷️ Marca: ${product.brand}
💰 Precio: $${product.price.toLocaleString("es-CO")}
✨ ${product.quality}

¿Está disponible?`;

            window.open(
              `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(message)}`,
              "_blank"
            );
          }}
          className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 rounded-full flex items-center justify-center gap-3 font-medium transition-all duration-300 hover:scale-[1.02]"
        >
          <FaWhatsapp size={20} />
          Solicitar por WhatsApp
        </button>

      </div>

    </div>
  );
}

export default ProductCard;