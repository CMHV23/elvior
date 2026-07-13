import heroImage from "../images/hero.jpg";

function Hero() {
  return (
    <section className="bg-[#F8F6F2] pt-28">

      <div className="max-w-7xl mx-auto min-h-[85vh] px-6 md:px-8 grid md:grid-cols-2 items-center gap-12">

        <div className="text-center md:text-left">

          <span className="uppercase tracking-[4px] text-[#B89B5E]">
            Perfumes premium
          </span>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl mt-5 mb-6 text-[#2D2D2D] leading-tight"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Descubre la fragancia que habla por ti.
          </h2>

          <p className="text-lg md:text-xl text-[#666] mb-10 max-w-xl mx-auto md:mx-0">
            Más que un perfume, una identidad.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("productos")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto bg-[#B89B5E] hover:bg-[#A88949] text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Descubrir colección
          </button>

        </div>

        <div className="mt-12 md:mt-0">
          <img
            src={heroImage}
            alt="Perfume ELVIOR"
            className="w-full rounded-3xl shadow-xl"
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;