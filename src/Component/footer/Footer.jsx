import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import "./Footer.css";
export default function Footer() {
  return (
    <div className="Box2">
      <div className="continer continerFooter">
        <div className="BoxFooter">
          <div className="Text">
            <h3>
              Fresh <span>Fruits!</span>
            </h3>
          </div>
          <div className="IconSochil">
            <a href="https://www.facebook.com/Omar ALshalak" target="_blank">
              <FaSquareFacebook />
            </a>
            <a href="https://wa.me/963982359538" target="_blank">
              <FaSquareWhatsapp />
            </a>
            <a href="https://www.instagram.com/oalshalak" target="_blank">
              <FaInstagramSquare />
            </a>
            <a href="https://github.com/OMAR-ALshalq" target="_blank">
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
