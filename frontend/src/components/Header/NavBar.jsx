import React from "react";
import NavBarDeskstop from "./NavBarDeskstop";
import NavBarMobile from "./NavBarMobile";

export default function NavBar({ categorias}) {

  return (
    <nav className="h-16 w-full max-w-screens-2xl border-b-black border-2 flex justify-center px-10 bg-white ilg:h-24 ilg:text-sm">
      <NavBarDeskstop
        categorias={categorias}
      />
      <NavBarMobile
        categorias={categorias}
      />
    </nav>
  );
}
