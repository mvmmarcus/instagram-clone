import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";

import "./UserForm.scss";

const UserForm = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [username, setUserName] = useState("johndoe");
  const [avatar, setAvatar] = useState("");
  const [onSubmit, setOnSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          avatar,
        }),
      });
      setOnSubmit(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                <img
                  src={
                    avatar.length
                      ? avatar
                      : "https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                  }
                  alt={name}
                />
              </div>
              <p className="user__name">
                {name}
                <span>@{username}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Ex: Fulano da Silva"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Usuário</label>
            <input
              type="text"
              placeholder="Ex: fulano_da_silva"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Ex: fulano@provedor.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>
              Url da Imagem de Perfil (use a url da imagem do Linkedin)
            </label>
            <input
              type="text"
              placeholder="http://..."
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <button onClick={(e) => handleSubmit(e)} type="button">
              Cadastrar
            </button>
          </div>
        </div>
      </section>
      {onSubmit && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
