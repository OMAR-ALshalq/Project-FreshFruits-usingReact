import "./GetFruits.css";
import { IoBagHandle } from "react-icons/io5";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function GetFruits() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="Box">
      <div className="continer continerGetFruits">
        <div className="BackgroundSection">
          <div className="Box">
            <div id="contacts" className="BoxLeft"></div>
            <div className="TransparentBox">
              <h2 data-aos="fade-left">
                Get Fresh <br />
                Fruits Today
              </h2>
              <p data-aos="fade-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Recusandae iusto minima ad ut id eos accusantium aut, <br></br>
                aperiam quis incidunt!
              </p>
              <div data-aos="fade-up" className="btncontinerGetFruits">
                <button>
                  <IoBagHandle /> Order New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
