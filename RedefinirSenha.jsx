import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Key } from 'lucide-react';

export default function RedefinirSenha() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md lg:max-w-xl shadow-lg rounded-lg overflow-hidden">
        <div className="bg-orange-500 p-6 text-center">
          <img
            src="/logo-crateus-shop.png"
            alt="Logo"
            className="mx-auto mb-2 w-16 md:w-20"
          />
        </div>

        <div className="px-6 py-8 md:px-10 bg-white">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
            Redefinição de senha
          </h2>

          <div className="flex justify-center mb-6">
            <Key className="w-12 h-12 text-gray-700" />
          </div>

          <div className="mb-4 relative">
            <Mail className="absolute left-3 top-3.5 text-gray-500" size={18} />
            <input
              type="email"
              placeholder="Digite seu email..."
              className="pl-10 pr-4 py-2 w-full border-b border-gray-400 focus:outline-none"
            />
          </div>

          <div className="mb-4 relative">
            <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua nova senha..."
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

          <div className="mb-6 relative">
            <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Digite sua nova senha novamente..."
              className="pl-10 pr-10 py-2 w-full border-b border-gray-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3.5 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded font-semibold">
            ALTERAR
          </button>
        </div>

        <div className="bg-orange-500 h-4" />
      </div>
    </div>
  );
}
