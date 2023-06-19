import React from "react";
import "../components/prudact.css";

function Myitem(props) {
  return (
    <div className="main-contener">
      <p id="titel">{props.title}</p>
      <b id="price">{props.price}</b>
      <h4 id="color">{props.color}</h4>
      <img id="photo" src={props.image} />
    </div>
  );
}

export default Myitem;
