import React from 'react'
import styled from 'styled-components'

const ProductValue = ({className}) =>{

    return(
        <section className={className} >

            <h2>Certificate como Coach</h2>
            <p>Se parte de la transformacion Humana</p>
            <p> </p>
        </section>
    )
}


export default styled(ProductValue)`
width: 90vw;
  max-width: 800px;
  margin: 0 auto;
  color: white;


h2 {
    margin: 30px 0 10px 0;
    border-top: solid 4px;
    border-bottom: solid 4px;
    padding: 20px 0;
  }`