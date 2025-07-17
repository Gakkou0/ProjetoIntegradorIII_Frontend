import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md lg:max-w-2xl shadow-lg rounded-lg overflow-hidden">

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
            <span className="mx-2 text-sm text-gray-700">1</span>
            <div className="flex-grow h-1 bg-gray-300 rounded" />
          </div>

          <div className="mb-4 relative">
            <User className="absolute left-3 top-3.5 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Digite seu nome completo..."
              className="pl-10 pr-4 py-2 w-full border-b border-gray-400 focus:outline-none text-sm"
            />
          </div>

          <div className="mb-4 relative">
            <Mail className="absolute left-3 top-3.5 text-gray-500" size={18} />
            <input
              type="email"
              placeholder="Digite seu email..."
              className="pl-10 pr-4 py-2 w-full border-b border-gray-400 focus:outline-none text-sm"
            />
          </div>

          <div className="mb-4 relative">
            <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua senha..."
              className="pl-10 pr-10 py-2 w-full border-b border-gray-400 focus:outline-none text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3.5 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="mb-4 relative">
            <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Digite sua senha novamente..."
              className="pl-10 pr-10 py-2 w-full border-b border-gray-400 focus:outline-none text-sm"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3.5 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <Link to="/cadastro/endereco">
            <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded mt-2 font-semibold">
              CONTINUAR
            </button>
          </Link>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-2 text-sm text-gray-500">OU</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-gray-100 py-2 rounded mb-2 text-sm text-gray-800">
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
            Continuar com o Google
          </button>

          <button className="w-full flex items-center justify-center gap-2 bg-gray-200 py-2 rounded text-sm text-gray-800">
            <img src="/facebook-icon.svg" alt="Facebook" className="w-5 h-5" />
            Continuar com o Facebook
          </button>
        </div>

        <div className="bg-orange-500 text-center text-sm text-white py-3">
          Já tem uma conta?{' '}
          <Link to="/" className="text-blue-100 underline">Entrar</Link>
        </div>
      </div>
    </div>
  );
}
