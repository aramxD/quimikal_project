import React from "react";
import styled from "styled-components";

const CTA = ({ className }) => {
  return (
    <div className={className}>
        <button>Reservar mi lugar!!</button>
    </div>
  );
};

export default styled(CTA)`
width:95vw;
button {
    width:100%;
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1.3em;
  font-weight: 500;
  font-family: inherit;
  background-color: #ff1717;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #da0000;
  background-color: #ca0000;
  transform:translateY(-5px)
}
button:focus, button:active {
  border-color: #da0000;
  background-color: #8d0000;
  color:white;
  transform:translateY(5px)
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}`