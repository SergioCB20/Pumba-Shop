import React from "react";
import { Link } from "react-router-dom";

export default function MainBoton({ linkBoton, textoBoton, handleClick }) {
  const isInternalLink = linkBoton.startsWith("/");
  const isExternalLink = !isInternalLink && linkBoton !== "#";

  const renderLink = () => {
    if (isInternalLink) {
      return (
        <Link to={linkBoton}>
          {renderButtonContent()}
        </Link>
      );
    } else if (isExternalLink) {
      return (
        <a href={linkBoton}>
          {renderButtonContent()}
        </a>
      );
    } else {
      return (
        <div onClick={handleClick}>
          {renderButtonContent()}
        </div>
      );
    }
  };

  const renderButtonContent = () => (
    <div className="flex items-center gap-5">
      <p className="text-xs lg:text-base">{textoBoton.toUpperCase()}</p>
      <i className="fa-solid fa-arrow-right"></i>
    </div>
  );

  return (
    <div className="bg-black px-4 py-2 w-fit text-white hover:text-gray-400 transition-all">
      {renderLink()}
    </div>
  );
}

MainBoton.defaultProps = {
  linkBoton: "#",
  textoBoton: "TEXTO POR DEFAULT",
};

