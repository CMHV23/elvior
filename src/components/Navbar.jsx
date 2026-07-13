function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#F8F6F2]/90 backdrop-blur-md border-b border-[#ece7df] z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

        <h1
          className="text-5xl tracking-[12px] text-[#2D2D2D]"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          ELVIOR
        </h1>

        <nav className="hidden md:flex gap-10 text-[#444] font-medium">

  <a
    href="#"
    className="hover:text-[#B89B5E] transition-all duration-300"
  >
    Inicio
  </a>

  <a
    href="#productos"
    className="hover:text-[#B89B5E] transition-all duration-300"
  >
    Colección
  </a>

</nav>

      </div>
    </header>
  );
}

export default Navbar;