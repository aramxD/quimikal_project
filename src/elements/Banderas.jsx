import React from "react";
import styled from "styled-components";

import MexFlag from "../assets/Banderas/bandera Mex.png";
import EcuFlag from "../assets/Banderas/bandera Ecu.png";
import SpainFlag from "../assets/Banderas/bandera Esp.png";
import ColFlag from "../assets/Banderas/bandera Col.png";
import PerFlag from "../assets/Banderas/bandera Per.png";

function Banderas({className}) {
  const flags = [PerFlag, EcuFlag, MexFlag, ColFlag, SpainFlag];
   

  return(
    <div className={className}>
        {flags.map((flag)=>{
             
            return(
            <div className="bandera">
            <img src={flag} alt="Bandera" />
            </div>)
            
        })}
    </div>
    
    );
}
export default styled(Banderas)`
display:flex;
flex-direction:row;
justify-content: space-between;
margin: 0 0 40px 0;

.bandera {
    width:18%;
}

`;
