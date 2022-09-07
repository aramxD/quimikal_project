import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Payment from "./Payment";

function sendData(data) {
  var formdata = new FormData();
  formdata.append("name", data.name);
  formdata.append("last_name", data.last_name);
  formdata.append("email", data.email);
  formdata.append("contact_number", data.contact_number);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch("https://le-restapi-test.herokuapp.com/api/v1/quimikal", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

const CTA = ({ className }) => {
  const [showModal, setShowModal] = useState(false);
  const [stepForm, setStepForm] = useState(false);
  const [dataForm, setDataForm] = useState({
    name: "",
    last_name: "",
    email: "",
    contact_number: "",
  });
  // console.log(showModal);

  const onChange = (event) => {
    const dato = event.target.value;
    setDataForm({
      ...dataForm,

      [event.target.name]: dato,
    });
    //  console.log(dataForm)
  };

  const onSubmit = (event) => {
    sendData(dataForm);
    setStepForm(true);
    console.log(dataForm);
  };

  return (
    <div className={className}>
      <div className="CTA">
        <button onClick={() => setShowModal(!showModal)}>INSCRIBETE!</button>
      </div>
      <Modal
        title="Inscribete"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        {!stepForm && (
          <form onSubmit={onSubmit} className="SignInForm ">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="name"
              value={dataForm.nombre}
              onChange={onChange}
            />
            <label htmlFor="apeido">Apeido:</label>
            <input
              type="text"
              id="apeido"
              name="last_name"
              value={dataForm.apeido}
              onChange={onChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={dataForm.email}
              onChange={onChange}
            />
            <label htmlFor="telefono">Telefono:</label>
            <input
              type="text"
              id="telefono"
              name="contact_number"
              value={dataForm.telefono}
              onChange={onChange}
            />
            <button type="button" onClick={() => onSubmit()}>
              Siguiente
            </button>
          </form>
        )}

        {stepForm && <Payment />}
      </Modal>
    </div>
  );
};

export default styled(CTA)`
  --rojo-alerta: #ff2c2c;
  --rojo-hover: #c72828;
  --rojo-click: #be0000;
  width: 90vw;
  max-width: 800px;
  margin: 20px auto;
  color: black;
  .CTA button {
    width: 100%;
    border-radius: 10px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1.4em;
    font-weight: 700;
    font-style:oblique;
    font-family: inherit;
    background-color: var(--rojo-alerta);
    cursor: pointer;
    transition: border-color 0.25s;
    color: white;
  }
  .CTA button:hover {
    background-color: var(--rojo-hover);
  }
  .CTA button:focus,
  .CTA button:active {
    border-color: #da0000;
    background-color: var(--rojo-click);

    transform: translateY(5px);
  }
  .CTA button:focus,
  .CTA button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  .SignInForm {
    display: flex;
    flex-direction: column;
  }

  form label {
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 3px;
  }
  form input {
    text-align: left;
    font-size: 20px;
    border-radius: 5px;
    height: 40px;
    padding: 6px;
    margin-bottom: 15px;
  }
  form button {
    background: #2c46db;
    color: white;
  }
  .hidden {
    display: none;
  }
`;
