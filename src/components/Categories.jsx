function Categories() {
  const categories = [
    {
      title: "Perfumes Árabes",
      description: "Aromas intensos y elegantes."
    },
    {
      title: "Inspirados",
      description: "La esencia de grandes marcas."
    },
    {
      title: "Masculinos",
      description: "Fragancias con personalidad."
    },
    {
      title: "Femeninos",
      description: "Elegancia para cada ocasión."
    }
  ];

  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2
          className="text-5xl text-center mb-16"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Colecciones
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-[#ECE7DF] p-8 hover:shadow-xl transition duration-300"
            >

              <h3
                className="text-3xl mb-4"
                style={{ fontFamily: "Cormorant Garamond" }}
              >
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;