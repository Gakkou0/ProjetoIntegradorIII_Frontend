
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white">
        <div className="bg-orange-500 p-6 text-center">
          <img src="/logo-crateus-shop.png" alt="Logo" className="mx-auto mb-2 w-16" />
        </div>

        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-center mb-6">Olá, Bem vindo!</h2>

          <div className="mb-4 relative">
            <Mail className="absolute left-3 top-3.5 text-gray-500" size={18} />
            <input
              type="email"
              placeholder="Digite seu email..."
              className="pl-10 pr-4 py-2 w-full border-b border-gray-400 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha..."
                className="pl-10 pr-10 py-2 w-full border-b border-gray-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex justify-end mt-1">
              <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                Esqueceu?
              </span>
            </div>
          </div>
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded mt-4 font-semibold">
            ENTRAR
          </button>

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
          Ainda não tem uma conta?{' '}
          <Link to="/cadastro" className="text-blue-100 underline">Cadastrar</Link>
        </div>
      </div>
    </div>
  );
}
