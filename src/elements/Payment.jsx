import React from "react";
import { useEffect, useState, useRef } from "react";

const Payment = () => {
  const [paidFor, setPaidFor] = useState(false);
  const [loaded, setLoaded] = useState(false);

  let paypalRef = useRef();

  const product = {
    price: 600,
    description: "certificacion couch",
    currency: "USD",
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=ARSWipJcIj-Y0bX5WwXTXuHuA08syrlGdexp6bQxwpuXOjXVlfWMEvBxBvGaDBtCiUt8TPryDP-85n4j&currency=USD&vault=true&locale=es_MX";

    script.addEventListener("load", () => setLoaded(true));

    document.body.appendChild(script);

    if (loaded) {
      setTimeout(() => {
        console.log('inicio paypal')
        window.paypal
          .Buttons({
            style: {
              color: "blue",
              label: "pay",
            },
            // Sets up the transaction when a payment button is clicked
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "1", // Can also reference a variable or function
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();

              setPaidFor(true);

              console.log(order);
            },
          })
          .render(paypalRef);
          console.log('fin paypal')
      });
    }
  } );

  return (
    <>
      {paidFor ? (
        <h1>
          Te has inscrito exitosamente, nos pondremos en contacto contigo pronto
        </h1>
      ) : (
        <div ref={(v) => (paypalRef = v)} />
      )}
    </>
  );
};

export default Payment;

{
  /* <div id="paypal-button-container" ></div> */
}

// paypal
//   .Buttons({
//     style: {
//       color: "blue",
//       label: "pay",
//     },
//     // Sets up the transaction when a payment button is clicked
//     createOrder: (data, actions) => {
//       return actions.order.create({
//         purchase_units: [
//           {
//             amount: {
//               value: "1", // Can also reference a variable or function
//             },
//           },
//         ],
//       });
//     },
//     // Finalize the transaction after payer approval
//     onApprove: (data, actions) => {
//       return actions.order.capture().then(function (orderData) {
//         // Successful capture! For dev/demo purposes:
//         console.log(
//           "Capture result",
//           orderData,
//           JSON.stringify(orderData, null, 2)
//         );
//         const transaction = orderData.purchase_units[0].payments.captures[0];
//         // alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
//         // When ready to go live, remove the alert and show a success message within this page. For example:
//         const element = document.getElementById("paypal-button-container");
//         element.innerHTML = "<h3>Thank you for your payment!</h3>";
//         // Or go to another URL:  actions.redirect('thank_you.html');
//       });
//     },
//   })
//   .render("#paypal-button-container");
