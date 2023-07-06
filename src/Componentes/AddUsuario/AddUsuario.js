import axios from "axios";
import React, { useState } from "react";

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const addUsers = () => {
    
  axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, headers)
  .then(() => {
    setEmail("")
    setNome("")
    props.allUsersApi()
  })
  .catch((error) => {
  console.log(error);
  });
  }
  
  const headers = {
    headers: {
      Authorization: "felipe-lima-easley"
    },
  };

  const body = {
    name: nome,
    email: email
  }


  return (
    <>
      <h3>Adicionar novo usuario</h3>
      <input
        placeholder={"nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder={"email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={addUsers}>Enviar</button>
    </>
  );
}

export default AddUsuario;
