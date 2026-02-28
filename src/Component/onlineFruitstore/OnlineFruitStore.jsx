import { IoBagHandle } from "react-icons/io5";
import "./OnlineFruitStore.css";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function OnlineFruitStore() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);


  return (
    <div className="Box">
      <div className="continer contineronlinefruitstore">
        <div id="shop" className="TextOnlineFruitStore">
          <h2 data-aos="fade-up" className="">
            Online
          </h2>
          <h2 data-aos="fade-up" className="">
            Fruit Store
          </h2>
          <p data-aos="fade-up" className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            iusto minima ad ut id eos accusantium aut, aperiam quis incidunt
          </p>
          <p data-aos="fade-up" className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            iusto minima ad ut id eos accusantium aut, aperiam quis incidunt
          </p>
          <div data-aos="fade-up" className="">
            <button className="btn-online">Downlod the App</button>
          </div>
        </div>
        <div data-aos="fade-up" className="img-online">
          <img src="../../../public/fruit-plate.png"></img>
        </div>
      </div>
    </div>
  );
}



// import { motion } from "framer-motion";

// function TextOnlineFruitStore() {
//   return (
//     <div className="TextOnlineFruitStore">
//       <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//         Online
//       </motion.h2>
//       <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//         Fruit Store
//       </motion.h2>
//       <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//         Lorem ipsum dolor sit amet...
//       </motion.p>
//       <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//         Lorem ipsum dolor sit amet...
//       </motion.p>
//       <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//         <button className="btn-hero">Download the App</button>
//       </motion.div>
//     </div>
//   );
// }

