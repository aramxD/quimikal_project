import React from "react";
import styled from "styled-components";
import img1 from '../assets/educator.svg'
import img2 from '../assets/metas.svg'
import img3 from '../assets/couchibg.svg'
import img4 from '../assets/teamwork.svg'
import img5 from '../assets/pares.svg'
import img6 from '../assets/staff.svg'


const Methodology = ({className})=>{

    return(
        <section className={className}>
            <h2>Metodologia</h2>
        <div className="methodologyStep">
          <p>Modulos Presenciales</p>
          <img src={img1} alt=""/>
        </div>

        <div className="methodologyStep">
          <p>Tareas, Metas y Planes guiadas</p>
          <img src={img2} alt=""/>
        </div>

        <div className="methodologyStep">
          <p>Coachings personales y Mejora continua</p>
          <img src={img3} alt=""/>
        </div>
 
        <div className="methodologyStep">
          <p>Practicas de coaching</p>
          <img src={img4} alt=""/>
        </div>
        <div className="methodologyStep">
          <p>Coaching observados</p>
          <img src={img5} alt=""/>
        </div>
        <div className="methodologyStep">
          <p>Practicas Staff</p>
          <img src={img6} alt=""/>
        </div>
        </section>
    )
}

export default styled(Methodology)`
    width:90vw;
    margin:0 auto;
    h2{
    margin: 30px 0;
}
.methodologyStep{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #707070;
    padding: 20px;
    border-radius: 20px;
    margin: 20px 0;
}
.methodologyStep:nth-child(odd){
    flex-direction: row-reverse;
}
.methodologyStep img{
    width: 30%;
    height: 80px;
}
.methodologyStep p{
    width: 70%;
    font-size: var(--subtitle-fz);
}
`