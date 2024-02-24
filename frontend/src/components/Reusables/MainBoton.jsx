import React, {useRef} from "react";
import { Player } from "@lordicon/react";
import { Link } from "react-router-dom";

import ARROW_I from "../../animated_icons/arrowIcon.json";

export default function MainBoton({ linkBoton, textoBoton, handleClick }) {
  const isInternalLink = linkBoton.startsWith("/");
  const isExternalLink = !isInternalLink && linkBoton !== "#";
  const arrowIconRef = useRef();

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
        <div className="cursor-pointer" onClick={handleClick}>
          {renderButtonContent()}
        </div>
      );
    }
  };

  const renderButtonContent = () => (
    <div className="flex items-center gap-5 pt-1" onMouseEnter={() => arrowIconRef.current.playFromBeginning()}>
      <p className="text-xs lg:text-base">{textoBoton.toUpperCase()}</p>
      <div>
      <Player ref={arrowIconRef} size={35} icon={ARROW_I} colorize="#ffffff" />
      </div>
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

