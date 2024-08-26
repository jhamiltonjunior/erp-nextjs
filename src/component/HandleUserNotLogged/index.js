'use client'

import React, { useState } from 'react';
import './style.css'

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const classNameInput = "w-full px-4 py-2 mb-6 handle-user-not-logged-input"

  return (
    <section className="h-[100%] flex items-center justify-center rounded-lg">
      <div className="shadow-id w-[395px] max-w-screen p-8 rounded-lg max-w-full shadow-lg bg-white">
        <h2 className="text-2xl font-bol mb-8 text-center">
          {isRegistering ? 'Registrar-se' : 'Login'}
        </h2>
        <form>
          {isRegistering && (
            <div className={"mb-4"}>
              <label className="block text-2xl text-gray-700 mb-6">Nome</label>
              <input
                type="text"
                className={classNameInput}
                placeholder="Seu nome"
              />
            </div>
          )}
          <div className={"mb-4"}>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className={classNameInput}
              placeholder="Ex: contact@exemple.com"
            />
          </div>
          <div>
            <label className="block text-gray-700">Senha</label>
            <input
              type="password"
              className={classNameInput}
              placeholder="Sua senha"
            />
          </div>
          {isRegistering && (
            <div>
              <label className="block text-gray-700">Confirmar Senha</label>
              <input
                type="password"
                className={classNameInput}
                placeholder="Confirme sua senha"
              />
            </div>
          )}
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            {isRegistering ? 'Registrar-se' : 'Entrar'}
          </button>
        </form>
        {/*<button*/}
        {/*  type="button"*/}
        {/*  className="w-full bg-red-500 text-white py-2 px-4 mt-4 rounded-lg hover:bg-red-600 transition duration-200"*/}
        {/*>*/}
        {/*  Fazer login com o Google*/}
        {/*</button>*/}
        <div className="flex flex-col justify-start  mt-4 text-sm text-gray-600">
          <a href="#" className="hover:underline w-ful">
            Esqueceu a senha?
          </a>
          <button
            type="button"
            className="hover:underline w-ful text-start"
            onClick={toggleForm}
          >
            {isRegistering ? 'Já tem uma conta? Fazer login' : 'Ainda não tem conta? Registre-se'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
