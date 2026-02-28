import { IoBagHandle } from "react-icons/io5";
import "./Hero.css"
export default function Hero() {
  return (
    <div className="Box" id="home">
      <div className="continer continer-hero">
        <div className="text-hero ">
          <h2 className="autoshowTextheroOneH2">Healthy</h2>
          <h2 className="autoshowTextheroTowH2">
            Fresh <span>Fruits!</span>
          </h2>
          <h4 className="autoshowTextheroH4">
            Order Now For Fresh Healthy Life
          </h4>
          <p className="autoshowTextheroPP">
            Healthy and yummy food for fresh morning breakfast. Eat Daily for
            good health and mind Order now and get 20% off on your first order
          </p>
          <div className="autoshowTextherobtn">
            <button className="btn-hero ">
              <IoBagHandle /> Order New
            </button>
          </div>
        </div>
        <div className="img-hero">
          <img src="../../../public/fruit-plate2.png"></img>
        </div>
      </div>
    </div>
  );
}
