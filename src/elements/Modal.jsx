import React from "react";
import styled from "styled-components";

const Modal = ({children, title, showModal ,setShowModal} ) => {
  return (
    <>{showModal &&
    <Overlay>
        <ModalContainer>
            <ModalTitle>
                <h2>{title}</h2>
            </ModalTitle>
            <CloseButton onClick={()=>{setShowModal(false)}}> 
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAiRJREFUSEudlutx4zAMhD9UcOkkKSHpRB1cUpFKyLWQDlSKXQFvKMJ8AhQd/vCMZBILLBZLCXEJEM6f83G2yq52f/3k7SlYCTKvJ/CH3FbS7pNrgachvfCCEHzSBjoE+X2VRhJ+XkMXG6qXaddshyoVeJV2FZfCDqd8EV0JMQceaI2tyar28VeUPEzHRdkV1Qs7u2mzyfHjuKp2qHsBvoEv4Bh00B7agL/AB8Ktl3kDPNA4JnwIvAa4nQE78If5CGELsGvDfoD3tnljK/v/+8JjFbu+bMCrpDcIukfuEN5TgrO5r8TljZOAVnPuuCF8EIhMRJOtE7unSjkmmOehStXG2LSvNpBdT90IJ+1vFRsF1CxmjG9oyqWoovTseRReXC1oD+yYnO8DNv6GsOeLTLgTlF7DFDw/ci1zMjYKnC+GB+1GX3WPxenU10fvTUJK7yO9fyy1e27YFLNi6HpgUK/AWyi023PuCG3Jq/FGJmVU1F6bzJRKvPu4MbdNCLvadFKvcHRfSa7JDO3Vm2rhkpADwqs1Mp3pZ5MR+AnJSJzVXYtFFE3IFwj/ED6jW5VItWLz/lj5p7pX7HlaWmW2rOxcfmo2U7VsVyRc4+v+9M1lDO2FNurCSyFPjMhvDMTkZ8UP+vqeIPrqBq1CjeZT9bv7oJ+2a0pjq+/667Poaul2MkgwKniipaZIW9VfKLabXUOY5ph1wI85vhiJegyngvBGxIj/HwdOCjal5sIiAAAAAElFTkSuQmCC"/>
            </CloseButton>

            <ModalContet>
            {children}
            </ModalContet>


        </ModalContainer>
    </Overlay>
      }
    </>
  );
};

export default Modal;


const Overlay = styled.div`
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,.5);
    z-index:100;
    /* CENTRAR CONTENIDO */
    display:flex;
    align-items:center;
    justify-content:center;
    overflow-y:auto;
`

const ModalContainer = styled.div`
    width:80%;
    max-height:80%;
    min-height:200px;
    background:#fff;
    position: relative;
    border-radius:8px;
    box-shadow: rgba(100,100,111,.2) 0px 7px 29px 0px;
    padding:20px;
    overflow-y:auto;
`

const ModalTitle = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
    padding-bottom:20px;
    border-bottom:1px solid #e8e8e8

    h3{
        font-weight:500;
        font-size:18px;
        
    }
`
const CloseButton = styled.button`
    position:absolute;
    top:20px;
    right:20px;
    color:#000;
    text-align:center;

    width:30px;
    height:30px;
    cursor:pointer;
    border:none;
    background:none;
    transition:.3s ease all;
    border-radius:5px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    
    &:hover{
        background:#f2f2f2;
        border:2px solid #808080
    }
     
`

const ModalContet = styled.div`
    display:flex;
    flex-direction:column;
    align-items: stretch;
    justify-content: center;
    margin:0 auto;
    width:100%;
    max-width:600px;
    height:60%;
    overflow-y:auto;
    h2{
        font-size:30px;
        font-weight:700;
        margin-bottom:10px;
    }
    p{
        font-size:18px;
        margin-bottom:20px;

    }
    img{
        width:100%;
    }
`