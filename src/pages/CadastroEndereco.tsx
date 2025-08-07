import {useState, useEffect} from 'react'
import PageMeta from '../components/PageMeta';

export default function CadastroEndereco() {

  const [address, setAddress] = useState()

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md lg:max-w-2xl shadow-lg rounded-lg overflow-hidden">
        <PageMeta title='Cadastro de endereço'></PageMeta>
        <div className="bg-orange-500 p-6 text-center">
          <img
            src="/logo-crateus-shop.png"
            alt="Logo"
            className="mx-auto mb-2 w-16 md:w-20"
          />
        </div>

        <div className="px-6 py-6 md:px-10 md:py-8 bg-white">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">Olá, Bem vindo!</h2>

          <div className="flex items-center mb-6">
            <div className="flex-grow h-1 bg-green-500 rounded" />
            <span className="mx-2 text-sm text-gray-700">2</span>
            <div className="flex-grow h-1 bg-green-500 rounded" />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="CRATEÚS   Rua..."
              className="w-full py-2 px-3 border-b border-gray-400 focus:outline-none placeholder:text-sm"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Bairro"
              className="w-full py-2 px-3 border-b border-gray-400 focus:outline-none placeholder:text-sm"
            />
          </div>

          <div className="mb-4 flex gap-2">
            <input
              type="text"
              placeholder="Nº"
              className="w-1/2 py-2 px-3 border-b border-gray-400 focus:outline-none placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="Complemento"
              className="w-1/2 py-2 px-3 border-b border-gray-400 focus:outline-none placeholder:text-sm"
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Ponto de referência"
              className="w-full py-2 px-3 border-b border-gray-400 focus:outline-none placeholder:text-sm"
            />
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded font-semibold">
            CADASTRAR
          </button>
        </div>

        <div className="bg-orange-500 text-center text-sm text-white py-3">
          Já tem uma conta?{' '}
          <a href="/" className="text-blue-100 underline">Entrar</a>
        </div>
      </div>
    </div>
  );
}
