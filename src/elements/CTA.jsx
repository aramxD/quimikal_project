import React from "react";
import styled from "styled-components";


paypal.Buttons({
  style:{
    color:'blue',
    label:'pay',
  },
  // Sets up the transaction when a payment button is clicked
  createOrder: (data, actions) => {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '1' // Can also reference a variable or function
        }
      }]
    });
  },
  // Finalize the transaction after payer approval
  onApprove: (data, actions) => {
    return actions.order.capture().then(function(orderData) {
      // Successful capture! For dev/demo purposes:
      console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
      const transaction = orderData.purchase_units[0].payments.captures[0];
      // alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
      // When ready to go live, remove the alert and show a success message within this page. For example:
      const element = document.getElementById('paypal-button-container');
      element.innerHTML = '<h3>Thank you for your payment!</h3>';
      // Or go to another URL:  actions.redirect('thank_you.html');
    });
  }
}).render('#paypal-button-container');

function onClickSignInButton(){
  console.log('holis')
}

const CTA = ({ className }) => {
  return (
    <div className={className}>

      <button onClick={onClickSignInButton}>INSCRIBETE!</button>
      <form action="" className="SignInForm">
        <div id="paypal-button-container"></div>
      </form>
       
    </div>
  );
};

export default styled(CTA)`
  --rojo-alerta: #ff2c2c;
  --rojo-hover: #c72828;
  --rojo-click: #be0000;
  width: 90vw;
  margin: 20px auto;
  button {
    width: 100%;
    border-radius: 10px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1.3em;
    font-weight: 500;
    font-family: inherit;
    background-color: var(--rojo-alerta);
    cursor: pointer;
    transition: border-color 0.25s;
    color: white;
  }
  button:hover {
    background-color: var(--rojo-hover);
  }
  button:focus,
  button:active {
    border-color: #da0000;
    background-color: var(--rojo-click);

    transform: translateY(5px);
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  .SignInForm{
    display:none
  }
`;
