function Footer() {
  return (
    <footer className="bg-[#F3EFE8] border-t border-[#E6DFD3] py-16">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-3 gap-12">

          <div>
            <h2
              className="text-4xl text-[#2D2D2D] mb-4 tracking-[8px]"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              ELVIOR
            </h2>

            <p className="text-[#666] leading-7">
              Más que un perfume,
              <br />
              una identidad.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#2D2D2D] mb-4">
              Contacto
            </h3>

            <p className="text-[#666] mb-2">
              📍 Bucaramanga, Colombia
            </p>

            <p className="text-[#666]">
              📱 302 702 8435
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#2D2D2D] mb-4">
              Instagram
            </h3>

            <p className="text-[#666]">
              @elvior.parfum
            </p>

            <p className="text-sm text-[#999] mt-2">
              Próximamente más contenido.
            </p>
          </div>

        </div>

        <div className="border-t border-[#E6DFD3] mt-12 pt-8 text-center">

          <p className="text-sm text-[#888]">
            © 2026 ELVIOR. Todos los derechos reservados.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;