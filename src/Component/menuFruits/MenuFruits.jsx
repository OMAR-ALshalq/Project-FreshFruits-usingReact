import React, { useEffect, useRef } from "react";
import "./MenuFruits.css";

const arrayFruits = [
  {
    id: 1,
    Image: "/fruits/apple.png",
    Disc: "Fresh Red Apples",
    Pric: "$3.99"
  },
  { id: 2, Image: "/fruits/orange.png", Disc: "Fresh Orange", Pric: "$3.99" },
  { id: 3, Image: "/fruits/cherry.png", Disc: "Fresh Cherry", Pric: "$3.99" },
  { id: 4, Image: "/fruits/avocado.png", Disc: "Fresh Avocado", Pric: "$3.99" }
];

export default function MenuFruits() {
  const fruitsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // يختفي عند الخروج
        }
      });
    });

    fruitsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="Box" id="products">
      <div className="continer continerMenuFruits">
        <h3>OUR MENU</h3>
        <div className="menufruits">
          {arrayFruits.map(({ id, Image, Disc, Pric }, index) => (
            <div
              key={id}
              className="box-Fruits hidden"
              ref={(el) => (fruitsRef.current[index] = el)}
              // style={{transitionDelay:`${index * 0.3}s`}}
            >
              <div className="img-Fruits">
                <img src={Image} alt={Disc} />
              </div>
              <div className="text-Fruits">
                <h3>{Disc}</h3>
                <h4>{Pric}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
