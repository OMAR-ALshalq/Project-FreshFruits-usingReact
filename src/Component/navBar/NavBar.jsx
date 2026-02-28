import "./NavBar.css";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";
export default function NavBar() {
  const [showtags, setshowtags] = useState(false);

  function handeltags() {
    setshowtags(!showtags);
  }

  function closeTags() {
    setshowtags(false);
  }

  return (
    <div className="Box">
      <div className="continer">
        <div className="NavBar">
          <div className="logo">
            <h2>
              FRUIT <span>store</span>
            </h2>
          </div>
          <div className="tags">
            <ul>
              <a href="#home">
                <li>Home</li>
              </a>
              <a href="#products">
                <li>Products</li>
              </a>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#shop">
                <li>Shop</li>
              </a>
              <a href="#contacts">
                <li>Contacts</li>
              </a>
              <span>
                <MdOutlineLocalGroceryStore />
              </span>
            </ul>
            <IoReorderThree
              className="icon"
              onClick={handeltags}
            ></IoReorderThree>
          </div>
        </div>
      </div>
      {showtags && (
        <div className="overlay" onClick={closeTags}>
          <div
            className="tagsTow"
            onClick={(e) => e.stopPropagation()} // يمنع إغلاق عند الضغط داخل القائمة
          >
            <ul>
              <li onClick={closeTags}>
                <a href="#home">Home</a>
              </li>
              <li onClick={closeTags}>
                <a href="#products">Products</a>
              </li>
              <li onClick={closeTags}>
                <a href="#about">About</a>
              </li>
              <li onClick={closeTags}>
                <a href="#shop">Shop</a>
              </li>
              <li onClick={closeTags}>
                <a href="#contacts">Contacts</a>
              </li>
              <span onClick={closeTags}>
                <MdOutlineLocalGroceryStore />
              </span>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
