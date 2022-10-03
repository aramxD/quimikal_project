import React from "react";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { PayPalButtons } from "@paypal/react-paypal-js";
const Payment = () => {
  const [paidFor, setPaidFor] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // let paypalRef = useRef();

  const product = {
    price: 534.90 ,
    description: "certificación couch",
    currency: "USD",
  };
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://www.paypal.com/sdk/js?client-id=ARSWipJcIj-Y0bX5WwXTXuHuA08syrlGdexp6bQxwpuXOjXVlfWMEvBxBvGaDBtCiUt8TPryDP-85n4j&currency=USD&vault=true&locale=es_MX";

  //   script.addEventListener("load", () => setLoaded(true));

  //   document.body.appendChild(script);

  //   if (loaded) {
  //     setTimeout(() => {
  //       console.log('inicio paypal')
  //       window.paypal
  //         .Buttons({
  //           style: {
  //             color: "blue",
  //             label: "pay",
  //           },
  //           // Sets up the transaction when a payment button is clicked
  //           createOrder: (data, actions) => {
  //             return actions.order.create({
  //               purchase_units: [
  //                 {
  //                   amount: {
  //                     value: "1", // Can also reference a variable or function
  //                   },
  //                 },
  //               ],
  //             });
  //           },
  //           onApprove: async (data, actions) => {
  //             const order = await actions.order.capture();

  //             setPaidFor(true);

  //             console.log(order);
  //           },
  //         })
  //         .render(paypalRef);
  //         console.log('fin paypal')
  //     });
  //   }
  // } );

  return (
    <>
      {paidFor ? (
        <h3>
          Te has inscrito exitosamente, nos pondremos en contacto contigo pronto
        </h3>
      ) : (
        <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: product.price,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            setPaidFor(true);
            
          });
        }}
      />
      )}

      
    </>
  );
};

export default styled(Payment)`
  color: black;
`;
