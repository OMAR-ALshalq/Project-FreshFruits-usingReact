import "./BrandInfo.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function BrandInfo() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="Box">
      <div className="continer continerBrandInfo">
        <div className="boxBrandInfo">
          <div id="about" className="ImageBrandInfo">
            <img src="../../../public/fruits-splash.png"></img>
          </div>
          <div className="TextBrandInfo">
            <h2 data-aos="fade-left">Brand Info</h2>
            <p data-aos="fade-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>
            <p data-aos="fade-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>
            <button data-aos="fade-up" className="btnBrandBox">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
